var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len ;i++)
{
	document.querySelectorAll("button")[i].addEventListener("click",function (){

         var btnhtml =this.innerHTML;
         playsound(btnhtml);
	});
}

document.addEventListener("keydown",function(event){
   playsound(event.key);
  
});

function playsound(key)
{

          switch(key)
         {
           case "w":
		         var tom1 = new Audio("sounds/tom-1.mp3");
		         tom1.play();
		         break;

            case "a":
		         var tom2 = new Audio("sounds/tom-2.mp3");
		         tom2.play();
		         break;

            case "s":
		         var tom3 = new Audio("sounds/tom-3.mp3");
		         tom3.play();
		         break;

	        case "d":
		         var tom4 = new Audio("sounds/tom-4.mp3");
		         tom4.play();
		         break;

	        case "j":
		         var tom4 = new Audio("sounds/snare.mp3");
		         tom4.play();
		         break;
	        case "k":
		         var tom4 = new Audio("sounds/kick-bass.mp3");
		         tom4.play();
		         break;
	        case "l":
		         var tom4 = new Audio("sounds/crash.mp3");
		         tom4.play();
		         break;
            default:

         }
 
}

