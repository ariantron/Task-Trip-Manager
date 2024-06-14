<?php

namespace App\RepositoryInterface;

interface BaseRepositoryInterface
{
    public function findOneByQuery(array $query = []): ?object;

    public function findByQuery(array $query = []): mixed;
}
