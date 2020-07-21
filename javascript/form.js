function validation(){
	var fstname = document.getElementById('fname').value;
	var lstname = document.getElementById('lname').value;
	var emailID = document.getElementById('email').value;
	var PhoneNo = document.getElementById('mobile').value;
	var passwd = document.getElementById('pass').value;
	var chkPasswd = document.getElementById('chkpass').value;
	var month = document.getElementById('month').value;
	var date = document.getElementById('date').value;
	var year = document.getElementById('year').value;
	
	if(fstname == ""){
		document.getElementById('fstname').innerHTML="**Enter your first name";
		return false;
	}
	if(fstname.length < 3){
		document.getElementById('fstname').innerHTML="**FirstName Should be more than 2 character";
		return false;
	}
	if(!isNaN(fstname)){
		document.getElementById('fstname').innerHTML="**Name should not be a number";
		return false;
	}
	
	
	if(lstname == ""){
		document.getElementById('lstname').innerHTML="**Enter your last name";
		return false;
	}
	if(lstname.length < 3){
		document.getElementById('lstname').innerHTML="**LastName Should be more than 2 character";
		return false;
	}
	if(!isNaN(lstname)){
		document.getElementById('lstname').innerHTML="**Name should not be a number";
		return false;
	}
	
	
	if(emailID == ""){
		document.getElementById('emailId').innerHTML="**Enter your Email Id";
		return false;
	}
	if(emailID.indexOf('@') <= 0){
		document.getElementById('emailId').innerHTML="**@Enter correct E-Mail ID";
		return false;
	}
	if((emailID.charAt(emailID.length-4) != '.') && (emailID.charAt(emailID.length-3) != '.')){
		document.getElementById('emailId').innerHTML="** . Enter correct E-Mail ID";
		return false;
	}
	
	
	if(PhoneNo == ""){
		document.getElementById('phone').innerHTML="**Enter your Phone No";
		return false;
	}
	if(isNaN(PhoneNo)){
		document.getElementById('phone').innerHTML="**You must enter number only";
		return false;
	}
	if(PhoneNo.length != 10){
		document.getElementById('phone').innerHTML="**Phone No must have ten digit";
		return false;
	}
	
	
	if(passwd == ""){
		document.getElementById('passmsg').innerHTML="**Enter your Password";
		return false;
	}
	if(chkPasswd == ""){
		document.getElementById('passmsg').innerHTML="**Enter your Password again here";
		return false;
	}
	if(passwd.length < 8){
		document.getElementById('passmsg').innerHTML="**Password Should be more than 7 characters";
		return false;
	}
	if(passwd.length > 20){
		document.getElementById('passmsg').innerHTML="**Password Should be less than 20 characters";
		return false;
	}
	if(passwd != chkPasswd){
		document.getElementById('passmsg').innerHTML="**please check your password";
		return false;
	}
	
	
	if(month == "" || date == "" || year == ""){
		document.getElementById('dob').innerHTML="**Fill up your DateOfBirth properly";
		return false;
	}
	
	if(month.length != 2 || date.length != 2){
		document.getElementById('dob').innerHTML="**Month and Date must be 2 characters.";
		return false;
	}
	if(year.length != 4){
		document.getElementById('dob').innerHTML="**Year must be 4 characters.";
		return false;
	}
	
	if(month == 01 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 03 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 04 && date > 30){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 05 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 06 && date > 30){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 07 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 08 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 09 && date > 30){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 10 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 11 && date > 30){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	if(month == 12 && date > 31){
		document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
		return false;
	}
	
	var temp = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
	
	if(temp){
		if(month == 02 && date > 29){
			document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
			return false;
		}
	}
	else{
		if(month == 02 && date > 28){
			document.getElementById('dob').innerHTML="**Verify your DateOfBirth again.";
			return false;
		}
	}
}