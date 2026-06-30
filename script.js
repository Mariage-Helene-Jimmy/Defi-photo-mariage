const URL_GOOGLE = "https://script.google.com/macros/s/AKfycbwbewX0fgK_A8_FHDOv91LBZklfkJoBblRms92i12iNj5P0WMjeBd1Id3Vo3y0BxSdf/exec";

let tableChoisie = localStorage.getItem("table");


if(tableChoisie){

document.getElementById("table").innerHTML =
"🎉 Vous êtes : " + tableChoisie;


chargerScore();
chargerDefis();

}



function chargerScore(){


fetch(`${URL_GOOGLE}?action=score&table=${tableChoisie}`)

.then(r=>r.json())

.then(data=>{

document.getElementById("score").innerHTML =
"🏆 Score : " + data.score + " points";


});

}





function chargerDefis(){


fetch(`${URL_GOOGLE}?action=defis`)

.then(r=>r.json())

.then(defis=>{


let zone =
document.getElementById("listeDefis");


zone.innerHTML="";



defis.forEach(d=>{


zone.innerHTML += `

<div class="defi">

<h3>${d.nom}</h3>

<p>${d.points} points</p>


<button onclick="validerDefi('${d.nom}',${d.points})">

Défi réalisé !

</button>


</div>

`;

});


});


}





function validerDefi(nom,points){


fetch(
`${URL_GOOGLE}?action=ajouter&table=${tableChoisie}&points=${points}&defi=${nom}`
)


.then(r=>r.json())


.then(data=>{


document.getElementById("score").innerHTML =
"🏆 Score : " + data.score + " points";


alert(
"Bravo 🎉 +" + points + " points"
);


});


}
