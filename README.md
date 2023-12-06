

# Task App
## Create and display tasks

# Setup

Install packages
`npm install`

Install mongodb
https://www.mongodb.com/docs/manual/administration/install-community/

Enable on Ubuntu
`sudo systemctl enable mongod`


Testing:

`curl localhost:3000/tasks/create -d '{"name": "New Task", "content": "This is the description"}'`

`curl localhost:3000/tasks`
{"tasks":[{"_id":"656fd10624b9c9714f487495","__v":0}]}

`curl localhost:3000/tasks/656fd10624b9c9714f487495`
