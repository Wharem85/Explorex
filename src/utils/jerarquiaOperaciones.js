export const jerarquia = [
	{
		id: 1,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 10',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 10',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 10',
		question: 'a + b x c =',
		answers: [ '(a + b) x c', 'a + b + c', 'a x b + c', 'a + b x c'],
		answer: 'a + b x c'
	},
	{
		id: 2,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 10',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 10',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 10',
		helps: 'a x b < c',
		question: 'a x b - c = ',
		answers: ['a x (b - c)','a x b - c','a x b + c','a + b - c'],
		answer: 'a x b - c'
	},
	{
		id: 3,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 10',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 10',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 10',
		question: 'a + c x b / c =',
		answers: ['a + (c x b) / c','(a + c x b) / c','a + (c x b) x c','a x (c x b) / c'],
		answer: 'a + (c x b) / c'
	},
	{
		id: 4,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 10',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 41',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 15',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 10',
		helps: 'axc > d',
		helps2: 'd < c ',
		question: 'a + b + a x c - d  =',
		answers: [
			'a + (b + a) x c - d', 'a + b + a x (c - d)', 'a + b + a x c - d', '(a + b + a) x c - d'
		],
		answer: 'a + b + a x c - d'
	},
	{
		id: 5,
		instruction: 'Selecciona el número que falta en la operación',
		help: 'a = número entero positivo igual o mayor que 4 y menor que 20',
		help2: 'b = número entero positivo igual o mayor que 3 y menor que 15',
		help3: 'c = número entero positivo igual o mayor que 5 y menor que 21',
		question: 'a + __ x c = a + b x c',
		answers: [
			'a', 'b + 1', 'b - 1', 'b'
		],
		answer: 'b'
	},
	{
		id: 6,
		instruction: 'Selecciona el signo que hace falta en la operación',
		help: 'a = número entero positivo igual o mayor que 5 y menor que 21',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 26',
		help3: 'c = número entero positivo igual o mayor que 3 y menor que 16',
		question: 'a + c x b __ c = a + c x b / c',
		answers: [
			'/', '+', '-', 'x'
		],
		answer: '/'
	},
	{
		id: 7,
		instruction: 'Selecciona el signo que hace falta en la operación',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 16',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 16',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 16',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 10',
		question: 'a x d + c x b __ c = a x d + c x b / c',
		answers: [
			'+', '-', '/', 'x'
		],
		answer: '/'
	},
	{
		id: 8,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 21',
		help2: 'b = número entero positivo igual o mayor que 3 y menor que 51',
		help3: 'c = número entero positivo igual o mayor que 4 y menor que 31',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 21',
		helps: 'd < b',
		question: 'a + b x c - d =',
		answers: [
			'(a + b) x c - d', 'a + b x (c - d)', 'a + b x c - d', 'a + b) x (c - d)'
		],
		answer: 'a + b x c - d'
	},
	{
		id: 9,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = Número entero positivo mayor o igual a 2 y menor o igual a 15',
		help2: 'b = Número entero positivo mayor o igual a 2 y menor o igual a 10',
		help3: 'c = Número entero positivo mayor o igual a 3 y menor o igual a 15',
		question: 'a +   b x c __ b = a + b x c / b',
		answers: [
			'x', '/', '-', '+'
		],
		answer: '/'
	},
	{
		id: 10,
		instruction: 'Selecciona la operación que debe realizarse primero para llegar a la respuesta correcta.',
		help: 'a = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		help2: 'b = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		help3: 'c = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		help4: 'd = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		question: 'a x b + c - d',
		answers: [
			'a x b', 'b + c', 'c - d', 'a + c'
		],
		answer: 'a x b'
	},
	{
		id: 11,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		question: 'En una galaxia lejana se observaron distintos cuerpos celestes. Se pudieron distinguir a  A y b grupos de c B. ¿Qué expresión representa mejor la cantidad de astros observados?',
		help: 'a = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		help2: 'b = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		help3: 'c = Número entero positivo mayor o igual que 3 y menor o igual que 10',
		helps: 'A = planetas, asteroides, cometas',
		helps2: 'B = satélites, meteoritos, estrellas',
		answers: [
			'a + b + c', 'a x b + c', 'b x c - a', 'a + b x c'
		],
		answer: 'a + b x c'
	},
	{
		id: 12,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		help: 'a = Número entero positivo mayor o igual que 2 y menor o igual que 200',
		help2: 'b = Número entero positivo mayor o igual que 2 y menor o igual que 100',
		help3: 'c = Número entero positivo mayor o igual que 3 y menor o igual que 10',
		help4: 'd = Número entero positivo mayor o igual que 10 y menor o igual que 50.',
		help5: 'e = Número entero positivo mayor o igual que 10 y menor o igual que 50.',
		help6: 'f = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		helps: 'A = astronautas, científicos, exploradores espaciales',
		question: 'Durante un recorrido espacial un grupo de A recorrieron a m hacia la parte más externa de la estación y b m hacia el espacio. Luego dieron c vueltas a la estación espacial cuya circunferencia mide d m. Para finalizar exploraron el espacio caminando e x f m en f viajes de la misma longitud. ¿Qué expresión representa mejor la distancia total que recorrieron?',
		answers: [
			'a x b + c x d + e x f', 'a + b + c x d + e x f', 'a + b + c x d + e + f', 'a + b + c + d + e x f'
		],
		answer: 'a + b + c x d + e x f'
	},
	{
		id: 13,
		instruction: 'Selecciona la respuesta correcta:',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 10',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 41',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 15',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 10',
		helps: 'd < c',
		question: 'a + b + a x c - d =',
		answers: [
			'a + b) + a x c - d', 'a + b + a x (c - d)', 'a + (b + a) x c - d', 'a + b + a x c - d'
		],
		answer: 'a + b + a x c - d'
	},
	{
		id: 14,
		instruction: 'Selecciona la respuesta correcta:',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 15',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 10',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 10',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 16',
		help5: 'e = número entero positivo mayor que 1 y menor que 11',
		helps: 'c < a ',
		question: 'a x b - c + e x d / e = ',
		answers: [
			'a x (b - c) + e x d / e', 'a x b - (c + e x d / e)', 'a x b + c + e x d / e', 'a x b - c + e x d / e'
		],
		answer: 'a x b - c + e x d / e'
	},
	{
		id: 15,
		instruction: 'Selecciona la respuesta correcta:',
		help: 'a = número entero positivo igual o mayor que 1 y menor que 16',
		help2: 'b = número entero positivo igual o mayor que 2 y menor que 16',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 16',
		help4: 'd = número entero positivo igual o mayor que 1 y menor que 10',
		question: 'a x d + c x b / c - a + b=',
		answers: [
			'a x (d + c x b) / c - a + b ', 'a x d + c x b / c - a + b', 'a x d + c x b / (c  - a) + b', 'a + d + c x b / c  - a + b'
		],
		answer: 'a x d + c x b / c - a + b'
	},
	{
		id: 16,
		instruction: 'Selecciona la respuesta correcta:',
		help: 'a = número entero positivo igual o mayor que 5 y menor que 20',
		help2: 'b = número entero positivo igual o mayor que 6 y menor que 25',
		help3: 'c = número entero positivo igual o mayor que 2 y menor que 20',
		question: 'a + b x c =',
		answers: [
			'a + b x c', '(a + b) x c', 'a + b + c', 'a x b + c'
		],
		answer: 'a + b x c'
	},
	{
		id: 17,
		instruction: 'Instrucciones: Selecciona la respuesta correcta.',
		question: 'Un A realizó a viajes de prueba en un año, de ellos solo b fueron exitosos. El año siguiente realizó c viajes cada mes y todos fueron considerados como exitosos. El último año viajó e veces y solo f de esos viajes fueron considerados como no exitosos. ¿Qué expresión representa mejor la cantidad de viajes exitosos realizados por el A?',
		help: 'a = Número entero positivo mayor o igual que 2 y menor o igual que 30',
		help2: 'b = Número entero positivo mayor o igual que 2 y menor o igual que 25',
		help3: 'c = Número entero positivo mayor o igual que 3 y menor o igual que 10',
		help4: 'd = 12',
		help5: 'e = Número entero positivo mayor o igual que 10 y menor o igual que 20.',
		help6: 'f = Número entero positivo mayor o igual que 2 y menor o igual que 10',
		helps: 'A = satélite, cohete, dispositivo espacial, transbordador',
		helps2: 'Restricción a > b : f < e',
		answers: [
			'a - b + c  + e - f', 'a - b +  d + e - f', 'a - b + c x d + e - f', 'a - b + c x d + f'
		],
		answer: 'a - b + c x d + e - f'
	},
	{
		id: 18,
		instruction: 'Selecciona la respuesta correcta:',
		help: 'a = número entero positivo igual o mayor que 5 y menor que 20',
		help2: 'b = número entero positivo igual o mayor que 10 y menor que 25',
		help3: 'c = número entero positivo igual o mayor que 4 y menor que 15',
		helps: 'c < b',
		question: 'a x b - c =',
		answers: [
			'a x (b - c)', 'a x b - c', 'a + b - c', 'a + b + c'
		],
		answer: 'a x b - c'
	},
	{
		id: 19,
		instruction: 'Selecciona el número que falta en la operación',
		help: 'a = número entero positivo igual o mayor que 4 y menor que 20',
		help2: 'b = número entero positivo igual o mayor que 3 y menor que 15',
		help3: 'c = número entero positivo igual o mayor que 5 y menor que 21',
		question: 'a + __ x c = a + b x c',
		answers: [
			'b', 'a', 'b + 1', 'b - 1'
		],
		answer: 'b'
	},
	{
		id: 20,
		instruction: 'Selecciona el signo que hace falta en la operación:',
		help: 'a = número entero positivo igual o mayor que 4 y menor que 16',
		help2: 'b = número entero positivo igual o mayor que 3 y menor que 21',
		help3: 'c = número entero positivo igual o mayor que 4 y menor que 13',
		question: 'a __  c x b / c = a + c x b / c',
		answers: [
			'-', 'x', '/', '+'
		],
		answer: '+'
	}
]

