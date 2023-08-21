export class WorkOrder {
    value: string;
}
export class ResourceId {
    value: string;
}

export class SyncResultEntry {
    startOfWeek: string;
    syncDate: string;
    resourceId: ResourceId;
    employeeName: string;
    syncResult: string;
    workOrder: WorkOrder;
    message: string;
    camisHours: number;
    inputHours: number;
}
