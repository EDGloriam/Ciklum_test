This is a simple responsive slider. It was written as a test assignment. To make it works:

public/css/all.min.css
public/js/main.min.css
add your images into public/img
or just download "public" folder

Usage:

HTML:

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
JS:

const slider = new Slider({files:[
    {url: "../img/1.jpg"},
    {url: "../img/2.jpg"},
    {url: "../img/3.jpg"}
]});
