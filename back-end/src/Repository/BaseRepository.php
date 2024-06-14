<?php

namespace App\Repository;

use App\RepositoryInterface\BaseRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;

abstract class BaseRepository extends ServiceEntityRepository implements BaseRepositoryInterface
{
    protected string $entityClass;

    public function __construct(ManagerRegistry $registry, string $entityClass)
    {
        $this->entityClass = $entityClass;
        parent::__construct($registry, $entityClass);
    }

    public function findOneByQuery(array $query = []): ?object
    {
        return $this->applyCriteria($this->createQueryBuilder('e'), $query)->getQuery()->getOneOrNullResult();
    }

    private function applyCriteria(QueryBuilder $qb, array $criteria): QueryBuilder
    {
        foreach ($criteria as $key => $operatorValue) {
            foreach ($operatorValue as $operator => $value) {
                $parameter = "{$key}_{$operator}";
                $expression = "e.$key $operator :$parameter";
                $value = $operator === 'like' ? "%$value%" : $value;
                $qb->andWhere($expression)->setParameter($parameter, $value);
            }
        }
        return $qb;
    }

    public function findByQuery(array $query = []): array
    {
        return $this->applyCriteria($this->createQueryBuilder('e'), $query)->getQuery()->getResult();
    }
}
