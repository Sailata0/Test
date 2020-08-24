let check=document.getElementById('check');
let txt=document.getElementById('txt');
let info=document.getElementById('root');
let newtxt;
let len;
let width=0;



function testFunction() {
	let x = txt.value.length;
	if (check.checked) {
		y=Math.ceil(x/160);
			if(x>160) y=Math.ceil(x/153);
	}
	else {
		y=Math.ceil(x/70);
			if(x>70) y=Math.ceil(x/63);
	}
	info.innerHTML = "Длина вашего сообщениея " + x + ' символа. Для отправки потребуется ' + y+ ' сообщения';
}

function fun1() {
	testFunction();
	if (check.checked) {
		newtxt=rus_to_latin(document.getElementById('txt').value);
		document.getElementById('txt').value=newtxt;	
	}
	else {
		newtxt=latin_to_rus(document.getElementById('txt').value);
		document.getElementById('txt').value=newtxt;
	}
}

function rus_to_latin(str) {

const ru = new Map([
		['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'g'], ['д', 'd'], ['е', 'e'],
	    ['ё', 'yo'], ['ж', 'zh'], ['з', 'z'], ['и', 'i'], ['й', 'y'],
		['к', 'k'], ['л', 'l'], ['м', 'm'], ['н', 'n'], ['о', 'o'], ['п', 'p'], ['р', 'r'],
		['с', 's'], ['т', 't'], ['у', 'u'], ['ф', 'f'], ['х', 'h'], ['ц', 'ts'], ['ч', 'ch'],
		['ш', 'sh'], ['щ', 'shh'], ['ъ','\''],['ы', 'i'],['ь','\''], ['э', 'e'], ['ю', 'u'], ['я', 'ya'],
		['А', 'A'], ['Б', 'B'], ['В', 'V'], ['Г', 'G'], ['Д', 'D'], ['Е', 'E'],
		['Ё', 'YO'], ['Ж', 'ZH'], ['З', 'Z'], ['И', 'I'], ['Й', 'Y'],
		['К', 'K'], ['Л', 'L'], ['М', 'M'], ['Н', 'N'], ['О', 'O'], ['П', 'P'], ['Р', 'R'],
		['С', 'S'], ['Т', 'T'], ['У', 'U'], ['Ф', 'F'], ['Х', 'H'], ['Ц', 'TS'], ['Ч', 'CH'],
		['Ш', 'SH'], ['Щ', 'SHH'], ['Ъ','\''],['Ы', 'I'],['Ь','\''], ['Э', 'E'], ['Ю', 'U'], ['Я', 'YA'],
	]);

	return Array.from(str)
		.reduce((s, l) =>
			s + (
				  ru.get(l)
				  || ru.get(l) === undefined && l
			  )
			, '');
}


function latin_to_rus(str) {

const ru = new Map([
		['a','а'], ['b','б'],['c','с'], ['v','в'],['w','в'], ['g','г'], ['d','д'], ['e','е'], ['j','й'],['q','к'],
	    ['z','з'], ['i','и'],['k','к'], ['l','л'], ['m','м'], ['n','н'], ['o','о'], ['p','п'], ['r','р'],
		['s','с'], ['t','т'], ['u','у'], ['f','ф'], ['h','х'], ['\'','ь'], ['x','к'],['y','и'],
		['A','А'], ['B','Б'],['C','С'], ['V','В'],['W','В'], ['G','Г'], ['D','Д'], ['E','Е'], ['J','Й'],['Q','К'],
	    ['Z','З'], ['I','И'],['K','К'], ['L','Л'], ['M','М'], ['N','Н'], ['O','О'], ['P','П'], ['R','Р'],
		['S','С'], ['T','Т'], ['U','У'], ['F','Ф'], ['H','Х'], ['\'','Ь'], ['X','К'],['Y','И'],
	]);

	return Array.from(str)
		.reduce((s, l) =>
			s + (
				  ru.get(l)
				  || ru.get(l) === undefined && l
			  )
			, '');
}