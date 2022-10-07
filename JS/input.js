

 export function elements(){
    const inputs=document.querySelectorAll('.range input')
    const btnSelector=document.querySelectorAll('.range .selector')
     const progressBars=document.querySelectorAll('.range .progress')
    
    inputs.forEach(input=>{
    input.addEventListener('input',e=>{e.target= btnSelector.forEach(btn=>{
        btn.style.left=e.target.value +"%"})})})
    
    }