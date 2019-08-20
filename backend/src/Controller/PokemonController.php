<?php
namespace App\Controller;
use App\Entity\Pokemon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class PokemonController
{
    /**
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function helloWorld(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setHeight('12');
        $pokemon->setWeight('34');
        $pokemon->setName('dede');

        $normalizer = new ObjectNormalizer();
        $pokemonSerialized = $normalizer->normalize($pokemon, 'json');
        return new JsonResponse($pokemonSerialized);
    }
}