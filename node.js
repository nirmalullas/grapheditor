var nodex = 100;
var nodey =300;

function root(){         //first node to get called automatically
	var this.question;
	this.methode1 = function methode1(){   //creates node
		this.accept();
		this.ellipse(200,100,100,90);
		this.text(person,400,500);
	}
	this.accept = function accept() {        // accept text
		this.person = prompt("Please enter your Problem Statement");	
		if (person != null) {
			document.getElementById("demo").innerHTML =
			"Problem Statement is :  " + person ;
		}
	}
}

questionnode.prototype()= new root();

function node(){
	var question;
	var clr,x,y;
	
	this.methode1 =  function methode1(){
		x=nodex;
		y=nodey;
		this.accept();
		
	}
	
}

var root1 = new root();
var menushow = new menu;
function menu(){
	this.show = function show(){
	line(windowWidth-100,0, windowWidth-100,windowHeight);
	ellipse(windowHeight- 50, 100 , 50 ,50);
	text("text",windowWidth-100,100);
	ellipse(windowHeight- 50, 300 , 50 ,50);
	text("colour",windowWidth-100,100);
	ellipse(windowHeight- 50, 500 , 50 ,50);
	text("make child",windowWidth-100,100);
	ellipse(windowHeight- 50, 700 , 50 ,50);
	text("",windowWidth-100,100);
	ellipse(windowHeight- 50, 900 , 50 ,50);
	text("text",windowWidth-100,100);
	}
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background(179,154,123);
	smooth();
	cursor(ARROW);
}

var objcnt = 0;
var x = new node();
var objarr[];

function draw(){
	background(179,154,123);
	ellipse(windowWidth/2,100,70,70);
	menushow.show();
	root1.methode1();
	
	if(mouseisPressed){
		if(){
			
		}		
	}
	if(mouseisPressed && dist(windowHeight- 50, 100,mouseX,mouseY) < 25){
		var x = new node();
		var objarr[objcnt];
		objcnt = objcnt + 1;
	}
	
}
