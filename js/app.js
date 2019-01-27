function showHideDescription(){
	$(this).find(".description").toggle();
}
function showContactForm(){
	$(".infos-client").show();
	$(".next-step").remove();
}
function addAddressInputs(){
	$("<br/><input type='text'/>").insertBefore(this);
}
function validateOrder(){
	let prenom = $('.text').val();
	alert(prenom);
	$("input").val("");
}
function calculatePrice(){
	let sum=0;
	if ($("input[value=margherita]").checked){
		sum+=((($("input[value=margherita]").getAttribute("data-price"))/6)*$(".nb-parts input").val());

	}
	else if($("input[value=reine]").checked){
		sum+=((($("input[value=reine]").getAttribute("data-price"))/6)*$(".nb-parts input").val());
	}
	else if ($("input[value=quattro stagioni]").checked){
		sum+=((($("input[value=quattro stagioni]").getAttribute("data-price"))/6)*$(".nb-parts input").val());
	}
	else if($("input[value=sicilienne]").checked){
		sum+=((($("input[value=sicilienne]").getAttribute("data-price"))/6)*$(".nb-parts input").val());
	}

	$('input[name=extra]:checked').each(
		function() { 
			sum += $(this).data('price'); 
		}
		);
	$('input[name=pate]:checked').each(
		function() { 
			sum += $(this).data('price'); 
		}
		);
	$(".tile h3 p").text(""+sum);

}
$(document).ready(function(){
	
	$('.pizza-type label').hover(
		showHideDescription,
		showHideDescription
		);

	$(".nb-parts input").change(function(){
		$(".nb-parts .pizza-pict").remove()

	const nbParts = $(".nb-parts input").val();
	var pizza =$('<span class="pizza-pict"></span>');
	slices= +$(this).val();
	for(i=0; i<slices/6;i++){
		$(this).after(pizza.clone().addClass('pizza-6'));
	}

	if (slices%6!=0)
		$('.pizza-pict').last().removeClass('pizza-6').addClass('pizza-'+slices%6);
		
	})
	//$(".nb-parts input").on('keyup', function(){
	//const nbParts = $(this).val();
	//$(".pizza-pic").remove();	
	//})
	$('.next-step').click(
		showContactForm
		);
	$('.add').click(
		addAddressInputs
		);
	
	if ($(".pizza-type label").checked){
		calculatePrice;
	}
	$('.done').click(
		validateOrder
		);

});