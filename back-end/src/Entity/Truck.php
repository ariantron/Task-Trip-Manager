<?php

namespace App\Entity;

use App\Repository\TruckRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TruckRepository::class)]
#[ORM\Table(name: "trucks")]
class Truck extends Base
{
    #[ORM\Column(name: 'license_plate', type: 'string', length: 50)]
    private $licensePlate;

    /**
     * @return mixed
     */
    public function getLicensePlate(): string
    {
        return $this->licensePlate;
    }

    /**
     * @param mixed $licensePlate
     */
    public function setLicensePlate(string $licensePlate): void
    {
        $this->licensePlate = $licensePlate;
    }
}
