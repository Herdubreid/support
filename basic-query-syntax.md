---
layout: default
title: Basic Query Syntax
nav_order: 4
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

List Address Book's name and number:

<div class="codeblock">
<pre><code class="language-cql">f0101 (an8,alph)</code></pre>
</div>

Show highest, lowest, average and total order line amounts.

<div class="codeblock">
<pre><code class="language-cql">f4311 [max(aexp) min(aexp) avg(aexp) sum(aexp)]</code></pre>
</div>

List Sum of Open OP Orders.

<div class="codeblock">
<pre><code class="language-cql">f4311 [
  group(doco,dcto) sum(aopn)]
  all(nxtr = 400 dcto = OP uopn <> 0)</code></pre>
</div>

List items with non-blank cat code 2 and contains "Bike" in the description:

<div class="codeblock">
<pre><code class="language-cql">f4101 (itm,litm,dsc1) all(srp2 ! blank srtx ? Bike)</code></pre>
</div>

**Note:** The `!` operator only require a literal to keep up with the syntax.

List Work Orders with Status between 10 and 40:

<div class="codeblock">
<pre><code class="language-cql">f4801 (doco,dl01,srst) all(srst bw "10","45")</code></pre>
</div>

**Note:** Literals can optionally be enclosed in quotation marks which is useful when it contains special characters.
