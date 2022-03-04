$(function () {
    //nav の button をクリックしたら発火
    $('nav button').on('click', function() {
        //nav の ul を ON/OFF
        $('nav ul').slideToggle()
    })
})