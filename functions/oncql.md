---
layout: default
title: Call a function on Query event
nav_order: 7
parent: Functions
---

### Celin.ONCQL(_query name_, _func name_, _one or more parameters_)

Runs a function when a query event happens.

#### Example

When query `ab` is triggered, run `function` named `queryAB` and pass in named excel cell `name`;

``` excel
Celin.ONCQL("ab","queryAB",name)
```

The below function will output the message `Query {value of cell name}` when the query is busy.

``` js
func queryAB
if (msg.busy)
  return [[`Query ${params[0]}`]];
else 
 return [['']];
```
