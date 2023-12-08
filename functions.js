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
    var x = event.touches[0].clientX;
    var y = event.touches[0].clientY;
    if(player.position.x+2*player.width <x && player.position.x+3*player.width>x){
        if(player.position.y+1.3*player.height>y){touchup=true}
        else if(player.position.y+2.5*player.height<y){touchdown=true}
    }
    if(player.position.y+1.3*player.height<y&&player.position.y+2.5*player.height>y){
        if(player.position.x+2*player.width >x){touchleft=true}
        else if(player.position.x+3*player.width<x){touchright=true}
    }

}