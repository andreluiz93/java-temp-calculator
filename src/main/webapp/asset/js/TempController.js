 var TempController = {
	
	init: function() {
		TempController.setForm();
	},
	
	setForm: function() {
		var form = document.querySelector('form');
		form.addEventListener('submit', function(event) {
			TempController.calculate(form);
			//it is necessary to avoid form submition
			event.preventDefault();
		});
	},
	
	calculate: function(form) {
		var 
			celsius = parseFloat(form.ce.value),
			result = 0;
		
		var callback = function(result) {
			TempController.showResult(result);			
		};
		
		TempController.showLoading(true);
		TempService.getIndex(celsius, callback);
	},
	
	showResult: function(result) {
		var spanResult = document.querySelector('.result');
		spanResult.innerHTML = result.toFixed(2);
		TempController.showLoading(false);
	},
	
	showLoading: function(isLoading) {
		document.querySelector('.label').innerHTML = isLoading ? 'loading...' : 'Fahrenheit Result'
	}

};

//initialization
TempController.init();