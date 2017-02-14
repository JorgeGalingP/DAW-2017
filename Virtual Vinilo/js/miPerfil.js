$(document).ready(function () {
    $('#miPerfil').show();
    $('#editarPerfil').hide();
    

    $('#editarPerfilMenu').click(function () {
        $('#editarPerfil').slideDown("slow");
        $('#miPerfil').hide();

        return false;
    });

    $('#miPerfilMenu').click(function () {
        $('#editarPerfil').hide();
        $('#miPerfil').slideDown("slow");

        return false;
    });

});
