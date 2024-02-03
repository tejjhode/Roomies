
let hero = document.querySelector(".hero-sec");
let next = document.querySelector("#nextClick");
let next1 = document.querySelector("#next1Click");
let next2 = document.querySelector("#next2Click");
let next3 = document.querySelector("#next3Click");
const follow =document.querySelector(".no");
const Raju = document.querySelector(".followButton");
const Yugal = document.querySelector(".followYugal");
const Vishwas = document.querySelector(".followVishwas");
const Vivek = document.querySelector(".followVivek");
const Pratham = document.querySelector(".followPratham");
const Yash = document.querySelector(".followYash");
let currFollow = "followsB";


Raju.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Raju.classList.add("followingsB");
        Raju.classList.remove("followsB");
        Raju.innerText = "✔️ Following";
        follow.innerText = "181";
        
    }
    else{
        currFollow = "followsB";
        Raju.classList.add("followsB");
        Raju.classList.remove("followingsB");
        Raju.innerText = "+ Follow";
        follow.innerText = "180";
       
    }

   
})
Yugal.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Yugal.classList.add("followingsB");
        Yugal.classList.remove("followsB");
        Yugal.innerText = "✔️ Following";
        
        
    }
    else{
        currFollow = "followsB";
        Yugal.classList.add("followsB");
        Yugal.classList.remove("followingsB");
        Yugal.innerText = "+ Follow";

    }

})
Vishwas.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Vishwas.classList.add("followingsB");
        Vishwas.classList.remove("followsB");
        Vishwas.innerText = "✔️ Following";
        
    }
    else{
        currFollow = "followsB";
        Vishwas.classList.add("followsB");
        Vishwas.classList.remove("followingsB");
        Vishwas.innerText = "+ Follow";

    }

})
Vivek.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Vivek.classList.add("followingsB");
        Vivek.classList.remove("followsB");
        Vivek.innerText = "✔️ Following";
        
    }
    else{
        currFollow = "followsB";
        Vivek.classList.add("followsB");
        Vivek.classList.remove("followingsB");
        Vivek.innerText = "+ Follow";

    }

})
Pratham.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Pratham.classList.add("followingsB");
        Pratham.classList.remove("followsB");
        Pratham.innerText = "✔️ Following";
        
    }
    else{
        currFollow = "followsB";
        Pratham.classList.add("followsB");
        Pratham.classList.remove("followingsB");
        Pratham.innerText = "+ Follow";

    }

})
Yash.addEventListener("click",() =>{
    if(currFollow==="followsB"){
        currFollow="followingsB";
        Yash.classList.add("followingsB");
        Yash.classList.remove("followsB");
        Yash.innerText = "✔️ Following";
        
    }
    else{
        currFollow = "followsB";
        Yash.classList.add("followsB");
        Yash.classList.remove("followingsB");
        Yash.innerText = "+ Follow";

    }

})


next1.addEventListener("click",() =>{
    hero.classList.add('next1');
    hero.classList.remove('next2');
    hero.classList.remove('next3');
    hero.classList.remove('next');
    

})
next2.addEventListener("click",() =>{
    hero.classList.add('next2');
    hero.classList.remove('next1');
    hero.classList.remove('next3');
    hero.classList.remove('next');
})
next3.addEventListener("click",() =>{
    hero.classList.add('next3');
    hero.classList.remove('next2');
    hero.classList.remove('next1');
    hero.classList.remove('next');
})
next.addEventListener("click",() =>{
    hero.classList.add('next');
    hero.classList.remove('next1');
    hero.classList.remove('next2');
    hero.classList.remove('next3');
})


let mode = document.querySelector(".mode");
  let currMode ="light";

  mode.addEventListener("click",() =>{
     if (currMode === "light"){
        currMode="dark";
        document.querySelector("body").classList.add('dark');
        document.querySelector("body").classList.remove('light');
        mode.innerText="🌙";
        mode.style.backgroundColor="black";
     }else{
      currMode="light";
      document.querySelector("body").classList.add('light');
      document.querySelector("body").classList.remove('dark');
      mode.innerText="☀️";
      mode.style.backgroundColor="rgb(90, 189, 225)";
     }
  })

