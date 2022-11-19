let searchBtn = document.querySelector('#search-btn')
let searchForm = document.querySelector('.search-form')
let login = document.querySelector('.login')
let nimo = document.querySelector('#menu-bar')
let boom = document.querySelector('.navbar')
let video = document.querySelectorAll('.video-btn')
function showbar() {
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active')

}
function tito() {
    login.classList.add('active')
}
function kimo() {
    login.classList.remove('active')
}
function showmenu() {
    nimo.classList.toggle('fa-times')
    boom.classList.toggle('active')
}
video.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .test").classList.remove("test");
        slide.classList.add("test");
        let src = slide.getAttribute('data-src');
        document.querySelector("#video-slider").src = src;
    })
})