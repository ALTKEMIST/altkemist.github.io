(function (){
    // Carga de la pagina
    var preload = document.getElementById("preload");
    var loading = 0;
    var id = setInterval(frame, 64);

    function frame(){
        if (loading==5){
            clearInterval(id)
            window.open("https://altkemist.github.io/altkemist", "_self");
        }
        else {
            loading += 1;
            if (loading == 4){
                preload.style.animation = "fradeout 1s ease"
            }
        }
    }
})();
