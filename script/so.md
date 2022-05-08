---
layout: default
title: Sales Orders
nav_order: 5
parent: Query
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Sales Order Creation

<div class="codeblock">
<pre><code class="language-csl">/* Create Sales Order
   Open Customer Service Inquiry */
open(w4210e,zjde0001)[
  /* Press the ADD button */
  do(87)]
/* SO Header (W4210G) */
.action[
  /* Business Unit */
  set(98,30)
  /* Customer */
  set(458,@customer)
  /* Press OK */
  do(3)]
/* SO Detail (W4210A) */
.action[
  /* Insert Lines */
  insert[1
    $row:(
      /* Item */
      89:$col[1],
      /* Order Qty */
      53:$col[6])
    /* Repeat for Menu Items */
    .each@pizzas]
  /* Press OK */
  do(4)]
/* Log Order Number */
.output("Order {0}", $data[102];
</code></pre>
</div>

### Print Pick Slip

<div class="codeblock">
<pre><code class="language-csl">/* Create Sales Order
/* Print Pick Slip
   Open Customer Service Inquiry */
open(w4210e,zjde0001)[
  /* Order */
  set(9,$col[0])
  /* Branch */
  set(7,30)
  /* Press FIND */
  do(28)]
.action[
  /* Select the first Grid Row */
  select(1.0)
  /* Print Pickslip Row Exit */
  do(404)]
/* Press OK on Printer Selection (W986162B) */
.action[
  do(11)]
/* For Orders to Print */
.each@pick;
</code></pre>
</div>

### Ship Confirm

<div class="codeblock">
<pre><code class="language-csl">/* Create Sales Order
/* Ship Confirm
   Open WW Shipment Confirmation */
open(w4205h,zjde0001)[
  /* Order */
  set(19,$col[0])
  /* Branch */
  set(23,30)
  /* Press FIND */
  do(15)]
.action[
  /* Select the first Grid Row */
  select(1.0)
  /* Press Select */
  do(14)]
/* Shipment Confirmation (W4205K) */
.action[
  /* Press OK */
  do(12)]
/* For Orders to Ship */
.each@ship
</code></pre>
</div>
