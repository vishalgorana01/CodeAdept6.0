console.log("hello, This is team page");

// let card = document.querySelectorAll(".card");



// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("mouseover", function () {
//         card[i].children[1].style.transition = "all 0.4s";
//         card[i].children[1].style.transform = "translateX(0%)";

//         card[i].children[2].children[0].style.transition = "all 0.4s";
//         card[i].children[2].children[0].style.opacity = "0.5";

//         card[i].children[2].children[1].style.transition = "all 0.4s";
//         card[i].children[2].children[1].style.opacity = "0.5";

//         card[i].children[2].children[2].style.transition = "all 0.4s";
//         card[i].children[2].children[2].style.opacity = "0.5";

//         card[i].children[2].children[3].style.transition = "all 0.4s";
//         card[i].children[2].children[3].style.opacity = "0.5";


//         card[i].children[4].style.transition = "all 0.4s";
//         card[i].children[4].style.transform = "translateX(0%)";
//     })

//     for(let j=0; j<card[i].children[2].childElementCount; j++){
//         card[i].children[2].children[j].addEventListener("mouseenter", function(){
//             card[i].children[2].children[j].style.opacity = "1";
//             console.log("span")
//         })

//         card[i].children[2].children[j].addEventListener("mouseleave", function(){
//             card[i].children[2].children[j].style.opacity = "0.5";
//         })
//     }

// }

// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("mouseleave", function () {
//         card[i].children[1].style.transition = "all 0.4s";
//         card[i].children[1].style.transform = "translateX(200%)";

//         card[i].children[2].children[0].style.transition = "all 0.4s";
//         card[i].children[2].children[0].style.opacity = "0";

//         card[i].children[2].children[1].style.transition = "all 0.4s";
//         card[i].children[2].children[1].style.opacity = "0";

//         card[i].children[2].children[2].style.transition = "all 0.4s";
//         card[i].children[2].children[2].style.opacity = "0";

//         card[i].children[2].children[3].style.transition = "all 0.4s";
//         card[i].children[2].children[3].style.opacity = "0";


//         card[i].children[4].style.transition = "all 0.4s";
//         card[i].children[4].style.transform = "translateX(-100%)";
//     });

// }

// **********************************************************************************

let card = document.querySelectorAll(".card");

for(let i=0; i<card.length; i++){
    card[i].addEventListener("mouseover", function(){
        card[i].children[0].style.transition = "all 0.4s";
        card[i].children[0].style.transform = "translateY(0%)";

        card[i].children[1].style.border = "6px solid #287ab9";

        card[i].children[3].style.transition = "all 0.4s";
        card[i].children[3].style.transform = "translateY(0%)";
    })

    for(let j=0; j<card[i].children[3].children[0].childElementCount; j++){
        card[i].children[3].children[0].children[j].addEventListener("mouseover", function(){
            card[i].children[3].children[0].children[j].style.backgroundColor = "white";
            card[i].children[3].children[0].children[j].children[0].style.color = "#2274C5";
        });

        card[i].children[3].children[0].children[j].addEventListener("mouseleave", function(){
            card[i].children[3].children[0].children[j].style.backgroundColor = "#2274c5";
            card[i].children[3].children[0].children[j].children[0].style.color = "white";
        });
    }

    card[i].addEventListener("mouseleave", function(){
        card[i].children[0].style.transition = "all 0.4s";
        card[i].children[0].style.transform = "translateY(-100%)";

        card[i].children[1].style.border = "none";

        card[i].children[3].style.transition = "all 0.4s";
        card[i].children[3].style.transform = "translateY(200%)";
    })
}


const menubar = document.querySelector(".menubar");
const navMenu = document.querySelector(".nav-menu");

menubar.addEventListener("click", ()=>{
    menubar.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    menubar.classList.remove("active");
    navMenu.classList.remove("active");
}))


let uname = document.getElementById("uname");
        // let pass = document.getElementById("pass");
        // let cpass = document.getElementById("cpass")
        

        let flag = 1;

        function validate() {
            if (uname.value.trim() == "") {
                document.getElementById("usererror").innerHTML = "User name is empty";
                uname.style.border = "1px solid red";
                flag = 0;

            } else if (uname.value.length < 4) {
                document.getElementById("usererror").innerHTML = "User name required min 4 char";
                uname.style.border = "1px solid red";
                flag = 0;

            } else {
                document.getElementById("usererror").innerHTML = "";
                uname.style.border = "1px solid green";
                flag = 1;

            }

            
            var text = document.getElementById("text").value;

            var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

            if (regx.test(text)) {
                document.getElementById("ibtext").innerHTML = "";
                document.getElementById("text").style.border = "1px solid green";
                true;
            } else {
                document.getElementById("ibtext").innerHTML = "Invalid";
                document.getElementById("text").style.border = "1px solid red";
                document.getElementById("ibtext").style.color = "red";
                false;
            }
            // var number = document.getElementById("number").value;

            // var reg = /^[7-9][0-9]{9}$/;

            // if (reg.test(number)) {
            //     document.getElementById("numbererror").innerHTML = "";
            //     document.getElementById("number").style.border = "1px solid green";
            //     true;
            // } 
            // else {
            //     document.getElementById("numbererror").innerHTML = "Invalid";
            //     document.getElementById("number").style.border = "1px solid red";
            //     document.getElementById("numbererror").style.color = "red";
            //     false;

            // }
            if (flag) {
                return true;
            } else {
                return false;
            }
            // if(validate == true){
            //     alert("hiii");
            // }
        }