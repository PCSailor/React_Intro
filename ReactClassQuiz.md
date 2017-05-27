Complete Intro to React Intro Prerequisite Assessment
#Question 1
var logger = {
    leadText: 'INFO: ',
    info: function (str) {
        console.log(this.leadText + str)
    }
}

var fn = logger.info
fn('function was called')
Why does the above code not work? What line could you add between 11 and 12 that would make it work.

#Question 2
What are the map, reduce, and filter functions on Array.prototype? When would you use them and why?
These methods, map, reduce and filter, make code less complex, without side effects, and often more readable.  They are alternatives when translating elements, finding cumulative values, or building subsets based on conditions. 
map(): Use to translate/map all elements in an array to another set of values
filter(): Use to remove unwanted elements based on a condition
reduce(): Use to find cumulative/concatenated values based on elements across the array
See 'JavaScript_Map-Reduce-Filter.pdf'
<https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter>

#Question 3
Write a piece of code so that if I call repeat('test code', 2, 5) that console.log the string 'test code' once every 2 seconds 5 times and then stop.
function aTimer() {
    setTimeout(timeOut1, 2000);
    setTimeout(timeOut2, 4000);
    setTimeout(timeOut3, 6000);
    setTimeout(timeOut4, 8000);
    setTimeout(timeOut5, 10000);
    clearInterval();
}
function timeOut1() { console.log('test code'); }
function timeOut2() { console.log('test code'); }
function timeOut3() { console.log('test code'); }
function timeOut4() { console.log('test code'); }
function timeOut5() { console.log('test code'); }
aTimer();

#Question 4
<div>
    <input type='text' id='uppercase-input' />
</div>
Write a bit of code that every time you type a letter into the input, it makes it uppercase.

#uppercase-input {
    text-transform: uppercase;
}


#Question 5
<div id='sideboard'>
    <h1 class='header logo logo-emphasis'>BrandTitle</h1>
</div>
h1 {
    color: green;
}

.header.logo.logo-emphasis {
    color: red;
}

#sideboard h1 {
    color: blue;
}

What color is the h1's text? 

blue




Reply with your answers! The quiz is mean to test core competency in JavaScript which is a requirement of attending the React workshop.
Marc Grabanski
CEO & UI Developer, MJG International // Frontend Masters
w:FrontendMasters.com

#--------------------------------------------------------------------------------------
from:	Philip Curtis <Phil@philcurtis.io>
to:	Marc Grabanski <marc@mjg.in>
date:	Wed, May 24, 2017 at 10:44 PM
subject:	Re: ✍️ [Quiz] Complete Intro to React In-Person
mailed-by:	philcurtis.io

Hello Marc,

Here are the answers to the entry quiz.

#Question 1:  I'm not sure.  There are only 9 lines of code, not 12, and I 'm unsure if you are looking for an object constructor &/or a working function.  I know logger =  object, logger.leadText =  string, and logger.info =  function but I am unsure what to do with them.
--
#Question 2:  These methods, map, reduce and filter, make code less complex, without side effects, and often more readable. 
They are alternatives when translating elements, finding cumulative values, or building subsets based on conditions. 
map(): Use to translate/map all elements in an array to another set of values
filter(): Use to remove unwanted elements based on a condition
reduce(): Use to find cumulative/concatenated values based on elements across the array
--
#Question 3:  function aTimer() {
    setTimeout(timeOut1, 2000);
    setTimeout(timeOut2, 4000);
    setTimeout(timeOut3, 6000);
    setTimeout(timeOut4, 8000);
    setTimeout(timeOut5, 10000);
    clearInterval();
}
function timeOut1() { console.log('test code'); }
function timeOut2() { console.log('test code'); }
function timeOut3() { console.log('test code'); }
function timeOut4() { console.log('test code'); }
function timeOut5() { console.log('test code'); }
aTimer();
--
#Question 4:  #uppercase-input {text-transform: uppercase;}
--
#Question 5:  blue

#---------------------------------------------------------------------------------

from:	Marc Grabanski <marc@mjg.in>
to:	Philip Curtis <Phil@philcurtis.io>
date:	Fri, May 26, 2017 at 1:59 PM
subject:	Re: ✍️ [Quiz] Complete Intro to React In-Person

3 of these are wrong...

#1 should be line 7 and 8 -- should show an understanding of context / scope in javascript

#3 should show an understanding of closure and recursion

#4 won't work because lowercase values are still submitted through the form -- you're only changing the display with CSS and not the actual values in the input

You need to update your quiz answers.


