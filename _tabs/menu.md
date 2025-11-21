---
layout: menu
icon: fas fa-bowl-food
order: 3
---

<h2>Nuestro Menu</h2>

{% assign categorias = site.data.menu %}
{% for categoria in categorias %}
<div class="menu-category">
    <h3>{{ categoria[0] }}</h3>
    <ul>
    {% for item in categoria[1] %}
        <li class="menu-item">
            <span class="dish-name">{{ item.name }}</span>
            <span class="dish-description">{{ item.description }}</span>
            
            {% assign numeric_price = item.price | plus: 0 %}
            <span class="dish-price">
            {% if numeric_price > 0 %}
                $
            {% endif %}
            {{ item.price }}
            </span>

            {% if item.image %}
                <img src="{{ item.image | relative_url }}" alt="{{ item.name }}" class="dish-image">
            {% endif %}
        </li>
    {% endfor %}
    </ul>
</div>

<!-- Lightbox container -->
<div id="lightbox" class="lightbox">
  <span class="close">&times;</span>
  <img id="lightbox-img" src="" alt="">
</div>

{% endfor %}
