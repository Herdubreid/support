---
layout: default
title: Beginner CQL Excercise
nav_order: 1
parent: Excercise
---

## Beginner CQL Exercise

This exercise steps through the basic *cql* functions of **Celin.XL**.

### Install the Celin.XL Add-Ins

1. Open a blank workbook in Excel.
2. In the **Home** ribbon, select the **Add-ins** Menu Item and press the **Get Add-ins** button.
3. Type "Celin" in the *Search* box and press *Enter* or click the magnifying glass.
4. Press the **Add** button on for the **Celin.XL** row.
5. Agree to the *License Terms and Privacy Policy* by pressing the **Continue** button.

Once the **Add-ins** has loaded it will open the in the right-hand pane.  Enter the *AIS Server* URL and press **Enter** or click the **Ok** button below it (use *demo.steltix.com* for [Steltix Demo](https::/demo.steltix.com)i.  
Once th URL has been validated, the connection box closes and **Celin.XL** is ready for use.

### Execute a simple Query

1. With the **CQL** tab selected, enter the following *cql* statement:
```js
f0101 (an8,alph,at1)
```
2. Select **Run Query** from the top left drop-down menu (three vertical dots).
3. Enter user and password in the **Login** box (use demo/demo for Steltix) and press **Enter** or click the **Ok** button.
4. On the **Default** box in the result section, press the **Paste Result** button at the bottom-right.

The result of the *cql* statement are pasted into the worksheet, starting from the active cell.

### Paste Results in a Table

1. Change the *cql* statement to the following:
```js
#ab = f0101 (an8,alph,at1)
```
2. Select **Run Query** or press *Alt-R*.
> The statement to run is anything from the previous empty line to the cursor.  To run a statement, place the cursor in an empty line below it.
2. Expand the **ab** box in the result section by pressing the blue button on the left side.
3. Expand **Table Options** section by pressing the caption and tick the **Auto** box and **Replace** option.
4. Add a new worksheet and set *B4* as the active cell.
5. In the **Table Options** section, press the **Table** button (between paste and delete).
> An empty table named *ab* is created with the column titles.
6. Press the **Paste** button in the **Table Options** section.

The *cql* results are now displayed in table *ab*.

### Add Condition

Update the *cql* statement to the following, and press **Run Query** or *Alt-R*.

```js
#ab = f0101 (an8,alph,at1)
all(at1=E alph?John)
```

This will fill filter rows with *Search Type* 'E' and *Alpha Name* 'John'.

### Use Worksheet Variable

Named ranges can be used as variables in *cql*.  This example steps through how to set the *Alpha Name* filter from variable.

1. Name cell *C2* as **Search** using the **Define Name** from the **Formulas** ribbon.
2. Update the *cql* statement to the following:
```js
#ab = f0101 (an8,alph,at1)
all(at1=E alph?@search)
```
3. Enter 'Paul' in cell *C2* and press **Run Query** or *Alt-R*

The *ab* table is now populated with *cql* results where *Alpha Name* matches 'Paul'.

> The actual *cql* statement can be viewed by expanding the *Source* section.

### Trigger *CQL* on changes

Instead of having to run the *cql* statements from the menu, they can be triggered automatically on worksheet changes.

In an unused cell, for example *D2*, enter the following formula:
```excel
=Celin.CQL("ab",Search)
```
The first parameter is the *cql* name to run and the second one is the the trigger cell *C2* which we named *Search*.  

When the value of *C2* is changed, the *cql* runs automatically and updates the table accordingly.  Try changing it to 'Pat'.
