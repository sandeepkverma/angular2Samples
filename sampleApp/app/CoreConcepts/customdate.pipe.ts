
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'datepipe'
})

export class CustomDatePipe implements PipeTransform {
    monthNames: string[] = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    transform(value: string): string {
        
        let date = new Date(value);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + this.monthNames[monthIndex] + ' ' + year;

    }
}