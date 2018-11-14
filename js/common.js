(function(){

    $('.nav-item').click(function(e) {
        $('.nav li').removeClass("active");
        $(this).parent('li').addClass("active");
    });

})();