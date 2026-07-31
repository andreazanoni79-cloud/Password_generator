const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwrd1 = document.getElementById("passwrd-1")
let passwrd2 = document.getElementById("passwrd-2")
let btnGenerator =document.getElementById("btn-generator")
console.log(btnGenerator)


        
btnGenerator.addEventListener("click", function() {
        passwrd1.textContent= ""
        passwrd2.textContent= ""
        
        let numberInput=document.getElementById("number")
        let numberLength = Number(numberInput.value)
                
    for (let i=0; i<numberLength; i++) {
        let characters1 = Math.floor(Math.random()*characters.length)
        let characters2 = Math.floor(Math.random()*characters.length)
        passwrd1.textContent+= characters[characters1]
        passwrd2.textContent+= characters[characters2]
                
      if (numberLength<8) {
        numberLength=8
      } else if (numberLength>15) {
        numberLength=15
      } else {numberLength}
      
    numberInput.value = numberLength
         
    }
    
    console.log(passwrd1)
    console.log(passwrd2)
    
})

passwrd1.addEventListener ("click", function() {
    navigator.clipboard.writeText(passwrd1.textContent)
    console.log(passwrd1.textContent)
})

passwrd2.addEventListener ("click", function() {
    navigator.clipboard.writeText(passwrd2.textContent)
    console.log(passwrd2.textContent)
})