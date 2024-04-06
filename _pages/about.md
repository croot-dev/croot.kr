---
layout: content
title: About
permalink: /about/
---

<style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
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
	font-size: 0.875em;
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

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
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
	color: rgba(55, 53, 47, 1);
}
.highlight-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
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
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.highlight-gray_background {
	background: rgba(241, 241, 239, 1);
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
	background: rgba(244, 240, 247, 0.8);
}
.highlight-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.highlight-red_background {
	background: rgba(253, 235, 236, 1);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(120, 119, 116, 1);
	fill: rgba(120, 119, 116, 1);
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
	color: rgba(212, 76, 71, 1);
	fill: rgba(212, 76, 71, 1);
}
.block-color-gray_background {
	background: rgba(241, 241, 239, 1);
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
	background: rgba(244, 240, 247, 0.8);
}
.block-color-pink_background {
	background: rgba(249, 238, 243, 0.8);
}
.block-color-red_background {
	background: rgba(253, 235, 236, 1);
}
.select-value-color-uiBlue { background-color: rgba(35, 131, 226, .07); }
.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }
.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }
.select-value-color-green { background-color: rgba(219, 237, 219, 1); }
.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }
.select-value-color-transparentGray { background-color: rgba(227, 226, 224, 0); }
.select-value-color-translucentGray { background-color: rgba(255, 255, 255, 0.0375); }
.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }
.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }
.select-value-color-red { background-color: rgba(255, 226, 221, 1); }
.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }
.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }
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

<article id="6da1aae1-8eb9-4626-9588-2fdc7f340fd1" class="page sans"><div class="page-body"><p id="2a8378b5-a87a-42e4-b9a6-48b5d9b69470" class="">
</p><div id="e973115e-3c73-4133-a49a-366961813ebd" class="column-list"><div id="69244a5d-31c8-47eb-bc75-6b3e356fa7f1" style="width:31.25%" class="column"><figure id="046c31ec-749e-40cf-a0fc-ce91ef71639f" class="image"><a href="/assets/about/Mmt-Hardy.png"><img style="width:1266px" src="/assets/about/Mmt-Hardy.png"/></a></figure></div><div id="0d260aec-8bd9-46ff-810c-026141512898" style="width:87.5%" class="column"><h2 id="4a39e173-8aac-4c1b-ade7-3e66dde07d07" class="">Choi Geun Ho</h2><p id="0d175a40-53c3-4504-a883-52692d32bc81" class="">FrontEnd Developer</p><div id="a929407a-df8a-4ae6-b07d-8506b306d990" class="column-list"><div id="dc72c623-7ee6-4aba-b5a4-2368838f50a5" style="width:100%" class="column"><p id="1f3d6b17-9dfd-44a7-956d-cb9ce3ea7024" class=""><strong>📧  </strong><a href="mailto:croot.dev@gmail.com">croot.dev@gmail.com</a></p><p id="7e11cb18-2f25-46a7-a4b7-3748c007d321" class=""><mark class="highlight-gray">🏠  고양시 일산</mark></p></div><div id="685cf30e-37cd-40ec-b376-51921b6e413d" style="width:100%" class="column"><p id="a2f6e891-2825-427b-a75f-932118402699" class=""><strong>📱   </strong><mark class="highlight-gray">(010) 6880-2930</mark></p><p id="e68fd44a-9b7f-4582-9020-0c6057a862f2" class="">
</p></div></div></div></div><div id="2f40676b-bf4f-4cfc-a377-727920707b6d" class="column-list"><div id="74b09d8e-c251-441a-8c22-9a89de34c4d3" style="width:33.33333333333333%" class="column"><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="5c360aed-a1e3-4f84-89a4-dbf1418e91f4"><div style="font-size:1.5em"><img class="icon" src="https://github.com/favicon.ico"/></div><div style="width:100%"><a href="https://github.com/croot-dev">Github</a></div></figure></div><div id="ebcefb3a-f9c3-44e2-a829-126a92d8aab7" style="width:33.33333333333333%" class="column"><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="dea7d3f1-21ea-421a-904b-afcc0cfd71da"><div style="font-size:1.5em"><img class="icon" src="/assets/about/safari.png"/></div><div style="width:100%"><a href="https://croot.kr">Blog</a></div></figure></div><div id="b1087b89-4cd6-40d8-9d64-2a5efe48c61a" style="width:33.33333333333333%" class="column"><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="09fee8b1-b418-4caf-a598-b3e2f16ef403"><div style="font-size:1.5em"><img class="icon" src="/assets/about/linkedin.png"/></div><div style="width:100%"><a href="https://www.linkedin.com/in/%EC%B5%9C%EA%B7%BC%ED%98%B8-croot/"><strong>LinkedIn</strong></a></div></figure></div></div><p id="4ebd86be-4a15-4380-871e-6230b06cb859" class=""> </p><h2 id="12d7eb09-c6ec-40a5-bc2d-a24a49074d92" class="">Profile</h2><hr id="d7a2005f-c973-454f-b67d-5956618ac5b4"/><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="86825cca-4e9c-4b84-a6c0-5c6aee24cb57"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/info-alternate_gray.svg"/></div><div style="width:100%">서버와 네트워크 운영부터 출발하여, 현재는 프론트엔드 개발자로서 꾸준히 활동하고 있습니다.<br/>다양한 차트와 대시보드 UI 개발에 대한 경험을 보유하고 있으며, IT의 모든 영역에 관심이 많습니다.<br/>많은 업무 환경에서 얻은 경험을 바탕으로 빠른 학습 능력을 가지고 있고, 클린코드 작성을 선호합니다.<br/></div></figure><p id="60420973-c1e0-47f3-9dfb-8b446aa08397" class="">
</p><h2 id="0ced08e5-e2d3-4b6a-a982-eb4ee2849512" class="">Skills</h2><hr id="846db37c-0554-4211-83bc-92bcfedf1233"/><div id="e5474176-f38d-49ef-9a04-612fcf6dee5e" class="column-list"><div id="ff0e425d-7a0b-4836-ae54-98dcbc971f81" style="width:33.33333333333333%" class="column"><p id="b9d7592f-45d0-4c71-9a6c-c2d2e09597d5" class=""><mark class="highlight-gray"><strong>Vue</strong></mark></p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="85112a62-4edc-434c-aa63-5b06cb59a765"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Vue2 / 3</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="16c26f6b-18ed-45a5-9f86-88b9988bee8e"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Nuxt.js</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="6cc27363-d37a-4f1a-b67d-d728a9562c88"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Vuex</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="d2c5728a-92ec-4d4b-8020-f9681350cb28"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Pinia</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="24bd1d87-aebb-4213-8443-989933320146"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Vite / Webpack</div></figure><p id="c5650c12-5287-4e17-b24f-67ffbe0e8975" class=""><mark class="highlight-gray"><strong>React</strong></mark></p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="23789401-3fea-446f-b29e-ed191a2dccc3"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">React 18</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="05a7767e-3e43-450a-b3d3-17177fcdef63"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">RTK Query</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="85dc83b4-4bd4-49c5-9919-05a9821f4c6f"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Redux-Saga</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="f5672aa7-72ed-4849-890b-bb9c0d827ceb"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Next.js</div></figure></div><div id="b12db0f6-a93d-4d1f-a867-1d0f8c8bae4b" style="width:33.33333333333333%" class="column"><p id="eb4d3a03-4932-45b2-873a-5b983f5ae352" class=""><mark class="highlight-gray"><strong>Library &amp; F/W</strong></mark></p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="fa2a39f4-9483-4a89-89e0-625aa963028e"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Typescript</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="25da10dc-0460-4846-808b-129eafe2c317"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">GraphQL</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="1a622ce5-fa9a-4622-9d79-a46111af93f0"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Node.js</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="1c58d61a-65e0-4195-8adc-263aa744bd13"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">jQuery</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="e70c38e3-c5a3-4d39-a6e8-2c0738c0f592"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Storybook</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="0e0a35ee-10fd-4e50-affd-5928e721a07a"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Figma</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="c515127e-d968-4ae1-a466-0e60a4710b46"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">WebRTC</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="6e1a8561-0ac1-43c9-953a-f1a3c7084597"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Testing</div></figure><p id="34b56352-a862-4d11-920d-ddf3dc90a496" class="">
</p></div><div id="54ace0c7-a25c-4b6e-a3d7-3e6c0b1cbe11" style="width:33.33333333333333%" class="column"><p id="5091a8c2-9e82-410f-9152-d745c6f8a3ad" class=""><mark class="highlight-gray"><strong>커뮤니케이션</strong></mark></p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="871f620e-c821-4157-9c14-207d8de9cccc"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">JIRA</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="60aec9a3-2609-4f41-a340-db7427d3673a"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Redmine</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="80a003da-9e9d-46b0-9268-fcadc29f0963"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">SonarQube</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="a0bb3d09-3f4d-4450-81be-0ad68c9e4752"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Swagger / OpenAPI</div></figure><p id="4e92b70c-90d4-437b-89d5-ace5e306d9b9" class=""><mark class="highlight-gray"><strong>배포</strong></mark></p><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="90f27235-a743-411c-8a92-325def38ff53"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Github Actions</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="03627f24-5aee-4573-b595-8c5133f03d54"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Jenkins</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="93820421-2393-465f-b7c1-c854d948dc8b"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Docker Compose</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="b02b58ff-7fa7-496e-8911-5a91e680f3a7"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">AWS</div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="139067cd-e02d-43f9-80c1-92b0a7f2b129"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/star_gray.svg"/></div><div style="width:100%">Firebase</div></figure><p id="6a3b9f46-b4ac-4cbe-bdb1-83bc7aa190ec" class="">
</p></div></div><p id="ac3e61a3-d68b-4348-aae3-0b62e5f54133" class="">
</p><h2 id="ea5b0b98-d3c6-485e-bade-1f5414c8491d" class="">Work Experience</h2><hr id="acd89ebc-04a5-4916-b23f-74c7b3aea2d8"/><p id="4ee4f6bd-0def-4a7c-85e2-b54277c6b870" class="">총 10년</p><table id="8df3e6b5-1afd-4f8f-b51c-3b8e55e0f81f" class="simple-table"><thead class="simple-table-header"><tr id="79d3ea3e-1320-45db-8167-e60f7a4d1667"><th id="rXLU" class="simple-table-header-color simple-table-header" style="width:149px">기간</th><th id="Fc;H" class="simple-table-header-color simple-table-header" style="width:82px">계약유형</th><th id="SoOb" class="simple-table-header-color simple-table-header" style="width:115px">회사</th><th id="}nKI" class="simple-table-header-color simple-table-header" style="width:115px">부서</th><th id="Zcx:" class="simple-table-header-color simple-table-header" style="width:73px">직급</th><th id="@;cT" class="simple-table-header-color simple-table-header" style="width:173px">담당업무</th></tr></thead><tbody><tr id="463d5f49-6fa9-440e-86a9-de1e77d7de92"><td id="rXLU" class="" style="width:149px">2024.02.~2024.04.<br/><br/><em>(3개월)</em></td><td id="Fc;H" class="" style="width:82px"><mark class="highlight-default">프리랜서</mark></td><td id="SoOb" class="" style="width:115px">누리꿈소프트</td><td id="}nKI" class="" style="width:115px">AI Vision 개발팀</td><td id="Zcx:" class="" style="width:73px">과장</td><td id="@;cT" class="" style="width:173px">AI 검수 솔루션 프론트엔드 개발</td></tr><tr id="0ff0ef2a-06c5-46dd-878a-efb3644c6b5b"><td id="rXLU" class="" style="width:149px">2023.03.~2023.07.<br/><br/><em>(5개월)</em></td><td id="Fc;H" class="" style="width:82px"><mark class="highlight-default">프리랜서</mark></td><td id="SoOb" class="" style="width:115px">에스코어</td><td id="}nKI" class="" style="width:115px">솔루션 개발팀</td><td id="Zcx:" class="" style="width:73px">Pro</td><td id="@;cT" class="" style="width:173px">전사 데이터 카탈로그 플랫폼 프론트엔드 개발</td></tr><tr id="65198c16-4d08-48ee-9301-21adc43b2fb5"><td id="rXLU" class="" style="width:149px">2022.03.~2022.12.<br/><br/><em>(10개월)</em></td><td id="Fc;H" class="" style="width:82px">정규직</td><td id="SoOb" class="" style="width:115px">휴먼스케이프</td><td id="}nKI" class="" style="width:115px">마미박스 Cell</td><td id="Zcx:" class="" style="width:73px">시니어</td><td id="@;cT" class="" style="width:173px">초음파 임베디드 장비 웹 관리자 구축 및 운영</td></tr><tr id="82e29bdc-5dce-4a9b-95e8-573a3dff2f09"><td id="rXLU" class="" style="width:149px">2019.08.~2022.03.<br/><br/><em>(2년 8개월)</em></td><td id="Fc;H" class="" style="width:82px">프리랜서</td><td id="SoOb" class="" style="width:115px">엘지씨엔에스</td><td id="}nKI" class="" style="width:115px">빅데이터플랫폼팀</td><td id="Zcx:" class="" style="width:73px">선임</td><td id="@;cT" class="" style="width:173px">MLDL 플랫폼 프론트엔드 구축 및 운영</td></tr><tr id="c8272b60-be33-4686-9b1a-432256848328"><td id="rXLU" class="" style="width:149px">2018.08.~2019.08.<br/><br/><em>(1년 1개월)</em></td><td id="Fc;H" class="" style="width:82px">정규직</td><td id="SoOb" class="" style="width:115px">버넥트</td><td id="}nKI" class="" style="width:115px">솔루션개발팀</td><td id="Zcx:" class="" style="width:73px">선임</td><td id="@;cT" class="" style="width:173px">AR 솔루션 구축 및 운영</td></tr><tr id="31ef812b-cd45-4e11-8f60-9c48def6e09b"><td id="rXLU" class="" style="width:149px">2016.11.~2018.06.<br/><br/><em>(1년 8개월)</em></td><td id="Fc;H" class="" style="width:82px">정규직</td><td id="SoOb" class="" style="width:115px">펀랩</td><td id="}nKI" class="" style="width:115px">UI개발팀</td><td id="Zcx:" class="" style="width:73px">연구원</td><td id="@;cT" class="" style="width:173px">SI, 프론트엔드 개발 및 웹 퍼블리싱</td></tr><tr id="15f5eaf4-5317-40f6-a991-7b76b4b25377"><td id="rXLU" class="" style="width:149px">2014.10.~2016.05.<br/><br/><em>(1년 8개월)</em></td><td id="Fc;H" class="" style="width:82px">정규직</td><td id="SoOb" class="" style="width:115px">리젠컴퍼니</td><td id="}nKI" class="" style="width:115px">UI개발팀</td><td id="Zcx:" class="" style="width:73px">사원</td><td id="@;cT" class="" style="width:173px">SI, 웹 퍼블리싱</td></tr><tr id="340e7a2b-1de9-4f1e-b46f-82b3924d220e"><td id="rXLU" class="" style="width:149px">2011.05.~2012.05.<br/><br/><em>(1년 1개월)</em></td><td id="Fc;H" class="" style="width:82px">계약직</td><td id="SoOb" class="" style="width:115px">퍼플스톤즈</td><td id="}nKI" class="" style="width:115px">운영팀</td><td id="Zcx:" class="" style="width:73px">사원</td><td id="@;cT" class="" style="width:173px">IDC 운영, 네트워크 및 웹하드 서버관리 등</td></tr></tbody></table><p id="59ecd6e8-78e4-44e1-a026-0c6939b223e4" class="">
</p><h2 id="d79a5971-8bbc-42cc-a365-b39abaa21f70" class="">Projects</h2><hr id="1932f3da-40a9-4223-aec6-1a34d191d2dd"/><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="5857146b-f221-422b-a2e9-4c0484fa4ac7"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>AIMOS AI 차량 검수 솔루션 개선 및 운영</strong><p id="088a9327-9cf1-40aa-a4f5-e72aa95be702" class=""><mark class="highlight-gray"><em>대한제강 / 2024.02 - 2024.04 (3개월)</em></mark></p><hr id="f1585418-a3ff-4dcb-bf21-f43699d7b43b"/><ul id="8c876505-4ddc-4387-8bab-bcc92514883c" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="6da4e2a5-f283-4468-8e5b-9220332058a5" class="bulleted-list"><li style="list-style-type:disc">기술: React18, RTK Query, Vite, Antd-chart, Jenkins, Redmine,</li></ul><ul id="24c6b14e-c220-40c2-aa3a-aab099e97b1a" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<blockquote id="4f2149f8-01db-4e08-a0ce-ae8c88dc340e" class="">사용자 별 대시보드 UI 개발<br/>사용량 조회, 청구 및 결제 관련 페이지 개발<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="15a78ff2-a8b6-417c-8efa-a1e292deca84"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>LowCode 솔루션</strong><p id="aa367554-aa3b-4233-8fec-da05f0e82337" class=""><mark class="highlight-gray"><em>에스코어 / 2023.06 - 2023.08 (3개월)</em></mark></p><hr id="1d063b1b-ac2f-4228-8e39-717900bc0cc5"/><ul id="beb2d635-f18b-4292-92f7-00eb7bf9b164" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="89ff5480-52ef-4c3c-9026-923eafa7a3f7" class="bulleted-list"><li style="list-style-type:disc">기술: Vue2, Webpack, 시스템디자인</li></ul><ul id="3bd9366d-af4f-4edf-8023-b53d0600064f" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<blockquote id="7b359d15-39fc-4318-9dd4-5fcf958f9a08" class="">Java Package Library 관리 기능 개발<br/>메모리 누수 버그픽스 (이벤트핸들러 등)<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="fbc17717-e69a-4680-9e6c-870cfbf72b3f"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>Data Catalog Web 플랫폼</strong><p id="31096b59-fa69-4eb4-8e8a-3194db9a7738" class=""><mark class="highlight-gray"><em>에스코어 / 2023.03 - 2023.05 (3개월)</em></mark></p><hr id="44ce0066-d782-4437-9959-e20a547451d7"/><ul id="0efbee17-c9e4-4da8-81e9-beba20d0beb1" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev</li></ul><ul id="47314413-b40b-4b87-a4b2-403c1c6b95fd" class="bulleted-list"><li style="list-style-type:disc">기술: React16, Storybook, Webpack</li></ul><ul id="22473ea8-4b6e-4567-917e-4057a50dce0a" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<blockquote id="13d71b87-928e-4d3d-b1b8-f0eba3afa115" class="">빌드 속도 개선 (ESBuilder 도입) <br/>개발 환경 개선 (SourceMap 적용, <br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="c5baaaf1-02f8-4f39-8190-937c4473fd2e"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>마미박스 관리자 v3 개선/구축</strong><p id="d7bd61b9-d34f-44b9-a217-29967706a6c4" class=""><mark class="highlight-gray"><em>휴먼스케이프 / 2022.03 - 2022.12 (10개월)</em></mark></p><hr id="fed3f197-03b8-434a-a5e0-9b4f19087aaf"/><ul id="a6380194-545d-4b7f-8067-c3b9157ec769" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End PL</li></ul><ul id="3f165b94-746a-42d6-8575-8b45d578a325" class="bulleted-list"><li style="list-style-type:disc">기술: Typescript, React18, Redux-Saga, jQuery, Node.js, AWS EB, S3</li></ul><ul id="d2b1809c-3f87-469c-a03b-6d47771914bf" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<blockquote id="cdec134c-571c-4e4a-bd9e-7d1e1ad49271" class="">글로벌 확산 및 운영 대응 작업 (다국어, 타임존 등)<br/>데이터 마이그레이션 자동화 기능 개발 (CS처리: 0%)<br/>Socket 비동기 통신 처리 로직 개선 (오류율: 40% &gt; 0%)<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="65a9dc76-2cb9-4ec8-af2c-4f649bbbc366"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>DAP MLDL 플랫폼 UI 개발</strong><p id="0b41cddd-d274-48e5-82ec-4323cf7fc119" class=""><mark class="highlight-gray"><em>LG CNS / 2019.08 - 2022.02 (2년 8개월)</em></mark></p><hr id="428fcbe2-e273-4b4f-b11e-fa629c013918"/><ul id="a652ace9-cc2d-4313-81ce-6a8a2fcf9c69" class="bulleted-list"><li style="list-style-type:disc">역할 : Front-End PL</li></ul><ul id="63949a67-23b0-44ca-9cfa-600aba1d4919" class="bulleted-list"><li style="list-style-type:disc">기술: Nuxt2, eChart, SCSS, JSP, Jenkins</li></ul><ul id="9e77b155-f598-45cb-8f0f-208cdc1e00b2" class="bulleted-list"><li style="list-style-type:disc">주요 성과:<blockquote id="f10fed09-b46f-48c4-a3cf-26e801f57e9a" class="">UI 컴포넌트 구조 설계 및 공통 개발<br/>JSP + Nuxt.js 연계 및 단계적 구조 전환 설계 및 구축<br/>사용자 별 Widget Dashboard 개발<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="9b8a831d-42fb-4ff7-bf37-29c097601e9a"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>DAP ML 솔루션 UI 개발</strong><p id="01c6036f-f71b-4687-806c-796b542db412" class=""><mark class="highlight-gray"><em>LG CNS / 2019.08 - 2022.02 (2년 8개월)</em></mark></p><hr id="043771b8-8bd4-4dee-830f-8a95cc4894fc"/><ul id="8d63f891-4340-46f9-a2b2-ddf4efe6cab7" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End PL</li></ul><ul id="1d9331ed-9275-41d0-92a6-a453c596ef64" class="bulleted-list"><li style="list-style-type:disc">기술: mxGraph, WebSocket, AlaSQL, STS</li></ul><ul id="1871110f-3bf0-49a6-90f9-af4990d5d131" class="bulleted-list"><li style="list-style-type:disc">주요성과:<blockquote id="07cbbfc8-a805-4ce4-ab7c-690334c22191" class="">모델 개발용 Workflow GUI Editor 개발<br/>모델 결과 데이터 기반 동적 Chart UI 개발<br/>AutoML Pipeline 자동화 UI 개발<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="33a14478-cb9d-4922-9b41-95755e2e9c74"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%"><strong>Remote 솔루션 구축</strong><p id="4a3b9bba-b7c6-44c6-b47a-75a886f984eb" class=""><mark class="highlight-gray"><em>VIRNECT / 2018.08 - 2019.08 (1년)</em></mark></p><hr id="6f353cce-0386-4e81-a03e-b90e68563653"/><ul id="14324c31-2e7c-4cfd-9fd4-164bdeaf933f" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End PL</li></ul><ul id="36f567bc-3847-4502-ab1d-a27d72f3d0a8" class="bulleted-list"><li style="list-style-type:disc">기술: Nuxt.js, Vue2, Jest, WebRTC, Socket.io, eChart<blockquote id="1e2ce425-dfe2-4f0a-94a7-109e048e289c" class="">실시간 공유 Drawing UI 개발<br/>WebRTC 기반 P2P 화상회의 시스템 UI개발<br/>Front-End 개발 가이드 작성 및 환경 구축<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="52e8248f-d96b-4da7-9552-edb3d6d9b9a1"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%">SKBroadband 기업전화 OpenAPI<p id="9eb7d46c-7013-4682-8cd0-b6153430eae4" class=""><mark class="highlight-gray"><em>FUNLAB / 2016.11 - 2018.06 (1년 8개월)</em></mark></p><hr id="e7455ff3-c633-4961-952d-dac7ec6b815b"/><ul id="2e860c31-fdfa-4d75-9953-8afd94316ab0" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End PL</li></ul><ul id="a05c8f2a-f103-41c0-9a64-92e2e840cc0c" class="bulleted-list"><li style="list-style-type:disc">기술: Vue2, Webpack, Axios</li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="7b684e48-f61e-44b0-9645-951cae52d323"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%">효성 WARP Web-ATM<p id="779e0736-64e2-4511-b0d9-8afb28dbb31b" class=""><mark class="highlight-gray"><em>FUNLAB / 2017.03 - 2017.09 (6개월)</em></mark></p><hr id="8d7714fe-e643-4031-868d-0464cf6c4674"/><ul id="ea7720d7-0316-4c59-962d-9598365a87ff" class="bulleted-list"><li style="list-style-type:disc">역할: Front-End Dev.</li></ul><ul id="91816b54-75c7-494d-98be-3cb492bcdfd8" class="bulleted-list"><li style="list-style-type:disc">기술: Vue2, Webpack, Vuex, Design System<blockquote id="1929a22a-6c2f-4e9b-8194-1ce0df06585e" class="">Vue Transition 사용한 Interactive UI 개발<br/>Webpack 빌드 환경 설정<br/></blockquote></li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="e10d3a09-ff1a-4c5d-b46f-adbeeb373780"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%">LG전자 B2C 5.0 홈페이지 UI 개발<p id="19204aeb-990d-4d67-bd42-e0955932c6b7" class=""><mark class="highlight-gray"><em>리젠컴퍼니 / 2014.10 - 2016.06 (1년 9개월)</em></mark></p><hr id="336aaaea-8884-463d-9fba-8fc6d40dddef"/><ul id="8ee1a880-b17f-46fe-a044-765d3fa53972" class="bulleted-list"><li style="list-style-type:disc">역할: Publisher</li></ul><ul id="483dfe3a-6dda-4309-bedd-c3556e3e349b" class="bulleted-list"><li style="list-style-type:disc">기술: HTML5, CSS3, CommonJS, jQuery, 적응형 웹</li></ul></div></figure><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="f2490460-86a8-4201-a7f5-9b0c39937d8d"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/briefcase_gray.svg"/></div><div style="width:100%">LGInnotek ESL 홈페이지 UI 개발<p id="b662f66f-0f80-4e8d-9c6c-b37feb2cf21c" class=""><mark class="highlight-gray"><em>리젠컴퍼니 / 2014.10 - 2016.06 (1년 9개월)</em></mark></p><hr id="904c0ba9-fcc7-4bfd-8bb5-1c0b1b5c9cd2"/><ul id="5960ae8d-a06e-4d7a-ad67-6dbea33b7694" class="bulleted-list"><li style="list-style-type:disc">역할: Publisher</li></ul><ul id="a19025e3-e77b-40d6-94d8-3157fa2b7abb" class="bulleted-list"><li style="list-style-type:disc">기술: HTML5, CSS3, jQuery, 반응형 웹</li></ul></div></figure><p id="a20523b9-daf6-4026-9915-74eb47ebd2b9" class="">
</p><h2 id="d0ca43b4-da06-4952-8fa3-c4964aa7ae57" class="">Certifications</h2><hr id="94a72bae-2f00-4db3-9ea7-f3ccf0f431d4"/><ul id="79780155-a6d7-46f9-aaa4-ab6511a9a8f0" class="bulleted-list"><li style="list-style-type:disc">정보처리기사  <mark class="highlight-gray"><em>2013. 04 - 12203010261O</em></mark></li></ul><ul id="93a46007-df83-4327-88ac-9257852fbf0e" class="bulleted-list"><li style="list-style-type:disc">정보통신산업기사  <mark class="highlight-gray"><em>2010. 03 - 10204012079F</em></mark></li></ul><ul id="c9a763ed-9eb7-4b87-bead-434986806218" class="bulleted-list"><li style="list-style-type:disc">사무자동화산업기사  <mark class="highlight-gray"><em>2013. 04 - 11201012847B</em></mark></li></ul><ul id="a49a3493-a7b5-4a9c-b191-2b87e9cd6b5f" class="bulleted-list"><li style="list-style-type:disc">ADsP </li></ul><p id="a29efb6f-39bb-4c11-a12f-202aae4dfa03" class="">
</p><h2 id="8c61efbf-0efe-4206-abc8-fb76d35b6bfb" class="">Education</h2><hr id="9d5c2ff5-d753-45c8-b456-e6a066aa7023"/><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="705bca62-0ca4-4965-ab3b-d38241fd0efc"><div style="font-size:1.5em"><img class="icon" src="https://www.notion.so/icons/school_gray.svg"/></div><div style="width:100%">학점은행제, 정보통신공학<p id="2638c752-373b-499e-b733-ff523e2c2b9f" class=""><mark class="highlight-gray"><em>2012.08 - 2014.08</em></mark></p><hr id="e2cf3785-cae9-4aaf-b1ae-5f5f87318f42"/><ul id="047f1594-04af-4760-af81-a28f080823de" class="bulleted-list"><li style="list-style-type:disc"></li></ul></div></figure><p id="95f34998-28c6-4d0a-ae01-19f67976e7dd" class=""> </p><p id="7ee46c21-7db0-46f2-94ad-bc8c02e6ddb8" class="">
</p></div></article><span class="sans" style="font-size:14px;padding-top:2em"></span>