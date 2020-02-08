import handleNav from './js/navHandler';
handleNav()
const el=document.querySelectorAll('.nav__right a');
el.forEach(item=>{
   
    item.addEventListener('click',function(){
        for(item of el){
            item.classList.remove('active')
        }
        this.classList.add('active')

    })
})
