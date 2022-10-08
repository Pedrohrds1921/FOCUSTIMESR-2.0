 import {inputs} from './input.js'

export  function sounds (){
 
    let volumeFire = document.querySelector('#fireVol')
    let volumeRain = document.querySelector('#rainVol')
    let volumeCoofe = document.querySelector('#coffeVol')
    let volumeForest = document.querySelector('#forestVol')
   

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const rain = new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Chuva.wav?raw=true')
    const fire= new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Lareira.wav?raw=true')
    const forest= new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
    const coffe= new Audio ("https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Cafeteria.wav?raw=true")

    function playFire(){
        fire.play()
        fire.loop=true
        fire.volume= volumeFire.value
    }

    function playRain(){
        rain.play()
        rain.loop=true
        rain.volume= volumeRain.value
    }
    function playForest(){
        forest.play()
        forest.loop=true
        forest.volume= volumeForest.value
      
    }
    function playcoffe(){
        coffe.play()
        coffe.loop=true
        coffe.volume= volumeCoofe.value
    }

    function stopSongs(){
        coffe.pause()
        forest.pause()
        rain.pause()
        fire.pause()
    }





    return{
        buttonPressAudio,
        kitchenTimer,
        playFire,
        playRain,
        playcoffe,
        playForest,
        stopSongs,
        coffe,
       
    
    }



}