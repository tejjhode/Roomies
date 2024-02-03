const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


let hero = document.querySelector(".dots");
let next = document.querySelector("#nextClick");
let next1 = document.querySelector("#next1Click");
let next2 = document.querySelector("#next2Click");
let next3 = document.querySelector("#next3Click");
let img = document.querySelector(".her0-img");
let mode = document.querySelector(".mode");


  let currMode ="light";
  let newOption = next;
 if(hero.classList.value === "dots"){
    hero.classList.add('next');
    
 }

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
      mode.style.backgroundColor="white";
     }
  })


next1.addEventListener("click",() =>{
    hero.classList.add('next1');
    hero.classList.remove('next2');
    hero.classList.remove('next3');
    hero.classList.remove('next');
    // console.log("clicked");
    
    

})
next2.addEventListener("click",() =>{
    hero.classList.add('next2');
    hero.classList.remove('next1');
    hero.classList.remove('next3');
    hero.classList.remove('next');
    // console.log("clicked");
})
next3.addEventListener("click",() =>{
    hero.classList.add('next3');
    hero.classList.remove('next2');
    hero.classList.remove('next1');
    hero.classList.remove('next');
    // console.log("clicked");
})
next.addEventListener("click",() =>{
    hero.classList.add('next');
    hero.classList.remove('next1');
    hero.classList.remove('next2');
    hero.classList.remove('next3');
    // console.log("clicked");
})
let pSidebar = document.querySelector('#profile');
let sideBarp = document.querySelector('.close');



pSidebar.addEventListener("click",() =>{
    sideBarn.classList.remove('notification-sidebar');
    sideBarn.classList.add('closeN');
    sideBara.classList.remove('about-sidebar');
    sideBara.classList.add('closeA');
    
     if(sideBarp.classList.value === "close") {
        sideBarp.classList.add('profile-sidebar');
        sideBarp.classList.remove('close');
       
       
     }
     else{
        sideBarp.classList.remove('profile-sidebar');
        sideBarp.classList.add('close');

     }
    
    
})

let aSidebar = document.querySelector('#about');
let sideBara = document.querySelector('.closeA');


aSidebar.addEventListener("click",() =>{
    sideBarn.classList.remove('notification-sidebar');
    sideBarn.classList.add('closeN');

    sideBarp.classList.remove('profile-sidebar');
        sideBarp.classList.add('close');
     if(sideBara.classList.value === "closeA") {
        sideBara.classList.add('about-sidebar');
        sideBara.classList.remove('closeA');
       
       
     }
     else{
        sideBara.classList.remove('about-sidebar');
        sideBara.classList.add('closeA');

     }
    
    
})
let nSidebar = document.querySelector('#notification');
let sideBarn = document.querySelector('.closeN');


nSidebar.addEventListener("click",() =>{
    sideBara.classList.remove('about-sidebar');
    sideBara.classList.add('closeA');
    sideBarp.classList.remove('profile-sidebar');
        sideBarp.classList.add('close');
    
  
     if(sideBarn.classList.value === "closeN") {
        sideBarn.classList.add('notification-sidebar');
        sideBarn.classList.remove('closeN');
       
       
     }
     else{
        sideBarn.classList.remove('notification-sidebar');
        sideBarn.classList.add('closeN');

     }
    
    
})

const followT = document.querySelector('#followButton');
  let currStatus = "follow";

followT.addEventListener("click",() =>{
    if(currStatus==="follow"){
        currStatus="following"
        followT.style.backgroundColor="white";
        followT.innerText="✔️ Following"
    }

    else{
        currStatus ="follow"
        followT.style.backgroundColor="rgb(90, 189, 225)";
        followT.innerText="+ Follow"
    }
})
const followR = document.querySelector('.followButtonRaju');
  let currStatusR = "followR";

followR.addEventListener("click",() =>{
    if(currStatusR==="followR"){
        currStatusR="followingR"
        followR.style.backgroundColor="white";
        followR.innerText="✔️ Following"
    }

    else{
        currStatusR ="followR"
        followR.style.backgroundColor="rgb(90, 189, 225)";
        followR.innerText="+ Follow";
    }
})
const followYu = document.querySelector('.followButtonYugal');
let currStatusYu = "followYu";

followYu.addEventListener("click",() =>{
    if(currStatusYu==="followYu"){
        currStatusYu="followingYu"
        followYu.style.backgroundColor="white";
        followYu.innerText="✔️ Following"
    }

    else{
        currStatusYu ="followYu"
        followYu.style.backgroundColor="rgb(90, 189, 225)";
        followYu.innerText="+ Follow";
    }
})
const followV = document.querySelector('.followButtonVishwas');
  let currStatusV = "followR";

followV.addEventListener("click",() =>{
    if(currStatusV==="followR"){
        currStatusV="followingR"
        followV.style.backgroundColor="white";
        followV.innerText="✔️ Following"
    }

    else{
        currStatusV ="followR"
        followV.style.backgroundColor="rgb(90, 189, 225)";
        followV.innerText="+ Follow";
    }
})
const followVi = document.querySelector('.followButtonVivek');
  let currStatusVi = "followR";

followVi.addEventListener("click",() =>{
    if(currStatusVi==="followR"){
        currStatusVi="followingR"
        followVi.style.backgroundColor="white";
        followVi.innerText="✔️ Following"
    }

    else{
        currStatusVi ="followR"
        followVi.style.backgroundColor="rgb(90, 189, 225)";
        followVi.innerText="+ Follow";
    }
})
const followP = document.querySelector('.followButtonPratham');
  let currStatusP = "followR";

followP.addEventListener("click",() =>{
    if(currStatusP==="followR"){
        currStatusP="followingR"
        followP.style.backgroundColor="white";
        followP.innerText="✔️ Following"
    }

    else{
        currStatusP ="followR"
        followP.style.backgroundColor="rgb(90, 189, 225)";
        followP.innerText="+ Follow";
    }
})
const followY = document.querySelector('.followButtonYash');
  let currStatusY = "followR";

followY.addEventListener("click",() =>{
    if(currStatusY==="followR"){
        currStatusY="followingR"
        followY.style.backgroundColor="white";
        followY.innerText="✔️ Following"
    }

    else{
        currStatusY="followR"
        followY.style.backgroundColor="rgb(90, 189, 225)";
        followY.innerText="+ Follow";
    }
})

let cSidebar = document.querySelector('#chats');
let sideBarc = document.querySelector('.closeC');
let closeChat = document.querySelector('.close-chats');



cSidebar.addEventListener("click",() =>{
   
     if(sideBarc.classList.value === "closeC") {
        sideBarc.classList.add('chats');
        sideBarc.classList.remove('closeC');
       
       
     }
     closeChat.addEventListener("click",() =>{
        sideBarc.classList.remove('chats');
        sideBarc.classList.add('closeC');
     })
        
})