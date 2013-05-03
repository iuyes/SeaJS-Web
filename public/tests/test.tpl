{{#items}}
    {{#compare this sitetype operator="=="}}
    测试
    {{else}}
    {{this}}
    {{/compare}}
{{/items}}