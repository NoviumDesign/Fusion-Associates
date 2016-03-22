<div class="news-row">
    <div class="news-content"> 
        
        <h3 class="intelligence-feature-header"><a href="{{ url }}">{{ title }}</a></h3>
        <span class="date">{{ date | date: "%d MMM yyyy" }}</span>
        <div class="row"><img src="
			{% assign qafeed_image_url = body | escape %}
			{% assign qafeed_image_url = qafeed_image_url | split: 'img src=&quot;' %}
			{% assign qafeed_image_url = qafeed_image_url[1] | split: '&quot;' %}
			{% assign qafeed_image_url = qafeed_image_url[0] | remove: '//' %}
			{% assign qafeed_image_url = qafeed_image_url | remove: 'http:' %}
			{% assign qafeed_image_url = qafeed_image_url | remove: 'fusionassociates.noviumplatform.se' %}
			{{ qafeed_image_url }}
?Action=thumbnail&amp;Width=375&amp;Height=250&amp;algorithm=fill_proportional&amp;bc_t=sRkbfv9lOnmhiCuASG%2bXv" alt="QA image"></div>
        <p>{{ body | strip_html | truncate: 150 | remove: "&nbsp;" }}
        <br>
        <a href="{{ url }}" class="read-more">Read full story</a></p>
    </div>
</div>