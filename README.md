# AQL Parser

Using [jison](https://github.com/zaach/jison) as a parser generator.

### AQL Syntax

The basics, will expand on this soon.

```
table {

    field1,
    field2,
    field3,

    [one_to_one],
    [one_to_many]s,

    postquery {
        field0
    }
    a_join_on_postquery {
        field1
    },
    second_postquery {
        field2
    }

    where field1 = 1
}
some_join as aliased on table.some_join_id = aliased.id {
    *
}
```
### Testing

###### From git root dir:

```bash
lib/test
```

This runs `test/start.js`. Eventually, there will be unit tests using `jasmine`, but
the structure of the output isn't finalized yet.
