
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('.MenuDashboard').toggle(); 
 
		if(contador == 1){
			$('.MenuDashboard').animate({
				left: '0'
			});
            contador = 0;
            alert(contador);
		} else {
			contador = 1;
			$('.MenuDashboard').animate({
				left: '-100%'
			});
		}
       
	});
  
};