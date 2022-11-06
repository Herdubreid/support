---
layout: default
title: Run query
nav_order: 14
parent: Functions
---

### Celin.CQL(_query name_, _one or more trigger range_)

Runs a query when any of the trigger ranges changes.

#### Example

Run query `ab` when range `name` changes.

``` excel
Celin.CQL("ab",name)
```
