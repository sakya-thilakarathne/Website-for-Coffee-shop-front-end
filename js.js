
function fncValidate() {
	var fn = document.form1.fname.value;
	var ln = document.form1.lname.value;
	var pass1 = document.form1.Password.value;
	var pass2 = document.form1.ConPassword.value;
	var patt = /[^a-z]/i;
	var fname = patt.test(fn);
	var lname = patt.test(ln);

	if (fn == "") {
		alert('Please input Firstname');

		return false;
	}
	if (fn == null || fname == true) {
		alert("Enter only Alphabet for Firstname");
		return false;
	}
	if (ln == "") {
		alert('Please input Lastname');

		return false;
	}
	if (ln == null || lname == true) {
		alert("Enter only Alphabet for Lastname");
		return false;
	}

	function calculate_age(){
		var birth_date= new Date(document.getElementById("bd").value);
		var birth_date_day=birth_date.getDate();
		var birth_date_month=birth_date.getMonth();
		var birth_date_year=birth_date.getFullYear();

		var today_date=new Date();
		var today_day=today_date.getDate();
		var today_month=today_date.getMonth();
		var today_year=today_date.getFullYear();

		var calculate_age=0;

		calculate_age=today_year-birth_date_year;

		if (today_month>birth_date_month) calculate_age= today_year-birth_date_year;
		else if(today_month==birth_date_month)
		{
			if (today_day>=birth_date_day) calculate_age= today_year-birth_date_year;
			else calculate_age= today_year-birth_date_year-1;
		}

		else calculate_age= today_year-birth_date_year-1;

		var output_value=document.getElementById("bd").value;
		document.getElementById("calculate_age").innerHTML=output_value;
	}


	function countage() {
		if (checkdob()) {
			let dob = document.getElementById('dob').value.split('-');
			let birthyear = parseInt(dob[0]);
			let birthmonth = parseInt(dob[1]);
			let birthday = parseInt(dob[2]);
			let presentdate = new Date();
			let presentyear = parseInt(presentdate.getFullYear());
			let presentmonth = parseInt(presentdate.getMonth() + 1);
			let presentday = parseInt(presentdate.getDate());
			if (birthday >= presentday) { birthmonth = birthmonth + 1 }
			if (birthmonth >= presentmonth) { birthyear = birthyear + 1 }
			let age = presentyear - birthyear;
			if (age > 10) {
				document.getElementById('age').value = age;
				return true;
			}
		}
    document.getElementById('errorslot4').innerHTML = 'improper date of birth';
    return false;

}



	var add = document.form1.address.value;
	var patt2 = /[^a-z, ]/i;
	var address = patt2.test(add);
	if (add == "") {
		alert('Please enter your address');

		return false;
	}
	if (add == null || address == true) {
		alert("Enter only Alphabet for Address with ,");
		return false;
	}

	var em = document.form1.email.value;
	var atpos = em.indexOf("@");
	var dotpos = em.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
		alert("Ivalid email id");
		return false;
	}

	if (pass1 == "") {
		alert('Please input Password');

		return false;
	}

	if (pass1.length < 6) {
		alert('Password strength should not less than 6 characters');

		return false;
	}


	if (pass2 == "") {
		alert('Please input Confirm Password');
		return false;
	}

	if (pass1 != pass2) {
		alert('Confirm Password Not Match');
		return false;
	}
	var a = document.getElementById('Agree');
	var n = document.getElementById('No');

	if ((a.checked == false) && (n.checked == false)) {
		alert("Please AGREE");
		document.getElementById("t&c").style.border = "2px solid red";
		return false;
	}
	else {
		document.getElementById("t&c").style.border = "";
	}
	//alert('Successfully submitted.');
	document.form1.submit();
}
