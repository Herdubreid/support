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

### Speed Status Update

<div class="codeblock">
<pre><code class="language-csl">/* Open Speed Status Update */
open(w43025a,zjde0001)[
  /* Set the Order Number */
  set(10,$col[0])
  /* Set BU M30 */
  set(18,M30)
  /* Selec QBE for the line */
  qbe(1[22],$col[1])
  /* Press Find */
  do(6)]
.output("Update Order {0}, Line {1}",$col[0],$col[1])
.action[
  /* Select the first Grid Row */
  select(1.0)
  /* Press Select              */
  do(4)]
.each@po
</code></pre>
</div>

### Receipt Order

<div class="codeblock">
<pre><code class="language-csl">/* Open WW Orders to Receive */
open(w4312f,zjde0001)
/* Set the DOCO to excel name order
   Press Find */
[set(7,@order) do(21)]
/* Select the 1st Grid Row
   Press OK */
.action[select(1.0) do(4)]
/* In Purchase Order Receipts */
.action[
  update[1
    /* Receipt Line */
    $row:(
      /* Rec Opt 1 */
      382:1,
      /* Blank Extended Price */
      117:"")
  /* For Every Line */
  .each@lines]
  /* Press OK */
  do(4)]
/* Landed Cost Selection */
.action[
  /* Press OK */
  do(4)]
.output("Voucher {0}",$data[85])
</code></pre>
</div>
