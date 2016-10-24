$(document).ready(function(){

    //头部返回区域
    $('.top .top_back').click(function () {
       window.history.back()
    });

    //头部搜索框效果
    function setContent(){
        $('.top .top_search input').focus(function () {
            $(this).css({'outline':'none','color':'#333'});
            if($(this).val()=='请输入要搜素的'){
                $(this).val('')
            }
        }).blur(function () {
            $(this).css('color','#999');
            if( $(this).val()==''){
                $(this).val('请输入要搜素的')
            }
        });
    }
    setContent();

    //搜索框的提醒效果
    function setRemind(){
        $('.top .top_search span').click(function () {
            if($('.top .top_search input').val()=='请输入要搜素的'){
                $('.top .search_remind').css('display','flex')
            }
        });
        $('.top .search_remind').click(function () {
            $('.top .search_remind').css('display','none')
        });
    }
    setRemind();

    //筛选区域里面  km显示区域效果
    function setKm_show(){
        $('.filter .km .show').click(function (e) {
            if($('.filter .km .hide').is(':visible')){
                $('.filter .km .hide').hide();
                $(this).find('span').html('▼').css('color','#000');
            } else {
                $(this).find('span').html('▲').css('color','#3BA15C');
                $('.filter .km .hide').show()
            }
            $('.filter .user .hide').hide();
            $('.filter .user .show span').html('▼').css('color','#000');
            e.stopPropagation()
        });
        $(window).click(function () {
            $('.filter .km .hide').hide();
            $('.filter .km .show span').html('▼').css('color','#000');
        });
    }
    setKm_show();

    //筛选区域里面的 km隐藏效果
    function  setKm_hide(){
        $('.filter .km .hide ul li').click(function () {
            var myHtml=$(this).find('a').text();
            $(this).find('a').css('color','#3BA15C').end().siblings('li').find('a').css('color','#000');
            $(this).find('span').css('visibility','visible').end().siblings('li').find('span').css('visibility','hidden');
            $('.filter .km .show .txt').text(myHtml);
            $('.filter .km .hide').hide();
            $('.filter .km .show span').html('▼').css('color','#000');
            return false
        })
    }
    setKm_hide();

    //筛选区域里面  user显示区域效果
    function setUser_show(){
        $('.filter .user .show').click(function (e) {
            if($('.filter .user .hide').is(':visible')){
                $('.filter .user .hide').hide();
                $(this).find('span').html('▼').css('color','#000');
            } else {
                $(this).find('span').html('▲').css('color','#3BA15C');
                $('.filter .user .hide').show()
            }
            $('.filter .km .hide').hide();
            $('.filter .km .show span').html('▼').css('color','#000');
            e.stopPropagation()
        });
        $(window).click(function () {
            $('.filter .user .hide').hide();
            $('.filter .user .show span').html('▼').css('color','#000');
        });
    }
    setUser_show();


    //筛选区域里面的 user隐藏效果
    function setUser_hide(){
        $('.filter .user .hide ul li').click(function () {
            $(this).css('color','#3BA15C').siblings('li').css('color','#000');
            $(this).find('p').css('background','#3BA15C').end().siblings('li').find('p').css('background','#fff')
        })
    }
    setUser_hide();


    //商品分类区域  页面跳转后直接获取上个页面传来的参数
    function getItem(){
        var x=localStorage.getItem('num');
        $('.rank ul li').eq(x).css('color','#3BA15C').siblings('li').css('color','#000');

        var myHtml=$('.rank ul li').eq(x).find('p').html();
        $('.math .breed .breed_main span').html(myHtml);
    }
    getItem();

    //商品分类区域  点击  效果
    function setRank(){
        $('.rank ul li').click(function () {
            x=$(this).index();
            $('.rank ul li').eq(x).css('color','#3BA15C').siblings('li').css('color','#000');

            var myHtml=$('.rank ul li').eq(x).find('p').html();
            $('.math .breed .breed_main span').html(myHtml)
        });
    }
    setRank();

    //计算区域 的时间显示
    function setBreed_time(){
        var myDate = new Date();
        var str = "" + myDate.getFullYear() + "年";
        str += (myDate.getMonth()+1) + "月";
        str += myDate.getDate() + "日";
        $('.math .breed .time').html(str)
    }
   setBreed_time();

    //计算区域   result效果
    function setResult(){
        $('.math .result ul li').click(function () {
            $(this).find('.top').hide().end().siblings('li').find('.top').show();
            $(this).find('.bottom').addClass('green_arrow').removeClass('bottom')
                .end().siblings('li').find('.green_arrow').addClass('bottom').removeClass('green_arrow')
        })

    }
    setResult()








});