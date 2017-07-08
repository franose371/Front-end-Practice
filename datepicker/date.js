(function () {
	var datepicker = {};
	datepicker.getMOnthData = funciton(year,month) {
		var ret = [];
		if (!year || !month) {
			var today = new Date();
			month = today.getMonth() + 1;
		}
		var firstDay = new Date(year,month - 1, 1);
		var fisrtDayWeekDay = firstDay.getDay();
		if (fisrtDayWeekDay === 0) fisrtDayWeekDay = 7;

		var lastDayOfLastMonth = new Date(year, month - 1, 0);
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();

		var preMonthDayCount = fisrtDayWeekDay - 1;

		var lastDay = new Date(year, month, 0);
		var lastDate = lastDay.getDate();

		for (var i = 0; i < 7*6; i++) {
			var date = i -
		}
	}
	window.datepicker = datepicker;
})();