<div class="slider-item">
    <a href="{{ url }}" class="slider-image">
        <!-- (regarding 2nd assign row: split at "img src" in case someone wants to embed a video etc. BC adds images with src directly after img-tag so it shouldn't be a problem -->
        <img src="
			{% assign slider_image_url = body | escape %}
			{% assign slider_image_url = slider_image_url | split: 'img src=&quot;' %}
			{% assign slider_image_url = slider_image_url[1] | split: '&quot;' %}
			{% assign slider_image_url = slider_image_url[0] | remove: '//' %}
			{% assign slider_image_url = slider_image_url | remove: 'http:' %}
			{% assign slider_image_url = slider_image_url | remove: 'fusionassociates.noviumplatform.se' %}
			{{ slider_image_url }}
	?Action=thumbnail&amp;Width=751&amp;Height=400&amp;algorithm=fill_proportional&amp;bc_t=sRkbfv9lOnmhiCuASG%2bXv" alt="slider-image">
    </a>
    <div class="slider-content">
        <div class="slider-category">
            {% assign slider_category = url | escape %}
            {% assign slider_category = slider_category | split: '/' %}
            {% assign slider_category = slider_category[0] %}
            {% assign slider_category = slider_category | replace: '-', ' ' | capitalize | replace: 'And', '&amp;' %}
            {{ slider_category }}
        </div>
        <a href="{{ url }}" class="slider-header">
            
            <h2>{{ title }}</h2>
            
        </a>
        <div class="slider-text">
            <p>{{ body | strip_html | remove: "&nbsp;" | truncate: 370  }}<br>
                <a href="{{ url }}" class="read-more">Read full article</a></p>
        </div>
    </div>
</div>