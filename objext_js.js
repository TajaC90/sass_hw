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