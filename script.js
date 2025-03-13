window.addEventListener("resize", Flyttaitems);


function Flyttaitems ()
{
    let itemVarukorg = document.getElementById("Varukorg");
    
    let Navbar = document.getElementById("nav");
    let Headerbar = document.getElementById("header");
    
    if (window.innerWidth < 1024)
        {
            Navbar.appendChild(itemVarukorg);
        } else
        {
            Headerbar.appendChild(itemVarukorg);
        }
}