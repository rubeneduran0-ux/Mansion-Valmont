
function mostrarFinal() {

    const final = document.getElementById("finalValmont");

    if (!final) {
        console.error("❌ No se encontró #finalValmont");
        return;
    }

    // =================================================
    // MÚSICA
    // =================================================

    if (musica && musica.paused) {

        musica.volume = 0.35;

        musica.play().catch(() => {});

    }

    // =================================================
    // ACTIVAR FINAL
    // =================================================

    final.classList.add("mostrar");

    // =================================================
    // SCROLL CINEMATOGRÁFICO
    // =================================================

    setTimeout(() => {

        final.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 500);

}