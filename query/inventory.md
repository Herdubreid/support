---
layout: default
title: Inventory
nav_order: 3
parent: Query
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-cql.js"></script>

### Item Master

Items with non-blank cat code 2 and contains "Bike" in the description.

<div class="codeblock">
<pre><code class="language-cql">f4101 (itm,litm,dsc1) all(srp2 ! blank srtx ? Bike)
</code></pre>
</div>

**Note:** The `!` operator only require a literal to keep up with the syntax.

Minimum requirement for master.

<div class="codeblock">
<pre><code class="language-cql">/* Item Master */
#im =
/* Open Table F4101 */
f4101
/* Read the required Item Master Fields */
(litm,aitm,dsc1,srtx,uom1,glpt,stkt,lnty);
</code></pre>
</div>

### Item Branch Plant

Few logistic values for items in excel list `items`.

<div class="codeblock">
<pre><code class="language-cql">/* Item/Branch Master */
#ib =
/* Open Table F4102 */
f4102
/* Read the required Item Master Fields */
(mcu,litm,vend,sld,bbdd,roqi,rqmx,rqmn,ropi,safe)
/* Where LITM is in list items */
all(litm in @items);
</code></pre>
</div>
