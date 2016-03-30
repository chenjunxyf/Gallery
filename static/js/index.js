$(function() {
    $('#tt-slide').unslider({
        nav: false
    });

    (function() {
        var $curSlide = $('#tt-slide ul .unslider-active');

        $curSlide&&slideHanle($curSlide.data('index'), $curSlide);
    })();

    // 滑动事件
    $('#tt-slide').on('unslider.change', function(e, parmas) {
        if (parmas.to === parmas.total - 1) {
            lastPageHandle();
        }
        else {
            slideHanle(parmas.to, parmas.slide);
        }
    });    

    // 图片懒加载
    function slideHanle(to, slide) {
        $('.g-txt').show();
        $('.g-txt em').text(to + 1);
        
        var $imgWrap = slide.find('.img-wrap');

        if ($imgWrap.find('img').length > 0) return;

        var img = new Image();
        img.src = $imgWrap.data('src');

        img.onload = function() {
            $(img).css({
                width: img.width,
                height: img.height
            });

            $imgWrap.append(img);
        }
    }

    // 最后跳转页处理
    function lastPageHandle() {
        $('.g-txt').hide();
    }
});