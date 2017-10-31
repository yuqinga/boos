


$(function(){
    var $menu=$('.mymenu');
    var $leftmenu=$('.left-menu');
    var $layout = $('.layout');
    var $mask=$('.mask');

    //µã»÷²Ëµ¥ÏÔÊ¾
    $menu.on('click',function(){
        $layout.css('transform','translateX(100px)');
        $mask.addClass('show');
        $leftmenu.css('transform','translateX(0px)');
    })
    $mask.on('click',function(){
        $layout.css('transform','translateX(0px)');
        $leftmenu.css('transform','translateX(-100px)');
        $mask.removeClass('show').addClass('hide');
    })
})