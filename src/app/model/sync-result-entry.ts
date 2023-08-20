export class WorkOrder {
    value: string;
}


export class SyncResultEntry {
    startOfWeek: string;
    syncDate: string;
    resourceId: string;
    employeeName: string;
    syncResult: string;
    workOrder: WorkOrder;
    message: string;
    camisHours: string;
    inputHours: string;
}
