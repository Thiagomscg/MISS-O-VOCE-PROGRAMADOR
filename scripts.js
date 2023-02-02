    const Button = document.getElementById('SearchButton')

const ButtonClick = (() => {
    const H2 = document.getElementsByTagName('h2')[0]
    const InputValue = document.getElementsByTagName('input')[0].value
    const Temperature = Math.floor(Math.random() * 53) - 18
    const Graus = document.getElementsByClassName("Graus")[0]
    const Img = document.getElementById("Nuvens")
    const Text = document.getElementById("NuvenP")
    const Umidade = document.getElementById("Umidade")

    if(InputValue.length > 5){
    
        if(Button.click){
            H2.innerHTML = `Tempo em ${InputValue + ":"}`
    
            Graus.innerHTML = (`${Temperature} °C`);
        }
    
        if(Temperature > 19 && Temperature <= 35){
            Img.src = "./sol.png"
            Text.innerHTML = "Clima Ensolarado - Sol" 
            Umidade.innerHTML =  `Umidade: ${Math.floor(Math.random() * 9) + 5}%`
            
        }
        
        if(Temperature > 4 && Temperature <= 18){
            Img.src = "./nuvens.png"
            Text.innerHTML = "Clima Ambiente - Nuvens" 
            Umidade.innerHTML = `Umidade: ${Math.floor(Math.random() * 10) + 18}%`
        }
    
        if(Temperature > -18 && Temperature < 3){
            Img.src = "./neve.png"
            Text.innerHTML = "Clima Frio - Neve" 
            Umidade.innerHTML = `Umidade: ${Math.floor(Math.random() * 15) + 15}%`
        }
    }
      

})



Button.addEventListener("click", ButtonClick)