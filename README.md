brunch "dev"

There are a sourses inside "frontend"
and compiled into "public"

This is a simple responsive slider. It was written as a test assignment. 
To make it works:
  1) public/css/all.min.css
  2) public/js/main.min.css 
  3) add your images into public/img
or just download "public" folder

Usage:

HTML:
```
<div id="slider">
<div class="slider-container">
    <div class="control left"><i class="fas fa-chevron-left"></i></div>

    <div class="slider-body">
        <div class="slider-items">
            <div class="item" data-item=1></div>
            <div class="item" data-item=2></div>
            <div class="item" data-item=3></div>
        </div>
    </div>

    <div class="control right"><i class="fas fa-chevron-right"></i></div>
</div>
```
JS:
```
const slider = new Slider({files:[
    {url: "../img/1.jpg"},
    {url: "../img/2.jpg"},
    {url: "../img/3.jpg"}
]});
```
