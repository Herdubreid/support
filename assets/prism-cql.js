Prism.languages.cql = {
    string: {
        pattern: /"(?:""|[!#$%&'()*,/:;<=>?^_ +\-.A-Z\d])*"/i,
        greedy: true,
    },
    bold: /[fFvVwW]\w{4,7} |@\w+|\$.+\"/,
    italic: /(?:-demo|-v2|-max)/,
    function: /\b(?:sum|min|max|avg|count|count_distinct|avg_distinct|group|desc|asc)\b/,
    keyword: /\b(?:all|any|and|or|by|having)\b/,
    operator: />=?|<[=>]?|\b(bw|in)\b|[=?_!^$]/,
    punctuation: /[{}[\];(),\.]/,
    number: /\b\d+\b/,
};
