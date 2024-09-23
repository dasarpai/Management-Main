// JavaScript Document
function validateUserName(){
	var username = $("#user_name").val();
		if(username == "") {
			$("#user_name_e").fadeIn();
     		$("#user_name").focus();
      		return false;
		}else{
			$("#user_name_e").fadeOut();
			return true;	
		}
	}	
function validateAddress(){
	var addrs = $("#address").val();
		if(addrs == "") {
			$("#address_e").fadeIn();
     		$("#address").focus();
      		return false;
		}else{
			$("#address_e").fadeOut();
			return true;	
		}
	}	
function validateCity(){
	var city = $("#city").val();
		if(city == "") {
			$("#city_e").fadeIn();
     		$("#city").focus();
      		return false;
		}else{
			$("#city_e").fadeOut();
			return true;	
		}
	}	
function validateZip(){
	var zip = $("#zip").val();
		if(zip == "") {
			$("#zip_e").fadeIn();
     		$("#zip").focus();
      		return false;
		}else{
			$("#zip_e").fadeOut();
			return true;	
		}
	}
function validateAge(){
	
           
	var age = $("#age").val();
	var regexp1 = new RegExp("[^0-9]");
		if(age == "") {
			$("#age_e").fadeIn();
     		$("#age").focus();
      		return false;
		}
		else if(regexp1.test(age)){
			$("#age_e").fadeIn();
			$("#age").val("");
     		$("#age").focus();
			}
		else if(age<=0 && age>=101){
			$("#age_e").fadeIn();
			$("#age").focus();
			}
		else{
			$("#age_e").fadeOut();
			return true;	
		}
	}	
function validateGender(){
	


	if (($("#male:checked").length == 0) && ($("#female:checked").length == 0)){
		$("#gender_e").fadeIn();
		return false;
		}else{
       $("#gender_e").fadeOut();
	   return true;
     }    
	}
function validateLastName(){
	var lname = $('#lastName').val();
	if((lname == "")){
      $("#lastName").focus();
      $("#lastName_e").fadeIn();
      return false;
     }else{
       $("#lastName_e").fadeOut();
	   return true;
     } 
	}
	
function validateSecurityCode(){
	var scode = $('#sCode').val();
	if((scode == "")){
      $("#sCode").focus();
      $("#sCode_e").fadeIn();
      return false;
     }else{
       $("#sCode_e").fadeOut();
	   return true;
     } 
	}

function validateFirstName(){
	var fname = $('#firstName').val();
	if((fname == "")){
      $("#firstName").focus();
      $("#firstName_e").fadeIn();
      return false;
     }else{
       $("#firstName_e").fadeOut();
	   return true;
     } 
	}

function validateRelationShip(){
	var fname = $('#firstName').val();
	if((fname == "")){
      $("#firstName").focus();
      $("#firstName_e").fadeIn();
      return false;
     }else{
       $("#firstName_e").fadeOut();
	   return true;
     } 
	}
	
function validateEmail(){
	var emailaddress=$("#email_id").val();
	var atpos=emailaddress.indexOf("@");
    var dotpos=emailaddress.lastIndexOf(".");
	if(emailaddress == "") {
			$("#email_id_e").fadeIn();
     		$("#email_id").focus();
      		return false;
		}else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=emailaddress.length){
				$("#email_id").focus();
				$("#email_id_e").fadeIn();
				$("#email_id_e").html("Error Message - Content to be provided"); 
				return false;
			}else{
			$("#email_id_e").fadeOut();
			return true;
		}
	}
function validatePassword(){
	//alert();
	var password = $('#password').val();
	var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	if((password.length <= 7)){
			$("#password").focus();
			$("#password_e").fadeIn();
			return false;
		 }else if(!password.match(decimal)){
      $("#password_e").fadeIn();
      $("#password_e").html("Error Message - Content to be provided");
      $("#password").focus();
      return false;
    }else{
      $("#password_e").fadeOut();
	  return true;
    } 
	}
	
function validateConfirmPassword(){
	var password = $('#password').val();
	//alert(password);
	var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
	var confirmPassword = $('#confirmPassword').val();
	//alert(confirmPassword);
	 if(password!=confirmPassword){
      $("#confirmPassword").focus();
      $("#confirmPassword_e").fadeIn();
      $("#confirmPassword_e").html("Error Message - Content to be provided");
      return false;
     }else if(!password.match(decimal)){
      $("#confirmPassword_e").fadeIn();
      $("#confirmPassword_e").html("Error Message - Content to be provided");
      $("#confirmPassword").focus();
      return false;
    }else{
      $("#confirmPassword_e").fadeOut();
	  return true;
    } 
	}
// For Login Validation
$(".LoginForm").click(function(){
		var passwordValidate = validatePassword();
		var userNameValidate = validateUserName();
		if(passwordValidate && userNameValidate){
			window.location.href="main.html";
			}
	});
	
// For Registration Page Validation

$('.register_step1').click(function(e) {
	
	var scodeval = validateSecurityCode();
	var lnameval = validateLastName();
	var fnameval = validateFirstName();
	
	if( lnameval && scodeval && fnameval){
		window.location.href ="registerstep2.html";
		}
	
});

// For registraion Step 2

$(".registerform").click(function(){
		 var emailValidate =  validateEmail();
		  var confirmPasswordValidate =  validateConfirmPassword();
		   var passwordValidate =  validatePassword();
		    var userNameValidate =  validateUserName();
		if(emailValidate && confirmPasswordValidate && passwordValidate && userNameValidate){
			window.location.href="registerstep3.html";
			}
	});
	
// For forgotten password page
$('#forgot_pwd_step1').click(function(e) {
	
	var scodeval = validateSecurityCode();
	var lnameval = validateLastName();
	var fnameval = validateFirstName();
	
	if( lnameval && scodeval && fnameval){
		window.location.href ="forgetpassword2.html";
		}
	
});

// For Forgotten page Step 2
$('#forgot_pwd_step2').click(function(e) {
	
	var confirmPasswordValidate = validateConfirmPassword();
	var passwordValidate = validatePassword();
	
	if( confirmPasswordValidate && passwordValidate){
		window.location.href ="forgetpassword3.html";
		}
	
});

// For Dependent Page
$('#submit_dependent').click(function(e) {
    var genderValidate = validateGender();
	var securityCodeValidate = validateSecurityCode();
	var ageValidate = validateAge();
	var zipValidate = validateZip();
	var cityValidate = validateCity();
	var addressValidate = validateAddress();
	var lastNameValidate = validateLastName();
	var firstNameValidate = validateFirstName();
	if( genderValidate && securityCodeValidate && ageValidate && zipValidate && cityValidate && addressValidate && lastNameValidate && firstNameValidate){
		window.location.href ="dependents.html";
	}
});