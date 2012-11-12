# AQL Parser

*Abbreviated Query Language* for genearting data models (possibly for an ORM)
and making writing select queries easier.

[![Build Status](https://secure.travis-ci.org/stanistan/aql-parser-js.png?branch=master)](https://travis-ci.org/stanistan/aql-parser-js)

(Using [jison](https://github.com/zaach/jison) as a parser generator.)

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

->>

select
    artist.name,
    label.name as label_name
from artist
left join label on artist.id = label.artist_id
where artist.name ilike 'pink %'
order by label.name
```

see `sqlSpec` in tests for more usage.

## JS Usage

(working on it)

```
