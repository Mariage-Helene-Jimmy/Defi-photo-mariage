const URL_GOOGLE = "https://script.google.com/macros/s/AKfycbwbewX0fgK_A8_FHDOv91LBZklfkJoBblRms92i12iNj5P0WMjeBd1Id3Vo3y0BxSdf/exec";

let tableChoisie = localStorage.getItem("table");


// Affichage de la table
if (tableChoisie) {
  document.getElementById("table").innerHTML =
    "🎉 Vous êtes : " + tableChoisie;

  chargerScore();
  chargerDefis();
}


// Charger le score
function chargerScore() {

  fetch(`${URL_GOOGLE}?action=score&table=${tableChoisie}`)
    .then(response => response.json())
    .then(data => {

      document.getElementById("score").innerHTML =
        "Score : " + data.score + " points";

    });
}


// Charger les défis
function chargerDefis() {

  fetch(`${URL_GOOGLE}?action=defis`)
    .then(response => response.json())
    .then(defis => {

      let zone = document.getElementById("defis");

      zone.innerHTML = "";

      defis.forEach(defi => {

        zone.innerHTML += `
          <div class="defi">

            <h3>${defi.nom}</h3>

            <p>${defi.points} points</p>

            <button onclick="validerDefi(${defi.points})">
              Défi réalisé !
            </button>

          </div>
        `;

      });

    });
}


// Ajouter les points
function validerDefi(points) {

  fetch(
    `${URL_GOOGLE}?action=ajouter&table=${tableChoisie}&points=${points}`
  )
  .then(response => response.json())
  .then(data => {

    document.getElementById("score").innerHTML =
      "Score : " + data.score + " points";

    alert("Bravo ! +" + points + " points 🎉");

  });
}
