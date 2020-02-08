const handleNav=()=>{
   const nav=document.querySelector('.nav__open') ;
   const log=document.querySelector('.container')
   const navBtn=document.querySelector('.hamburger');

   navBtn.addEventListener('click',()=>{
       nav.classList.toggle('active')
       log.classList.toggle('active')
   })
}
export default handleNav;