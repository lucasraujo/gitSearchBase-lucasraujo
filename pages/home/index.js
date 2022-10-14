/* Desenvolva sua lógica aqui...*/

let objSearch

let arrTree =[]



if(localStorage.getItem("arrTree") ){

    arrTree= JSON.parse(localStorage.getItem("arrTree"))
    
}



async function getUser(user){

try{
    let data = await fetch(`https://api.github.com/users/${user}`)
    let datajason = await data.json()
    let button1 = document.querySelector("#button1")
    let NotFundText =document.querySelector(".userNotFound")



    if(data.status === 200){
        button1.classList ="buttonShearchUser"
        NotFundText.innerText =""
        button1.innerText="Ver perfil do github"
        button1.disabled = false
        objSearch = datajason

        
    } else if(data.status === 404){
        button1.classList = "buttonShearchUserDefault"
        NotFundText.innerText = "usuario nao encontrado"
        button1.innerText="Ver perfil do github"
        button1.disabled = true
    } 
    

}catch{

    console.log(" error")
    
}

}


function submitUser(){
    let inputHome = document.querySelector(".inputHome")
    let button1 = document.querySelector(".buttonShearchUserDefault")
    

    inputHome.addEventListener("keyup",()=>{

        button1.innerText=""

        button1.classList ="buttonShearchUserloading"
        getUser(inputHome.value)


    } )

}

submitUser()


function buttonClick(){

    let button1 = document.querySelector("#button1")

    button1.addEventListener("click",()=>{
        
        
        arrTree.unshift(objSearch)
        if(arrTree.length > 3 ){
            arrTree.splice(3,1)
        }

        let arrjson =JSON.stringify(arrTree)
        localStorage.setItem("arrTree",arrjson)
        
        
        let objJson = JSON.stringify(objSearch)
        localStorage.setItem("objSearched",objJson)


        

        window.location.href ="../profile/index.html"

        

        console.log(arrTree)
    })

    

}
buttonClick()

function recently(){
    arrTree.forEach(element =>{

        console.log(element)
        let ul = document.querySelector(".listResentUser")
        let li = document.createElement("li")
        let a = document.createElement("a")
        let img = document.createElement("img")
        let span = document.createElement("span")


        li.classList.add("resentUser")
        a.classList.add("linkUser")
        img.classList.add("imgUser")
        span.classList.add("spanAccess")


        a.addEventListener("click",()=>{
            let objJson = JSON.stringify(element)
            localStorage.setItem("objSearched",objJson)
        })
        a.href ="../profile/index.html"
        
        img.src = element.avatar_url
        span.innerText ="Acessar este perfil"

        ul.appendChild(li)
        li.appendChild(a)
        a.append(img, span)


       
        
    })
}

recently()




