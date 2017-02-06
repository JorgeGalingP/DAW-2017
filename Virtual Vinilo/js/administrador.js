$(document).ready(function () {
    $('#admin').show();
    $('#contents').hide();
    $('#users').hide();
    $('#analytics').hide();

    $('#adminMenu').click(function () {
        $('#admin').slideDown("slow");
        $('#contents').hide();
        $('#users').hide();
        $('#analytics').hide();

        return false;
    });

    $('#contentMenu').click(function () {
        $('#admin').hide();
        $('#contents').slideDown("slow");
        $('#users').hide();
        $('#analytics').hide();

        return false;
    });

    $('#usersMenu').click(function () {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').slideDown("slow");
        $('#analytics').hide();

        return false;
    });

    $('#analyticsMenu').click(function () {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').hide();
        $('#analytics').slideDown("slow");

        return false;
    });

});
