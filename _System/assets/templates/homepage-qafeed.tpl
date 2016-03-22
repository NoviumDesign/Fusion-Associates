<div class="people-moves-row">
    <div class="people-moves-image">
        <div class="one-to-one-ratio"></div>
        <!-- (regarding 2nd assign row: split at "img src" in case someone wants to embed a video etc. BC adds images with src directly after img-tag so it shouldn't be a problem -->
        <img src="
			{% assign qafeed_image_url = body | escape %}
			{% assign qafeed_image_url = qafeed_image_url | split: 'img src=&quot;' %}
			{% assign qafeed_image_url = qafeed_image_url[1] | split: '&quot;' %}
			{% assign qafeed_image_url = qafeed_image_url[0] | remove: '//' %}
			{% assign qafeed_image_url = qafeed_image_url | remove: 'http:' %}
			{% assign qafeed_image_url = qafeed_image_url | remove: 'fusionassociates.noviumplatform.se' %}
			{{ qafeed_image_url }}
?Action=thumbnail&amp;Width=150&amp;Height=150&amp;algorithm=fill_proportional&amp;bc_t=sRkbfv9lOnmhiCuASG%2bXv" alt="QA image">
    </div>
    <div class="people-moves-content">
        
        <h3><a href="{{ url }}">{{ title }}</a></h3>
        <span class="date">{{ date | date: "%d MMM yyyy" }}</span><br>
        
        <a href="{{ url }}" class="read-more">Read full story</a>
    </div>
</div>