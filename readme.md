RESTfull Routes
_____________________________________________________________________________________________________________
|name     |   url                   | HTTP Verb  |   description                                             |
|---------|-------------------------|------------|-----------------------------------------------------------|
|INDEX    |   /campgrounds          |   GET      |   Display a list of all campgrounds                       |
|NEW      |   /campgrounds/new      |   GET      |   Display a form to make a new campground                 |
|CREATE   |   /campgrounds          |   POST     |   Add a new camogroung to DB                              |
|SHOW     |   /campgrounds/:id      |   GET      |   Shows info about one campground                         |
|EDIT     |   /campgrounds/:id/edit |   GET      |   Show edit form for one campground                       |
|UPDATE   |   /campgrounds/:id      |   PUT      |   Update a particular campground, then redirect somewhere |
|DESTROY  |   /campgrounds/:id      |   DELETE   |   Delete a particular campground, then redirect somewhere |
-------------------------------------------------------------------------------------------------------------

#### Project description:
- Create and manage a campground place, adding infos and picture. Logged people can add and delete comments about your publish.

#### Dependencies:

```
node 10.8.0
npm ou yarn
mongodb
```

#### Project instalation:

```
git clone https://github.com/DiegoRamires/camping
cd camping
yarn install
```

#### Start database

```
sudo mongod
or
sudo mongod --dbpath=/var/lib/mongodb
```

#### And then run server on other terminal tab

```
yarn start
or
npm start
```

#### See aplication running
visit the url => `localhost:3000`
