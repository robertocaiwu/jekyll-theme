---
layout: paquetes
icon: fas fa-rectangle-list
order: 2
---

# Paquetes familiares


{% assign paquetes = site.data.paquetes %}
<div class="package-category">
  <ul>
    {% for pkg in site.data.paquetes %}
      <li class="package-item">
        <h4 class="package-name">{{ pkg.name }}</h4>
        <div class="package-dishes-wrapper">
            <ul class="package-dishes">
              {% for dish in pkg.dishes %}
                <li>{{ dish }}</li>
              {% endfor %}
            </ul>
        </div>
        <p class="package-description">{{ pkg.description }}</p>
        <p class="package-extra">{{ pkg.extra }}</p>
        <div class="package-price">{{ pkg.price }}</div>
      </li>
    {% endfor %}
  </ul>
</div>