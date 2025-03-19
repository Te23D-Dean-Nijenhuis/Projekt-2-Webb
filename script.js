window.addEventListener("resize", Flyttaitems);



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
const Meny = document.getElementById("VarukorgMeny");


function ToggleVarukorg()
{
    Meny.classList.toggle("meny");
}

const FilterDrop = document.getElementById("FilterMeny");

function FilterMeny()
{
    console.log("amakam")
    FilterDrop.classList.toggle("Visa");
}