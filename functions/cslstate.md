---
layout: default
title: Get script state
nav_order: 16
parent: Functions
---

### Celin.CSLSTATE(_query name_, _attribute_, _default value_)

Display an attribute from a script action.

#### Example

Display busy state of script `update`, default to `FALSE`.

``` excel
Celin.CSLSTATE("update", "state.busy", FALSE)
```
