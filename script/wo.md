---
layout: default
title: Work Orders
nav_order: 4
parent: Script
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Create WO With the Workbench

<div class="codeblock">
<pre><code class="language-csl">/* Open Shop Floor Workbench */
open(w31225d,zjde0001)[
  /* Press Add */
  do(169)]
/* Populate Form (W48013A) */
.action[
  /* Pizza to make */
  set(6,$col[1])
  /* In Branch 30 */
  set(13,30)
  /* Quantity */
  set(7,$col[6])
  /* Order Date */
  set(5,$col[8])
  /* Press OK */
  do(3)]
/* Log the Work Order Number */
.output("Order {0}",$data[156])
/* Repeate for Pizzas to make */
.each@pizzas
</code></pre>
</div>

### Add Parts List, Issue and Complete

<div class="codeblock">
<pre><code class="language-csl">/* Open Shop Floor Workbench */
open(w31225d,zjde0001)[
  /* Clear the BU field */
  set(149,"")
  /* Set the WO# on the QBE */
  qbe(1[54],$col[0])
  /* Press Find */
  do(40)]
/* Open the Parts List */
.action[
  /* Select first row */
  select(1.0)
  /* Row Exit WO Parts List */
  do(83)]
/* Create the Parts List */
.action[
  insert[1
    /* Grid Rows */
    $row:(
      /* Component */
      186:$col[1],
      /* Qty */
      144:$col[6],
      /* Component Branch */
      133:$col[0])
    /* For every pizza ingredient row */
    .each@pi]
  /* Press OK */
  do(12)]
/* Issue */
.action[
  /* Row Exit WO Issue */
  do(172)]
/* Confirm issue (W3111A) */
.action[do(12)]
/* Complete */
.action[
  /* Row Exit WO Completion */
  do(89)]
/* WO Completion (W431114B) */
.action[
  /* Qty Comleted */
  set(46,$col[4])
  /* Qty Scrapped */
  set(48,$col[5])
  /* Press OK */
  do(561)]
/* Dump the output */
.output.dump
/* Repeate for Orders */
.each@wos
</code></pre>
</div>
