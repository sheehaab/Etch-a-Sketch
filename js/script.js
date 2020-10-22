//get the parent element of the grid you create
const gridHtml = document.querySelector('#etch-grid');

//fucntion to create the squers in the grid 
function createGrid(userInput){

	const division = 568/userInput;
	let width = division ;
	let height = division ;


		//first for loop to make the rows
		for(let i=0;i<userInput;i++){
		//second for loop to make the column	
			for(let j=0;j<userInput;j++){
				const grid = document.createElement('div');
				
				grid.style.height = height + 'px';
				grid.style.width = width + 'px';
				grid.classList.add('height');
				gridHtml.appendChild(grid);
				grid.classList.add('div-grid');
				
			}
			
		}
}


//fire the function for the first time (dafault)
createGrid(2);

//add class to the grid you create it above but for the first time only
const gridEl = document.querySelectorAll('.div-grid');



//add the fucntion to make black when hover over the square but for first time only (default)
gridEl.forEach((div)=>{
	//the opacity or darkness of the colors
	let opacity = 50;
	div.addEventListener('mouseover',function(){
				//it get darker every time the mouseover is fired
				opacity-=5;
				//hsl(0%,0%,0%)
				div.style.backgroundColor = 'hsl(' + randomNumber() + ',' + randomNumber() + '%' + ',' + opacity + '%' + ')';	
	})
})

//get the button from HTML
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
	//ask you how many squares do you want ex:20*20
	let userInput = prompt(`How many squares to make grid?`)
	//if the user click cancel button 
	if(userInput === null){
			return;
	}
	//if the user put in the prompt anything is not it will ask for a number until he write it
	while(isNaN(userInput)){
		 userInput = prompt(`This is not a number, Please put a valid number!`)
		 if(userInput === null){
			return;
		} 
	}

	//if the user put a number higher than 80 and less than 1 (Negtive) then it will ask for a number until he write it
	while(userInput > 80 || userInput < 1){
		userInput = prompt(`Out of range, Please put a number from 1 to 80`);
		if(userInput === null){
			return;
		}
	}

	
	gridHtml.innerHTML = "";
	createGrid(userInput);

	//make the boxes will be black after you click
	const gridEl = document.querySelectorAll('.div-grid');
	gridEl.forEach((div)=>{
		//the opacity or darkness of the colors
		let opacity = 50;
		div.addEventListener('mouseover',function(){
				//it get darker every time the mouseover is fired
				opacity-=5;
				//hsl(0%,0%,0%)
				div.style.backgroundColor = 'hsl(' + randomNumber() + ',' + randomNumber() + '%' + ',' + opacity + '%' + ')';
		})
	})

	
})

function randomNumber(){
	let random = Math.floor(Math.random() * 100);
	return random;
}
