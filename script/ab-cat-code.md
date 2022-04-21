---
layout: default
title: Address Book Cat Code Update
parent: Script Examples
nav_order: 1
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-csl.js"></script>

Script Example

<div class="codeblock">
<pre><code class="language-csl">/*
Open Work With Addresses
Set AB# QBE to intput column 0 
Press Find
*/
open(w01012b)[qbe(1[19],$col[0]) do(15)]
/*
Select the first row
Press OK
*/
.action[select(1.0) do(14)]
/*
Set control 463 (CC 21) to column 1
Press Save
*/
.action[set(463, $col[1]) do(11)]
/*
Log activity
*/
.output("Updated {0}", $col[0])
/*
Repeat for rows in table ab
*/
.each[[4001,"N"],[4002,"Y"],[4050,"N"]]
</code></pre>
</div>
