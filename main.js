canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

green_car_width = 75;
green_car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

green_car_x = 5;
green_car_y = 225;

function add() {
	background_image_Tag = new Image();
	background_image_Tag.onload = uploadBackground();
	background_image_Tag.src = background_image;

	greencar_image_Tag = new Image();
	greencar_image_Tag.onload = uploadgreencar();
	greencar_image_Tag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_image_Tag, 0, 0, canvas.width,canvas.height);
    
}


function uploadgreencar() {
	ctx.drawImage(greencar_image_Tag, green_car_x, green_car_y, green_car_width, green_car_height);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (green_car_y >= 0) {
		green_car_y = green_car_y - 10;
		console.log("when up arrow is pressed, x =" + green_car_x + "| y = " + green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (green_car_y >= 0) {
		green_car_y = green_car_y + 10;
		console.log("when up arrow is pressed, x =" + green_car_x + "| y = " + green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (green_car_x >= 0) {
		green_car_x = green_car_x - 10;
		console.log("when up arrow is pressed, x =" + green_car_x + "| y = " + green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (green_car_x >= 0) {
		green_car_x = green_car_x + 10;
		console.log("when up arrow is pressed, x =" + green_car_x + "| y = " + green_car_y);
		uploadBackground();
		uploadgreencar();
	}
}