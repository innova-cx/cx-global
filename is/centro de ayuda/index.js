$(document).ready(function () {
    console.log(window.location.pathname);
    const cx_current_URL = window.location.pathname;

    switch (cx_current_URL) {
        case "/compra-en-linea":
            $("#cx_compraEnLinea").addClass("active");
            break;

        case "/cambios-devoluciones":
            $("#cx_cambios").addClass("active");
            break;

        case "/envios-entregas":
            $("#cx_envios").addClass("active");
            break;

        case "/formas-pago":
            $("#cx_pagos").addClass("active");
            break;

        case "/acerca-de-tu-cuenta":
            $("#cx_tuCuenta").addClass("active");
            break;

        case "/eventos-carreras":
            $("#cx_eventos").addClass("active");
            break;

        default:
            break;
    }
});

cx_container = $(".cx-cdaiv__menu-options.active");
$(".cx-cdaiv__menu-item").click(function (e) {
    var id = $(this).attr("id");
    if (id == "cx_close") {
        $(".cx-cdaiv__menu-options").removeClass("active");
        $(".cx-cdaiv__menu-wrapper").removeClass("active");
        e.preventDefault();
        return;
    } else {
        $(".cx-cdaiv__menu-item").removeClass("active");
        $(this).addClass("active");
        $(".cx-cdaiv__menu-options").addClass("chosen");
        $(".cx-cdaiv__menuMobile").addClass("active");
        $(".cx-cdaiv__menu-options").removeClass("active");
        $(".cx-cdaiv__menu-wrapper").removeClass("active");
    }
});

$(".cx-cdaiv__menuMobile").click(function (e) {
    $(".cx-cdaiv__menu-options").addClass("active");
    $(".cx-cdaiv__menu-wrapper").addClass("active");
});
$(".cx-cdaiv__menu-wrapper").click(function (e) {
    if (
        e.target.className == "cx-cdaiv__menu-wrapper active" ||
        e.target.className == "cx-cdaiv__menu-item close"
    ) {
        $(".cx-cdaiv__menu-options").removeClass("active");
        $(".cx-cdaiv__menu-wrapper").removeClass("active");
    }
});
