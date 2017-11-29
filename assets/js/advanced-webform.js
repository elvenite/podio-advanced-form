
// Warns the user if the file is too large
// inspiration from html5rocks
//http://www.html5rocks.com/en/tutorials/file/dndfiles/
function handleFileSelect(evt) {
	var el = evt.target,
	files = el.files, // FileList object
	max = document.getElementsByName('MAX_FILE_SIZE');
	if (max){
		max = parseInt(max[0].value);
	}
	
	// remove all old error messages
	var errors = document.querySelectorAll('.awp-file-size-error');
	if (errors){
		for (var i = 0, err; err = errors[i]; i++) {
			el.parentNode.removeChild(err);
		}
	}

	// files is a FileList of File objects. List some properties.
	for (var i = 0, f; f = files[i]; i++) {
		if (f.size >= max){
			var	alert = document.createElement('p');
			alert.setAttribute('class', 'alert alert-danger awp-file-size-error');
			alert.appendChild(document.createTextNode(escape(f.name) + ' is too large. (' + (f.size / 1048576).toFixed(2) + 'MB, max allowed is ' + (max / 1048576).toFixed(2) + 'MB.)'));
			el.parentNode.insertBefore(alert, el.nextSibling);
		}
	}
}

if (window.File && window.FileList){
	elements = document.querySelectorAll('[type="file"]');
	if (elements){
		for (var i = 0, el; el = elements[i]; i++) {
			el.addEventListener('change', handleFileSelect, false);
		}
	}
}
// Displays errormessage if the email is'nt valid
function displayErrorTextforEmailField(){
	
	$('YOUR_EMAIL_FIELD_ID').before(function(){
		return '<p class = "message" style ="float:right; color:#b63333; font-style: italic;font-size: 11px;"></p>';
	     
		});
	
	$('YOUR_EMAIL_FIELD_ID').keyup(function(){
    var value = $(this).val();
		if(!ValidateEmail(value)){
			
			$('.message').html('skal være en emailadresse');
		}
		  else if(ValidateEmail(value)){
			$('.message').html('');
			$(this).css("background-color","white");
		  }
		 
 });
	 
		
	 }
	 
  function ValidateEmail(mail)   
    {  
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))  
      {  
        return (true);  
      }  
         
        return (false);  
    }
	// Validates the mail input and disable submit if mail is not valid
	function validateOnInsert(){
		
    $('input[name=email]').on('input', function() {
	var input=$(this);
	
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){
		input.removeClass("invalid").addClass("valid");
		$('.enableOnInput').prop('disabled', false);
	}
	else{
		input.removeClass("valid").addClass("invalid");
		$('.enableOnInput').prop('disabled', true);
	}
	});
	}
