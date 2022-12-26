$(document).ready(function () {
    const cx_current_URL = window.location.pathname;

    switch (cx_current_URL) {
        case "/compra-en-linea":
            $("#cx_compraEnLinea").addClass("active");
            break;

        case "/cambios-y-devoluciones":
            $("#cx_cambios").addClass("active");
            break;

        case "/envios":
            $("#cx_envios").addClass("active");
            break;

        case "/metodos-de-pago":
            $("#cx_pagos").addClass("active");
            break;

        case "/acerca-de-tu-cuenta":
            $("#cx_tuCuenta").addClass("active");
            break;

        case "/boletos-y-carreras":
            $("#cx_eventos").addClass("active");
            break;

        default:
            break;
    }

    class CentroAyuda{
        constructor(apiUrl) {
            this.apiUrl = apiUrl;
        }
        getValue(data){
            $.ajax({
                url: this.apiUrl,
                data: data,
                type: "GET",
                dataType: "json",
                success: function(respuesta){
                    //respuesta.id
                    //respuesta.value
                }
            });
        }
        setValue(data){
            $.ajax({
                url: this.apiUrl,
                data: data,
                type: "POST",
                dataType: "json",
                success: function(respuesta){
                    //respuesta.id
                    //respuesta.value
                }
            });
        }
    }
    centroAyuda = new CentroAyuda('https://iss3.innovasport.com/api/centro-ayuda')
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
/* NPS */
$('.cx-cdaiv__item-footer-icons').click(function (e) {
    //console.log($(e.target.classList)[1]);
    if ($(e.target.classList)[1] == "thumbs-up") {
        $(e.target).parent().parent().append("<h3 class='ux-btn-message'>¡Gracias! Estamos en constante mejora para ti</h3>");
        $(e.target).parent().empty();
        //console.log($(e.target).parent().siblings())
        
    } else if ($(e.target.classList)[1] == "thumbs-down") {
        $(e.target).parent().parent().append("<form class='ux-form'><label class=''>¿Por qué?</label><input type='text' question='Pasos para compra' class='ux-campoMejora' id='ux-mejora' name='ux-mejora'><input type='submit' class='ux-nps-btn' value='Enviar' id='ux-enviar'></form>");
        $(e.target).parent().empty();
    }
});
/*$('.ux-nps-btn').click(function (e) {
    console.log('done!');
    e.preventDefault();
    var input = $(e.target).closest('.ux-form').find('#ux-mejora');
    var val = input.val();
    var question = input.attr('question')
    console.log(val, question);
    data = {
        'type': 'compras-linea',
        'field': question,
        'value': val,
    }
    row = centroAyuda.setValue(data);
    var form = $(this).parent()
    $(form).empty();
})*/
$('.cx-cdaiv__item-footer').on('click', '.ux-nps-btn', function(e) {
    console.log('im in!');
    e.preventDefault();

    var input = $(e.target).closest('.ux-form').find('#ux-mejora');
    var val = input.val();
    //var question = input.attr('question');
    var question = $(e.target).closest('.ux-form').closest('.cx-cdaiv__item-footer').attr('question');
    var sitio = window.location.pathname;

    data = {
        'type': sitio,
        'field': question,
        'value': val,
    }
    row = centroAyuda.setValue(data);
    centroAyuda.getValue(data);

    var form = $(this).parent();
    $(form).html('<div class="alert alert-success" style="margin-top:0;margin-bottom:0">Gracias por tu opinión</div>');
});
