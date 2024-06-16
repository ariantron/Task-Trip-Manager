<?php

namespace App\Repository;

use App\Class\Query;
use App\RepositoryInterface\BaseRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Persistence\ManagerRegistry;
use Psr\Log\LoggerInterface;

abstract class BaseRepository extends ServiceEntityRepository implements BaseRepositoryInterface
{
    protected string $entityClass;
    protected LoggerInterface $logger;

    public function __construct(ManagerRegistry $registry, string $entityClass, LoggerInterface $logger)
    {
        $this->entityClass = $entityClass;
        $this->logger = $logger;
        parent::__construct($registry, $entityClass);
    }

    public function findOneByQuery(array $query = []): ?object
    {
        return $this->applyCriteria($this->createQueryBuilder('e'), $query)->getQuery()->getOneOrNullResult();
    }

    private function applyCriteria(QueryBuilder $qb, array $criteria): ?QueryBuilder
    {
        foreach ($criteria as $key => $operatorValue) {
            foreach ($operatorValue as $operator => $value) {
                $queryOperator = Query::operator($operator);
                if (!is_null($operator)) {
                    $parameter = "{$key}_{$operator}";
                    $expression = "e.$key $queryOperator :$parameter";
                    $value = $operator === 'LIKE' ? "%$value%" : $value;
                    $qb->andWhere($expression)->setParameter($parameter, $value);
                }
            }
        }
        return $qb;
    }

    public function findByQuery(array $query = []): array
    {
        return $this->applyCriteria($this->createQueryBuilder('e'), $query)->getQuery()->getResult();
    }
}
