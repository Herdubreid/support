Prism.languages.csl = {
    string: /"[^"]*"/,
    comment: /\/\*[^*]*\*\//,
    variable: /\$(?:row|col\[\d+\]|form|title|data\[\d+\]|records)/,
    keyword: /\b(?:do|set|select|qbe|open|action|output|each|close|demo|dump|grid)\b/,
    punctuation: /[{}[\];(),\.]/,
    number: /\b\d+\b/,
};
