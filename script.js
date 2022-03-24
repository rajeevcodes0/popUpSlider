let defaultSlider = document.getElementsByClassName("default-slider")[0];

let customSliderFill = document.getElementsByClassName("slider-fill-background")[0];

let popupBubblesContainer = document.getElementsByClassName("popup-bubbles-container")[0];

let mainPopupBubble = document.getElementsByClassName("main-popup-bubble")[0];

let secondaryBubbles = document.getElementsByClassName("secondary-bubble");

let popSound = document.getElementsByTagName("audio")[0];

let shine = document.getElementsByClassName("shine")[0];

console.log(customSliderFill);

defaultSlider.addEventListener("change",(event)=>{

    //resetting all the animations from the secondary bubbles
    let secondaryBubbleClasses = ["secondary-bubble bubble-one","secondary-bubble bubble-two","secondary-bubble bubble-three"]
    for(let i=0;i<secondaryBubbles.length;i++){
        secondaryBubbles[i].className = secondaryBubbleClasses[i];
    }

    //hide all bubbles
    popupBubblesContainer.style.opacity=0;

    //remove animation form the main bubble
    mainPopupBubble.classList.remove("main-popup-bubble-animation-class");

    // for(let i=0;i<secondaryBubbles.length;i++){
    //     secondaryBubbles[i].classList.remove("secondary-bubble-animation-class");
    // }
    
    setTimeout(()=>{
        let customSliderFillRectObject = customSliderFill.getBoundingClientRect();

        

        popupBubblesContainer.style.left = `${
          customSliderFillRectObject.left + customSliderFillRectObject.width
        }px`;

        

        popupBubblesContainer.style.top=`${customSliderFillRectObject.top}px`;

        popupBubblesContainer.style.opacity=1;
        for(let i=0;i<secondaryBubbles.length;i++){

            let randomClassNumber = Math.floor((Math.random()*2));

            if(randomClassNumber===2){
                randomClassNumber=1;
            }

            if(i===0 && randomClassNumber===0){
                secondaryBubbles[0].classList.add("bubble-one-animation-one-class");
            }else if(i===0 && randomClassNumber===1){
                secondaryBubbles[0].classList.add("bubble-one-animation-two-class");
            }
            if(i===1 && randomClassNumber===0){
                secondaryBubbles[1].classList.add("bubble-two-animation-one-class");
            }else if(i===1 && randomClassNumber===1){
                secondaryBubbles[1].classList.add("bubble-two-animation-two-class");
            }

            if(i===2 && randomClassNumber===0){
                secondaryBubbles[2].classList.add("bubble-three-animation-one-class");
            }else if(i===2 && randomClassNumber===1){
                secondaryBubbles[2].classList.add("bubble-three-animation-two-class");
            }
            // secondaryBubbles[i].classList.add("secondary-bubble-animation-class");
        }

        mainPopupBubble.classList.add("main-popup-bubble-animation-class");
        popSound.play();

    },300);

    if(event.target.value<10){
        shine.style.opacity=0;
    }else{
        shine.style.opacity=1;
    }
    customSliderFill.style.width = `${parseInt(event.target.value)}%`;
})