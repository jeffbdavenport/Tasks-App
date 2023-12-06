

# Task App
## Create and display tasks

# Setup

Install packages
`npm install`

Install mongodb
https://www.mongodb.com/docs/manual/administration/install-community/

Enable on Ubuntu
`sudo systemctl enable mongod`

Start App:
`$ DEBUG=tasks-app:* npm start`

Testing:

`$ curl -H "Content-Type: application/json" localhost:3000/tasks/create -d '{"name":"New Task", "content":"This is the description"}'`

`{"success":{"name":"New Task","content":"This is the description"}}`


`$ curl localhost:3000/tasks`

`{"tasks":[{"_id":"656fd6e499c20f9658bdda3e","name":"New Task","content":"This is the description","__v":0}]}`


`curl localhost:3000/tasks/656fd6e499c20f9658bdda3e`

`{"task":{"_id":"656fd6e499c20f9658bdda3e","name":"New Task","content":"This is the description","__v":0}}`
