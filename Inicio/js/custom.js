
//Funcion para el hover de las series destacadas
	function hoverimg(object){
	      jQuery(".contImg").addClass("Hover");
	      jQuery(object).removeClass("Hover");
	};
  function hoverimg2(object){
        jQuery(object).addClass("Hover2");
  };
  function displaymenu(object){
    if(jQuery("#menu").hasClass("show")){
        jQuery("#menu").removeClass("show");
    }else{
        jQuery("#menu").addClass("show");
    }
  };
  function deleteclases(){
    jQuery(".Hover").removeClass("Hover");
    jQuery(".Hover2").removeClass("Hover2");
  }
