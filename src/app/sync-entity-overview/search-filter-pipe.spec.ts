import {SearchFilterPipe} from './search-filter-pipe';

describe('SearchFilterPipe', () => {
    let syncEntities;
    let searchFilterPipe;
    beforeEach(async () => {
        searchFilterPipe = new SearchFilterPipe();
        syncEntities = [{
            employeeName: "Bryon, Ward",
            errorCode: "4",
            hoursLogged: "-1",
            id: "2",
            message: "Not syncing employee Bryon, Ward timesheets due to Bryon, Ward sum(camisHours) > sum(tempoHours) on 2023-05-03",
            resourceId: "I098816",
            startDate: "2023-05-01",
            workOrder: ""
        },
            {
                employeeName: "Bryon, Ward",
                errorCode: "1",
                hoursLogged: "40",
                id: "1",
                message: "Not syncing inputEmployee Bryon, Ward timesheet starting at 2023-05-08 due to less than 40.0 hours logged",
                resourceId: "I098816",
                startDate: "2023-05-08",
                workOrder: ""
            }]
    })

    it('should return a list of one SyncEntity filtered on the searchTerm date "2023-05-01"', () => {
        const result = searchFilterPipe.transform(syncEntities, "2023-05-01");
        const syncEntitiesEnd = [{
            employeeName: "Bryon, Ward",
            errorCode: "4",
            hoursLogged: "-1",
            id: "2",
            message: "Not syncing employee Bryon, Ward timesheets due to Bryon, Ward sum(camisHours) > sum(tempoHours) on 2023-05-03",
            resourceId: "I098816",
            startDate: "2023-05-01",
            workOrder: ""
        }]
        expect(result).toEqual(syncEntitiesEnd);
    });

    it('should return SyncEntities filtered on the searchTerm name "Ward"', () => {
        const result = searchFilterPipe.transform(syncEntities, "Ward");
        const syncEntitiesEnd = [{
            employeeName: "Bryon, Ward",
            errorCode: "4",
            hoursLogged: "-1",
            id: "2",
            message: "Not syncing employee Bryon, Ward timesheets due to Bryon, Ward sum(camisHours) > sum(tempoHours) on 2023-05-03",
            resourceId: "I098816",
            startDate: "2023-05-01",
            workOrder: ""
        },
            {
                employeeName: "Bryon, Ward",
                errorCode: "1",
                hoursLogged: "40",
                id: "1",
                message: "Not syncing inputEmployee Bryon, Ward timesheet starting at 2023-05-08 due to less than 40.0 hours logged",
                resourceId: "I098816",
                startDate: "2023-05-08",
                workOrder: ""
            }]
        expect(result).toEqual(syncEntitiesEnd);
    });

    it('should return an empty list of SyncEntities filtered on the searchTerm date "2023-10-01"', () => {
        const result = searchFilterPipe.transform(syncEntities, "2023-10-01");
        const syncEntitiesEnd = []
        expect(result).toEqual(syncEntitiesEnd);
    });

    it('should return an empty list of SyncEntities filtered on the searchTerm name "Thomas"', () => {
        const result = searchFilterPipe.transform(syncEntities, "2023-10-01");
        const syncEntitiesEnd = []
        expect(result).toEqual(syncEntitiesEnd);
    });
});