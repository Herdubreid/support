---
layout: default
title: Purchase Order
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
  all(nxtr = 400 dcto = OP uopn <> 0)
</code></pre>
</div>

### List Pending Purchase Orders

<div class="codeblock">
<pre><code class="language-cql">/* Pending PO's */
#pending =
/* Open table F4311 */
f4311
/* Select fields */
(doco,lnid,nxtr)
/* Next Status less than 280
   and item in list */
all(nxtr < 280 litm in @items);
</code></pre>
</div>

### List Open Purchase Orders

<div class="codeblock">
<pre><code class="language-cql">/* Open PO's */
#open =
/* Open table F4311  */
f4311
/* Select fields */
(doco,dcto,lnid,litm,dsc1,uopn,prrc,aopn)
/* Items to display */
all(nxtr bw 280,400 litm in @items);
