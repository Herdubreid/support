---
layout: default
title: Inventory
nav_order: 2
parent: Script
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Create Item Master

Create Item Master records from an Excel table named `im`.

<div class="codeblock">
<pre><code class="language-csl">/* Open Work With Item Master Browse */
open(w4101e)
  /* Press Add  (opens Item Master Revision) */
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
  /* Press OK (opens Storage/Shipping ) */
  do(11)]
/* Log the ITM Number */
.output("Item {0}",$data[16])
/* Press OK */
.action[do(11)]
.each@im
</code></pre>
</div>


### Create Item/Branch

Create Item/Branch records from Excel table `im`.

_Note_: Missing a step for adding Item Cost (Row Exit `Cost Revision` to `W4105B`) and Item Price (Row Exit `Price Revision` to `W4106J`).

<div class="codeblock">
<pre><code class="language-csl">/* Open Work With Item Branch */
open(w41026e,zjde0001)
  /* Press Add (opens Item/Branch Plant Info */
  [do(47)]
/* Populate Form */
.action[
  /* BU */
  set(15,$col[8])
  /* 2nd Item */
  set(16,$col[0])
  /* Supplier */
  set(145,$col[9])
  /* Shelf Life Days */
  set(182,$col[10])
  /* Best Before */
  set(188,$col[11])
  /* Press OK (opens Primary Location) */
  do(11)]
.output("Creating {0}/{1}",$col[8],$col[0])
/* Press OK (opens Item/Branch Locations) */
.action[do(3)]
/* Press Close (opens Work With Preference Base Price */
.action[do(5)]
/* Press Close (goes back to Item/Branch Plant Info */
.action[do(5)]
/* Press Cancel (back to Work With Item Branch */
.action[do(12)]
/* Set the Item Field
   Press Find           */
.action[set(95,$col[0]) do(6)]
/* Select the first row
   Select the Quantities Row Exit (opens Quantities)  */
.action[select(1.0) do(118)]
/* Populate Form */
.action[
  /* Reorder Qty */
  set(13,$col[12])
  /* Reorder Max Qty */
  set(14,$col[13])
  /* Reorder Min Qty */
  set(15,$col[14])
  /* Reorder Point */
  set(16,$col[15])
  /* Sfety Stock */
  set(19,$col[16])
  /* Press OK */
  do(11)]
.each@im
</code></pre>
</div>
