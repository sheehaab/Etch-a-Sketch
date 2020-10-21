const gridHtml = document.querySelector('#etch-grid');

for(let i=0;i<16;i++){
	
	for(let j=0;j<16;j++){
		const grid = document.createElement('div');
		/*Remeber to make the style in the css style not inline*/
		grid.style.cssText = 'width:30px;height:30px;border:1px solid #000;display:inline-block;';
		gridHtml.appendChild(grid);
		grid.classList.add('div-grid');
	}
	
}


const gridEl = document.querySelectorAll('.div-grid');

gridEl.forEach((div)=>{
	div.addEventListener('mouseover',function(){
		div.classList.add('black');
	})
})

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
	gridEl.forEach((div)=>{
		div.classList.remove('black');
	})
})




