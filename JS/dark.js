export function choseThemeMode (){
    const darkBtn= document.querySelector('#chose-theme') 

    darkBtn.addEventListener("change",function(){
        document.body.classList.toggle("dark")
    })



}