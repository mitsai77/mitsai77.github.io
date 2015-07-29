$('document').ready(function() {

    $('#navdiv').find('a').click(function() {
        var $href = $(this).attr('href');
        var $anchor = $('#'+$href).offset();
        $('body').animate({scrollTop: $anchor.top});
        return false;
    });
    $('#navdiv').find('a').hover(function() {
        $(this).find('i').attr("class", "fa fa-picture-o");
    }, function() {
        $(this).find('i').attr("class", "fa fa-camera");
    });
});
