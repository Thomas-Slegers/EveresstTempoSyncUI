import {Pipe, PipeTransform} from '@angular/core';
import {SyncResultEntry} from "../model/sync-result-entry";

@Pipe({name: 'syncResultEntry'})

export class SearchFilterPipe implements PipeTransform {
    transform(values: SyncResultEntry[], filter: string): SyncResultEntry[] {
        if (!filter || filter.length === 0) {
            return values;
        }

        if (values.length === 0) {
            return values;
        }

        // @ts-ignore
        return values.filter((value: SyncResultEntry) => {
            const employeeNameFound =
                value.employeeName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const startDateFound =
                value.startOfWeek.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            if (employeeNameFound || startDateFound) {
                return value;
            }
        });
    }
}