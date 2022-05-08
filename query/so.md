---
layout: default
title: Sales Orders
nav_order: 5
parent: Query
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-cql.js"></script>

### Available Items for Sale

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

### List Orders to be Picked

<div class="codeblock">
<pre><code class="language-cql">/* Orders Waiting for Pick Slip print */
#pick =
/* Open SO Detail */
f4211
/* Select Order and count number of Lines */
[group(doco) count(lnid)]
/* Where Pizzas are at Status 540 */
all(litm in PPIZZA,HPIZZA nxtr = 540);
</code></pre>
</div>

### List Orders to be Shipped

<div class="codeblock">
<pre><code class="language-cql">/* Orders Ready to be Shipped */
#ship =
/* Open SO Detail */
f4211
/* Select the fields */
(doco,litm,uorg,nxtr)
/* Where Pizzas are at Status 560 */
all(litm in PPIZZA,HPIZZA nxtr = 560);
</code></pre>
</div>
