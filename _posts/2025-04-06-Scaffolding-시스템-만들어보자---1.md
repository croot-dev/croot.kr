---
layout: post
title: "Scaffolding 시스템 만들어보자 - 1"
created: 2025-04-06
edited: 2025-06-20
category: [기술]
tags: [Architecture:rgb(232 222 238):rgb(65 36 84),config:rgb(219 237 219):rgb(28 56 41)]
---


## Prologue


조만간 또 신규 프로젝트 환경 구축을 해야 할 일이 생기게 되었다.


각 조직마다 사내 인프라, 아키텍처, 보안 등 제약사항이 하두 많아서 지속적으로 프로젝트를 시작할 때마다 아주 그냥 늘 새롭고 짜릿하다.

- "ESLint, Prettier 다시 설정해야 하나?"
- "CJS 쓸까 ESM 쓸까? 지난 플젝꺼 그냥 갖다 쓸까?"
- "버전 또 바뀌었네… 올릴까 말까"
- "Tailwind 추가에 ts? 아따 귀찮구만"

이런 반복과 수고를 줄이고, **일관된 개발 환경과 경험**을 제공하기 위해 `@croot/scaffolding` 프로젝트를 시작해보기로 결심함


## 목표: 빠른 구축! 확장성! 지속성!


이 프로젝트의 핵심 목표는 단순하다.


> 모든 프론트엔드 프로젝트를 빠르게, 일관되게, 확장도 가능하고 지속적으로 재사용 가능하게 만든다.


### 주요 해결 과제


| Pain             | Solution         |
| ---------------- | ---------------- |
| 설정 매번 복붙         | 설정 패키지로 모듈화      |
| 스타일, 룰, 타입 다 제각각 | 사내 표준 config로 통일 |
| 프로젝트 별 가이드 다름    | 유연한 config 구성    |
| 좀 더 세련되게…        | CLI로 자동 생성       |


## 구조 Design


pnpm을 이용해서 모노레포로 가져가는게 아무래도 최적이겠지?


### Monorepo 구조


```bash
/packages
  /eslint-config    # ESLint 설정 모듈
  /prettier-config  # Prettier 설정 모듈
  /tsconfig         # TypeScript 설정 모듈
  /create-app       # CLI
/templates
  /react
  /vue
  /next
  /nuxt
```


###  패키지 이름


| 목적          | 패키지명                     |
| ----------- | ------------------------ |
| ESLint 설정   | `@croot/eslint-config`   |
| Prettier 설정 | `@croot/prettier-config` |
| TS 설정       | `@croot/tsconfig`        |
| CLI 도구      | `@croot/create-app`      |


## 네이밍 규칙


모든 이름은 `@croot/` 스코프 하에서 일관성 있게 관리


### ESLint 설정 (`@croot/eslint-config`)


| 파일명                | 설명                |
| ------------------ | ----------------- |
| `base.js`          | 기본 룰셋             |
| `typescript.js`    | TypeScript 룰      |
| `prettier.js`      | Prettier 연동       |
| `eslint.config.js` | v9 flat config 방식 |


### Prettier 설정 (`@croot/prettier-config`)


| 파일명           | 설명               |
| ------------- | ---------------- |
| `index.js`    | 기본 스타일           |
| `tailwind.js` | Tailwind 플러그인 포함 |


### TSConfig 설정 (`@croot/tsconfig`)


| 파일명          | 설명     |
| ------------ | ------ |
| `base.json`  | 공통 설정  |
| `react.json` | React용 |
| `vue.json`   | Vue용   |


## CLI 사용 방식


### 기본 실행


```bash
pnpm create @croot/app my-app
```


### 옵션 선택 가능


```bash
pnpm create @croot/app my-app --type esm --ui react --ts --tailwind
```


혹은 인터랙티브 모드:


```bash
pnpm create @croot/app my-app

? Project Name: my-app
? Framework: React / Vue / Next / Nuxt
? Module Type: ESM / CJS
? Use Typescript? (Y/n)
? Use Tailwind CSS? (Y/n)
```


## ESM / CJS 전환 지원


CLI에서 생성 시 `--type esm` 또는 `--type cjs`를 지정하면,
템플릿 내부 코드(`import/export`, `require/module.exports`) 및 `package.json`의 `type` 필드를 자동으로 변환하도록 지원.


## 확장성 고려


향후에는 다음과 같은 기능도 무리 없이 추가할 수 있도록 설계 필요

- 템플릿 선택 확장: Svelte, Vanilla 등
- 테스트 프레임워크 선택 (`-test vitest`)
- GitHub Actions / CI 설정 자동 포함
