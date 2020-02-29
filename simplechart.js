function inv_color(color) {
	color = color.split('(')[1];
	color = color.split(')')[0];
	color = color.split(', ');

	for (var i = color.length - 1; i >= 0; i--) {
		color[i] = String(255-parseInt(color[i]));
	}

	color = color.join(', ');
	ret = 'rgb('+String(color)+')';
	return ret;
}
function onMouse(obj,data) {
	color = obj.style.backgroundColor;
	obj.style.backgroundColor = inv_color(color);

	span = document.getElementById('value_bar');
	span.innerHTML = String(data);
}
function outMouse(obj) {
	color = obj.style.backgroundColor;
	obj.style.backgroundColor = inv_color(color);

	span = document.getElementById('value_bar');
	span.innerHTML = '';
}
function SimpleChart(title,height,width,color,div_chart,data) {
	n = data.length;
	div_chart.style.width = String(width)+'px';
	//div_chart.style.height = String(height)+'vh';
	div_chart.style.border = '1px solid';

	for (var i = n - 1; i >= 0; i--) {
		div_chart.innerHTML += '<div class="bars"><div class="fill" onmouseover="onMouse(this,'+String(data[i])+')" onmouseout="outMouse(this)"></div></div>';
	}

	bars = div_chart.children;

	fills = [];

	for (var i = bars.length - 1; i >= 0; i--) {
		fills[i] = bars[i].children[0];

		bars[i].style.display = 'table-cell';
		bars[i].style.height = height;
		bars[i].style.width = 'calc('+width+'px/'+String(n)+')';
		bars[i].addEventListener("mouseover", function(){ alert('Teste'); });
	}

	max = data[0];

	for (var i = data.length - 1; i >= 0; i--) {
		if (data[i] > max) {
			max = data[i];
		}
	}

	min = data[0];

	for (var i = data.length - 1; i >= 0; i--) {
		if (data[i] < min) {
			min = data[i];
		}
	}

	min -= 2;
	max += 2;

	interval = max-min;

	for (var i = fills.length - 1; i >= 0; i--) {
		h = (height/interval)*(data[i]-min);
		m = height-h;
		fills[i].style.width = 'calc('+width+'px/'+String(n)+')';
		fills[i].style.height = String(h)+'px';
		fills[i].style.marginTop = String(m)+'px';
		fills[i].style.backgroundColor = color;
		fills[i].style.marginRight = '-2px';
		fills[i].style.borderRight = '1px solid '+color;
	}

	div_chart.innerHTML = '<span id="title_span"><b>'+title.toUpperCase()+'</b></span><span id="value_bar"></span>'+div_chart.innerHTML;
	document.getElementById('title_span').style.position = 'absolute';
	document.getElementById('title_span').style.margin = '10px';

	document.getElementById('value_bar').style.position = 'absolute';
	document.getElementById('value_bar').style.marginTop = '30px';
	document.getElementById('value_bar').style.marginLeft = '10px';

}
