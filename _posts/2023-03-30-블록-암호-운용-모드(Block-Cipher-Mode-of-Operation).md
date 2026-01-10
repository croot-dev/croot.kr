---
layout: post
title: "블록 암호 운용 모드(Block Cipher Mode of Operation)"
created: 2023-03-30
edited: 2026-01-10
category: [기술]
tags: [Security:rgb(255 226 221):rgb(93 23 21)]
notion_id: a2812670-90e1-4fe2-89ad-71f8d8da7132
---


## 정의


블록 암호 운용 모드는 **고정 길이 블록 단위로 동작하는 블록 암호 알고리즘(BCE)** 을 여러 블록의 평문 데이터에 적용하기 위한 **처리 방식**이다.


대표적인 운용 모드에는 **ECB, CBC, OFB, CFB, CTR** 가 있다.


## 특징

- 블록 암호 자체는 **단일 블록만 암호화 가능**
- 운용 모드는 **여러 블록을 안전하게 연결**
- 대부분 **IV 또는 nonce** 를 사용

## 블록 암호 운용 모드 개념도


![0](/assets/img/2023-03-30-블록-암호-운용-모드(Block-Cipher-Mode-of-Operation).md/0.png)_Untitled.png_


### 용어정리

- I.V ;Initial Vectors
- P ;Plain Text
- C ;Cipher Text
- BCE ;Block Cipher Encrypt
- BCD ;Block Cipher Decrypt

## 블록 암호 운용 모드 유형


### ECB (Electronic Code Book)


**동작 방식**

- 각 평문 블록(P)을 **독립적으로 암호화**
- IV 사용 ❌
- `C = BCE(P, key)`

**특징**

- 동일한 평문 → 동일한 암호문
- 블록 간 연관성 없음

**문제점**

- 평문 패턴이 그대로 노출됨
- 이미지, 구조화된 데이터에 매우 취약

### CBC (Cipher Block Chaining)


**동작 방식**

- 이전 암호문 블록과 현재 평문을 XOR 후 암호화
- 첫 블록은 IV 사용
- `Cₙ = BCE(Pₙ ⊕ Cₙ₋₁, key)`

**특징**

- 동일 평문이라도 암호문 달라짐
- 블록 간 체인 구조

**주의사항**

- IV 재사용 시 보안 취약
- 병렬 복호화 가능 / 병렬 암호화 불가

### OFB (Output Feedback)


**동작 방식**

- 암호화 함수 출력값을 **스트림처럼 사용**
- 평문과 XOR
- `C = P ⊕ Stream`

**특징**

- 암호화/복호화 구조 동일
- 오류 전파 없음

**주의사항**

- IV 재사용 시 **치명적**
- 동기화 깨지면 전체 복호화 실패

### CFB (Cipher Feedback)


**동작 방식**

- 이전 암호문을 입력으로 암호화
- 출력값과 평문 XOR
- 블록 암호를 스트림 암호처럼 사용

**특징**

- 블록 단위 또는 비트 단위 처리 가능
- 암호화/복호화에 BCE 사용

**주의사항**

- 오류 전파 발생
- 병렬 처리 비효율적

### CTR (Counter)


**동작 방식**

- nonce + counter 값을 암호화
- 결과를 평문과 XOR
- `C = P ⊕ BCE(nonce || counter)`

**특징**

- 병렬 암호화/복호화 가능
- 스트림 암호처럼 동작
- 패딩 불필요

**주의사항**

- nonce + counter **절대 재사용 금지**

## 블록 암호 운용 모드 비교


| Mode | IV / Nonce | 병렬 처리  | 보안성 | 실무 사용 |
| ---- | ---------- | ------ | --- | ----- |
| ECB  | ❌          | ⭕      | ❌   | ❌     |
| CBC  | IV         | 복호화만 ⭕ | ⚠️  | ⚠️    |
| OFB  | IV         | ⭕      | ⚠️  | △     |
| CFB  | IV         | ❌      | ⚠️  | △     |
| CTR  | Nonce      | ⭕      | ⭕   | ✅     |

