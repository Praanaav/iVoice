var numberOfBlock=document.querySelectorAll("block").length;
for(var i=0; i<numberOfBlock; i++){
  document.querySelectorAll("block")[i].addEventListener("click",function(){
    var voice=new Audio("js/horse.mp3");
    voice.play();
  });                                                                                                               
}
