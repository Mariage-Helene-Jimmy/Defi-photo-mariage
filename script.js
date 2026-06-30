document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "🎉 Merci pour votre participation !\n\n" +
            "Vos photos seront bientôt envoyées."
        );

    });

});
