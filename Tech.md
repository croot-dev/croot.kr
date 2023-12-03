---
layout: page
title: Tech
order: 3
pagination:
    enabled: true
    per_page: 5
    category: 기술
---

<div class="posts">
  {% assign posts = paginator.posts | where:"category","기술" %}

  {% for post in posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url | absolute_url }}">
        {{ post.title }}
      </a>
    </h1>
    <span class="post-tags">{{post.tags}}</span>

    <span class="post-date">{{ post.date | date_to_string }}</span>

  </div>
  {% endfor %}
</div>

<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ paginator.next_page_path | absolute_url }}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    <a class="pagination-item newer" href="{{ paginator.previous_page_path | absolute_url }}">Newer</a>
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>
