(function() {
	var datepicker = {};
	datepicker.getMonthData = function(year, month){
		var ret = [];
		//若没有参数就使用当前日期
		if ((!year || !month) && month != 0) {
			var today = new Date();
			year = today.getFullYear();
			month = today.getMonth() + 1;
		}

		//传入数据时month需要-1，获得传入参数月份的第一天
		var firstDay = new Date(year, month - 1, 1);

		year = firstDay.getFullYear();
		month = firstDay.getMonth() + 1;
		//当月第一天是星期几
		var fisrtDayWeekDay = firstDay.getDay();
		if (fisrtDayWeekDay === 0) fisrtDayWeekDay = 7;
		//上月最后一天，获得的是当月的第0天
		var lastDayOfLastMonth = new Date(year, month - 1, 0);
		//上月的最后一天是上月的第几天，即上月有多少天
		var lastDateOfLastMonth = lastDayOfLastMonth.getDate();
		//当月日历需要在第一行显示上月的几天，日历排列为一二三四五六日，若当月第一天为周一，则需要显示0天，周二则需要显示1天
		var preMonthDayCount = fisrtDayWeekDay - 1;

		//本月最后一天，获得的是下个月的第0天，越界定位
		var lastDay = new Date(year, month, 0);
		//是本月的第几天，即本月有多少天
		var lastDate = lastDay.getDate();

		for (var i = 0; i < 7 * 6; i++) {
			//日历显示的第i个数是当月哪一天
			var date = i + 1 - preMonthDayCount;
			var showDate = date;
			var thisMonth = month;

			if (date <= 0) {
				//上一月
				thisMonth = month - 1;
				showDate = lastDateOfLastMonth + date;
			} else if (date > lastDate) {
				//下一月
				thisMonth = month + 1;
				showDate = showDate - lastDate;
			}

			if (month === 0) thisMonth = 12;
			if (month === 13) thisMonth = 1;

			ret.push({
				month: thisMonth,
				date: date,
				showDate: showDate
			});
		}
		return {
			year: year,
			month: month,
			days: ret
		};
	};
	window.datepicker = datepicker;
})();