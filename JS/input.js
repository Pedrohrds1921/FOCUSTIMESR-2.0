

 export function elements(){
    const inputs=document.querySelectorAll('.range input')

    inputs.forEach(input=>{
      input.addEventListener("input",moveinputs)})

    function moveinputs(event){
    const btnselector = event.target.nextElementSibling
    const progress= btnselector.nextElementSibling
    btnselector.style.left= event.target.value + "%";
    progress.style.width= event.target.value + "%";}

    
}