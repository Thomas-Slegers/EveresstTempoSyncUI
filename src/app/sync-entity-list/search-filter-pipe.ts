import { Pipe, PipeTransform } from '@angular/core';
import { SyncEntity } from '../model/sync-entity';

@Pipe({ name: 'syncEntity' })
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
            const idFound =
                value.id.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const messageFound =
                value.message.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const employeeNameFound =
                value.employeeName.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const errorCodeFound =
                value.errorCode.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            const hoursLoggedFound =
                value.hoursLogged.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            if ( idFound || messageFound || employeeNameFound || errorCodeFound || hoursLoggedFound) {
                console.log(value)
                return value;
            }
        });
    }
}