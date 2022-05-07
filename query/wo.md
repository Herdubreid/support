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

### Work Order for Pizza Operation

<div class="codeblock">
<pre><code class="language-cql">/* Pizzas */
#pizzas =
/* Open Business View V4101JC */
v41021jb
/* Sum Qtys */
[group(f41021.mcu,f4101.litm)
 sum(f41021.pqoh,f41021.hcom,f41021.pcom)]
/* Pizzas */
all(f41021.mcu=30 f4101.srtx=PIZZA);
</code></pre>
</div>
<div class="codeblock">
<pre><code class="language-cql">/* Pizza Ingredience */
#pi =
/* Open Business View V4101JC */
v41021jb
/* Sum Qtys */
[group(f41021.mcu,f4101.litm)
 sum(f41021.pqoh,f41021.hcom,f41021.pcom)]
/* Pizzas in Branch M30 */
all(f41021.mcu=M30 f4101.srtx=PIZZA);
</code></pre>
</div>
<div class="codeblock">
<pre><code class="language-cql">/* Pending Work Orders */
#wos =
/* Open table F4801 */
f4801
/* Select the fields */
(doco,litm,drqj,uorg)
/* Pizzas at Status 10 */
all(litm in HPIZZA,PPIZZA srst=40);
</code></pre>
</div>