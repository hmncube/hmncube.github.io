const hamburger = document.getElementById('hamburgerId');
const mobileMenu = document.getElementById('navListId');
const menuItems = document.querySelectorAll('li a');
const header = document.querySelector('.header.container');

console.log(menuItems);

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scrollPosition = window.scrollY;
    if(scrollPosition > 250){
        header.style.backgroundColor = "#29323c";
    }else{
        header.style.backgroundColor = "transparent";
    }  
})

menuItems.forEach((item) =>{
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })
})