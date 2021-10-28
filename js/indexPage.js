$("button").click(function(){
    hrefJump();
});

setTimeout(function(){
    $("#queryInput").focus();
},500)

window.onload = function () {
    var keyCode;
    var isCtrl = false;
    document.onkeydown = function (e) {
        if (!keyCode) {
            if (window.event) {
                keyCode = event.keyCode;
            } else if (e.which) {
                keyCode = e.which;
            }
            // 回车
            if (keyCode === 13) {
                queryKeyCode();
            }
            console.log("key1：" + keyCode+",isCtrl："+isCtrl);
        }
    };

    document.onkeyup = function () {
        if (keyCode) {
            keyCode = undefined;
        }
    };
}

function queryKeyCode() {
    hrefJump()
}

function hrefJump() {
    // alert("aaa");
    let textContent = $("#queryInput");
    console.log(textContent[0].value)
    if (textContent[0].value){
        href = 'https://www.baidu.com/s?ie=UTF-8&wd='+textContent[0].value;
        console.log(href)
        location.href=href;
    }
}

