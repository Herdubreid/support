---
layout: default
title: Inventory
nav_order: 3
parent: Query
---

<link href="assets/prism-dark.min.css" rel="stylesheet" />
<link href="assets/style.css" rel="stylesheet">
<script src="assets/prism-core.min.js"></script>
<script src="assets/prism-cql.js"></script>

### Items with non-blank cat code 2 and contains "Bike" in the description:

<div class="codeblock">
<pre><code class="language-cql">f4101 (itm,litm,dsc1) all(srp2 ! blank srtx ? Bike)</code></pre>
</div>

**Note:** The `!` operator only require a literal to keep up with the syntax.
