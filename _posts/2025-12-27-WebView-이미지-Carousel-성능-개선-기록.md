---
layout: post
title: "WebView 이미지 Carousel 성능 개선 기록"
created: 2025-12-27
edited: 2026-01-10
category: [기술]
tags: [Engineering:rgb(219 237 219):rgb(28 56 41),Testing:rgb(227 226 224):rgb(50 48 44)]
notion_id: 2d66063e-6590-8069-810a-f233c26a8dc8
---


---


## 문제 상황


카드 관리 페이지(`/manage-my-card`)에서 Swiper를 사용한 카드 슬라이드를 구현했습니다. 새로운 디자인 이미지를 전달받아 적용하는 과정에서 사용자 조작 시 버벅거림이 심해지는 성능 문제를 발견했습니다.


### 증상

- 사용자 경험: 카드 전환 시 눈에 띄는 버벅거림
- 슬라이드 전환 시 심한 Frame Drop 현상
- 특히 저사양 기기에서 사용 불가 수준
- **Android LogFilter에서 Repainting 경고 감지** ⚠️

### 핵심 질문


> "같은 이미지인데, 포맷(SVG vs PNG)과 렌더링 방식(background vs img tag)에 따라 성능이 달라질까?"


이 질문에 답하기 위해 체계적인 성능 테스트를 진행했습니다.


---


## 테스트 설계


### 테스트 조합


4가지 조합을 비교 테스트했습니다:


| # | 이미지 포맷 | 렌더링 방식         | 구현 방법              |
| - | ------ | -------------- | ------------------ |
| 1 | PNG    | `<img>` tag    | HTML img 요소        |
| 2 | PNG    | CSS background | `background-image` |
| 3 | SVG    | `<img>` tag    | HTML img 요소        |
| 4 | SVG    | CSS background | `background-image` |


### 측정 지표

- 평균 FPS
- 최저 FPS
- Frame Drop (횟수 및 비율)
- Jank Score (ms)
- Jank Score per second (ms)

> 💡 초기에는 Core Web Vitals(LCP, FID, CLS)도 고려했으나, 슬라이드 전환 성능 측정에는 프레임 기반 지표가 더 적합하다고 판단하여 제외했습니다.


### 테스트 방식


### 초기 접근


Claude를 활용해 4가지 조합(PNG/SVG × img/background)을 한 페이지에서 비교할 수 있는 테스트 페이지를 빠르게 작성했습니다.


테스트 결과 정량화를 위해 FPS를 이용하여 `jankScore`를 도출해 비교 하였습니다.


**jankScore 계산식:**


```json
const targetFrameTime = 16.67;  // 60fps 기준 프레임 시간 (ms)

if (delta > targetFrameTime) {
  const jank = delta - targetFrameTime;
  jankScore += jank;
}
```


**설명:**

- **targetFrameTime**: 60fps 기준 한 프레임당 목표 시간 = 16.67ms (1000ms / 60)
- **delta**: 실제 프레임 간 경과 시간
- **jank**: 목표 시간을 초과한 시간 = `delta - 16.67ms`
- **jankScore**: 모든 초과 시간의 누적 합계 (ms)

### 1차 개선: 극한 조건 적용


초기 테스트에서는 조합 간 성능 차이가 뚜렷하게 나타나지 않았습니다. 실제 사용 환경보다 가혹한 조건에서 병목을 드러내기 위해 다음 요소를 추가했습니다:

- 다중 카드 동시 렌더링 (카드 수 증가)
- `box-shadow`, `filter: blur()` 등 GPU 부하 효과
- `transform`, `opacity` 애니메이션 적용

### 2차 개선: 스크롤 연동 테스트로 전환


극한 조건 적용 후에도 정적 상태에서는 차이가 미미했습니다. 그러나 **스크롤 동작 시 프레임 드롭이 급격히 증가**하는 것을 확인했습니다. 실제 Swiper 사용 패턴을 반영하여, 스와이프 동작마다 스크롤이 함께 발생하도록 테스트를 설계했습니다.


### 최종 테스트 시나리오

1. 테스트 방식(이미지 포맷 + 렌더링 방식) 설정 후 "테스트 적용" 클릭
2. "측정값 초기화" 클릭 후 "자동 테스트 시작" 클릭
3. 자동으로 스와이프 50회 수행 (매 스와이프마다 스크롤 연동)
4. 측정 종료 후 결과 확인 및 기록
5. 각 조합별 3회 반복 → 평균값 산출

> 💡 스와이프와 스크롤을 연동한 이유: 실제 카드 관리 페이지에서는 카드 전환 시 화면 스크롤이 함께 발생합니다. 스크롤은 reflow/repaint를 지속적으로 유발하여 렌더링 방식 간 성능 차이를 명확히 드러냅니다.


### 테스트 환경


**Device 1: Galaxy A16**

- OS: Android 16
- Browser 1: Samsung Internet 29
- Browser 2: Google Chrome 143

**Device 2: iPhone 11 Pro**

- OS: iOS 18.5
- Browser: Safari

**Device 3: Redmi Note 13**

- OS: 2.0.208
- Browser 1: Mi Browser 14.48.2
- Browser 2: Google Chrome 143

---


## 테스트 구현


[performance-test.html](https://prod-files-secure.s3.us-west-2.amazonaws.com/8daffe33-d95b-4c96-91e6-1b899bcdb2d7/be7f76b2-7690-41a2-830b-2f1cca0637b2/performance-test.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROSAHAME%2F20260110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260110T085052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVkZFJCIHP8ic5ujXTXiEVojmlyXlx96XHIjUDQGpWNwIhAPw2HXcminPm%2FdV7Qd63xvnECpl2vdqKf9Szmqvdl1nfKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx49CAn4QW2W0a9puMq3AMHCc4JaHohndqRsJhK%2B6Dc2IPN%2FjGfKuwnwyubkJC%2BHsccIT4W18R7WrkTnHK5jYTlNCTbTGdKy1EnHabkp0RWTjFbfamhc4yrHk9RnrVKxcwuJ1Dv0GcKet678cQJ%2FfdnZtpq7Z5h%2FLbviFdIirh5DEQLUn8KtRnB9YLQdUBm%2BitREyJt5eRigeAHP%2FA5fHjUSlD1CGMX0IoS1PRbO64OBIjb33E995cAtphDDw0FzTt4aM9hYPfE%2BLYIW5Xom23WgsrUswJGeRaL4vcV3ul2MLTfTA0CHepTGyVDSHje%2BOE%2BcEowgkTvDnGm%2FDFNmYbB63zBMtX6cyth2bYSXzMGuC9vtL5AWlz9VDQQHiTUw7d5GUdBM2qaSxCYZeEVl49C%2BBGNCGikfBja4Maoc1hXxzZFiicD445uMWZarLYL2oiL9ensjYpkBY2FdFh3AeT%2Fxw%2Fcal66pE8qN5xr3ooA%2FzMHw4APEwPHme5odNRW0Iyna2egPngSkRXaR4r%2F4nKFsnCGkA%2BhFCTfsRApEJLjvQkb8dapZbJ4T%2FDVO3MRD2JxM0vi4Sca7GBqJSPhjMnK3VMeVZhzSBG605rWeKx6koIQX8QR%2Bfmf54dGhd1wjx5Rm8oXCxTdNCghMjDpnYjLBjqkATeDha8ym%2FW48rxEyFy9VQS1p7lYHuiWOaw2PDgj6XgS%2FTE%2FqFTKH9dxyiiCf9RQRwSe11gv2sf5zNHcqJreCstRxqqyOD0yEcyAZuw4PGxCrchSUxc0e8xFOB27m%2BYCpyPX4Be8E50Y7X9jp1%2F3IcwoGHk6JF8ufgvv1htXiloamHrgdwX5OVHIT8xMUFpmkGOuvCFJOuIqWyNNE6IuzH1CIipp&X-Amz-Signature=2f6fa18e529a76303b31870753621dc69558a61ab6da0321c94bfbaf4b4cdfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Case 1. PNG + `<img>` tag


```html
<div class="card png-img">
  <img src="/img/card/img_nfc@2x.png"
       srcset="/img/card/img_nfc.png 1x,
               /img/card/img_nfc@2x.png 2x,
               /img/card/img_nfc@3x.png 3x"
       alt="Card">
  <div class="card-content">
    <div class="card-number">1234 5678 9012 3456</div>
    <div class="card-name">Athens Metro Card</div>
  </div>
</div>

```


### Case 2. PNG + CSS Background


```html
<div class="card png-bg" style="background-image: url(/img/card/img_nfc@2x.png);">
  <div class="card-content">
    <div class="card-number">1234 5678 9012 3456</div>
    <div class="card-name">Athens Metro Card</div>
  </div>
</div>

```


### Case 3. SVG + `<img>` tag


```html
<div class="card svg-img">
  <img src="/img/card/img_nfc.svg" alt="Card">
  <div class="card-content">
    <div class="card-number">1234 5678 9012 3456</div>
    <div class="card-name">Athens Metro Card</div>
  </div>
</div>

```


### Case 4. SVG + CSS Background


```html
<div class="card svg-bg" style="background-image: url(/img/card/img_nfc.svg);">
  <div class="card-content">
    <div class="card-number">1234 5678 9012 3456</div>
    <div class="card-name">Athens Metro Card</div>
  </div>
</div>

```


---


## 테스트 결과


![0](/assets/img/2025-12-27-WebView-이미지-Carousel-성능-개선-기록.md/0.png)_image.png_


### Device 1 - Samsung Internet


| 지표                | PNG + Img Tag | PNG + Background | SVG + Img Tag | SVG + Background |
| ----------------- | ------------- | ---------------- | ------------- | ---------------- |
| 평균 FPS            | 55            | 52               | 43            | 44               |
| 최저 FPS            | 16            | 15               | 5             | 4                |
| Frame Drop        | 372 (124.0%)  | 593 (197.7%)     | 456 (152.0%)  | 443 (147.7%)     |
| Jank Score (ms)   | 3734          | 6729             | 13599         | 12518            |
| Jank Score/s (ms) | 149.25        | 268.83           | 543.27        | 500.03           |


### Device 1 - Google Chrome


| 지표                | PNG + Img Tag | PNG + Background | SVG + Img Tag | SVG + Background |
| ----------------- | ------------- | ---------------- | ------------- | ---------------- |
| 평균 FPS            | 59            | 59               | 53            | 54               |
| 최저 FPS            | 34            | 29               | 6             | 6                |
| Frame Drop        | 258 (86.0%)   | 232 (77.3%)      | 283 (94.3%)   | 263 (87.7%)      |
| Jank Score (ms)   | 1703          | 1331             | 8222          | 8223             |
| Jank Score/s (ms) | 68.08         | 53.23            | 328.55        | 328.7            |


### Device 2 - Apple Safari


| 지표                | PNG + Img Tag | PNG + Background | SVG + Img Tag | SVG + Background |
| ----------------- | ------------- | ---------------- | ------------- | ---------------- |
| 평균 FPS            | 57            | 58               | 56            | 56               |
| 최저 FPS            | 12            | 16               | 8             | 2                |
| Frame Drop        | 96 (32.0%)    | 106 (35.3%)      | 95 (31.7%)    | 63 (21.0%)       |
| Jank Score (ms)   | 3462          | 2405             | 5271          | 12948            |
| Jank Score/s (ms) | 138.27        | 96.04            | 210.48        | 517.09           |


### Device 3 - Mi Browser


| 지표                | PNG + Img Tag | PNG + Background | SVG + Img Tag | SVG + Background |
| ----------------- | ------------- | ---------------- | ------------- | ---------------- |
| 평균 FPS            | 59            | 59               | 58            | 58               |
| 최저 FPS            | 17            | 27               | 18            | 18               |
| Frame Drop        | 110 (36.7%)   | 108 (36%)        | 143 (47.7%)   | 125 (41.7%)      |
| Jank Score (ms)   | 963           | 869              | 1956          | 1970             |
| Jank Score/s (ms) | 38.49         | 34.76            | 78.18         | 78.8             |


### Device 3 - Google Chrome


| 지표                | PNG + Img Tag | PNG + Background | SVG + Img Tag | SVG + Background |
| ----------------- | ------------- | ---------------- | ------------- | ---------------- |
| 평균 FPS            | 58            | 58               | 57            | 57               |
| 최저 FPS            | 26            | 30               | 23            | 18               |
| Frame Drop        | 144 (48%)     | 152 (50.7%)      | 216 (72%)     | 210 (70%)        |
| Jank Score (ms)   | 1198          | 1199             | 2004          | 2063             |
| Jank Score/s (ms) | 47.9          | 47.95            | 80.11         | 82.5             |


### 결과 요약


| 순위 | 조합               | 특징                                  |
| -- | ---------------- | ----------------------------------- |
| 1  | PNG + img tag    | 전 브라우저에서 가장 안정적인 FPS, 낮은 Jank Score |
| 2  | PNG + background | img tag 대비 소폭 성능 저하, 실사용 체감 차이 미미   |
| 3  | SVG + background | PNG 대비 2~4배 높은 Jank Score           |
| 4  | SVG + img tag    | 최저 FPS 급락 현상, Android에서 특히 불안정      |


### 핵심 발견

- SVG는 매 프레임 재계산으로 인해 스크롤/애니메이션 시 성능 저하 심각
- PNG는 디코딩 후 GPU 캐시를 활용하여 일관된 성능 유지
- Samsung Internet이 Chrome 대비 SVG 처리 성능이 현저히 낮음
- Mi Browser가 예상보다 성능이 좋다(?)

---


## 결론 및 적용


### 선택한 방식: PNG + CSS background (image-set)


테스트 결과 PNG + img tag가 가장 좋은 성능을 보였으나, 다음 이유로 PNG + CSS background를 선택했습니다:

- **Side-effect 최소화**: 기존 마크업 구조 유지
- **성능 차이 수용 가능**: img tag와 background 간 실사용 체감 차이 미미
- **반응형 대응**: image-set으로 DPI별 이미지 자동 선택

### 개선 결과

- 카드 전환 시 버벅거림 해소
- Android 저사양 기기에서도 원활한 사용 가능
- Repainting 경고 해소

---


## 참고: 기술적 분석


### SVG 렌더링 과정


```mermaid
flowchart LR
  A[XML 파싱] --> B[DOM 트리 생성]
  B --> C[Style 계산]
  C --> D[Path 계산]
  D --> E[Rasterization]
  E --> F[GPU 전송]
  F --> G[Composite]

```


### PNG 렌더링 과정


```mermaid
flowchart LR
  A[PNG 파일 로드] --> B[디코딩]
  B --> C[픽셀 버퍼 생성]
  C --> D[색상 변환]
  D --> E[GPU 텍스처 업로드]
  E --> F[Composite]

```


**핵심 차이:**

- SVG는 매 프레임마다 파싱 → Path 계산 과정 반복
- PNG는 최초 한 번만 디코딩, 이후 GPU 캐시 사용

### CSS background vs img tag


**background-image 처리 과정**


```mermaid
flowchart LR
  A[Style 재계산] --> B[Repaint 대상 결정]
  B --> C[이미지 로드]
  C --> D[디코딩]
  D --> E[Rasterization]
  E --> F[Paint]
  F --> G[GPU 업로드]
  G --> H[Composite]

```


**img tag 처리 과정**


```mermaid
flowchart LR
  A[HTML Parsing] --> B[DOM Tree 생성]
  B --> C[CSSOM 생성]
  C --> D[Render Tree 생성]
  D --> E[Layout]
  E --> F[이미지 로드]
  F --> G[디코딩]
  G --> H[Rasterization]
  H --> I[Paint]
  I --> J[GPU 업로드]
  J --> K[Composite]

```


**실제 차이:**

- `background-size: cover`, `background-position` 고정 시 성능 차이 미미
- Modern browser는 background도 별도 레이어로 최적화

---

