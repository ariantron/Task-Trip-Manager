<?php

namespace App\DataFixtures;

use App\Entity\Driver;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class DriverFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        for ($i = 0; $i < 10; $i++) {
            $driver = new Driver();
            $driver->setName($faker->firstName . ' ' . $faker->lastName);

            $manager->persist($driver);
        }

        $manager->flush();
    }
}
