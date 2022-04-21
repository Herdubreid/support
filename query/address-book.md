---
layout: default
title: Address Book
nav_order: 1
parent: Query
---

<link href="assets/prism-dark.min.css" rel="stylesheet" />
<link href="assets/style.css" rel="stylesheet">
<script src="assets/prism-core.min.js"></script>
<script src="assets/prism-cql.js"></script>

### List Address Book's name and number

The simplest of queries is just the table name or business view.
The below sample extends that by adding the aliases we want in brackets.

<div class="codeblock">
<pre><code class="language-cql">f0101 (an8,alph)</code></pre>
</div>

The expected return is a list of address numbers and names.
The size of the list depends on the setting in AIS (default is 100).
