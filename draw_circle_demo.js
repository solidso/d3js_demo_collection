draw the circle
d3.select('.main').html(''); //draw the circle in the canvas
d3.select('.mian').append('svg')

//Assign y axis linear scale to y variable. This axis describes life expectancy. 
//Note that while the height of the svg is 300 pixels, only 250 are used for the 
//y axis to leave a buffer. Also, for the y axis the max value comes first because of
//a quirk with how objects are drawn in the browser: highest value at bottom of axis. 
var y=d3.scale.linear().domain([15, 90]).range([250, 90]);


//Assign X axis scale to x variable. This axis describes annual income.
var x=d3.scale.log().domain([250, 100000]).range([0,600]);


//Assign radius scale to r variable. The radius corresponds to the square root of the population
var r=d3.scale.sqrt().domain([52707, 1380000000]).range([10, 50]);

//Check scaling with console.log by plugging in life expectancy for China in y 
//variable, and annual income per person for China in x variable, and population for China in r variable
console.log(y(77), x(13330), r(1380000000);

//Append circle with attribute values for radius, fill color, center x and center y of circle:
svg.append('circle').attr('r', r(1380000000)).attr('fill','red').attr('cx', x(13330)).attr('cy', y(77));

//change the logo or source in the element

d3.selectAll('.navbar')
//nested selection
d3.select(h1.main)
var partent=d3.select('#header-logo'); //select parent tage
parent.select('img').attr('src', './assets/white.png').arrt('alt','udacity'); 
//select child tag and change the source of the img element