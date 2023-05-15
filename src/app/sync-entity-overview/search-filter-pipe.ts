import {Pipe, PipeTransform} from '@angular/core';
import {SyncEntity} from '../model/sync-entity';

@Pipe({name: 'syncEntity'})

export class SearchFilterPipe implements PipeTransform {
    transform(values: SyncEntity[], filter: string): SyncEntity[] {
        if (!filter || filter.length === 0) {
            return values;
        }

        if (values.length === 0) {
            return values;
        }

        // @ts-ignore
        return values.filter((value: SyncEntity) => {
            const employeeNameFound =
                value.employeeName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const startDateFound =
                value.startDate.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            if (employeeNameFound || startDateFound) {
                return value;
            }
        });
    }
}