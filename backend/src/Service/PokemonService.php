<?php
namespace App\Service;

use App\Entity\Ability;
use App\Entity\Pokemon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Validator\Validator\ValidatorInterface;


class PokemonService
{
    /**
     *@var ValidatorInterface $validator
     */
    private $validator;
    /**
     * @var EntityManagerInterface $entityManager
     */
    private $entityManager;

    /**
     * @param ValidatorInterface $validator
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(ValidatorInterface $validator, EntityManagerInterface $entityManager){
        $this->entityManager = $entityManager;
        $this->validator = $validator;
    }

    /**
     * @param Pokemon $pokemon
     * @return Pokemon
     */
    public function create(Pokemon$pokemon): Pokemon{

        if (count($pokemon->getAbilities()) === 0){
            $abilityRepository = $this->entityManager->getRepository(Ability::class);
            $abilitiesNumber = count($abilityRepository->findAll());
            $randomAbility = $abilityRepository->findBy(['id' => rand(1, $abilitiesNumber)]);
            $pokemon->setAbilities($randomAbility);
        }
        $errors = $this->validator->validate($pokemon);
        if (count($errors) !== 0 ) {
            throw new BadRequestHttpException($errors);
        }

        $this->entityManager->persist($pokemon);
        $this->entityManager->flush();
        return $pokemon;
    }

}