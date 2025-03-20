let I1 = document.getElementById("I1");
let I2 = document.getElementById("I2");
let I3 = document.getElementById("I3");
let I4 = document.getElementById("I4");
let I5 = document.getElementById("I5");
let I6 = document.getElementById("I6");

let ListaI = [I1,I2,I3,I4,I5,I6];

let ListaVaror = 
[
    {
        name: "Vara1",
        pris: 150,
        antal: 0
    },
    {
        name: "Vara2",
        pris: 150,
        antal: 0
    },
    {
        name: "Vara3",
        pris: 150,
        antal: 0
    },
    {
        name: "Vara4",
        pris: 150,
        antal: 0
    },
    {
        name: "Vara5",
        pris: 150,
        antal: 0
    },
    {
        name: "Vara6",
        pris: 150,
        antal: 0
    }
];

let main = document.querySelector("main");
let Varor = document.getElementById("VaraContainer")

main.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", function(event) {
        let ItemId = event.target.dataset.index;

        LaggTillVarukorg(ItemId, ListaVaror, ListaI);
    });
});

function LaggTillVarukorg (ItemId, ListaVaror, ListaI)
{
    if (ListaVaror[ItemId].antal > 0)
    {
        ListaVaror[ItemId].antal += 1;
        newitem.textContent =  `${ListaVaror[ItemId].name} - ${ListaVaror[ItemId].pris * ListaVaror[ItemId].antal}`;
        console.log(ListaVaror[ItemId].antal)
    } else
    {
        ListaVaror[ItemId].antal += 1;
        const newitem = document.createElement("p");
        newitem.textContent =  `${ListaVaror[ItemId].name} - ${ListaVaror[ItemId].pris * ListaVaror[ItemId].antal}`;
        VarukorgMeny.appendChild(newitem);
        console.log(ListaVaror[ItemId].antal)
    }

}

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
const VarukorgMeny = document.getElementById("VarukorgMeny");


function ToggleVarukorg()
{
    VarukorgMeny.classList.toggle("meny");
}

const FilterDrop = document.getElementById("FilterMeny");

function FilterMeny()
{
    console.log("amakam")
    FilterDrop.classList.toggle("Visa");
}

let ItemVara1 = document.getElementById("VaraItem1");
