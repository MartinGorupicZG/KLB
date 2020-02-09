const handleNav=()=>{
   const nav=document.querySelector('.nav__open') ;
   const log=document.querySelector('.container')
   const navBtn=document.querySelector('.hamburger');

   navBtn.addEventListener('click',()=>{
    window.scrollTo(0, 0);
       nav.classList.toggle('active')
       log.classList.toggle('active')
   })
}
export default handleNav;