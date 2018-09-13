window.onload = function() {

    //支付方式图片切换
    var $pay_methods = $('.sure_item');
    $pay_methods.click(function() {
        $(this).attr('src', '../images/sure.png').siblings().attr('src', '../images/sure_1.png')
    })

    //计数器，
    var count_switch = true,
        $subtract_img = $('.subtract_img'),
        $add_img = $('.add_img'),
        $goods_num = $('.join p').text();
    $add_img.on('click', function() {
        ++$goods_num;
        console.log($goods_num);
        $('.join p').text($goods_num);
        $('.xiaoji').text('共' + $goods_num + '件商品  小计：￥' + parseInt(($('.goods_money').text().replace(/[^0-9]/ig, "")) * 1000) * $goods_num / 1000);
        $('.all_price span').text('￥' + parseFloat(($('.goods_money').text().replace(/[^0-9]/ig, ""))) * $goods_num);
        $('.buycar_box_money').text('￥' + parseFloat(($('.goods_money').text().replace(/[^0-9]/ig, ""))) * $goods_num)
        console.log();
        count_switch = true;
    });

    $subtract_img.on('click', function() {
        if (count_switch) {
            if ($goods_num > 1) {
                --$goods_num;
            }
            if ($goods_num < 2) {
                count_switch = false;
            }

            console.log($goods_num);
            $('.join p').text($goods_num);
            $('.xiaoji').text('共' + $goods_num + '件商品  小计：￥' + parseFloat(($('.goods_money').text().replace(/[^0-9]/ig, ""))) * $goods_num);
            $('.all_price span').text('￥' + parseFloat(($('.goods_money').text().replace(/[^0-9]/ig, ""))) * $goods_num);
        } else {
            return;
        }
    })

    //日期选择器
    //datepicker,日期选择器
    var start_mon, start_day, end_mon, end_day;
    $('.get_good_time').click(function(event) {
        var _this = this;
        weui.datePicker({
            start: new Date(),
            end: 2030,
            defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
            onConfirm: function(result) {
                console.log(result[0].lable + result[1].lable + result[2].lable);
                $('.start_time').text(result[1].lable + result[2].lable);

            }
        });
    });
    $('.back_good_time').click(function(event) {
        var _this = this;
        weui.datePicker({
            start: new Date(),
            end: 2030,
            defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
            onConfirm: function(result) {
                /* start_mon = parseInt(result[1].lable);
 start_day = parseInt(result[2].lable);*/
                $('.end_time').text(result[1].lable + result[2].lable);
            }
        });
    });
    $('.back_good_time').click(function(event) {
        var _this = this;
        weui.datePicker({
            start: new Date(),
            end: 2030,
            defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
            onConfirm: function(result) {
                end_mon = parseInt(result[1].lable);
                end_day = parseInt(result[2].lable);


            }
        });
    });
    //二级联动




}