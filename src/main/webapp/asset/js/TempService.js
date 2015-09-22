var TempService = {

	getIndex: function(celsius, callback) {
		$.ajax({
		  url: 'TempController',
		  data: {'celsius': celsius},
		  success: function(result) {
		  	callback(parseFloat(result));
		  },
		  error: function() {
		  	callback(null);
		  }
		});
	},

}; 
