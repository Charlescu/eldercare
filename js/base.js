var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';

//返回按钮
window.onload = function() {
    var back_page = document.getElementsByClassName('backup')[0];
    back_page.onclick = function() {
        window.history.go(-1);
    }
}
//监听高度
document.addEventListener('follow', function() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
       $('.footer').style.display = "static";


    }
    // if (window.innerHeight + document.body.scrollTop === document.body.clientHeight) {
    //     // 当页面高度 + 滚动高度 === 文档整体高度时为滚动至底部 执行异步加载方法等等
    // console.log(1)
    // }
})

//弹窗


//获取地址参数