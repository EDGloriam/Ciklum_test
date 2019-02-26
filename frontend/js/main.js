class Slider{
    constructor(params){
        this.slider = document.getElementById('slider');
        this.sliderItems = slider.getElementsByClassName('item');
        this.dots = slider.getElementsByClassName('rect');
        this.MAX_ITEMS = this.sliderItems.length;
        this.currentSlidePosition = 0;
        this.baseItemClassList = 'item ';
        this.init()
    }
    init(){
        this.sliderItems[0].style.display = 'block';
        this.dots[0].classList.add('active');

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
    const slider = new Slider({/* wanted to add more flexibility */});    
        

 });