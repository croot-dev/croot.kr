---
layout: post
title: "TypeScript의 주요 컴파일러 옵션"
created: 2025-02-24
edited: 2026-01-10
category: [기술]
tags: [Engineering:rgb(219 237 219):rgb(28 56 41)]
notion_id: 1a46063e-6590-802c-a0d3-cd74f7247aba
---


# `importsNotUsedAsValues`, `preserveValueImports`, `isolatedModules`, `verbatimModuleSyntax`의 등장 순서와 의미


TypeScript는 다양한 컴파일러 옵션을 통해 개발자가 코드의 빌드 및 트랜스파일 방식을 세밀하게 제어할 수 있도록 해줍니다. 그중에서도 **`importsNotUsedAsValues`**, **`preserveValueImports`**, **`isolatedModules`**, **`verbatimModuleSyntax`**와 같은 옵션들은 JavaScript로 변환될 때의 **타입 처리 및 모듈 변환** 방식에 큰 영향을 미칩니다. 이 옵션들이 어떻게 등장했는지, 각각의 필요성과 설정 방법, 그리고 옵션들 간의 관계에 대해 알아보겠습니다.


---


## 1. `isolatedModules` (TypeScript 3.7)


### 📅 **도입 시기: TypeScript 3.7**


TypeScript 3.7에서 처음 도입된 `isolatedModules` 옵션은 TypeScript 컴파일러가 **모든 모듈을 독립적으로 처리하도록 강제**하는 역할을 합니다. 이는 특히 **Babel, esbuild, SWC와 같은 트랜스파일러**와 함께 사용할 때 중요한 역할을 하며, 개별 파일을 트랜스파일할 수 있도록 설정해 줍니다.


### 🎯 **필요성**


`isolatedModules`가 활성화되면 TypeScript는 **각각의 파일을 독립적으로 컴파일**하도록 강제합니다. 트랜스파일러가 파일 간 종속성을 처리할 수 없을 경우, 이 옵션을 사용해야 합니다. `isolatedModules`를 설정하면 **`const enum`**과 같은 일부 TypeScript 특성이 지원되지 않지만, **Babel과 같은 트랜스파일러와의 호환성**을 보장할 수 있습니다.


### ⚙️ **설정값**


```json
{
  "isolatedModules": true | false
}

```

- `true`: **모든 파일을 개별적으로 트랜스파일**합니다.
- `false`: **파일 간 종속성도 고려하여 트랜스파일**합니다 (기본값).

---


## 2. `importsNotUsedAsValues` (TypeScript 3.8)


### 📅 **도입 시기: TypeScript 3.8**


`importsNotUsedAsValues` 옵션은 **타입 전용 import**가 JavaScript로 변환될 때 어떻게 처리될지를 결정하는 옵션입니다. TypeScript에서 `import type`을 사용하면 **타입만 가져오고 실제 코드에는 영향을 미치지 않기 때문에** 이를 처리하는 방법을 설정할 수 있게 되었습니다.


### 🎯 **필요성**


이 옵션은 TypeScript 코드에서 **타입만 가져오는 import가 최종 JavaScript 코드에 영향을 미칠지 여부**를 결정할 수 있게 해줍니다. 예를 들어, `import type`으로 가져온 타입이 사용되지 않으면 이를 **제거할지, 유지할지** 선택할 수 있습니다.


### ⚙️ **설정값**


```json
{
  "importsNotUsedAsValues": "remove" | "preserve" | "error"
}

```

- `remove`: (기본값) **사용되지 않는 타입 import를 제거**합니다.
- `preserve`: **사용되지 않는 타입 import도 유지**합니다.
- `error`: **타입 import가 있으면 오류를 발생**시킵니다.

---


## 3. `preserveValueImports` (TypeScript 4.5)


### 📅 **도입 시기: TypeScript 4.5**


`preserveValueImports` 옵션은 `importsNotUsedAsValues`와 비슷하지만, **값 기반 import에 대해서도 영향을 미칩니다**. 이 옵션은 사용되지 않는 값 import를 **유지할지 제거할지** 설정할 수 있습니다.


### 🎯 **필요성**


이 옵션은 **값 import와 타입 import** 모두에 영향을 미칩니다. `preserveValueImports: true`로 설정하면, **값으로 사용하는** **`import`****도 코드에서 제거되지 않도록** 유지할 수 있습니다. 이는 **트리 셰이킹**을 조정하거나, 값 기반 import를 유지해야 하는 경우 유용합니다.


### ⚙️ **설정값**


```json
{
  "preserveValueImports": true | false
}

```

- `true`: **사용되지 않는 값 import도 제거하지 않고 유지**합니다.
- `false`: (기본값) **사용되지 않는 값 import를 제거**합니다.

---


## 4. `verbatimModuleSyntax` (TypeScript 5.0)


### 📅 **도입 시기: TypeScript 5.0**


`verbatimModuleSyntax` 옵션은 **ESM(ECMAScript Modules) 구문을 변환하지 않고 그대로 유지**하도록 하는 옵션입니다. 이 옵션은 TypeScript가 **`import`****/****`export`** **구문을 변형하지 않고 그대로 보존**할 수 있도록 해줍니다.


### 🎯 **필요성**


`verbatimModuleSyntax: true`를 설정하면 TypeScript는 **ESM 구문을 그대로 유지**합니다. 이를 통해 **ESM 모듈을 다른 환경에 그대로 적용**할 수 있게 되며, **타입 import**나 **값 import** 모두 변환 없이 유지됩니다. 주로 **ESM 환경**에서 **Babel, Deno, Nuxt 3** 같은 최신 도구들과 함께 사용할 때 유용합니다.


### ⚙️ **설정값**


```json
{
  "verbatimModuleSyntax": true | false
}

```

- `true`: **`import`****/****`export`** **구문을 변환하지 않고 그대로 유지**합니다.
- `false`: (기본값) **구문 최적화 및 변환을 수행**합니다.

---


## 각 옵션들의 관계


### 1. **`isolatedModules`****와** **`verbatimModuleSyntax`**

- `isolatedModules`는 각 파일을 **독립적으로 트랜스파일**하도록 강제하는 옵션입니다. 이 옵션을 활성화하면, TypeScript는 **ESM 구문**을 변환하지 않으므로 `verbatimModuleSyntax`가 유용할 수 있습니다.
- 두 옵션은 **ESM 모듈을 효율적으로 처리**할 때 관련이 있습니다. `isolatedModules: true`로 설정하면 `verbatimModuleSyntax: true`를 사용하여 **변환 없이 모듈을 유지**할 수 있습니다.

### 2. **`importsNotUsedAsValues`****와** **`preserveValueImports`**

- 두 옵션은 **import 처리**에 관련된 옵션입니다. `importsNotUsedAsValues`는 타입 import에, `preserveValueImports`는 **값 import에** 영향을 미칩니다.
- `preserveValueImports`가 활성화되면, **타입 import 외에도 값 import도 코드에서 제거되지 않도록 유지**됩니다. 이는 `importsNotUsedAsValues: "preserve"`와 비슷한 역할을 합니다.

### 3. **`verbatimModuleSyntax`****와** **`preserveValueImports`**

- `verbatimModuleSyntax: true`는 **ESM 구문**을 그대로 유지하는 옵션이고, `preserveValueImports`는 **import된 값을 유지**하는 옵션입니다.
- `verbatimModuleSyntax`를 사용하면 **import 구문**이 그대로 유지되므로, `preserveValueImports`와 함께 사용하여 **사용되지 않는 import도 제거하지 않게** 설정할 수 있습니다.

---


## 결론


TypeScript에서의 `isolatedModules`, `importsNotUsedAsValues`, `preserveValueImports`, `verbatimModuleSyntax`는 모두 **모듈 시스템 및 트랜스파일**과 관련된 중요한 옵션들입니다. 각각의 도입 시기와 필요성에 맞게 설정을 활용하면, **ESM 환경**에서 최적화된 빌드를 할 수 있습니다.

- *`isolatedModules`*는 **파일 단위로 컴파일**을 강제하여 **Babel**과 같은 도구와의 호환성을 확보합니다.
- *`importsNotUsedAsValues`*는 **타입 import**가 코드에서 어떻게 처리될지 결정하며, **`preserveValueImports`*와 연관되어 있습니다.
- *`preserveValueImports`*는 **값 import**까지 유지할 수 있는 설정을 제공하며, **`verbatimModuleSyntax`*는 ESM 구문을 그대로 유지하는 데 도움을 줍니다.

이들 옵션은 각기 다른 환경과 상황에서 매우 중요한 역할을 하므로, **ESM 모듈**을 다룰 때 적절히 설정하여 최적의 결과를 얻을 수 있습니다.

