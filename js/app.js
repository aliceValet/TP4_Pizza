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
	let prenom = $('input:eq(12)').val();
	$(".main").empty();

	setTimeout(() => alert("Merci " + prenom + " votre commande sera prête dans 15 min"), 100);
}
function calculatePrice(){

	let sum=0;
	sum+=(($("input[name='type']:checked").attr("data-price") || 0)/6)*$(".nb-parts input").val();
	$('input[name="extra"]:checked').each(
		function() { 
			sum += $(this).data('price'); 
		}
		);
	$('input[name="pate"]:checked').each(
		function() { 
			sum += $(this).data('price'); 
		}
		);
	$(".tile p").text(sum);

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
	$('.next-step').click(showContactForm);
	$('.add').click(addAddressInputs);
	$("input[data-price").change(calculatePrice);
	$('.done').click(validateOrder);


});