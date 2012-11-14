# AQL Parser

*Abbreviated Query Language* for generating data models (possibly for an ORM)
and making writing select queries easier.

[![Build Status](https://secure.travis-ci.org/stanistan/aql-parser-js.png?branch=master)](https://travis-ci.org/stanistan/aql-parser-js)

(Using [jison](https://github.com/zaach/jison) as a parser generator.)

## Install

```
npm install aql-parser
```

## AQL Syntax

A basic introduction.

```
artist { name }         -> select artist.name from artist
```

```
artist { name, bio }    ->  select artist.name, artist.bio from artist
```

```
artist {
    name
    where name ilike 'pink %'
}
label on artist.id = artist_id {
    name as label_name
    order by name
}

->

select
    artist.name,
    label.name as label_name
from artist
left join label on artist.id = label.artist_id
where artist.name ilike 'pink %'
order by label.name
```

see `sqlSpec` in tests for more structure/usage.

## JS Usage

#### Simple

```js
var aql = require('aql');

var statement = 'artist { name, count(*) as num_artists }';

var query = aql.parse(statement); // will be a Query object

query.getSQL(); // select artist.name, count(*) as num_artists from artist
query.getJSON(); // a JSON representation of the query object

// some data

query.getAliases(); // ['name', 'num_artists']
query.getFieldAliases(); // ['name']
query.getFieldInfo(); // { 'name' : 'artist.name' }
```

#### SQL Options

Table constraints: (in progress)

```js
// given the previous AQL statement and query object

var options = {
    constraints: ['active', 1] // field, val
};

query.getSQL(options);
// select artist.name, count(*) as num_artists from artist where artist.active = 1

// with joins
var statement = '\
    artist {\
        name\
    }\
    label on artist.id = artist_id {\
        name as label_name\
    }\
';

aql.parse(statement).getSQL(options);
// select artist.name, label.name as label_name
// from artist
// left join label on artist.id = label.artist_id and label.active = 1
// where artist.active = 1
```

### Other Uses:

I'll get here eventually :)

## Buildling the Parser

##### In the root project directory:

This will generate `src/parser.js` and report any conflicts

```
npm run-script gen-parser
```

This will generate the parser and run the tests.

*Note:* This overrides the current parser, so when changing the grammar,
do this in another branch.

```
npm run-script build-test
```
