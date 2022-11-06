---
layout: default
title: Get query state
nav_order: 15
parent: Functions
---

### Celin.CQLSTATE(_query name_, _attribute_, _default value_)

Display an attribute from a query action.

#### Example

Display busy state of query `ab`, default to `FALSE`.

``` excel
Celin.CQLSTATE("ab", "state.busy", FALSE)
```
