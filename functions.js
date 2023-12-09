function rectangularcollision({rectangle1,rectangle2}){
    return(
        rectangle1.position.x + rectangle1.width>=rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y+ rectangle1.height/1.5 <=rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height/1.1>= rectangle2.position.y
    )
}

var touchstartx,touchstarty
function touchstart(e){
    touchstartx = e.touches[0].clientX
    touchstarty = e.touches[0].clientY
}

function touchmove(e){
    var touchEndX = e.touches[0].clientX
    var touchEndY = e.touches[0].clientY
    var deltax =   touchEndX - touchstartx
    var deltay = touchEndY-touchstarty
    
        if(Math.abs(deltax)>Math.abs(deltay)){
            if(deltax>0){
                touchright=true
            }
            else{touchleft=true}
        }
        else{
            if(deltay>0){
                touchup=true
            }
            else{touchdown=true}
        }
    touchstartx=touchEndX
    touchstarty=touchEndY
    

}


// function offtouch(){
//     touchdown=false
//     touchup= false
//     touchleft=false
//     touchright=false
// }
// function ontouch(event){
//     if(player.position.x+2*player.width <event.clientX && player.position.x+3*player.width>event.clientX){
//         if(player.position.y+1.3*player.height>event.clientY){touchup=true}
//         else if(player.position.y+2.5*player.height<event.clientY){touchdown=true}
//     }
//     if(player.position.y+1.3*player.height<event.clientY&&player.position.y+2.5*player.height>event.clientY){
//         if(player.position.x+2*player.width >event.clientX){touchleft=true}
//         else if(player.position.x+3*player.width<event.clientX){touchright=true}
//     }

// }