function date_time(id) {
    "use strict";
	var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth(),
        d = date.getDate(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        day = date.getDay(),
	
        months = ['January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December'],
				
        days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        result;
	
	if (h < 10) {
		h = "0" + h;
	}
	
	if (m < 10) {
		m = "0" + m;
	}
	
	if (s < 10) {
		s = "0" + s;
	}
		
	result = '[<b>' + h + ':' + m + ':' + s + '</b>] ' + days[day] + ', ' + months[month] + ' ' + d + ', ' + year;
	document.getElementById(id).innerHTML = result;
	setTimeout('date_time("' + id + '");', '1000');
	
	return true;
}