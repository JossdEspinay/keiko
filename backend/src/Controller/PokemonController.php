<?php
namespace App\Controller;
use App\Entity\Pokemon;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use App\Service\PokemonService;

/**
 * @Route("/pokemon")
 */
class PokemonController
{
    /**
     * @var NormalizerInterface
     */
    private $normalizer;
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;
    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var ValidatorInterface
     */
    private $validator;
    /**
     * @var PokemonService
     */
    private $pokemonService;

    /**
     * @param NormalizerInterface $normalizer
     * @param EntityManagerInterface $entityManager
     * @param SerializerInterface $serializer
     * @param ValidatorInterface $validator
     * @param PokemonService $pokemonService
     */
    public function __construct(
        NormalizerInterface $normalizer,
        EntityManagerInterface $entityManager,
        SerializerInterface $serializer,
        ValidatorInterface $validator,
        PokemonService $pokemonService
    ) {
        $this->normalizer = $normalizer;
        $this->entityManager = $entityManager;
        $this->serializer = $serializer;
        $this->validator = $validator;
        $this->pokemonService = $pokemonService;
    }

    /**
     * @Route("", methods={"GET"})
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function get(): JsonResponse
    {
        $pokemonRepository = $this->entityManager->getRepository(Pokemon::class);
        $pokemons = $pokemonRepository->findAll();
        $response = $this->normalizer->normalize($pokemons, 'json');
        return new JsonResponse($response);
    }

    /**
     * @Route("/{pokemonId}", methods={"GET"})
     * @param $pokemonId
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function findOneById($pokemonId): JsonResponse
    {
        $pokemonRepository = $this->entityManager->getRepository(Pokemon::class);
        $pokemon = $pokemonRepository->findOneBy([
            'id' => $pokemonId,
        ]);
        $response = $this->normalizer->normalize($pokemon, 'json');
        return new JsonResponse($response);
    }


    /**
     * @Route("", methods={"POST"})
     *
     * @param Request $request
     *
     * @return JsonResponse
     * @throws ExceptionInterface
     */
    public function create(Request $request): JsonResponse
    {
        $pokemon = $this->serializer->deserialize($request->getContent(), Pokemon::class, 'json');
        $createdPokemon = $this->pokemonService->create($pokemon);
        $response = $this->normalizer->normalize($createdPokemon, 'json');
        return new JsonResponse($response);
    }

}