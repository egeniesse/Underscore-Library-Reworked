// UnderscoreReworked by Eric Geniesse

function test(){
	

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


};
