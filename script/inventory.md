---
layout: default
title: Inventory
parent: Script
nav_order: 2
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Create Inventory Master

Create Inventory Master records from an Excel table named `im`.

<div class="codeblock">
<pre><code class="language-csl">open(w4101e)
  /* Press Add */
  [do(17)]
/* Populate Form */
.action[
  /* 2nd Item */
  set(13,$col[0])
  /* 3rd Item */
  set(22,$col[1])
  /* Description */
  set(23,$col[2])
  /* Search Text */
  set(25,$col[3])
  /* UOM */
  set(147,$col[4])
  /* GL Code */
  set(27,$col[5])
  /* Stocking Type */
  set(26,$col[6])
  /* Line Type */
  set(29,$col[7])
  /* Press OK */
  do(11)]
.output("Item {0}",$data[16])
.action[do(11)]
.each@im
</code></pre>
</div>
