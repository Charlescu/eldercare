window.onload = function() {

    //支付方式切换
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
        count_switch = true;
    });
    $subtract_img.on('click', function() {
        if (count_switch) {
            --$goods_num;
            if ($goods_num == 0) {
                count_switch = false;
            }
            console.log($goods_num);
            $('.join p').text($goods_num);
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
                start_mon = parseInt(result[1].lable);
                start_day = parseInt(result[2].lable);
                if (start_mon <= end_mon && start_day <= end_day) {
                    $('.get_good_time p').text(result[1].label + result[2].label);
                } else {
                    alert('取货日期不得大于归还日期');
                }

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
                if (end_mon >= start_mon && end_day >= start_day) {
                    $('.back_good_time p').text(result[1].label + result[2].label);
                } else {
                    alert('归还日期不得小于取货日期');
                }

            }
        });
    });
}