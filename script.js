window.addEventListener("resize", Flyttaitems);
window.addEventListener("DOMContentLoaded", Flyttaitems)
 // window.addEventListener("DOMContentLoaded", LoadData)

let VarukorgLista = document.getElementById("VarukorgLista");
const Balte = document.getElementsByClassName("Bälte");
const Ringar = document.getElementsByClassName("Ring");
const Armband = document.getElementsByClassName("Armband");
const VarukorgMeny = document.getElementById("VarukorgMeny");
let main = document.querySelector("main");
let Varor = document.getElementById("VaraContainer")


let ListaVaror = 
[
    {
        name: "Bälte vitt svart grå",
        pris: 150,
        antal: 0
    },
    {
        name: "Bälte beige",
        pris: 250,
        antal: 0
    },
    {
        name: "Ring Shiny",
        pris: 150,
        antal: 0
    },
    {
        name: "Ring Grov textur",
        pris: 250,
        antal: 0
    },
    {
        name: "Fake hugo armband",
        pris: 150,
        antal: 0
    },
    {
        name: "Armband flera delar",
        pris: 250,
        antal: 0
    }
];


LoadData();

LoadVarukorg(ListaVaror);



main.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", function(event) {
        let ItemId = event.target.dataset.index;
        
        LaggTillVarukorg(ItemId, ListaVaror);
        
        SparaData(ListaVaror);
    });
});




function LaggTillVarukorg (ItemId, ListaVaror)
{
    console.log("1234");
    if (ListaVaror[ItemId].antal > 0)
    {
        ListaVaror[ItemId].antal += 1;
        const ItemInteNew = document.querySelector(`[data-name="${ItemId}"]`)
        ItemInteNew.textContent =  `${ListaVaror[ItemId].name} - ${ListaVaror[ItemId].antal} st - ${ListaVaror[ItemId].pris * ListaVaror[ItemId].antal}`;
        console.log(ListaVaror[ItemId].antal)
    } else
    {
        ListaVaror[ItemId].antal += 1;
        const newitem = document.createElement("li");
        newitem.setAttribute("data-name", ItemId)
        newitem.textContent =  `${ListaVaror[ItemId].name} - ${ListaVaror[ItemId].antal} st - ${ListaVaror[ItemId].pris * ListaVaror[ItemId].antal}`;
        VarukorgLista.appendChild(newitem);
        console.log(ListaVaror[ItemId].antal)
    }

}




function Flyttaitems()
{
    console.log("metod kallad,", window.innerWidth);
    
    let itemVarukorg = document.getElementById("Varukorg");
    let itemOmOss = document.getElementById("Om")
    let itemBild = document.getElementById("LoggaContainer")
    
    let Navbar = document.getElementById("nav");
    let Headerbar = document.getElementById("header");
    
    if (window.innerWidth > 1024)
        {
            Navbar.appendChild(itemOmOss);
            Navbar.appendChild(itemBild);
            Navbar.appendChild(itemVarukorg);
        } else if (window.innerWidth > 767)
        {
            Headerbar.appendChild(itemVarukorg);
            Navbar.appendChild(itemOmOss);
            Navbar.appendChild(itemBild);
        }  else 
        {
            Headerbar.appendChild(itemOmOss);
            Headerbar.appendChild(itemVarukorg);
        }
}



function ToggleVarukorg()
{
    VarukorgMeny.classList.toggle("meny");
}

const FilterDrop = document.getElementById("FilterMeny");

function FilterMeny()
{
    FilterDrop.classList.toggle("Visa");
}


function SparaData (ListaVaror)
{
    console.log("SparaData :"+ListaVaror);
    localStorage.setItem("userdata", JSON.stringify(ListaVaror));

    console.log("datasparad");
}


function LoadData() {
    console.log("Load data start:");

    const HamtadData = localStorage.getItem("userdata");
    if (HamtadData) {
        ListaVaror = JSON.parse(HamtadData);
        console.log("Load data HämtadData ej null:");

    }
     console.log("Load data listVaror:"+ListaVaror);
}

function LoadVarukorg (ListaVaror)
{
    for (let index = 0; index < ListaVaror.length; index++) {
        if (ListaVaror[index].antal > 0)
        {
            const newitem = document.createElement("li");
            newitem.setAttribute("data-name", index);
            newitem.textContent =  `${ListaVaror[index].name} - ${ListaVaror[index].antal} st - ${ListaVaror[index].pris * ListaVaror[index].antal}`;
            VarukorgLista.appendChild(newitem);
        }
        console.log(ListaVaror[index].antal)
    }
}
function HideBalte()
{
    for (let index = 0; index < Balte.length; index++) {
        Balte[index].classList.toggle("hide");
    }
}
function HideRingar()
{
    for (let index = 0; index < Balte.length; index++) {
        Ringar[index].classList.toggle("hide");
    }
}
function HideArmband()
{
    for (let index = 0; index < Balte.length; index++) {
        Armband[index].classList.toggle("hide");
    }
}

function TomVarukorg (ListaVaror)
{
    for (let index = 0; index < ListaVaror.length; index++) {
        ListaVaror[index].antal = 0;
        document.getElementById("VarukorgLista").innerHTML = "";
    }
    SparaData(ListaVaror);

    console.log("aaaaa")

}