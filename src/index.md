---
layout: layout.html
pageTitle: New York Today
navTitle: Home
tags: page
pageClass: home
---

## Articles

<main class="stories"></main>


{% for page in collections.page %}

<h2> <a href="{{ page.url }}">{{ page.data.pageTitle | upcase }}</a></h2>
<p>{{ page.date | date: "%Y-%m-%d"}}</p>

{% endfor %}