---
layout: default
title: Script
nav_order: 6
has_children: true
---

<link href="assets/prism-dark.min.css" rel="stylesheet" />
<link href="assets/style.css" rel="stylesheet">
<script src="assets/prism-core.min.js"></script>
<script src="assets/prism-celincm.js"></script>

# Command Syntax

<pre>
[<i>func|onMenu|onCql|onCsl</i>] [async] <i>'name'</i>
<i>body</i>
</pre>

Where:

- _func_: A function that can be called from spreadsheet cell with `CALL`, `CALLVOLATILE` or `CALLSTREAM` function.
- _async_: optionally run the function in asynchronous mode.
- _body_: The function body in JavaScript.

_Note_: The function is terminated with an empty line.

## Basic Samples
