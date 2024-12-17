# wekcome to filght setup

## Project Setup
    - clone the project on your local
    - Execute 'npm install' on the same path as of your root directory of the downloaded project.
    - Create a '.env' file in the root directory and add the following environment variable
        - 'PORT = 3000'
    - Inside the 'src/config' folder create a new file 'config.json' and then add the following piece of json

```
    {
        "development": {
            "username": <YOUR_DB_LOGIN_NAME>,
            "password": <YOUR_DB_PASSWORD>,
            "database": "Flights_Search_DB_DEV",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }

```
```
    - Once you have added your db config as listed above, go to the src folder from your terminal and execute 'npx sequelize db:create'
    and then execute 

    'npx sequelize db:migrate'
```

## DB Design

    - Airplane table
    - Flight
    - Airport
    - City
    
    - A flight belongs to an airplane but one airplane can be used in multiple flights
    - A city has many airport but one airport belongs to a city.
    - One airport can have many flights, but a flights be;ong to one airport

## Tables

### City -> id, name, created_at, updated_at
### Airport -> id, name, address, city_id, creatde_at, updated_at
    Relationship -> City has many airports and Airport belongs to a city(one to many)

```
    create a model and migration file:
    npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
```    

```
    Migrate the files to form db table:
    npx sequelize db:migrate
```

```
    create a seed file: 
     npx sequelize seed:generate --name add-airplanes
```
```
    Seed the seed file:
    npx sequelize db:seed:all
