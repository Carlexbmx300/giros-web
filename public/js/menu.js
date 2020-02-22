
/*$(document).ready(main);
 
var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('.MenuDashboard').toggle(); 
		alert(contador);
		if(contador == 1){
			$('.MenuDashboard').animate({
				left: '0'
			});
            contador = 0;
		
		} else {
			contador = 1;
			$('.MenuDashboard').animate({
				left: '-100%'
				
			});
		}
       
	});

};*/
const app = new vue({
	el='app',
	data:{
	
		open_menu:false,
		close_menu:true,
		color: true,
		blanco: false
	}
})