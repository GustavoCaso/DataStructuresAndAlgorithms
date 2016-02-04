function Grades(){
  this.studentGrades = [];
  this.add = add;
  this.average = average;

	function add(grade){
		this.studentGrades.push(grade);
  }

	function average(){
		var total = 0;
		for(var i = 0; i< this.studentGrades.length; ++i){
			total += this.studentGrades[i];
		}
		return (total/this.studentGrades.length);
	}
}

// var grades = new Grades();
// grades.add(34);
// grades.add(23);
// grades.add(67);
// grades.add(7);
// grades.add(90);
// console.log(grades.average());

words = ["hello", "world", "foo", "bar"]

function display(word, index, arr){
	console.log(word);
}
words.forEach(display);

words.reverse().forEach(display);

Array.matrix = function(numrows, numcols, initial){
	var arr = [];
	for (var i = 0; i < numrows; ++i){
		var columns = []
		for(var j = 0; j < numcols; ++j){
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}


function monthTemps() {
	this.dataStore = Array.matrix(4,7,0);
	this.add = add;
	this.monthAverage = monthAverage;
	this.weekAverage = weekAverage;
	this.allWeekAverage = allWeekAverage;

	function add(numWeek, day, temp) {
		this.dataStore[numWeek][day] = temp;
	}

	function monthAverage() {
		var total = 0;
		var numDays = 0;
		for (var i = 0; i < this.dataStore.length; ++i) {
			for(var j = 0; j < this.dataStore[i].length; ++j){
				total += this.dataStore[i][j];
				numDays += 1;
			}
		}
		return total / numDays;
	}

	function weekAverage(numWeek, arr){
		if(arr !== undefined){
			data = arr
		}
		else{
			data = this.dataStore
		}

		week = data[numWeek];
		total = 0
		for(var i = 0; i < week.length; ++i){
			total += week[i];
		}
		return total / 7;
	}

	function displayEachWeek(week, index, arr){
		avg = weekAverage(index, arr)
		console.log('Week[' + index + ']: ' + avg);
	}

	function allWeekAverage(){
		this.dataStore.forEach(displayEachWeek);
	}
}

var januaryTemps = new monthTemps();

// januaryTemps.add(0, 0, 45);
// januaryTemps.add(0, 1, 30);
// januaryTemps.add(0, 2, 23);
// januaryTemps.add(0, 3, 45);
// januaryTemps.add(0, 4, 10);
// januaryTemps.add(0, 5, 20);
// januaryTemps.add(0, 6, 45);

// januaryTemps.allWeekAverage();
// console.log(januaryTemps.weekAverage(0));
// console.log(januaryTemps.monthAverage());

function Letter(){
	this.letters = [];
	this.add = add;
	this.word = word;

	function add(letter){
		this.letters.push(letter);
	}

	function concat(acc, word){
		return acc + word;
	}

	function word(){
		return this.letters.reduce(concat);
	}
}

var letters = new Letter();

// letters.add('L');
// letters.add('O');
// letters.add('V');
// letters.add('E');
// console.log(letters.word());




