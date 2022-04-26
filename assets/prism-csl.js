Prism.languages.csl = {
    string: /"[^"]*"/,
    comment: /\/\*.*(?!\*\/)/,
    variable: /\$(?:row|col\[\d+\])/,
    function: /\b(?:do|set|select|qbe)\b/,
    keyword: /\b(?:open|action|output|each|close|demo|dump)\b/,
    punctuation: /[{}[\];(),\.]/,
    number: /\b\d+\b/,
};
