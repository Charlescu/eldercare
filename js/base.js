var Length = document.documentElement.clientWidth;
var baseWidth = Length <= 1024 ? Length : 1024 < Length ? 750 : '';
document.documentElement.style.fontSize = baseWidth / 750 * 100 + 'px';

//返回按钮
window.onload = function(){
	var backup = document.getElementsByClassName('backup');
	backup.onclick = function(){
		window.history.go(-1);
	}
}

//弹窗


//获取地址参数
