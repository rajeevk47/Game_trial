function rectangularcollision({rectangle1,rectangle2}){
    return(
        rectangle1.position.x + rectangle1.width>=rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y+ rectangle1.height/1.5 <=rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height/1.1>= rectangle2.position.y
    )
}
function offtouch(){
    touchdown=false
    touchup=false
    touchleft=false
    touchright=false
}
function ontouch(event){
    if(player.position.x+2*player.width <event.clientX && player.position.x+3*player.width>event.clientX){
        if(player.position.y+1.3*player.height>event.clientY){touchup=true}
        else if(player.position.y+2.5*player.height<event.clientY){touchdown=true}
    }
    if(player.position.y+1.3*player.height<event.clientY&&player.position.y+2.5*player.height>event.clientY){
        if(player.position.x+2*player.width >event.clientX){touchleft=true}
        else if(player.position.x+3*player.width<event.clientX){touchright=true}
    }

}