---
layout: default
title: Call a function on Script event
nav_order: 8
parent: Functions
---

### Celin.ONCSL(_query name_, _func name_, _one or more parameters_)

Runs a function when a query event happens.

#### Example

When script `update` is triggered, run `function` named `updateAB` and pass in named excel cell `z_an8`;

``` excel
Celin.ONCSL("update","updateAB",z_an8)
```

The below function will output the message `Update {value of cell z_an8}` when the script is busy.

``` js
func updateAB
if (msg.busy)
  return [[`Update ${params[0]}`]];
else 
 return [['']];
```
