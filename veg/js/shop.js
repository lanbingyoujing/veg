$(function () {
   //头部搜索框效果
    function setSearch(){
        $('.top .top_search input').focus(function () {
            $(this).css('outline','none')
        });
    }
    setSearch();

    //选择区域的数据请求
    function setSort() {
        $.post('../php/shop.php', {}, function (result) {
            var myData = result.data.category;
            var myHtml = '';
            for (var i = 0; i < myData.length; i++) {
                myHtml += ' <li>';
                //switch (myData[i].categoryname){
                //    case '蔬菜':
                //        html+= '      <img src=img/images/1.png  alt="">';
                //        break;
                //    case '粮油':
                //        html+= '      <img src=img/images/2.png  alt="">';
                //        break;
                //    case '肉禽蛋':
                //        html+= '      <img src=img/images/3.png  alt="">';
                //        break;
                //    case '水产':
                //        html+= '      <img src=img/images/4.png  alt="">';
                //        break;
                //    case '水果':
                //        html+= '      <img src=img/images/5.png  alt="">';
                //        break;
                //}
                myHtml += '      <img src=../img/images/' + (i+1) + '.png  alt="">';
                myHtml += '          <p>' + myData[i].categoryname + '</p>';
                myHtml += '</li>';
            }

            $('.more_box').html(myHtml)
        }, 'json');
    }
    setSort();

    //选择区域跳转效果
    $('.more .more_box').on('click','li', function () {
        var en=$(this).index();
        top.location.href='../html/buy.html';
        localStorage.setItem('num',en)
    });

    //市场区域的数据请求
    function setMarket(){
        $.post('../php/shop.php',{},function (result) {
            var myData=result.data.collectStationDetail;
            var myHtml='';
            for(var i=0 ; i<myData.length ; i++){
                myHtml+='<li>';
                myHtml+='  <a href="" class="pic"><img src="" alt=""></a>';
                myHtml+='      <div class="content">';
                myHtml+='       <h3>'+myData[i].cltpit01001+'</h3>';
                myHtml+='         <div class="lv"></div>';
                myHtml+='      <p class="address">'+myData[i].cltpit01004+'</p>';
                myHtml+='       <p class="time">营业时间：'+myData[i].cltpit01005+myData[i].cltpit01005+'</p>';
                myHtml+='      </div>';
                myHtml+='      <p class="km">';
                myHtml+='     '+myData[i].distance+'km';
                myHtml+='  </p>';
                myHtml+='  </li>';
            }

            $('.market .list').html(myHtml)
        },'json')
    }
    setMarket();

    //店铺收藏跳转效果
    function setJump_collect(){
        $('#collect-url').click(function (e) {
            e.preventDefault();
            top.location.href='collect.html'
        })
    }
    setJump_collect()


});