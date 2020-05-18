# COVID - 19

---

A resource page for COVID - 19.

Data is taken from online resources AND 

COVID - 19 statistics are taken from https://api.covid19india.org/data.json

### Responsiveness and features of page:

##### Page on a desktop computer :

![](C:\Users\asus\Desktop\desk.PNG)

> On Navigation bar, different options ( Overview, Symptoms, Prevention, Treatment, Data) get highlighted as user reaches that section of page.
> 
> Also, clicking on an option will send the user to respective section of page.

![](C:\Users\asus\Desktop\high.PNG)



![](https://drive.google.com/file/d/1ViE9XmEAZLjFu3nzqAGxtRIzB_ztTtTl/view?usp=drivesdk)

##### Page on a tablet :

![](C:\Users\asus\Desktop\tab.PNG)

##### Page on a Mobile Phone :

![](C:\Users\asus\Desktop\mob.PNG)

> On mobile phone view, a menu has been provided, which shows the options when it is clicked.
> 
> Also, different options ( Overview, Symptoms, Prevention, Treatment, Data) get highlighted as user reaches that section of page.
> 
> Also, clicking on an option will send the user to respective section of page.

![](C:\Users\asus\Desktop\mcli.PNG)

> Clicking again on the menu hides the options.
> 
> When options are not visible, name of the section which is currenly open on user screen is displayed on the top below the heading.

![](C:\Users\asus\Desktop\secname.PNG)

![](C:\Users\asus\Desktop\pre.PNG)

---

### Files in the repository:

index.html 

main.js 

menu.png

style.css

readme.md

---

> The portion where data related to Overview is provided on the page is being referred to as Overview section in this documentation.
> 
> Similarly Symptoms section , Prevention section, Treatment section and Data section.

---

##### HTML classes :

navBar  --  top navigation bar of the page ( contains heading and options )

options  --  contains all the options ( overview, symptoms, prevention, preatment, data)

secondary  --  used to display name of current section being displayed on the screen on                         the top of screen below the heading if options are not visible below the                         heading

box  --  a container used to display data on the page. ( All sections use this class )

flex  --  makes the display of the element as flex

pad  --  provides desired padding to the element

---

##### In main.js :

```js
function makeblack() makes all the options in the navigation bar black.
```

![](C:\Users\asus\Desktop\bla.PNG)

---

```js
function listen (who,pre,flag) adds a 'click' event listener to who such that it sends the user to end of pre on page when flag == 1, else it sends the user to starting of the page.
```

```js
listen(".SB",".over",1)
```

> Then if we click on divison with class SB, we will go to the end of division with class over
> 
> ( or the starting of division with class symp )

```html
<div class="symptoms pad SB">Symptoms</div>
<div class="box over" id ="o">
means that if we click Symptoms on the navigation bar we will go to end of the Overview section of the page or the starting of Symptoms section on page.
```

---

```js
function check(btn,sec,pre,flag,name) 
check if the navBar is currently coinciding with the division with class sec, if it is happening it makes the backgroundColor of division with class btn grey and (in mobile view)also displays name on the top of screen if options are not visible.
```

```js
check(".SB",".symp",".over",1,"Symptoms")
```

checks if navBar is coinciding with 

```html
 <div class="box symp" id = "s"> ........   </div>
```

if it is happening, it makes the background color of

```html
<div class="symptoms pad SB">Symptoms</div>
```

grey

and displays

```html
<div class="secondary"> Symptoms </div>
```

( in mobile view ) on the top of screen if the options are not visible.

---

> A 'click' event Listener is also added to menu which toggles the options.
> 
> if options are not visible, clicking on menu will reveal options
> 
> if they are visible, clicking on menu will hide options.

---

A XMLHttpRequest is made to https://api.covid19india.org/data.json to get COVID - 19 statistics and display them in the data section of the page.

```js
stateAll contains all the data returned by the request.
stateData = stateAll.statewise contains the location wise data.
```

- stateData[i].state is the name of ith location

- stateData[i].confirmed is the total number of cases in ith location

- stateData[i].active is the total number of active cases in ith location

- stateData[i].recovered is the total number of recovered cases in ith location

- stateData[i].deaths is the total number of deaths in ith location

---
