<div class="news-row">
    <div class="news-content"> 
        
        <h3><a href="{{ url }}">{{ title }}</a></h3>
        <span class="date">{{ date | date: "%d MMM yyyy" }}</span>
        <p>{{ body | strip_html | truncate: 150 | remove: "&nbsp;" }}
        <br>
        <a href="{{ url }}" class="read-more">Read full story</a></p>
    </div>
</div>