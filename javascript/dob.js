function validation(){
	var month = document.getElementById('month').value;
	var date = document.getElementById('date').value;
	var year = document.getElementById('year').value;
	
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