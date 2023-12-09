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

function touchend(){
    touchdown=false
    touchup= false
    touchleft=false
    touchright=false
}

function touchmove(e){
    var touchEndX = e.touches[0].clientX
    var touchEndY = e.touches[0].clientY
    if(touchEndX>touchstartx){
        if(touchEndX-touchstartx>Math.abs(touchEndY-touchstarty)){
            touchright=true
        }
        else{
            if(touchstarty>touchEndY){
              touchup =true
            }
            else{touchdown=true}
        }
    }
    else{
        if(Math.abs(touchEndX-touchstartx)>Math.abs(touchEndY-touchstarty)){
            touchleft=true
        }
        else{
            if(touchstarty>touchEndY){
                touchup =true
              }
              else{touchdown=true}
        }

    }

}
// function touchmove(e){
//     var touchEndX = e.touches[0].clientX
//     var touchEndY = e.touches[0].clientY
//     var deltax =   touchEndX - touchstartx
//     var deltay = touchEndY-touchstarty
    
//         if(Math.abs(deltax)>Math.abs(deltay)){
//             if(deltax>0){
//                 touchright=true
//             }
//             else{touchleft=true}
//         }
//         else if(Math.abs(deltax)<Math.abs(deltay)){
//             if(deltay<0){
//                 touchup=true
//             }
//             else{touchdown=true}
//         }
//         else{
//             touchend()

//         }
//     touchstartx=touchEndX
//     touchstarty=touchEndY
// }
