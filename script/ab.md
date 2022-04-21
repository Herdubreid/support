---
layout: default
title: Address Book
parent: Script
nav_order: 1
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

### Update Address Book Cat Code

A a simple two action script that uses Address Book Revision (P01012) to update Cat Code 21.

<div class="codeblock">
<pre><code class="language-csl">
/* Open Work With Addresses
   Set AB# QBE to intput column 0 
   Press Find */
open(w01012b)[qbe(1[19],$col[0]) do(15)]
/* Select the first row 
   Press OK */
.action[select(1.0) do(14)]
/* Set control 463 (CC 21) to column 1
   Press Save */
.action[set(463, $col[1]) do(11)]
/* Log activity */
.output("Updated {0}", $col[0])
/* Repeat for array */
.each[[4001,"N"],[4002,"Y"],[4050,"N"]]
</code></pre>
</div>
