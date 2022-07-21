midnight = false
function checkMidnight(){
    time = new Date()
    console.log(time.getHours()+":"+time.getMinutes())
    if(time.getHours() == 24 && time.getMinutes() == 0){
        console.log("midnight")
        if(!midnight){
            document.getElementById("content").src = "pages/midnight.html"
        }
        midnight = true
    }else{
        if(midnight){
            document.getElementById("content").src = "pages/"+SelectedBtn+".html"
            midnight = false
        }
    }
}
setInterval(checkMidnight,1000)