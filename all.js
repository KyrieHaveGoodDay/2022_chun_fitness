$('#menu').click(function () {
    $('.mb_menu').css('transform', 'translateX(0)')
    $('#menu').css('display', 'none')

})

$('#back').click(function () {
    $('.mb_menu').css('transform', 'translateX(100%)')
    $('#menu').css('display', 'block')

})

$('.hides').click(function () {
    $('.mb_menu').css('transform', 'translateX(100%)')
    $('#menu').css('display', 'block')
})

// 輪播
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

// 啟動
template(0, 'mainData');
template(1, 'mainData');
template(2, 'mainData');


function template(index , divId) {
    // console.log(datas[item].bgi);
    let divIdMain = document.getElementById(divId)
    let str = '';
    
    str = `
    
        <div class="self" >
        <!-- 上半部資訊 -->
        <div class="introduction" style="background-image: url(img/${datas[index].bgi});">
            <h3>${datas[index].name}</h3>
        </div>
        <!-- 下半部資訊 -->
        <div class="introduction_data">
            <div class="data">
                <p>經歷</p>
                <hr>
                <ul id="${datas[index].expId}">

                </ul>
            </div>
            <div class="data">
                <p>介紹</p>
                <hr>
                <ul>
                    <li>${datas[index].introduce}</li>
                </ul>
            </div>
        </div>
    </div>
        
        
        `

        

    // console.log(str);

    divIdMain.innerHTML += str;


    // 模板輸出後渲染經歷
    for(item in datas[index].experience){
        // console.log( datas[index].experience[item]);

        
        // 抓取這筆物件的ul ID 渲染
        $('#'+datas[index].expId+'').append('<li>'+datas[index].experience[item]+'</li>')
    }

}