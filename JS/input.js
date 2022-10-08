import sound from "./souds.js"

 export function elements(){
    const inputs=document.querySelectorAll('.range input')

    inputs.forEach(input=>{input.addEventListener("change",moveinputs)})

     


        function volumeControls(e){
          sound().fire.play()
          sound().fire.volume= e.target.value
        
       
        }

    function moveinputs(event){
    
    const btnselector = event.target.nextElementSibling
    const progress= btnselector.nextElementSibling
    btnselector.style.left= event.target.value + "%";
    progress.style.width=  event.target.value+ "%";
      sound().fire.play()
      console.log(sound().rain.volume)
        console.log(event.target.value)
  }



    return{
    inputs,
    moveinputs,

    }
}