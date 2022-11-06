---
layout: default
title: Show Menu Option
nav_order: 12
parent: Functions
---

### Celin.ONMENU(_menu/table name_, _menu option_, _columns to display_)

Display menu options.

#### Example

For menu/table `ab` and option '1', show column 1 and 2.

``` excel
Celin.ONMENU("ab","1",1,2)
```

__Note__: Option is type sensitive (1 is not same as "1").  Use option 0 for all.
