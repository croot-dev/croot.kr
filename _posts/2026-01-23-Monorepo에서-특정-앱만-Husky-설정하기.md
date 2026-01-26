---
layout: post
title: "Monorepo에서 특정 앱만 Husky 설정하기"
created: 2026-01-23
edited: 2026-01-23
category: [기술]
tags: [Engineering:rgb(219 237 219):rgb(28 56 41)]
notion_id: 2f16063e-6590-80c7-9f54-c3b176d5b6b0
---


## 목적


Git 루트와 프론트엔드 앱 디렉토리가 다를 때 Husky와 lint-staged를 설정하는 방법을 기록 📝


---


## 프로젝트 구조


```text
root/                 # Git 루트
├── .git/
├── apps/
│   └── subapp/          # 프론트엔드 앱
│       └── package.json
└── ...
```


## 1. 패키지 설치


### 의존 모듈 추가


```bash
# path: ~/apps/subapp

yarn add -D husky lint-staged
```


### 의존 모듈 추가 확인


```json
// ~/apps/subapp/package.json

{
  "devDependencies": {
	  "husky": "^9.1.7",
	  "lint-staged": "^15.5.2"
  }
}
```


**참고**


<div class="callout" style="display:flex;width:100%;border-radius:4px;background:rgb(241,241,239);padding: 16px 16px 16px 12px;">
<div style="display:flex;align-items:center;justify-content:center;height:24px;width:24px;border-radius:0.25em;flex-shrink:0;">💡</div>
<div style="white-space:pre-wrap;word-break:break-word;caret-color:rgb(55, 53, 47);margin-left:8px;padding-left:2px;padding-right:2px;"><strong>lint-staged란? : </strong>Git에 staged된 파일에만 linter를 실행하는 도구 → 빠르고 효율적</div>
</div>


---


## 2. 모듈 설정


### package.json 설정


```javascript
// ~/apps/subapp/package.json

{
  "scripts": {
    "prepare": "cd ../.. && husky apps/subapp/.husky"
  },
  "lint-staged": {
    "*.{js,ts,vue}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,scss}": [
      "prettier --write"
    ]
  }
}
```


### lint-staged 설정 (Optional)


package.json에서 선언해도 되지만, 나는 package.json이 긴게 싫어서 설정은 따로 파일로 뺐다


해당 파일을 만들면 `package.json` 에서 `lint-staged` 는 빼도 좋다


```json
// ~/apps/subapp/.lintstagedrc

{
  "*.{js,ts,vue}": [
    "eslint --max-warnings=0",
    "prettier --check"
  ],
  "*.{json,md,css,scss}": [
    "prettier --check"
  ]
}
```


### 핵심 포인트

- prepare 스크립트에서 Git 루트로 이동 후 husky 초기화
- .husky 디렉토리 경로를 Git 루트 기준으로 지정

---


## 3. Husky 초기화


### 초기화 명령 실행


```bash
# path: ~/apps/subapp

yarn prepare
```


### 설정파일 생성 확인


`.husky` 폴더에 `_` 이름의 폴더가 자동 생성 된 걸 확인


```text
root/                 # Git 루트
├── .git/
├── apps/
│   └── subapp/          # 프론트엔드 앱
│       ├── .husky/
│       │   └── _/       # husky 설정파일들 
│       └── package.json
	└── ...
```


### hookPath 설정 확인


```bash
git config --get core.hookPath

# apps/subapp/.husky/_
```






---


## 4. pre-commit 훅 생성


.husky/pre-commit 파일을 생성합니다.


```bash
#!/bin/bash

yarn --cwd src/frontend lint-staged
```


실행 권한 부여:


```bash
chmod +x .husky/pre-commit
```


### **핵심 포인트**


`--cwd apps/subapp` : Git 루트에서 실행되므로 프론트엔드 디렉토리를 지정


lint-staged가 실패하면 자동으로 커밋이 차단됨


## 동작 확인


```json
git add .
git commit -m "test commit"
```


staged된 파일에 대해 자동으로 eslint와 prettier가 실행됩니다.


---


## 정리

- `package.json` : husky 초기화 스크립트, lint-staged 규칙 정의
- `.husky/pre-commit` : 커밋 시 lint-staged 실행

Monorepo에서 Git 루트와 앱 디렉토리가 다를 때는 경로 설정에 주의해야 합니다.


prepare 스크립트와 pre-commit 훅 모두 Git 루트 기준으로 경로를 지정하는 것이 핵심

