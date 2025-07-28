let slidesindex = 1
function plusSlides(n){
    showslides(slidesindex += n)
}
function currenSlides(n){
    showslides(slidesindex = n)
}
function showslides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots =document.getElementsByClassName("dot");
    /*ถ้าจำนวนมากกว่า 1 ภาพที่โชว์จะเท่ากับสไลด์ ๅ*/ 
    if(n > slides.length){
        slidesindex = 1
    }
    /*ถ้าจำนวนน้อยกว่า 1 ภาพที่โชว์จะเท่ากับจำนวนสไลด์ */ 
    if(n < 1){
        slidesindex = slides.length
    }
    for(i = 0;i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
        // แทนที่เฉพาะ "" ตัวแรก //
    }

    dots[slidesindex-1].className += " active";
    slides[slidesindex-1].style.display = "block";
}
showslides()