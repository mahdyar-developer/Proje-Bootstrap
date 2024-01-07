const navbar =document.querySelector('.navbar-nav');
navbar.addEventListener('click', (event) =>{
const target =event.target.getAttribute ('class');
document.querySelector(`#${target}`).scrollIntoView({behavior : "smooth"});
})