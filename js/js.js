
// Opgave 1: copyright tegn, navn, dag, måned, år,klokkeslet

// globale variabler
let d = new Date(); 
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// footer som objekt
const info = {
  author: 'Mia Nedergaard', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  
  // Metode
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Alice\'s Restaurant, 2022<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  }
}


info.skrivTilFooter();

// Opgave 2: adresse, tlf, email

const oplys = {
  adresse: 'Adresse: Mejlgade 23 <br>8000 Aarhus C', // Spørgsmål 2
  telefon: 'Tlf: +45 12345678',
  email: 'E-mail: alice@restaurant.dk', // Spørgsmål 2

  skrivAdresse: function() {
    oplysninger.innerHTML += `
      <div class="adresse">
        <p>
          ${this.adresse}<br>
          ${this.telefon}<br>
          ${this.email}
        </p>
      </div>
    `
  }
}
oplys.skrivAdresse(); // Spørgsmål 2

// Opgave 3: Array - medarbejdernes navne

let job = [
    "Opvasker: Tommy",
    "Tjener: Brian",
    "Tjener: Mille",
    "Køkkenchef: Kim",
    "Opvasker: Karen",
    "All around: Mona",
    
]

job.sort()
for (showMe in job){
    medarbejdere.innerHTML += '<li>' + job [ showMe ] + '</li>';

}

// Opgave 3: Array - åbningstider

let a = [
  "Mandag - Fredag",
  "9:00 - 21:00",
  "Lørdag - Søndag",
  "8:00 - 20:00",
]

for (showMe in a){
  åbningstider.innerHTML += '<li>' + a [ showMe ] + '</li>';

}

let i = [
    "Menu",
    "Takeaway",
    "Book bord",
    "Kontakt",
]

for (showMe in i){
    information.innerHTML += '<li>' + i [ showMe ] + '</li>';

}


// Opgave 4: Citat/Slogan (mangler)

let citater = [
  '"Man kan ikke leve godt, elske godt eller sove godt - uden at spise godt." <br>',
  '"Der findes ingen sandere kærlighed end kærlighed til mad." <br> ',
  '"Gør noget godt for dig selv. Snup en bid mad." <br>',
  '"Du må godt lade som om du selv har lavet det." <br>',
  '"Sæt dig til rette og lad os fylde din mave med gode råvarer." <br>',
  '"Der findes ikke et hyggeligere sted i verden, end hos Alice."<br>',
  '"Utallige lækkerier og gode snakke." <br>'
];

// selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();


// Opgave 5: Responsiv hamburgermenu med animation

const menu_btn = document.querySelector('.hamburger');

const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

// Opgave 6: Dropdown menu

// Vis dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Lukker dropdown
window.onclick = function(dropdown) {
  if (!dropdown.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// Opgave 7: Flowchart, switch

let today = new Date();
let dag = today.getDate();

let ugedag = 0;
let day;

switch (ugedag) {

  case 1:
    day = 'Mandag: 9:00 - 21:00';
    break;
  case 2:
    day = 'Tirsdag: 09:00 - 21:00';
    break;
  case 3:
    day = 'Onsdag: 09:00 - 21:00';
    break;
  case 4:
    day = 'Torsdag: 09:00 - 21:00';
    break;
  case 5:
    day = 'Fredag: 09:00 - 21:00';
    break;

  default:
    day = 'Weekend: 8:00 - 20:00'
}


idag.innerHTML = '<h4>Idag har vi åbent</h4>' + day 

// Opgave 8: Video - isElementVisible, if or else

// Den øverste video

let options = {
  root: null,
  rootMargin:'0px',
  threshold:1.0
};

let callback = (entries, observer)=>{
  entries.forEach(entry => {
    if(entry.target.id == 'myVideo'){

      if(entry.isIntersecting){
        entry.target.play();
      }
      else{
        entry.target.pause();
      }
    }
    
  });
}

let observer = new IntersectionObserver(callback,options);
observer.observe(document.querySelector('#myVideo'))

// Opgave 9: Formular og form validation

btn1.addEventListener('click', function(){
  radio.style.display = 'block';
  navn.style.display = 'none';

})

btn2.addEventListener('click', function(){
  tjek.style.display = 'block';
  radio.style.display = 'none';

})

btn3.addEventListener('click', function(){
  lastField.style.display = 'block';
  tjek.style.display = 'none';

})

// Form validation

let name;
btn1.addEventListener('click', function() {

  if (document.getElementById("Name").value == "" 
  	|| document.getElementById("Name").value == null) {
    alert('Please fill in your name');
    //return false;
  } else {
    // display the next formfield
    radio.style.display = 'block'
    // hide formfield F1
    navn.style.display = 'none'
  }
})

let radio;
btn2.addEventListener('click', function() {

  if (document.getElementById("dato").value == "" 
  	|| document.getElementById("valg1").value == null) {
    alert('Please fill in the date');
    //return false;
  } else {
    // display the next formfield
    tjek.style.display = 'block'
    // hide formfield F1
    radio.style.display = 'none'
  }
})


// Opgave 10: JSON - menu

// Menu - brunch

menu = `{
  "menu": [
    {
      "Id": 1,
      "Titel": "Brødkurv",
      "Beskrivelse": "Kurv fyldt med vores hjemmebagte surdejsbrød. Hertil serveres smør fra Thy Mejeri",
      "Ret": "Brunch"
    },
    {
      "Id": 2,
      "Titel": "Røræg",
      "Beskrivelse": "Cremet røræg toppet med purløg",
      "Ret": "Brunch"
    },
    {
      "Id": 3,
      "Titel": "Bacon",
      "Beskrivelse": "Sprødt bacon stegt under bøgeflis. Hertil serveres stegte kanteraller",
      "Ret": "Brunch"
    },
    {
      "Id": 4,
      "Titel": "Røget laks",
      "Beskrivelse": "Norsk vildlaks serveret med dildcreme toppet med stenbidderrogn",
      "Ret": "Brunch"
    },
    {
      "Id": 5,
      "Titel": "Vildsvinepølser",
      "Beskrivelse": "Vildsvinepølser serveres med hjemmelavet tomatrelish ",
      "Ret": "Brunch"
    },
    {
      "Id": 6,
      "Titel": "Æg og avokado",
      "Beskrivelse": "Blødkogt æg serveres med en halv avokado dryppet med citronolie. Toppes med skovsyre.",
      "Ret": "Brunch"
    },
    {
      "Id": 7,
      "Titel": "Skyrskål",
      "Beskrivelse": "Skyr med hjemmelavet ingefærgranola toppes med sæsonens bær.",
      "Ret": "Brunch"
    },
    {
      "Id": 8,
      "Titel": "Kardemommesnurre",
      "Beskrivelse": "Alices berømte kardemommesnurre er bagt med kærlighed og masser af kardemomme.",
      "Ret": "Brunch"
    }
  ]
}
`;

const xxx = JSON.parse(menu);
console.log( xxx.menu[0].Titel )

// Menu - Frokost

menu1 = `{
  "menu1": [
    {
      "Id": 1,
      "Titel": "Æggemad",
      "Beskrivelse": "Smørrebrød med æg og fjordrejer på en bund af ærteskud toppet med hjemmerørt mayonnaise og purløg",
      "Ret": "Frokost"
    },
    {
      "Id": 2,
      "Titel": "Rødspættefillet",
      "Beskrivelse": "Friskfanget rødspættefillet fra havnen med enten mayonnaise eller remoulade toppet med citron ",
      "Ret": "Frokost"
    },
    {
      "Id": 3,
      "Titel": "Ål",
      "Beskrivelse": "Røget ål på en bund af sprød salat toppet med hjemmerørt mayonnaise, æggestand og ristede løg",
      "Ret": "Frokost"
    },
    {
      "Id": 4,
      "Titel": "Sild",
      "Beskrivelse": "Vælg mellem marinerede, karry eller krydresild. Toppet med æggstand og rå løg",
      "Ret": "Frokost"
    },
    {
      "Id": 5,
      "Titel": "Roastbeef",
      "Beskrivelse": "Tyk skiveskåret stykker roastbeef hertil med grov remoulade, ristede og rå løg samt friskrevet peberrod",
      "Ret": "Frokost"
    },
    {
      "Id": 6,
      "Titel": "Kartoffel",
      "Beskrivelse": "Røget kartoffel med hjemmerørt mayonnaise, ærteskud, ristede og rå løg",
      "Ret": "Frokost"
    },
    {
      "Id": 7,
      "Titel": "Rullepølse",
      "Beskrivelse": "Hjemmelavet rullepølse toppet med sky og rå løg",
      "Ret": "Frokost"
    },
    {
      "Id": 8,
      "Titel": "Leverpostej",
      "Beskrivelse": "Hjemmelavet leverpostej med bacon og smørstegte svampe",
      "Ret": "Frokost"
    }
  ]
}
`;

const xxxx = JSON.parse(menu1);
console.log( xxxx.menu1[0].Titel )

// Menu - Drikkevarer

menu2 = `{
  "menu2": [
  {
    "Id": 1,
    "Titel": "Filterkaffe",
    "Beskrivelse": "Lille/stor",
    "Pris": "20/30 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 2,
    "Titel": "Cafe Latte",
    "Beskrivelse": "Lille/stor",
    "Pris": "45/55 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 3,
    "Titel": "Americano",
    "Beskrivelse": "Lille/stor",
    "Pris": "40/45 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 4,
    "Titel": "Cappucino",
    "Beskrivelse": "Lille/stor",
    "Pris": "35/45 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 5,
    "Titel": "Flat White",
    "Beskrivelse": "Lille/stor",
    "Pris": "30/40 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 6,
    "Titel": "Varm kakao",
    "Beskrivelse": "Lille/stor",
    "Pris": "30/40 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 7,
    "Titel": "The",
    "Beskrivelse": "Lille/stor",
    "Pris": "20/25 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 8,
    "Titel": "Vand",
    "Beskrivelse": "Postevand eller danskvand",
    "Pris": "10/20 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 9,
    "Titel": "Økologisk saft",
    "Beskrivelse": "Vælg mellem:  Hyldeblomst, havtorn, solbær og rabarber",
    "Pris": "49 kr",
    "Ret": "Drikkevarer"
  },
  {
    "Id": 10,
    "Titel": "Juice",
    "Beskrivelse": "Vælg mellem:  Appelsin, appelsin og gulerod, den grønne og æble",
    "Pris": "49 kr",
    "Ret": "Drikkevarer"
  }
]
}`;

const xxxxx = JSON.parse(menu2);
console.log( xxxxx.menu2[0].Titel )

//loop der henter hele arrayet


// Loop - Brunch

for (let m=0; m<xxx.menu.length; m++){
  console.log(xxx.menu[m].Titel)
  document.getElementById("brunch").innerHTML += `
  <div class="menuBrunch">
  <h2> ${xxx.menu[m].Titel} </h2>
  <p>${xxx.menu[m].Beskrivelse}</p>
  `
}

// Loop - Frokost

for (let o=0; o<xxxx.menu1.length; o++){
  console.log(xxxx.menu1[o].Titel)
  document.getElementById("frokost").innerHTML += `
  <div class="menuFrokost">
  <h2> ${xxxx.menu1[o].Titel} </h2>
  <p>${xxxx.menu1[o].Beskrivelse}</p>
  `
}

// Loop - Drikkevarer

for (let p=0; p<xxxxx.menu2.length; p++){
  console.log(xxxxx.menu2[p].Titel)
  document.getElementById("drikkevarer").innerHTML += `
  <div class="menuDrikke">
  <h2> ${xxxxx.menu2[p].Titel} </h2>
  <p>${xxxxx.menu2[p].Beskrivelse}</p>
  <p>${xxxxx.menu2[p].Pris}</p>
  `
}

// Menuer show/hide

function myBrunch() {
  var x = document.getElementById("brunch");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFrokost() {
  var v = document.getElementById("frokost");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}

function myDrikkevarer() {
  var t = document.getElementById("drikkevarer");
  if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";
  }
}


 
// Animation roterende tekst

const circleText = document.querySelector('.circletext');

circleText.innerHTML = circleText.textContent.replace(/\S/g,
  "<span>$&</span>");

  const element = document.querySelectorAll('span');

  for (let i = 0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*21+"deg)"
  }
