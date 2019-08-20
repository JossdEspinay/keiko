<?php
namespace App\Controller;
use App\Entity\Pokemon;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Doctrine\ORM\EntityManagerInterface;

class PokemonController
{
    /**
     * @param NormalizerInterface $normalizer
     * @var EntityManagerInterface
     */
    private $normalizer;
    private $entityManager;
    /**
     * @param NormalizerInterface    $normalizer
     * @param EntityManagerInterface $entityManager
     */
    public function __construct(NormalizerInterface $normalizer, EntityManagerInterface $entityManager) {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
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