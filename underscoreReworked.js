// UnderscoreReworked by Eric Geniesse

/*==============================================
These are the initial functions that will be
used to create the directory
==============================================*/

function objCompare (object, properties){
	var keys = Object.keys(properties);
	var toggle = true;
	each(keys, function(key){
		if (properties[key] !== object[key]){
			toggle = false;
		}
	});	
	return toggle;
}


function each (list, iterator){

	if(list.constructor === Object){
		for (var key in list){
			iterator(list[key]);
		}
	} else{
		for (var i = 0; i< list.length; i++){
			iterator(list[i]);
		}
	}
}


function map (list, iterator){

	var newArr = [];

	each(list, function(value){
		newArr.push(iterator(value));
	});

	return newArr;

}

function reduce (list, iterator, start){

	var total = start || 0; // If start isn't given a value, it is 0 by default.

	each(list, function(value){
		total = iterator(total, value);
	});
	return total;
}

function reduceRight(list, iterator, start){
		
	list = list.reverse();
	return reduce(list, iterator, start);

}

function find(list, predicate){

	for (var element in list){
		if (predicate(list[element]))
			return list[element];
	}
}

function filter(list, predicate){
	var filtArr = [];

	each(list, function(value){
		if (predicate(value)){ filtArr.push(value); }
	});
	return filtArr;
}

function where(list, properties){	
	return filter(list, function(object){
		return objCompare(object, properties);
	});
}

function findWhere(list, properties){
	return find(list, function(object){
		return objCompare(object, properties);
	});
}
	

	/*========================================================
	The following functions are specific to arrays
	========================================================*/

function flat(array){
	return reduce(array, funciton(a,b){ return a.concat(b); }, []);
}



function flatten(list, shallow){
	shallow = shallow || 0;
	var array = list;
	var toggle = true;

	if (shallow !== 0){			
		array = flat(list);
	}

	else{


		while (toggle){
			array = flat(array); // Reduces the array down one level
			toggle = false; 
			each(array, function(value){ // Checks to see if some of the values are still arrays
				if (Array.ArisArray(value) == Array){ toggle = true; }					
			});
		}
	}
	return array;

}

function someThing(just, a, test){
	var hello = "some string to fill the function's body";
}

