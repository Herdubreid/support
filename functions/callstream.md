---
layout: default
title: A Streaming Call of function
nav_order: 11
parent: Functions
---

### Celin.CALLSTREAM(_func name_, _one or more parameters_)

A Streaming Run of a function, with optional parameter.
The difference from a normal function call is that Streaming functions continually run, regardless of spreadsheet events.
A good example is a clock function.

#### Example

Show digital clock (see command `clock`).

``` excel
Celin.CALLSTREAM("clock")
```
