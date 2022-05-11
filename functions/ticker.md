---
layout: default
title: Ticker
nav_order: 6
parent: Functions
---

### Celin.TICKER

A simple ticker function that increments the cell value once every `delay` seconds.

Useful for regular query updates with the `Celin.RUN` function (the `Celin.TIKCER` cell acts as trigger).

#### Example

Increment cell value once every 5 seconds.

```
=Celin.TICKER(5)
```
