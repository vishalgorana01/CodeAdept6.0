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
