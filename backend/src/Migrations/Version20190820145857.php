<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190820145857 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE pokemon_ability DROP CONSTRAINT FK_59A592AD2FE71C3E');
        $this->addSql('ALTER TABLE pokemon_ability DROP CONSTRAINT FK_59A592AD8016D8B2');
        $this->addSql('ALTER TABLE pokemon_ability ADD CONSTRAINT FK_59A592AD2FE71C3E FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE pokemon_ability ADD CONSTRAINT FK_59A592AD8016D8B2 FOREIGN KEY (ability_id) REFERENCES ability (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('DROP INDEX uniq_35cfee3c5e237e06');
        $this->addSql('ALTER TABLE ability ALTER name TYPE VARCHAR(255)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE ability ALTER name TYPE VARCHAR(180)');
        $this->addSql('CREATE UNIQUE INDEX uniq_35cfee3c5e237e06 ON ability (name)');
        $this->addSql('ALTER TABLE pokemon_ability DROP CONSTRAINT fk_59a592ad2fe71c3e');
        $this->addSql('ALTER TABLE pokemon_ability DROP CONSTRAINT fk_59a592ad8016d8b2');
        $this->addSql('ALTER TABLE pokemon_ability ADD CONSTRAINT fk_59a592ad2fe71c3e FOREIGN KEY (pokemon_id) REFERENCES pokemon (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE pokemon_ability ADD CONSTRAINT fk_59a592ad8016d8b2 FOREIGN KEY (ability_id) REFERENCES ability (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }
}
