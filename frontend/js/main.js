document.addEventListener("DOMContentLoaded", () => {
    (() =>{
        const slider = document.getElementById('slider');
    const slides = document.getElementsByClassName('item');
    const pages = document.getElementsByClassName('rect');
    const MAX_ITEMS = 10;
    let currentSlidePosition = 0;
    slides[0].style.display = 'block';

    slider.addEventListener('click', () => {
        const targetClasses = event.target.classList.value

        if (targetClasses.includes('left')){
            moveForward(false)
        }else if(targetClasses.includes('right')){
            moveForward(true)
        }
    });

    const moveForward = (moveRight) => {
        let nextPosition = getPosition(moveRight, currentSlidePosition);
        slides[currentSlidePosition].style.display = 'none';
        slides[nextPosition].style.display = 'block';
        pages[nextPosition].classList.add('active');
        pages[currentSlidePosition].classList.remove('active');

        currentSlidePosition = nextPosition;
    }

    const getPosition = (moveRight, currentSlidePosition) => {
        let position = currentSlidePosition;
        position += moveRight ?  1 : -1;
        
        if(position >= MAX_ITEMS){
            return 0
        }

        if(position < 0){
            return 9
        }

        return position;
    }
    })()

 });