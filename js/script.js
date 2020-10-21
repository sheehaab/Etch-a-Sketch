//get the parent element of the grid you create
const gridHtml = document.querySelector('#etch-grid');

//fucntion to create the squers in the grid 
function createGrid(userInput){
		//first for loop to make the rows
		for(let i=0;i<userInput;i++){
		//second for loop to make the column			
			for(let j=0;j<userInput;j++){
				const grid = document.createElement('div');
				/*Remeber to make the style in the css style not inline*/
				grid.style.height = '30' + 'px';
				grid.style.width = '30' + 'px';
				grid.classList.add('height');
				gridHtml.appendChild(grid);
				grid.classList.add('div-grid');
			}
			
		}
}


//fire the function for the first time (dafault)
createGrid(3);

//add class to the grid you create it above but for the first time only
const gridEl = document.querySelectorAll('.div-grid');



//add the fucntion to make black when hover over the square but for first time only (default)
gridEl.forEach((div)=>{
	div.addEventListener('mouseover',function(){
		div.classList.add('black');
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
		div.classList.add('black');
	})
})

	
})






