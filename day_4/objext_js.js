var car = {
	brand:"Nissian",
	type:"Altima",
	wheels:"4",
	year: "2012",
};

// object CONSTRUCTOR

function People(race,gender,lips,age){
	this.race = race;
	this.gender = gender;
	this.lips = lips;
	this.age = age;
}
// Here we are instantiating a new instance of People
var my_people = new People("black","female","english","25");

// creatign as man people as we'd like
var more_people = new People("white","male","english","24");

// exercise slide 16

// define an object using a constructor func with 1 attribute and 1 method

function Address(street,city,state,zipcode){
	this.street = street;
	this.city = city;
	this.state = state;
	this.zipcode = zipcode;
}
var my_address = ("Leslie", "Jamaica", "New York", "11434");

// class ex define onbect using constructor func w/ 1 attribute and 1 method

var city = {
	location: "east",
	size: "15 miles",
	population: 845768498,
	grow: function(num){
		return this.population * num;

	}
};

// add a method or attribute to the parent object
// use a prototype 

function Human(race,gender,age){
	this.race = race;
	this.gender =  gender;
	this.age = age;
}

new_human = ("African","female",54);

Human.prototype.shrink = function(num){
	return "My age is" + num;
};








