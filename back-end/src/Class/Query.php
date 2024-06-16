<?php

namespace App\Class;

class Query
{
    /**
     * Returns the SQL operator corresponding to the given name.
     *
     * @param string $name The name of the operator.
     * @return string|null The SQL operator or null if the name is not recognized.
     */
    public static function operator(string $name): ?string
    {
        return match ($name) {
            // EQUAL: =
            'eq' => '=',
            // GREATER THAN OR EQUAL: >=
            'gte' => '>=',
            // LESS THAN OR EQUAL: <=
            'lte' => '<=',
            // GREATER THAN: >
            'gt' => '>',
            // LESS THAN: <
            'lt' => '<',
            // NOT EQUAL: <>
            'ne' => '<>',
            // LIKE: SQL LIKE Operator
            'like' => 'LIKE',
            // LIKE: SQL NOT LIKE Operator
            'not_like' => 'NOT LIKE',
            // Default Case: Return null if the name is not recognized
            default => null
        };
    }
}
