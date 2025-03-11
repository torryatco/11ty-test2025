---
pageTitle: Apples
navTitle: Pictures
singleImage: /img/apples.png
images:
  - apples.png
  - apples-red.png
  - apples-group.png 
pageClass: pictures
---

![alt info a red apple]({{singleImage}})

<img src="{{singleImage}}" alt="apple" />

{% for filename in images %}
1. ![alt info goes here](/img/{{filename}})
{% endfor %}
