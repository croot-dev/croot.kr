---
layout: post
title: "N사 FrontEnd 직무테스트 복기"
created: 2026-01-26
edited: 2026-01-26
category: [취미]
tags: [Engineering:rgb(219 237 219):rgb(28 56 41)]
notion_id: 2f46063e-6590-8083-9dd3-fe61879df40e
---


## 프롤로그


N사 FrontEnd 직무 테스트를 보며 흔히 예상했던 알고리즘 위주의 시험이 아니라,


**실무 감각을 꽤 체계적으로 확인하려는 과제형 테스트**였다는 점이 인상 깊었다.


Codility 링크가 주어져 자연스럽게 알고리즘 문제를 떠올렸지만, 실제로는 프론트엔드 개발자가 현업에서 마주할 법한 상황을 기반으로 한 과제가 출제되었다.


문제는 총 **4문제**, 제한 시간은 **3시간**, **순서와 관계없이 자유롭게 제출**하는 방식이었다.


> 문제를 반드시 순차적으로 풀어야 한다고 착각하는 바람에, 개인적으로는 꽤 아쉬운 순간도 있었다.


## 문제 구성 요약

1. **폼 유효성 검사**
2. **API 데이터 핸들링**
3. **Queuing API Calls**
4. **Array 프로토타입 확장**

각 문제는 난이도 자체보다도,


**요구사항을 얼마나 정확히 해석하고 예외를 고려했는지**를 보는 느낌이 강했다.


## 1. 폼 유효성 검사


간단한 폼이 주어지고 폼 유효성 결과를 `Boolean` 타입으로 반환하는 함수를 작성하는 문제였다.


### 환경

- html5
- jQuery 2.1

### 특이사항

- 별다른 함정 없이 기본적인 폼 검증 로직을 구현하면 되는 문제
- 전체 테스트 중 가장 워밍업 성격에 가까운 문제였다

---


## 2. API 데이터 핸들링


테스트 API가 주어지고 JSON response 데이터를 이용하여 테이블 구조를 생성하는 문제였다.


### 환경

- ES2020
- jQuery 3.6.0

### 특이사항

- 결과 요구사항에 `thead`, `tbody` 태그가 명시되어 있지 않아 처음엔 꽤 당황했다
- API 설명에는 `headers`, `data`가 모두 포함된다고 되어 있었지만 실제 `fetch` 결과를 확인해보면 `data`만 내려오는 이슈가 있었다
	- 

### 여기서 발생한 문제

- 데이터가 없을 경우, 헤더 열에 빈 `th`를 생성하지 않도록 예외처리를 했더니

	오히려 **테스트 케이스에서 오류**가 발생했다

- 문서상의 키워드(`header` / `headers`) 혼동 가능성도 있었지만, 콘솔에서 Response를 직접 확인해도 `headers`는 존재하지 않았던 것으로 기억한다.

> 이 문제는 시간만 더 있었다면 조금 더 집요하게 디버깅해볼 수 있었을 것 같아 가장 아쉬웠다.


 


---


## 3. Queuing API Calls


최근 프로젝트에서 직접 구현했던 기능과 거의 유사한 문제라,
문제를 보자마자 반가웠던 기억이 난다.


### 환경

- ES2020

### 특이사항

- 성능 최적화는 고려하지 않아도 된다고 명시
- 기존 Queue 로직에 **FIFO / LIFO 옵션**이 추가된 형태

이미 실무에서 다뤄본 경험이 있어서 비교적 수월하게 해결할 수 있었던 문제였다.


---


## 4. Array 프로토타입 확장


Array를 확장하여 몇 가지 기능을 구현하는 문제였다.
처음엔 생각보다 단순해 보여서 의아했지만,
나중에 복기해보니 **꽤 치명적인 Trap들이 숨어 있던 문제** 였다.


### 환경

- ES2020

### 특이사항

- 난이도는 낮아 보이지만, 각각의 구현 항목이 **상당히 다양**
- 특히 `getter`를 활용한 **성능 관점의 평가**가 중요한 포인트였을 것 같다

---


## 가장 아쉬웠던 포인트 – factorial 구현


문제 중 factorial 기능을 구현하는 항목에 힌트로 **`pre-calculated`** 라는 문구가 적혀 있었다.


영어 해석을 정확히 하지 못한 탓에 “단순 함수 호출 형태는 아닌가 보다” 정도로만 이해하고, `object getter`를 활용해 구현했다.


하지만 이 힌트는 **성능 최적화를 위한 결정적인 단서**였다.


### **getter 기반 factorial 구현 (Lazy 계산)**


```javascript
class LazyFactorialArray extends Array {
    get factorial() {
        let result = 1;
        for (let i = 0; i < this.length; i++) {
            result *= this[i];
        }
        return this.length === 0 ? 0 : result;
    }
}

const lazyArr = new LazyFactorialArray();
for (let i = 0; i < 100000; i++) {
    lazyArr.push(1);
}

console.time('Lazy getter (recalculate)');
let sum = 0;
for (let i = 0; i < 100000; i++) {
    sum += lazyArr.factorial;
}
console.timeEnd('Lazy getter (recalculate)');

//Result:
// Lazy getter (recalculate): 10767.262939453125 ms

```


**결과**


```text
Lazy getter (recalculate): 10767 ms
```

- `getter` 호출 시마다 factorial을 **매번 다시 계산**
- 배열이 커질수록 성능이 급격히 저하

### **내부 계산값을 활용한 방식 (Pre-calculated)**


```javascript
class EagerFactorialArray extends Array {
    constructor() {
        super();
        this._factorial = 0;
    }

    push(...items) {
        if (this.length === 0 && this._factorial === 0) {
            this._factorial = 1;
        }

        for (let item of items) {
            this._factorial *= item;
        }
        return super.push(...items);
    }

    get factorial() {
        return this.length === 0 ? 0 : this._factorial;
    }
}

const eagerArr = new EagerFactorialArray();
for (let i = 0; i < 100000; i++) {
    eagerArr.push(1);
}

console.time('Eager getter (precomputed)');
let sum2 = 0;
for (let i = 0; i < 100000; i++) {
    sum2 += eagerArr.factorial;
}
console.timeEnd('Eager getter (precomputed)');

//Result
// Eager getter (precomputed): 2.02783203125 ms
```


**결과**


```text
Eager getter (precomputed): 2 ms
```

- 값 변경 시에만 계산
- `getter`는 단순 반환 역할
- 성능 차이가 **압도적으로 큼**

---


# 회고


이번 테스트를 통해 느낀 점은 단순히 “정답을 맞췄는가”보다도,

- 요구사항을 얼마나 정확히 해석했는지
- 문서와 실제 동작 사이의 차이를 어떻게 대응하는지
- 성능과 설계를 어디까지 고민했는지

를 굉장히 중요하게 보는 시험이었다는 점이다.


특히 2번과 4번 문제는 시간 배분과 힌트 해석에서 더 집중했더라면 결과가 달라졌을 것 같아 아쉬움이 남는다.


그래도 실무에 가까운 문제를 통해 어떤 부분의 디테일이 부족한지를 명확히 돌아볼 수 있었던 경험이었다.

