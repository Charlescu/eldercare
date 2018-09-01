var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';

var baseUrl = '';
//返回跳转按钮
window.onload = function() {
    back_page = document.getElementsByClassName('backup')[0];
    back_page.onclick = function() {
        window.history.go(-1);
    }

}
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
//字体
WebFontConfig = {
    google: { families: ['Pathway+Gothic+One::latin,latin-ext'] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.font.im/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
/*//地址单独获取参数
//获取可视范围高度
function getClientHeight() {
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        var clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    } else {
        var clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
//获取窗口滚动条高度
function getScrollTop() {
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body) {
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}
//获取文档内容实际高度
function getScrollHeight() {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
$(document).on('ready', function() {
    window.onscroll = function() {
        // 窗口可视范围的高度
        var height = getClientHeight(),
            // 窗口滚动条高度
            theight = getScrollTop(),
            // 窗口实际内容的高度
            rheight = getScrollHeight(),
            // 滚动条距离底部的高度
            bheight = rheight - theight - height;
        console.log(111);
        if (rheight >= height) {
            $(".footer").css("position", "static");
        }
        document.getElementById('show').innerHTML = '此时浏览器可见区域高度为：' + height + '<br />此时文档内容实际高度为：' + rheight + '<br />此时滚动条距离顶部的高度为：' + theight + '<br />此时滚动条距离底部的高度为：' + bheight;
    }
})*/


//弹窗


//获取地址参数