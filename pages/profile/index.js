/* Desenvolva sua lógica aqui...*/

let objCurrent = JSON.parse( localStorage.getItem("objSearched"))




function headerPageGenerator(){
    let imgPerfil =document.querySelector(".imgPerfil")
    let userName =document.querySelector(".userName")
    let userDesc = document.querySelector(".userDesc")
    let buttonEmail = document.querySelector(".buttonEmail")
    let buttonInnerUser = document.querySelector(".buttonInnerUser")

    imgPerfil.src = objCurrent.avatar_url
    userName.innerText = objCurrent.name
    userDesc.innerText = objCurrent.bio


    buttonEmail.addEventListener("click", ()=>{

        if(objCurrent.email === null){

            window.alert("Esta conta nao tem Email cadastrado")
            
        }else{

            window.location.href =`mailto:${objCurrent.email}`
        }
        
    })

    buttonInnerUser.addEventListener("click",()=>{
        window.location.href ="../home/index.html"
    })

}

headerPageGenerator()

async function CardsPageGenerator(){

  
let cards = document.querySelector(".cards")

 let res1 = await fetch(objCurrent.repos_url)
 let repos = await res1.json()

 repos.forEach( element =>{

  

  let card = document.createElement("div")
  let h2Card = document.createElement("h2")
  let textCard = document.createElement("p")
  let buttonRep = document.createElement("button")
  let buttonDemo = document.createElement("button")
  let divButtonsCard = document.createElement("div")

  card.classList.add("card")
  h2Card.classList.add("h2Card")
  textCard.classList.add("textCard")
  divButtonsCard.classList.add("divButtonsCard")
  buttonRep.classList = "buttonRep buttonDefult"
  buttonDemo.classList= "buttonDemo buttonDefult"

  h2Card.innerText=element.name
  textCard.innerText=element.description
  buttonRep.innerText="Repositório"
  buttonDemo.innerText="Demo"


  buttonRep.addEventListener("click",()=>{

   window.location.href = element.html_url

    
  })


  cards.appendChild(card)
  card.append(h2Card, textCard, divButtonsCard)
  divButtonsCard.append(buttonRep,buttonDemo)


  

 })

}

CardsPageGenerator()

/* <main class="">

<section class="cards">
  <div class="card">
    <h2 class="h2Card">
      Project Module 2 - Kenzie
    </h2>
    <p class="textCard">
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like
    </p>
    
    <button class="buttonRep buttonDefult">Repositório</button>
    <button class="buttonDemo buttonDefult">Demo</button>

  </div>
</section>

</main> */