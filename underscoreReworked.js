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

		var total = start;

		if (total.constructor === Array){
			each(list, function(value){
				iterator(total, value);
			});
		}

		else{
			each(list, function(value){
				total = iterator(total, value);
			});
		}
		return total;
	};



	console.log(reduce([1,2,3,4], function(num, mun){return num + mun}, 0))
	console.log(reduce([1,2,3,4], function(array, num){array.push(num + 3);}, []))
};
