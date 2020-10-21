const gridHtml = document.querySelector('#etch-grid');


for(let i=0;i<16;i++){
	
	for(let j=0;j<16;j++){
		const grid = document.createElement('span');
		grid.style.cssText = 'width:10px;height:10px;border:1px solid #000;display:inline-block;';
		grid.classList.add('removeLineHeight')
		gridHtml.appendChild(grid);
	}
	const BreakEl = document.createElement('br');
	gridHtml.appendChild(BreakEl)
	
}

