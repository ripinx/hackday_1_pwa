# Data storage in frontend

**Samples**
Collection of samples, equivalent to EF’s DbSet; this is the actual data the user enters
*Structure*
- id: int
- changedBy: string
- changedOn: Date
- version: bigint
- location: { easting: double, northing: double }
- value1: double
- value2: boolean
- value3: lookup

*Updates*
Collection of modifications to the data
Structure
- id: int
- collection: string/lookup - will show what collection/dbset the update is for
- recordId: int - the record that was worked on
- operationType: int/enum: Create, Update, Delete
- syncStatus: int/enum: Not attempted, Error, Done
- syncStatusText: string

**SampleService**
A frontend service that performs updates on data
*Actions*
Add
- add item to samples
- add item to updates, specifying id, operation type, version id
	- updates should not contain that particular record

Update
- update item in samples
- ensure item exists in updates for that id, then, based on previous operation
	- add - leave as add
	- update - leave as update
	- delete - not possible

Delete
- delete item from samples  
- ensure item exists in updates for that id
	- add - delete
	- update - delete
	- delete - not possible
	- nothing - delete

List all samples
- just get all samples

**SyncService**
Synchronizes client state with backend:
1. For each item in queue do, based on operation type:
	- add: POST
	- update: PUT
	- delete: DELETE
2. Get all items from backend
3. It would be nice if errors would be localized to records and not the whole sync operation - in that case it might be necessary to merge the current client state with the one received from backend