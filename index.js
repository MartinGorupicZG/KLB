import Highway from '@dogstudio/highway'
import handleNav from './js/navHandler';
import Home from './js/homeAni'
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

const H=new Highway.Core({
    transitions:{
        default:Home
    }
})