var state = false
var state2 = false
account = document.getElementById("menu")
function showMenu(){
    if (state2 == true){
        apps.style.display = "none"
        state2 = false
    }
    if (state == false){
        account.style.display = "block"
        state = true
    } else {
        account.style.display = "none"
        state = false
    }
}

apps = document.getElementById("apps")
function showApps(){
    if (state == true){
        account.style.display = "none"
        state = false
    }
    if (state2 == false){
        apps.style.display = "block"
        state2 = true
    } else {
        apps.style.display = "none"
        state2 = false
    }
    
}