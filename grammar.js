module.exports = grammar({
    name: 'coffee',
    rules: {
        source_file: $ => repeat($._statement),

        _statement: $ => choice(
            "\n",
            $._function
        ),

        _function: $ => seq(
            $._type,
            $._WORD,
            "(",
            // optional($._fn_params),
            ")",
            $._block
        ),

        _type: $ => choice(
            $._basic_type
        ),
        _basic_type: $ => choice(
            "void",
            "int",
            "bool",
            "chr",
            "str",
        ),

        _block: $ => seq( 
            "{", 
            "\n", 
            // $._expressions,
            "}"
        ),

        _expressions: $ => repeat(
            $._expression
        ),

        _expression: $ => choice(
            $._assignment
        ),

        _assignment: $ => seq(
            $._destination,
            "=",
            $._assignable,
        ),

        _destination: 


        _WORD: $ => /[a-zA-Z_][a-zA-Z_0-9]+/,
    }
})
