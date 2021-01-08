# nodejs-interview-project
---
## Tasks
---
#### 1) Build an audit log system which reads the username field from the header after the delete operation and insert it to the auditLog table.
Example request
```bash
curl --location --request DELETE 'localhost:3000/asset_management/5fed9b528a7abe2270138980' \
--header 'username: mehmet'
```
Audit log format
```json
{
  "username" : "mehmet",
  "ts" : 1609411053000,
  "assetId" : "5fed9b528a7abe2270138980"
}
```
### 2) Write a function that writes access logs to the console.Logs should be in the format below.
```bash
Ip Address : 178.66.45.156 ,timestamp: 1609859231000 ,route: /asset_management, method: GET
```
### 3) Find the bug related to update in the asset_management part.

### 4) List the operations count performed by each person in the format below.
```json
{
  "ahmet" : 45,
  "mehmet" : 32,
  "hasan" : 13
}
```
