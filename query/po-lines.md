---
layout: default
title: Purchase Order Lines
nav_order: 2
parent: Query
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-cql.js"></script>

### Highest, lowest, average and total order line amounts.

<div class="codeblock">
<pre><code class="language-cql">f4311 [max(aexp) min(aexp) avg(aexp) sum(aexp)]</code></pre>
</div>

### Sum of Open OP Orders.

<div class="codeblock">
<pre><code class="language-cql">f4311 [
  group(doco,dcto) sum(aopn)]
  all(nxtr = 400 dcto = OP uopn <> 0)</code></pre>
</div>
