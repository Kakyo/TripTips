window.app = window.app || {};

app.global = (function() {
  "use strict";

  function insertComments(feedTemplate) {
    var comments = $(feedTemplate).find('.comments');
    console.log(comments);
  }
 function prepareForm(){
	 
		$("form").validate({
			errorClass: 'invalid',
			errorElement: 'span'
		});
		
		$('.modal-trigger').leanModal();
		
 }
  function getFeed() {
    var tips = [
      {
        name: "Emilio",
        location: "Emilios place",
        message: "Good place to live",
        comments: [
          {
            name: "",
            comment: ""
          }
        ]
      }
    ],
    nTips = tips.length,
    tipTemplate = $('#tip-template').html(),
    body = $("#body"),
    renderedTemplate;

    for (var i = 0; i < nTips; i++) {

      renderedTemplate = tipTemplate.replace('location', tips[i].location).replace('name', tips[i].name).replace('content_text', tips[i].message);
      insertComments(renderedTemplate);

      body.append(renderedTemplate);
    }

  }

  return {

    init: function() {
      getFeed();
	  prepareForm();
    }

  };

})();

app.global.init();