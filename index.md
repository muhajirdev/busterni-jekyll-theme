---
title: Muhammad Muhajir
subtitle:
layout: post
---
<div class="row">
  {% for post in site.posts %}
  <div class="card">
      <div class="card-content">
        <a href="{{post.url}}"><span class="card-title">{{ post.title}}</span></a>
        <p>{{ post.content}}</p>
      </div>
        <a class="waves-effect btn-flat blue-text" href="{{site.baseurl}}/{{post.url}}">SOURCE</a>
    </div>
    {% endfor %}
</div>
