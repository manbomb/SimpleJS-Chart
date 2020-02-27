function SimpleChart(title,height,width,color,div_chart,data) {
	n = data.length;
	div_chart.style.width = String(width)+'px';
	//div_chart.style.height = String(height)+'vh';
	div_chart.style.border = '1px solid';

	div_chart.innerHTML = '';

	for (var i = n - 1; i >= 0; i--) {
		div_chart.innerHTML += '<div class="bars"><div class="fill"></div></div>';
	}

	bars = div_chart.children;

	fills = [];

	for (var i = bars.length - 1; i >= 0; i--) {
		fills[i] = bars[i].children[0];

		bars[i].style.display = 'table-cell';
		bars[i].style.height = height;
		bars[i].style.width = 'calc('+width+'px/'+String(n)+')';
	}

	max = data[0];

	for (var i = data.length - 1; i >= 0; i--) {
		if (data[i] > max) {
			max = data[i];
		}
	}

	for (var i = fills.length - 1; i >= 0; i--) {
		h = (height/max)*data[i];
		m = height-h;
		fills[i].style.width = 'calc('+width+'px/'+String(n)+')';
		fills[i].style.height = String(h)+'px';
		fills[i].style.marginTop = String(m)+'px';
		fills[i].style.backgroundColor = color;
		fills[i].style.marginRight = '-2px';
		fills[i].style.borderRight = '1px solid '+color;
	}

	div_chart.innerHTML = '<span id="title_span"><b>'+title.toUpperCase()+'</b></span>'+div_chart.innerHTML;
	document.getElementById('title_span').style.position = 'absolute';
	document.getElementById('title_span').style.margin = '10px';

}