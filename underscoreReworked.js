// UnderscoreReworked by Eric Geniesse


function each (list, iterator){

	if (list.constructor === Object){
		for (key in list){
			iterator(list[key]);
		};
	}
	else{
		for (var i = 0; i< list.length; i++){
			iterator(list[i]);
		};
	}
};


function map (list, iterator){

	var newArr = [];

	each(list, function(value){
		newArr.push(iterator(value));
	});

	return newArr;

};

function reduce (list, iterator, start){

	var total = start || 0; // If start isn't given a value, it is 0 by default.

	each(list, function(value){
		total = iterator(total, value);
	});
	return total;
};

function reduceRight(list, iterator, start){
		
	list = list.reverse();
	return reduce(list, iterator, start);

}

function find(list, predicate){

	for (element in list){
		if (predicate(list[element]))
			return list[element];
	};
};

function filter(list, predicate){
	var filtArr = [];

	each(list, function(value){
		if (predicate(value)){ filtArr.push(value); }
	});
	return filtArr;
};

function where(list, properties){
		
	var keys = Object.keys(properties);
	return filter(list, function(object){
		var toggle = true;
		each(keys, function(key){
			if (properties[key] !== object[key]){
				toggle = false;
			}
		});
		return toggle;
	});
};
	

	/*========================================================
	The following functions are specific to arrays
	========================================================*/



function flatten(list, shallow){
	shallow = shallow || 0;
	var array = list;
	var toggle = true;

	if (shallow !== 0){			
		array = reduce(array, function(a,b){return a.concat(b)}, []);
	}

	else{
		while (toggle){
			array = reduce(array, function(a,b){return a.concat(b)}, []); // Reduces the array down one level
			toggle = false; 
			each(array, function(value){ // Checks to see if some of the values are still arrays
				if (value.constructor == Array){ toggle = true; }					
			});
		};
	}
	return array;

};

