---
layout: post
title: "AI Orchestration & LangChain"
created: 2026-03-23
edited: 2026-05-20
category: [기술]
tags: [Data & AI:rgb(238 224 218):rgb(68 42 30)]
notion_id: 32c6063e-6590-80c7-a566-c0b73be41c12
---


---


# AI Orchestration


## 등장배경


### 단일 LLM의 한계

- 긴 작업을 여러 단계로 나눠야 할 때
- 최신 정보나 외부 데이터가 필요할 때
- 다른 시스템(DB, API, 파일 등)과 연동해야 할 때
- 서로 다른 전문성이 필요한 작업을 동시에 처리할 때

## 정의


여러 AI 모델, 에이전트, 도구들을 조율하여 복잡한 작업을 자동화하는 아키텍처


**단일 LLM의 한계**를 극복하기 위해 등장. 하나의 모델로는 처리하기 어려운 긴 작업 흐름, 다양한 도구 사용, 병렬 처리 등을 여러 컴포넌트가 협력해서 해결


## 특징

- 복잡한 작업 분해 및 자동화
- 전문화된 모델 조합으로 성능 향상
- 병렬 처리로 속도 개선

## 주요 패턴


### 1. Prompt Chaining


출력이 다음 입력이 되는 순차적 파이프라인입니다.


```text
User Query → LLM A (분석) → LLM B (작성) → LLM C (검토) → Output
```


**사용 예:** 문서 요약 → 번역 → 품질 검수


### 2. Router Pattern


입력을 분류하여 적합한 에이전트로 라우팅합니다.


```text
Input → Router LLM → [전문가 A | 전문가 B | 전문가 C]
```


**사용 예:** 고객 문의를 기술/결제/일반 팀으로 분류


### 3. Parallelization


동시에 여러 에이전트가 작업한 뒤 결과를 병합합니다.


```text
Input → [Agent A | Agent B | Agent C] → Aggregator → Output
```


**사용 예:** 여러 리뷰어가 동시에 코드 검토


### 4. Orchestrator-Subagent


오케스트레이터가 계획을 세우고, 서브에이전트들에게 실행을 위임합니다.


```text
Orchestrator LLM
├── Subagent 1 (웹 검색)
├── Subagent 2 (코드 실행)
└── Subagent 3 (파일 저장)
```


### 5. Evaluator-Optimizer Loop


생성 → 평가 → 재생성을 반복하며 품질을 높입니다.


```text
Generator → Evaluator → [통과 | 재시도] → Output
```


## 핵심 구성 요소


| 컴포넌트              | 역할                  | 예시                    |
| ----------------- | ------------------- | --------------------- |
| **LLM**           | 추론, 계획, 생성          | GPT-4, Claude, Gemini |
| **Tools**         | 웹 검색, 코드 실행, DB 쿼리  | 웹 검색, 코드 실행, DB       |
| **Memory**        | 단기(컨텍스트), 장기(벡터 DB) | 벡터 DB, 컨텍스트 윈도우       |
| **State Manager** | 작업 흐름 상태 추적         | LangGraph, Redis      |
| **Guardrails**    | 입출력 검증, 안전 필터       | NeMo, Llama Guard     |


## 주요 프레임워크

- **LangChain** — 가장 보편적
- **CrewAI** — 역할 기반 멀티 에이전트
- **AutoGen** — 에이전트 간 대화 기반 협업
- **Anthropic Claude** — Tool use + 멀티턴으로 직접 구현 가능
- **MCP (Model Context Protocol)** — 도구/데이터 소스 표준화 연결

## 설계 고려사항

- **레이턴시** — 체인이 길수록 응답 시간 증가
- **비용** — API 호출 횟수 누적
- **오류 전파** — 앞 단계 실패가 전체에 영향
- **디버깅 복잡도** — 중간 상태 추적이 어려움

---


# LangChain Framework


## 정의


LLM을 사용하여 애플리케이션 생성을 단순화하도록 설계된 프레임워크


<div class="callout" style="display:flex;width:100%;border-radius:4px;background:rgb(241,241,239);padding: 16px 16px 16px 12px;">
<div style="display:flex;align-items:center;justify-content:center;height:24px;width:24px;border-radius:0.25em;flex-shrink:0;">💡</div>
<div style="white-space:pre-wrap;word-break:break-word;caret-color:rgb(55, 53, 47);margin-left:8px;padding-left:2px;padding-right:2px;">LangChain의 가장 강력한 기능 중 하나는 에이전트가 <strong>필요한 도구를 스스로 선택해 실행</strong>하도록 만드는 것</div>
</div>


## 핵심 구성 요소


| 구성 요소               | 역할                     | 비유             |
| ------------------- | ---------------------- | -------------- |
| **Model**           | LLM 연결 (Claude, GPT 등) | DB 드라이버        |
| **Prompt Template** | 프롬프트 재사용 가능하게 관리       | React 컴포넌트     |
| **Agent**           | 스스로 도구를 선택해 실행         | 자율 워커          |
| **Chain**           | 여러 단계를 연결              | Express 미들웨어   |
| **Tool**            | 외부 시스템 연동              | REST API 클라이언트 |
| **Memory**          | 대화 상태 유지               | 세션/쿠키          |


## 구현 비교


### **비교1. Anthropic SDK 이용 직접 구현**


```javascript
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function runChain(topic: string) {
  // Step 1: 정보 확인
  const researchResult = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [
      {
        role: "user",
        content: `${topic}에 대해 일정정보를 알려줘`,
      },
    ],
  });
  const research = researchResult.content[0].text;

  // Step 2: 예약 현황표 작성 (이전 단계 결과를 컨텍스트로 전달)
  const draftResult = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 2048,
    messages: [
      {
        role: "user",
        content: `아래 데이터를 바탕으로 방문 계획표를 작성해줘:\n\n${research}`,
      },
    ],
  });
  const draft = draftResult.content[0].text;

  return { research, draft };
}
```


### **비교2. LangChain 을 이용하여 구현**


```javascript
import { ChatAnthropic } from "@langchain/anthropic";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";

const model = new ChatAnthropic({ model: "claude-sonnet-4-20250514" });
const parser = new StringOutputParser();

// 프롬프트 템플릿 정의
const researchPrompt = PromptTemplate.fromTemplate(
  "${topic}에 대해 일정정보를 알려줘"
);

const draftPrompt = PromptTemplate.fromTemplate(
  "아래 데이터를 바탕으로 방문 계획표를 작성해줘:\n\n{research}"
);

// 체인 연결: LCEL (LangChain Expression Language)
const chain = RunnableSequence.from([
  // Step 1: 리서치
  {
    research: researchPrompt.pipe(model).pipe(parser),
    topic: (input) => input.topic,
  },
  // Step 2: 초안 작성 (research 결과가 자동으로 전달됨)
  draftPrompt.pipe(model).pipe(parser),
]);

const result = await chain.invoke({ topic: "AI Orchestration" });
```


### 구현 예제


[https://github.com/croot-dev/langchain-example](https://github.com/croot-dev/langchain-example)

