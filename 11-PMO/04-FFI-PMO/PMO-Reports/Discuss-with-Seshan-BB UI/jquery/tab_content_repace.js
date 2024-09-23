$( window ).resize(function() {
	  vtabsPostion();
	  vMenuPostion();
	  vPlanTabsPostion();
	});
function vtabsPostion(){
		var winsiz =$(window).width();
		 if(winsiz < 768){
			 $( "#vtab1_content" ).insertAfter( "#vtab1" );
			 $('#footer_position').insertAfter( "#vtab1_content" );
			 }
		  else{
			 $( "#vtab1_content" ).insertAfter( "#dsk_vtab1_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
		 var winsiz =$(window).width();
		 if(winsiz < 768){
			 $( "#vtab2_content" ).insertAfter( "#vtab2" );
			 $('#footer_position').insertAfter( "#vtab2_content" );
			 }
		  else{
			 $( "#vtab2_content" ).insertAfter( "#dsk_vtab2_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
		  }
		 var winsiz =$(window).width();
		 if(winsiz < 768){
			 $( "#vtab3_content" ).insertAfter( "#vtab3" );
			 $('#footer_position').insertAfter( "#vtab3_content" );
			 }
		  else{
			 $( "#vtab3_content" ).insertAfter( "#dsk_vtab3_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
		  }
}

function vMenuPostion(){
		
		var winsiz =$(window).width();
		if(winsiz < 768){
			 $( "#vMenu1_Content" ).insertAfter( "#vMenu1" );
			 }
		  else{
			   $( "#vMenu1_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		if(winsiz < 768){
			 $( "#vMenu2_Content" ).insertAfter( "#vMenu2" );
			 }
		  else{
			   $( "#vMenu2_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		
		if(winsiz < 768){
			 $( "#vMenu3_Content" ).insertAfter( "#vMenu3" );
			 }
		  else{
			   $( "#vMenu3_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		
		if(winsiz < 768){
			 $( "#vMenu4_Content" ).insertAfter( "#vMenu4" );
			 }
		  else{
			   $( "#vMenu4_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		
		 if(winsiz < 768){
			 $( "#vMenu5_Content" ).insertAfter( "#vMenu5" );
			 }
		  else{
			   $( "#vMenu5_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		  if(winsiz < 768){
			 $( "#vMenu6_Content" ).insertAfter( "#vMenu6" );
			 }
		  else{
			   $( "#vMenu6_Content" ).insertAfter( "#dsk_vMenu_content" );
		  }
		 
}

function vPlanTabsPostion(){
		//alert();
		var winsiz =$(window).width();
		 if(winsiz < 768){
			 $( "#plan_tab_content" ).insertAfter( "#ptab1" );
			 $('#footer_position').insertAfter( "#plan_tab_content" );
			 }
		  else{
			 $( "#plan_tab_content" ).insertAfter( "#dsk_plan_tab_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
		   if(winsiz < 768){
			 $( "#plan_tab_content" ).insertAfter( "#ptab2" );
			 $('#footer_position').insertAfter( "#plan_tab_content" );
			 }
		  else{
			 $( "#plan_tab_content" ).insertAfter( "#dsk_plan_tab_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
		  if(winsiz < 768){
			 $( "#plan_tab_content" ).insertAfter( "#ptab3" );
			 $('#footer_position').insertAfter( "#plan_tab_content" );
			 }
		  else{
			 $( "#plan_tab_content" ).insertAfter( "#dsk_plan_tab_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
		 if(winsiz < 768){
			 $( "#plan_tab_content" ).insertAfter( "#ptab4" );
			 $('#footer_position').insertAfter( "#plan_tab_content" );
			 }
		  else{
			 $( "#plan_tab_content" ).insertAfter( "#dsk_plan_tab_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
		if(winsiz < 768){
			 $( "#plan_tab_content" ).insertAfter( "#ptab5" );
			 $('#footer_position').insertAfter( "#plan_tab_content" );
			 }
		  else{
			 $( "#plan_tab_content" ).insertAfter( "#dsk_plan_tab_content" );
			 $( "#footer_position" ).insertAfter( "#btns_ftr" );
			 
		  }
}