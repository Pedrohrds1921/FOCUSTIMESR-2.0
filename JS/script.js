
import { choseThemeMode } from './dark.js'
import  { sounds}  from './souds.js'
import {inputs} from './input.js'

const buttonPause=document.querySelector(".pause")
const buttonPlay= document.querySelector(".play")
const buttonStop= document.querySelector(".stop")
const buttonPlus=document.querySelector(".plus")
const buttonLess=document.querySelector(".less")
const buttonForest=document.querySelector(".forest")
const buttonRain=document.querySelector(".rain")
const buttonCoffe=document.querySelector(".coffe")
const buttonFire= document.querySelector(".fire")
const hoursDisplay=document.querySelector(".hours")
const pointHoursDisplay=document.querySelector(".pointHours")
let minutesDisplay= document.querySelector(".minutes")
const secondsDisplay= document.querySelector(".seconds")
let timer
 
inputs()
const sound= sounds()

function hideHours(hours,minutes){ 
    if(hours>=1){
    hoursDisplay.classList.remove("noVisiliby")
    pointHoursDisplay.classList.remove("noVisiliby")
    }else if(hours==0 &&minutes<=59){
    hoursDisplay.classList.add("noVisiliby")
    pointHoursDisplay.classList.add("noVisiliby")
}
   
    
}
 function uptadeDisplay(hours,minutes,seconds){
   
    minutesDisplay.textContent= String(minutes).padStart(2,"0")
    secondsDisplay.textContent= String(seconds).padStart(2,"0")
    hoursDisplay.textContent= String(hours).padStart(2,"0")
 }

 function plusFive(){
    let minutes= Number(minutesDisplay.textContent)
    let hours= Number(hoursDisplay.textContent)
    let seconds= Number(secondsDisplay.textContent)

    if(hours<10){
        minutes=minutes+5
        seconds=0

        if(minutes>56){
        hours++
        minutes=0
        
        }
        console.log(hours)
        hideHours(hours,minutes)
        uptadeDisplay(hours,minutes,seconds)
    }

 }

function lessFive(){
    let minutes= Number(minutesDisplay.textContent)
    let hours= Number(hoursDisplay.textContent)
    let seconds= Number(secondsDisplay.textContent)
    

   if(hours==0&&minutes<=5){
    minutes=minutes-5
    minutes=0
    return
}
if(hours>=1&&minutes==0){
    hours--
    minutes=60
    
}            
minutes=minutes-5
seconds=0

hideHours(hours,minutes)
uptadeDisplay(hours,minutes,seconds)

}


function resetControls(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
}

function resetTimer(){
    uptadeDisplay(0,25,0)
}

function countdown(){
    timer= setTimeout(function(){
    let minutes= Number(minutesDisplay.textContent)
    let seconds= Number(secondsDisplay.textContent)
    let hours= Number(hoursDisplay.textContent) 
    let isFinished = hours<=0 && minutes <= 0 && seconds<= 0

    if(isFinished){
       resetControls()
        resetTimer()
        return
      }

      if(hours>=1&&minutes<=0&&seconds<=0){
        hours--
        minutes=60
      }
      if(seconds<=0){
        seconds=60
        minutes--
      }

      
      uptadeDisplay(hours,minutes,seconds-1)
      hideHours(hours,minutes)

      countdown()
    },1000)
}
const resetCards= function(){
    buttonForest.classList.remove("select")
    buttonFire.classList.remove("select")
    buttonRain.classList.remove("select")
    buttonCoffe.classList.remove("select")
}

buttonPlay.addEventListener("click",function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countdown()
   sound.buttonPressAudio.play()
})
buttonPause.addEventListener("click",function(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timer)
   sound.buttonPressAudio.play()
})

buttonStop.addEventListener("click",function(){
    clearTimeout(timer)
    resetControls()
    resetTimer()
   sound.buttonPressAudio.play()
})
buttonFire.addEventListener("click",function(){
    resetCards()
    buttonFire.classList.add("select")
    sound.stopSongs()
    sound.playFire()
})
buttonForest.addEventListener("click",function(){
    resetCards()
    buttonForest.classList.add("select")
    sound.stopSongs()
    sound.playForest()
    
})
buttonRain.addEventListener("click",function(){
    resetCards()
    buttonRain.classList.add("select")
    sound.stopSongs()
    sound.playRain()
})
buttonCoffe.addEventListener("click",function(){
    resetCards()
    buttonCoffe.classList.add("select")
    sound.stopSongs()
    sound.playcoffe()   
})

buttonPlus.addEventListener("click",function(){
    plusFive()
   sound.buttonPressAudio.play()
})
buttonLess.addEventListener("click",function(){
    lessFive()
    sound.buttonPressAudio.play()
})

inputs()
choseThemeMode ()

