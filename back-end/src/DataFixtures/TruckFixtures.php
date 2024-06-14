<?php

namespace App\DataFixtures;

use App\Entity\Truck;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TruckFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $truck = new Truck();
            $truck->setLicensePlate($faker->unique()->bothify('??###??'));

            $manager->persist($truck);
        }

        $manager->flush();
    }
}
