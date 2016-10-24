$(window).ready(function () {

    //content下面的title效果
    function setTitle(){
        $('.content .title p').click(function () {
            var x=$(this).index();
            $('.content .title p').eq(x).addClass('title_hover').siblings('p').removeClass('title_hover');
            $('.content .main ul').eq(x).show().siblings('ul').hide()
        }).eq(0).click();
    }
     setTitle();

    //头部返回效果
    function setBack(){
        $('.header .back').click(function () {
            window.history.back()
        })
    }
    setBack();

    //content 下面的消除效果
    function setRemove(){
        $('.content .list li .click').click(function () {
            $(this).parents('li').remove()
        })
    }
    setRemove();


});