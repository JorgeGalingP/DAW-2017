$(document).ready(function(){
	var contVinilos = 0;
	
	$("#moreVinilos").on("click",function(){
		
		contVinilos++;
		$.get("/moreVinilos",{
			page:contVinilos
			
		})
		.done(function(data){
			if(!$.trim(data)){
				$("#moreVinilos").attr("disabled","disabled");
			}else{
				$("#vinilos.listItems").append(data);
			}
			});
			
		});
		
		
	
	
	
	
	
	
});