class Slider{
    constructor(params){
        this.slider = document.getElementById('slider');
        this.sliderItems = slider.getElementsByClassName('item');
        this.MAX_ITEMS = this.sliderItems.length;
        this.currentSlidePosition = 0;
        this.baseItemClassList = 'item ';  
        this.sliderImgs = params.files;      
        this.init()
        
    }
    init(){
        this.sliderItems[0].style.display = 'block';
        this.appendImgs();

        slider.addEventListener('click', () => {
            const targetClasses = event.target.classList.value

            if (targetClasses.includes('left')){
                this.flip(false)
            }else if(targetClasses.includes('right')){
                this.flip(true)
            }else if(targetClasses.includes('rect')){
                let dotPosition = this.dotOrderNumber(event.target);
                this.flip(true, dotPosition);
            }
        });
        
        this.slider.appendChild(this.renderDots());
        this.dots = slider.getElementsByClassName('circle');
    }
    appendImgs(){
        let currentSlide;
        for(var i = 1; i <= this.sliderImgs.length; i++){
            currentSlide = this.slider.querySelector(".item[data-item='" + encodeURI(i) + "']");
            currentSlide.style.backgroundImage = `url('${this.sliderImgs[i-1].url}')`;
            currentSlide.style.backgroundSize = 'cover';
        }
    }
    renderDots(){
        let dots = this.initDotsContainer()
        for(var i = 0; i < this.MAX_ITEMS; i++ ){
            dots.firstElementChild.appendChild(this.dot(i))
        } 
        return dots;
    }
    initDotsContainer(){
        const dotsContainer = document.createElement('div');
        const wrapper = document.createElement('div');

        dotsContainer.classList.add('pages');
        wrapper.classList.add('wrapper');

        dotsContainer.appendChild(wrapper);
        return dotsContainer;
    }
    dot(first){
        const dot = document.createElement('div');
        dot.classList.add('circle');
        if(first === 0) { dot.classList.add('active'); }
        return dot;
    }

   flip(flipRight, position = null) {
        let params = {
            nextPosition: 
                position || this.getPosition(flipRight),
            extraClass: 
                flipRight ? 'show from-left' : 'show from-right' }

        this.changeNext(params)
        this.changePrev()
        this.changeDots(params)

        this.currentSlidePosition = params.nextPosition;
    }
    changeNext(params){
        this.sliderItems[params.nextPosition].style.display = 'block';
        this.sliderItems[params.nextPosition].classList = this.baseItemClassList + params.extraClass;
    }
    changePrev(){
        this.sliderItems[this.currentSlidePosition].style.display = 'none';
        this.sliderItems[this.currentSlidePosition].classList = this.baseItemClassList;
    }
    changeDots(params){
        this.dots[this.currentSlidePosition].classList.remove('active');
        this.dots[params.nextPosition].classList.add('active');
    }

    getPosition(flipRight) {
        let position = this.currentSlidePosition;
        position += flipRight ?  1 : -1;
        
        if(position >= this.MAX_ITEMS){
            return 0
        }
        if(position < 0){
            return 9
        }

        return position;
    }

    dotOrderNumber(node){
        let i = 0;
        let thisDot = node;
        while((thisDot.previousElementSibling) != null){
            i++;
            thisDot = thisDot.previousElementSibling;
        }
        return i;
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const slider = new Slider({files:[
        {url: "../img/1.jpg"},
        {url: "../img/2.jpg"},
        {url: "../img/3.jpg"},
        {url: "../img/4.jpg"},
        {url: "../img/5.jpg"},
        {url: "../img/6.jpg"},
        {url: "../img/7.jpg"},
        {url: "../img/8.jpg"},
        {url: "../img/9.jpg"},
        {url: "../img/10.jpg"}
    ]});    
        

 });