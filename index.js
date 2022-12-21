let homeScore = 0
let guestScore = 0

let homeData = document.getElementById('home')
let guestData = document.getElementById('guest')

function homeAdd(data){
    if(data == 1){
        homeScore+=1
    }
    else if(data == 2){
        homeScore+=2
    }
    else if(data ==3){
        homeScore+=3
    }
    homeData.textContent = homeScore
}

function guestAdd(data){
    if(data == 1){
        guestScore+=1
    }
    else if(data == 2){
        guestScore+=2
    }
    else{
        guestScore+=3
    }
    guestData.textContent = guestScore
}

function dist(){
    homeScore = 0
    homeData.textContent = homeScore
    guestScore = 0
    guestData.textContent = guestScore
}