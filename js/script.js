//get the parent element of the grid you create
const gridHtml = document.querySelector('#etch-grid');

//fucntion to create the squers in the grid 
function createGrid(userInput){

	const division = 512/userInput;
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
let darker = 0;


//add the fucntion to make black when hover over the square but for first time only (default)
gridEl.forEach((div)=>{
	div.addEventListener('mouseover',function(){
			//rgb(0,0,0)
			div.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
		
		
		
	})
})

//get the button from HTML
const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
	//ask you how many squares do you want ex:20*20
	let userInput = prompt(`How many squares to make grid?`)
	gridHtml.innerHTML = "";
	createGrid(userInput);

	//make the boxes will be black after you click
	const gridEl = document.querySelectorAll('.div-grid');
	gridEl.forEach((div)=>{
		div.addEventListener('mouseover',function(){
			
			//rgb(0,0,0)
			div.style.backgroundColor = 'rgb(' + randomNumber() + ',' + randomNumber() + ',' + randomNumber() + ')';
			
		
			
		})
	})

	
})

function randomNumber(){
	let random = Math.floor(Math.random() * 225);
	return random;
}
