---
layout: content
title: Hobby
permalink: /hobby/
pagination:
    enabled: true
    per_page: 10
    category: 취미
---

{% assign posts = paginator.posts | where:"category", pagination.category %}

<div style="margin-bottom:2rem">
{% include notion_notice.html %}
</div>

<section class="c-archives">
  <link rel="shortcut icon" href="">
  {% for post in posts  %}
  {% capture this_year %}{{ post.date | date: "%Y" }}{% endcapture %}
  {% capture this_month %}{{ post.date | date: "%m" }}{% endcapture %}
  {% capture next_year %}{{ post.previous.date | date: "%Y" }}{% endcapture %}
  {% capture next_month %}{{ post.previous.date | date: "%m" }}{% endcapture %}
  
  {% if forloop.first %}
  <ul class="c-archives__list">
    {% endif %}
    <li class="c-archives__item">
      <h3>
        <a href="{{ post.url | prepend: site.baseurl }}">{{post.title}}</a>
        <br>
        {% for tagObj in post.tags %}
        {% assign tag = tagObj | split: ":" %}
        <small style="background:{{tag[1]}};color:{{tag[2]}}">{{ tag[0] }}</small>
        {% endfor %}
      </h3>
      <p>{{ post.date | date: "%b %-d, %Y" }}</p>
    </li>
    {% if forloop.last %}
  </ul>
  {% endif %}
  {% endfor %}
</section>

<div class="pagination">
  {% if paginator.page_trail %}
  <ul>
  {% for trail in paginator.page_trail %}
    <li {% if page.url == trail.path %}class="selected"{% endif %}>
        <a href="{{ trail.path | prepend: site.baseurl }}" title="{{trail.title}}">{{ trail.num }}</a>
    </li>
  {% endfor %}
  </ul>
  {% endif %}
</div>
