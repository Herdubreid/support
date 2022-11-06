---
layout: default
title: A Volatile Call of function
nav_order: 10
parent: Functions
---

### Celin.CALLVOLATILE(_func name_, _one or more parameters_)

A Volatile Run of a function, with optional parameter.
The difference from a normal function call is that Volatile functions are run each time a spreadsheet re-calculation occurs.
A good example is a date function.

#### Example

Return current date.

``` excel
Celin.CALLVOLATILE("today")
```

`today` function:
``` js
func today
const options = {
 weekday: 'short',
 day: 'numeric',
 month:'short',
 year: 'numeric',
};
const tm = new Date();
return [[tm.toLocaleString('en-AU', options)]];
```
