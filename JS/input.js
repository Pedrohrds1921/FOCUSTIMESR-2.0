export  function inputs(){
   
  
    const inputs = document.querySelectorAll(".range input")

    inputs.forEach(input=>{
    input.addEventListener("input",volumecontrol) 
})
        function volumecontrol(){
        const btnselector = this.nextElementSibling
        const progress= btnselector.nextElementSibling
        btnselector.style.left=(this.value*100) + "%";
        progress.style.width=(this.value*100) + "%";
    }
    return{
        volumecontrol,

    }

}