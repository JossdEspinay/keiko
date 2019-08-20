<?php
namespace App\Controller;
use App\Entity\Pokemon;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;

class PokemonController
{
    private $normalizer;

    public function __construct()
    {
        $this->normalizer = new ObjectNormalizer();
    }

    /**
     * @Route("/pokemon", methods={"GET"})
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function get(): JsonResponse
    {
        $pokemon = new Pokemon();
        $pokemon->setHeight('12');
        $pokemon->setWeight('34');
        $pokemon->setName('dedo');

        $pokemonSerialized = $this->normalizer->normalize($pokemon, 'json');
        return new JsonResponse($pokemonSerialized);
    }

    /**
     * @Route("/pokemon", methods={"POST"})
     * @return Response
     */
    public function create(): Response
    {
        return new Response('Hello World test');
    }
}