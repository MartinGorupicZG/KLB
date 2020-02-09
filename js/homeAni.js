import Highway from '@dogstudio/highway'
import {TimelineLite} from 'gsap'
let audio=new Audio('../assets/click.mp3')
let audio1=new Audio('../assets/rose.weba')
class Home extends Highway.Transition {
 
    in({from,to,done}){
      window.scrollTo(0, 0);
      audio1.pause()
      audio1.currentTime=0;
        from.remove()
        new TimelineLite({onComplete:done})
        .set('.img__left',{x:"-250%",y:"-5%"})
        .set('.img__right',{x:"250%",y:"5%"})
        .set('.text__container>*',{opacity:0})
        .fromTo(to,2,{opacity:0},{opacity:1})
       .to('.img__left',1.5,{x:0},"-=1")
        .to('.img__right',1.5,{x:0,onComplete:function(){
          audio.play()
       if(to.getAttribute('data-router-view')==="soap"){
         audio1.src='../assets/rose.mp3'
       }
       else if(to.getAttribute('data-router-view')==="mens") {
         audio1.src='../assets/mens.mp3'
       } else {
        audio1.src='../assets/nuvole.mp3'
       }
          audio1.play()
         
        }},"-=1.5")
        .to('.img__left',1,{y:0})
        .to('.img__right',1,{y:0},"-=1")
        .staggerFromTo('.text__container>*',.7,{y:100},{y:0,opacity:1},.2)
       
       }

    
    out({from,done}){
      new TimelineLite({onComplete:done})
     .to('.img__left',1,{y:"-150%",opacity:0})
      .to('.img__right',1,{y:"150%",opacity:0},"-=1")
      .staggerTo('.text__container>*',.7,{y:-80,opacity:0},.2)
    }

}

export default Home;