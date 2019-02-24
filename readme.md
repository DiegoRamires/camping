RESTfull Routes
____________________________________________________________________________________________________________
|name     |   url                  | HTTP Verb  |   description                                             |
|---------|------------------------|------------|-----------------------------------------------------------|
|INDEX    |   /camgrounds          |   GET      |   Display a list of all campgrounds                       |
|NEW      |   /camgrounds/new      |   GET      |   Display a form to make a new campground                 |
|CREATE   |   /camgrounds          |   POST     |   Add a new camogroung to DB                              |
|SHOW     |   /camgrounds/:id      |   GET      |   Shows info about one campground                         |
|EDIT     |   /camgrounds/:id/edit |   GET      |   Show edit form for one campground                       |
|UPDATE   |   /camgrounds/:id      |   PUT      |   Update a particular campground, then redirect somewhere |
|DESTROY  |   /camgrounds/:id      |   DELETE   |   Delete a particular campground, then redirect somewhere |
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
mongod
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
