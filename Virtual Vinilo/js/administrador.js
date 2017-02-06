$(document).ready(function(){
    
    $('#adminMenu').click(function() {
        $('#admin').toggle();
        $('#contents').hide();
        $('#users').hide();

        return false;
    });

    $('#contentMenu').click(function() {
        $('#admin').hide();
        $('#contents').toggle();
        $('#users').hide();

        return false;
    });

    $('#usersMenu').click(function() {
        $('#admin').hide();
        $('#contents').hide();
        $('#users').toggle();

        return false;
    });

});