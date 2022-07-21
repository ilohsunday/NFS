//window.alert("good to go")

//let rights = document.getElementById('right')
window.addEventListener("scroll",()=>{
   let animation = document.querySelectorAll('.animation');
   for (var i = 0; i < animation.length; i++) {
    let animate = animation[i].getBoundingClientRect().top;
    let screenPosition = window.innerHeight/1;
    
    if(animate < screenPosition){
        animation[i].classList.add('rights')
        console.log(animation)
    }else if(animate > window.outerHeight/1){
        animation[i].classList.remove('rights')
    }
}
})
/*let testing = document.getElementById('right');
let animation = document.getElementById('animation')
testing.addEventListener('click',()=>{
    
    animation.classList.add('rights')
    //alert('working')
    //animation.innerHTML = "WORKING OH"
    //animation.style.backgroundColor="red"
})*/