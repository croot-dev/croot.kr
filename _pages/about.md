---
layout: content
title: About
permalink: /about/
---

<style>
.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 10px;
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

.collection-content td {
	white-space: pre-wrap;
	word-break: break-word;
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
	display: inline-flex;
	align-items: center;
	justify-content: center;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.callout img.notion-static-icon {
	width: 1em;
	height: 1em;
}

.callout p {
	margin: 0;
}

.callout h1,
.callout h2,
.callout h3 {
	margin: 0 0 0.6rem;
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
	font-size: 1em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

blockquote.quote-large {
	font-size: 1.25em;
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

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
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
	color: rgba(44, 44, 43, 1);
}
.highlight-gray {
	color: rgba(125, 122, 117, 1);
	fill: rgba(125, 122, 117, 1);
}
.highlight-brown {
	color: rgba(159, 118, 90, 1);
	fill: rgba(159, 118, 90, 1);
}
.highlight-orange {
	color: rgba(210, 123, 45, 1);
	fill: rgba(210, 123, 45, 1);
}
.highlight-yellow {
	color: rgba(203, 148, 52, 1);
	fill: rgba(203, 148, 52, 1);
}
.highlight-teal {
	color: rgba(80, 148, 110, 1);
	fill: rgba(80, 148, 110, 1);
}
.highlight-blue {
	color: rgba(56, 125, 201, 1);
	fill: rgba(56, 125, 201, 1);
}
.highlight-purple {
	color: rgba(154, 107, 180, 1);
	fill: rgba(154, 107, 180, 1);
}
.highlight-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.highlight-red {
	color: rgba(207, 81, 72, 1);
	fill: rgba(207, 81, 72, 1);
}
.highlight-default_background {
	color: rgba(44, 44, 43, 1);
}
.highlight-gray_background {
	background: rgba(42, 28, 0, 0.07);
}
.highlight-brown_background {
	background: rgba(139, 46, 0, 0.086);
}
.highlight-orange_background {
	background: rgba(224, 101, 1, 0.129);
}
.highlight-yellow_background {
	background: rgba(211, 168, 0, 0.137);
}
.highlight-teal_background {
	background: rgba(0, 100, 45, 0.09);
}
.highlight-blue_background {
	background: rgba(0, 124, 215, 0.094);
}
.highlight-purple_background {
	background: rgba(102, 0, 178, 0.078);
}
.highlight-pink_background {
	background: rgba(197, 0, 93, 0.086);
}
.highlight-red_background {
	background: rgba(223, 22, 0, 0.094);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(125, 122, 117, 1);
	fill: rgba(125, 122, 117, 1);
}
.block-color-brown {
	color: rgba(159, 118, 90, 1);
	fill: rgba(159, 118, 90, 1);
}
.block-color-orange {
	color: rgba(210, 123, 45, 1);
	fill: rgba(210, 123, 45, 1);
}
.block-color-yellow {
	color: rgba(203, 148, 52, 1);
	fill: rgba(203, 148, 52, 1);
}
.block-color-teal {
	color: rgba(80, 148, 110, 1);
	fill: rgba(80, 148, 110, 1);
}
.block-color-blue {
	color: rgba(56, 125, 201, 1);
	fill: rgba(56, 125, 201, 1);
}
.block-color-purple {
	color: rgba(154, 107, 180, 1);
	fill: rgba(154, 107, 180, 1);
}
.block-color-pink {
	color: rgba(193, 76, 138, 1);
	fill: rgba(193, 76, 138, 1);
}
.block-color-red {
	color: rgba(207, 81, 72, 1);
	fill: rgba(207, 81, 72, 1);
}
.block-color-default_background {
	color: inherit;
	fill: inherit;
}
.block-color-gray_background {
	background: rgba(240, 239, 237, 1);
}
.block-color-brown_background {
	background: rgba(245, 237, 233, 1);
}
.block-color-orange_background {
	background: rgba(251, 235, 222, 1);
}
.block-color-yellow_background {
	background: rgba(249, 243, 220, 1);
}
.block-color-teal_background {
	background: rgba(232, 241, 236, 1);
}
.block-color-blue_background {
	background: rgba(229, 242, 252, 1);
}
.block-color-purple_background {
	background: rgba(243, 235, 249, 1);
}
.block-color-pink_background {
	background: rgba(250, 233, 241, 1);
}
.block-color-red_background {
	background: rgba(252, 233, 231, 1);
}
.select-value-color-default { background-color: rgba(42, 28, 0, 0.07); }
.select-value-color-gray { background-color: rgba(28, 19, 1, 0.11); }
.select-value-color-brown { background-color: rgba(127, 51, 0, 0.156); }
.select-value-color-orange { background-color: rgba(196, 88, 0, 0.203); }
.select-value-color-yellow { background-color: rgba(209, 156, 0, 0.282); }
.select-value-color-green { background-color: rgba(0, 96, 38, 0.156); }
.select-value-color-blue { background-color: rgba(0, 118, 217, 0.203); }
.select-value-color-purple { background-color: rgba(92, 0, 163, 0.141); }
.select-value-color-pink { background-color: rgba(183, 0, 78, 0.152); }
.select-value-color-red { background-color: rgba(206, 24, 0, 0.164); }

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
<article id="6da1aae1-8eb9-4626-9588-2fdc7f340fd1" class="page sans" style="margin-left:-1rem;margin-right:-1rem;padding-left:1em;padding-right:1em;"><header><p class="page-description" dir="auto"></p></header><div class="page-body"><div style="display:contents" dir="auto"><div id="e973115e-3c73-4133-a49a-366961813ebd" class="column-list"><div style="display:contents" dir="auto"></div><div style="display:contents" dir="auto"><div id="0d260aec-8bd9-46ff-810c-026141512898" style="width:87.5%" class="column"><div style="display:contents" dir="auto"><h2 id="4a39e173-8aac-4c1b-ade7-3e66dde07d07" class="">Choi Geun ho</h2></div><div style="display:contents" dir="auto"><p id="0d175a40-53c3-4504-a883-52692d32bc81" class="">FrontEnd Developer</p></div><div style="display:contents" dir="auto"><div id="a929407a-df8a-4ae6-b07d-8506b306d990" class="column-list"><div style="display:contents" dir="auto"><div id="dc72c623-7ee6-4aba-b5a4-2368838f50a5" style="width:100%" class="column"><div style="display:contents" dir="auto"><p id="2996063e-6590-8039-841f-c3ca60c2fe29" class="">🎂<mark class="highlight-gray">  1990.05.12</mark></p></div><div style="display:contents" dir="auto"><p id="7e11cb18-2f25-46a7-a4b7-3748c007d321" class=""><mark class="highlight-gray">🏠  고양시</mark></p></div><div style="display:contents" dir="auto"><p id="1f3d6b17-9dfd-44a7-956d-cb9ce3ea7024" class=""><strong>📧  </strong><a href="mailto:croot.dev@gmail.com">croot.dev@gmail.com</a></p></div><div style="display:contents" dir="auto"><p id="a2f6e891-2825-427b-a75f-932118402699" class=""><strong>📱   </strong><mark class="highlight-gray">010-4620-2930</mark></p></div></div></div><div style="display:contents" dir="auto"><div id="685cf30e-37cd-40ec-b376-51921b6e413d" style="width:100%" class="column"><div style="display:contents" dir="auto"><p id="2076063e-6590-803c-a602-d25036c42ecd" class="">🌐  <a href="https://croot.kr">croot.kr</a></p></div><div style="display:contents" dir="auto"><p id="2076063e-6590-808b-8555-ef17440c6353" class=""><img src="data:image/webp;base64,UklGRtoCAABXRUJQVlA4WAoAAAAYAAAAHwAAHwAAQUxQSIQBAAABkGzbtmk78+k8M7Zt1W2naDs1G+cD4tNuKfW0/EBSs23bTg6eMQtr7X32J0TEBMDSmxKcexHHL84FUzw4bJ8JaRlm2qfJ9xOmTPx8q/bX6fB6e4uhn+j001BD+090/Km9kn+d5NNTv+3+nb5D8nq+8ElyDXJXfGP88ML5B//5Z5OH+STpA2ifiDEASgZmA0BW30oAPUTSHshQjkLqroIZeKGyON00JfSmUCbd0rX6JTglULbB4XIlOKf0cVGhnHshkiwX+CBexOItnN4UcbWI3LwV1R8E27ooqBPvbyiLXEyhvH5UuZnl4IxydL7CLemWUZ1fGiktfp5d9pYmJSrBCfLQggfkxwOTqrTy8btfUT8O9K7n30kl90jycrZyjua6XgAOkmHnPr9IzoY61uIAAOQ/IE+i/eYja/K1KtODfIEuX9k0DdaN2tcu0Id9ZdPZLWv35RialK/DYO58n9IzNIuHXWGbf6COZIGhhaz3C5Cy17EwzjX8iYM+cFhSCWPnMlgCVlA4IKoAAACwBQCdASogACAAPnUylUckoqIhMBgIAJAOiWkAA+ROZhvgH6gB2aq9f9PyCSG41KdIAqtwwJgA/vyoUABt/6hiyZse4tMaYII+94ta6g8w5DJHNyaEC3DmjOTuM6A4dPvMJoPmP06asfnJyDSpjO6P3HugDT+GN4k06MhROxBgIqPwG+iKrJxvJxYt7IIs4BI+GuX2mZRQ222SKPjmraOf4mY1pl1zEPFAAEVYSUZ+AAAARXhpZgAASUkqAAgAAAAFABIBAwABAAAAAQAAABoBBQABAAAASgAAABsBBQABAAAAUgAAACgBAwABAAAAAgAAAGmHBAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAAAAgACoAQAAQAAACAAAAADoAQAAQAAACAAAAAAAAAA" style="width:1em;height:1em;margin-right:0.5em;"/><a href="https://github.com/croot-dev">@croot-dev</a></p></div><div style="display:contents" dir="auto"><p id="2ec6063e-6590-80f6-a6ac-f220e5406a3a" class="">
</p></div></div></div></div></div></div></div></div></div><div style="display:contents" dir="auto"><hr id="2e96063e-6590-8092-a5aa-c957ba934a01"/></div><div style="display:contents" dir="auto"><h2 id="12d7eb09-c6ec-40a5-bc2d-a24a49074d92" class="">Profile Summary</h2></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-8035-b21d-f45d7183a3e6" class="">
</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80be-ab91-f8ac24e270f9" class="">10년 이상 프론트엔드 개발 경험을 바탕으로,<br/>레거시 서비스의 구조 개선·성능 최적화·UI 아키텍처 정비를 주력으로 해온 시니어 프론트엔드 개발자입니다.</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8032-9535-f3fefaccd5eb" class="">엔터프라이즈 및 대규모 서비스 환경에서</p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8042-afae-f3d46cca7c28" class="bulleted-list"><li style="list-style-type:disc">복잡한 화면 구조를 컴포넌트 단위로 재설계</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-801e-bd68-e69de6c557ed" class="bulleted-list"><li style="list-style-type:disc">성능 병목 및 오류 원인을 수치 기반으로 개선</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80b5-9c21-e9cba762a7f4" class="bulleted-list"><li style="list-style-type:disc">팀 내 프론트엔드 개발 가이드와 표준 정립</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8028-a3a0-cc801418ce1d" class="">을 통해 “<strong>유지보수 가능한 프론트엔드</strong>”를 만드는 역할을 주로 담당해 왔습니다.</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-801a-8fe0-e9f36827c647" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2e96063e-6590-8010-a35b-d6520de2b848"/></div><div style="display:contents" dir="auto"><h2 id="2996063e-6590-80af-af98-e69a3d936a43" class="">Core skills</h2></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-803c-8812-fdb5a28c93f1" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-80a5-9702-fd5fd58aac34" class="">Frontend</h3></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8031-8959-ecf2a741be59" class="bulleted-list"><li style="list-style-type:disc">React, Next.js, Nuxt2/3, Vue2/3</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80d7-bee8-cc606f4a6a0b" class="bulleted-list"><li style="list-style-type:disc">TypeScript, JavaScript (ES6+)</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80f8-ae78-c2e865a34d8d" class="bulleted-list"><li style="list-style-type:disc">상태 관리: TanStack Query, Redux-Saga, Zustand, Pinia</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80ea-8f5c-f2679c5acc45" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-8008-a009-e372567cdca5" class="">Architecture / Quality</h3></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8036-bc2a-fed9f8f01520" class="bulleted-list"><li style="list-style-type:disc">컴포넌트 설계 및 UI 아키텍처</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80cd-9a7f-dc1d40fdb13e" class="bulleted-list"><li style="list-style-type:disc">성능 최적화 (렌더링, 메모리, 네트워크)</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8008-a9f3-fd7102bee0ed" class="bulleted-list"><li style="list-style-type:disc">테스트 및 코드 품질 관리 (Jest, Vitest, ESLint)<br/></li></ul></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-8085-929e-fdc1569ced26" class="">Collaboration</h3></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8077-940f-c376b6b5d582" class="bulleted-list"><li style="list-style-type:disc">디자인 시스템 협업 (Figma)</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80fe-8441-f7dce3640e1d" class="bulleted-list"><li style="list-style-type:disc">Jira / Notion 기반 협업</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8056-9f03-f813b7da7b70" class="bulleted-list"><li style="list-style-type:disc">프론트엔드 개발 가이드 작성 및 리딩</li></ul></div><div style="display:contents" dir="auto"><p id="1c06063e-6590-80a6-9521-ea4fb0f23c9b" class="">
</p></div><div style="display:contents" dir="auto"><hr id="acd89ebc-04a5-4916-b23f-74c7b3aea2d8"/></div><div style="display:contents" dir="auto"><h2 id="ea5b0b98-d3c6-485e-bade-1f5414c8491d" class=""><strong>Experience</strong></h2></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80e2-a1aa-d83f2946ca7f" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-8019-9f06-f9c8f55e514a" class="">LG CNS | Frontend Engineer (Freelance)</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8022-a0b5-d2d6d2eae095" class="">2024.08 – 2026.01</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-806c-9361-c16f6943c3a7" class=""><strong>프로젝트: 그리스 아테네 교통 인프라 ABT 시스템</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80b0-8aea-ebeda66fcea6" class="bulleted-list"><li style="list-style-type:disc">대규모 교통 인프라 WebApp / Web Portal 프론트엔드 개발</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80f9-b494-f4a0bbf13ac0" class="bulleted-list"><li style="list-style-type:disc">Nuxt3 기반 화면 구조 설계 및 컴포넌트 표준화</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-801f-b65c-ea8f6edd32ac" class="bulleted-list"><li style="list-style-type:disc">다국어 · 현지화 대응 UI 아키텍처 설계</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-807c-8cb8-cc5b8eea1e10" class="bulleted-list"><li style="list-style-type:disc">성능 병목 구간 분석 및 렌더링 최적화</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80b3-badb-c9e65e1704ab" class="bulleted-list"><li style="list-style-type:disc">운영 환경을 고려한 프론트엔드 배포 구조 정비</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-801f-8ee3-f5a98775b60f" class=""><strong>Tech Stack</strong></p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-800e-87f5-c25272769f33" class="">Nuxt3, TypeScript, Spring Boot, ArgoCD, Grafana</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80d0-a5fc-e888aeac4269" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-80a7-b090-c71f9543e7f0" class="">Humanscape | Senior Frontend Engineer</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8084-91f4-eef905b823c3" class="">2022.02 – 2022.12</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8034-b14a-f3e4d4891601" class=""><strong>프로젝트: 마미박스 관리자 서비스</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8034-9dfc-e10548d7c564" class="bulleted-list"><li style="list-style-type:disc">관리자 서비스 v3 구조 개선 및 글로벌 서비스 확장 대응</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8054-ab4a-edd18564d1ba" class="bulleted-list"><li style="list-style-type:disc">다국어 / 타임존 대응 UI 구조 설계</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-806c-b1ba-c1f8a6e53147" class="bulleted-list"><li style="list-style-type:disc">Socket 기반 비동기 통신 로직 개선<br/>→ <strong>오류율 40% → 0%</strong></li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8080-928b-c9bf57359442" class="bulleted-list"><li style="list-style-type:disc">데이터 마이그레이션 자동화 기능 개발<br/>→ <strong>CS 대응률 0% 달성</strong></li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8018-ad00-cfa46f0ce9de" class="bulleted-list"><li style="list-style-type:disc">프론트엔드 기술 의사결정 및 개발 리딩</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-808e-8ddd-faeb11773b4c" class=""><strong>Tech Stack</strong></p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8032-8f0c-f98db5eb238c" class="">React, TypeScript, Redux-Saga, Node.js, AWS (Amplify, Lambda), GitHub Actions</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-803d-9ddc-fe7771b8f134" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-802c-856e-f570949f28c5" class="">LG CNS | Frontend Engineer (Freelance)</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80c1-86bf-e4037ab6483a" class="">2019.08 – 2022.02</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80a1-96ce-fda3b0b1adfc" class=""><strong>프로젝트: DAP MLDL / AutoML 플랫폼</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8090-b9c2-c7d6d9b6ac64" class="bulleted-list"><li style="list-style-type:disc">엔터프라이즈 빅데이터·AI 플랫폼 프론트엔드 개발</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80e1-ac1a-ca61dfd7f443" class="bulleted-list"><li style="list-style-type:disc">공통 UI 컴포넌트 구조 설계 및 재사용 체계 구축</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-809d-8de0-fa040b52b53a" class="bulleted-list"><li style="list-style-type:disc">JSP 기반 레거시 화면을 Nuxt 기반 구조로 단계적 전환</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8048-8da6-ed30d130acf9" class="bulleted-list"><li style="list-style-type:disc">사용자 맞춤형 대시보드 UI 개발</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80ff-9c2d-fffd865a6eb8" class="bulleted-list"><li style="list-style-type:disc">모델 개발 Workflow GUI Editor 구현</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-801a-a5af-e60f4bd811de" class="bulleted-list"><li style="list-style-type:disc">AutoML 결과 시각화를 위한 동적 Chart UI 개발</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-807c-8f30-d4faf823b005" class=""><strong>Tech Stack</strong></p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8099-ad86-f3956f3aadff" class="">Nuxt2, JavaScript, SCSS, JSP, Webpack, Jenkins, Grafana, mxGraph</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-800e-9d56-dc9eff625a4a" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-8009-84c6-e5d81f1f357b" class="">VIRNECT | Frontend Engineer</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8009-b9ee-e7628d842e1e" class="">2018.08 – 2019.08</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80df-8fcc-d8f3a50cda24" class=""><strong>프로젝트: RemoteAR 원격 협업 솔루션</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80e3-9abd-f08dbdb668e6" class="bulleted-list"><li style="list-style-type:disc">WebRTC 기반 원격 협업 솔루션 프론트엔드 개발</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80c5-b117-ddf6f14ea086" class="bulleted-list"><li style="list-style-type:disc">실시간 영상 스트리밍 및 Canvas 기반 협업 UI 구현</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8024-b399-cd9a515cb351" class="bulleted-list"><li style="list-style-type:disc">프론트엔드 빌드 환경(Webpack) 구성</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8088-b02b-dd83a1465a93" class="bulleted-list"><li style="list-style-type:disc">프론트엔드 개발 가이드 문서 작성</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-801f-8def-f0c2c1fb7ac1" class=""><strong>Tech Stack</strong></p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80f6-bdb2-d9960dde693a" class="">Vue, JavaScript, WebRTC, HTML5, CSS3, Webpack, GitHub Actions</p></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-807b-8c54-f43344a7ba5f" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2e96063e-6590-8073-9985-f7f562a12d27"/></div><div style="display:contents" dir="auto"><h2 id="2e96063e-6590-80ff-8cee-de1817d314cb" class="">Selected Projects</h2></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-8035-919a-f2009fef3636" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-80a8-9539-ec37571b239e" class="">엔터프라이즈 AI 플랫폼 UI 구조 개선</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-8091-82c5-fc301e25037e" class=""><strong>LG CNS</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8098-8e13-ceb0428c9559" class="bulleted-list"><li style="list-style-type:disc">공통 UI 컴포넌트 구조 설계 및 재사용 체계 구축</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80fe-a8e2-e3998c9f53bf" class="bulleted-list"><li style="list-style-type:disc">복잡한 설정·시각화 화면을 컴포넌트 단위로 재설계</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8060-bd31-dee2469a5427" class="bulleted-list"><li style="list-style-type:disc">레거시 화면 구조 정리로 유지보수 비용 절감</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80e6-9079-cb61003f07d3" class="bulleted-list"><li style="list-style-type:disc">사용자 조작 흐름 기준 UI 개선</li></ul></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-8070-af42-d49941040c1c" class="">
</p></div><div style="display:contents" dir="auto"><h3 id="2e96063e-6590-8003-924d-ffc57ef5ff00" class="">관리자 서비스 성능 및 안정성 개선</h3></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80f8-94bd-eadedcb1c1e4" class=""><strong>Humanscape</strong></p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80ec-a4ef-f65b4804d331" class="bulleted-list"><li style="list-style-type:disc">관리자 서비스 비동기 통신 구조 개선</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80f6-82d1-e355b025c7cd" class="bulleted-list"><li style="list-style-type:disc">오류 발생 원인 분석 및 로직 재설계</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-801f-8685-da8721e3895f" class="bulleted-list"><li style="list-style-type:disc">시스템 오류율 40% → 0% 개선</li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8053-b4c5-e07b9cd7f51c" class="bulleted-list"><li style="list-style-type:disc">데이터 처리 자동화로 운영 리스크 제거</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80ee-b31d-c393dcf4aa85" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2e96063e-6590-804e-927f-cdf1b988b810"/></div><div style="display:contents" dir="auto"><h2 id="2e96063e-6590-80d2-8a46-e52b4ef6f64e" class="">Education</h2></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-8069-a130-dc66ff083d44" class="">
</p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80b0-88cf-d9a2f344cab6" class="bulleted-list"><li style="list-style-type:disc"><strong>정보통신공학 학사</strong><br/>학점은행제 (2009.08 – 2011.08)</li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80ef-97ea-f9d34f37bf5d" class="">
</p></div><div style="display:contents" dir="auto"><hr id="2e96063e-6590-8016-9860-cb14e7d8016b"/></div><div style="display:contents" dir="auto"><h2 id="2e96063e-6590-809d-b25d-f8f1b3ac55f5" class="">Certifications</h2></div><div style="display:contents" dir="auto"><p id="2ea6063e-6590-80ff-8105-ea305b8da7a7" class="">
</p></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80b6-97f2-fc0b8408178e" class="bulleted-list"><li style="list-style-type:disc"><strong>데이터분석 준전문가 (ADsP)</strong><div style="display:contents" dir="auto"><p id="2e96063e-6590-804b-a2a6-f3587e673d5c" class=""><mark class="highlight-default_background">한국데이터산업진흥원 / 2024.06</mark></p></div></li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8011-8119-e6a04af68fda" class="bulleted-list"><li style="list-style-type:disc"><strong>정보처리기사</strong><div style="display:contents" dir="auto"><p id="2e96063e-6590-800d-b976-c2d948ea9069" class="">한국산업인력공단 / 2011.04</p></div></li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-80c6-8751-c9a69fd18a5a" class="bulleted-list"><li style="list-style-type:disc"><strong>정보통신산업기사</strong><div style="display:contents" dir="auto"><p id="2e96063e-6590-805e-99ee-e60d352a1a1f" class="">한국산업인력공단 / 2010.03</p></div></li></ul></div><div style="display:contents" dir="auto"><ul id="2e96063e-6590-8066-a791-dacfdde42e62" class="bulleted-list"><li style="list-style-type:disc"><strong>사무자동화산업기사</strong><div style="display:contents" dir="auto"><p id="2e96063e-6590-8077-a84a-fc1e3f4dc983" class="">한국산업인력공단 / 2011.06</p></div></li></ul></div><div style="display:contents" dir="auto"><p id="2e96063e-6590-80bb-ace3-f684629931d5" class="">
</p></div><div style="display:contents" dir="auto"><p id="2996063e-6590-80f7-a5d8-e8faeb6efce3" class="">
</p></div></div></article>