var slides = document.querySelectorAll('._slide')
var btns = document.querySelectorAll('._butn')
let currentSlide = 1;

const manualNav = (manual) => {
    slides.forEach((slide) =>{
        slide.classList.remove('_active');

        btns.forEach((btn) =>{
            btn.classList.remove('_active')
        })
    })

    slides[manual].classList.add('_active');
    btns[manual].classList.add('_active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        manualNav(i);
        currentSlide = i
    });
});

//Javascript for image slider autoplay

var repeat = function(activeClass){

    let active = document.getElementsByClassName('_active');
    let i = 1;

    var repeater = () =>{
        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('_active')
            })


        slides[i].classList.add('_active')
        btns[i].classList.add('_active')
        i++;

        if(slides.length == i){
            i = 0;
        }
        if(i > slides.length){
            retrun;
        }
        repeater();

        }, 7500); 
    }
    repeater();
}
repeat()