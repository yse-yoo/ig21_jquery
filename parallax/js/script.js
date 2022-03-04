$(function () {
    //aリンクをクリックしたら
    $('a').on('click', function (event) {
        //$(this) はイベントの元、つまりクリックした aリンク
        //番号取得して、1引く
        var no = $(this).data('no') - 1

        //body に background-position を設定
        var body_position = no * -20 + 'px 100%'
        $('body').css('background-position', body_position)

        //#bg1 に background-position を設定
        var bg1_position = no * -180 + 'px 100%'
        $('#bg1').css('background-position', bg1_position)

        //#bg2 に background-position を設定
        var bg2_position = no * -460 + 'px 100%'
        $('#bg2').css('background-position', bg2_position)

        //文章のスライド
        var x = no * -700
        $('#sections').animate({ left: x }, 500)
        //リンクのハイライト
        //現在の class=current 削除
        $('.current').removeClass('current')
        //クリックしたリンクに class=current を追加
        $(this).addClass('current')

    })
})