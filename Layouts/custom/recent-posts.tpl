{% for item in items %}
    {{item.name}}
    {{item.['engine size']}}
    {{item.['engine layout']}}
    {{item.performance}}
{%endfor%}