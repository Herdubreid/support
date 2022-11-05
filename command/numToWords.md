---
layout: default
title: Number To Words
nav_order: 1
parent: Commands
---

<link href="../assets/prism-dark.min.css" rel="stylesheet" />
<link href="../assets/style.css" rel="stylesheet">
<script src="../assets/prism-core.min.js"></script>
<script src="../assets/prism-celincm.js"></script>

### Convert Number to Words

A function to write number as words.  Accepts a single parameter, the number to convert and returns a string with the number in words.

<div class="codeblock">
<pre><code class="language-celincm">
func numToWords
const arr = x => Array.from(x);
const num = x => Number(x) || 0;
const str = x => String(x);
const isEmpty = xs => xs.length === 0;
const take = n => xs => xs.slice(0,n);
const drop = n => xs => xs.slice(n);
const reverse = xs => xs.slice(0).reverse();
const comp = f => g => x => f (g (x));
const not = x => !x;
const chunk = n => xs =>
 isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];
let numToWords = n => {
 let a = [
  '', 'one', 'two', 'three', 'four',
  'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
 ];
 let b = [
   '', '', 'twenty', 'thirty', 'forty',
   'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
 ];
 let g = [
  '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
  'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
 ];
 let makeGroup = ([ones,tens,huns]) => {
  return [
   num(huns) === 0 ? '' : a[huns] + ' hundred ',
   num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
   a[tens+ones] || a[ones]
  ].join('');
 };  
 let thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;
 if (typeof n === 'number')
  return numToWords(String(n));
 else if (n === '0')
  return 'zero';
 else
  return comp (chunk(3)) (reverse) (arr(n))
   .map(makeGroup)
   .map(thousand)
   .filter(comp(not)(isEmpty))
   .reverse()
   .join(' ');
 };
return numToWords(params[0][0][0]);
</code></pre>
</div>
