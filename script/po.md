---
layout: default
title: Purchase Orders
nav_order: 3
parent: Script
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Create PO's With the Workbench

<div class="codeblock">
<pre><code class="language-csl">/* Open PO Workbench */
open(w43101b,zjde0001)[
  /* Set BU M30 */
  set(28,M30)
  /* Populate the Grid */
  insert[1
    $row:(
      /* Item No */
      35:$col[8],
      /* Supplier */
      77:$col[15],
      /* Quantity */
      36:$col[14],
      /* Price */
      39:$col[16])
    /* For every row in table il */
    .each@il]
  /* Press OK */
  do(12)]
.output("Orders")
/* Grab the Created Orders */
.output.grid
</code></pre>
</div>
