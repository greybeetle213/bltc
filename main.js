SelectedBtn = "Home"
function MenuButtonPress(btn){
    if(SelectedBtn != btn){
        document.getElementById(SelectedBtn).className = "menuBtn"
        SelectedBtn = btn
        document.getElementById(SelectedBtn).className = "selectedBtn"
    }
    document.getElementById("content").src = "pages/"+btn+".html"
}
function init(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        window.location.replace("mobile/index.html")
    }
}