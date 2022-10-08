export function choseThemeMode (){
    const darkBtn= document.querySelector('#chose-theme') 

    darkBtn.addEventListener("input",function(){
        document.body.classList.toggle("dark")
    })
}