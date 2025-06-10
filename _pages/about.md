---
layout: content
title: About
permalink: /about/
---

<style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	padding-inline-start: 0;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

.page-description {
	margin-bottom: 2em;
}

.simple-table {
	margin-top: 1em;
	font-size: 0.875rem;
	empty-cells: show;
}
.simple-table td {
	height: 29px;
	min-width: 120px;
}

.simple-table th {
	height: 29px;
	min-width: 120px;
}

.simple-table-header-color {
	background: rgb(247, 246, 243);
	color: black;
}
.simple-table-header {
	font-weight: 500;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	max-height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
	color: rgba(50, 48, 44, 1);
}
.highlight-gray {
	color: rgba(115, 114, 110, 1);
	fill: rgba(115, 114, 110, 1);
}
.highlight-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.highlight-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.highlight-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.highlight-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.highlight-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.highlight-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(205, 60, 58, 1);
	fill: rgba(205, 60, 58, 1);
}
.highlight-default_background {
	color: rgba(50, 48, 44, 1);
}
.highlight-gray_background {
	background: rgba(248, 248, 247, 1);
}
.highlight-brown_background {
	background: rgba(244, 238, 238, 1);
}
.highlight-orange_background {
	background: rgba(251, 236, 221, 1);
}
.highlight-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.highlight-teal_background {
	background: rgba(237, 243, 236, 1);
}
.highlight-blue_background {
	background: rgba(231, 243, 248, 1);
}
.highlight-purple_background {
	background: rgba(248, 243, 252, 1);
}
.highlight-pink_background {
	background: rgba(252, 241, 246, 1);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(115, 114, 110, 1);
	fill: rgba(115, 114, 110, 1);
}
.block-color-brown {
	color: rgba(159, 107, 83, 1);
	fill: rgba(159, 107, 83, 1);
}
.block-color-orange {
	color: rgba(217, 115, 13, 1);
	fill: rgba(217, 115, 13, 1);
}
.block-color-yellow {
	color: rgba(203, 145, 47, 1);
	fill: rgba(203, 145, 47, 1);
}
.block-color-teal {
	color: rgba(68, 131, 97, 1);
	fill: rgba(68, 131, 97, 1);
}
.block-color-blue {
	color: rgba(51, 126, 169, 1);
	fill: rgba(51, 126, 169, 1);
}
.block-color-purple {
	color: rgba(144, 101, 176, 1);
	fill: rgba(144, 101, 176, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(205, 60, 58, 1);
	fill: rgba(205, 60, 58, 1);
}
.block-color-default_background {
	color: inherit;
	fill: inherit;
}
.block-color-gray_background {
	background: rgba(248, 248, 247, 1);
}
.block-color-brown_background {
	background: rgba(244, 238, 238, 1);
}
.block-color-orange_background {
	background: rgba(251, 236, 221, 1);
}
.block-color-yellow_background {
	background: rgba(251, 243, 219, 1);
}
.block-color-teal_background {
	background: rgba(237, 243, 236, 1);
}
.block-color-blue_background {
	background: rgba(231, 243, 248, 1);
}
.block-color-purple_background {
	background: rgba(248, 243, 252, 1);
}
.block-color-pink_background {
	background: rgba(252, 241, 246, 1);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-uiBlue { background-color: undefined; }
.select-value-color-pink { background-color: rgba(225, 136, 179, 0.27); }
.select-value-color-purple { background-color: rgba(168, 129, 197, 0.27); }
.select-value-color-green { background-color: rgba(123, 183, 129, 0.27); }
.select-value-color-gray { background-color: rgba(84, 72, 49, 0.15); }
.select-value-color-translucentGray { background-color: undefined; }
.select-value-color-orange { background-color: rgba(224, 124, 57, 0.27); }
.select-value-color-brown { background-color: rgba(210, 162, 141, 0.35); }
.select-value-color-red { background-color: rgba(244, 171, 159, 0.4); }
.select-value-color-yellow { background-color: rgba(236, 191, 66, 0.39); }
.select-value-color-blue { background-color: rgba(93, 165, 206, 0.27); }
.select-value-color-pageGlass { background-color: undefined; }
.select-value-color-washGlass { background-color: undefined; }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style>

<article id="6da1aae1-8eb9-4626-9588-2fdc7f340fd1" class="page sans"><header><div class="page-header-icon undefined"><span class="icon">📜</span></div><h1 class="page-title">Resume</h1><p class="page-description"></p></header><div class="page-body"><p id="2a8378b5-a87a-42e4-b9a6-48b5d9b69470" class="">
</p><div id="e973115e-3c73-4133-a49a-366961813ebd" class="column-list"><div id="69244a5d-31c8-47eb-bc75-6b3e356fa7f1" style="width:31.25%" class="column"><figure id="046c31ec-749e-40cf-a0fc-ce91ef71639f" class="image"><a href="/assets/about/Mmt-Hardy.png"><img style="width:1266px" src="/assets/about/Mmt-Hardy.png"/></a></figure></div><div id="0d260aec-8bd9-46ff-810c-026141512898" style="width:87.5%" class="column"><h2 id="4a39e173-8aac-4c1b-ade7-3e66dde07d07" class="">Choi Geunho</h2><p id="0d175a40-53c3-4504-a883-52692d32bc81" class="">FrontEnd Developer</p><div id="a929407a-df8a-4ae6-b07d-8506b306d990" class="column-list"><div id="dc72c623-7ee6-4aba-b5a4-2368838f50a5" style="width:100%" class="column"><p id="7e11cb18-2f25-46a7-a4b7-3748c007d321" class=""><mark class="highlight-gray">🏠  고양시 일산</mark></p><p id="1f3d6b17-9dfd-44a7-956d-cb9ce3ea7024" class=""><strong>📧  </strong><a href="mailto:croot.dev@gmail.com">croot.dev@gmail.com</a></p><p id="a2f6e891-2825-427b-a75f-932118402699" class=""><strong>📱   </strong><mark class="highlight-gray">010-4620-2930</mark></p></div><div id="685cf30e-37cd-40ec-b376-51921b6e413d" style="width:100%" class="column"><p id="2076063e-6590-803c-a602-d25036c42ecd" class="">🌐  <a href="https://croot.kr">croot.kr</a></p><p id="2076063e-6590-808b-8555-ef17440c6353" class=""><img alt="favicon" src="/assets/about/favicon.webp" style="width:1em;height:1em"/> <a href="https://github.com/croot-dev">@croot-dev</a></p><p id="2076063e-6590-80b0-ab8f-d8e1593a6339" class=""><img alt="notion-logo" src="/assets/about/notion-logo.webp" style="width:1em;height:1em"/> <a href="https://www.notion.so/976a6ab5f89447ccb04e0ead815fa672?pvs=21">@croot</a></p><p id="2076063e-6590-80fe-b588-fae6134166cc" class="">
</p></div></div></div></div><h2 id="12d7eb09-c6ec-40a5-bc2d-a24a49074d92" class="">Profile Summary</h2><p id="2076063e-6590-80be-89bc-e3486865041f" class="">
</p><p id="2076063e-6590-8002-8065-d4e1c71a7fec" class="">10년 이상의 프론트엔드 경력을 바탕으로, Vue/React 기반의 공통 컴포넌트와 UI 아키텍처를 설계해왔습니다.</p><p id="2076063e-6590-8048-b1a9-eaf6c53e21f9" class="">대규모 서비스에서 <strong>디자인 시스템 구축</strong>, <strong>모듈화된 UI 구조 설계</strong>, <strong>성과 지표 기반의 성능 최적화 </strong>를 수행했으며,</p><p id="2076063e-6590-800b-9697-fe26bd26e915" class="">클린 코드와 유지보수성을 중시하여 코드 품질 관리, 테스트 자동화, Lint 환경 구축 등 팀 개발 문화를 함께 개선해왔습니다.</p><p id="2076063e-6590-8021-8a95-c8167f84d528" class=""><strong>기획–디자인–개발의 협업은 물론, 기술적 의사결정과 장기 유지보수 전략수립</strong>까지 <strong>UI 전반에 대한 주도적 리딩 경험 </strong>을 갖고 있습니다.</p><p id="2076063e-6590-80d3-abb5-e94cff094302" class="">
</p><hr id="846db37c-0554-4211-83bc-92bcfedf1233"/><p id="2076063e-6590-8072-ba53-fc33d4b31f1a" class="">
</p><h2 id="0ced08e5-e2d3-4b6a-a982-eb4ee2849512" class="">Tech Stack</h2><p id="2076063e-6590-8068-80bf-fd2d29ad6d17" class="">■ Language / Backend</p><ul id="2076063e-6590-80a5-9916-ce99593f0842" class="bulleted-list"><li style="list-style-type:disc">JavaScript(ES6+), TypeScript, Node.js, Java, Spring Boot, webRTC</li></ul><p id="2076063e-6590-80da-b2eb-dfa5e288fd4a" class="">■ Framework / Library</p><ul id="2076063e-6590-80a9-b40f-dcddaa085017" class="bulleted-list"><li style="list-style-type:disc">React, Next.js, Vue3, Nuxt3, echarts</li></ul><p id="2076063e-6590-8066-a155-e6e5478ee9c7" class="">■ State Management</p><ul id="2076063e-6590-8099-a6f7-e289db3bd69d" class="bulleted-list"><li style="list-style-type:disc">TanStack Query, Redux-Saga, Zustand, Recoil, Pinia, Vuex</li></ul><p id="2076063e-6590-8023-8639-e900a254e4bd" class="">■ Styling</p><ul id="2076063e-6590-801b-9ed5-c7858e5c788d" class="bulleted-list"><li style="list-style-type:disc">Tailwind CSS, styled-components, Emotion, SCSS, CSS Modules, Scoped CSS</li></ul><p id="2076063e-6590-8078-ae9f-cee6d3629f92" class="">■ Testing &amp; Quality</p><ul id="2076063e-6590-80bf-8bd4-e7e0df14d2db" class="bulleted-list"><li style="list-style-type:disc">Jest, Vitest, Nuxt Testing, ESLint, Prettier, Husky</li></ul><p id="2076063e-6590-8084-a512-e1a66aaa0b73" class="">■ UI / Publishing</p><ul id="2076063e-6590-801c-97f4-f2feed21f4be" class="bulleted-list"><li style="list-style-type:disc">HTML5, CSS3, 반응형 웹, A11y, Semantic Markup, Cross-Browsing, Figma, Zeplin, ECharts, mxGraph, GSAP</li></ul><p id="2076063e-6590-80d4-8e35-e6a40798585c" class="">■ CI/CD &amp; DevOps</p><ul id="2076063e-6590-80af-80d7-e1151e245824" class="bulleted-list"><li style="list-style-type:disc">GitHub Actions, Jenkins, ArgoCD, Docker Compose, AWS, Vercel, Netlify, Webpack, Vite, Esbuild</li></ul><p id="2076063e-6590-808a-ad9d-e4e9fe756d0c" class="">■ Communication / Management</p><ul id="2076063e-6590-80e4-a388-f135cd051109" class="bulleted-list"><li style="list-style-type:disc">Jira, Slack, Notion, Redmine</li></ul><p id="1c06063e-6590-80a6-9521-ea4fb0f23c9b" class="">
</p><hr id="acd89ebc-04a5-4916-b23f-74c7b3aea2d8"/><p id="2076063e-6590-800d-a4fb-e603c9eb2af5" class="">
</p><h2 id="ea5b0b98-d3c6-485e-bade-1f5414c8491d" class=""><strong>Experience</strong></h2><h3 id="4ee4f6bd-0def-4a7c-85e2-b54277c6b870" class=""><strong>프리랜서 | 차장 | 2024.02 - 현재</strong></h3><ul id="1c66063e-6590-80e5-a47f-d9343ea5923f" class="bulleted-list"><li style="list-style-type:disc">그리스 아테네 교통 인프라 시스템 구축 프로젝트 구축 및 운영</li></ul><ul id="1c66063e-6590-805f-a291-ce55bb4343c9" class="bulleted-list"><li style="list-style-type:disc">아이스크림미디어 AI 디지털 교과서 UI 및 차트 컴포넌트 개발 담당</li></ul><h3 id="2076063e-6590-8040-834c-e2118331c530" class="">프리랜서 | Pro | 2023.02 - 2023.08 (7개월)</h3><ul id="2076063e-6590-80a5-8606-e2ded3782561" class="bulleted-list"><li style="list-style-type:disc">S-Core Data Catalog Web 플랫폼 구축 및 유지보수</li></ul><ul id="2076063e-6590-806d-a79b-c61fed2f64fd" class="bulleted-list"><li style="list-style-type:disc">S-Core LowCode 솔루션 개선</li></ul><h3 id="1c66063e-6590-8037-ad95-eb51c213a705" class=""><strong>Humanscape | 시니어 | 2022.02 - 2022.12 (11개월)</strong></h3><ul id="1c66063e-6590-80db-ac69-f29ce59c11e3" class="bulleted-list"><li style="list-style-type:disc">마미박스 관리자 v3 개선 및 글로벌 확산 지원 (다국어, 타임존 대응)</li></ul><ul id="1cc6063e-6590-8071-8f6c-c92b7cbd2b07" class="bulleted-list"><li style="list-style-type:disc">기존 수동 인프라 구성을 CloudFormation 기반 IaC로 전환 및 관리 자동화</li></ul><ul id="1c66063e-6590-8038-9c99-cdd49c362dcc" class="bulleted-list"><li style="list-style-type:disc">Socket 비동기 통신 개선 및 데이터 마이그레이션 자동화 기능 개발 (자동화 처리율 100%)</li></ul><h3 id="1c66063e-6590-80c2-8e21-e97df8761c5e" class="">프리랜서 | 대리 | 2019.08 ~ 2022.02 (2년 6개월)</h3><ul id="1c66063e-6590-80ef-9655-d13b7ca61d19" class="bulleted-list"><li style="list-style-type:disc">LG CNS DAP MLDL 빅데이터 솔루션 구축 및 운영</li></ul><h3 id="1c66063e-6590-80e9-af03-fd4c381788ac" class=""><strong>VIRNECT | 연구원 | 2018.08 - 2019.08  (1년 1개월)</strong></h3><ul id="1c66063e-6590-80f0-a031-c5257898bb31" class="bulleted-list"><li style="list-style-type:disc">WebRTC 기반 화상회의 시스템 UI 개발 및 성능 최적화</li></ul><ul id="1c66063e-6590-8047-9630-da88d62a69d2" class="bulleted-list"><li style="list-style-type:disc">Front-End 개발 가이드 제작 및 환경 구축</li></ul><h3 id="1c66063e-6590-8076-8e54-f9945f220d71" class=""><strong>FUNLAB | 사원 | 2016.11 - 2018.06  (1년 8개월)</strong></h3><ul id="1c66063e-6590-80fb-a9ec-df164c579aa7" class="bulleted-list"><li style="list-style-type:disc">SKBroadband 기업전화 OpenAPI 및 Btv 5.0 셋톱박스 UI 개발</li></ul><ul id="1c66063e-6590-8048-8f19-df0a59734cca" class="bulleted-list"><li style="list-style-type:disc">효성 WARP Web-ATM 프로젝트 개발</li></ul><h3 id="1c66063e-6590-80f8-8bba-c334f47cd9c5" class=""><strong>리젠컴퍼니 | 사원 | 2014.10 - 2016.05 (1년 8개월)</strong></h3><ul id="1c66063e-6590-808b-bf74-d2954705ba7b" class="bulleted-list"><li style="list-style-type:disc">LG전자 B2C 5.0 및 LGInnotek ESL 홈페이지 UI 개발</li></ul><p id="2076063e-6590-8013-8b13-e39c6515196d" class="">
</p><hr id="2076063e-6590-80d2-8625-cc346a89aee4"/><p id="2076063e-6590-80ec-a425-d88438d0c67d" class="">
</p><h2 id="d79a5971-8bbc-42cc-a365-b39abaa21f70" class="">Projects</h2><h3 id="5857146b-f221-422b-a2e9-4c0484fa4ac7" class="block-color-default_background">그리스 아테네 교통 인프라 ABT 시스템 구축</h3><p id="2076063e-6590-80a4-b425-fe3ade61dde0" class=""><em><mark class="highlight-gray">LG CNS / 2024.08 - 현재</mark></em></p><ul id="8c876505-4ddc-4387-8bab-bcc92514883c" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="6da4e2a5-f283-4468-8e5b-9220332058a5" class="bulleted-list"><li style="list-style-type:disc">기술: Nuxt3, SpringBoot, Tekton, Redmine</li></ul><ul id="24c6b14e-c220-40c2-aa3a-aab099e97b1a" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="4f2149f8-01db-4e08-a0ce-ae8c88dc340e" class="bulleted-list"><li style="list-style-type:circle">그리스 아테나 교통시스템 IOS 웹앱 프론트엔드 개발 </li></ul><ul id="2076063e-6590-8081-bca0-ce95cb0f2285" class="bulleted-list"><li style="list-style-type:circle">그리스 아테나 교통시스템 웹 포탈 프론트엔드 개발 </li></ul><ul id="2076063e-6590-808e-b0b6-ef2e4d8c3eb3" class="bulleted-list"><li style="list-style-type:circle">그리스 아테나 교통시스템 WholeSale 웹 프론트엔드 개발</li></ul></li></ul><p id="2076063e-6590-80ef-a8da-fb5d5dd7979a" class="">
</p><h3 id="11d6063e-6590-8055-a762-e3bd916acb75" class="block-color-default_background"><strong>아이스크림미디어 AI 디지털교과서  </strong></h3><p id="d9aa0c12-2c37-4655-a74d-cf1955ea2210" class=""><em><mark class="highlight-gray">아이스크림미디어 / 2024.05 - 2024.08 (4개월)</mark></em></p><ul id="08ebfa3d-0c43-488e-b455-5f9ab622bac8" class="bulleted-list"><li style="list-style-type:disc">역할: Publisher</li></ul><ul id="ae76e34b-3ba2-4367-9c81-9dd58693609f" class="bulleted-list"><li style="list-style-type:disc">기술: Nuxt3, SCSS, Figma</li></ul><ul id="42aa832f-8301-4e47-aab0-a37ebd632860" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="2076063e-6590-80e8-9c29-c0232ad8d950" class="bulleted-list"><li style="list-style-type:circle">영어 파트 학습결과 대시보드 차트 개발 및 시스템 디자인 설계 수정</li></ul></li></ul><p id="2076063e-6590-807e-89d8-e8cf70a22bd8" class="">
</p><h3 id="15a78ff2-a8b6-417c-8efa-a1e292deca84" class="block-color-default_background"><strong>LowCode 솔루션</strong></h3><p id="aa367554-aa3b-4233-8fec-da05f0e82337" class=""><mark class="highlight-gray"><em>에스코어 / 2023.06 - 2023.08 (3개월)</em></mark></p><ul id="beb2d635-f18b-4292-92f7-00eb7bf9b164" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="89ff5480-52ef-4c3c-9026-923eafa7a3f7" class="bulleted-list"><li style="list-style-type:disc">기술: React, Next.js, Vue2, Webpack, 시스템디자인</li></ul><ul id="3bd9366d-af4f-4edf-8023-b53d0600064f" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="2076063e-6590-804e-a823-f4bba4981487" class="bulleted-list"><li style="list-style-type:circle">Java Package Library 관리 기능 개발</li></ul><ul id="2076063e-6590-80fb-b305-c4d1ab31eedd" class="bulleted-list"><li style="list-style-type:circle">메모리 누수 버그픽스 (이벤트핸들러 최적화 등)</li></ul></li></ul><p id="2076063e-6590-8012-ab50-f5be497e53b4" class="">
</p><h3 id="fbc17717-e69a-4680-9e6c-870cfbf72b3f" class="block-color-default_background"><strong>Data Catalog Web 플랫폼</strong></h3><p id="31096b59-fa69-4eb4-8e8a-3194db9a7738" class=""><mark class="highlight-gray"><em>에스코어 / 2023.03 - 2023.05 (3개월)</em></mark></p><ul id="0efbee17-c9e4-4da8-81e9-beba20d0beb1" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="47314413-b40b-4b87-a4b2-403c1c6b95fd" class="bulleted-list"><li style="list-style-type:disc">기술: React16, Storybook, Webpack</li></ul><ul id="22473ea8-4b6e-4567-917e-4057a50dce0a" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="2076063e-6590-80a5-b278-db0c0a26f0c8" class="bulleted-list"><li style="list-style-type:circle">빌드 속도 개선 (ESBuilder 도입) </li></ul><ul id="2076063e-6590-80c5-92f0-d18427be7cb2" class="bulleted-list"><li style="list-style-type:circle">개발 환경 개선 (SourceMap, lint, postcss 등)</li></ul></li></ul><p id="2076063e-6590-80b4-a055-c61188026fba" class="">
</p><h3 id="c5baaaf1-02f8-4f39-8190-937c4473fd2e" class="block-color-default_background"><strong>마미박스 관리자 v3 개선/구축</strong></h3><p id="d7bd61b9-d34f-44b9-a217-29967706a6c4" class=""><mark class="highlight-gray"><em>휴먼스케이프 / 2022.03 - 2022.12 (10개월)</em></mark></p><ul id="a6380194-545d-4b7f-8067-c3b9157ec769" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End PL</li></ul><ul id="3f165b94-746a-42d6-8575-8b45d578a325" class="bulleted-list"><li style="list-style-type:disc">기술: Typescript, React18, Redux-Saga, jQuery, Node.js, AWS EB, S3</li></ul><ul id="d2b1809c-3f87-469c-a03b-6d47771914bf" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="2076063e-6590-80ad-9efd-d99565b1ba71" class="bulleted-list"><li style="list-style-type:circle">글로벌 확산 및 운영 대응 작업 (다국어, 타임존 등)</li></ul><ul id="2076063e-6590-80dd-a1f2-fcc4fca79302" class="bulleted-list"><li style="list-style-type:circle">데이터 마이그레이션 자동화 기능 개발 (CS처리: 0%)</li></ul><ul id="2076063e-6590-80dd-ad6b-fd81ae514950" class="bulleted-list"><li style="list-style-type:circle">Socket 비동기 통신 처리 로직 개선 (오류율: 40% &gt; 0%)</li></ul></li></ul><p id="2076063e-6590-800c-a23b-d582cff52eab" class="">
</p><h3 id="65a9dc76-2cb9-4ec8-af2c-4f649bbbc366" class="block-color-default_background"><strong>DAP MLDL 플랫폼 UI 개발</strong></h3><p id="0b41cddd-d274-48e5-82ec-4323cf7fc119" class=""><mark class="highlight-gray"><em>LG CNS / 2019.08 - 2022.02 (2년 8개월)</em></mark></p><ul id="a652ace9-cc2d-4313-81ce-6a8a2fcf9c69" class="bulleted-list"><li style="list-style-type:disc">역할 : Front-End Dev</li></ul><ul id="63949a67-23b0-44ca-9cfa-600aba1d4919" class="bulleted-list"><li style="list-style-type:disc">기술: Nuxt2, eChart, SCSS, JSP, Jenkins</li></ul><ul id="9e77b155-f598-45cb-8f0f-208cdc1e00b2" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<ul id="2076063e-6590-8039-a65a-e066105b8021" class="bulleted-list"><li style="list-style-type:circle">UI 컴포넌트 구조 설계 및 공통 개발</li></ul><ul id="2076063e-6590-802a-bee8-c4101f532f62" class="bulleted-list"><li style="list-style-type:circle">JSP + Nuxt.js 연계 및 단계적 구조 전환 설계 및 구축</li></ul><ul id="2076063e-6590-808e-b5c4-cad4c9483846" class="bulleted-list"><li style="list-style-type:circle">사용자 별 Widget Dashboard 개발</li></ul></li></ul><p id="2076063e-6590-8006-af22-f23090018ea7" class="">
</p><h3 id="9b8a831d-42fb-4ff7-bf37-29c097601e9a" class="block-color-default_background"><strong>DAP ML 솔루션 UI 개발</strong></h3><p id="01c6036f-f71b-4687-806c-796b542db412" class=""><mark class="highlight-gray"><em>LG CNS / 2019.08 - 2022.02 (2년 8개월)</em></mark></p><ul id="8d63f891-4340-46f9-a2b2-ddf4efe6cab7" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="1d9331ed-9275-41d0-92a6-a453c596ef64" class="bulleted-list"><li style="list-style-type:disc">기술: mxGraph, WebSocket, AlaSQL, STS</li></ul><ul id="1871110f-3bf0-49a6-90f9-af4990d5d131" class="bulleted-list"><li style="list-style-type:disc">주요성과:<ul id="2076063e-6590-801e-85e7-d748ac4101e2" class="bulleted-list"><li style="list-style-type:circle">모델 개발용 Workflow GUI Editor 개발</li></ul><ul id="2076063e-6590-8050-91e3-c0e05d0d038f" class="bulleted-list"><li style="list-style-type:circle">모델 결과 데이터 기반 동적 Chart UI 개발</li></ul><ul id="2076063e-6590-80f3-b958-e1520fed8b5a" class="bulleted-list"><li style="list-style-type:circle">AutoML Pipeline 자동화 UI 개발</li></ul></li></ul><p id="a20523b9-daf6-4026-9915-74eb47ebd2b9" class="">
</p><hr id="94a72bae-2f00-4db3-9ea7-f3ccf0f431d4"/><p id="2076063e-6590-80b7-8870-f4edde373a49" class="">
</p><h2 id="d0ca43b4-da06-4952-8fa3-c4964aa7ae57" class="">Education &amp; Certifications</h2><p id="2076063e-6590-805d-9ba6-dc4a8a43a551" class="">
</p><ul id="1c66063e-6590-80b4-bf23-f2b30ee3d255" class="bulleted-list"><li style="list-style-type:disc">정보통신공학 전공 (학점은행제, 학사), 2012.08</li></ul><ul id="1c66063e-6590-800b-8109-eb57bc1e5393" class="bulleted-list"><li style="list-style-type:disc">데이터분석 준전문가(ADsP), <em><mark class="highlight-gray">2024. 06 - 041010427</mark></em></li></ul><ul id="79780155-a6d7-46f9-aaa4-ab6511a9a8f0" class="bulleted-list"><li style="list-style-type:disc">정보처리기사 , <em><mark class="highlight-gray">2013. 04 - 12203010261O</mark></em></li></ul><ul id="93a46007-df83-4327-88ac-9257852fbf0e" class="bulleted-list"><li style="list-style-type:disc">정보통신산업기사 , <em><mark class="highlight-gray">2010. 03 - 10204012079F</mark></em></li></ul><ul id="c9a763ed-9eb7-4b87-bead-434986806218" class="bulleted-list"><li style="list-style-type:disc">사무자동화산업기사,  <em><mark class="highlight-gray">2013. 04 - 11201012847B</mark></em></li></ul><p id="2076063e-6590-8049-bfc1-dc72eefd6c3e" class="">
</p><hr id="a29efb6f-39bb-4c11-a12f-202aae4dfa03"/><p id="2076063e-6590-8067-b584-ec60672fcf64" class="">
</p><h2 id="1c66063e-6590-8013-a256-d1ceb51c0984" class=""><strong>Etc.</strong></h2><p id="2076063e-6590-805c-8f77-d802cc30eaa7" class="">
</p><ul id="2076063e-6590-8018-a9ff-f7b8276bb29b" class="bulleted-list"><li style="list-style-type:disc">원격 근무 및 글로벌 팀 협업 경험 다수</li></ul><ul id="2076063e-6590-8013-bc96-f87298f271ea" class="bulleted-list"><li style="list-style-type:disc">다문화 팀과의 협업 경험, 비동기 커뮤니케이션 기반 문서/코드 리뷰 중심 협업 수행</li></ul><ul id="2076063e-6590-809a-8279-c04037f1e8fb" class="bulleted-list"><li style="list-style-type:disc">기술 공유/코드 리뷰 문화 주도 및 신규 팀원 온보딩 지원</li></ul><p id="1c66063e-6590-80e6-8c8a-c8dda314bff5" class="">
</p></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span>