---
layout: default
title: Query
nav_order: 4
parent: true
---

<link href="assets/prism-dark.min.css" rel="stylesheet" />
<link href="assets/style.css" rel="stylesheet">
<script src="assets/prism-core.min.js"></script>
<script src="assets/prism-cql.js"></script>

# Basic Query Syntax

<pre>
<i>Subject</i> [-max <i>(rows|no)|-demo</i>]
[<i>Alias-List</i>|<i>Aggregation</i>]
(<i>Condition</i>)
<i>by[asc(Alias-List) desc(Alias-List)]</i>
</pre>

Where:

- _Subject_: a table, view or form name. Example `f0101` or `w4312f`.
- `-max`: option for max number of records returned, or `no` for return all. Example `-max 100` to return maximum 100 rows.
- `-demo`: returns table layout.
- _Alias-List_: a comma separated list of table's or view's aliases, or Form's control id's to list. The table prefix can be ignored if the alias is unique, like in tables for example. Example `(an8, alph)`.
- _Aggregation*_: a list of aggregate functions. A query can either be a list of aliases or group of aggregate functions. Example `[max(an8) min(an8)]` (see Aggregate functions below).
- _Condition_: optional filter conditions. Example `all(an8>4000)` (see Conditions below).
- `by`: sort orders for _Alias-List_ (see Aggregate for details). Example `by[asc(alph)]` sequence by alph in ascending orders.

_* Note_: Aggregate is not available for Forms.

## Aggregate functions

The following aggregate functions are available:

- `group`
- `sum`
- `min`
- `max`
- `avg`
- `count`
- `count_distinct`
- `avg_distinct`

  In addition there are two sequence functions:

- `desc`
- `asc`

The form of an aggregate is:

<pre>
<i>Aggreate-Function</i>(<i>Alias-List</i>)
</pre>

For example:

<div class="codeblock">
<pre><code class="language-cql">group(nxtr) sum(aopn)</code></pre>
</div>

For every value of `nxtr`, sum value of `aopn`.

_Note:_ For business views, items in the _Alias-List_ **must** be prefixed with the table.

## Conditions

The form of a condition is:

<pre>
(all|any)(<i>Alias</i> <i>Operator</i> <i>Literal(s,)...</i> ...)
</pre>

The `all` prefix requires that all condidtions must be met and `any` requires that one of the condition must met (`AND`/`OR` equivalent).

The available _Operators_ are:

- Equal `=`
- Greater Than `>`
- Less Than `<`
- Greater or Equal `>=`
- Less or Equal `<=`
- Not Equal `<>`
- Between `bw`
- In List `in`
- String Contains `?`
- String is Blank `_`
- String is Not Blank `!`
- String Starts With `^`
- String Ends With `$`

Two or more conditions can be chained with `and` or `or` operator.
<pre>
<i>Condition</i> [(and|or) <i>Condition</i>]...
</pre>

### Examples
