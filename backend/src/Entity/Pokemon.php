<?php
namespace App\Entity;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
/**
 * @ApiResource(normalizationContext={"groups"={"pokemon_read"}})
 * @ORM\Table(name="pokemon")
 * @ORM\Entity()
 */
class Pokemon
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"pokemon_read"})
     */
    private $id;
    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Groups({"pokemon_read"})
     * @Assert\NotNull
     */
    private $name;
    /**
     * @ORM\Column(type="integer")
     * @Groups({"pokemon_read"})
     * @Assert\NotNull
     * @Assert\GreaterThan(0)
     */
    private $weight;
    /**
     * @ORM\Column(type="integer")
     * @Groups({"pokemon_read"})
     * @Assert\NotNull
     * @Assert\GreaterThan(0)
     */
    private $height;
    /**
     * @ORM\ManyToMany(targetEntity="Ability")
     * @Groups({"pokemon_read"})
     *
     * @var ArrayCollection $abilities
     */
    private $abilities;
    public function __construct()
    {
        $this->abilities = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * @param mixed $name
     */
    public function setName($name): void
    {
        $this->name = $name;
    }
    /**
     * @return mixed
     */
    public function getHeight()
    {
        return $this->height;
    }
    /**
     * @param mixed $height
     */
    public function setHeight($height): void
    {
        $this->height = $height;
    }
    /**
     * @return mixed
     */
    public function getWeight()
    {
        return $this->weight;
    }
    /**
     * @param mixed $weight
     */
    public function setWeight($weight): void
    {
        $this->weight = $weight;
    }
    public function getAbilities()
    {
        return $this->abilities;
    }
    public function setAbilities($abilities)
    {
        $this->abilities = $abilities;
    }
}