const imgPosition =document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer =document.querySelector('.aspect-ratio-169')
const dotItem=document.querySelectorAll(".dot")
let imgNuber = imgPosition.length
let index = 0

//console.log(imgPossition)
imgPosition.forEach(function(image,index){
    image.style.left = index*100 +"%"
    dotItem[index].addEventListener("click",function(){
        Slider(index)
    })
})
function imgSlider (){
    {
        index++;
        //console.log(index)
        if(index>=imgNuber) {index=0}
        Slider(index)
    }
}
function Slider(index){
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive=document.querySelector('.active'    )
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgSlider,2000)
const header=document.querySelector('header')
window.addEventListener("scroll",function(){
    x=this.window.pageYOffset
    if(x>0)
    {
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})
//-------------------------------------MENU SLIDER-CARTEGORY---------------------------------------//

const itemsliderbar=document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})

/*const imgmax = document.querySelectorAll(".image img")
let imgs = imgmax.length
var index=1;
changeImage=function(){
    var imgs = ["img.1.jpg","img.2.jpg","img.2.jpg","img.3.jpg","img.4.jpg","img.5.jpg","img.6.jpg"] 
    document.getElementById('img').src = imgs[index];
    index++;
    if(index>=6){
        index=0;
    }
}
setInterval(changeImage,1000)*/