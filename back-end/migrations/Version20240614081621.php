<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240614081621 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE drivers (id UUID NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN drivers.id IS \'(DC2Type:ulid)\'');
        $this->addSql('CREATE TABLE tasks (id UUID NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, title VARCHAR(255) NOT NULL, description TEXT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN tasks.id IS \'(DC2Type:ulid)\'');
        $this->addSql('CREATE TABLE trip_tasks (id UUID NOT NULL, trip_id UUID NOT NULL, task_id UUID NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_8A13E5D4A5BC2E0E ON trip_tasks (trip_id)');
        $this->addSql('CREATE INDEX IDX_8A13E5D48DB60186 ON trip_tasks (task_id)');
        $this->addSql('COMMENT ON COLUMN trip_tasks.id IS \'(DC2Type:ulid)\'');
        $this->addSql('COMMENT ON COLUMN trip_tasks.trip_id IS \'(DC2Type:ulid)\'');
        $this->addSql('COMMENT ON COLUMN trip_tasks.task_id IS \'(DC2Type:ulid)\'');
        $this->addSql('CREATE TABLE trips (id UUID NOT NULL, driver_id UUID NOT NULL, truck_id UUID NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_AA7370DAC3423909 ON trips (driver_id)');
        $this->addSql('CREATE INDEX IDX_AA7370DAC6957CCE ON trips (truck_id)');
        $this->addSql('COMMENT ON COLUMN trips.id IS \'(DC2Type:ulid)\'');
        $this->addSql('COMMENT ON COLUMN trips.driver_id IS \'(DC2Type:ulid)\'');
        $this->addSql('COMMENT ON COLUMN trips.truck_id IS \'(DC2Type:ulid)\'');
        $this->addSql('CREATE TABLE trucks (id UUID NOT NULL, created_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, updated_at TIMESTAMP(0) WITHOUT TIME ZONE NOT NULL, license_plate VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('COMMENT ON COLUMN trucks.id IS \'(DC2Type:ulid)\'');
        $this->addSql('ALTER TABLE trip_tasks ADD CONSTRAINT FK_8A13E5D4A5BC2E0E FOREIGN KEY (trip_id) REFERENCES trips (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE trip_tasks ADD CONSTRAINT FK_8A13E5D48DB60186 FOREIGN KEY (task_id) REFERENCES tasks (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE trips ADD CONSTRAINT FK_AA7370DAC3423909 FOREIGN KEY (driver_id) REFERENCES drivers (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE trips ADD CONSTRAINT FK_AA7370DAC6957CCE FOREIGN KEY (truck_id) REFERENCES trucks (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE trip_tasks DROP CONSTRAINT FK_8A13E5D4A5BC2E0E');
        $this->addSql('ALTER TABLE trip_tasks DROP CONSTRAINT FK_8A13E5D48DB60186');
        $this->addSql('ALTER TABLE trips DROP CONSTRAINT FK_AA7370DAC3423909');
        $this->addSql('ALTER TABLE trips DROP CONSTRAINT FK_AA7370DAC6957CCE');
        $this->addSql('DROP TABLE drivers');
        $this->addSql('DROP TABLE tasks');
        $this->addSql('DROP TABLE trip_tasks');
        $this->addSql('DROP TABLE trips');
        $this->addSql('DROP TABLE trucks');
    }
}
