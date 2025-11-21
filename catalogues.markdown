---
layout: page
title: Catalogues
permalink: /catalogues/
---

<h1 data-translate="catalogues">Catalogues</h1>

{% assign catalogues = site.data.cata.catalogues %}

{% for model_entry in catalogues %}
  {% assign model_name = model_entry[0] %}
  {% assign model_data = model_entry[1] %}
  
  <h2>{{ model_name }}</h2>
  
  {% assign sorted_years = model_data | sort %}
  {% for year_entry in sorted_years %}
    {% assign year = year_entry[0] %}
    {% assign year_data = year_entry[1] %}
    
    <h3><span data-translate="year">Year</span>: {{ year }}</h3>
    <p>
      {% assign models_array = year_data.models | split: ", " %}
      {% for model_name_full in models_array %}
        {% if forloop.first == false %}, {% endif %}
        {% assign found_url = false %}
        {% for url_entry in year_data.urls %}
          {% if url_entry.name == model_name_full %}
            <a href="{{ url_entry.url }}" target="_blank">{{ model_name_full }}</a>
            {% assign found_url = true %}
            {% break %}
          {% endif %}
        {% endfor %}
        {% unless found_url %}
          {{ model_name_full }}
        {% endunless %}
      {% endfor %}
    </p>
  {% endfor %}
  
  <hr>
{% endfor %}

