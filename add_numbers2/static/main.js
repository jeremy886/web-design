$(document).ready(function() {
	console.log("ready!");

	$("form").on("submit", function(){
		console.log("The form has been submitted -- yay!")
		var value_one = $('input[name="number-one"]').val()
		var value_two = $('input[name="number-two"]').val()
		console.log(value_one, value_two)

		$.ajax({
			type: "POST",
			url: "/",
			data: {first: value_one, second: value_two},
			success: function(results) {
				console.log(results);
				$("#results").html(results.total)
				$("input").val("")
			},
			error: function(error) {
				console.log(error)
			}
		});

	});

});