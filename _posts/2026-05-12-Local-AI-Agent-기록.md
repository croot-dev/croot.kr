---
layout: post
title: "Local AI Agent 기록"
created: 2026-05-12
edited: 2026-05-20
category: [기술]
tags: [Data & AI:rgb(238 224 218):rgb(68 42 30)]
notion_id: 35e6063e-6590-80c0-b225-d26db63887e0
---


---


## 용어 정리


**Harness Engineering**


LLM 기반의 AI 에이전트가 업무를 자율적으로 수행할 때, 안전하고 일관된 결과물을 내도록 통제 시스템(규칙, 도구, 환경)을 설계하는 기술.


단순히 좋은 프롬프트를 작성하는 것을 넘어, 에이전트가 작동하는 '외부 환경(하네스 레이어)'을 구축하여 실패를 줄이고 작업을 완수하게 하는 것이 핵심


**AI Orchastration**


[link_to_page](32c6063e-6590-80c7-a566-c0b73be41c12)


**Agent Harness**


대규모 언어 모델(LLM)을 실제 업무에 활용할 수 있도록 감싸고 제어하는 소프트웨어 인프라 및 환경


**Ollama**


오픈소스 대규모 언어 모델(LLM)을 개인 PC(macOS, Linux, Windows)에서 쉽고 간편하게 실행할 수 있도록 도와주는 무료 오픈소스 플랫폼


**Tool calling**


LLM이 사용자의 입력을 분석한 후, 문제를 해결하는 데 필요한 도구(Tool)를 선택하고, 그 도구에 필요한 입력값(인자)을 구조화된 형태(JSON 등)로 출력하는 능력


**Quantization (양자화)**


FP32(32비트 부동소수점)와 같은 고정밀 가중치 및 활성화 값을 INT8(8비트 정수) 등 낮은 정밀도로 변환하여, 모델의 크기를 줄이고 추론 속도를 높이는 경량화 기술


**Mixture of Experts (MoE)**


거대 언어 모델(LLM)의 계산 효율을 높이기 위해, 하나의 거대한 모델 대신 여러 개의 작은 '전문가' 하위 네트워크를 활용하는 인공지능(AI) 아키텍처


---


## 모델 이름 구조


**기본 구조:** **`모델명-파라미터수-양자화.gguf`**


```text
Qwen3-30B-A3B-Instruct-Q4_K_M.gguf
  │    │    │    │       │  
  │    │    │    │       └ 양자화 방식
  │    │    │    └ 모델용도
  │    │    └ Active 3B: 활성 파라미터 (MoE 구조)
  │    └ 전체 파라미터
  └ 모델명
```


### 모델 명


**일반 목적 모델**

- `Llama` 계열
- `Qwen`
- `Mistral`

**코드 특화 모델**

- `DeepSeek Coder`
- `Qwen Coder`
- `CodeLlama`
- `StarCoder`

**추론 / 분석 특화 모델**

- `DeepSeek R1`
- `QwQ`
- `Mistral Instruct`
- `Llama 2 Chat` / `Llama 3` (추론에 잘 쓰임)

### **파라미터 수**


| 이름       | 의미         | 구분  |
| -------- | ---------- | --- |
| 1B, 4B   | 10억, 40억   | 소형  |
| 7B, 13B  | 70, 130억   | 중형  |
| 30B, 70B | 300억, 700억 | 대형  |
| 100B+    | 1000억 이상   | 초대형 |


### 학습 방식 (training method)


| 이름                | 용도                |
| ----------------- | ----------------- |
| `Base`            | 원시 모델, 파인튜닝 전     |
| `Instruct`        | 지시 따르기            |
| `Chat`            | 대화 최적화            |
| `RLHF`            | 인간 피드백 강화학습       |
| `DPO`             | 선호도 학습 (RLHF 개선판) |
| `RPO`             | 강건성 최적화           |
| `SFT`             | 지도학습 파인튜닝         |
| `Coder`           | 코드 특화             |
| `Math`            | 수학 특화             |
| `Finance`         | 금융 특화             |
| `Medical`         | 의료 특화             |
| `Embed`           | 임베딩 전용 (텍스트 → 벡터) |
| `Reward`          | 보상 모델 (다른 모델 평가용) |
| `Vision` / `VL`   | 이미지 + 텍스트         |
| `Audio`           | 음성 + 텍스트          |
| `Thinking` / `R1` | 추론 강화 (생각 과정 출력)  |


### **양자화 방식 (Quantization)**


예시 : `Q4_K_M`  (양자비트수)_(세부알고리즘)_(크기) 로 구성


**양자 비트 수**


| 이름     | 비트   | 특징            |
| ------ | ---- | ------------- |
| `Q2`   | 2비트  | 매우 작음, 품질 낮음  |
| `Q3`   | 3비트  | 작음            |
| `Q4`   | 4비트  | 표준 ✅          |
| `Q5`   | 5비트  | 품질 좋음         |
| `Q6`   | 6비트  | 원본에 가까움       |
| `Q8`   | 8비트  | 거의 손실 없음      |
| `F16`  | 16비트 | 원본 (양자화 ❌)    |
| `F32`  | 32비트 | 완전 원본 (양자화 ❌) |


**양자화 세부 알고리즘**


| 알고리즘  | 설명                           |
| ----- | ---------------------------- |
| `Q_0` | 값을 균일하게 잘라내는 가장 단순한 방식       |
| `Q_1` | Q_0에 스케일 보정을 추가한 개선판         |
| `Q_K` | K-means로 비슷한 값끼리 묶어 대표값으로 압축 |
| `IQ`  | 중요한 가중치에 더 많은 비트를 주는 지능형 방식  |


**size variant**


| 접미사 | 설명     | 특징             |
| --- | ------ | -------------- |
| `S` | Small  | 더 작음, 품질 약간 낮음 |
| `M` | Medium | 균형 ✅           |
| `L` | Large  | 더 큼, 품질 약간 높음  |


<div class="callout" style="display:flex;width:100%;border-radius:4px;background:rgb(241,241,239);padding: 16px 16px 16px 12px;">
<div style="display:flex;align-items:center;justify-content:center;height:24px;width:24px;border-radius:0.25em;flex-shrink:0;">💡</div>
<div style="white-space:pre-wrap;word-break:break-word;caret-color:rgb(55, 53, 47);margin-left:8px;padding-left:2px;padding-right:2px;">Q6의 경우 size variant가 없음.</div>
</div>


---


## Ollama 사용하기


공식사이트([https://ollama.com/](https://ollama.com/))


### **설치**


```bash
brew install ollama
```


### 모델 다운로드


맥북 에어 M2 라.. 파라미터 빵빵한건 못 돌리겠고 qwen3.5:4b 로 선택


```bash
ollama pull qwen3.5:4b
```


### 실행


```bash
ollama serve
```


### 확인


[http://localhost:11434/](http://localhost:11434/) 접근 후 “Ollama is running” 메시지 확인.


### 중지


```bash
pkill ollama
```


---


## llama.cpp 사용하기


공식사이트([https://ollama.com/](https://ollama.com/))


### **설치**


```bash
brew install llama.cpp
```


### 모델 다운로드


Ollama와 동일한 모델로 HuggingFace를 통해 다운로드


```bash
llama-cli -hf unsloth/Qwen3.5-4B-GGUF:Q4_K_M
```


### 실행


```bash
llama-server -m models/Qwen3.5-4B-Q5_K_M.gguf -c 2048
```


### 확인


[http://localhost:8080/](http://localhost:11434/) 접근 후 “Ollama is running” 메시지 확인.


---


## Ollama vs llama.cpp Benchmark

- Model: **qwen3.5:4b-Q4_K_M**
- Categories: **short, medium, long**
- Run Count:  **3**

```text
SHORT ─────────────────────────────────────────────────────
┌─────────────────────────────┬──────────────┬──────────┬───────────┬────────┬──────┐
│ Prompt                      │ Backend      │ TTFT (s) │ Total (s) │ TPS    │ ±    │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│ 프랑스의 수도는?                │ Ollama       │ 21.014   │ 21.014    │ 12.2   │ 0.1  │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│                             │ llama-server │ 12.016   │ 12.397    │ 19.1   │ 0.3  │
└─────────────────────────────┴──────────────┴──────────┴───────────┴────────┴──────┘

MEDIUM ────────────────────────────────────────────────────
┌─────────────────────────────┬──────────────┬──────────┬───────────┬────────┬──────┐
│ Prompt                      │ Backend      │ TTFT (s) │ Total (s) │ TPS    │ ±    │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│ 문자열을 반대로 뒤집는 Python...  │ Ollama       │ 10.392   │ 28.338    │ 9.3    │ 1.8  │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│                             │ llama-server │ 8.853    │ 22.950    │ 11.2   │ 0.5  │
└─────────────────────────────┴──────────────┴──────────┴───────────┴────────┴──────┘

LONG ──────────────────────────────────────────────────────
┌─────────────────────────────┬──────────────┬──────────┬───────────┬────────┬──────┐
│ Prompt                      │ Backend      │ TTFT (s) │ Total (s) │ TPS    │ ±    │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│ 프랑스 혁명의 원인과 주요 결과를... │ Ollama       │ 28.267   │ 28.267    │ 9.1    │ 0.5  │
├─────────────────────────────┼──────────────┼──────────┼───────────┼────────┼──────┤
│                             │ llama-server │ 19.142   │ 19.142    │ 13.5   │ 0.4  │
└─────────────────────────────┴──────────────┴──────────┴───────────┴────────┴──────┘


┌──────────┬────────────┬──────────────────┬──────────────┬─────────┐
│ Category │ Ollama TPS │ llama-server TPS │ Winner       │ Speedup │
├──────────┼────────────┼──────────────────┼──────────────┼─────────┤
│ short    │ 12.2       │ 19.1             │ llama-server │ 1.57x   │
├──────────┼────────────┼──────────────────┼──────────────┼─────────┤
│ medium   │ 9.3        │ 11.2             │ llama-server │ 1.21x   │
├──────────┼────────────┼──────────────────┼──────────────┼─────────┤
│ long     │ 9.1        │ 13.5             │ llama-server │ 1.49x   │
└──────────┴────────────┴──────────────────┴──────────────┴─────────┘
┌─ Overall ─────────────────────────────────────┐
│ Ollama: 10.2 tok/s   llama-server: 14.6 tok/s │
│                                               │
│ llama-server is 1.43x faster overall.         │
└───────────────────────────────────────────────┘
```


---


---


## 참고


### Hugging Face


	전 세계 개발자와 연구자들이 AI 모델, 데이터셋, 데모 앱을 공유하고 협업하는 **'AI계의 깃허브(GitHub)'**이자 오픈소스 플랫폼


	[https://huggingface.co](https://huggingface.co/)


	모델 유형


	**Base 모델 (Base / Pre-trained Model)**

	- **특징:** 방대한 텍스트 데이터로 "다음 단어 맞추기"를 학습하여 언어의 문법, 지식, 논리를 배운 상태입니다.
	- **동작:** "한국의 수도는"이라고 입력하면, "서울이다"라고 답할 수도 있지만, 이어지는 문맥에 따라 "한국의 수도는 서울이고, 부산은..."과 같이 글을 계속 써 내려갑니다.
	- **장점:** 일반적인 지식이 풍부하고 자유로운 텍스트 생성에 강합니다.
	- **단점:** 사용자의 의도(명령)를 정확히 파악하지 못하고 긴 글을 만들어낼 수 있습니다. [[1](https://blogs.novita.ai/ko/llama-base-vs-instruct-model-understanding-their-differences-and-applications/), [2](https://datasciencebeehive.tistory.com/129), [3](https://jins-sw.tistory.com/entry/LLM-Pretrained-vs-Instruction-Tuned-Model), [4](https://www.youtube.com/shorts/TRVmuskzE5Y)]

	**Instruct 모델 (Instruct / Chat / Fine-tuned Model)**

	- **특징:** Base 모델을 기반으로, 사람의 명령(Instruction)과 그에 대한 모범 답안 데이터를 통해 추가 학습(Instruction Tuning)을 거친 모델입니다.
	- **동작:** "한국의 수도는?"이라고 입력하면, "한국의 수도는 서울입니다."라고 명확하게 답변합니다.
	- **장점:** 챗봇, 번역, 요약, 문장 생성 등 구체적인 명령을 잘 수행합니다.
	- **단점:** Base 모델보다 창의성이 떨어지거나, 학습되지 않은 형식의 응답을 어려워할 수 있습니다. [[1](https://selectstar.ai/glossary/list/instruction-tuning/), [2](https://digitalbourgeois.tistory.com/442), [3](https://www.ibm.com/kr-ko/think/topics/ai-model), [4](https://jins-sw.tistory.com/entry/LLM-Pretrained-vs-Instruction-Tuned-Model), [5](https://jhk0530.medium.com/%EC%B9%B4%EC%B9%B4%EC%98%A4%EC%9D%98-ai-%EB%AA%A8%EB%8D%B8-%EC%B9%B4%EB%82%98%EB%82%98-%EC%8D%A8%EB%B4%84-2882e0e23494)]

	Hugging Face Tasks 정리


	**Multimodal**

	- Audio-Text-to-Text: 음성과 텍스트를 같이 이해해서 텍스트로 답변
	- Image-Text-to-Text: 이미지와 텍스트를 보고 텍스트 생성
	- Image-Text-to-Image: 이미지와 설명을 이용해 새 이미지 생성/수정
	- Image-Text-to-Video: 이미지와 설명으로 영상 생성
	- Visual Question Answering: 이미지를 보고 질문에 답변
	- Document Question Answering: 문서/PDF를 읽고 질문에 답변
	- Video-Text-to-Text: 영상을 보고 텍스트 생성
	- Visual Document Retrieval: 비슷한 문서 이미지를 검색
	- Any-to-Any: 어떤 입력이든 받아 원하는 형태로 변환

	**Computer Vision**

	- Depth Estimation: 이미지에서 거리와 깊이 추정
	- Image Classification: 이미지가 무엇인지 분류
	- Object Detection: 이미지 속 물체 위치와 종류 찾기
	- Image Segmentation: 이미지 영역을 픽셀 단위로 분리
	- Text-to-Image: 글 설명으로 이미지 생성
	- Image-to-Text: 이미지를 설명하는 텍스트 생성
	- Image-to-Image: 이미지를 다른 스타일/형태로 변환
	- Image-to-Video: 이미지를 영상으로 변환
	- Unconditional Image Generation: 조건 없이 랜덤 이미지 생성
	- Video Classification: 영상 내용을 분류
	- Text-to-Video: 글 설명으로 영상 생성
	- Zero-Shot Image Classification: 학습 안 한 대상도 이미지 분류
	- Mask Generation: 객체 영역(mask) 생성
	- Zero-Shot Object Detection: 처음 보는 물체도 탐지
	- Text-to-3D: 글 설명으로 3D 모델 생성
	- Image-to-3D: 이미지를 3D 모델로 변환
	- Image Feature Extraction: 이미지 특징 벡터 추출
	- Keypoint Detection: 관절/얼굴 점 같은 핵심 위치 찾기
	- Video-to-Video: 영상을 다른 영상 스타일로 변환

	**Natural Language Processing**

	- Text Classification: 문장을 카테고리로 분류
	- Token Classification: 단어별 역할이나 태그 분류
	- Table Question Answering: 표 데이터를 보고 질문에 답변
	- Question Answering: 질문에 대한 답 찾기
	- Zero-Shot Classification: 추가 학습 없이 문장 분류
	- Translation: 언어 번역
	- Summarization: 긴 글 요약
	- Feature Extraction: 텍스트 특징 벡터 추출
	- Text Generation: 글 생성
	- Fill-Mask: 빈칸 단어 예측
	- Sentence Similarity: 문장끼리 얼마나 비슷한지 계산
	- Text Ranking: 관련 높은 텍스트 순서 정렬

	**Audio**

	- Text-to-Speech: 글을 음성으로 변환
	- Text-to-Audio: 글로 음악/효과음 생성
	- Automatic Speech Recognition: 음성을 글로 변환(STT)
	- Audio-to-Audio: 오디오를 다른 오디오로 변환
	- Audio Classification: 소리 종류 분류
	- Voice Activity Detection: 사람이 말하는 구간 탐지

	**Tabular**

	- Tabular Classification: 표 데이터 분류 예측
	- Tabular Regression: 표 데이터 숫자 예측
	- Time Series Forecasting: 시간 흐름 데이터를 미래 예측

	**Reinforcement Learning**

	- Reinforcement Learning: 보상을 최대화하도록 학습
	- Robotics: 로봇 움직임과 제어 학습

	**Other**

	- Graph Machine Learning: 연결 관계(그래프) 데이터를 학습
