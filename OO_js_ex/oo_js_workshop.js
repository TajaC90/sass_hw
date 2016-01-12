// this is a cheatsheet for OO javascript

// 1.creating objects using: object literal

var my_tshirt = {
	brand: "Hanes",
	color: "white",
};

// object Constructors 

function Tshirt(brand, color){
	this.brand = brand;
	this.color = color;
}

// creating new instance of the object

var my_Tshirt = new Tshirt("OldNavy","orange");
var another_tshirt = new Tshirt("Forever21", "blue");
var favorite_tshirt = new Tshirt("ASOS", "yellow");

// reading attributes using square brackets
// enter my_Tshirt["tears easily"] and it should print "true" via console
var my_tshirt = {
	brand: "Hanes",
	"tears easily": true
};

// you can use the console to make sur eeverthig is working properly 

// 2. write an object that list the properties of JavaScript (loops)


