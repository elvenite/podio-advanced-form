
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
	 
	// Validates the mail input and disable submit if mail is not valid
	// and adds an errormessage popup
	function validateOnInsert(error_message){
		// the Id of the mailfield
	var mailId = '#161816262';
	// Add textboxholder before mailfield
	$(mailId).before(function(){
	return '<p class = "message" style ="float:right; color:#b63333; font-style: italic;font-size: 11px;"></p>';
	     
	});	
		// Check email input value		
    $('input[name=email]').on('input', function() {
		
	var input=$(this);
	   //regular expression checiking input value
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){
		// Add a class named valid and remove invalid class
		input.removeClass("invalid").addClass("valid");
		// Enable submit button
		$('.enableOnInput').prop('disabled', false);
		// clear message field
		$('.message').html('');
		// Set message field color to white
		$(mailId).css("background-color","white");
	}
	else{
		// Add a class named invalid and remove valid class
		input.removeClass("valid").addClass("invalid");
		//Display error message
		$('.message').html(error_message);
		// Disable submit button
		$('.enableOnInput').prop('disabled', true);
	}
	});
	}