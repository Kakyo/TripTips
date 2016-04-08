window.app = window.app || {};

app.global = (function() {
  "use strict";

  return {

    init: function() {
		
		$("form").validate({
			errorClass: 'invalid',
			errorElement: 'span'
		});
	}

  };

})();

app.global.init();
