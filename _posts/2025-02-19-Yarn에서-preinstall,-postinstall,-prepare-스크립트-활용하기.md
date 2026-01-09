---
layout: post
title: "Yarn에서 preinstall, postinstall, prepare 스크립트 활용하기"
created: 2025-02-19
edited: 2025-02-19
category: [기술]
tags: []
notion_id: 19f6063e-6590-80a7-932a-f0eafdebf23c
---


# **Yarn에서 preinstall, postinstall, prepare 스크립트 활용하기**


`yarn install`을 실행할 때 특정 작업을 자동으로 실행하고 싶다면, `preinstall`, `postinstall`, `prepare` 같은 스크립트를 활용할 수 있습니다. 이 글에서는 각각의 역할과 활용 방법을 알아보겠습니다.


## 1. preinstall: 설치 전에 실행


`preinstall` 스크립트는 `yarn install`이 실행되기 직전에 실행됩니다. 보통 환경 설정이나 의존성 검사 등에 사용됩니다.


### 예제


```json
{
  "scripts": {
    "preinstall": "echo '패키지 설치 전 실행됩니다'"
  }
}
```


위처럼 설정하면 `yarn install`을 실행할 때 "패키지 설치 전 실행됩니다"라는 메시지가 출력됩니다.


### 활용 예

- 특정 패키지 설치 여부 검사
- `.npmrc` 또는 `.yarnrc` 설정 파일 동적 생성
- 의존성 버전 체크

## 2. postinstall: 설치 후에 실행


`postinstall` 스크립트는 `yarn install`이 완료된 직후 실행됩니다. 보통 빌드 과정이나 추가적인 설정 작업을 수행할 때 사용됩니다.


### 예제


```json
{
  "scripts": {
    "postinstall": "echo '패키지 설치 후 실행됩니다'"
  }
}
```


### 활용 예

- 프로젝트 자동 빌드 (`yarn build` 실행)
- 환경 변수 설정
- 추가적인 설정 파일 복사

## 3. prepare: 설치 및 배포 전 실행


`prepare` 스크립트는 `yarn install` 이후 실행되며, `npm publish`를 할 때도 실행됩니다. 즉, 패키지를 배포할 때 특정 작업을 실행하고 싶다면 `prepare`를 활용하면 됩니다.


### 예제


```json
{
  "scripts": {
    "prepare": "yarn build"
  }
}
```


### 활용 예

- 패키지 빌드 (TypeScript 컴파일, Webpack 번들링 등)
- Git 설치 시 `husky` 설정 적용

## 4. 세 가지 스크립트 비교


| 스크립트명         | 실행 시점                              | 주요 활용 사례             |
| ------------- | ---------------------------------- | -------------------- |
| `preinstall`  | `yarn install` 실행 직전               | 환경 설정, 의존성 검사        |
| `postinstall` | `yarn install` 실행 직후               | 빌드, 추가 설정 작업         |
| `prepare`     | `yarn install` 후 및 `npm publish` 전 | 패키지 빌드, Git hooks 설정 |


## 마무리


Yarn의 `preinstall`, `postinstall`, `prepare` 스크립트를 활용하면 패키지 설치 시 필요한 작업을 자동화할 수 있습니다. 프로젝트의 요구사항에 맞게 적절한 스크립트를 설정하면 더욱 효율적인 개발 환경을 구축할 수 있습니다. 🚀

