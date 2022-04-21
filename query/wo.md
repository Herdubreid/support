---
layout: default
title: Work Orders
nav_order: 4
parent: Query
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-cql.js"></script>

### Work Orders with Status between 10 and 40:

<div class="codeblock">
<pre><code class="language-cql">f4801 (doco,dl01,srst) all(srst bw "10","45")</code></pre>
</div>

**Note:** Literals can optionally be enclosed in quotation marks which is useful when it contains special characters.
