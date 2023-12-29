---
layout: post
title: "JSON Query Libraries"
date: 2023-12-29
category: [기술]
tags: [JSON,jmespath,jsonpath-plus,json-query,jsonpath]
---


개인 프로젝트 중 JSON 데이터 쿼리 조회가 필요해서 찾아보았다.


## 라이브러리 비교


### npm 다운로드 비교


[https://npmtrends.com/JSONPath-vs-jmespath-vs-jq-vs-json-path-vs-json-query-vs-jsonpath-vs-jsonpath-plus](https://npmtrends.com/JSONPath-vs-jmespath-vs-jq-vs-json-path-vs-json-query-vs-jsonpath-vs-jsonpath-plus)


![0](/assets/img/2023-12-29-JSON-Query-Libraries.md/0.png)


### 성능 비교 검증


쿼리 라이브러리 성능을 비교한 프로젝트를 찾을 수 있었다. [**Json Querying Performance Testing**](https://github.com/andykais/json-querying-performance-testing)


하지만 4년 전에 작성한 것으로 각 라이브러리 버전이 낮아 최신버전으로 업데이트 후 비교해보았다.


> 💡 전체 성능 비교 코드는 아래 Github에서 확인 가능합니다.  
> [`jmespath`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`jsonpath-plus`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`jsonpath`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`map-filter-reduce`](https://github.com/croot-dev/json-querying-performance-testing)[ 성능 비교](https://github.com/croot-dev/json-querying-performance-testing)


	[`jmespath`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`jsonpath-plus`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`jsonpath`](https://github.com/croot-dev/json-querying-performance-testing)[, ](https://github.com/croot-dev/json-querying-performance-testing)[`map-filter-reduce`](https://github.com/croot-dev/json-querying-performance-testing)[ 성능 비교](https://github.com/croot-dev/json-querying-performance-testing)


> 성능 테스트는 각 라이브러리에 대하여 아래와 같이 세가지 쿼리를 실행합니다.

	- `shallow` returns an object inside an array
	- `deep` returns a string from the object inside the array
	- `conditional` filters the results based on which lots have an 'UNKNOWN' street name, then returns an array of coordinates from inside the object

```markdown
# summary

## smallCityLots
┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐
│      (index)      │      shallow      │       deep        │    conditional    │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│     jmespath      │      0.0445       │      0.0299       │      0.0375       │
│    json-query     │      0.0196       │      0.0301       │      0.0186       │
│   jsonpath-plus   │      0.4228       │      0.3999       │      0.1292       │
│     jsonpath      │      1.4185       │      10.9563      │       0.028       │
│ map-filter-reduce │ 'not implemented' │ 'not implemented' │ 'not implemented' │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘
## mediumCityLots
┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐
│      (index)      │      shallow      │       deep        │    conditional    │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│     jmespath      │      0.0375       │      0.0192       │      0.0263       │
│    json-query     │      0.0505       │      0.0584       │      0.0469       │
│   jsonpath-plus   │      1.1017       │      0.8726       │      0.2504       │
│     jsonpath      │      3.2803       │      42.4674      │       0.051       │
│ map-filter-reduce │ 'not implemented' │ 'not implemented' │ 'not implemented' │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘
## largeCityLots
┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐
│      (index)      │      shallow      │       deep        │    conditional    │
├───────────────────┼───────────────────┼───────────────────┼───────────────────┤
│     jmespath      │      0.0178       │       0.031       │      0.0474       │
│    json-query     │     'failed'      │     'failed'      │     'failed'      │
│   jsonpath-plus   │      2.2324       │      2.3612       │      0.4997       │
│     jsonpath      │      9.1876       │     172.0668      │      0.1204       │
│ map-filter-reduce │ 'not implemented' │ 'not implemented' │ 'not implemented' │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘
```


결론적으로 `jmespath` 가 가장 성능이 좋은 결과가 나왔다. 


## jmespath 


파이썬에서 주로 사용하는 JSON 쿼리 라이브러리이다.


### 공식페이지


[https://jmespath.org/](https://jmespath.org/)


### 문법

1. **프로젝션 (Projection):**
	- 문법: `field`
	- 예시: `name`은 JSON 문서에서 `name` 필드의 값을 가져옵니다.
2. **다중 수준 프로젝션:**
	- 문법: `field.subfield`
	- 예시: `person.name`은 `person` 객체의 `name` 필드의 값을 가져옵니다.
3. **와일드카드 (Wildcards):**
	- 문법:
	- 예시: `people[*].name`은 `people` 배열의 모든 요소의 `name` 필드 값을 가져옵니다.
4. **필터링 (Filtering):**
	- 문법: `[?expression]`
	- 예시: `people[?age > 21].name`은 `people` 배열에서 `age`가 21보다 큰 요소의 `name` 값을 가져옵니다.
5. **내장 함수 활용:**
	- 문법: `function(arguments)`
	- 예시: `length(people)`는 `people` 배열의 길이를 반환합니다.
6. **테이블 슬라이싱:**
	- 문법: `[start:end]`
	- 예시: `people[1:3]`는 `people` 배열에서 두 번째부터 세 번째까지의 요소를 가져옵니다.
7. **정렬 및 리버스:**
	- 문법: `sort_by(@, &field)` 또는 `reverse(@)`
	- 예시: `sort_by(people, &age)`는 `age` 필드를 기준으로 `people` 배열을 정렬합니다.

## jsonpath-plus


### 공식페이지


[https://jsonpath-plus.github.io/JSONPath/docs/ts/index.html](https://jsonpath-plus.github.io/JSONPath/docs/ts/index.html)


### 문법

1. **프로젝션 (Projection):**
	- 문법: `$.field`
	- 예시: `$.name`은 JSON 문서에서 최상위 수준의 `name` 필드의 값을 가져옵니다.
2. **다중 수준 프로젝션:**
	- 문법: `$.field.subfield`
	- 예시: `$.person.name`은 `person` 객체의 `name` 필드의 값을 가져옵니다.
3. **와일드카드 (Wildcards):**
	- 문법: `$.*` 또는 `$[*]`
	- 예시: `$.*.name`은 모든 객체의 `name` 필드 값을 가져옵니다.
4. **필터링 (Filtering):**
	- 문법: `$.field[?expression]`
	- 예시: `$.people[?(@.age > 21)].name`은 `people` 배열에서 `age`가 21보다 큰 요소의 `name` 값을 가져옵니다.
5. **내장 함수 활용:**
	- 문법: `$.function(arguments)`
	- 예시: `$.length($.people)`는 `people` 배열의 길이를 반환합니다.
6. **테이블 슬라이싱:**
	- 문법: `$.field[start:end]`
	- 예시: `$.people[1:3]`는 `people` 배열에서 두 번째부터 세 번째까지의 요소를 가져옵니다.
7. **정렬 및 리버스:**
	- 문법: `$..field | sort` 또는 `$..field | reverse`
	- 예시: `$..age | sort`는 `age` 필드를 기준으로 배열을 정렬합니다.
