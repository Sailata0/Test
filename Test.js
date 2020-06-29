// invoices.json
let invoices=[
	{
		"customer": "MDT",
		"performance": [
			{
				"playId": "Гамлет",
				"audience": 55,
				"type": "tragedy"
			},
			{
				"playId": "Ромео и Джульетта",
				"audience": 35,
				"type": "tragedy"
			},
			{
				"playId": "Отелло",
				"audience": 40,
				"type": "comedy"
			}
						]
	}
			]
 let res=statement(invoices[0],invoices[0].performance[0]); 
console.log(res);
 
 function statement(invoice, plays) {
	let totalAmount = 0;
	let volumeCredits = 0;
	let result = `Счет для ${invoice.customer}\n`;
	
	
	let options = {style: 'currency', currency: 'RUB', minimumFractionDigits: 2 };
	let numberFormat = new Intl.NumberFormat('ru-RU', options);
	

	for (let perf of invoice.performance) {
		let play = perf.playId;
		let thisAmount = 0;
		switch (plays.type) {
			case "tragedy":
				thisAmount = 40000;
				if (perf.audience > 30) {
					thisAmount += 1000 * (perf.audience - 30);
				}
			break;
			case "comedy":
				thisAmount = 30000;
				if (perf.audience > 20) {
					thisAmount += 10000 + 500 * (perf.audience - 20);
				}
			thisAmount += 300 * perf.audience;
			break;
			default:
				const er= new Error('неизвестный тип: ${play.type}');
			}
			

	// Добавление бонусов
	volumeCredits += Math.max(perf.audience - 30, 0);

	// Дополнительный бонус за каждые 10 комедий
	if ("comedy" === plays.type) volumeCredits += Math.floor(perf.audience / 5);

	// Вывод строки счета

	result += ` ${plays.playId}: ${numberFormat.format(thisAmount / 100)}`;
	result += ` (${perf.audience} мест)\n`;
	totalAmount += thisAmount;
	result += `Итого с вас ${numberFormat.format(totalAmount/100)}\n`;
	result += `Вы заработали ${volumeCredits} бонусов\n`;
	return result;
}}