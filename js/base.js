var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';

var baseUrl = '';

//监听高度
document.addEventListener('follow', function() {

    // if (window.innerHeight + document.body.scrollTop === document.body.clientHeight) {
    //     // 当页面高度 + 滚动高度 === 文档整体高度时为滚动至底部 执行异步加载方法等等
    // console.log(1)
    // }
})


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}