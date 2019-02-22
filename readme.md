RESTfull Routes
____________________________________________________________________________________________________________
|name     |   url                  | HTTP Verb  |   desription                                              |
|===========================================================================================================|
|INDEX    |   /camgrounds          |   GET      |   Display a list of all campgrounds                       |
|NEW      |   /camgrounds/new      |   GET      |   Display a form to make a new dog                        |
|CREATE   |   /camgrounds          |   POST     |   Add a new camogroung to DB                              |
|SHOW     |   /camgrounds/:id      |   GET      |   Shows info about one campground                         |
|EDIT     |   /camgrounds/:id/edit |   GET      |   Show edit form for one campground                       |
|UPDATE   |   /camgrounds/:id      |   PUT      |   Update a particular campground, then redirect somewhere |
|DESTROY  |   /camgrounds/:id      |   DELETE   |   Delete a particular campground, then redirect somewhere |
-------------------------------------------------------------------------------------------------------------

### Dependencias:

```
node 10.8.0
npm ou yarn
mongodb
```

### Instalation:

git clone
cd yelpCamp
yarn install

run
  sudo mongod --dbpath=/var/lib/mongodb
    or
  mongod
to run server in background

run yelpCamp server 
npm run start

### See aplication running 
localhost:3000
