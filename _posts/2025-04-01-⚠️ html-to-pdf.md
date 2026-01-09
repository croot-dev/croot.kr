---
layout: post
title: "⚠️ html to pdf"
created: 2025-04-01
edited: 2025-08-24
category: [기술]
tags: []
notion_id: 1c86063e-6590-80f9-b7c3-ed21965bc75c
---


사용자 가이드 페이지를 따로 디자인 작업 없이 PDF를 추출하기 위해 작성.


# JSON


```json
{
	"order": [ "register", "signin", ...]
	"web": {
		"title": "Main title",
		"list": [
			"regist": {
				"title": "Service registration",
				"list": [
					{
						"cont": [
							"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
							"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage"
						]
					}
				]
			},
			"signin": {
				"title": "Sign in",
				"list": []
			}
		],
	}
}
```


# Markup


```html
<article ref="$contents" class="contents">
	<div class="visual">
		<div class="cont">
			<h2>{{ contentTitle }}<br />{{ $t('MN.user_guide') }}</h2>
			<BButton><Icons icon="download" /></BButton>
		</div>
	</div>
	<section v-for="(key, index) in order" :key="index" class="section">
		<div class="title">{{ data.list[key].title }}</div>
		<div v-for="(subItem, index2) in data.list[key].list" :key="index2" class="cont-group">
			<div class="img"><img :src="`~~${key}_${index2}.png`" /></div>
			<div class="sub-cont">
				<strong v-dompurify-html="subItem.title" />
				<div class="cont">
					<p v-for="(cont, index3) in subItem.cont" :key="index3">{{cont}}</p>
				</div>
			</div>
		</div>
	</section>
</article>
```


# Composable


```typescript
// composables/usePdfGenerator.ts
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const usePdfGenerator = () => {
  /**
   * @param sections - PDF로 변환할 section HTMLElement 배열
   * 각 section 내부의 "div.title" 및 "div.cont-group" 요소들을 순서대로 처리합니다.
   * - "div.title"은 무조건 새 페이지에서 시작합니다.
   * - "div.cont-group"은 페이지의 남은 사용 가능한 영역에 완전히 들어가지 않으면 새 페이지에서 시작합니다.
   * @returns Promise<jsPDF> - 생성된 jsPDF 인스턴스
   */
  const generatePdf = async (sections: HTMLElement[]): Promise<jsPDF> => {
    const doc = new jsPDF('p', 'mm', 'a4')
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20 // 상하좌우 여백 20mm

    // 여백 제외한 사용 가능한 영역 크기
    const usableWidth = pageWidth - margin * 2
    const usableHeight = pageHeight - margin * 2

    // 현재 페이지에서 사용한 높이 (사용 가능한 영역 내, mm)
    let currentPageY = 0

    // 각 section별로 처리
    for (const section of sections) {
      // section 내부의 "div.title"과 "div.cont-group" 요소들을 문서 순서대로 선택
      const items = section.querySelectorAll('div.title, div.cont-group')
      for (const item of Array.from(items)) {
        const el = item as HTMLElement

        // "div.title"은 무조건 새 페이지에서 시작 (현재 페이지에 내용이 있다면)
        if (el.classList.contains('title') && currentPageY > 0) {
          doc.addPage()
          currentPageY = 0
        }

        // html2canvas로 해당 요소 캡처 (JPEG 포맷, 품질 90%)
        const canvas = await html2canvas(el, { scale: 2, useCORS: true })
        const imgData = canvas.toDataURL('image/jpeg', 1)

        // PDF상의 사용 가능한 영역 폭에 맞추기 위한 변환 비율 (canvas 픽셀 → mm)
        const convFactor = usableWidth / canvas.width
        let elementMmWidth = usableWidth
        let elementMmHeight = canvas.height * convFactor

        // 만약 캡처된 요소의 높이가 사용 가능한 영역보다 크다면, 비율을 유지하면서 사용 가능한 영역 높이에 맞춤
        if (elementMmHeight > usableHeight) {
          const fitScale = usableHeight / elementMmHeight
          elementMmWidth *= fitScale
          elementMmHeight = usableHeight
        }

        // "div.cont-group"은 현재 페이지의 남은 공간에 완전히 들어가지 않으면 새 페이지에서 시작
        if (el.classList.contains('cont-group') && currentPageY + elementMmHeight > usableHeight) {
          doc.addPage()
          currentPageY = 0
        }

        // 요소 이미지 추가 (여백을 고려하여 좌측: margin, 상단: margin + 현재 사용 높이)
        doc.addImage(imgData, 'JPEG', margin, margin + currentPageY, elementMmWidth, elementMmHeight)
        currentPageY += elementMmHeight
      }
    }

    return doc
  }

  return { generatePdf }
}

```


# 사용예시


```typescript
const { generatePdf } = usePdfGenerator()
const pdfDoc = await generatePdf(sectionElementsArray)
pdfDoc.save('export.pdf')
```

