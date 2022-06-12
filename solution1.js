function Card_maker(Cstr) {
	if(Cstr.length <= 5) {
		return Cstr;
	}

	if(!Cstr || typeof Cstr != 'string') {
		return '';
	}

	const first = Cstr.slice(0, 1);
	const lastFour = Cstr.slice(Cstr.length-4, Cstr.length);
	let result = '';

	for(let i=1; i<Cstr.length-4; i++) {
		let str = Cstr[i];

		if(isNaN(str) || str == '-') {
			result += str;
		} else {
			result += '#';
		}
	}
   
	return tomi = first + result + lastFour;
   

}

