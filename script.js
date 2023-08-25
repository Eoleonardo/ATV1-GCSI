function Calcularf(){
    let f = parseInt(document.getElementById("f").value)
  
    let Converter = (f-32) * 5/9
  
    let sair = document.getElementById("Resultado1")
    sair.innerHTML = Converter.toFixed(2)+"°C";
  }
  
  function CalcularK(){
    let k = parseInt(document.getElementById("k").value)
  
    let Converter = k - 273.15
  
    let sair = document.getElementById("Resultado2")
    sair.innerHTML =  Converter.toFixed(2)+"°C";
  }