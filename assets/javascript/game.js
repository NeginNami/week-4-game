
var random_number=0;
var total_score=0;
var reset=0;
var adders=new Array(4);
var wins=0;
var losses=0;
var random_array=new Array(4);
var crystalValue="";
for (var i = 0; i < random_array.length; i++) {
	random_array[i]=Math.floor(Math.random() *12)+1;
}

random_number=Math.floor(Math.random() *102)+19; 
$("#score").html("<p>"+random_number+"</p>");


$(".crystal").on("click",function () {

	$("#crys1").attr("value",random_array[0]);
	$("#crys2").attr("value",random_array[1]);
	$("#crys3").attr("value",random_array[2]);
	$("#crys4").attr("value",random_array[3]);

	crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    console.log(crystalValue);

   	if (total_score<random_number) {
   		total_score+=crystalValue;
   		console.log("Total Score is: "+total_score);
   		update_total_score();

   		if (total_score>random_number) {
   			reset();
   			losses++;
   			update_losses_counter();
   		}
   		if (total_score==random_number) {
   			wins++;
   			update_wins_counter();
   			reset();
   		}
   	}


function reset() {
	random_number=Math.floor(Math.random() *102)+19;
	for (var i = 0; i < random_array.length; i++) {
		random_array[i]=Math.floor(Math.random() *12)+1;
	}
	$("#score").html("<p>"+random_number+"</p>");
	total_score=0;
	$(".total_score").html("<p>"+" "+"</p>");	
}
function update_total_score() {

	$(".total_score").html("<p> Total Score: "+total_score+"</p>");
}
function update_random_number() {
	$("#score").html("<p>"+random_number+"</p>");
}
function update_wins_counter() {
	$("#wins").html("<p> Wins: "+wins+"</p>");
}
function update_losses_counter() {
	$("#losses").html("<p> Losses: "+losses+"</p>");
}




	
});




















