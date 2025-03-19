window.addEventListener("resize", Flyttaitems);

const Meny = document.getElementById("VarukorgMeny")


function Flyttaitems()
{
    console.log("metod kallad,", window.innerWidth);

    let itemVarukorg = document.getElementById("Varukorg");
    
    let Navbar = document.getElementById("nav");
    let Headerbar = document.getElementById("header");
    
    if (window.innerWidth > 1024)
        {
            Navbar.appendChild(itemVarukorg);
        } else
        {
            Headerbar.appendChild(itemVarukorg);
        }

}

function ToggleVarukorg()
 {
    Meny.classList.toggle("meny");
 }