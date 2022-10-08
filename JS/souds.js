export default function (){

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    const rain = new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Chuva.wav?raw=true')
    const fire= new Audio('https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Lareira.wav?raw=true')
    const forest= new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
    const coffe= new Audio ("https://github.com/ELLDev/timer-with-dark-mode/blob/main/sounds/Cafeteria.wav?raw=true")

    function playFire(){
       
    
        return fire.volume()
    }
  

    return{
        playFire,
        buttonPressAudio,
        kitchenTimer,
        rain,
        fire,
        forest,
        coffe,
    
    }



}