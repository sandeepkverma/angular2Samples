import { Pipe,PipeTransform } from '@angular/core';


@Pipe({
    name:"timestampToDate"
})

export class TimestampToDatePipe implements PipeTransform{
    transform(timestamp:number){
        if (typeof timestamp == 'undefined') {
				return "-";
			}
			let d = new Date(timestamp * 1000);
			let date_time;
			let month:string = d.getMonth().toString();
			let day:string = d.getDate().toString();
			month = month + 1;

			month = month + "";

			if (month.length == 1) {
				month = "0" + month;
			}

			day = day + "";

			if (day.length == 1) {
				day = "0" + day;
			}
			var hours = d.getHours();
			// minutes part from the timestamp
			var minutes = "0" + d.getMinutes();
			// seconds part from the timestamp
			var seconds = "0" + d.getSeconds();
			// will display time in 10:30:23 format
			date_time = day + '/' + month + '/' + d.getFullYear() + ' ' + hours
					+ ':' + minutes.substr(minutes.length - 2) + ':'
					+ seconds.substr(seconds.length - 2);
			return date_time;
    }
}