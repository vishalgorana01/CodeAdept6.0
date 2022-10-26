const days = document.getElementById("days");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const currentYear =new Date().getFullYear();

const eventDate= new Date("Novmber 25 2022 00:00:00");

//update countdown
function updateCountdowntime(){

    const currentTime = new Date();
    const diff = eventDate - currentTime;

    const d=Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60)%24;
    const m = Math.floor(diff/1000/60)%60;
    const s = Math.floor(diff/1000)%60;
    // console.log(d);
    // console.log(h);
    // console.log(m);
    // console.log(s);

    days.innerHTML =d;
    hour.innerHTML = h<10? '0' + h: h;
    // hour.innerHTML =h;
    // min.innerHTML =m;
    min.innerHTML = m<10? '0' + m: m;
    sec.innerHTML = s<10? '0' + s: s;
    // sec.innerHTML =s;
}
setInterval(updateCountdowntime, 1000);
// updateCountdowntime();

// Navbar code
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