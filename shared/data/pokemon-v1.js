const pokemonData = [
  {
    "_id": "557a723880a20c9db3bc31c2",
    "pkdx_id": 1,
    "national_id": 1,
    "name": "Bulbasaur",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/1.png",
    "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.  Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Ivysaur",
        "_id": "557a723880a20c9db3bc31c3"
      }
    ]
  },
  {
    "_id": "557a723980a20c9db3bc31e3",
    "pkdx_id": 2,
    "national_id": 2,
    "name": "Ivysaur",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/2.png",
    "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.  There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Venusaur",
        "_id": "557a723980a20c9db3bc31e4"
      }
    ]
  },
  {
    "_id": "557a723880a20c9db3bc31cc",
    "pkdx_id": 3,
    "national_id": 3,
    "name": "Venusaur",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/3.png",
    "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.  There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Venusaur-mega",
        "_id": "557a723880a20c9db3bc31cd"
      }
    ]
  },
  {
    "_id": "557a723880a20c9db3bc31c8",
    "pkdx_id": 4,
    "national_id": 4,
    "name": "Charmander",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/4.png",
    "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Charmeleon",
        "_id": "557a723880a20c9db3bc31c9"
      }
    ]
  },
  {
    "_id": "557a723980a20c9db3bc31e8",
    "pkdx_id": 5,
    "national_id": 5,
    "name": "Charmeleon",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/5.png",
    "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.  Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Charizard",
        "_id": "557a723980a20c9db3bc31e9"
      }
    ]
  },
  {
    "_id": "557a723880a20c9db3bc31d1",
    "pkdx_id": 6,
    "national_id": 6,
    "name": "Charizard",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/6.png",
    "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.  Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "types": [
      "flying",
      "fire"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Charizard-mega-y",
        "_id": "557a723880a20c9db3bc31d3"
      },
      {
        "method": "other",
        "to": "Charizard-mega-x",
        "_id": "557a723880a20c9db3bc31d2"
      }
    ]
  },
  {
    "_id": "557a723980a20c9db3bc31d7",
    "pkdx_id": 7,
    "national_id": 7,
    "name": "Squirtle",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/7.png",
    "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.  Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Wartortle",
        "_id": "557a723980a20c9db3bc31d8"
      }
    ]
  },
  {
    "_id": "557a723980a20c9db3bc31df",
    "pkdx_id": 8,
    "national_id": 8,
    "name": "Wartortle",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/8.png",
    "description": "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.  Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Blastoise",
        "_id": "557a723980a20c9db3bc31e0"
      }
    ]
  },
  {
    "_id": "557a723980a20c9db3bc31db",
    "pkdx_id": 9,
    "national_id": 9,
    "name": "Blastoise",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/9.png",
    "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.  Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Blastoise-mega",
        "_id": "557a723980a20c9db3bc31dc"
      }
    ]
  },
  {
    "_id": "557a72aa7276d341b41edda6",
    "pkdx_id": 10,
    "national_id": 10,
    "name": "Caterpie",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/10.png",
    "description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.  Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 7,
        "method": "level_up",
        "to": "Metapod",
        "_id": "557a72aa7276d341b41edda7"
      }
    ]
  },
  {
    "_id": "557a72ad7276d341b41eddfa",
    "pkdx_id": 11,
    "national_id": 11,
    "name": "Metapod",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/11.png",
    "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.  The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 10,
        "method": "level_up",
        "to": "Butterfree",
        "_id": "557a72ad7276d341b41eddfb"
      }
    ]
  },
  {
    "_id": "557a72aa7276d341b41eddbf",
    "pkdx_id": 12,
    "national_id": 12,
    "name": "Butterfree",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/12.png",
    "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.  Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72a97276d341b41edd99",
    "pkdx_id": 13,
    "national_id": 13,
    "name": "Weedle",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/13.png",
    "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).  Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose).",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/013.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 7,
        "method": "level_up",
        "to": "Kakuna",
        "_id": "557a72a97276d341b41edd9a"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41edde8",
    "pkdx_id": 14,
    "national_id": 14,
    "name": "Kakuna",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/14.png",
    "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.  Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/014.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 10,
        "method": "level_up",
        "to": "Beedrill",
        "_id": "557a72ac7276d341b41edde9"
      }
    ]
  },
  {
    "_id": "557a72a97276d341b41edd9e",
    "pkdx_id": 15,
    "national_id": 15,
    "name": "Beedrill",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/15.png",
    "description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.  Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72a97276d341b41edd91",
    "pkdx_id": 16,
    "national_id": 16,
    "name": "Pidgey",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/16.png",
    "description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.  Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/016.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Pidgeotto",
        "_id": "557a72a97276d341b41edd92"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41edded",
    "pkdx_id": 17,
    "national_id": 17,
    "name": "Pidgeotto",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/17.png",
    "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.  Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/017.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Pidgeot",
        "_id": "557a72ac7276d341b41eddee"
      }
    ]
  },
  {
    "_id": "557a72aa7276d341b41eddaa",
    "pkdx_id": 18,
    "national_id": 18,
    "name": "Pidgeot",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/18.png",
    "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.  This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/018.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ab7276d341b41eddc9",
    "pkdx_id": 19,
    "national_id": 19,
    "name": "Rattata",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/19.png",
    "description": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.  Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/019.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Raticate",
        "_id": "557a72ab7276d341b41eddca"
      }
    ]
  },
  {
    "_id": "557a72a97276d341b41edd96",
    "pkdx_id": 20,
    "national_id": 20,
    "name": "Raticate",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/20.png",
    "description": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.  Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/020.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72aa7276d341b41eddba",
    "pkdx_id": 21,
    "national_id": 21,
    "name": "Spearow",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/21.png",
    "description": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.  Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/021.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Fearow",
        "_id": "557a72aa7276d341b41eddbb"
      }
    ]
  },
  {
    "_id": "557a72aa7276d341b41eddae",
    "pkdx_id": 22,
    "national_id": 22,
    "name": "Fearow",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/22.png",
    "description": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.  Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/022.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72aa7276d341b41eddb6",
    "pkdx_id": 23,
    "national_id": 23,
    "name": "Ekans",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/23.png",
    "description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.  Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/023.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Arbok",
        "_id": "557a72aa7276d341b41eddb7"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41edddc",
    "pkdx_id": 24,
    "national_id": 24,
    "name": "Arbok",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/24.png",
    "description": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.  This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/024.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72a97276d341b41edda2",
    "pkdx_id": 25,
    "national_id": 25,
    "name": "Pikachu",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/25.png",
    "description": "This Pokémon has electricity-storing pouches on its cheeks. These appear to become electrically charged during the night while Pikachu sleeps. It occasionally discharges electricity when it is dozy after waking up.  Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Raichu",
        "_id": "557a72a97276d341b41edda3"
      }
    ]
  },
  {
    "_id": "557a72ab7276d341b41eddc6",
    "pkdx_id": 26,
    "national_id": 26,
    "name": "Raichu",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/26.png",
    "description": "This Pokémon exudes a weak electrical charge from all over its body that makes it take on a slight glow in darkness. Raichu plants its tail in the ground to discharge electricity.  If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ac7276d341b41eddf2",
    "pkdx_id": 27,
    "national_id": 27,
    "name": "Sandshrew",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/27.png",
    "description": "Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep.  Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/027.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Sandslash",
        "_id": "557a72ac7276d341b41eddf3"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41edde5",
    "pkdx_id": 28,
    "national_id": 28,
    "name": "Sandslash",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/28.png",
    "description": "Sandslash can roll up its body as if it were a ball covered with large spikes. In battle, this Pokémon will try to make the foe flinch by jabbing it with its spines. It then leaps at the stunned foe to tear wildly with its sharp claws.  Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/028.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ac7276d341b41eddd8",
    "pkdx_id": 29,
    "national_id": 29,
    "name": "Nidoran-f",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/29.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/029.png",
    "description": "Nidoran has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Nidorina",
        "_id": "557a72ac7276d341b41eddd9"
      }
    ]
  },
  {
    "_id": "557a72d07276d341b41ee1f0",
    "pkdx_id": 30,
    "national_id": 30,
    "name": "Nidorina",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/30.png",
    "description": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.  When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/030.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Nidoqueen",
        "_id": "557a72d07276d341b41ee1f1"
      }
    ]
  },
  {
    "_id": "557a72aa7276d341b41eddb2",
    "pkdx_id": 31,
    "national_id": 31,
    "name": "Nidoqueen",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/31.png",
    "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.  Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/031.png",
    "types": [
      "poison",
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ad7276d341b41eddfe",
    "pkdx_id": 32,
    "national_id": 32,
    "name": "Nidoran-m",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/32.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/032.png",
    "description": "Nidoran has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Nidorino",
        "_id": "557a72ad7276d341b41eddff"
      }
    ]
  },
  {
    "_id": "557a72ad7276d341b41ede12",
    "pkdx_id": 33,
    "national_id": 33,
    "name": "Nidorino",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/33.png",
    "description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.  Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/033.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Nidoking",
        "_id": "557a72ad7276d341b41ede13"
      }
    ]
  },
  {
    "_id": "557a72ab7276d341b41eddcd",
    "pkdx_id": 34,
    "national_id": 34,
    "name": "Nidoking",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/34.png",
    "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.  Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/034.png",
    "types": [
      "poison",
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ab7276d341b41eddd4",
    "pkdx_id": 35,
    "national_id": 35,
    "name": "Clefairy",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/35.png",
    "description": "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.  On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/035.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Clefable",
        "_id": "557a72ab7276d341b41eddd5"
      }
    ]
  },
  {
    "_id": "557a72ab7276d341b41eddd1",
    "pkdx_id": 36,
    "national_id": 36,
    "name": "Clefable",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/36.png",
    "description": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.  Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/036.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ae7276d341b41ede2d",
    "pkdx_id": 37,
    "national_id": 37,
    "name": "Vulpix",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/37.png",
    "description": "Inside Vulpix's body burns a flame that never goes out. During the daytime, when the temperatures rise, this Pokémon releases flames from its mouth to prevent its body from growing too hot.  At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/037.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Ninetales",
        "_id": "557a72ae7276d341b41ede2e"
      }
    ]
  },
  {
    "_id": "557a72ab7276d341b41eddc3",
    "pkdx_id": 38,
    "national_id": 38,
    "name": "Ninetales",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/38.png",
    "description": "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand human speech.  Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/038.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b07276d341b41ede4b",
    "pkdx_id": 39,
    "national_id": 39,
    "name": "Jigglypuff",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/39.png",
    "description": "When this Pokémon sings, it never pauses to breathe. If it is in a battle against an opponent that does not easily fall asleep, Jigglypuff cannot breathe, endangering its life.  Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/039.png",
    "types": [
      "normal",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Wigglytuff",
        "_id": "557a72b07276d341b41ede4c"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41eddf6",
    "pkdx_id": 40,
    "national_id": 40,
    "name": "Wigglytuff",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/40.png",
    "description": "Wigglytuff's body is very flexible. By inhaling deeply, this Pokémon can inflate itself seemingly without end. Once inflated, Wigglytuff bounces along lightly like a balloon.  Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/040.png",
    "types": [
      "normal",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b27276d341b41ede82",
    "pkdx_id": 41,
    "national_id": 41,
    "name": "Zubat",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/41.png",
    "description": "Zubat avoids sunlight because exposure causes it to become unhealthy. During the daytime, it stays in caves or under the eaves of old houses, sleeping while hanging upside down.  Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/041.png",
    "types": [
      "flying",
      "poison"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Golbat",
        "_id": "557a72b27276d341b41ede83"
      }
    ]
  },
  {
    "_id": "557a72ae7276d341b41ede28",
    "pkdx_id": 42,
    "national_id": 42,
    "name": "Golbat",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/42.png",
    "description": "Golbat bites down on prey with its four fangs and drinks the victim's blood. It becomes active on inky dark moonless nights, flying around to attack people and Pokémon.  Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/042.png",
    "types": [
      "flying",
      "poison"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Crobat",
        "_id": "557a72ae7276d341b41ede29"
      }
    ]
  },
  {
    "_id": "557a72ad7276d341b41ede16",
    "pkdx_id": 43,
    "national_id": 43,
    "name": "Oddish",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/43.png",
    "description": "Oddish searches for fertile, nutrient-rich soil, then plants itself. During the daytime, while it is planted, this Pokémon's feet are thought to change shape and become similar to the roots of trees.  During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/043.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "level": 21,
        "method": "level_up",
        "to": "Gloom",
        "_id": "557a72ad7276d341b41ede17"
      }
    ]
  },
  {
    "_id": "557a72ac7276d341b41edddf",
    "pkdx_id": 44,
    "national_id": 44,
    "name": "Gloom",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/44.png",
    "description": "From its mouth Gloom drips honey that smells absolutely horrible. Apparently, it loves the horrid stench. It sniffs the noxious fumes and then drools even more of its honey.  Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/044.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Bellossom",
        "_id": "557a72ac7276d341b41edde1"
      },
      {
        "method": "stone",
        "to": "Vileplume",
        "_id": "557a72ac7276d341b41edde0"
      }
    ]
  },
  {
    "_id": "557a72ad7276d341b41ede02",
    "pkdx_id": 45,
    "national_id": 45,
    "name": "Vileplume",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/45.png",
    "description": "Vileplume has the world's largest petals. They are used to attract prey that are then doused with toxic spores. Once the prey are immobilized, this Pokémon catches and devours them.  Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/045.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ae7276d341b41ede23",
    "pkdx_id": 46,
    "national_id": 46,
    "name": "Paras",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/46.png",
    "description": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.  Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/046.png",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": [
      {
        "level": 24,
        "method": "level_up",
        "to": "Parasect",
        "_id": "557a72ae7276d341b41ede24"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede44",
    "pkdx_id": 47,
    "national_id": 47,
    "name": "Parasect",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/47.png",
    "description": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.  Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/047.png",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ad7276d341b41ede06",
    "pkdx_id": 48,
    "national_id": 48,
    "name": "Venonat",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/48.png",
    "description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.  Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/048.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 31,
        "method": "level_up",
        "to": "Venomoth",
        "_id": "557a72ad7276d341b41ede07"
      }
    ]
  },
  {
    "_id": "557a72b07276d341b41ede5b",
    "pkdx_id": 49,
    "national_id": 49,
    "name": "Venomoth",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/49.png",
    "description": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.  Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/049.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ad7276d341b41ede0e",
    "pkdx_id": 50,
    "national_id": 50,
    "name": "Diglett",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/50.png",
    "description": "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.  Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/050.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 26,
        "method": "level_up",
        "to": "Dugtrio",
        "_id": "557a72ad7276d341b41ede0f"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede48",
    "pkdx_id": 51,
    "national_id": 51,
    "name": "Dugtrio",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/51.png",
    "description": "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.  Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/051.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ae7276d341b41ede31",
    "pkdx_id": 52,
    "national_id": 52,
    "name": "Meowth",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/52.png",
    "description": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.  Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/052.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Persian",
        "_id": "557a72ae7276d341b41ede32"
      }
    ]
  },
  {
    "_id": "557a72b07276d341b41ede5f",
    "pkdx_id": 53,
    "national_id": 53,
    "name": "Persian",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/53.png",
    "description": "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.  Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/053.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b07276d341b41ede57",
    "pkdx_id": 54,
    "national_id": 54,
    "name": "Psyduck",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/54.png",
    "description": "If it uses its mysterious power, Psyduck can't remember having done so. It apparently can't form a memory of such an event because it goes into an altered state that is much like deep sleep.  Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/054.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 33,
        "method": "level_up",
        "to": "Golduck",
        "_id": "557a72b07276d341b41ede58"
      }
    ]
  },
  {
    "_id": "557a72ad7276d341b41ede0b",
    "pkdx_id": 55,
    "national_id": 55,
    "name": "Golduck",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/55.png",
    "description": "Golduck is the fastest swimmer among all Pokémon. It swims effortlessly, even in a rough, stormy sea. It sometimes rescues people from wrecked ships floundering in high seas.  The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/055.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d17276d341b41ee20a",
    "pkdx_id": 56,
    "national_id": 56,
    "name": "Mankey",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/56.png",
    "description": "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.  When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/056.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Primeape",
        "_id": "557a72d17276d341b41ee20b"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede3d",
    "pkdx_id": 57,
    "national_id": 57,
    "name": "Primeape",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/57.png",
    "description": "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.  When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/057.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ae7276d341b41ede1b",
    "pkdx_id": 58,
    "national_id": 58,
    "name": "Growlithe",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/58.png",
    "description": "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.  Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/058.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Arcanine",
        "_id": "557a72ae7276d341b41ede1c"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede3a",
    "pkdx_id": 59,
    "national_id": 59,
    "name": "Arcanine",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/59.png",
    "description": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.  Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/059.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ae7276d341b41ede1f",
    "pkdx_id": 60,
    "national_id": 60,
    "name": "Poliwag",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/60.png",
    "description": "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.  Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/060.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Poliwhirl",
        "_id": "557a72ae7276d341b41ede20"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede35",
    "pkdx_id": 61,
    "national_id": 61,
    "name": "Poliwhirl",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/61.png",
    "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.  The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/061.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Politoed",
        "_id": "557a72af7276d341b41ede37"
      },
      {
        "method": "stone",
        "to": "Poliwrath",
        "_id": "557a72af7276d341b41ede36"
      }
    ]
  },
  {
    "_id": "557a72d17276d341b41ee201",
    "pkdx_id": 62,
    "national_id": 62,
    "name": "Poliwrath",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/62.png",
    "description": "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.  Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/062.png",
    "types": [
      "fighting",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d17276d341b41ee212",
    "pkdx_id": 63,
    "national_id": 63,
    "name": "Abra",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/63.png",
    "description": "Abra needs to sleep for eighteen hours a day. If it doesn't, this Pokémon loses its ability to use telekinetic powers. If it is attacked, Abra escapes using Teleport while it is still sleeping.  Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/063.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Kadabra",
        "_id": "557a72d17276d341b41ee213"
      }
    ]
  },
  {
    "_id": "557a72cf7276d341b41ee1bf",
    "pkdx_id": 64,
    "national_id": 64,
    "name": "Kadabra",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/64.png",
    "description": "Kadabra holds a silver spoon in its hand. The spoon is used to amplify the alpha waves in its brain. Without the spoon, the Pokémon is said to be limited to half the usual amount of its telekinetic powers.  Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/064.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Alakazam",
        "_id": "557a72cf7276d341b41ee1c0"
      }
    ]
  },
  {
    "_id": "557a72d07276d341b41ee1de",
    "pkdx_id": 65,
    "national_id": 65,
    "name": "Alakazam",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/65.png",
    "description": "Alakazam's brain continually grows, infinitely multiplying brain cells. This amazing brain gives this Pokémon an astoundingly high IQ of 5,000. It has a thorough memory of everything that has occurred in the world.  Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/065.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Alakazam-mega",
        "_id": "557a72d07276d341b41ee1df"
      }
    ]
  },
  {
    "_id": "557a72d07276d341b41ee1f9",
    "pkdx_id": 66,
    "national_id": 66,
    "name": "Machop",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/66.png",
    "description": "Machop exercises by hefting around a Graveler as if it were a barbell. There are some Machop that travel the world in a quest to master all kinds of martial arts.  Machop's muscles are special—they never get sore no matter how much they are used in exercise. This Pokémon has sufficient power to hurl a hundred adult humans.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/066.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Machoke",
        "_id": "557a72d07276d341b41ee1fa"
      }
    ]
  },
  {
    "_id": "557a72b07276d341b41ede50",
    "pkdx_id": 67,
    "national_id": 67,
    "name": "Machoke",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/67.png",
    "description": "Machoke undertakes bodybuilding every day even as it helps people with tough, physically demanding labor. On its days off, this Pokémon heads to the fields and mountains to exercise and train.  Machoke's thoroughly toned muscles possess the hardness of steel. This Pokémon has so much strength, it can easily hold aloft a sumo wrestler on just one finger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/067.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Machamp",
        "_id": "557a72b07276d341b41ede51"
      }
    ]
  },
  {
    "_id": "557a72b07276d341b41ede54",
    "pkdx_id": 68,
    "national_id": 68,
    "name": "Machamp",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/68.png",
    "description": "Machamp is known as the Pokémon that has mastered every kind of martial arts. If it grabs hold of the foe with its four arms, the battle is all but over. The hapless foe is thrown far over the horizon.  Machamp has the power to hurl anything aside. However, trying to do any work requiring care and dexterity causes its arms to get tangled. This Pokémon tends to leap into action before it thinks.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/068.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d07276d341b41ee1f4",
    "pkdx_id": 69,
    "national_id": 69,
    "name": "Bellsprout",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/69.png",
    "description": "Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.  Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, this Pokémon spits a corrosive fluid that melts even iron.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/069.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "level": 21,
        "method": "level_up",
        "to": "Weepinbell",
        "_id": "557a72d07276d341b41ee1f5"
      }
    ]
  },
  {
    "_id": "557a72cf7276d341b41ee1d4",
    "pkdx_id": 70,
    "national_id": 70,
    "name": "Weepinbell",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/70.png",
    "description": "Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.  Weepinbell has a large hook on its rear end. At night, the Pokémon hooks on to a tree branch and goes to sleep. If it moves around in its sleep, it may wake up to find itself on the ground.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/070.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Victreebel",
        "_id": "557a72cf7276d341b41ee1d5"
      }
    ]
  },
  {
    "_id": "557a72af7276d341b41ede40",
    "pkdx_id": 71,
    "national_id": 71,
    "name": "Victreebel",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/71.png",
    "description": "Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.  Victreebel has a long vine that extends from its head. This vine is waved and flicked about as if it were an animal to attract prey. When an unsuspecting prey draws near, this Pokémon swallows it whole.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/071.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c07276d341b41ee007",
    "pkdx_id": 72,
    "national_id": 72,
    "name": "Tentacool",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/72.png",
    "description": "Tentacool absorbs sunlight and refracts it using water inside its body to convert it into beam energy. This Pokémon shoots beams from the small round organ above its eyes.  Tentacool's body is largely composed of water. If it is removed from the sea, it dries up like parchment. If this Pokémon happens to become dehydrated, put it back into the sea.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/072.png",
    "types": [
      "poison",
      "water"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Tentacruel",
        "_id": "557a72c07276d341b41ee008"
      }
    ]
  },
  {
    "_id": "557a72d17276d341b41ee20e",
    "pkdx_id": 73,
    "national_id": 73,
    "name": "Tentacruel",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/73.png",
    "description": "Tentacruel has tentacles that can be freely elongated and shortened at will. It ensnares prey with its tentacles and weakens the prey by dosing it with a harsh toxin. It can catch up to 80 prey at the same time.  Tentacruel has large red orbs on its head. The orbs glow before lashing the vicinity with a harsh ultrasonic blast. This Pokémon's outburst creates rough waves around it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/073.png",
    "types": [
      "poison",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d17276d341b41ee205",
    "pkdx_id": 74,
    "national_id": 74,
    "name": "Geodude",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/74.png",
    "description": "When Geodude sleeps deeply, it buries itself halfway into the ground. It will not awaken even if hikers step on it unwittingly. In the morning, this Pokémon rolls downhill in search of food.  The longer a Geodude lives, the more its edges are chipped and worn away, making it more rounded in appearance. However, this Pokémon's heart will remain hard, craggy, and rough always.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/074.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Graveler",
        "_id": "557a72d17276d341b41ee206"
      }
    ]
  },
  {
    "_id": "557a72b17276d341b41ede6a",
    "pkdx_id": 75,
    "national_id": 75,
    "name": "Graveler",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/75.png",
    "description": "Rocks are Graveler's favorite food. This Pokémon will climb a mountain from the base to the summit, crunchingly feasting on rocks all the while. Upon reaching the peak, it rolls back down to the bottom.  Graveler grows by feeding on rocks. Apparently, it prefers to eat rocks that are covered in moss. This Pokémon eats its way through a ton of rocks on a daily basis.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/075.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Golem",
        "_id": "557a72b17276d341b41ede6b"
      }
    ]
  },
  {
    "_id": "557a72b17276d341b41ede73",
    "pkdx_id": 76,
    "national_id": 76,
    "name": "Golem",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/76.png",
    "description": "Golem is known for rolling down from mountains. To prevent them from rolling into the homes of people downhill, grooves have been dug into the sides of mountains to serve as guideways for diverting this Pokémon's course.  Golem live up on mountains. If there is a large earthquake, these Pokémon will come rolling down off the mountains en masse to the foothills below.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/076.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d17276d341b41ee1fd",
    "pkdx_id": 77,
    "national_id": 77,
    "name": "Ponyta",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/77.png",
    "description": "Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.  Ponyta is very weak at birth. It can barely stand up. This Pokémon becomes stronger by stumbling and falling to keep up with its parent.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/077.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Rapidash",
        "_id": "557a72d17276d341b41ee1fe"
      }
    ]
  },
  {
    "_id": "557a72cf7276d341b41ee1cc",
    "pkdx_id": 78,
    "national_id": 78,
    "name": "Rapidash",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/78.png",
    "description": "Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.  Rapidash usually can be seen casually cantering in the fields and plains. However, when this Pokémon turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/078.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d07276d341b41ee1e2",
    "pkdx_id": 79,
    "national_id": 79,
    "name": "Slowpoke",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/79.png",
    "description": "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.  Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/079.png",
    "types": [
      "water",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Slowking",
        "_id": "557a72d07276d341b41ee1e4"
      },
      {
        "level": 37,
        "method": "level_up",
        "to": "Slowbro",
        "_id": "557a72d07276d341b41ee1e3"
      }
    ]
  },
  {
    "_id": "557a72b17276d341b41ede66",
    "pkdx_id": 80,
    "national_id": 80,
    "name": "Slowbro",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/80.png",
    "description": "Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.  Slowbro's tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This causes Slowbro to grudgingly swim and catch prey instead.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/080.png",
    "types": [
      "water",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b47276d341b41edebc",
    "pkdx_id": 81,
    "national_id": 81,
    "name": "Magnemite",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/81.png",
    "description": "Magnemite floats in the air by emitting electromagnetic waves from the units at its sides. These waves block gravity. This Pokémon becomes incapable of flight if its internal electrical supply is depleted.  Magnemite attaches itself to power lines to feed on electricity. If your house has a power outage, check your circuit breakers. You may find a large number of this Pokémon clinging to the breaker box.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/081.png",
    "types": [
      "steel",
      "electric"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Magneton",
        "_id": "557a72b47276d341b41edebd"
      }
    ]
  },
  {
    "_id": "557a72b27276d341b41ede87",
    "pkdx_id": 82,
    "national_id": 82,
    "name": "Magneton",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/82.png",
    "description": "Magneton emits a powerful magnetic force that is fatal to electronics and precision instruments. Because of this, it is said that some towns warn people to keep this Pokémon inside a Poké Ball.  Magneton emits a powerful magnetic force that is fatal to mechanical devices. As a result, large cities sound sirens to warn citizens of large-scale outbreaks of this Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/082.png",
    "types": [
      "steel",
      "electric"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Magnezone",
        "_id": "557a72b27276d341b41ede88"
      }
    ]
  },
  {
    "_id": "557a72d07276d341b41ee1ec",
    "pkdx_id": 83,
    "national_id": 83,
    "name": "Farfetchd",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/83.png",
    "description": "Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.  Farfetch'd is always seen with a stalk from a plant of some sort. Apparently, there are good stalks and bad stalks. This Pokémon has been known to fight with others over stalks.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/083.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cf7276d341b41ee1d9",
    "pkdx_id": 84,
    "national_id": 84,
    "name": "Doduo",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/84.png",
    "description": "Doduo's two heads contain completely identical brains. A scientific study reported that on rare occasions, there will be examples of this Pokémon possessing different sets of brains.  Doduo's two heads never sleep at the same time. Its two heads take turns sleeping, so one head can always keep watch for enemies while the other one sleeps.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/084.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 31,
        "method": "level_up",
        "to": "Dodrio",
        "_id": "557a72cf7276d341b41ee1da"
      }
    ]
  },
  {
    "_id": "557a72cf7276d341b41ee1c3",
    "pkdx_id": 85,
    "national_id": 85,
    "name": "Dodrio",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/85.png",
    "description": "Apparently, the heads aren't the only parts of the body that Dodrio has three of. It has three sets of hearts and lungs as well, so it is capable of running long distances without rest.  Watch out if Dodrio's three heads are looking in three separate directions. It's a sure sign that it is on its guard. Don't go near this Pokémon if it's being wary—it may decide to peck you.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/085.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b17276d341b41ede6f",
    "pkdx_id": 86,
    "national_id": 86,
    "name": "Seel",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/86.png",
    "description": "Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.  Seel hunts for prey in the frigid sea underneath sheets of ice. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/086.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Dewgong",
        "_id": "557a72b17276d341b41ede70"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41edecf",
    "pkdx_id": 87,
    "national_id": 87,
    "name": "Dewgong",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/87.png",
    "description": "Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.  Dewgong loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/087.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b27276d341b41ede8c",
    "pkdx_id": 88,
    "national_id": 88,
    "name": "Grimer",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/88.png",
    "description": "Grimer emerged from the sludge that settled on a polluted seabed. This Pokémon loves anything filthy. It constantly leaks a horribly germ-infested fluid from all over its body.  Grimer's sludgy and rubbery body can be forced through any opening, however small it may be. This Pokémon enters sewer pipes to drink filthy wastewater.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/088.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 38,
        "method": "level_up",
        "to": "Muk",
        "_id": "557a72b27276d341b41ede8d"
      }
    ]
  },
  {
    "_id": "557a72b27276d341b41ede90",
    "pkdx_id": 89,
    "national_id": 89,
    "name": "Muk",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/89.png",
    "description": "This Pokémon's favorite food is anything that is repugnantly filthy. In dirty towns where people think nothing of throwing away litter on the streets, Muk are certain to gather.  From Muk's body seeps a foul fluid that gives off a nose-bendingly horrible stench. Just one drop of this Pokémon's body fluid can turn a pool stagnant and rancid.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/089.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b17276d341b41ede62",
    "pkdx_id": 90,
    "national_id": 90,
    "name": "Shellder",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/90.png",
    "description": "At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.  At night, this Pokémon uses its broad tongue to burrow a hole in the seafloor sand and then sleep in it. While it is sleeping, Shellder closes its shell, but leaves its tongue hanging out.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/090.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Cloyster",
        "_id": "557a72b17276d341b41ede63"
      }
    ]
  },
  {
    "_id": "557a72b27276d341b41ede93",
    "pkdx_id": 91,
    "national_id": 91,
    "name": "Cloyster",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/91.png",
    "description": "Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.  Cloyster is capable of swimming in the sea. It does so by swallowing water, then jetting it out toward the rear. This Pokémon shoots spikes from its shell using the same system.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/091.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b27276d341b41ede97",
    "pkdx_id": 92,
    "national_id": 92,
    "name": "Gastly",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/92.png",
    "description": "Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.  Gastly is largely composed of gaseous matter. When exposed to a strong wind, the gaseous body quickly dwindles away. Groups of this Pokémon cluster under the eaves of houses to escape the ravages of wind.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/092.png",
    "types": [
      "poison",
      "ghost"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Haunter",
        "_id": "557a72b27276d341b41ede98"
      }
    ]
  },
  {
    "_id": "557a72b37276d341b41edeb0",
    "pkdx_id": 93,
    "national_id": 93,
    "name": "Haunter",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/93.png",
    "description": "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.  Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/093.png",
    "types": [
      "poison",
      "ghost"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Gengar",
        "_id": "557a72b37276d341b41edeb1"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41edeca",
    "pkdx_id": 94,
    "national_id": 94,
    "name": "Gengar",
    "__v": 5,
    "image_url": "http://pokeapi.co/media/img/94.png",
    "description": "Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.  Sometimes, on a dark night, your shadow thrown by a streetlight will suddenly and startlingly overtake you. It is actually a Gengar running past you, pretending to be your shadow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/094.png",
    "types": [
      "poison",
      "ghost"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Gengar-mega",
        "_id": "557a72b47276d341b41edecb"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41edec5",
    "pkdx_id": 95,
    "national_id": 95,
    "name": "Onix",
    "__v": 4,
    "image_url": "http://pokeapi.co/media/img/95.png",
    "description": "Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.  Onix has a magnet in its brain. It acts as a compass so that this Pokémon does not lose direction while it is tunneling. As it grows older, its body becomes increasingly rounder and smoother.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/095.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Steelix",
        "_id": "557a72b47276d341b41edec6"
      }
    ]
  },
  {
    "_id": "557a72b27276d341b41ede9c",
    "pkdx_id": 96,
    "national_id": 96,
    "name": "Drowzee",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/96.png",
    "description": "If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.  If your nose becomes itchy while you are sleeping, it's a sure sign that one of these Pokémon is standing above your pillow and trying to eat your dream through your nostrils.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/096.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 26,
        "method": "level_up",
        "to": "Hypno",
        "_id": "557a72b27276d341b41ede9d"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf45",
    "pkdx_id": 97,
    "national_id": 97,
    "name": "Hypno",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/97.png",
    "description": "Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.  Hypno holds a pendulum in its hand. The arcing movement and glitter of the pendulum lull the foe into a deep state of hypnosis. While this Pokémon searches for prey, it polishes the pendulum.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/097.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b27276d341b41ede7e",
    "pkdx_id": 98,
    "national_id": 98,
    "name": "Krabby",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/98.png",
    "description": "Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.  Krabby live on beaches, burrowed inside holes dug into the sand. On sandy beaches with little in the way of food, these Pokémon can be seen squabbling with each other over territory.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/098.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Kingler",
        "_id": "557a72b27276d341b41ede7f"
      }
    ]
  },
  {
    "_id": "557a72b37276d341b41edea4",
    "pkdx_id": 99,
    "national_id": 99,
    "name": "Kingler",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/99.png",
    "description": "Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.  Kingler has an enormous, oversized claw. It waves this huge claw in the air to communicate with others. However, because the claw is so heavy, the Pokémon quickly tires.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/099.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b37276d341b41edea7",
    "pkdx_id": 100,
    "national_id": 100,
    "name": "Voltorb",
    "__v": 3,
    "image_url": "http://pokeapi.co/media/img/100.png",
    "description": "Voltorb is extremely sensitive—it explodes at the slightest of shocks. It is rumored that it was first created when a Poké Ball was exposed to a powerful pulse of energy.  Voltorb was first sighted at a company that manufactures Poké Balls. The link between that sighting and the fact that this Pokémon looks very similar to a Poké Ball remains a mystery.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/100.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Electrode",
        "_id": "557a72b37276d341b41edea8"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41eded3",
    "pkdx_id": 101,
    "national_id": 101,
    "name": "Electrode",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/101.png",
    "description": "One of Electrode's characteristics is its attraction to electricity. It is a problematical Pokémon that congregates mostly at electrical power plants to feed on electricity that has just been generated.  Electrode eats electricity in the atmosphere. On days when lightning strikes, you can see this Pokémon exploding all over the place from eating too much electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/101.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b37276d341b41edeab",
    "pkdx_id": 102,
    "national_id": 102,
    "name": "Exeggcute",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/102.png",
    "description": "This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.  This Pokémon consists of six eggs that form a closely knit cluster. The six eggs attract each other and spin around. When cracks increasingly appear on the eggs, Exeggcute is close to evolution.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/102.png",
    "types": [
      "grass",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Exeggutor",
        "_id": "557a72b37276d341b41edeac"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41edec1",
    "pkdx_id": 103,
    "national_id": 103,
    "name": "Exeggutor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/103.png",
    "description": "Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.  Exeggutor originally came from the tropics. Its heads steadily grow larger from exposure to strong sunlight. It is said that when the heads fall off, they group together to form Exeggcute.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/103.png",
    "types": [
      "grass",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b47276d341b41eded6",
    "pkdx_id": 104,
    "national_id": 104,
    "name": "Cubone",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/104.png",
    "description": "Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.  Cubone pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull the Pokémon wears are made by the tears it sheds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/104.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Marowak",
        "_id": "557a72b47276d341b41eded7"
      }
    ]
  },
  {
    "_id": "557a72b37276d341b41edeb9",
    "pkdx_id": 105,
    "national_id": 105,
    "name": "Marowak",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/105.png",
    "description": "Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.  Marowak is the evolved form of a Cubone that has overcome its sadness at the loss of its mother and grown tough. This Pokémon's tempered and hardened spirit is not easily broken.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/105.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b77276d341b41edf17",
    "pkdx_id": 106,
    "national_id": 106,
    "name": "Hitmonlee",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/106.png",
    "description": "Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.  Hitmonlee's legs freely contract and stretch. Using these springlike legs, it bowls over foes with devastating kicks. After battle, it rubs down its legs and loosens the muscles to overcome fatigue.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/106.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b57276d341b41edeef",
    "pkdx_id": 107,
    "national_id": 107,
    "name": "Hitmonchan",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/107.png",
    "description": "Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.  Hitmonchan is said to possess the spirit of a boxer who had been working toward a world championship. This Pokémon has an indomitable spirit and will never give up in the face of adversity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/107.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b37276d341b41edeb5",
    "pkdx_id": 108,
    "national_id": 108,
    "name": "Lickitung",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/108.png",
    "description": "Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.  Whenever Lickitung comes across something new, it will unfailingly give it a lick. It does so because it memorizes things by texture and by taste. It is somewhat put off by sour things.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/108.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Lickilicky",
        "_id": "557a72b37276d341b41edeb6"
      }
    ]
  },
  {
    "_id": "557a72b47276d341b41ededa",
    "pkdx_id": 109,
    "national_id": 109,
    "name": "Koffing",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/109.png",
    "description": "Koffing embodies toxic substances. It mixes the toxins with raw garbage to set off a chemical reaction that results in a terribly powerful poison gas. The higher the temperature, the more gas is concocted by this Pokémon.  If Koffing becomes agitated, it raises the toxicity of its internal gases and jets them out from all over its body. This Pokémon may also overinflate its round body, then explode.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/109.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Weezing",
        "_id": "557a72b47276d341b41ededb"
      }
    ]
  },
  {
    "_id": "557a72b77276d341b41edf1a",
    "pkdx_id": 110,
    "national_id": 110,
    "name": "Weezing",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/110.png",
    "description": "Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.  Weezing loves the gases given off by rotted kitchen garbage. This Pokémon will find a dirty, unkempt house and make it its home. At night, when the people in the house are asleep, it will go through the trash.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/110.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b57276d341b41edee6",
    "pkdx_id": 111,
    "national_id": 111,
    "name": "Rhyhorn",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/111.png",
    "description": "Rhyhorn's brain is very small. It is so dense, while on a run it forgets why it started running in the first place. It apparently remembers sometimes if it demolishes something.  Rhyhorn runs in a straight line, smashing everything in its path. It is not bothered even if it rushes headlong into a block of steel. This Pokémon may feel some pain from the collision the next day, however.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/111.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "level": 42,
        "method": "level_up",
        "to": "Rhydon",
        "_id": "557a72b57276d341b41edee7"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edf07",
    "pkdx_id": 112,
    "national_id": 112,
    "name": "Rhydon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/112.png",
    "description": "Rhydon has a horn that serves as a drill. It is used for destroying rocks and boulders. This Pokémon occasionally rams into streams of magma, but the armor-like hide prevents it from feeling the heat.  Rhydon's horn can crush even uncut diamonds. One sweeping blow of its tail can topple a building. This Pokémon's hide is extremely tough. Even direct cannon hits don't leave a scratch.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/112.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Rhyperior",
        "_id": "557a72b67276d341b41edf08"
      }
    ]
  },
  {
    "_id": "557a72b97276d341b41edf4f",
    "pkdx_id": 113,
    "national_id": 113,
    "name": "Chansey",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/113.png",
    "description": "Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.  Chansey lays nutritionally excellent eggs on an everyday basis. The eggs are so delicious, they are easily and eagerly devoured by even those people who have lost their appetite.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/113.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Blissey",
        "_id": "557a72b97276d341b41edf50"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf3d",
    "pkdx_id": 114,
    "national_id": 114,
    "name": "Tangela",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/114.png",
    "description": "Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.  Tangela's vines snap off easily if they are grabbed. This happens without pain, allowing it to make a quick getaway. The lost vines are replaced by newly grown vines the very next day.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/114.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Tangrowth",
        "_id": "557a72b87276d341b41edf3e"
      }
    ]
  },
  {
    "_id": "557a72b77276d341b41edf28",
    "pkdx_id": 115,
    "national_id": 115,
    "name": "Kangaskhan",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/115.png",
    "description": "If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.  If you come across a young Kangaskhan playing by itself, you must never disturb it or attempt to catch it. The baby Pokémon's parent is sure to be in the area, and it will become violently enraged at you.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/115.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Kangaskhan-mega",
        "_id": "557a72b77276d341b41edf29"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edf0f",
    "pkdx_id": 116,
    "national_id": 116,
    "name": "Horsea",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/116.png",
    "description": "If Horsea senses danger, it will reflexively spray a dense black ink from its mouth and try to escape. This Pokémon swims by cleverly flapping the fin on its back.  Horsea eats small insects and moss off of rocks. If the ocean current turns fast, this Pokémon anchors itself by wrapping its tail around rocks or coral to prevent being washed away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/116.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Seadra",
        "_id": "557a72b67276d341b41edf10"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf2c",
    "pkdx_id": 117,
    "national_id": 117,
    "name": "Seadra",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/117.png",
    "description": "Seadra generates whirlpools by spinning its body. The whirlpools are strong enough to swallow even fishing boats. This Pokémon weakens prey with these currents, then swallows it whole.  Seadra sleeps after wriggling itself between the branches of coral. Those trying to harvest coral are occasionally stung by this Pokémon's poison barbs if they fail to notice it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/117.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Kingdra",
        "_id": "557a72b87276d341b41edf2d"
      }
    ]
  },
  {
    "_id": "557a72b77276d341b41edf1d",
    "pkdx_id": 118,
    "national_id": 118,
    "name": "Goldeen",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/118.png",
    "description": "Goldeen loves swimming wild and free in rivers and ponds. If one of these Pokémon is placed in an aquarium, it will shatter even the thickest glass with one ram of its horn and make its escape.  Goldeen is a very beautiful Pokémon with fins that billow elegantly in water. However, don't let your guard down around this Pokémon—it could ram you powerfully with its horn.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/118.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 33,
        "method": "level_up",
        "to": "Seaking",
        "_id": "557a72b77276d341b41edf1e"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edf0c",
    "pkdx_id": 119,
    "national_id": 119,
    "name": "Seaking",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/119.png",
    "description": "Seaking is very protective of its eggs. The male and female will take turns patrolling around their nest and eggs. The guarding of eggs by these Pokémon goes on for over a month.  In the autumn, Seaking males can be seen performing courtship dances in riverbeds to woo females. During this season, this Pokémon's body coloration is at its most beautiful.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/119.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b57276d341b41edede",
    "pkdx_id": 120,
    "national_id": 120,
    "name": "Staryu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/120.png",
    "description": "Staryu apparently communicates with the stars in the night sky by flashing the red core at the center of its body. If parts of its body are torn, this Pokémon simply regenerates the missing pieces and limbs.  Staryu's center section has an organ called the core that shines bright red. If you go to a beach toward the end of summer, the glowing cores of these Pokémon look like the stars in the sky.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/120.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Starmie",
        "_id": "557a72b57276d341b41ededf"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edf13",
    "pkdx_id": 121,
    "national_id": 121,
    "name": "Starmie",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/121.png",
    "description": "Starmie swims through water by spinning its star-shaped body as if it were a propeller on a ship. The core at the center of this Pokémon's body glows in seven colors.  Starmie's center section—the core—glows brightly in seven colors. Because of its luminous nature, this Pokémon has been given the nickname “the gem of the sea.\"",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/121.png",
    "types": [
      "water",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b97276d341b41edf48",
    "pkdx_id": 122,
    "national_id": 122,
    "name": "Mr-mime",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/122.png",
    "description": "Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.  Mr. Mime is a master of pantomime. Its gestures and motions convince watchers that something unseeable actually exists. Once the watchers are convinced, the unseeable thing exists as if it were real.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/122.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b57276d341b41edef7",
    "pkdx_id": 123,
    "national_id": 123,
    "name": "Scyther",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/123.png",
    "description": "Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.  Scyther is blindingly fast. Its blazing speed enhances the effectiveness of the twin scythes on its forearms. This Pokémon's scythes are so effective, they can slice through thick logs in one wicked stroke.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/123.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Scizor",
        "_id": "557a72b57276d341b41edef8"
      }
    ]
  },
  {
    "_id": "557a72b57276d341b41edee2",
    "pkdx_id": 124,
    "national_id": 124,
    "name": "Jynx",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/124.png",
    "description": "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.  Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/124.png",
    "types": [
      "ice",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b67276d341b41edf03",
    "pkdx_id": 125,
    "national_id": 125,
    "name": "Electabuzz",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/125.png",
    "description": "When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.  When a storm arrives, gangs of this Pokémon compete with each other to scale heights that are likely to be stricken by lightning bolts. Some towns use Electabuzz in place of lightning rods.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/125.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Electivire",
        "_id": "557a72b67276d341b41edf04"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf39",
    "pkdx_id": 126,
    "national_id": 126,
    "name": "Magmar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/126.png",
    "description": "In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.  In battle, Magmar blows out intensely hot flames from all over its body to intimidate its opponent. This Pokémon's fiery bursts create heat waves that ignite grass and trees in its surroundings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/126.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Magmortar",
        "_id": "557a72b87276d341b41edf3a"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf35",
    "pkdx_id": 127,
    "national_id": 127,
    "name": "Pinsir",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/127.png",
    "description": "Pinsir has a pair of massive horns. Protruding from the surface of these horns are thorns. These thorns are driven deeply into the foe's body when the pincer closes, making it tough for the foe to escape.  Pinsir is astoundingly strong. It can grip a foe weighing twice its weight in its horns and easily lift it. This Pokémon's movements turn sluggish in cold places.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/127.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Pinsir-mega",
        "_id": "557a72b87276d341b41edf36"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edefc",
    "pkdx_id": 128,
    "national_id": 128,
    "name": "Tauros",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/128.png",
    "description": "This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.  This Pokémon is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/128.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b57276d341b41edeeb",
    "pkdx_id": 129,
    "national_id": 129,
    "name": "Magikarp",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/129.png",
    "description": "Magikarp is virtually useless in battle as it can only splash around. As a result, it is considered to be weak. However, it is actually a very hardy Pokémon that can survive in any body of water no matter how polluted it is.  Magikarp is a pathetic excuse for a Pokémon that is only capable of flopping and splashing. This behavior prompted scientists to undertake research into it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/129.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Gyarados",
        "_id": "557a72b57276d341b41edeec"
      }
    ]
  },
  {
    "_id": "557a72b57276d341b41edef2",
    "pkdx_id": 130,
    "national_id": 130,
    "name": "Gyarados",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/130.png",
    "description": "Once Gyarados goes on a rampage, its ferociously violent blood doesn't calm until it has burned everything down. There are records of this Pokémon's rampages lasting a whole month.  When Magikarp evolves into Gyarados, its brain cells undergo a structural transformation. It is said that this transformation is to blame for this Pokémon's wildly violent nature.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/130.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Gyarados-mega",
        "_id": "557a72b57276d341b41edef3"
      }
    ]
  },
  {
    "_id": "557a72b67276d341b41edeff",
    "pkdx_id": 131,
    "national_id": 131,
    "name": "Lapras",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/131.png",
    "description": "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.  People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/131.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b97276d341b41edf4c",
    "pkdx_id": 132,
    "national_id": 132,
    "name": "Ditto",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/132.png",
    "description": "Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.  Ditto rearranges its cell structure to transform itself into other shapes. However, if it tries to transform itself into something by relying on its memory, this Pokémon manages to get details wrong.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bb7276d341b41edf8e",
    "pkdx_id": 133,
    "national_id": 133,
    "name": "Eevee",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/133.png",
    "description": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.  Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/133.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Umbreon",
        "_id": "557a72bb7276d341b41edf96"
      },
      {
        "method": "level_up",
        "to": "Sylveon",
        "_id": "557a72bb7276d341b41edf95"
      },
      {
        "method": "other",
        "to": "Leafeon",
        "_id": "557a72bb7276d341b41edf94"
      },
      {
        "method": "other",
        "to": "Glaceon",
        "_id": "557a72bb7276d341b41edf93"
      },
      {
        "method": "stone",
        "to": "Vaporeon",
        "_id": "557a72bb7276d341b41edf92"
      },
      {
        "method": "stone",
        "to": "Jolteon",
        "_id": "557a72bb7276d341b41edf91"
      },
      {
        "method": "stone",
        "to": "Flareon",
        "_id": "557a72bb7276d341b41edf90"
      },
      {
        "method": "other",
        "to": "Espeon",
        "_id": "557a72bb7276d341b41edf8f"
      }
    ]
  },
  {
    "_id": "557a72ba7276d341b41edf61",
    "pkdx_id": 134,
    "national_id": 134,
    "name": "Vaporeon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/134.png",
    "description": "Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.  Vaporeon underwent a spontaneous mutation and grew fins and gills that allow it to live underwater. This Pokémon has the ability to freely control water.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/134.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b77276d341b41edf21",
    "pkdx_id": 135,
    "national_id": 135,
    "name": "Jolteon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/135.png",
    "description": "Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.  Jolteon's cells generate a low level of electricity. This power is amplified by the static electricity of its fur, enabling the Pokémon to drop thunderbolts. The bristling fur is made of electrically charged needles.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/135.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bd7276d341b41edfbd",
    "pkdx_id": 136,
    "national_id": 136,
    "name": "Flareon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/136.png",
    "description": "Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.  Flareon's fluffy fur has a functional purpose—it releases heat into the air so that its body does not get excessively hot. This Pokémon's body temperature can rise to a maximum of 1,650 degrees Fahrenheit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/136.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b87276d341b41edf41",
    "pkdx_id": 137,
    "national_id": 137,
    "name": "Porygon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/137.png",
    "description": "Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.  Porygon is capable of reverting itself entirely back to program data and entering cyberspace. This Pokémon is copy protected so it cannot be duplicated by copying.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/137.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Porygon2",
        "_id": "557a72b87276d341b41edf42"
      }
    ]
  },
  {
    "_id": "557a72b87276d341b41edf30",
    "pkdx_id": 138,
    "national_id": 138,
    "name": "Omanyte",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/138.png",
    "description": "Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.  Omanyte is one of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by people. If attacked by an enemy, it withdraws itself inside its hard shell.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/138.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Omastar",
        "_id": "557a72b87276d341b41edf31"
      }
    ]
  },
  {
    "_id": "557a72ba7276d341b41edf67",
    "pkdx_id": 139,
    "national_id": 139,
    "name": "Omastar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/139.png",
    "description": "Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.  Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large and heavy, causing its movements to become too slow and ponderous.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/139.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bc7276d341b41edf9d",
    "pkdx_id": 140,
    "national_id": 140,
    "name": "Kabuto",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/140.png",
    "description": "Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.  Kabuto is a Pokémon that has been regenerated from a fossil. However, in extremely rare cases, living examples have been discovered. The Pokémon has not changed at all for 300 million years.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/140.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Kabutops",
        "_id": "557a72bc7276d341b41edf9e"
      }
    ]
  },
  {
    "_id": "557a72b77276d341b41edf24",
    "pkdx_id": 141,
    "national_id": 141,
    "name": "Kabutops",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/141.png",
    "description": "Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.  Kabutops swam underwater to hunt for its prey in ancient times. The Pokémon was apparently evolving from being a water dweller to living on land as evident from the beginnings of change in its gills and legs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/141.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b97276d341b41edf53",
    "pkdx_id": 142,
    "national_id": 142,
    "name": "Aerodactyl",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/142.png",
    "description": "Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.  Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from genetic material extracted from amber. It is imagined to have been the king of the skies in ancient times.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/142.png",
    "types": [
      "flying",
      "rock"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Aerodactyl-mega",
        "_id": "557a72b97276d341b41edf54"
      }
    ]
  },
  {
    "_id": "557a72bb7276d341b41edf80",
    "pkdx_id": 143,
    "national_id": 143,
    "name": "Snorlax",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/143.png",
    "description": "Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.  Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its expansive belly as a place to play.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/143.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ba7276d341b41edf74",
    "pkdx_id": 144,
    "national_id": 144,
    "name": "Articuno",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/144.png",
    "description": "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.  Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/144.png",
    "types": [
      "flying",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bb7276d341b41edf78",
    "pkdx_id": 145,
    "national_id": 145,
    "name": "Zapdos",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/145.png",
    "description": "Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.  Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/145.png",
    "types": [
      "flying",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b97276d341b41edf58",
    "pkdx_id": 146,
    "national_id": 146,
    "name": "Moltres",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/146.png",
    "description": "Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.  Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/146.png",
    "types": [
      "flying",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bd7276d341b41edfb5",
    "pkdx_id": 147,
    "national_id": 147,
    "name": "Dratini",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/147.png",
    "description": "Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.  Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable levels.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/147.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Dragonair",
        "_id": "557a72bd7276d341b41edfb6"
      }
    ]
  },
  {
    "_id": "557a72c07276d341b41ee019",
    "pkdx_id": 148,
    "national_id": 148,
    "name": "Dragonair",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/148.png",
    "description": "Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.  Dragonair stores an enormous amount of energy inside its body. It is said to alter weather conditions in its vicinity by discharging energy from the crystals on its neck and tail.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/148.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 55,
        "method": "level_up",
        "to": "Dragonite",
        "_id": "557a72c07276d341b41ee01a"
      }
    ]
  },
  {
    "_id": "557a72bc7276d341b41edf99",
    "pkdx_id": 149,
    "national_id": 149,
    "name": "Dragonite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/149.png",
    "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.  Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/149.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72b97276d341b41edf5c",
    "pkdx_id": 150,
    "national_id": 150,
    "name": "Mewtwo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/150.png",
    "description": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.  Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/150.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Mewtwo-mega-x",
        "_id": "557a72b97276d341b41edf5e"
      },
      {
        "method": "other",
        "to": "Mewtwo-mega-y",
        "_id": "557a72b97276d341b41edf5d"
      }
    ]
  },
  {
    "_id": "557a72ba7276d341b41edf64",
    "pkdx_id": 151,
    "national_id": 151,
    "name": "Mew",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/151.png",
    "description": "Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.  Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/151.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bb7276d341b41edf86",
    "pkdx_id": 152,
    "national_id": 152,
    "name": "Chikorita",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/152.png",
    "description": "In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.  In battle, Chikorita waves its leaf around to keep the foe at bay. However, a sweet fragrance also wafts from the leaf, becalming the battling Pokémon and creating a cozy, friendly atmosphere all around.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/152.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Bayleef",
        "_id": "557a72bb7276d341b41edf87"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0c0",
    "pkdx_id": 153,
    "national_id": 153,
    "name": "Bayleef",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/153.png",
    "description": "Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.  Bayleef's neck is ringed by curled-up leaves. Inside each tubular leaf is a small shoot of a tree. The fragrance of this shoot makes people peppy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/153.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Meganium",
        "_id": "557a72c67276d341b41ee0c1"
      }
    ]
  },
  {
    "_id": "557a72bc7276d341b41edfa2",
    "pkdx_id": 154,
    "national_id": 154,
    "name": "Meganium",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/154.png",
    "description": "The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe's fighting spirit.  The fragrance of Meganium's flower soothes and calms emotions. In battle, this Pokémon gives off more of its becalming scent to blunt the foe's fighting spirit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/154.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bb7276d341b41edf8a",
    "pkdx_id": 155,
    "national_id": 155,
    "name": "Cyndaquil",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/155.png",
    "description": "Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.  Cyndaquil protects itself by flaring up the flames on its back. The flames are vigorous if the Pokémon is angry. However, if it is tired, the flames splutter fitfully with incomplete combustion.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/155.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 14,
        "method": "level_up",
        "to": "Quilava",
        "_id": "557a72bb7276d341b41edf8b"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0bc",
    "pkdx_id": 156,
    "national_id": 156,
    "name": "Quilava",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/156.png",
    "description": "Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.  Quilava keeps its foes at bay with the intensity of its flames and gusts of superheated air. This Pokémon applies its outstanding nimbleness to dodge attacks even while scorching the foe with flames.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/156.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Typhlosion",
        "_id": "557a72c67276d341b41ee0bd"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0b9",
    "pkdx_id": 157,
    "national_id": 157,
    "name": "Typhlosion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/157.png",
    "description": "Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.  Typhlosion obscures itself behind a shimmering heat haze that it creates using its intensely hot flames. This Pokémon creates blazing explosive blasts that burn everything to cinders.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/157.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41edff2",
    "pkdx_id": 158,
    "national_id": 158,
    "name": "Totodile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/158.png",
    "description": "Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.  Despite the smallness of its body, Totodile's jaws are very powerful. While the Pokémon may think it is just playfully nipping, its bite has enough power to cause serious injury.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/158.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Croconaw",
        "_id": "557a72bf7276d341b41edff3"
      }
    ]
  },
  {
    "_id": "557a72bc7276d341b41edfa5",
    "pkdx_id": 159,
    "national_id": 159,
    "name": "Croconaw",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/159.png",
    "description": "Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.  Once Croconaw has clamped its jaws on its foe, it will absolutely not let go. Because the tips of its fangs are forked back like barbed fishhooks, they become impossible to remove when they have sunk in.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/159.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Feraligatr",
        "_id": "557a72bc7276d341b41edfa6"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0c9",
    "pkdx_id": 160,
    "national_id": 160,
    "name": "Feraligatr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/160.png",
    "description": "Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.  Feraligatr intimidates its foes by opening its huge mouth. In battle, it will kick the ground hard with its thick and powerful hind legs to charge at the foe at an incredible speed.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/160.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bb7276d341b41edf7c",
    "pkdx_id": 161,
    "national_id": 161,
    "name": "Sentret",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/161.png",
    "description": "When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.  When Sentret sleeps, it does so while another stands guard. The sentry wakes the others at the first sign of danger. When this Pokémon becomes separated from its pack, it becomes incapable of sleep due to fear.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/161.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 15,
        "method": "level_up",
        "to": "Furret",
        "_id": "557a72bb7276d341b41edf7d"
      }
    ]
  },
  {
    "_id": "557a72c57276d341b41ee0a9",
    "pkdx_id": 162,
    "national_id": 162,
    "name": "Furret",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/162.png",
    "description": "Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.  Furret has a very slim build. When under attack, it can slickly squirm through narrow spaces and get away. In spite of its short limbs, this Pokémon is very nimble and fleet.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/162.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c67276d341b41ee0c4",
    "pkdx_id": 163,
    "national_id": 163,
    "name": "Hoothoot",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/163.png",
    "description": "Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pokémon begins hooting at precisely the same time every day.  Hoothoot has an internal organ that senses and tracks the earth's rotation. Using this special organ, this Pokémon begins hooting at precisely the same time every day.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/163.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Noctowl",
        "_id": "557a72c67276d341b41ee0c5"
      }
    ]
  },
  {
    "_id": "557a72bd7276d341b41edfb9",
    "pkdx_id": 164,
    "national_id": 164,
    "name": "Noctowl",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/164.png",
    "description": "Noctowl never fails at catching prey in darkness. This Pokémon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.  Noctowl never fails at catching prey in darkness. This Pokémon owes its success to its superior vision that allows it to see in minimal light, and to its soft, supple wings that make no sound in flight.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/164.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ba7276d341b41edf6b",
    "pkdx_id": 165,
    "national_id": 165,
    "name": "Ledyba",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/165.png",
    "description": "Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pokémon conveys its feelings to others by altering the fluid's scent.  Ledyba secretes an aromatic fluid from where its legs join its body. This fluid is used for communicating with others. This Pokémon conveys its feelings to others by altering the fluid's scent.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/165.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Ledian",
        "_id": "557a72ba7276d341b41edf6c"
      }
    ]
  },
  {
    "_id": "557a72ba7276d341b41edf70",
    "pkdx_id": 166,
    "national_id": 166,
    "name": "Ledian",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/166.png",
    "description": "It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this—the Pokémon uses the light of the stars as its energy.  It is said that in lands with clean air, where the stars fill the sky, there live Ledian in countless numbers. There is a good reason for this—the Pokémon uses the light of the stars as its energy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/166.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c37276d341b41ee05e",
    "pkdx_id": 167,
    "national_id": 167,
    "name": "Spinarak",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/167.png",
    "description": "The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.  The web spun by Spinarak can be considered its second nervous system. It is said that this Pokémon can determine what kind of prey is touching its web just by the tiny vibrations it feels through the web's strands.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/167.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Ariados",
        "_id": "557a72c37276d341b41ee05f"
      }
    ]
  },
  {
    "_id": "557a72bd7276d341b41edfc0",
    "pkdx_id": 168,
    "national_id": 168,
    "name": "Ariados",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/168.png",
    "description": "Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.  Ariados's feet are tipped with tiny hooked claws that enable it to scuttle on ceilings and vertical walls. This Pokémon constricts the foe with thin and strong silk webbing.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/168.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41edffa",
    "pkdx_id": 169,
    "national_id": 169,
    "name": "Crobat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/169.png",
    "description": "Crobat sneaks up on its intended prey using wings that barely make a sound. This Pokémon rests by hanging on a tree branch with its rear legs that serve as wings.  If this Pokémon is flying by fluttering only a pair of wings on either the forelegs or hind legs, it's proof that Crobat has been flying a long distance. It switches the wings it uses if it is tired.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/169.png",
    "types": [
      "flying",
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c47276d341b41ee087",
    "pkdx_id": 170,
    "national_id": 170,
    "name": "Chinchou",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/170.png",
    "description": "Chinchou's two antennas are filled with cells that generate strong electricity. This Pokémon's cells create so much electrical power, it even makes itself tingle slightly.  Chinchou lets loose positive and negative electrical charges from its two antennas to make its prey faint. This Pokémon flashes its electric lights to exchange signals with others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/170.png",
    "types": [
      "water",
      "electric"
    ],
    "evolutions": [
      {
        "level": 27,
        "method": "level_up",
        "to": "Lanturn",
        "_id": "557a72c47276d341b41ee088"
      }
    ]
  },
  {
    "_id": "557a72c27276d341b41ee05a",
    "pkdx_id": 171,
    "national_id": 171,
    "name": "Lanturn",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/171.png",
    "description": "Lanturn is known to emit light. If you peer down into the dark sea from a ship at night, you can sometimes see this Pokémon's light rising from the depths where it swims. It gives the sea an appearance of a starlit night.  Lanturn is nicknamed “the deep-sea star\" for its illuminated antenna. This Pokémon produces light by causing a chemical reaction between bacteria and its bodily fluids inside the antenna.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/171.png",
    "types": [
      "water",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c17276d341b41ee039",
    "pkdx_id": 172,
    "national_id": 172,
    "name": "Pichu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/172.png",
    "description": "When Pichu plays with others, it may short out electricity with another Pichu, creating a shower of sparks. In that event, this Pokémon will begin crying, startled by the flash of sparks.  Pichu charges itself with electricity more easily on days with thunderclouds or when the air is very dry. You can hear the crackling of static electricity coming off this Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/172.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Pikachu",
        "_id": "557a72c17276d341b41ee03a"
      }
    ]
  },
  {
    "_id": "557a72bf7276d341b41edff6",
    "pkdx_id": 173,
    "national_id": 173,
    "name": "Cleffa",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/173.png",
    "description": "On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pokémon quench their thirst with the morning dew.  On nights with many shooting stars, Cleffa can be seen dancing in a ring. They dance through the night and stop only at the break of day, when these Pokémon quench their thirst with the morning dew.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/173.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Clefairy",
        "_id": "557a72bf7276d341b41edff7"
      }
    ]
  },
  {
    "_id": "557a72c07276d341b41ee021",
    "pkdx_id": 174,
    "national_id": 174,
    "name": "Igglybuff",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/174.png",
    "description": "Igglybuff has a soft and plushy body that feels very much like a marshmallow. From this body wafts a gently sweet fragrance that soothes and calms the emotions of its foes.  Igglybuff's vocal cords are not sufficiently developed. It would hurt its throat if it were to sing too much. This Pokémon gargles with freshwater from a clean stream.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/174.png",
    "types": [
      "normal",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Jigglypuff",
        "_id": "557a72c07276d341b41ee022"
      }
    ]
  },
  {
    "_id": "557a72c27276d341b41ee041",
    "pkdx_id": 175,
    "national_id": 175,
    "name": "Togepi",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/175.png",
    "description": "As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.  As its energy, Togepi uses the positive emotions of compassion and pleasure exuded by people and Pokémon. This Pokémon stores up feelings of happiness inside its shell, then shares them with others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/175.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Togetic",
        "_id": "557a72c27276d341b41ee042"
      }
    ]
  },
  {
    "_id": "557a72c27276d341b41ee055",
    "pkdx_id": 176,
    "national_id": 176,
    "name": "Togetic",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/176.png",
    "description": "Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.  Togetic is said to be a Pokémon that brings good fortune. When the Pokémon spots someone who is pure of heart, it is said to appear and share its happiness with that person.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/176.png",
    "types": [
      "flying",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Togekiss",
        "_id": "557a72c27276d341b41ee056"
      }
    ]
  },
  {
    "_id": "557a72c37276d341b41ee063",
    "pkdx_id": 177,
    "national_id": 177,
    "name": "Natu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/177.png",
    "description": "Natu has a highly developed jumping ability. The Pokémon flaps and leaps onto tree branches that are taller than grown-up people to pick at the tree's new shoots.  Natu cannot fly because its wings are not yet fully grown. If your eyes meet with this Pokémon's eyes, it will stare back intently at you. But if you move even slightly, it will hop away to safety.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/177.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Xatu",
        "_id": "557a72c37276d341b41ee064"
      }
    ]
  },
  {
    "_id": "557a72c17276d341b41ee02c",
    "pkdx_id": 178,
    "national_id": 178,
    "name": "Xatu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/178.png",
    "description": "Xatu is known to stand motionless while staring at the sun all day long. Some people revere it as a mystical Pokémon out of their belief that Xatu is in possession of the power to see into the future.  Xatu stands rooted and still in one spot all day long. People believe that this Pokémon does so out of fear of the terrible things it has foreseen in the future.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/178.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0cc",
    "pkdx_id": 179,
    "national_id": 179,
    "name": "Mareep",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/179.png",
    "description": "Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.  Mareep's fluffy coat of wool rubs together and builds a static charge. The more static electricity is charged, the more brightly the lightbulb at the tip of its tail glows.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/179.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 15,
        "method": "level_up",
        "to": "Flaaffy",
        "_id": "557a72c77276d341b41ee0cd"
      }
    ]
  },
  {
    "_id": "557a72c37276d341b41ee068",
    "pkdx_id": 180,
    "national_id": 180,
    "name": "Flaaffy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/180.png",
    "description": "Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.  Flaaffy's wool quality changes so that it can generate a high amount of static electricity with a small amount of wool. The bare and slick parts of its hide are shielded against electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/180.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Ampharos",
        "_id": "557a72c37276d341b41ee069"
      }
    ]
  },
  {
    "_id": "557a72c37276d341b41ee06f",
    "pkdx_id": 181,
    "national_id": 181,
    "name": "Ampharos",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/181.png",
    "description": "Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pokémon to send signals back and forth with others far away.  Ampharos gives off so much light that it can be seen even from space. People in the old days used the light of this Pokémon to send signals back and forth with others far away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/181.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Ampharos-mega",
        "_id": "557a72c37276d341b41ee070"
      }
    ]
  },
  {
    "_id": "557a72bb7276d341b41edf83",
    "pkdx_id": 182,
    "national_id": 182,
    "name": "Bellossom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/182.png",
    "description": "A Bellossom grows flowers more beautifully if it has evolved from a smelly Gloom—the more stinky the better. At night, this Pokémon closes its petals and goes to sleep.  When Bellossom gets exposed to plenty of sunlight, the leaves ringing its body begin to spin around. This Pokémon's dancing is renowned in the southern lands.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/182.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72be7276d341b41edfe2",
    "pkdx_id": 183,
    "national_id": 183,
    "name": "Marill",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/183.png",
    "description": "When fishing for food at the edge of a fast-running stream, Marill wraps its tail around the trunk of a tree. This Pokémon's tail is flexible and configured to stretch.  Marill's oil-filled tail acts much like a life preserver. If you see just its tail bobbing on the water's surface, it's a sure indication that this Pokémon is diving beneath the water to feed on aquatic plants.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/183.png",
    "types": [
      "water",
      "fairy"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Azumarill",
        "_id": "557a72be7276d341b41edfe3"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0b5",
    "pkdx_id": 184,
    "national_id": 184,
    "name": "Azumarill",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/184.png",
    "description": "Azumarill can make balloons out of air. It makes these air balloons if it spots a drowning Pokémon. The air balloons enable the Pokémon in trouble to breathe.  Azumarill's long ears are indispensable sensors. By focusing its hearing, this Pokémon can identify what kinds of prey are around, even in rough and fast-running rivers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/184.png",
    "types": [
      "water",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c47276d341b41ee07b",
    "pkdx_id": 185,
    "national_id": 185,
    "name": "Sudowoodo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/185.png",
    "description": "Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pokémon is easily identified as a fake during the winter.  Sudowoodo camouflages itself as a tree to avoid being attacked by enemies. However, because its hands remain green throughout the year, the Pokémon is easily identified as a fake during the winter.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/185.png",
    "types": [
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c57276d341b41ee094",
    "pkdx_id": 186,
    "national_id": 186,
    "name": "Politoed",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/186.png",
    "description": "The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pokémon earns from its peers.  The curled hair on Politoed's head is proof of its status as a king. It is said that the longer and more curled the hair, the more respect this Pokémon earns from its peers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/186.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0db",
    "pkdx_id": 187,
    "national_id": 187,
    "name": "Hoppip",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/187.png",
    "description": "This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.  This Pokémon drifts and floats with the wind. If it senses the approach of strong winds, Hoppip links its leaves with other Hoppip to prepare against being blown away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/187.png",
    "types": [
      "flying",
      "grass"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Skiploom",
        "_id": "557a72c77276d341b41ee0dc"
      }
    ]
  },
  {
    "_id": "557a72c57276d341b41ee0a4",
    "pkdx_id": 188,
    "national_id": 188,
    "name": "Skiploom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/188.png",
    "description": "Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.  Skiploom's flower blossoms when the temperature rises above 64 degrees Fahrenheit. How much the flower opens depends on the temperature. For that reason, this Pokémon is sometimes used as a thermometer.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/188.png",
    "types": [
      "flying",
      "grass"
    ],
    "evolutions": [
      {
        "level": 27,
        "method": "level_up",
        "to": "Jumpluff",
        "_id": "557a72c57276d341b41ee0a5"
      }
    ]
  },
  {
    "_id": "557a72c27276d341b41ee04e",
    "pkdx_id": 189,
    "national_id": 189,
    "name": "Jumpluff",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/189.png",
    "description": "Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.  Jumpluff rides warm southern winds to cross the sea and fly to foreign lands. The Pokémon descends to the ground when it encounters cold air while it is floating.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/189.png",
    "types": [
      "flying",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72be7276d341b41edfd5",
    "pkdx_id": 190,
    "national_id": 190,
    "name": "Aipom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/190.png",
    "description": "Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pokémon uses its tail so much, its real hands have become rather clumsy.  Aipom's tail ends in a hand-like appendage that can be cleverly manipulated. However, because the Pokémon uses its tail so much, its real hands have become rather clumsy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/190.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Ambipom",
        "_id": "557a72be7276d341b41edfd6"
      }
    ]
  },
  {
    "_id": "557a72c27276d341b41ee04a",
    "pkdx_id": 191,
    "national_id": 191,
    "name": "Sunkern",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/191.png",
    "description": "Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.  Sunkern tries to move as little as it possibly can. It does so because it tries to conserve all the nutrients it has stored in its body for its evolution. It will not eat a thing, subsisting only on morning dew.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/191.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Sunflora",
        "_id": "557a72c27276d341b41ee04b"
      }
    ]
  },
  {
    "_id": "557a72c37276d341b41ee06c",
    "pkdx_id": 192,
    "national_id": 192,
    "name": "Sunflora",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/192.png",
    "description": "Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.  Sunflora converts solar energy into nutrition. It moves around actively in the daytime when it is warm. It stops moving as soon as the sun goes down for the night.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/192.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c07276d341b41ee014",
    "pkdx_id": 193,
    "national_id": 193,
    "name": "Yanma",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/193.png",
    "description": "Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.  Yanma is capable of seeing 360 degrees without having to move its eyes. It is a great flier that is adept at making sudden stops and turning midair. This Pokémon uses its flying ability to quickly chase down targeted prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/193.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Yanmega",
        "_id": "557a72c07276d341b41ee015"
      }
    ]
  },
  {
    "_id": "557a72bd7276d341b41edfc4",
    "pkdx_id": 194,
    "national_id": 194,
    "name": "Wooper",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/194.png",
    "description": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.  Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/194.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Quagsire",
        "_id": "557a72bd7276d341b41edfc5"
      }
    ]
  },
  {
    "_id": "557a72c67276d341b41ee0b1",
    "pkdx_id": 195,
    "national_id": 195,
    "name": "Quagsire",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/195.png",
    "description": "Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.  Quagsire hunts for food by leaving its mouth wide open in water and waiting for its prey to blunder in unaware. Because the Pokémon does not move, it does not get very hungry.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/195.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c27276d341b41ee052",
    "pkdx_id": 196,
    "national_id": 196,
    "name": "Espeon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/196.png",
    "description": "Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pokémon developed its precognitive powers to protect its Trainer from harm.  Espeon is extremely loyal to any Trainer it considers to be worthy. It is said that this Pokémon developed its precognitive powers to protect its Trainer from harm.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/196.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bc7276d341b41edfa9",
    "pkdx_id": 197,
    "national_id": 197,
    "name": "Umbreon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/197.png",
    "description": "Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.  Umbreon evolved as a result of exposure to the moon's waves. It hides silently in darkness and waits for its foes to make a move. The rings on its body glow when it leaps to attack.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/197.png",
    "types": [
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c47276d341b41ee08f",
    "pkdx_id": 198,
    "national_id": 198,
    "name": "Murkrow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/198.png",
    "description": "Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pokémon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.  Murkrow was feared and loathed as the alleged bearer of ill fortune. This Pokémon shows strong interest in anything that sparkles or glitters. It will even try to steal rings from women.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/198.png",
    "types": [
      "flying",
      "dark"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Honchkrow",
        "_id": "557a72c47276d341b41ee090"
      }
    ]
  },
  {
    "_id": "557a72c07276d341b41ee00c",
    "pkdx_id": 199,
    "national_id": 199,
    "name": "Slowking",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/199.png",
    "description": "Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.  Slowking undertakes research every day in an effort to solve the mysteries of the world. However, this Pokémon apparently forgets everything it has learned if the Shellder on its head comes off.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/199.png",
    "types": [
      "water",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cb7276d341b41ee15b",
    "pkdx_id": 200,
    "national_id": 200,
    "name": "Misdreavus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/200.png",
    "description": "Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.  Misdreavus frightens people with a creepy, sobbing cry. The Pokémon apparently uses its red spheres to absorb the fearful feelings of foes and turn them into nutrition.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/200.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Mismagius",
        "_id": "557a72cb7276d341b41ee15c"
      }
    ]
  },
  {
    "_id": "557a72c07276d341b41ee026",
    "pkdx_id": 201,
    "national_id": 201,
    "name": "Unown",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/201.png",
    "description": "This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.  This Pokémon is shaped like ancient writing. It is a mystery as to which came first, the ancient writings or the various Unown. Research into this topic is ongoing but nothing is known.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/201.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0e0",
    "pkdx_id": 202,
    "national_id": 202,
    "name": "Wobbuffet",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/202.png",
    "description": "Wobbuffet does nothing but endure attacks—it won't attack on its own. However, it won't endure an attack on its tail. When that happens, the Pokémon will try to take the foe with it using Destiny Bond.  If two or more Wobbuffet meet, they will turn competitive and try to outdo each other's endurance. However, they may try to see which one can endure the longest without food. Trainers need to beware of this habit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/202.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c47276d341b41ee07e",
    "pkdx_id": 203,
    "national_id": 203,
    "name": "Girafarig",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/203.png",
    "description": "Girafarig's rear head contains a tiny brain that is too small for thinking. However, the rear head doesn't need to sleep, so it can keep watch over its surroundings 24 hours a day.  Girafarig's rear head also has a brain, but it is small. The rear head attacks in response to smells and sounds. Approaching this Pokémon from behind can cause the rear head to suddenly lash out and bite.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/203.png",
    "types": [
      "normal",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72be7276d341b41edfde",
    "pkdx_id": 204,
    "national_id": 204,
    "name": "Pineco",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/204.png",
    "description": "Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pokémon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.  Pineco hangs from a tree branch and patiently waits for prey to come along. If the Pokémon is disturbed while eating by someone shaking its tree, it drops down to the ground and explodes with no warning.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/204.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 31,
        "method": "level_up",
        "to": "Forretress",
        "_id": "557a72be7276d341b41edfdf"
      }
    ]
  },
  {
    "_id": "557a72c07276d341b41ee010",
    "pkdx_id": 205,
    "national_id": 205,
    "name": "Forretress",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/205.png",
    "description": "Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pokémon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.  Forretress conceals itself inside its hardened steel shell. The shell is opened when the Pokémon is catching prey, but it does so at such a quick pace that the shell's inside cannot be seen.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/205.png",
    "types": [
      "bug",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c17276d341b41ee029",
    "pkdx_id": 206,
    "national_id": 206,
    "name": "Dunsparce",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/206.png",
    "description": "Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pokémon is known to make its nest in complex shapes deep under the ground.  Dunsparce has a drill for its tail. It uses this tail to burrow into the ground backward. This Pokémon is known to make its nest in complex shapes deep under the ground.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/206.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c57276d341b41ee0ac",
    "pkdx_id": 207,
    "national_id": 207,
    "name": "Gligar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/207.png",
    "description": "Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.  Gligar glides through the air without a sound as if it were sliding. This Pokémon hangs on to the face of its foe using its clawed hind legs and the large pincers on its forelegs, then injects the prey with its poison barb.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/207.png",
    "types": [
      "flying",
      "ground"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Gliscor",
        "_id": "557a72c57276d341b41ee0ad"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee15f",
    "pkdx_id": 208,
    "national_id": 208,
    "name": "Steelix",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/208.png",
    "description": "Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth's core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.  Steelix lives even further underground than Onix. This Pokémon is known to dig toward the earth's core. There are records of this Pokémon reaching a depth of over six-tenths of a mile underground.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/208.png",
    "types": [
      "ground",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c57276d341b41ee09c",
    "pkdx_id": 209,
    "national_id": 209,
    "name": "Snubbull",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/209.png",
    "description": "By baring its fangs and making a scary face, Snubbull sends smaller Pokémon scurrying away in terror. However, this Pokémon seems a little sad at making its foes flee.  By baring its fangs and making a scary face, Snubbull sends smaller Pokémon scurrying away in terror. However, this Pokémon seems a little sad at making its foes flee.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/209.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "level": 23,
        "method": "level_up",
        "to": "Granbull",
        "_id": "557a72c57276d341b41ee09d"
      }
    ]
  },
  {
    "_id": "557a72c47276d341b41ee08c",
    "pkdx_id": 210,
    "national_id": 210,
    "name": "Granbull",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/210.png",
    "description": "Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pokémon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.  Granbull has a particularly well-developed lower jaw. The enormous fangs are heavy, causing the Pokémon to tip its head back for balance. Unless it is startled, it will not try to bite indiscriminately.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/210.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41edfee",
    "pkdx_id": 211,
    "national_id": 211,
    "name": "Qwilfish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/211.png",
    "description": "Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.  Qwilfish sucks in water, inflating itself. This Pokémon uses the pressure of the water it swallowed to shoot toxic quills all at once from all over its body. It finds swimming somewhat challenging.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/211.png",
    "types": [
      "poison",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c87276d341b41ee107",
    "pkdx_id": 212,
    "national_id": 212,
    "name": "Scizor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/212.png",
    "description": "Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pokémon flaps its wings to regulate its body temperature.  Scizor has a body with the hardness of steel. It is not easily fazed by ordinary sorts of attacks. This Pokémon flaps its wings to regulate its body temperature.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/212.png",
    "types": [
      "bug",
      "steel"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Scizor-mega",
        "_id": "557a72c87276d341b41ee108"
      }
    ]
  },
  {
    "_id": "557a72c77276d341b41ee0d0",
    "pkdx_id": 213,
    "national_id": 213,
    "name": "Shuckle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/213.png",
    "description": "Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.  Shuckle quietly hides itself under rocks, keeping its body concealed inside its hard shell while eating berries it has stored away. The berries mix with its body fluids to become a juice.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/213.png",
    "types": [
      "rock",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0e3",
    "pkdx_id": 214,
    "national_id": 214,
    "name": "Heracross",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/214.png",
    "description": "Heracross has sharp claws on its feet. These are planted firmly into the ground or the bark of a tree, giving the Pokémon a secure and solid footing to forcefully fling away foes with its proud horn.  Heracross charges in a straight line at its foe, slips beneath the foe's grasp, and then scoops up and hurls the opponent with its mighty horn. This Pokémon even has enough power to topple a massive tree.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/214.png",
    "types": [
      "fighting",
      "bug"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Heracross-mega",
        "_id": "557a72c77276d341b41ee0e4"
      }
    ]
  },
  {
    "_id": "557a72c57276d341b41ee097",
    "pkdx_id": 215,
    "national_id": 215,
    "name": "Sneasel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/215.png",
    "description": "Sneasel scales trees by punching its hooked claws into the bark. This Pokémon seeks out unguarded nests and steals eggs for food while the parents are away.  Sneasel scales trees by punching its hooked claws into the bark. This Pokémon seeks out unguarded nests and steals eggs for food while the parents are away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/215.png",
    "types": [
      "ice",
      "dark"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Weavile",
        "_id": "557a72c57276d341b41ee098"
      }
    ]
  },
  {
    "_id": "557a72c57276d341b41ee0a0",
    "pkdx_id": 216,
    "national_id": 216,
    "name": "Teddiursa",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/216.png",
    "description": "This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.  This Pokémon likes to lick its palms that are sweetened by being soaked in honey. Teddiursa concocts its own honey by blending fruits and pollen collected by Beedrill.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/216.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Ursaring",
        "_id": "557a72c57276d341b41ee0a1"
      }
    ]
  },
  {
    "_id": "557a72bc7276d341b41edfac",
    "pkdx_id": 217,
    "national_id": 217,
    "name": "Ursaring",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/217.png",
    "description": "In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.  In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food. This Pokémon walks through its forest gathering food every day.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/217.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41edffe",
    "pkdx_id": 218,
    "national_id": 218,
    "name": "Slugma",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/218.png",
    "description": "Slugma does not have any blood in its body. Instead, intensely hot magma circulates throughout this Pokémon's body, carrying essential nutrients and oxygen to its organs.  Molten magma courses throughout Slugma's circulatory system. If this Pokémon is chilled, the magma cools and hardens. Its body turns brittle and chunks fall off, reducing its size.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/218.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 38,
        "method": "level_up",
        "to": "Magcargo",
        "_id": "557a72bf7276d341b41edfff"
      }
    ]
  },
  {
    "_id": "557a72be7276d341b41edfce",
    "pkdx_id": 219,
    "national_id": 219,
    "name": "Magcargo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/219.png",
    "description": "Magcargo's body temperature is approximately 18,000 degrees Fahrenheit. Water is vaporized on contact. If this Pokémon is caught in the rain, the raindrops instantly turn into steam, cloaking the area in a thick fog.  Magcargo's shell is actually its skin that hardened as a result of cooling. Its shell is very brittle and fragile—just touching it causes it to crumble apart. This Pokémon returns to its original size by dipping itself in magma.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/219.png",
    "types": [
      "rock",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c47276d341b41ee076",
    "pkdx_id": 220,
    "national_id": 220,
    "name": "Swinub",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/220.png",
    "description": "Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.  Swinub roots for food by rubbing its snout against the ground. Its favorite food is a mushroom that grows under the cover of dead grass. This Pokémon occasionally roots out hot springs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/220.png",
    "types": [
      "ground",
      "ice"
    ],
    "evolutions": [
      {
        "level": 33,
        "method": "level_up",
        "to": "Piloswine",
        "_id": "557a72c47276d341b41ee077"
      }
    ]
  },
  {
    "_id": "557a72c87276d341b41ee0ee",
    "pkdx_id": 221,
    "national_id": 221,
    "name": "Piloswine",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/221.png",
    "description": "Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.  Piloswine is covered by a thick coat of long hair that enables it to endure the freezing cold. This Pokémon uses its tusks to dig up food that has been buried under ice.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/221.png",
    "types": [
      "ground",
      "ice"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Mamoswine",
        "_id": "557a72c87276d341b41ee0ef"
      }
    ]
  },
  {
    "_id": "557a72c97276d341b41ee115",
    "pkdx_id": 222,
    "national_id": 222,
    "name": "Corsola",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/222.png",
    "description": "Clusters of Corsola congregate in warm seas where they serve as ideal hiding places for smaller Pokémon. When the water temperature falls, this Pokémon migrates to the southern seas.  Corsola's branches glitter very beautifully in seven colors when they catch sunlight. If any branch breaks off, this Pokémon grows it back in just one night.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/222.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0d7",
    "pkdx_id": 223,
    "national_id": 223,
    "name": "Remoraid",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/223.png",
    "description": "Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pokémon travels downstream from rivers.  Remoraid sucks in water, then expels it at high velocity using its abdominal muscles to shoot down flying prey. When evolution draws near, this Pokémon travels downstream from rivers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/223.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Octillery",
        "_id": "557a72c77276d341b41ee0d8"
      }
    ]
  },
  {
    "_id": "557a72be7276d341b41edfd2",
    "pkdx_id": 224,
    "national_id": 224,
    "name": "Octillery",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/224.png",
    "description": "Octillery grabs onto its foe using its tentacles. This Pokémon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.  Octillery grabs onto its foe using its tentacles. This Pokémon tries to immobilize it before delivering the finishing blow. If the foe turns out to be too strong, Octillery spews ink to escape.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/224.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cb7276d341b41ee145",
    "pkdx_id": 225,
    "national_id": 225,
    "name": "Delibird",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/225.png",
    "description": "Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pokémon sharing its food.  Delibird carries its food bundled up in its tail. There once was a famous explorer who managed to reach the peak of the world's highest mountain, thanks to one of these Pokémon sharing its food.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/225.png",
    "types": [
      "flying",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ca7276d341b41ee12c",
    "pkdx_id": 226,
    "national_id": 226,
    "name": "Mantine",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/226.png",
    "description": "On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.  On sunny days, schools of Mantine can be seen elegantly leaping over the sea's waves. This Pokémon is not bothered by the Remoraid that hitches rides.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/226.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ca7276d341b41ee128",
    "pkdx_id": 227,
    "national_id": 227,
    "name": "Skarmory",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/227.png",
    "description": "Skarmory's steel wings become tattered and bashed in from repeated battles. Once a year, the battered wings grow back completely, restoring the cutting edges to their pristine state.  Skarmory is entirely encased in hard, protective armor. This Pokémon flies at close to 190 mph. It slashes foes with its wings that possess swordlike cutting edges.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/227.png",
    "types": [
      "flying",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c27276d341b41ee045",
    "pkdx_id": 228,
    "national_id": 228,
    "name": "Houndour",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/228.png",
    "description": "Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.  Houndour hunt as a coordinated pack. They communicate with each other using a variety of cries to corner their prey. This Pokémon's remarkable teamwork is unparalleled.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/228.png",
    "types": [
      "fire",
      "dark"
    ],
    "evolutions": [
      {
        "level": 24,
        "method": "level_up",
        "to": "Houndoom",
        "_id": "557a72c27276d341b41ee046"
      }
    ]
  },
  {
    "_id": "557a72cb7276d341b41ee14d",
    "pkdx_id": 229,
    "national_id": 229,
    "name": "Houndoom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/229.png",
    "description": "In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.  In a Houndoom pack, the one with its horns raked sharply toward the back serves a leadership role. These Pokémon choose their leader by fighting among themselves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/229.png",
    "types": [
      "fire",
      "dark"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Houndoom-mega",
        "_id": "557a72cb7276d341b41ee14e"
      }
    ]
  },
  {
    "_id": "557a72cb7276d341b41ee149",
    "pkdx_id": 230,
    "national_id": 230,
    "name": "Kingdra",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/230.png",
    "description": "Kingdra sleeps on the seafloor where it is otherwise devoid of life. When a storm arrives, the Pokémon is said to awaken and wander about in search of prey.  Kingdra lives at extreme ocean depths that are otherwise uninhabited. It has long been believed that the yawning of this Pokémon creates spiraling ocean currents.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/230.png",
    "types": [
      "water",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c17276d341b41ee03d",
    "pkdx_id": 231,
    "national_id": 231,
    "name": "Phanpy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/231.png",
    "description": "Phanpy uses its long nose to shower itself. When others gather around, they thoroughly douse each other with water. These Pokémon can be seen drying their soaking-wet bodies at the edge of water.  For its nest, Phanpy digs a vertical pit in the ground at the edge of a river. It marks the area around its nest with its trunk to let the others know that the area has been claimed.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/231.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Donphan",
        "_id": "557a72c17276d341b41ee03e"
      }
    ]
  },
  {
    "_id": "557a72b17276d341b41ede7b",
    "pkdx_id": 232,
    "national_id": 232,
    "name": "Donphan",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/232.png",
    "description": "If Donphan were to tackle with its hard body, even a house could be destroyed. Using its massive strength, the Pokémon helps clear rock and mud slides that block mountain trails.  Donphan's favorite attack is curling its body into a ball, then charging at its foe while rolling at high speed. Once it starts rolling, this Pokémon can't stop very easily.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/232.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c87276d341b41ee10c",
    "pkdx_id": 233,
    "national_id": 233,
    "name": "Porygon2",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/233.png",
    "description": "Porygon2 was created by humans using the power of science. The man-made Pokémon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.  Porygon2 was created by humans using the power of science. The man-made Pokémon has been endowed with artificial intelligence that enables it to learn new gestures and emotions on its own.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/233.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Porygon-z",
        "_id": "557a72c87276d341b41ee10d"
      }
    ]
  },
  {
    "_id": "557a72ca7276d341b41ee130",
    "pkdx_id": 234,
    "national_id": 234,
    "name": "Stantler",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/234.png",
    "description": "Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.  Stantler's magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/234.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0d4",
    "pkdx_id": 235,
    "national_id": 235,
    "name": "Smeargle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/235.png",
    "description": "Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pokémon have been found.  Smeargle marks the boundaries of its territory using a body fluid that leaks out from the tip of its tail. Over 5,000 different marks left by this Pokémon have been found.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/235.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c77276d341b41ee0e8",
    "pkdx_id": 236,
    "national_id": 236,
    "name": "Tyrogue",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/236.png",
    "description": "Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.  Tyrogue becomes stressed out if it does not get to train every day. When raising this Pokémon, the Trainer must establish and uphold various training methods.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/236.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Hitmontop",
        "_id": "557a72c77276d341b41ee0eb"
      },
      {
        "level": 20,
        "method": "level_up",
        "to": "Hitmonlee",
        "_id": "557a72c77276d341b41ee0ea"
      },
      {
        "level": 20,
        "method": "level_up",
        "to": "Hitmonchan",
        "_id": "557a72c77276d341b41ee0e9"
      }
    ]
  },
  {
    "_id": "557a72ca7276d341b41ee137",
    "pkdx_id": 237,
    "national_id": 237,
    "name": "Hitmontop",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/237.png",
    "description": "Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.  Hitmontop spins on its head at high speed, all the while delivering kicks. This technique is a remarkable mix of both offense and defense at the same time. The Pokémon travels faster spinning than it does walking.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/237.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c97276d341b41ee110",
    "pkdx_id": 238,
    "national_id": 238,
    "name": "Smoochum",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/238.png",
    "description": "Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.  Smoochum actively runs about, but also falls quite often. Whenever the chance arrives, it will look for its reflection to make sure its face hasn't become dirty.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/238.png",
    "types": [
      "ice",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Jynx",
        "_id": "557a72c97276d341b41ee111"
      }
    ]
  },
  {
    "_id": "557a72b17276d341b41ede77",
    "pkdx_id": 239,
    "national_id": 239,
    "name": "Elekid",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/239.png",
    "description": "Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pokémon begins swinging its arms in circles to recharge itself.  Elekid stores electricity in its body. If it touches metal and accidentally discharges all its built-up electricity, this Pokémon begins swinging its arms in circles to recharge itself.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/239.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Electabuzz",
        "_id": "557a72b17276d341b41ede78"
      }
    ]
  },
  {
    "_id": "557a72c87276d341b41ee0f3",
    "pkdx_id": 240,
    "national_id": 240,
    "name": "Magby",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/240.png",
    "description": "Magby's state of health is determined by observing the fire it breathes. If the Pokémon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.  Magby's state of health is determined by observing the fire it breathes. If the Pokémon is spouting yellow flames from its mouth, it is in good health. When it is fatigued, black smoke will be mixed in with the flames.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/240.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Magmar",
        "_id": "557a72c87276d341b41ee0f4"
      }
    ]
  },
  {
    "_id": "557a72c97276d341b41ee122",
    "pkdx_id": 241,
    "national_id": 241,
    "name": "Miltank",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/241.png",
    "description": "Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.  Miltank gives over five gallons of milk on a daily basis. Its sweet milk is enjoyed by children and grown-ups alike. People who can't drink milk turn it into yogurt and eat it instead.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/241.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cd7276d341b41ee190",
    "pkdx_id": 242,
    "national_id": 242,
    "name": "Blissey",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/242.png",
    "description": "Blissey senses sadness with its fluffy coat of fur. If it does so, this Pokémon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.  Blissey senses sadness with its fluffy coat of fur. If it does so, this Pokémon will rush over to a sad person, no matter how far away, to share a Lucky Egg that brings a smile to any face.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/242.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cb7276d341b41ee142",
    "pkdx_id": 243,
    "national_id": 243,
    "name": "Raikou",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/243.png",
    "description": "Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.  Raikou embodies the speed of lightning. The roars of this Pokémon send shock waves shuddering through the air and shake the ground as if lightning bolts had come crashing down.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/243.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c97276d341b41ee125",
    "pkdx_id": 244,
    "national_id": 244,
    "name": "Entei",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/244.png",
    "description": "Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.  Entei embodies the passion of magma. This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/244.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c87276d341b41ee0fb",
    "pkdx_id": 245,
    "national_id": 245,
    "name": "Suicune",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/245.png",
    "description": "Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.  Suicune embodies the compassion of a pure spring of water. It runs across the land with gracefulness. This Pokémon has the power to purify dirty water.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/245.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cb7276d341b41ee156",
    "pkdx_id": 246,
    "national_id": 246,
    "name": "Larvitar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/246.png",
    "description": "Larvitar is born deep under the ground. To come up to the surface, this Pokémon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents.  Larvitar is born deep under the ground. To come up to the surface, this Pokémon must eat its way through the soil above. Until it does so, Larvitar cannot see its parents.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/246.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Pupitar",
        "_id": "557a72cb7276d341b41ee157"
      }
    ]
  },
  {
    "_id": "557a72c87276d341b41ee102",
    "pkdx_id": 247,
    "national_id": 247,
    "name": "Pupitar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/247.png",
    "description": "Pupitar creates a gas inside its body that it compresses and forcefully ejects to propel itself like a jet. The body is very durable—it avoids damage even if it hits solid steel.  Pupitar creates a gas inside its body that it compresses and forcefully ejects to propel itself like a jet. The body is very durable—it avoids damage even if it hits solid steel.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/247.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": [
      {
        "level": 55,
        "method": "level_up",
        "to": "Tyranitar",
        "_id": "557a72c87276d341b41ee103"
      }
    ]
  },
  {
    "_id": "557a72c97276d341b41ee11d",
    "pkdx_id": 248,
    "national_id": 248,
    "name": "Tyranitar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/248.png",
    "description": "Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pokémon wanders about in mountains seeking new opponents to fight.  Tyranitar is so overwhelmingly powerful, it can bring down a whole mountain to make its nest. This Pokémon wanders about in mountains seeking new opponents to fight.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/248.png",
    "types": [
      "rock",
      "dark"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Tyranitar-mega",
        "_id": "557a72c97276d341b41ee11e"
      }
    ]
  },
  {
    "_id": "557a72c97276d341b41ee119",
    "pkdx_id": 249,
    "national_id": 249,
    "name": "Lugia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/249.png",
    "description": "Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.  Lugia's wings pack devastating power—a light fluttering of its wings can blow apart regular houses. As a result, this Pokémon chooses to live out of sight deep under the sea.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/249.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c87276d341b41ee0f7",
    "pkdx_id": 250,
    "national_id": 250,
    "name": "Ho-oh",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/250.png",
    "description": "Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.  Ho-Oh's feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/250.png",
    "types": [
      "flying",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ca7276d341b41ee13a",
    "pkdx_id": 251,
    "national_id": 251,
    "name": "Celebi",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/251.png",
    "description": "This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.  This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears, a bright and shining future awaits us.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/251.png",
    "types": [
      "grass",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cb7276d341b41ee152",
    "pkdx_id": 252,
    "national_id": 252,
    "name": "Treecko",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/252.png",
    "description": "Treecko is cool, calm, and collected—it never panics under any situation. If a bigger foe were to glare at this Pokémon, it would glare right back without conceding an inch of ground.  Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/252.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Grovyle",
        "_id": "557a72cb7276d341b41ee153"
      }
    ]
  },
  {
    "_id": "557a72ca7276d341b41ee133",
    "pkdx_id": 253,
    "national_id": 253,
    "name": "Grovyle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/253.png",
    "description": "This Pokémon adeptly flies from branch to branch in trees. In a forest, no Pokémon can ever hope to catch a fleeing Grovyle however fast they may be.  The leaves growing out of Grovyle's body are convenient for camouflaging it from enemies in the forest. This Pokémon is a master at climbing trees in jungles.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/253.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Sceptile",
        "_id": "557a72ca7276d341b41ee134"
      }
    ]
  },
  {
    "_id": "557a72cd7276d341b41ee18d",
    "pkdx_id": 254,
    "national_id": 254,
    "name": "Sceptile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/254.png",
    "description": "Sceptile has seeds growing on its back. They are said to be bursting with nutrients that revitalize trees. This Pokémon raises the trees in a forest with loving care.  The leaves growing on Sceptile's body are very sharp edged. This Pokémon is very agile—it leaps all over the branches of trees and jumps on its foe from above or behind.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/254.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ca7276d341b41ee13e",
    "pkdx_id": 255,
    "national_id": 255,
    "name": "Torchic",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/255.png",
    "description": "Torchic has a place inside its body where it keeps its flame. Give it a hug—it will be glowing with warmth. This Pokémon is covered all over by a fluffy coat of down.  Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees Fahrenheit, including fireballs that leave the foe scorched black.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/255.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Combusken",
        "_id": "557a72ca7276d341b41ee13f"
      }
    ]
  },
  {
    "_id": "557a72bd7276d341b41edfc9",
    "pkdx_id": 256,
    "national_id": 256,
    "name": "Combusken",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/256.png",
    "description": "Combusken battles with the intensely hot flames it spews from its beak and with outstandingly destructive kicks. This Pokémon's cry is very loud and distracting.  Combusken toughens up its legs and thighs by running through fields and mountains. This Pokémon's legs possess both speed and power, enabling it to dole out 10 kicks in one second.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/256.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Blaziken",
        "_id": "557a72bd7276d341b41edfca"
      }
    ]
  },
  {
    "_id": "557a72cd7276d341b41ee184",
    "pkdx_id": 257,
    "national_id": 257,
    "name": "Blaziken",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/257.png",
    "description": "Blaziken has incredibly strong legs—it can easily clear a 30-story building in one leap. This Pokémon's blazing punches leave its foes scorched and blackened.  In battle, Blaziken blows out intense flames from its wrists and attacks foes courageously. The stronger the foe, the more intensely this Pokémon's wrists burn.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/257.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Blaziken-mega",
        "_id": "557a72cd7276d341b41ee185"
      }
    ]
  },
  {
    "_id": "557a72c87276d341b41ee0fe",
    "pkdx_id": 258,
    "national_id": 258,
    "name": "Mudkip",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/258.png",
    "description": "In water, Mudkip breathes using the gills on its cheeks. If it is faced with a tight situation in battle, this Pokémon will unleash its amazing power—it can crush rocks bigger than itself.  The fin on Mudkip's head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/258.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Marshtomp",
        "_id": "557a72c87276d341b41ee0ff"
      }
    ]
  },
  {
    "_id": "557a72cd7276d341b41ee197",
    "pkdx_id": 259,
    "national_id": 259,
    "name": "Marshtomp",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/259.png",
    "description": "Marshtomp is much faster at traveling through mud than it is at swimming. This Pokémon's hindquarters exhibit obvious development, giving it the ability to walk on just its hind legs.  The surface of Marshtomp's body is enveloped by a thin, sticky film that enables it to live on land. This Pokémon plays in mud on beaches when the ocean tide is low.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/259.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Swampert",
        "_id": "557a72cd7276d341b41ee198"
      }
    ]
  },
  {
    "_id": "557a72ce7276d341b41ee1b2",
    "pkdx_id": 260,
    "national_id": 260,
    "name": "Swampert",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/260.png",
    "description": "Swampert predicts storms by sensing subtle differences in the sounds of waves and tidal winds with its fins. If a storm is approaching, it piles up boulders to protect itself.  Swampert is very strong. It has enough power to easily drag a boulder weighing more than a ton. This Pokémon also has powerful vision that lets it see even in murky water.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/260.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cd7276d341b41ee189",
    "pkdx_id": 261,
    "national_id": 261,
    "name": "Poochyena",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/261.png",
    "description": "Poochyena is an omnivore—it will eat anything. A distinguishing feature is how large its fangs are compared to its body. This Pokémon tries to intimidate its foes by making the hair on its tail bristle out.  At first sight, Poochyena takes a bite at anything that moves. This Pokémon chases after prey until the victim becomes exhausted. However, it may turn tail if the prey strikes back.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/261.png",
    "types": [
      "dark"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Mightyena",
        "_id": "557a72cd7276d341b41ee18a"
      }
    ]
  },
  {
    "_id": "557a72c37276d341b41ee073",
    "pkdx_id": 262,
    "national_id": 262,
    "name": "Mightyena",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/262.png",
    "description": "Mightyena travel and act as a pack in the wild. The memory of its life in the wild compels the Pokémon to obey only those Trainers that it recognizes to possess superior skill.  Mightyena gives obvious signals when it is preparing to attack. It starts to growl deeply and then flattens its body. This Pokémon will bite savagely with its sharply pointed fangs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/262.png",
    "types": [
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41edfea",
    "pkdx_id": 263,
    "national_id": 263,
    "name": "Zigzagoon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/263.png",
    "description": "The hair on Zigzagoon's back is bristly. It rubs the hard back hair against trees to leave its territorial markings. This Pokémon may play dead to fool foes in battle.  Zigzagoon restlessly wanders everywhere at all times. This Pokémon does so because it is very curious. It becomes interested in anything that it happens to see.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/263.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Linoone",
        "_id": "557a72bf7276d341b41edfeb"
      }
    ]
  },
  {
    "_id": "557a72be7276d341b41edfe7",
    "pkdx_id": 264,
    "national_id": 264,
    "name": "Linoone",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/264.png",
    "description": "When hunting, Linoone will make a beeline straight for the prey at a full run. While this Pokémon is capable of topping 60 mph, it has to come to a screeching halt before it can turn.  Linoone always runs full speed and only in straight lines. If facing an obstacle, it makes a right-angle turn to evade it. This Pokémon is very challenged by gently curving roads.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/264.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cc7276d341b41ee177",
    "pkdx_id": 265,
    "national_id": 265,
    "name": "Wurmple",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/265.png",
    "description": "Wurmple is targeted by Swellow as prey. This Pokémon will try to resist by pointing the spikes on its rear at the attacking predator. It will weaken the foe by leaking poison from the spikes.  Using the spikes on its rear end, Wurmple peels the bark off trees and feeds on the sap that oozes out. This Pokémon's feet are tipped with suction pads that allow it to cling to glass without slipping.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/265.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 7,
        "method": "level_up",
        "to": "Silcoon",
        "_id": "557a72cc7276d341b41ee179"
      },
      {
        "level": 7,
        "method": "level_up",
        "to": "Cascoon",
        "_id": "557a72cc7276d341b41ee178"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee17c",
    "pkdx_id": 266,
    "national_id": 266,
    "name": "Silcoon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/266.png",
    "description": "Silcoon was thought to endure hunger and not consume anything before its evolution. However, it is now thought that this Pokémon slakes its thirst by drinking rainwater that collects on its silk.  Silcoon tethers itself to a tree branch using silk to keep from falling. There, this Pokémon hangs quietly while it awaits evolution. It peers out of the silk cocoon through a small hole.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/266.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 10,
        "method": "level_up",
        "to": "Beautifly",
        "_id": "557a72cc7276d341b41ee17d"
      }
    ]
  },
  {
    "_id": "557a72cd7276d341b41ee180",
    "pkdx_id": 267,
    "national_id": 267,
    "name": "Beautifly",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/267.png",
    "description": "Beautifly has a long mouth like a coiled needle, which is very convenient for collecting pollen from flowers. This Pokémon rides the spring winds as it flits around gathering pollen.  Beautifly's favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window. Beautifly is sure to come looking for pollen.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/267.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cd7276d341b41ee19c",
    "pkdx_id": 268,
    "national_id": 268,
    "name": "Cascoon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/268.png",
    "description": "If it is attacked, Cascoon remains motionless however badly it may be hurt. It does so because if it were to move, its body would be weak upon evolution. This Pokémon will also not forget the pain it endured.  Cascoon makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This Pokémon prepares for its evolution inside the cocoon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/268.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 10,
        "method": "level_up",
        "to": "Dustox",
        "_id": "557a72cd7276d341b41ee19d"
      }
    ]
  },
  {
    "_id": "557a72ce7276d341b41ee1b6",
    "pkdx_id": 269,
    "national_id": 269,
    "name": "Dustox",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/269.png",
    "description": "When Dustox flaps its wings, a fine dust is scattered all over. This dust is actually a powerful poison that will even make a pro wrestler sick. This Pokémon searches for food using its antennae like radar.  Dustox is instinctively drawn to light. Swarms of this Pokémon are attracted by the bright lights of cities, where they wreak havoc by stripping the leaves off roadside trees for food.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/269.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72be7276d341b41edfd9",
    "pkdx_id": 270,
    "national_id": 270,
    "name": "Lotad",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/270.png",
    "description": "Lotad is said to have dwelled on land before. However, this Pokémon is thought to have returned to water because the leaf on its head grew large and heavy. It now lives by floating atop the water.  Lotad live in ponds and lakes, where they float on the surface. It grows weak if its broad leaf dies. On rare occasions, this Pokémon travels on land in search of clean water.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/270.png",
    "types": [
      "water",
      "grass"
    ],
    "evolutions": [
      {
        "level": 14,
        "method": "level_up",
        "to": "Lombre",
        "_id": "557a72be7276d341b41edfda"
      }
    ]
  },
  {
    "_id": "557a72c47276d341b41ee082",
    "pkdx_id": 271,
    "national_id": 271,
    "name": "Lombre",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/271.png",
    "description": "Lombre's entire body is covered by a slippery, slimy film. It feels horribly unpleasant to be touched by this Pokémon's hands. Lombre is often mistaken for a human child.  Lombre is nocturnal—it will get active after dusk. It is also a mischief maker. When this Pokémon spots anglers, it tugs on their fishing lines from beneath the surface and enjoys their consternation.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/271.png",
    "types": [
      "water",
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Ludicolo",
        "_id": "557a72c47276d341b41ee083"
      }
    ]
  },
  {
    "_id": "557a72ce7276d341b41ee1a5",
    "pkdx_id": 272,
    "national_id": 272,
    "name": "Ludicolo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/272.png",
    "description": "Upon hearing an upbeat and cheerful rhythm, the cells in Ludicolo's body become very energetic and active. Even in battle, this Pokémon will exhibit an amazing amount of power.  Ludicolo begins dancing as soon as it hears cheerful, festive music. This Pokémon is said to appear when it hears the singing of children on hiking outings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/272.png",
    "types": [
      "water",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d27276d341b41ee221",
    "pkdx_id": 273,
    "national_id": 273,
    "name": "Seedot",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/273.png",
    "description": "Seedot looks exactly like an acorn when it is dangling from a tree branch. It startles other Pokémon by suddenly moving. This Pokémon polishes its body once a day using leaves.  Seedot attaches itself to a tree branch using the top of its head. It sucks moisture from the tree while hanging off the branch. The more water it drinks, the glossier this Pokémon's body becomes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/273.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 14,
        "method": "level_up",
        "to": "Nuzleaf",
        "_id": "557a72d27276d341b41ee222"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee16b",
    "pkdx_id": 274,
    "national_id": 274,
    "name": "Nuzleaf",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/274.png",
    "description": "This Pokémon pulls out the leaf on its head and makes a flute with it. The sound of Nuzleaf's flute strikes fear and uncertainty in the hearts of people lost in a forest.  Nuzleaf live in densely overgrown forests. They occasionally venture out of the forest to startle people. This Pokémon dislikes having its long nose pinched.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/274.png",
    "types": [
      "grass",
      "dark"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Shiftry",
        "_id": "557a72cc7276d341b41ee16c"
      }
    ]
  },
  {
    "_id": "557a72d27276d341b41ee229",
    "pkdx_id": 275,
    "national_id": 275,
    "name": "Shiftry",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/275.png",
    "description": "Shiftry's large fans generate awesome gusts of wind at a speed close to 100 feet per second. The whipped-up wind blows anything away. This Pokémon chooses to live quietly deep in forests.  Shiftry is a mysterious Pokémon that is said to live atop towering trees dating back over a thousand years. It creates terrific windstorms with the fans it holds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/275.png",
    "types": [
      "grass",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bf7276d341b41ee002",
    "pkdx_id": 276,
    "national_id": 276,
    "name": "Taillow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/276.png",
    "description": "Taillow is young—it has only just left its nest. As a result, it sometimes becomes lonesome and cries at night. This Pokémon feeds on Wurmple that live in forests.  Taillow courageously stands its ground against foes, however strong they may be. This gutsy Pokémon will remain defiant even after a loss. On the other hand, it cries loudly if it becomes hungry.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/276.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Swellow",
        "_id": "557a72bf7276d341b41ee003"
      }
    ]
  },
  {
    "_id": "557a72b37276d341b41edea0",
    "pkdx_id": 277,
    "national_id": 277,
    "name": "Swellow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/277.png",
    "description": "Swellow is very conscientious about the upkeep of its glossy wings. Once two Swellow are gathered, they diligently take care of cleaning each other's wings.  Swellow flies high above our heads, making graceful arcs in the sky. This Pokémon dives at a steep angle as soon as it spots its prey. The hapless prey is tightly grasped by Swellow's clawed feet, preventing escape.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/277.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ce7276d341b41ee1ba",
    "pkdx_id": 278,
    "national_id": 278,
    "name": "Wingull",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/278.png",
    "description": "Wingull rides updrafts rising from the sea by extending its long and narrow wings to glide. This Pokémon's long beak is useful for catching prey.  Wingull has the habit of carrying prey and valuables in its beak and hiding them in all sorts of locations. This Pokémon rides the winds and flies as if it were skating across the sky.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/278.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Pelipper",
        "_id": "557a72ce7276d341b41ee1bb"
      }
    ]
  },
  {
    "_id": "557a72ce7276d341b41ee1ae",
    "pkdx_id": 279,
    "national_id": 279,
    "name": "Pelipper",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/279.png",
    "description": "Pelipper searches for food while in flight by skimming the wave tops. This Pokémon dips its large bill in the sea to scoop up food, then swallows everything in one big gulp.  Pelipper is a flying transporter that carries small Pokémon and eggs inside its massive bill. This Pokémon builds its nest on steep cliffs facing the sea.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/279.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72ce7276d341b41ee1a0",
    "pkdx_id": 280,
    "national_id": 280,
    "name": "Ralts",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/280.png",
    "description": "Ralts has the ability to sense the emotions of people. If its Trainer is in a cheerful mood, this Pokémon grows cheerful and joyous in the same way.  Ralts senses the emotions of people using the horns on its head. This Pokémon rarely appears before people. But when it does, it draws closer if it senses that the person has a positive disposition.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/280.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Kirlia",
        "_id": "557a72ce7276d341b41ee1a1"
      }
    ]
  },
  {
    "_id": "557a72c17276d341b41ee033",
    "pkdx_id": 281,
    "national_id": 281,
    "name": "Kirlia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/281.png",
    "description": "Kirlia uses the horns on its head to amplify its psychokinetic power. When the Pokémon uses its power, the air around it becomes distorted, creating mirages of nonexistent scenery.  It is said that a Kirlia that is exposed to the positive emotions of its Trainer grows beautiful. This Pokémon controls psychokinetic powers with its highly developed brain.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/281.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Gardevoir",
        "_id": "557a72c17276d341b41ee035"
      },
      {
        "method": "stone",
        "to": "Gallade",
        "_id": "557a72c17276d341b41ee034"
      }
    ]
  },
  {
    "_id": "557a72ce7276d341b41ee1a9",
    "pkdx_id": 282,
    "national_id": 282,
    "name": "Gardevoir",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/282.png",
    "description": "Gardevoir has the psychokinetic power to distort the dimensions and create a small black hole. This Pokémon will try to protect its Trainer even at the risk of its own life.  Gardevoir has the ability to read the future. If it senses impending danger to its Trainer, this Pokémon is said to unleash its psychokinetic energy at full power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/282.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Gardevoir-mega",
        "_id": "557a72ce7276d341b41ee1aa"
      }
    ]
  },
  {
    "_id": "557a72cf7276d341b41ee1cf",
    "pkdx_id": 283,
    "national_id": 283,
    "name": "Surskit",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/283.png",
    "description": "If Surskit senses danger, it secretes a thick, sugary syrup from the tip of its head. There are some Pokémon that love eating this syrup.  From the tips of its feet, Surskit secretes an oil that enables it to walk on water as if it were skating. This Pokémon feeds on microscopic organisms in ponds and lakes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/283.png",
    "types": [
      "bug",
      "water"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Masquerain",
        "_id": "557a72cf7276d341b41ee1d0"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee167",
    "pkdx_id": 284,
    "national_id": 284,
    "name": "Masquerain",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/284.png",
    "description": "Masquerain's antennas have eyelike patterns that usually give it an angry look. If the “eyes\" are droopy and appear sad, it is said to be a sign that a heavy rainfall is on its way.  Masquerain intimidates enemies with the eyelike patterns on its antennas. This Pokémon flaps its four wings to freely fly in any direction—even sideways and backwards—as if it were a helicopter.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/284.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cd7276d341b41ee193",
    "pkdx_id": 285,
    "national_id": 285,
    "name": "Shroomish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/285.png",
    "description": "If Shroomish senses danger, it shakes its body and scatters spores from the top of its head. This Pokémon's spores are so toxic, they make trees and weeds wilt.  Shroomish live in damp soil in the dark depths of forests. They are often found keeping still under fallen leaves. This Pokémon feeds on compost that is made up of fallen, rotted leaves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/285.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 23,
        "method": "level_up",
        "to": "Breloom",
        "_id": "557a72cd7276d341b41ee194"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee163",
    "pkdx_id": 286,
    "national_id": 286,
    "name": "Breloom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/286.png",
    "description": "The seeds ringing Breloom's tail are made of hardened toxic spores. It is horrible to eat the seeds. Just taking a bite of this Pokémon's seed will cause your stomach to rumble.  Breloom closes in on its foe with light and sprightly footwork, then throws punches with its stretchy arms. This Pokémon's fighting technique puts boxers to shame.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/286.png",
    "types": [
      "fighting",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d27276d341b41ee21d",
    "pkdx_id": 287,
    "national_id": 287,
    "name": "Slakoth",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/287.png",
    "description": "Slakoth's heart beats just once a minute. Whatever happens, it is content to loaf around motionless. It is rare to see this Pokémon in motion.  Slakoth lolls around for over 20 hours every day. Because it moves so little, it does not need much food. This Pokémon's sole daily meal consists of just three leaves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/287.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Vigoroth",
        "_id": "557a72d27276d341b41ee21e"
      }
    ]
  },
  {
    "_id": "557a72d27276d341b41ee216",
    "pkdx_id": 288,
    "national_id": 288,
    "name": "Vigoroth",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/288.png",
    "description": "Vigoroth is simply incapable of remaining still. Even when it tries to sleep, the blood in its veins grows agitated, compelling this Pokémon to run wild throughout the jungle before it can settle down.  Vigoroth is always itching and agitated to go on a wild rampage. It simply can't tolerate sitting still for even a minute. This Pokémon's stress level rises if it can't be moving constantly.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/288.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Slaking",
        "_id": "557a72d27276d341b41ee217"
      }
    ]
  },
  {
    "_id": "557a72d27276d341b41ee21a",
    "pkdx_id": 289,
    "national_id": 289,
    "name": "Slaking",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/289.png",
    "description": "Wherever Slaking live, rings of over a yard in diameter appear in grassy fields. They are made by the Pokémon as it eats all the grass within reach while lying prone on the ground.  Slaking spends all day lying down and lolling about. It eats grass growing within its reach. If it eats all the grass it can reach, this Pokémon reluctantly moves to another spot.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/289.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72bd7276d341b41edfaf",
    "pkdx_id": 290,
    "national_id": 290,
    "name": "Nincada",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/290.png",
    "description": "Nincada lives underground. It uses its sharp claws to carve the roots of trees and absorb moisture and nutrients. This Pokémon can't withstand bright sunlight so avoids it.  Nincada lives underground for many years in complete darkness. This Pokémon absorbs nutrients from the roots of trees. It stays motionless as it waits for evolution.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/290.png",
    "types": [
      "ground",
      "bug"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "other",
        "to": "Ninjask",
        "_id": "557a72bd7276d341b41edfb1"
      },
      {
        "method": "other",
        "to": "Shedinja",
        "_id": "557a72bd7276d341b41edfb0"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee170",
    "pkdx_id": 291,
    "national_id": 291,
    "name": "Ninjask",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/291.png",
    "description": "If Ninjask is not trained properly, it will refuse to obey the Trainer and cry loudly continuously. Because of this quality, this Pokémon is said to be one that puts the Trainer's abilities to the test.  Ninjask moves around at such a high speed that it cannot be seen, even while its crying can be clearly heard. For that reason, this Pokémon was long believed to be invisible.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/291.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d37276d341b41ee231",
    "pkdx_id": 292,
    "national_id": 292,
    "name": "Shedinja",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/292.png",
    "description": "Shedinja is a peculiar Pokémon. It seems to appear unsought in a Poké Ball after a Nincada evolves. This bizarre Pokémon is entirely immobile—it doesn't even breathe.  Shedinja's hard body doesn't move—not even a twitch. In fact, its body appears to be merely a hollow shell. It is believed that this Pokémon will steal the spirit of anyone peering into its hollow body from its back.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/292.png",
    "types": [
      "bug",
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72c07276d341b41ee01d",
    "pkdx_id": 293,
    "national_id": 293,
    "name": "Whismur",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/293.png",
    "description": "Whismur is very timid. If it starts to cry loudly, it becomes startled by its own crying and cries even harder. When it finally stops crying, the Pokémon goes to sleep, all tired out.  Normally, Whismur's voice is very quiet—it is barely audible even if one is paying close attention. However, if this Pokémon senses danger, it starts crying at an earsplitting volume.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/293.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Loudred",
        "_id": "557a72c07276d341b41ee01e"
      }
    ]
  },
  {
    "_id": "557a72d27276d341b41ee225",
    "pkdx_id": 294,
    "national_id": 294,
    "name": "Loudred",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/294.png",
    "description": "Loudred shouts while stamping its feet. After it finishes shouting, this Pokémon becomes incapable of hearing anything for a while. This is considered to be a weak point.  Loudred's bellowing can completely decimate a wood-frame house. It uses its voice to punish its foes. This Pokémon's round ears serve as loudspeakers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/294.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Exploud",
        "_id": "557a72d27276d341b41ee226"
      }
    ]
  },
  {
    "_id": "557a72cc7276d341b41ee174",
    "pkdx_id": 295,
    "national_id": 295,
    "name": "Exploud",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/295.png",
    "description": "Exploud communicates its feelings to the others by emitting whistle-like sounds from the tubes on its body. This Pokémon only raises its voice when it is in battle.  Exploud triggers earthquakes with the tremors it creates by bellowing. If this Pokémon violently inhales from the ports on its body, it's a sign that it is preparing to let loose a huge bellow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/295.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72d27276d341b41ee22d",
    "pkdx_id": 296,
    "national_id": 296,
    "name": "Makuhita",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/296.png",
    "description": "Makuhita has a tireless spirit—it will never give up hope. It eats a lot of food, gets plenty of sleep, and it trains very rigorously. By living that way, this Pokémon packs its body with energy.  Makuhita is tenacious—it will keep getting up and attacking its foe however many times it is knocked down. Every time it gets back up, this Pokémon stores more energy in its body for evolving.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/296.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 24,
        "method": "level_up",
        "to": "Hariyama",
        "_id": "557a72d27276d341b41ee22e"
      }
    ]
  },
  {
    "_id": "557a72c17276d341b41ee030",
    "pkdx_id": 297,
    "national_id": 297,
    "name": "Hariyama",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/297.png",
    "description": "Hariyama's thick body may appear fat, but it is actually a hunk of solid muscle. If this Pokémon bears down and tightens all its muscles, its body becomes as hard as a rock.  Hariyama practices its straight-arm slaps in any number of locations. One hit of this Pokémon's powerful, openhanded, straight-arm punches could snap a telephone pole in two.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/297.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a72cf7276d341b41ee1c7",
    "pkdx_id": 298,
    "national_id": 298,
    "name": "Azurill",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/298.png",
    "description": "Azurill's tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow. Azurill can be seen bouncing and playing on its big, rubbery tail.  Azurill spins its tail as if it were a lasso, then hurls it far. The momentum of the throw sends its body flying, too. Using this unique action, one of these Pokémon managed to hurl itself a record 33 feet.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/298.png",
    "types": [
      "normal",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Marill",
        "_id": "557a72cf7276d341b41ee1c8"
      }
    ]
  },
  {
    "_id": "557a72d07276d341b41ee1e8",
    "pkdx_id": 299,
    "national_id": 299,
    "name": "Nosepass",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/299.png",
    "description": "Nosepass had been said to be completely unmoving, with its magnetic nose pointed due north. However, close observation has revealed that the Pokémon actually moves by a little over 3/8 of an inch every year.  Nosepass's magnetic nose is always pointed to the north. If two of these Pokémon meet, they cannot turn their faces to each other when they are close because their magnetic noses repel one another.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/299.png",
    "types": [
      "rock"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Probopass",
        "_id": "557a72d07276d341b41ee1e9"
      }
    ]
  },
  {
    "_id": "557a73771aa70d44b5aba262",
    "pkdx_id": 300,
    "national_id": 300,
    "name": "Skitty",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/300.png",
    "description": "Skitty is known to chase around playfully after its own tail. In the wild, this Pokémon lives in holes in the trees of forests. It is very popular as a pet because of its adorable looks.  Skitty has the habit of becoming fascinated by moving objects and chasing them around. This Pokémon is known to chase after its own tail and become dizzy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/300.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Delcatty",
        "_id": "557a73771aa70d44b5aba263"
      }
    ]
  },
  {
    "_id": "557a73601aa70d44b5ab9fbb",
    "pkdx_id": 301,
    "national_id": 301,
    "name": "Delcatty",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/301.png",
    "description": "Delcatty sleeps anywhere it wants without keeping a permanent nest. If other Pokémon approach it as it sleeps, this Pokémon will never fight—it will just move away somewhere else.  Delcatty prefers to live an unfettered existence in which it can do as it pleases at its own pace. Because this Pokémon eats and sleeps whenever it decides, its daily routines are completely random.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/301.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73611aa70d44b5ab9fc3",
    "pkdx_id": 302,
    "national_id": 302,
    "name": "Sableye",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/302.png",
    "description": "Sableye digs the ground with sharpened claws to find rocks that it eats. Substances in the eaten rocks crystallize and rise up to the Pokémon's body surface.  Sableye lead quiet lives deep inside caverns. They are feared, however, because these Pokémon are thought to steal the spirits of people when their eyes burn with a sinister glow in the darkness.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/302.png",
    "types": [
      "ghost",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9fe6",
    "pkdx_id": 303,
    "national_id": 303,
    "name": "Mawile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/303.png",
    "description": "Don't be taken in by this Pokémon's cute face—it's very dangerous. Mawile fools the foe into letting down its guard, then chomps down with its massive jaws. The steel jaws are really horns that have been transformed.  Mawile's huge jaws are actually steel horns that have been transformed. Its docile-looking face serves to lull its foe into letting down its guard. When the foe least expects it, Mawile chomps it with its gaping jaws.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/303.png",
    "types": [
      "steel",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Mawile-mega",
        "_id": "557a73621aa70d44b5ab9fe7"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fd3",
    "pkdx_id": 304,
    "national_id": 304,
    "name": "Aron",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/304.png",
    "description": "Aron has a body of steel. With one all-out charge, this Pokémon can demolish even a heavy dump truck. The destroyed dump truck then becomes a handy meal for the Pokémon.  This Pokémon has a body of steel. To make its body, Aron feeds on iron ore that it digs from mountains. Occasionally, it causes major trouble by eating bridges and rails.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/304.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Lairon",
        "_id": "557a73611aa70d44b5ab9fd4"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fc7",
    "pkdx_id": 305,
    "national_id": 305,
    "name": "Lairon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/305.png",
    "description": "Lairon feeds on iron contained in rocks and water. It makes its nest on mountains where iron ore is buried. As a result, the Pokémon often clashes with humans mining the iron ore.  Lairon tempers its steel body by drinking highly nutritious mineral springwater until it is bloated. This Pokémon makes its nest close to springs of delicious water.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/305.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": [
      {
        "level": 42,
        "method": "level_up",
        "to": "Aggron",
        "_id": "557a73611aa70d44b5ab9fc8"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fd8",
    "pkdx_id": 306,
    "national_id": 306,
    "name": "Aggron",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/306.png",
    "description": "Aggron is protective of its environment. If its mountain is ravaged by a landslide or a fire, this Pokémon will haul topsoil to the area, plant trees, and beautifully restore its own territory.  Aggron claims an entire mountain as its own territory. It mercilessly beats up anything that violates its environment. This Pokémon vigilantly patrols its territory at all times.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/306.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Aggron-mega",
        "_id": "557a73611aa70d44b5ab9fd9"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fdd",
    "pkdx_id": 307,
    "national_id": 307,
    "name": "Meditite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/307.png",
    "description": "Meditite heightens its inner energy through meditation. It survives on just one berry a day. Minimal eating is another aspect of this Pokémon's training.  Meditite undertakes rigorous mental training deep in the mountains. However, whenever it meditates, this Pokémon always loses its concentration and focus. As a result, its training never ends.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/307.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Medicham",
        "_id": "557a73611aa70d44b5ab9fde"
      }
    ]
  },
  {
    "_id": "557a73601aa70d44b5ab9fbe",
    "pkdx_id": 308,
    "national_id": 308,
    "name": "Medicham",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/308.png",
    "description": "Through the power of meditation, Medicham developed its sixth sense. It gained the ability to use psychokinetic powers. This Pokémon is known to meditate for a whole month without eating.  It is said that through meditation, Medicham heightens energy inside its body and sharpens its sixth sense. This Pokémon hides its presence by merging itself with fields and mountains.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/308.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Medicham-mega",
        "_id": "557a73601aa70d44b5ab9fbf"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fcc",
    "pkdx_id": 309,
    "national_id": 309,
    "name": "Electrike",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/309.png",
    "description": "Electrike runs faster than the human eye can follow. The friction from running is converted into electricity, which is then stored in this Pokémon's fur.  Electrike stores electricity in its long body hair. This Pokémon stimulates its leg muscles with electric charges. These jolts of power give its legs explosive acceleration performance.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/309.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 26,
        "method": "level_up",
        "to": "Manectric",
        "_id": "557a73611aa70d44b5ab9fcd"
      }
    ]
  },
  {
    "_id": "557a73641aa70d44b5aba025",
    "pkdx_id": 310,
    "national_id": 310,
    "name": "Manectric",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/310.png",
    "description": "Manectric discharges strong electricity from its mane. The mane is used for collecting electricity in the atmosphere. This Pokémon creates thunderclouds above its head.  Manectric is constantly discharging electricity from its mane. The sparks sometimes ignite forest fires. When it enters a battle, this Pokémon creates thunderclouds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/310.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Manectric-mega",
        "_id": "557a73641aa70d44b5aba026"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fd0",
    "pkdx_id": 311,
    "national_id": 311,
    "name": "Plusle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/311.png",
    "description": "When Plusle is cheering on its partner, it flashes with electric sparks from all over its body. If its partner loses, this Pokémon cries loudly.  Plusle always acts as a cheerleader for its partners. Whenever a teammate puts out a good effort in battle, this Pokémon shorts out its body to create the crackling noises of sparks to show its joy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/311.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73771aa70d44b5aba251",
    "pkdx_id": 312,
    "national_id": 312,
    "name": "Minun",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/312.png",
    "description": "Minun loves to cheer on its partner in battle. It gives off sparks from its body while it is doing so. If its partner is in trouble, this Pokémon gives off increasing amounts of sparks.  Minun is more concerned about cheering on its partners than its own safety. It shorts out the electricity in its body to create brilliant showers of sparks to cheer on its teammates.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/312.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73651aa70d44b5aba052",
    "pkdx_id": 313,
    "national_id": 313,
    "name": "Volbeat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/313.png",
    "description": "Volbeat's tail glows like a lightbulb. With other Volbeat, it uses its tail to draw geometric shapes in the night sky. This Pokémon loves the sweet aroma given off by Illumise.  With the arrival of night, Volbeat emits light from its tail. It communicates with others by adjusting the intensity and flashing of its light. This Pokémon is attracted by the sweet aroma of Illumise.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/313.png",
    "types": [
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73771aa70d44b5aba258",
    "pkdx_id": 314,
    "national_id": 314,
    "name": "Illumise",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/314.png",
    "description": "Illumise leads a flight of illuminated Volbeat to draw signs in the night sky. This Pokémon is said to earn greater respect from its peers by composing more complex designs in the sky.  Illumise attracts a swarm of Volbeat using a sweet fragrance. Once the Volbeat have gathered, this Pokémon leads the lit-up swarm in drawing geometric designs on the canvas of the night sky.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/314.png",
    "types": [
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9ff6",
    "pkdx_id": 315,
    "national_id": 315,
    "name": "Roselia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/315.png",
    "description": "On extremely rare occasions, a Roselia is said to appear with its flowers in unusual colors. The thorns on this Pokémon's head contain a vicious poison.  Roselia shoots sharp thorns as projectiles at any opponent that tries to steal the flowers on its arms. The aroma of this Pokémon brings serenity to living things.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/315.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Roserade",
        "_id": "557a73621aa70d44b5ab9ff7"
      }
    ]
  },
  {
    "_id": "557a73761aa70d44b5aba238",
    "pkdx_id": 316,
    "national_id": 316,
    "name": "Gulpin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/316.png",
    "description": "Most of Gulpin's body is made up of its stomach—its heart and brain are very small in comparison. This Pokémon's stomach contains special enzymes that dissolve anything.  Virtually all of Gulpin's body is its stomach. As a result, it can swallow something its own size. This Pokémon's stomach contains a special fluid that digests anything.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/316.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 26,
        "method": "level_up",
        "to": "Swalot",
        "_id": "557a73761aa70d44b5aba239"
      }
    ]
  },
  {
    "_id": "557a73771aa70d44b5aba25f",
    "pkdx_id": 317,
    "national_id": 317,
    "name": "Swalot",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/317.png",
    "description": "Swalot has no teeth, so what it eats, it swallows whole, no matter what. Its cavernous mouth yawns widely. An automobile tire could easily fit inside this Pokémon's mouth.  When Swalot spots prey, it spurts out a hideously toxic fluid from its pores and sprays the target. Once the prey has weakened, this Pokémon gulps it down whole with its cavernous mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/317.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9ffe",
    "pkdx_id": 318,
    "national_id": 318,
    "name": "Carvanha",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/318.png",
    "description": "If anything invades Carvanha's territory, it will swarm and tear at the intruder with its pointed fangs. On its own, however, this Pokémon turns suddenly timid.  Carvanha's strongly developed jaws and its sharply pointed fangs pack the destructive power to rip out boat hulls. Many boats have been attacked and sunk by this Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/318.png",
    "types": [
      "water",
      "dark"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Sharpedo",
        "_id": "557a73621aa70d44b5ab9fff"
      }
    ]
  },
  {
    "_id": "557a73611aa70d44b5ab9fe2",
    "pkdx_id": 319,
    "national_id": 319,
    "name": "Sharpedo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/319.png",
    "description": "Sharpedo can swim at speeds of up to 75 mph by jetting seawater out of its backside. This Pokémon's drawback is its inability to swim long distances.  Nicknamed “the bully of the sea,\" Sharpedo is widely feared. Its cruel fangs grow back immediately if they snap off. Just one of these Pokémon can thoroughly tear apart a supertanker.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/319.png",
    "types": [
      "water",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73631aa70d44b5aba006",
    "pkdx_id": 320,
    "national_id": 320,
    "name": "Wailmer",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/320.png",
    "description": "Wailmer can store water inside its body to transform itself into a ball for bouncing around on the ground. By filling itself up with more water, this Pokémon can elevate the height of its bounces.  Wailmer's nostrils are located above its eyes. This playful Pokémon loves to startle people by forcefully snorting out seawater it stores inside its body out of its nostrils.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/320.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Wailord",
        "_id": "557a73631aa70d44b5aba007"
      }
    ]
  },
  {
    "_id": "557a73661aa70d44b5aba062",
    "pkdx_id": 321,
    "national_id": 321,
    "name": "Wailord",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/321.png",
    "description": "When chasing prey, Wailord herds them by leaping out of the water and making a humongous splash. It is breathtaking to see this Pokémon leaping out of the sea with others in its pod.  Wailord is the largest of all identified Pokémon up to now. This giant Pokémon swims languorously in the vast open sea, eating massive amounts of food at once with its enormous mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/321.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73631aa70d44b5aba012",
    "pkdx_id": 322,
    "national_id": 322,
    "name": "Numel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/322.png",
    "description": "Numel stores magma of almost 2,200 degrees Fahrenheit within its body. If it gets wet, the magma cools and hardens. In that event, the Pokémon's body grows heavy and its movements become sluggish.  Numel is extremely dull witted—it doesn't notice being hit. However, it can't stand hunger for even a second. This Pokémon's body is a seething cauldron of boiling magma.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/322.png",
    "types": [
      "ground",
      "fire"
    ],
    "evolutions": [
      {
        "level": 33,
        "method": "level_up",
        "to": "Camerupt",
        "_id": "557a73631aa70d44b5aba013"
      }
    ]
  },
  {
    "_id": "557a73771aa70d44b5aba266",
    "pkdx_id": 323,
    "national_id": 323,
    "name": "Camerupt",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/323.png",
    "description": "The humps on Camerupt's back are formed by a transformation of its bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.  Camerupt has a volcano inside its body. Magma of 18,000 degrees Fahrenheit courses through its body. Occasionally, the humps on this Pokémon's back erupt, spewing the superheated magma.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/323.png",
    "types": [
      "ground",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73781aa70d44b5aba26a",
    "pkdx_id": 324,
    "national_id": 324,
    "name": "Torkoal",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/324.png",
    "description": "Torkoal generates energy by burning coal. It grows weaker as the fire dies down. When it is preparing for battle, this Pokémon burns more coal.  Torkoal digs through mountains in search of coal. If it finds some, it fills hollow spaces on its shell with the coal and burns it. If it is attacked, this Pokémon spouts thick black smoke to beat a retreat.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/324.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73661aa70d44b5aba065",
    "pkdx_id": 325,
    "national_id": 325,
    "name": "Spoink",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/325.png",
    "description": "Spoink keeps a pearl on top of its head. The pearl functions to amplify this Pokémon's psychokinetic powers. It is therefore on a constant search for a bigger pearl.  Spoink bounces around on its tail. The shock of its bouncing makes its heart pump. As a result, this Pokémon cannot afford to stop bouncing—if it stops, its heart will stop.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/325.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Grumpig",
        "_id": "557a73661aa70d44b5aba066"
      }
    ]
  },
  {
    "_id": "557a73631aa70d44b5aba003",
    "pkdx_id": 326,
    "national_id": 326,
    "name": "Grumpig",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/326.png",
    "description": "Grumpig uses the black pearls on its body to wield its fantastic powers. When it is doing so, it dances bizarrely. This Pokémon's black pearls are valuable as works of art.  Grumpig uses the black pearls on its body to amplify its psychic power waves for gaining total control over its foe. When this Pokémon uses its special power, its snorting breath grows labored.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/326.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73661aa70d44b5aba05a",
    "pkdx_id": 327,
    "national_id": 327,
    "name": "Spinda",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/327.png",
    "description": "No two Spinda are said to have identical spot patterns on their hides. This Pokémon moves in a curious manner as if it is stumbling in dizziness. Its lurching movements can cause the opponent to become confused.  All the Spinda that exist in the world are said to have utterly unique spot patterns. The shaky, tottering steps of this Pokémon give it the appearance of dancing.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/327.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73771aa70d44b5aba25b",
    "pkdx_id": 328,
    "national_id": 328,
    "name": "Trapinch",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/328.png",
    "description": "Trapinch is a patient hunter. It digs an inescapable pit in a desert and waits for its prey to come tumbling down. This Pokémon can go a whole week without access to any water.  Trapinch's nest is a sloped, bowl-like pit dug in sand. This Pokémon patiently waits for prey to tumble down the pit. Its giant jaws have enough strength to crush even boulders.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/328.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Vibrava",
        "_id": "557a73771aa70d44b5aba25c"
      }
    ]
  },
  {
    "_id": "557a73651aa70d44b5aba055",
    "pkdx_id": 329,
    "national_id": 329,
    "name": "Vibrava",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/329.png",
    "description": "Vibrava's wings have not yet completed the process of growing. Rather than flying long distances, they are more useful for generating ultrasonic waves by vibrating.  To make prey faint, Vibrava generates ultrasonic waves by vigorously making its two wings vibrate. This Pokémon's ultrasonic waves are so powerful, they can bring on headaches in people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/329.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": [
      {
        "level": 45,
        "method": "level_up",
        "to": "Flygon",
        "_id": "557a73651aa70d44b5aba056"
      }
    ]
  },
  {
    "_id": "557a73631aa70d44b5aba00a",
    "pkdx_id": 330,
    "national_id": 330,
    "name": "Flygon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/330.png",
    "description": "Flygon whips up a sandstorm by flapping its wings. The wings create a series of notes that sound like singing. Because the “singing\" is the only thing that can be heard in a sandstorm, this Pokémon is said to be the desert spirit.  Flygon is nicknamed “the elemental spirit of the desert.\" Because its flapping wings whip up a cloud of sand, this Pokémon is always enveloped in a sandstorm while flying.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/330.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9feb",
    "pkdx_id": 331,
    "national_id": 331,
    "name": "Cacnea",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/331.png",
    "description": "The more arid and harsh the environment, the more pretty and fragrant a flower Cacnea grows. This Pokémon battles by wildly swinging its thorny arms.  Cacnea lives in arid locations such as deserts. It releases a strong aroma from its flower to attract prey. When prey comes near, this Pokémon shoots sharp thorns from its body to bring the victim down.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/331.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Cacturne",
        "_id": "557a73621aa70d44b5ab9fec"
      }
    ]
  },
  {
    "_id": "557a73631aa70d44b5aba017",
    "pkdx_id": 332,
    "national_id": 332,
    "name": "Cacturne",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/332.png",
    "description": "If a traveler is going through a desert in the thick of night, Cacturne will follow in a ragtag group. The Pokémon are biding their time, waiting for the traveler to tire and become incapable of moving.  During the daytime, Cacturne remains unmoving so that it does not lose any moisture to the harsh desert sun. This Pokémon becomes active at night when the temperature drops.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/332.png",
    "types": [
      "grass",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73641aa70d44b5aba01b",
    "pkdx_id": 333,
    "national_id": 333,
    "name": "Swablu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/333.png",
    "description": "Swablu loves to make things clean. If it spots something dirty, it will wipe and polish it with its cottony wings. If its wings become dirty, this Pokémon finds a stream and showers itself.  Swablu has light and fluffy wings that are like cottony clouds. This Pokémon is not frightened of people. It lands on the heads of people and sits there like a cotton-fluff hat.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/333.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Altaria",
        "_id": "557a73641aa70d44b5aba01c"
      }
    ]
  },
  {
    "_id": "557a73641aa70d44b5aba02f",
    "pkdx_id": 334,
    "national_id": 334,
    "name": "Altaria",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/334.png",
    "description": "Altaria sings in a gorgeous soprano. Its wings are like cotton clouds. This Pokémon catches updrafts with its buoyant wings and soars way up into the wild blue yonder.  Altaria dances and wheels through the sky among billowing, cotton-like clouds. By singing melodies in its crystal-clear voice, this Pokémon makes its listeners experience dreamy wonderment.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/334.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73781aa70d44b5aba27d",
    "pkdx_id": 335,
    "national_id": 335,
    "name": "Zangoose",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/335.png",
    "description": "Zangoose usually stays on all fours, but when angered, it gets up on its hind legs and extends its claws. This Pokémon shares a bitter rivalry with Seviper that dates back over generations.  Memories of battling its archrival Seviper are etched into every cell of Zangoose's body. This Pokémon adroitly dodges attacks with incredible agility.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/335.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9fef",
    "pkdx_id": 336,
    "national_id": 336,
    "name": "Seviper",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/336.png",
    "description": "Seviper's swordlike tail serves two purposes—it slashes foes and douses them with secreted poison. This Pokémon will not give up its long-running blood feud with Zangoose.  Seviper shares a generations-long feud with Zangoose. The scars on its body are evidence of vicious battles. This Pokémon attacks using its sword-edged tail.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/336.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73661aa70d44b5aba069",
    "pkdx_id": 337,
    "national_id": 337,
    "name": "Lunatone",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/337.png",
    "description": "Lunatone becomes active around the time of the full moon. Instead of walking, it moves by floating in midair. The Pokémon's intimidating red eyes cause all those who see it to become transfixed with fear.  Lunatone was discovered at a location where a meteoroid fell. As a result, some people theorize that this Pokémon came from space. However, no one has been able to prove this theory so far.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/337.png",
    "types": [
      "rock",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73631aa70d44b5aba00e",
    "pkdx_id": 338,
    "national_id": 338,
    "name": "Solrock",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/338.png",
    "description": "Sunlight is the source of Solrock's power. It is said to possess the ability to read the emotions of others. This Pokémon gives off intense heat while rotating its body.  Solrock is a new species of Pokémon that is said to have fallen from space. It floats in air and moves silently. In battle, this Pokémon releases intensely bright light.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/338.png",
    "types": [
      "rock",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73651aa70d44b5aba04d",
    "pkdx_id": 339,
    "national_id": 339,
    "name": "Barboach",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/339.png",
    "description": "Barboach's body is covered with a slimy film. If a foe grabs it, this Pokémon just slips out of the enemy's grip. This Pokémon grows weak if the slimy coating dries up.  Barboach's sensitive whiskers serve as a superb radar system. This Pokémon hides in mud, leaving only its two whiskers exposed while it waits for prey to come along.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/339.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Whiscash",
        "_id": "557a73651aa70d44b5aba04e"
      }
    ]
  },
  {
    "_id": "557a73651aa70d44b5aba03c",
    "pkdx_id": 340,
    "national_id": 340,
    "name": "Whiscash",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/340.png",
    "description": "If Whiscash goes on a wild rampage, it sets off a quake-like tremor with a radius of over three miles. This Pokémon has the ability to predict real earthquakes.  Whiscash is extremely territorial. Just one of these Pokémon will claim a large pond as its exclusive territory. If a foe approaches it, it thrashes about and triggers a massive earthquake.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/340.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73671aa70d44b5aba075",
    "pkdx_id": 341,
    "national_id": 341,
    "name": "Corphish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/341.png",
    "description": "Corphish catches prey with its sharp claws. It has no likes or dislikes when it comes to food—it will eat anything. This Pokémon has no trouble living in filthy water.  Corphish were originally foreign Pokémon that were imported as pets. They eventually turned up in the wild. This Pokémon is very hardy and has greatly increased its population.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/341.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Crawdaunt",
        "_id": "557a73671aa70d44b5aba076"
      }
    ]
  },
  {
    "_id": "557a73671aa70d44b5aba081",
    "pkdx_id": 342,
    "national_id": 342,
    "name": "Crawdaunt",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/342.png",
    "description": "Crawdaunt molts (sheds) its shell regularly. Immediately after molting, its shell is soft and tender. Until the shell hardens, this Pokémon hides in its streambed burrow to avoid attack from its foes.  Crawdaunt has an extremely violent nature that compels it to challenge other living things to battle. Other life-forms refuse to live in ponds inhabited by this Pokémon, making them desolate places.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/342.png",
    "types": [
      "water",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73661aa70d44b5aba05d",
    "pkdx_id": 343,
    "national_id": 343,
    "name": "Baltoy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/343.png",
    "description": "As soon as it spots others of its kind, Baltoy congregates with them and then begins crying noisily in unison. This Pokémon sleeps while cleverly balancing itself on its one foot.  Baltoy moves while spinning around on its one foot. Primitive wall paintings depicting this Pokémon living among people were discovered in some ancient ruins.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/343.png",
    "types": [
      "ground",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Claydol",
        "_id": "557a73661aa70d44b5aba05e"
      }
    ]
  },
  {
    "_id": "557a73621aa70d44b5ab9ff2",
    "pkdx_id": 344,
    "national_id": 344,
    "name": "Claydol",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/344.png",
    "description": "Claydol is an enigma that appeared from a clay statue made by an ancient civilization dating back 20,000 years. This Pokémon shoots beams from both its hands.  Claydol are said to be dolls of mud made by primitive humans and brought to life by exposure to a mysterious ray. This Pokémon moves about while levitating.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/344.png",
    "types": [
      "ground",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73641aa70d44b5aba033",
    "pkdx_id": 345,
    "national_id": 345,
    "name": "Lileep",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/345.png",
    "description": "Lileep is an ancient Pokémon that was regenerated from a fossil. It remains permanently anchored to a rock. From its immobile perch, this Pokémon intently scans for prey with its two eyes.  Lileep became extinct approximately a hundred million years ago. This ancient Pokémon attaches itself to a rock on the seafloor and catches approaching prey using tentacles shaped like flower petals.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/345.png",
    "types": [
      "rock",
      "grass"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Cradily",
        "_id": "557a73641aa70d44b5aba034"
      }
    ]
  },
  {
    "_id": "557a73661aa70d44b5aba071",
    "pkdx_id": 346,
    "national_id": 346,
    "name": "Cradily",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/346.png",
    "description": "Cradily's body serves as an anchor, preventing it from being washed away in rough seas. This Pokémon secretes a strong digestive fluid from its tentacles.  Cradily roams around the ocean floor in search of food. This Pokémon freely extends its tree trunk-like neck and captures unwary prey using its eight tentacles.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/346.png",
    "types": [
      "rock",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73641aa70d44b5aba020",
    "pkdx_id": 347,
    "national_id": 347,
    "name": "Anorith",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/347.png",
    "description": "Anorith is said to be a type of Pokémon predecessor, with eight wings at the sides of its body. This Pokémon swam in the primordial sea by undulating these eight wings.  Anorith was regenerated from a prehistoric fossil. This primitive Pokémon once lived in warm seas. It grips its prey firmly between its two large claws.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/347.png",
    "types": [
      "rock",
      "bug"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Armaldo",
        "_id": "557a73641aa70d44b5aba021"
      }
    ]
  },
  {
    "_id": "557a73671aa70d44b5aba07d",
    "pkdx_id": 348,
    "national_id": 348,
    "name": "Armaldo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/348.png",
    "description": "Armaldo is a Pokémon species that became extinct in prehistoric times. This Pokémon is said to have walked on its hind legs, which would have been more convenient for life on land.  Armaldo's tough armor makes all attacks bounce off. This Pokémon's two enormous claws can be freely extended or contracted. They have the power to punch right through a steel slab.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/348.png",
    "types": [
      "rock",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736a1aa70d44b5aba0cd",
    "pkdx_id": 349,
    "national_id": 349,
    "name": "Feebas",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/349.png",
    "description": "While Feebas's body is in tatters, it has a hardy and tenacious life force that enables it to live anywhere. However, this Pokémon is also slow and dimwitted, making it an easy catch.  Feebas's fins are ragged and tattered from the start of its life. Because of its shoddy appearance, this Pokémon is largely ignored. It is capable of living in both the sea and in rivers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/349.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Milotic",
        "_id": "557a736a1aa70d44b5aba0cf"
      },
      {
        "method": "trade",
        "to": "Milotic",
        "_id": "557a736a1aa70d44b5aba0ce"
      }
    ]
  },
  {
    "_id": "557a73641aa70d44b5aba02c",
    "pkdx_id": 350,
    "national_id": 350,
    "name": "Milotic",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/350.png",
    "description": "Milotic live at the bottom of large lakes. When this Pokémon's body glows a vivid pink, it releases a pulsing wave of energy that brings soothing calm to troubled hearts.  Milotic is said to be the most beautiful of all the Pokémon. It has the power to becalm such emotions as anger and hostility to quell bitter feuding.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/350.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73671aa70d44b5aba090",
    "pkdx_id": 351,
    "national_id": 351,
    "name": "Castform",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/351.png",
    "description": "Castform borrows the power of nature to transform itself into the guises of the sun, rain, and snow-clouds. This Pokémon's feelings change with the weather.  Castform's appearance changes with the weather. This Pokémon gained the ability to use the vast power of nature to protect its tiny body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/351.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba11a",
    "pkdx_id": 352,
    "national_id": 352,
    "name": "Kecleon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/352.png",
    "description": "Kecleon alters its body coloration to blend in with its surroundings, allowing it to sneak up on its prey unnoticed. Then it lashes out with its long, stretchy tongue to instantly ensnare the unsuspecting target.  Kecleon is capable of changing its body colors at will to blend in with its surroundings. There is one exception—this Pokémon can't change the zigzag pattern on its belly.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/352.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73661aa70d44b5aba06d",
    "pkdx_id": 353,
    "national_id": 353,
    "name": "Shuppet",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/353.png",
    "description": "Shuppet grows by feeding on dark emotions, such as vengefulness and envy, in the hearts of people. It roams through cities in search of grudges that taint people.  Shuppet is attracted by feelings of jealousy and vindictiveness. If someone develops strong feelings of vengeance, this Pokémon will appear in a swarm and line up beneath the eaves of that person's home.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/353.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Banette",
        "_id": "557a73661aa70d44b5aba06e"
      }
    ]
  },
  {
    "_id": "557a736a1aa70d44b5aba0de",
    "pkdx_id": 354,
    "national_id": 354,
    "name": "Banette",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/354.png",
    "description": "A cursed energy permeated the stuffing of a discarded and forgotten plush doll, giving it new life as Banette. The Pokémon's energy would escape if it were to ever open its mouth.  Banette generates energy for laying strong curses by sticking pins into its own body. This Pokémon was originally a pitiful plush doll that was thrown away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/354.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Banette-mega",
        "_id": "557a736a1aa70d44b5aba0df"
      }
    ]
  },
  {
    "_id": "557a736a1aa70d44b5aba0d2",
    "pkdx_id": 355,
    "national_id": 355,
    "name": "Duskull",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/355.png",
    "description": "Duskull wanders lost among the deep darkness of midnight. There is an oft-told admonishment given to misbehaving children that this Pokémon will spirit away bad children who earn scoldings from their mothers.  Duskull can pass through any wall no matter how thick it may be. Once this Pokémon chooses a target, it will doggedly pursue the intended victim until the break of dawn.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/355.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Dusclops",
        "_id": "557a736a1aa70d44b5aba0d3"
      }
    ]
  },
  {
    "_id": "557a73671aa70d44b5aba079",
    "pkdx_id": 356,
    "national_id": 356,
    "name": "Dusclops",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/356.png",
    "description": "Dusclops absorbs anything, however large the object may be. This Pokémon hypnotizes its foe by waving its hands in a macabre manner and by bringing its single eye to bear. The hypnotized foe is made to do Dusclops's bidding.  Dusclops's body is completely hollow—there is nothing at all inside. It is said that its body is like a black hole. This Pokémon will absorb anything into its body, but nothing will ever come back out.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/356.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Dusknoir",
        "_id": "557a73671aa70d44b5aba07a"
      }
    ]
  },
  {
    "_id": "557a73641aa70d44b5aba038",
    "pkdx_id": 357,
    "national_id": 357,
    "name": "Tropius",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/357.png",
    "description": "Children of the southern tropics eat as snacks the fruit that grows in bunches around the neck of Tropius. This Pokémon flies by flapping the leaves on its back as if they were wings.  The bunches of fruit around Tropius's neck are very popular with children. This Pokémon loves fruit, and eats it continuously. Apparently, its love for fruit resulted in its own outgrowth of fruit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/357.png",
    "types": [
      "flying",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba11d",
    "pkdx_id": 358,
    "national_id": 358,
    "name": "Chimecho",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/358.png",
    "description": "In high winds, Chimecho cries as it hangs from a tree branch or the eaves of a building using a suction cup on its head. This Pokémon plucks berries with its long tail and eats them.  Chimecho makes its cries echo inside its hollow body. When this Pokémon becomes enraged, its cries result in ultrasonic waves that have the power to knock foes flying.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/358.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73651aa70d44b5aba049",
    "pkdx_id": 359,
    "national_id": 359,
    "name": "Absol",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/359.png",
    "description": "Absol has the ability to foretell the coming of natural disasters. It lives in a harsh, rugged mountain environment. This Pokémon very rarely ventures down from the mountains.  Every time Absol appears before people, it is followed by a disaster such as an earthquake or a tidal wave. As a result, it came to be known as the disaster Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/359.png",
    "types": [
      "dark"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Absol-mega",
        "_id": "557a73651aa70d44b5aba04a"
      }
    ]
  },
  {
    "_id": "557a73771aa70d44b5aba254",
    "pkdx_id": 360,
    "national_id": 360,
    "name": "Wynaut",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/360.png",
    "description": "Wynaut gather on moonlit nights to play by squeezing up against each other. By being squeezed, this Pokémon gains endurance and is trained to dole out powerful counterattacks.  Wynaut can always be seen with a big, happy smile on its face. Look at its tail to determine if it is angry. When angered, this Pokémon will be slapping the ground with its tail.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/360.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 15,
        "method": "level_up",
        "to": "Wobbuffet",
        "_id": "557a73771aa70d44b5aba255"
      }
    ]
  },
  {
    "_id": "557a73671aa70d44b5aba085",
    "pkdx_id": 361,
    "national_id": 361,
    "name": "Snorunt",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/361.png",
    "description": "Snorunt survives by eating only snow and ice. Old folklore claims that a house visited by this Pokémon is sure to prosper for many generations to come.  Snorunt live in regions with heavy snowfall. In seasons without snow, such as spring and summer, this Pokémon steals away to live quietly among stalactites and stalagmites deep in caverns.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/361.png",
    "types": [
      "ice"
    ],
    "evolutions": [
      {
        "level": 42,
        "method": "level_up",
        "to": "Glalie",
        "_id": "557a73671aa70d44b5aba087"
      },
      {
        "method": "stone",
        "to": "Froslass",
        "_id": "557a73671aa70d44b5aba086"
      }
    ]
  },
  {
    "_id": "557a736b1aa70d44b5aba0ea",
    "pkdx_id": 362,
    "national_id": 362,
    "name": "Glalie",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/362.png",
    "description": "Glalie has the ability to freely control ice. For example, it can instantly freeze its prey solid. After immobilizing its prey in ice, this Pokémon enjoys eating it in leisurely fashion.  Glalie has a body made of rock, which it hardens with an armor of ice. This Pokémon has the ability to freeze moisture in the atmosphere into any shape it desires.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/362.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73651aa70d44b5aba044",
    "pkdx_id": 363,
    "national_id": 363,
    "name": "Spheal",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/363.png",
    "description": "Spheal always travels by rolling around on its ball-like body. When the season for ice floes arrives, this Pokémon can be seen rolling about on ice and crossing the sea.  Spheal is much faster rolling than walking to get around. When groups of this Pokémon eat, they all clap at once to show their pleasure. Because of this, their mealtimes are noisy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/363.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Sealeo",
        "_id": "557a73651aa70d44b5aba045"
      }
    ]
  },
  {
    "_id": "557a736c1aa70d44b5aba108",
    "pkdx_id": 364,
    "national_id": 364,
    "name": "Sealeo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/364.png",
    "description": "Sealeo often balances and rolls things on the tip of its nose. While the Pokémon is rolling something, it checks the object's aroma and texture to determine whether it likes the object or not.  Sealeo has the habit of always juggling on the tip of its nose anything it sees for the first time. This Pokémon occasionally entertains itself by balancing and rolling a Spheal on its nose.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/364.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": [
      {
        "level": 44,
        "method": "level_up",
        "to": "Walrein",
        "_id": "557a736c1aa70d44b5aba109"
      }
    ]
  },
  {
    "_id": "557a73691aa70d44b5aba0c5",
    "pkdx_id": 365,
    "national_id": 365,
    "name": "Walrein",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/365.png",
    "description": "Walrein swims all over in frigid seawater while crushing icebergs with its grand, imposing tusks. Its thick layer of blubber makes enemy attacks bounce off harmlessly.  Walrein's two massively developed tusks can totally shatter blocks of ice weighing 10 tons with one blow. This Pokémon's thick coat of blubber insulates it from subzero temperatures.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/365.png",
    "types": [
      "water",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736b1aa70d44b5aba0f9",
    "pkdx_id": 366,
    "national_id": 366,
    "name": "Clamperl",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/366.png",
    "description": "Clamperl grows while being protected by its rock-hard shell. When its body becomes too large to fit inside the shell, it is sure evidence that this Pokémon is getting close to evolution.  Clamperl's sturdy shell is not only good for protection—it is also used for clamping and catching prey. A fully grown Clamperl's shell will be scored with nicks and scratches all over.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/366.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Huntail",
        "_id": "557a736b1aa70d44b5aba0fb"
      },
      {
        "method": "trade",
        "to": "Gorebyss",
        "_id": "557a736b1aa70d44b5aba0fa"
      }
    ]
  },
  {
    "_id": "557a73681aa70d44b5aba093",
    "pkdx_id": 367,
    "national_id": 367,
    "name": "Huntail",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/367.png",
    "description": "Huntail's tail is shaped like a fish. It uses the tail to attract prey, then swallows the prey whole with its large, gaping mouth. This Pokémon swims by wiggling its slender body like a snake.  Huntail's presence went unnoticed by people for a long time because it lives at extreme depths in the sea. This Pokémon's eyes can see clearly even in the murky dark depths of the ocean.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/367.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73671aa70d44b5aba08a",
    "pkdx_id": 368,
    "national_id": 368,
    "name": "Gorebyss",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/368.png",
    "description": "Although Gorebyss is the very picture of elegance and beauty while swimming, it is also cruel. When it spots prey, this Pokémon inserts its thin mouth into the prey's body and drains the prey of its body fluids.  Gorebyss lives in the southern seas at extreme depths. Its body is built to withstand the enormous pressure of water at incredible depths. Because of this, this Pokémon's body is unharmed by ordinary attacks.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/368.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0b5",
    "pkdx_id": 369,
    "national_id": 369,
    "name": "Relicanth",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/369.png",
    "description": "Relicanth is a rare species that was discovered in deep-sea explorations. This Pokémon's body withstands the enormous water pressure of the ocean depths. Its body is covered in tough scales that are like craggy rocks.  Relicanth is a Pokémon species that existed for a hundred million years without ever changing its form. This ancient Pokémon feeds on microscopic organisms with its toothless mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/369.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0ae",
    "pkdx_id": 370,
    "national_id": 370,
    "name": "Luvdisc",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/370.png",
    "description": "Luvdisc's heart-shaped body is a symbol of love and romance. It is said that any couple meeting this Pokémon is promised a loving relationship that never ends.  Luvdisc live in shallow seas in the tropics. This heart-shaped Pokémon earned its name by swimming after loving couples it spotted in the ocean's waves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/370.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736a1aa70d44b5aba0d6",
    "pkdx_id": 371,
    "national_id": 371,
    "name": "Bagon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/371.png",
    "description": "Bagon harbors a never-ending dream of one day soaring high among the clouds. As if trying to dispel its frustration over its inability to fly, this Pokémon slams its hard head against huge rocks and shatters them into pebbles.  Bagon has a dream of one day soaring in the sky. In doomed efforts to fly, this Pokémon hurls itself off cliffs. As a result of its dives, its head has grown tough and as hard as tempered steel.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/371.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Shelgon",
        "_id": "557a736a1aa70d44b5aba0d7"
      }
    ]
  },
  {
    "_id": "557a73651aa70d44b5aba040",
    "pkdx_id": 372,
    "national_id": 372,
    "name": "Shelgon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/372.png",
    "description": "Covering Shelgon's body are outgrowths much like bones. The shell is very hard and bounces off enemy attacks. When awaiting evolution, this Pokémon hides away in a cavern.  Inside Shelgon's armor-like shell, cells are in the midst of transformation to create an entirely new body. This Pokémon's shell is extremely heavy, making its movements sluggish.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/372.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 50,
        "method": "level_up",
        "to": "Salamence",
        "_id": "557a73651aa70d44b5aba041"
      }
    ]
  },
  {
    "_id": "557a73681aa70d44b5aba0a3",
    "pkdx_id": 373,
    "national_id": 373,
    "name": "Salamence",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/373.png",
    "description": "By evolving into Salamence, this Pokémon finally realizes its long-held dream of growing wings. To express its joy, it flies and wheels all over the sky while spouting flames from its mouth.  Salamence came about as a result of a strong, long-held dream of growing wings. It is said that this powerful desire triggered a sudden mutation in this Pokémon's cells, causing it to sprout its magnificent wings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/373.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba111",
    "pkdx_id": 374,
    "national_id": 374,
    "name": "Beldum",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/374.png",
    "description": "Beldum keeps itself floating by generating a magnetic force that repels earth's natural magnetism. When it sleeps, this Pokémon anchors itself to a cliff using the hooks on its rear.  Instead of blood, a powerful magnetic force courses throughout Beldum's body. This Pokémon communicates with others by sending controlled pulses of magnetism.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/374.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Metang",
        "_id": "557a736c1aa70d44b5aba112"
      }
    ]
  },
  {
    "_id": "557a73681aa70d44b5aba09a",
    "pkdx_id": 375,
    "national_id": 375,
    "name": "Metang",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/375.png",
    "description": "When two Beldum fuse together, Metang is formed. The brains of the Beldum are joined by a magnetic nervous system. This Pokémon turns its arms to the rear for traveling at high speed.  When two Beldum fuse together, Metang is formed. The brains of the Beldum are joined by a magnetic nervous system. By linking its brains magnetically, this Pokémon generates strong psychokinetic power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/375.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 45,
        "method": "level_up",
        "to": "Metagross",
        "_id": "557a73681aa70d44b5aba09b"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1a4",
    "pkdx_id": 376,
    "national_id": 376,
    "name": "Metagross",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/376.png",
    "description": "Metagross is the result of two Metang achieving fusion. When hunting, this Pokémon pins the prey to the ground under its massive body. It then eats the helpless victim using the large mouth on its stomach.  Metagross has four brains in total. Combined, the four brains can breeze through difficult calculations faster than a supercomputer. This Pokémon can float in the air by tucking in its four legs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/376.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736b1aa70d44b5aba0fe",
    "pkdx_id": 377,
    "national_id": 377,
    "name": "Regirock",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/377.png",
    "description": "Regirock's body is composed entirely of rocks. Recently, a study made the startling discovery that the rocks were all unearthed from different locations.  Regirock was sealed away by people long ago. If this Pokémon's body is damaged in battle, it is said to seek out suitable rocks on its own to repair itself.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/377.png",
    "types": [
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba105",
    "pkdx_id": 378,
    "national_id": 378,
    "name": "Regice",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/378.png",
    "description": "Regice cloaks itself with frigid air of -328 degrees Fahrenheit. Things will freeze solid just by going near this Pokémon. Its icy body is so cold, it will not melt even if it is immersed in magma.  Regice's body was made during an ice age. The deep-frozen body can't be melted, even by fire. This Pokémon controls frigid air of -328 degrees Fahrenheit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/378.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73671aa70d44b5aba08d",
    "pkdx_id": 379,
    "national_id": 379,
    "name": "Registeel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/379.png",
    "description": "Registeel was imprisoned by people in ancient times. The metal composing its body is thought to be a curious substance that is not of this earth.  Registeel has a body that is harder than any kind of metal. Its body is apparently hollow. No one has any idea what this Pokémon eats.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/379.png",
    "types": [
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736b1aa70d44b5aba0f5",
    "pkdx_id": 380,
    "national_id": 380,
    "name": "Latias",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/380.png",
    "description": "Latias is highly intelligent and capable of understanding human speech. It is covered with a glass-like down. The Pokémon enfolds its body with its down and refracts light to alter its appearance.  Latias is highly sensitive to the emotions of people. If it senses any hostility, this Pokémon ruffles the feathers all over its body and cries shrilly to intimidate the foe.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/380.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73681aa70d44b5aba096",
    "pkdx_id": 381,
    "national_id": 381,
    "name": "Latios",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/381.png",
    "description": "Latios will only open its heart to a Trainer with a compassionate spirit. This Pokémon can fly faster than a jet plane by folding its forelegs to minimize air resistance.  Latios has the ability to make others see an image of what it has seen or imagines in its head. This Pokémon is intelligent and understands human speech.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/381.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736a1aa70d44b5aba0e7",
    "pkdx_id": 382,
    "national_id": 382,
    "name": "Kyogre",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/382.png",
    "description": "Kyogre is said to be the personification of the sea itself. Legends tell of its many clashes against Groudon, as each sought to gain the power of nature.  Through Primal Reversion and with nature's full power, it will take back its true form. It can summon storms that cause the sea levels to rise.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/382.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73621aa70d44b5ab9ffb",
    "pkdx_id": 383,
    "national_id": 383,
    "name": "Groudon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/383.png",
    "description": "Through Primal Reversion and with nature's full power, it will take back its true form. It can cause magma to erupt and expand the landmass of the world.  Groudon is said to be the personification of the land itself. Legends tell of its many clashes against Kyogre, as each sought to gain the power of nature.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/383.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0c1",
    "pkdx_id": 384,
    "national_id": 384,
    "name": "Rayquaza",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/384.png",
    "description": "It flies forever through the ozone layer, consuming meteoroids for sustenance. The many meteoroids in its body provide the energy it needs to Mega Evolve.  Rayquaza is said to have lived for hundreds of millions of years. Legends remain of how it put to rest the clash between Kyogre and Groudon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/384.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73681aa70d44b5aba09f",
    "pkdx_id": 385,
    "national_id": 385,
    "name": "Jirachi",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/385.png",
    "description": "Jirachi will awaken from its sleep of a thousand years if you sing to it in a voice of purity. It is said to make true any wish that people desire.  A legend states that Jirachi will make true any wish that is written on notes attached to its head when it awakens. If this Pokémon senses danger, it will fight without awakening.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/385.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73681aa70d44b5aba0a7",
    "pkdx_id": 386,
    "national_id": 386,
    "name": "Deoxys",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/386.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/386.png",
    "description": "The DNA of a space virus underwent a sudden mutation upon exposure to a laser beam and resulted in Deoxys. The crystalline organ on this Pokémon's chest appears to be its brain.",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0b1",
    "pkdx_id": 387,
    "national_id": 387,
    "name": "Turtwig",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/387.png",
    "description": "It undertakes photosynthesis with its body, making oxygen. The leaf on its head wilts if it is thirsty.  Photosynthesis occurs across its body under the sun. The shell on its back is actually hardened soil.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/387.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 18,
        "method": "level_up",
        "to": "Grotle",
        "_id": "557a73691aa70d44b5aba0b2"
      }
    ]
  },
  {
    "_id": "557a736d1aa70d44b5aba13c",
    "pkdx_id": 388,
    "national_id": 388,
    "name": "Grotle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/388.png",
    "description": "It knows where pure water wells up. It carries fellow Pokémon there on its back.  It lives along water in forests. In the daytime, it leaves the forest to sunbathe its treed shell.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/388.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Torterra",
        "_id": "557a736d1aa70d44b5aba13d"
      }
    ]
  },
  {
    "_id": "557a736c1aa70d44b5aba10d",
    "pkdx_id": 389,
    "national_id": 389,
    "name": "Torterra",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/389.png",
    "description": "Small Pokémon occasionally gather on its unmoving back to begin building their nests.  Ancient people imagined that beneath the ground, a gigantic Torterra dwelled.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/389.png",
    "types": [
      "ground",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba120",
    "pkdx_id": 390,
    "national_id": 390,
    "name": "Chimchar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/390.png",
    "description": "The gas made in its belly burns from its rear end. The fire burns weakly when it feels sick.  Its fiery rear end is fueled by gas made in its belly. Even rain can't extinguish the fire.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/390.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 14,
        "method": "level_up",
        "to": "Monferno",
        "_id": "557a736c1aa70d44b5aba121"
      }
    ]
  },
  {
    "_id": "557a736a1aa70d44b5aba0e2",
    "pkdx_id": 391,
    "national_id": 391,
    "name": "Monferno",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/391.png",
    "description": "It uses ceilings and walls to launch aerial attacks. Its fiery tail is but one weapon.  It skillfully controls the intensity of the fire on its tail to keep its foes at an ideal distance.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/391.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Infernape",
        "_id": "557a736a1aa70d44b5aba0e3"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1a8",
    "pkdx_id": 392,
    "national_id": 392,
    "name": "Infernape",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/392.png",
    "description": "It tosses its enemies around with agility. It uses all its limbs to fight in its own unique style.  Its crown of fire is indicative of its fiery nature. It is beaten by none in terms of quickness.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/392.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0bd",
    "pkdx_id": 393,
    "national_id": 393,
    "name": "Piplup",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/393.png",
    "description": "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold.  It doesn't like to be taken care of. It's difficult to bond with since it won't listen to its Trainer.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/393.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Prinplup",
        "_id": "557a73691aa70d44b5aba0be"
      }
    ]
  },
  {
    "_id": "557a736b1aa70d44b5aba0ed",
    "pkdx_id": 394,
    "national_id": 394,
    "name": "Prinplup",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/394.png",
    "description": "It lives a solitary life. Its wings deliver wicked blows that can snap even the thickest of trees.  It lives alone, away from others. Apparently, every one of them believes it is the most important.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/394.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Empoleon",
        "_id": "557a736b1aa70d44b5aba0ee"
      }
    ]
  },
  {
    "_id": "557a736a1aa70d44b5aba0da",
    "pkdx_id": 395,
    "national_id": 395,
    "name": "Empoleon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/395.png",
    "description": "The three horns that extend from its beak attest to its power. The leader has the biggest horns.  It swims as fast as a jet boat. The edges of its wings are sharp and can slice apart drifting ice.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/395.png",
    "types": [
      "steel",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736f1aa70d44b5aba17e",
    "pkdx_id": 396,
    "national_id": 396,
    "name": "Starly",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/396.png",
    "description": "They flock around mountains and fields, chasing after bug Pokémon. Their singing is noisy and annoying.  They flock in great numbers. Though small, they flap their wings with great power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/396.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 14,
        "method": "level_up",
        "to": "Staravia",
        "_id": "557a736f1aa70d44b5aba17f"
      }
    ]
  },
  {
    "_id": "557a736d1aa70d44b5aba124",
    "pkdx_id": 397,
    "national_id": 397,
    "name": "Staravia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/397.png",
    "description": "It lives in forests and fields. Squabbles over territory occur when flocks collide.  They maintain huge flocks, although fierce scuffles break out between various flocks.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/397.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Staraptor",
        "_id": "557a736d1aa70d44b5aba125"
      }
    ]
  },
  {
    "_id": "557a73691aa70d44b5aba0b9",
    "pkdx_id": 398,
    "national_id": 398,
    "name": "Staraptor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/398.png",
    "description": "When Staravia evolve into Staraptor, they leave the flock to live alone. They have sturdy wings.  The muscles in its wings and legs are strong. It can easily fly while gripping a small Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/398.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73681aa70d44b5aba0aa",
    "pkdx_id": 399,
    "national_id": 399,
    "name": "Bidoof",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/399.png",
    "description": "It constantly gnaws on logs and rocks to whittle down its front teeth. It nests alongside water.  With nerves of steel, nothing can perturb it. It is more agile and active than it appears.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/399.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 15,
        "method": "level_up",
        "to": "Bibarel",
        "_id": "557a73681aa70d44b5aba0ab"
      }
    ]
  },
  {
    "_id": "557a736b1aa70d44b5aba101",
    "pkdx_id": 400,
    "national_id": 400,
    "name": "Bibarel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/400.png",
    "description": "It makes its nest by damming streams with bark and mud. It is known as an industrious worker.  It busily makes its nest with stacks of branches and roots it has cut up with its sharp incisors.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/400.png",
    "types": [
      "normal",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73691aa70d44b5aba0c9",
    "pkdx_id": 401,
    "national_id": 401,
    "name": "Kricketot",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/401.png",
    "description": "When its antennae hit each other, it sounds like the music of a xylophone.  It chats with others using the sounds of its colliding antennae. These sounds are fall hallmarks.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/401.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 10,
        "method": "level_up",
        "to": "Kricketune",
        "_id": "557a73691aa70d44b5aba0ca"
      }
    ]
  },
  {
    "_id": "557a736d1aa70d44b5aba12d",
    "pkdx_id": 402,
    "national_id": 402,
    "name": "Kricketune",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/402.png",
    "description": "It signals its emotions with its melodies. Scientists are studying these melodic patterns.  It crosses its knifelike arms in front of its chest when it cries. It can compose melodies ad lib.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/402.png",
    "types": [
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736d1aa70d44b5aba138",
    "pkdx_id": 403,
    "national_id": 403,
    "name": "Shinx",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/403.png",
    "description": "All of its fur dazzles if danger is sensed. It flees while the foe is momentarily blinded.  The extension and contraction of its muscles generates electricity. It glows when in trouble.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/403.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 15,
        "method": "level_up",
        "to": "Luxio",
        "_id": "557a736d1aa70d44b5aba139"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1b4",
    "pkdx_id": 404,
    "national_id": 404,
    "name": "Luxio",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/404.png",
    "description": "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes.  Its claws loose electricity with enough amperage to cause fainting. They live in small groups.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/404.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Luxray",
        "_id": "557a73711aa70d44b5aba1b5"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1a1",
    "pkdx_id": 405,
    "national_id": 405,
    "name": "Luxray",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/405.png",
    "description": "Luxray's ability to see through objects comes in handy when it's scouting for danger.  When its eyes gleam gold, it can spot hiding prey—even those taking shelter behind a wall.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/405.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73701aa70d44b5aba19c",
    "pkdx_id": 406,
    "national_id": 406,
    "name": "Budew",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/406.png",
    "description": "Over the winter, it closes its bud and endures the cold. In spring, the bud opens and releases pollen.  When it feels the sun's warm touch, it opens its bud to release pollen. It lives alongside clear pools.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/406.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Roselia",
        "_id": "557a73701aa70d44b5aba19d"
      }
    ]
  },
  {
    "_id": "557a736b1aa70d44b5aba0f1",
    "pkdx_id": 407,
    "national_id": 407,
    "name": "Roserade",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/407.png",
    "description": "With the movements of a dancer, it strikes with whips that are densely lined with poison thorns.  Luring prey with a sweet scent, it uses poison whips on its arms to poison, bind, and finish off the prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/407.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba143",
    "pkdx_id": 408,
    "national_id": 408,
    "name": "Cranidos",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/408.png",
    "description": "A lifelong jungle dweller from 100 million years ago, it would snap obstructing trees with headbutts.  It was resurrected from an iron ball-like fossil. It downs prey with its headbutts.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/408.png",
    "types": [
      "rock"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Rampardos",
        "_id": "557a736e1aa70d44b5aba144"
      }
    ]
  },
  {
    "_id": "557a73701aa70d44b5aba191",
    "pkdx_id": 409,
    "national_id": 409,
    "name": "Rampardos",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/409.png",
    "description": "Its skull is as hard as iron. It is a brute that tears down jungle trees while catching prey.  Its skull withstands impacts of any magnitude. As a result, its brain never gets the chance to grow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/409.png",
    "types": [
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73711aa70d44b5aba1af",
    "pkdx_id": 410,
    "national_id": 410,
    "name": "Shieldon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/410.png",
    "description": "It was generated from a fossil dug out of a layer of clay that was older than anyone knows. It has a sturdy face.  It habitually polishes its face by rubbing it against tree trunks. It is weak to attacks from behind.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/410.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Bastiodon",
        "_id": "557a73711aa70d44b5aba1b0"
      }
    ]
  },
  {
    "_id": "557a736d1aa70d44b5aba129",
    "pkdx_id": 411,
    "national_id": 411,
    "name": "Bastiodon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/411.png",
    "description": "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.  When they lined up side by side, no foe could break through. They shielded their young in that way.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/411.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73701aa70d44b5aba186",
    "pkdx_id": 412,
    "national_id": 412,
    "name": "Burmy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/412.png",
    "description": "If its cloak is broken in battle, it quickly remakes the cloak with materials nearby.  To shelter itself from cold, wintry winds, it covers itself with a cloak made of twigs and leaves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/412.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Wormadam-plant",
        "_id": "557a73701aa70d44b5aba188"
      },
      {
        "level": 20,
        "method": "level_up",
        "to": "Mothim",
        "_id": "557a73701aa70d44b5aba187"
      }
    ]
  },
  {
    "_id": "557a736e1aa70d44b5aba158",
    "pkdx_id": 413,
    "national_id": 413,
    "name": "Wormadam",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/413.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/413.png",
    "description": "Its appearance changes depending on where it evolved. The materials on hand become a part of its body.",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736f1aa70d44b5aba16d",
    "pkdx_id": 414,
    "national_id": 414,
    "name": "Mothim",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/414.png",
    "description": "It flutters around at night and steals honey from the Combee hive.  It loves the honey of flowers and steals honey collected by Combee.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/414.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736d1aa70d44b5aba133",
    "pkdx_id": 415,
    "national_id": 415,
    "name": "Combee",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/415.png",
    "description": "It collects and delivers honey to its colony. At night, they cluster to form a beehive and sleep.  The trio is together from birth. It constantly gathers honey from flowers to please Vespiquen.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/415.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": [
      {
        "level": 21,
        "method": "level_up",
        "to": "Vespiquen",
        "_id": "557a736d1aa70d44b5aba134"
      }
    ]
  },
  {
    "_id": "557a736f1aa70d44b5aba171",
    "pkdx_id": 416,
    "national_id": 416,
    "name": "Vespiquen",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/416.png",
    "description": "Its abdomen is a honeycomb for grubs. It raises its grubs on honey collected by Combee.  It houses its colony in cells in its body and releases various pheromones to make those grubs do its bidding.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/416.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73641aa70d44b5aba029",
    "pkdx_id": 417,
    "national_id": 417,
    "name": "Pachirisu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/417.png",
    "description": "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity.  It makes fur balls that crackle with static electricity. It stores them with berries in tree holes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/417.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba147",
    "pkdx_id": 418,
    "national_id": 418,
    "name": "Buizel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/418.png",
    "description": "It inflates the flotation sac around its neck and pokes its head out of the water to see what is going on.  It swims by rotating its two tails like a screw. When it dives, its flotation sac collapses.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/418.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 26,
        "method": "level_up",
        "to": "Floatzel",
        "_id": "557a736e1aa70d44b5aba148"
      }
    ]
  },
  {
    "_id": "557a73701aa70d44b5aba18b",
    "pkdx_id": 419,
    "national_id": 419,
    "name": "Floatzel",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/419.png",
    "description": "Its flotation sac developed as a result of pursuing aquatic prey. It can double as a rubber raft.  It floats using its well-developed flotation sac. It assists in the rescues of drowning people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/419.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736c1aa70d44b5aba116",
    "pkdx_id": 420,
    "national_id": 420,
    "name": "Cherubi",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/420.png",
    "description": "It evolves by sucking the energy out of the small ball where it had been storing nutrients.  Sunlight colors it red. When the small ball is drained of nutrients, it shrivels to herald evolution.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/420.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Cherrim",
        "_id": "557a736c1aa70d44b5aba117"
      }
    ]
  },
  {
    "_id": "557a73701aa70d44b5aba18e",
    "pkdx_id": 421,
    "national_id": 421,
    "name": "Cherrim",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/421.png",
    "description": "If it senses strong sunlight, it opens its folded petals to absorb the sun's rays with its whole body.  During times of strong sunlight, its bud blooms, its petals open fully, and it becomes very active.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/421.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73721aa70d44b5aba1c5",
    "pkdx_id": 422,
    "national_id": 422,
    "name": "Shellos",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/422.png",
    "description": "Its shape and coloration vary, depending on its habitat.  Beware of pushing strongly on its squishy body, as it makes a mysterious purple fluid ooze out.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/422.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Gastrodon",
        "_id": "557a73721aa70d44b5aba1c6"
      }
    ]
  },
  {
    "_id": "557a736f1aa70d44b5aba175",
    "pkdx_id": 423,
    "national_id": 423,
    "name": "Gastrodon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/423.png",
    "description": "It apparently had a huge shell for protection in ancient times. It lives in shallow tidal pools.  When its natural enemy attacks, it oozes purple fluid and escapes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/423.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736d1aa70d44b5aba140",
    "pkdx_id": 424,
    "national_id": 424,
    "name": "Ambipom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/424.png",
    "description": "To eat, it deftly shucks nuts with its two tails. It rarely uses its arms now.  They work in large colonies and make rings by linking their tails, apparently in friendship.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/424.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba14f",
    "pkdx_id": 425,
    "national_id": 425,
    "name": "Drifloon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/425.png",
    "description": "These Pokémon are called the “Signpost for Wandering Spirits.” Children holding them sometimes vanish.  A Pokémon formed by the spirits of people and Pokémon. It loves damp, humid seasons.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/425.png",
    "types": [
      "flying",
      "ghost"
    ],
    "evolutions": [
      {
        "level": 28,
        "method": "level_up",
        "to": "Drifblim",
        "_id": "557a736e1aa70d44b5aba150"
      }
    ]
  },
  {
    "_id": "557a73721aa70d44b5aba1da",
    "pkdx_id": 426,
    "national_id": 426,
    "name": "Drifblim",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/426.png",
    "description": "It's drowsy in daytime, but flies off in the evening in big groups. No one knows where they go.  It carries people and Pokémon when it flies. But since it only drifts, it can end up anywhere.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/426.png",
    "types": [
      "flying",
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba15c",
    "pkdx_id": 427,
    "national_id": 427,
    "name": "Buneary",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/427.png",
    "description": "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.  Its ears are always rolled up. They can be forcefully extended to shatter even a large boulder.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/427.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Lopunny",
        "_id": "557a736e1aa70d44b5aba15d"
      }
    ]
  },
  {
    "_id": "557a73701aa70d44b5aba183",
    "pkdx_id": 428,
    "national_id": 428,
    "name": "Lopunny",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/428.png",
    "description": "The ears appear to be delicate. If they are touched roughly, it kicks with its graceful legs.  Extremely cautious, it quickly bounds off when it senses danger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/428.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73761aa70d44b5aba23f",
    "pkdx_id": 429,
    "national_id": 429,
    "name": "Mismagius",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/429.png",
    "description": "Its cries sound like incantations to torment the foe. It appears where you least expect it.  It chants incantations. While they usually torment targets, some chants bring happiness.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/429.png",
    "types": [
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73701aa70d44b5aba198",
    "pkdx_id": 430,
    "national_id": 430,
    "name": "Honchkrow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/430.png",
    "description": "Becoming active at night, it is known to swarm with numerous Murkrow in tow.  If one utters a deep cry, many Murkrow gather quickly. For this, it is called “Summoner of Night.”",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/430.png",
    "types": [
      "flying",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba14b",
    "pkdx_id": 431,
    "national_id": 431,
    "name": "Glameow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/431.png",
    "description": "When it's happy, Glameow demonstrates beautiful movements of its tail, like a dancing ribbon.  It claws if displeased and purrs when affectionate. Its fickleness is very popular among some.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/431.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 38,
        "method": "level_up",
        "to": "Purugly",
        "_id": "557a736e1aa70d44b5aba14c"
      }
    ]
  },
  {
    "_id": "557a73731aa70d44b5aba1de",
    "pkdx_id": 432,
    "national_id": 432,
    "name": "Purugly",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/432.png",
    "description": "To make itself appear intimidatingly beefy, it tightly cinches its waist with its twin tails.  It would claim another Pokémon's nest as its own if it finds a nest sufficiently comfortable.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/432.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba204",
    "pkdx_id": 433,
    "national_id": 433,
    "name": "Chingling",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/433.png",
    "description": "There is an orb inside its mouth. When it hops, the orb bounces all over and makes a ringing sound.  Each time it hops, it makes a ringing sound. It deafens foes by emitting high-frequency cries.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/433.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Chimecho",
        "_id": "557a73741aa70d44b5aba205"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1bb",
    "pkdx_id": 434,
    "national_id": 434,
    "name": "Stunky",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/434.png",
    "description": "It protects itself by spraying a noxious fluid from its rear. The stench lingers for 24 hours.  It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/434.png",
    "types": [
      "poison",
      "dark"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Skuntank",
        "_id": "557a73711aa70d44b5aba1bc"
      }
    ]
  },
  {
    "_id": "557a736f1aa70d44b5aba160",
    "pkdx_id": 435,
    "national_id": 435,
    "name": "Skuntank",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/435.png",
    "description": "It sprays a stinky fluid from its tail. The fluid smells worse the longer it is allowed to fester.  It sprays a vile-smelling fluid from the tip of its tail to attack. Its range is over 160 feet.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/435.png",
    "types": [
      "poison",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737b1aa70d44b5aba2cd",
    "pkdx_id": 436,
    "national_id": 436,
    "name": "Bronzor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/436.png",
    "description": "Implements shaped like it were discovered in ancient tombs. It is unknown if they are related.  Ancient people believed that the pattern on Bronzor's back contained a mysterious power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/436.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 33,
        "method": "level_up",
        "to": "Bronzong",
        "_id": "557a737b1aa70d44b5aba2ce"
      }
    ]
  },
  {
    "_id": "557a73791aa70d44b5aba28e",
    "pkdx_id": 437,
    "national_id": 437,
    "name": "Bronzong",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/437.png",
    "description": "Ancient people believed that petitioning Bronzong for rain was the way to make crops grow.  In ages past, this Pokémon was revered as a bringer of rain. It was found buried in the ground.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/437.png",
    "types": [
      "steel",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736e1aa70d44b5aba154",
    "pkdx_id": 438,
    "national_id": 438,
    "name": "Bonsly",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/438.png",
    "description": "It prefers an arid atmosphere. It leaks water that looks like tears when adjusting its moisture level.  It prefers arid environments. It leaks water from its eyes to adjust its body's fluid levels.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/438.png",
    "types": [
      "rock"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Sudowoodo",
        "_id": "557a736e1aa70d44b5aba155"
      }
    ]
  },
  {
    "_id": "557a73791aa70d44b5aba29a",
    "pkdx_id": 439,
    "national_id": 439,
    "name": "Mime-jr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/439.png",
    "description": "It habitually mimics foes. Once mimicked, the foe cannot take its eyes off this Pokémon.  In an attempt to confuse its enemy, it mimics the enemy's movements. Then it wastes no time in making itself scarce!",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/439.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Mr-mime",
        "_id": "557a73791aa70d44b5aba29b"
      }
    ]
  },
  {
    "_id": "557a73701aa70d44b5aba194",
    "pkdx_id": 440,
    "national_id": 440,
    "name": "Happiny",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/440.png",
    "description": "It carefully carries a round, white rock that it thinks is an egg. It's bothered by how curly its hair looks.  It carries a round, egg-shaped rock in its belly pouch and gives the rock to its friends.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/440.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Chansey",
        "_id": "557a73701aa70d44b5aba195"
      }
    ]
  },
  {
    "_id": "557a736f1aa70d44b5aba164",
    "pkdx_id": 441,
    "national_id": 441,
    "name": "Chatot",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/441.png",
    "description": "It can learn and speak human words. If they gather, they all learn the same saying.  It mimics the cries of other Pokémon to trick them into thinking it's one of them. This way they won't attack it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/441.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1e4",
    "pkdx_id": 442,
    "national_id": 442,
    "name": "Spiritomb",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/442.png",
    "description": "It was bound to a fissure in an odd keystone as punishment for misdeeds 500 years ago.  A Pokémon that was formed by 108 spirits. It is bound to a fissure in an odd keystone.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/442.png",
    "types": [
      "ghost",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a736f1aa70d44b5aba179",
    "pkdx_id": 443,
    "national_id": 443,
    "name": "Gible",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/443.png",
    "description": "It nests in small, horizontal holes in cave walls. It pounces to catch prey that stray too close.  It nests in horizontal holes warmed by geothermal heat. Foes who get too close can expect to be pounced on and bitten.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/443.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": [
      {
        "level": 24,
        "method": "level_up",
        "to": "Gabite",
        "_id": "557a736f1aa70d44b5aba17a"
      }
    ]
  },
  {
    "_id": "557a736f1aa70d44b5aba168",
    "pkdx_id": 444,
    "national_id": 444,
    "name": "Gabite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/444.png",
    "description": "As it digs to expand its nest, it habitually digs up gems that it then hoards in its nest.  It loves sparkly things. It seeks treasures in caves and hoards the loot in its nest.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/444.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": [
      {
        "level": 48,
        "method": "level_up",
        "to": "Garchomp",
        "_id": "557a736f1aa70d44b5aba169"
      }
    ]
  },
  {
    "_id": "557a73781aa70d44b5aba273",
    "pkdx_id": 445,
    "national_id": 445,
    "name": "Garchomp",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/445.png",
    "description": "It flies at speeds equal to a jet fighter plane. It never allows its prey to escape.  When it folds up its body and extends its wings, it looks like a jet plane. It flies at sonic speed.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/445.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Garchomp-mega",
        "_id": "557a73781aa70d44b5aba274"
      }
    ]
  },
  {
    "_id": "557a737a1aa70d44b5aba2a7",
    "pkdx_id": 446,
    "national_id": 446,
    "name": "Munchlax",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/446.png",
    "description": "It conceals food under the long fur on its body. It carts around this food stash and swallows it without chewing.  It hides food under its long body hair. However, it forgets it has hidden the food.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/446.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Snorlax",
        "_id": "557a737a1aa70d44b5aba2a8"
      }
    ]
  },
  {
    "_id": "557a737b1aa70d44b5aba2c4",
    "pkdx_id": 447,
    "national_id": 447,
    "name": "Riolu",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/447.png",
    "description": "The aura that emanates from its body intensifies to alert others if it is afraid or sad.  It uses the shapes of auras, which change according to emotion, to communicate with others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/447.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Lucario",
        "_id": "557a737b1aa70d44b5aba2c5"
      }
    ]
  },
  {
    "_id": "557a73741aa70d44b5aba20c",
    "pkdx_id": 448,
    "national_id": 448,
    "name": "Lucario",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/448.png",
    "description": "By reading the auras of all things, it can tell how others are feeling from over half a mile away.  By catching the aura emanating from others, it can read their thoughts and movements.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/448.png",
    "types": [
      "fighting",
      "steel"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Lucario-mega",
        "_id": "557a73741aa70d44b5aba20d"
      }
    ]
  },
  {
    "_id": "557a73721aa70d44b5aba1c9",
    "pkdx_id": 449,
    "national_id": 449,
    "name": "Hippopotas",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/449.png",
    "description": "It enshrouds itself with sand to protect itself from germs. It does not enjoy getting wet.  It lives in arid places. Instead of perspiration, it expels grainy sand from its body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/449.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Hippowdon",
        "_id": "557a73721aa70d44b5aba1ca"
      }
    ]
  },
  {
    "_id": "557a73711aa70d44b5aba1ac",
    "pkdx_id": 450,
    "national_id": 450,
    "name": "Hippowdon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/450.png",
    "description": "It blasts internally stored sand from ports on its body to create a towering twister for attack.  It brandishes its gaping mouth in a display of fearsome strength. It raises vast quantities of sand while attacking.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/450.png",
    "types": [
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73721aa70d44b5aba1c0",
    "pkdx_id": 451,
    "national_id": 451,
    "name": "Skorupi",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/451.png",
    "description": "It burrows under the sand to lie in wait for prey. Its tail claws can inject its prey with a savage poison.  It grips prey with its tail claws and injects poison. It tenaciously hangs on until the poison takes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/451.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Drapion",
        "_id": "557a73721aa70d44b5aba1c1"
      }
    ]
  },
  {
    "_id": "557a73721aa70d44b5aba1d1",
    "pkdx_id": 452,
    "national_id": 452,
    "name": "Drapion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/452.png",
    "description": "It has the power in its clawed arms to make scrap of a car. The tips of its claws release poison.  It takes pride in its strength. Even though it can tear foes apart, it finishes them off with powerful poison.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/452.png",
    "types": [
      "poison",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73781aa70d44b5aba285",
    "pkdx_id": 453,
    "national_id": 453,
    "name": "Croagunk",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/453.png",
    "description": "Inflating its poison sacs, it fills the area with an odd sound and hits flinching opponents with a poison jab.  Its cheeks hold poison sacs. It tries to catch foes off guard to jab them with toxic fingers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/453.png",
    "types": [
      "fighting",
      "poison"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Toxicroak",
        "_id": "557a73781aa70d44b5aba286"
      }
    ]
  },
  {
    "_id": "557a737c1aa70d44b5aba2e1",
    "pkdx_id": 454,
    "national_id": 454,
    "name": "Toxicroak",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/454.png",
    "description": "Its knuckle claws secrete a toxin so vile that even a scratch could prove fatal.  It has a poison sac at its throat. When it croaks, the stored poison is churned for greater potency.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/454.png",
    "types": [
      "fighting",
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73751aa70d44b5aba21a",
    "pkdx_id": 455,
    "national_id": 455,
    "name": "Carnivine",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/455.png",
    "description": "It binds itself to trees in marshes. It attracts prey with its sweet-smelling drool and gulps them down.  It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/455.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73811aa70d44b5aba37e",
    "pkdx_id": 456,
    "national_id": 456,
    "name": "Finneon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/456.png",
    "description": "After long exposure to sunlight, the patterns on its tail fins shine vividly when darkness arrives.  The line running down its side can store sunlight. It shines vividly at night.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/456.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 31,
        "method": "level_up",
        "to": "Lumineon",
        "_id": "557a73811aa70d44b5aba37f"
      }
    ]
  },
  {
    "_id": "557a73751aa70d44b5aba220",
    "pkdx_id": 457,
    "national_id": 457,
    "name": "Lumineon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/457.png",
    "description": "To avoid detection by predators, it crawls along the seafloor using the two fins on its chest.  It lives on the deep-sea floor. It attracts prey by flashing the patterns on its four tail fins.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/457.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2b8",
    "pkdx_id": 458,
    "national_id": 458,
    "name": "Mantyke",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/458.png",
    "description": "When it swims close to the surface of the ocean, people aboard ships are able to observe the pattern on its back.  The pattern on its back varies by region. It often swims in a school of Remoraid.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/458.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Mantine",
        "_id": "557a737a1aa70d44b5aba2b9"
      }
    ]
  },
  {
    "_id": "557a73761aa70d44b5aba242",
    "pkdx_id": 459,
    "national_id": 459,
    "name": "Snover",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/459.png",
    "description": "In the spring, it grows berries with the texture of frozen treats around its belly.  During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/459.png",
    "types": [
      "grass",
      "ice"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Abomasnow",
        "_id": "557a73761aa70d44b5aba243"
      }
    ]
  },
  {
    "_id": "557a737b1aa70d44b5aba2c8",
    "pkdx_id": 460,
    "national_id": 460,
    "name": "Abomasnow",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/460.png",
    "description": "It lives a quiet life on mountains that are perpetually covered in snow. It hides itself by whipping up blizzards.  It blankets wide areas in snow by whipping up blizzards. It is also known as “The Ice Monster.”",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/460.png",
    "types": [
      "grass",
      "ice"
    ],
    "evolutions": [
      {
        "method": "other",
        "to": "Abomasnow-mega",
        "_id": "557a737b1aa70d44b5aba2c9"
      }
    ]
  },
  {
    "_id": "557a73841aa70d44b5aba3ce",
    "pkdx_id": 461,
    "national_id": 461,
    "name": "Weavile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/461.png",
    "description": "They live in cold regions, forming groups of four or five that hunt prey with impressive coordination.  It lives in snowy regions. It carves patterns in trees with its claws as a signal to others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/461.png",
    "types": [
      "ice",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba1fc",
    "pkdx_id": 462,
    "national_id": 462,
    "name": "Magnezone",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/462.png",
    "description": "It evolved from exposure to a special magnetic field. Three units generate magnetism.  Sometimes the magnetism emitted by Magnezone is too strong, making them attract each other so they cannot move.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/462.png",
    "types": [
      "steel",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73601aa70d44b5ab9fb8",
    "pkdx_id": 463,
    "national_id": 463,
    "name": "Lickilicky",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/463.png",
    "description": "Their saliva contains lots of components that can dissolve anything. The numbness caused by their lick does not dissipate.  It wraps things with its extensible tongue. Getting too close to it will leave you soaked with drool.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/463.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba200",
    "pkdx_id": 464,
    "national_id": 464,
    "name": "Rhyperior",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/464.png",
    "description": "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.  From holes in its palms, it fires out Geodude. Its carapace can withstand volcanic eruptions.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/464.png",
    "types": [
      "ground",
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2ab",
    "pkdx_id": 465,
    "national_id": 465,
    "name": "Tangrowth",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/465.png",
    "description": "Its vines grow so profusely that, in the warm season, you can't even see its eyes.  It ensnares prey by extending arms made of vines. Losing arms to predators does not trouble it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/465.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73751aa70d44b5aba217",
    "pkdx_id": 466,
    "national_id": 466,
    "name": "Electivire",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/466.png",
    "description": "It pushes the tips of its two tails against the foe, then lets loose with over 20,000 volts of power.  As its electric charge amplifies, blue sparks begin to crackle between its horns.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/466.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1e1",
    "pkdx_id": 467,
    "national_id": 467,
    "name": "Magmortar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/467.png",
    "description": "It blasts fireballs of over 3,600 degrees Fahrenheit out of its arms. Its breath also sears and sizzles.  It blasts fireballs of over 3,600 degrees Fahrenheit from the ends of its arms. It lives in volcanic craters.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/467.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba208",
    "pkdx_id": 468,
    "national_id": 468,
    "name": "Togekiss",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/468.png",
    "description": "It shares many blessings with people who respect one another's rights and avoid needless strife.  As everyone knows, it visits peaceful regions, bringing them gifts of kindness and sweet blessings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/468.png",
    "types": [
      "flying",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73791aa70d44b5aba2a3",
    "pkdx_id": 469,
    "national_id": 469,
    "name": "Yanmega",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/469.png",
    "description": "This six-legged Pokémon is easily capable of transporting an adult in flight. The wings on its tail help it stay balanced.  It prefers to battle by biting apart foes' heads instantly while flying by at high speed.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/469.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba214",
    "pkdx_id": 470,
    "national_id": 470,
    "name": "Leafeon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/470.png",
    "description": "Just like a plant, it uses photosynthesis. As a result, it is always enveloped in clear air.  When you see Leafeon asleep in a patch of sunshine, you'll know it is using photosynthesis to produce clean air.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/470.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73711aa70d44b5aba1b8",
    "pkdx_id": 471,
    "national_id": 471,
    "name": "Glaceon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/471.png",
    "description": "It lowers its body heat to freeze its fur. The hairs then become like needles it can fire.  By controlling its body heat, it can freeze the atmosphere around it to make a diamond-dust flurry.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/471.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1ef",
    "pkdx_id": 472,
    "national_id": 472,
    "name": "Gliscor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/472.png",
    "description": "Its flight is soundless. It uses its lengthy tail to carry off its prey... Then its elongated fangs do the rest.  It observes prey while hanging inverted from branches. When the chance presents itself, it swoops!",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/472.png",
    "types": [
      "flying",
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1eb",
    "pkdx_id": 473,
    "national_id": 473,
    "name": "Mamoswine",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/473.png",
    "description": "Its impressive tusks are made of ice. The population thinned when it turned warm after the ice age.  A frozen Mamoswine was dug from ice dating back 10,000 years. This Pokémon has been around a long, long, long time.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/473.png",
    "types": [
      "ground",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2ae",
    "pkdx_id": 474,
    "national_id": 474,
    "name": "Porygon-z",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/474.png",
    "description": "Its programming was modified to enable it to travel through alien dimensions. Seems there might have been an error...  Additional software was installed to make it a better Pokémon. It began acting oddly, however.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/474.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73841aa70d44b5aba3c6",
    "pkdx_id": 475,
    "national_id": 475,
    "name": "Gallade",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/475.png",
    "description": "A master of courtesy and swordsmanship, it fights using extending swords on its elbows.  Because it can sense what its foe is thinking, its attacks burst out first, fast, and fierce.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/475.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba39b",
    "pkdx_id": 476,
    "national_id": 476,
    "name": "Probopass",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/476.png",
    "description": "It freely controls three small units called Mini-Noses using magnetic force.  It exudes strong magnetism from all over. It controls three small units called Mini-Noses.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/476.png",
    "types": [
      "rock",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73741aa70d44b5aba211",
    "pkdx_id": 477,
    "national_id": 477,
    "name": "Dusknoir",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/477.png",
    "description": "The antenna on its head captures radio waves from the world of spirits that command it to take people there.  It is said to take lost spirits into its pliant body and guide them home.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/477.png",
    "types": [
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73811aa70d44b5aba370",
    "pkdx_id": 478,
    "national_id": 478,
    "name": "Froslass",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/478.png",
    "description": "Legends in snowy regions say that a woman who was lost on an icy mountain was reborn as Froslass.  It freezes foes with an icy breath nearly -60 degrees Fahrenheit. What seems to be its body is actually hollow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/478.png",
    "types": [
      "ghost",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73841aa70d44b5aba3ca",
    "pkdx_id": 479,
    "national_id": 479,
    "name": "Rotom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/479.png",
    "description": "Its body is composed of plasma. It is known to infiltrate electronic devices and wreak havoc.  Research continues on this Pokémon, which could be the power source of a unique motor.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/479.png",
    "types": [
      "ghost",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737c1aa70d44b5aba2e9",
    "pkdx_id": 480,
    "national_id": 480,
    "name": "Uxie",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/480.png",
    "description": "It is said that its emergence gave humans the intelligence to improve their quality of life.  Known as “The Being of Knowledge.” It is said that it can wipe out the memory of those who see its eyes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/480.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73761aa70d44b5aba23c",
    "pkdx_id": 481,
    "national_id": 481,
    "name": "Mesprit",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/481.png",
    "description": "It sleeps at the bottom of a lake. Its spirit is said to leave its body to fly on the lake's surface.  Known as “The Being of Emotion.” It taught humans the nobility of sorrow, pain, and joy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/481.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73811aa70d44b5aba378",
    "pkdx_id": 482,
    "national_id": 482,
    "name": "Azelf",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/482.png",
    "description": "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.  Known as “The Being of Willpower.” It sleeps at the bottom of a lake to keep the world in balance.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/482.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2bd",
    "pkdx_id": 483,
    "national_id": 483,
    "name": "Dialga",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/483.png",
    "description": "It has the power to control time. It appears in Sinnoh-region myths as an ancient deity.  A Pokémon spoken of in legend. It is said that time began moving when Dialga was born.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/483.png",
    "types": [
      "steel",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737f1aa70d44b5aba341",
    "pkdx_id": 484,
    "national_id": 484,
    "name": "Palkia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/484.png",
    "description": "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology.  It is said to live in a gap in the spatial dimension parallel to ours. It appears in mythology.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/484.png",
    "types": [
      "water",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737c1aa70d44b5aba2fa",
    "pkdx_id": 485,
    "national_id": 485,
    "name": "Heatran",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/485.png",
    "description": "Boiling blood, like magma, circulates through its body. It makes its dwelling place in volcanic caves.  It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/485.png",
    "types": [
      "steel",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73801aa70d44b5aba361",
    "pkdx_id": 486,
    "national_id": 486,
    "name": "Regigigas",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/486.png",
    "description": "There is an enduring legend that states this Pokémon towed continents with ropes.  It is said to have made Pokémon that look like itself from a special ice mountain, rocks, and magma.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/486.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737b1aa70d44b5aba2d2",
    "pkdx_id": 487,
    "national_id": 487,
    "name": "Giratina",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/487.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/487.png",
    "description": "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange.",
    "types": [
      "ghost",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737e1aa70d44b5aba31d",
    "pkdx_id": 488,
    "national_id": 488,
    "name": "Cresselia",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/488.png",
    "description": "Those who sleep holding Cresselia's feather are assured of joyful dreams. It is said to represent the crescent moon.  Shiny particles are released from its wings like a veil. It is said to represent the crescent moon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/488.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2c1",
    "pkdx_id": 489,
    "national_id": 489,
    "name": "Phione",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/489.png",
    "description": "It drifts in warm seas. It always returns to where it was born, no matter how far it may have drifted.  When the water warms, they inflate the flotation sac on their heads and drift languidly on the sea in packs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/489.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1e8",
    "pkdx_id": 490,
    "national_id": 490,
    "name": "Manaphy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/490.png",
    "description": "It starts its life with a wondrous power that permits it to bond with any kind of Pokémon.  It is born with a wondrous power that lets it bond with any kind of Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/490.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73781aa70d44b5aba270",
    "pkdx_id": 491,
    "national_id": 491,
    "name": "Darkrai",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/491.png",
    "description": "It can lull people to sleep and make them dream. It is active during nights of the new moon.  It chases people and Pokémon from its territory by causing them to experience deep, nightmarish slumbers.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/491.png",
    "types": [
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3b3",
    "pkdx_id": 492,
    "national_id": 492,
    "name": "Shaymin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/492.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/492.png",
    "description": "It can dissolve toxins in the air to instantly transform ruined land into a lush field of flowers.",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737d1aa70d44b5aba310",
    "pkdx_id": 493,
    "national_id": 493,
    "name": "Arceus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/493.png",
    "description": "It is told in mythology that this Pokémon was born before the universe even existed.  According to the legends of Sinnoh, this Pokémon emerged from an egg and shaped all there is in this world.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/493.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737c1aa70d44b5aba2e5",
    "pkdx_id": 494,
    "national_id": 494,
    "name": "Victini",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/494.png",
    "description": "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.  This Pokémon brings victory. It is said that Trainers with Victini always win, regardless of the type of encounter.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/494.png",
    "types": [
      "fire",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737e1aa70d44b5aba316",
    "pkdx_id": 495,
    "national_id": 495,
    "name": "Snivy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/495.png",
    "description": "They photosynthesize by bathing their tails in sunlight. When they are not feeling well, their tails droop.  Being exposed to sunlight makes its movements swifter. It uses vines more adeptly than its hands.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/495.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 17,
        "method": "level_up",
        "to": "Servine",
        "_id": "557a737e1aa70d44b5aba317"
      }
    ]
  },
  {
    "_id": "557a73751aa70d44b5aba22d",
    "pkdx_id": 496,
    "national_id": 496,
    "name": "Servine",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/496.png",
    "description": "When it gets dirty, its leaves can't be used in photosynthesis, so it always keeps itself clean.  It moves along the ground as if sliding. Its swift movements befuddle its foes, and it then attacks with a vine whip.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/496.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Serperior",
        "_id": "557a73751aa70d44b5aba22e"
      }
    ]
  },
  {
    "_id": "557a737e1aa70d44b5aba324",
    "pkdx_id": 497,
    "national_id": 497,
    "name": "Serperior",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/497.png",
    "description": "It can stop its opponents' movements with just a glare. It takes in solar energy and boosts it internally.  It only gives its all against strong opponents who are not fazed by the glare from Serperior's noble eyes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/497.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73861aa70d44b5aba42b",
    "pkdx_id": 498,
    "national_id": 498,
    "name": "Tepig",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/498.png",
    "description": "It loves to eat roasted berries, but sometimes it gets too excited and burns them to a crisp.  It can deftly dodge its foe's attacks while shooting fireballs from its nose. It roasts berries before it eats them.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/498.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 17,
        "method": "level_up",
        "to": "Pignite",
        "_id": "557a73861aa70d44b5aba42c"
      }
    ]
  },
  {
    "_id": "557a73731aa70d44b5aba1f3",
    "pkdx_id": 499,
    "national_id": 499,
    "name": "Pignite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/499.png",
    "description": "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.  The more it eats, the more fuel it has to make the fire in its stomach stronger. This fills it with even more power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/499.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Emboar",
        "_id": "557a73731aa70d44b5aba1f4"
      }
    ]
  },
  {
    "_id": "557a737d1aa70d44b5aba304",
    "pkdx_id": 500,
    "national_id": 500,
    "name": "Emboar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/500.png",
    "description": "It has mastered fast and powerful fighting moves. It grows a beard of fire.  It can throw a fire punch by setting its fists on fire with its fiery chin. It cares deeply about its friends.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/500.png",
    "types": [
      "fighting",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737b1aa70d44b5aba2dd",
    "pkdx_id": 501,
    "national_id": 501,
    "name": "Oshawott",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/501.png",
    "description": "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing.  The scalchop on its stomach isn't just used for battle—it can be used to break open hard berries as well.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/501.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 17,
        "method": "level_up",
        "to": "Dewott",
        "_id": "557a737b1aa70d44b5aba2de"
      }
    ]
  },
  {
    "_id": "557a73791aa70d44b5aba28a",
    "pkdx_id": 502,
    "national_id": 502,
    "name": "Dewott",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/502.png",
    "description": "As a result of strict training, each Dewott learns different forms for using the scalchops.  Strict training is how it learns its flowing double-scalchop technique.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/502.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Samurott",
        "_id": "557a73791aa70d44b5aba28b"
      }
    ]
  },
  {
    "_id": "557a737d1aa70d44b5aba2fe",
    "pkdx_id": 503,
    "national_id": 503,
    "name": "Samurott",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/503.png",
    "description": "One swing of the sword incorporated in its armor can fell an opponent. A simple glare from one of them quiets everybody.  In the time it takes a foe to blink, it can draw and sheathe the seamitars attached to its front legs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/503.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2b1",
    "pkdx_id": 504,
    "national_id": 504,
    "name": "Patrat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/504.png",
    "description": "Extremely cautious, one of them will always be on the lookout, but it won't notice a foe coming from behind.  Using food stored in cheek pouches, they can keep watch for days. They use their tails to communicate with others.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/504.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Watchog",
        "_id": "557a737a1aa70d44b5aba2b2"
      }
    ]
  },
  {
    "_id": "557a737e1aa70d44b5aba31a",
    "pkdx_id": 505,
    "national_id": 505,
    "name": "Watchog",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/505.png",
    "description": "When they see an enemy, their tails stand high, and they spit the seeds of berries stored in their cheek pouches.  Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/505.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73731aa70d44b5aba1f8",
    "pkdx_id": 506,
    "national_id": 506,
    "name": "Lillipup",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/506.png",
    "description": "Though it is a very brave Pokémon, it's also smart enough to check its foe's strength and avoid battle.  The long hair around its face provides an amazing radar that lets it sense subtle changes in its surroundings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/506.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Herdier",
        "_id": "557a73731aa70d44b5aba1f9"
      }
    ]
  },
  {
    "_id": "557a737d1aa70d44b5aba30c",
    "pkdx_id": 507,
    "national_id": 507,
    "name": "Herdier",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/507.png",
    "description": "It has black, cape-like fur that is very hard and decreases the amount of damage it receives.  This very loyal Pokémon helps Trainers, and it also takes care of other Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/507.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Stoutland",
        "_id": "557a737d1aa70d44b5aba30d"
      }
    ]
  },
  {
    "_id": "557a737d1aa70d44b5aba313",
    "pkdx_id": 508,
    "national_id": 508,
    "name": "Stoutland",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/508.png",
    "description": "Being wrapped in its long fur is so comfortable that a person would be fine even overnight on a wintry mountain.  It rescues people stranded by blizzards in the mountains. Its shaggy fur shields it from the cold.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/508.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737c1aa70d44b5aba2ef",
    "pkdx_id": 509,
    "national_id": 509,
    "name": "Purrloin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/509.png",
    "description": "They steal from people for fun, but their victims can't help but forgive them. Their deceptively cute act is perfect.  Its cute act is a ruse. When victims let down their guard, they find their items taken. It attacks with sharp claws.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/509.png",
    "types": [
      "dark"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Liepard",
        "_id": "557a737c1aa70d44b5aba2f0"
      }
    ]
  },
  {
    "_id": "557a73801aa70d44b5aba356",
    "pkdx_id": 510,
    "national_id": 510,
    "name": "Liepard",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/510.png",
    "description": "Stealthily, it sneaks up on its target, striking from behind before its victim has a chance to react.  Their beautiful form comes from the muscles they have developed. They run silently in the night.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/510.png",
    "types": [
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba394",
    "pkdx_id": 511,
    "national_id": 511,
    "name": "Pansage",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/511.png",
    "description": "It's good at finding berries and gathers them from all over. It's kind enough to share them with friends.  It shares the leaf on its head with weary-looking Pokémon. These leaves are known to relieve stress.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/511.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Simisage",
        "_id": "557a73821aa70d44b5aba395"
      }
    ]
  },
  {
    "_id": "557a737d1aa70d44b5aba301",
    "pkdx_id": 512,
    "national_id": 512,
    "name": "Simisage",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/512.png",
    "description": "Ill tempered, it fights by swinging its barbed tail around wildly. The leaf growing on its head is very bitter.  It attacks enemies with strikes of its thorn-covered tail. This Pokémon is wild tempered.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/512.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737d1aa70d44b5aba308",
    "pkdx_id": 513,
    "national_id": 513,
    "name": "Pansear",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/513.png",
    "description": "This Pokémon lives in caves in volcanoes. The fire within the tuft on its head can reach 600 degrees Fahrenheit.  Very intelligent, it roasts berries before eating them. It likes to help people.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/513.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Simisear",
        "_id": "557a737d1aa70d44b5aba309"
      }
    ]
  },
  {
    "_id": "557a73801aa70d44b5aba364",
    "pkdx_id": 514,
    "national_id": 514,
    "name": "Simisear",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/514.png",
    "description": "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.  A flame burns inside its body. It scatters embers from its head and tail to sear its opponents.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/514.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737f1aa70d44b5aba339",
    "pkdx_id": 515,
    "national_id": 515,
    "name": "Panpour",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/515.png",
    "description": "The water stored inside the tuft on its head is full of nutrients. Plants that receive its water grow large.  The water stored inside the tuft on its head is full of nutrients. It waters plants with it using its tail.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/515.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Simipour",
        "_id": "557a737f1aa70d44b5aba33a"
      }
    ]
  },
  {
    "_id": "557a73801aa70d44b5aba359",
    "pkdx_id": 516,
    "national_id": 516,
    "name": "Simipour",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/516.png",
    "description": "It prefers places with clean water. When its tuft runs low, it replenishes it by siphoning up water with its tail.  The high-pressure water expelled from its tail is so powerful, it can destroy a concrete wall.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/516.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3b6",
    "pkdx_id": 517,
    "national_id": 517,
    "name": "Munna",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/517.png",
    "description": "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.  This Pokémon appears before people and Pokémon who are having nightmares and eats those dreams.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/517.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Musharna",
        "_id": "557a73831aa70d44b5aba3b7"
      }
    ]
  },
  {
    "_id": "557a737c1aa70d44b5aba2ec",
    "pkdx_id": 518,
    "national_id": 518,
    "name": "Musharna",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/518.png",
    "description": "The dream mist coming from its forehead changes into many different colors depending on the dream that was eaten.  The mist emanating from their foreheads is packed with the dreams of people and Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/518.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737f1aa70d44b5aba345",
    "pkdx_id": 519,
    "national_id": 519,
    "name": "Pidove",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/519.png",
    "description": "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas.  This very forgetful Pokémon will wait for a new order from its Trainer even though it already has one.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/519.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 21,
        "method": "level_up",
        "to": "Tranquill",
        "_id": "557a737f1aa70d44b5aba346"
      }
    ]
  },
  {
    "_id": "557a73801aa70d44b5aba35c",
    "pkdx_id": 520,
    "national_id": 520,
    "name": "Tranquill",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/520.png",
    "description": "No matter where in the world it goes, it knows where its nest is, so it never gets separated from its Trainer.  Many people believe that, deep in the forest where Tranquill live, there is a peaceful place where there is no war.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/520.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Unfezant",
        "_id": "557a73801aa70d44b5aba35d"
      }
    ]
  },
  {
    "_id": "557a737f1aa70d44b5aba33d",
    "pkdx_id": 521,
    "national_id": 521,
    "name": "Unfezant",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/521.png",
    "description": "Males have plumage on their heads. They will never let themselves feel close to anyone other than their Trainers.  Males swing their head plumage to threaten opponents. The females' flying abilities surpass those of the males.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/521.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737e1aa70d44b5aba327",
    "pkdx_id": 522,
    "national_id": 522,
    "name": "Blitzle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/522.png",
    "description": "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.  When thunderclouds cover the sky, it will appear. It can catch lightning with its mane and store the electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/522.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 27,
        "method": "level_up",
        "to": "Zebstrika",
        "_id": "557a737e1aa70d44b5aba328"
      }
    ]
  },
  {
    "_id": "557a737e1aa70d44b5aba32f",
    "pkdx_id": 523,
    "national_id": 523,
    "name": "Zebstrika",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/523.png",
    "description": "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.  When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/523.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737e1aa70d44b5aba32b",
    "pkdx_id": 524,
    "national_id": 524,
    "name": "Roggenrola",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/524.png",
    "description": "They were discovered a hundred years ago in an earthquake fissure. Inside each one is an energy core.  Its ear is hexagonal in shape. Compressed underground, its body is as hard as steel.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/524.png",
    "types": [
      "rock"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Boldore",
        "_id": "557a737e1aa70d44b5aba32c"
      }
    ]
  },
  {
    "_id": "557a737c1aa70d44b5aba2f3",
    "pkdx_id": 525,
    "national_id": 525,
    "name": "Boldore",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/525.png",
    "description": "When it is healthy, its core sticks out. Always facing the same way, it swiftly moves front to back and left to right.  Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/525.png",
    "types": [
      "rock"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Gigalith",
        "_id": "557a737c1aa70d44b5aba2f4"
      }
    ]
  },
  {
    "_id": "557a737e1aa70d44b5aba332",
    "pkdx_id": 526,
    "national_id": 526,
    "name": "Gigalith",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/526.png",
    "description": "Compressing the energy from its internal core lets it fire off an attack capable of blowing away a mountain.  The solar rays it absorbs are processed in its energy core and fired as a ball of light.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/526.png",
    "types": [
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73751aa70d44b5aba223",
    "pkdx_id": 527,
    "national_id": 527,
    "name": "Woobat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/527.png",
    "description": "The heart-shaped mark left on a body after a Woobat has been attached to it is said to bring good fortune.  Its habitat is dark forests and caves. It emits ultrasonic waves from its nose to learn about its surroundings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/527.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Swoobat",
        "_id": "557a73751aa70d44b5aba224"
      }
    ]
  },
  {
    "_id": "557a73871aa70d44b5aba441",
    "pkdx_id": 528,
    "national_id": 528,
    "name": "Swoobat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/528.png",
    "description": "Anyone who comes into contact with the ultrasonic waves emitted by a courting male experiences a positive mood shift.  It shakes its tail vigorously when it emits ultrasonic waves strong enough to reduce concrete to rubble.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/528.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737e1aa70d44b5aba320",
    "pkdx_id": 529,
    "national_id": 529,
    "name": "Drilbur",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/529.png",
    "description": "By spinning its body, it can dig straight through the ground at a speed of 30 mph.  It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/529.png",
    "types": [
      "ground"
    ],
    "evolutions": [
      {
        "level": 31,
        "method": "level_up",
        "to": "Excadrill",
        "_id": "557a737e1aa70d44b5aba321"
      }
    ]
  },
  {
    "_id": "557a737f1aa70d44b5aba335",
    "pkdx_id": 530,
    "national_id": 530,
    "name": "Excadrill",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/530.png",
    "description": "More than 300 feet below the surface, they build mazelike nests. Their activity can be destructive to subway tunnels.  It can help in tunnel construction. Its drill has evolved into steel strong enough to bore through iron plates.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/530.png",
    "types": [
      "ground",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73751aa70d44b5aba21d",
    "pkdx_id": 531,
    "national_id": 531,
    "name": "Audino",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/531.png",
    "description": "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.  Using the feelers on its ears, it can tell how someone is feeling or when an egg might hatch.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/531.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3a7",
    "pkdx_id": 532,
    "national_id": 532,
    "name": "Timburr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/532.png",
    "description": "Always carrying squared logs, they help out with construction. As they grow, they carry bigger logs.  These Pokémon appear at building sites and help out with construction. They always carry squared logs.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/532.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Gurdurr",
        "_id": "557a73831aa70d44b5aba3a8"
      }
    ]
  },
  {
    "_id": "557a73751aa70d44b5aba231",
    "pkdx_id": 533,
    "national_id": 533,
    "name": "Gurdurr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/533.png",
    "description": "This Pokémon is so muscular and strongly built that even a group of wrestlers could not make it budge an inch.  With strengthened bodies, they skillfully wield steel beams to take down buildings.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/533.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Conkeldurr",
        "_id": "557a73751aa70d44b5aba232"
      }
    ]
  },
  {
    "_id": "557a737c1aa70d44b5aba2f7",
    "pkdx_id": 534,
    "national_id": 534,
    "name": "Conkeldurr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/534.png",
    "description": "Rather than rely on force, they master moves that utilize the centrifugal force of spinning concrete.  It is thought that Conkeldurr taught humans how to make concrete more than 2,000 years ago.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/534.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba390",
    "pkdx_id": 535,
    "national_id": 535,
    "name": "Tympole",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/535.png",
    "description": "By vibrating its cheeks, it emits sound waves imperceptible to humans. It uses the rhythm of these sounds to talk.  By vibrating its cheeks, it emits sound waves imperceptible to humans and warns others of danger.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/535.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Palpitoad",
        "_id": "557a73821aa70d44b5aba391"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba415",
    "pkdx_id": 536,
    "national_id": 536,
    "name": "Palpitoad",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/536.png",
    "description": "It lives in the water and on land. It uses its long, sticky tongue to immobilize its opponents.  When they vibrate the bumps on their heads, they can make waves in water or earthquake-like vibrations on land.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/536.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Seismitoad",
        "_id": "557a73861aa70d44b5aba416"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba427",
    "pkdx_id": 537,
    "national_id": 537,
    "name": "Seismitoad",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/537.png",
    "description": "They shoot paralyzing liquid from their head bumps. They use vibration to hurt their opponents.  It increases the power of its punches by vibrating the bumps on its fists. It can turn a boulder to rubble with one punch.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/537.png",
    "types": [
      "ground",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73791aa70d44b5aba292",
    "pkdx_id": 538,
    "national_id": 538,
    "name": "Throh",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/538.png",
    "description": "When it encounters a foe bigger than itself, it wants to throw it. It changes belts as it gets stronger.  When it tightens its belt, it becomes stronger. Wild Throh use vines to weave their own belts.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/538.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737a1aa70d44b5aba2b5",
    "pkdx_id": 539,
    "national_id": 539,
    "name": "Sawk",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/539.png",
    "description": "Tying their belts gets them pumped and makes their punches more destructive. Disturbing their training angers them.  Desiring the strongest karate chop, they seclude themselves in mountains and train without sleeping.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/539.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73781aa70d44b5aba278",
    "pkdx_id": 540,
    "national_id": 540,
    "name": "Sewaddle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/540.png",
    "description": "Since this Pokémon makes its own clothes out of leaves, it is a popular mascot for fashion designers.  This Pokémon makes clothes for itself. It chews up leaves and sews them with sticky thread extruded from its mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/540.png",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Swadloon",
        "_id": "557a73781aa70d44b5aba279"
      }
    ]
  },
  {
    "_id": "557a73781aa70d44b5aba280",
    "pkdx_id": 541,
    "national_id": 541,
    "name": "Swadloon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/541.png",
    "description": "It protects itself from the cold by wrapping up in leaves. It stays on the move, eating leaves in forests.  Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/541.png",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": [
      {
        "method": "level_up",
        "to": "Leavanny",
        "_id": "557a73781aa70d44b5aba281"
      }
    ]
  },
  {
    "_id": "557a73871aa70d44b5aba43d",
    "pkdx_id": 542,
    "national_id": 542,
    "name": "Leavanny",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/542.png",
    "description": "It keeps its eggs warm with heat from fermenting leaves. It also uses leaves to make warm wrappings for Sewaddle.  Upon finding a small Pokémon, it weaves clothing for it from leaves by using the sticky silk secreted from its mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/542.png",
    "types": [
      "bug",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73861aa70d44b5aba422",
    "pkdx_id": 543,
    "national_id": 543,
    "name": "Venipede",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/543.png",
    "description": "Its bite injects a potent poison, enough to paralyze large bird Pokémon that try to prey on it.  It discovers what is going on around it by using the feelers on its head and tail. It is brutally aggressive.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/543.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 22,
        "method": "level_up",
        "to": "Whirlipede",
        "_id": "557a73861aa70d44b5aba423"
      }
    ]
  },
  {
    "_id": "557a73751aa70d44b5aba228",
    "pkdx_id": 544,
    "national_id": 544,
    "name": "Whirlipede",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/544.png",
    "description": "It is usually motionless, but when attacked, it rotates at high speed and then crashes into its opponent.  Protected by a hard shell, it spins its body like a wheel and crashes furiously into its enemies.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/544.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Scolipede",
        "_id": "557a73751aa70d44b5aba229"
      }
    ]
  },
  {
    "_id": "557a73871aa70d44b5aba439",
    "pkdx_id": 545,
    "national_id": 545,
    "name": "Scolipede",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/545.png",
    "description": "With quick movements, it chases down its foes, attacking relentlessly with its horns until it prevails.  It clasps its prey with the claws on its neck until it stops moving. Then it finishes it off with deadly poison.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/545.png",
    "types": [
      "poison",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73871aa70d44b5aba42f",
    "pkdx_id": 546,
    "national_id": 546,
    "name": "Cottonee",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/546.png",
    "description": "Perhaps because they feel more at ease in a group, they stick to others they find. They end up looking like a cloud.  When attacked, it escapes by shooting cotton from its body. The cotton serves as a decoy to distract the attacker.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/546.png",
    "types": [
      "grass",
      "fairy"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Whimsicott",
        "_id": "557a73871aa70d44b5aba430"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba41a",
    "pkdx_id": 547,
    "national_id": 547,
    "name": "Whimsicott",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/547.png",
    "description": "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.  They appear along with whirlwinds. They pull pranks, such as moving furniture and leaving balls of cotton in homes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/547.png",
    "types": [
      "grass",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73871aa70d44b5aba44c",
    "pkdx_id": 548,
    "national_id": 548,
    "name": "Petilil",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/548.png",
    "description": "Since they prefer moist, nutrient-rich soil, the areas where Petilil live are known to be good for growing plants.  The leaves on its head are very bitter. Eating one of these leaves is known to refresh a tired body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/548.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Lilligant",
        "_id": "557a73871aa70d44b5aba44d"
      }
    ]
  },
  {
    "_id": "557a73871aa70d44b5aba449",
    "pkdx_id": 549,
    "national_id": 549,
    "name": "Lilligant",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/549.png",
    "description": "Even veteran Trainers face a challenge in getting its beautiful flower to bloom. This Pokémon is popular with celebrities.  The fragrance of the garland on its head has a relaxing effect. It withers if a Trainer does not take good care of it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/549.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73761aa70d44b5aba24b",
    "pkdx_id": 550,
    "national_id": 550,
    "name": "Basculin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/550.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/550.png",
    "description": "Red- and blue-striped Basculin are very violent and always fighting. They are also remarkably tasty.",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73791aa70d44b5aba295",
    "pkdx_id": 551,
    "national_id": 551,
    "name": "Sandile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/551.png",
    "description": "They live buried in the sands of the desert. The sun-warmed sands prevent their body temperature from dropping.  It moves along below the sand's surface, except for its nose and eyes. A dark membrane shields its eyes from the sun.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/551.png",
    "types": [
      "ground",
      "dark"
    ],
    "evolutions": [
      {
        "level": 29,
        "method": "level_up",
        "to": "Krokorok",
        "_id": "557a73791aa70d44b5aba296"
      }
    ]
  },
  {
    "_id": "557a73721aa70d44b5aba1d5",
    "pkdx_id": 552,
    "national_id": 552,
    "name": "Krokorok",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/552.png",
    "description": "The special membrane covering its eyes can sense the heat of objects, so it can see its surroundings even in darkness.  They live in groups of a few individuals. Protective membranes shield their eyes from sandstorms.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/552.png",
    "types": [
      "ground",
      "dark"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Krookodile",
        "_id": "557a73721aa70d44b5aba1d6"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba40e",
    "pkdx_id": 553,
    "national_id": 553,
    "name": "Krookodile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/553.png",
    "description": "They never allow prey to escape. Their jaws are so powerful, they can crush the body of an automobile.  Very violent Pokémon, they try to clamp down on anything that moves in front of their eyes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/553.png",
    "types": [
      "ground",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a737b1aa70d44b5aba2d6",
    "pkdx_id": 554,
    "national_id": 554,
    "name": "Darumaka",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/554.png",
    "description": "When it sleeps, it pulls its limbs into its body and its internal fire goes down to 1,100 degrees Fahrenheit.  Darumaka's droppings are hot, so people used to put them in their clothes to keep themselves warm.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/554.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Darmanitan-standard",
        "_id": "557a737b1aa70d44b5aba2d7"
      }
    ]
  },
  {
    "_id": "557a73761aa70d44b5aba235",
    "pkdx_id": 555,
    "national_id": 555,
    "name": "Darmanitan",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/555.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/555.png",
    "description": "When one is injured in a fierce battle, it hardens into a stone-like form. Then it meditates and sharpens its mind.",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73771aa70d44b5aba24e",
    "pkdx_id": 556,
    "national_id": 556,
    "name": "Maractus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/556.png",
    "description": "When it finds a stone of a suitable size, it secretes a liquid from its mouth to open up a hole to crawl into.  It uses an up-tempo song and dance to drive away the bird Pokémon that prey on its flower seeds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/556.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73801aa70d44b5aba367",
    "pkdx_id": 557,
    "national_id": 557,
    "name": "Dwebble",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/557.png",
    "description": "Competing for territory, Crustle fight viciously. The one whose boulder is broken is the loser of the battle.  It makes a hole in a suitable rock. If that rock breaks, the Pokémon remains agitated until it locates a replacement.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/557.png",
    "types": [
      "rock",
      "bug"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Crustle",
        "_id": "557a73801aa70d44b5aba368"
      }
    ]
  },
  {
    "_id": "557a73881aa70d44b5aba450",
    "pkdx_id": 558,
    "national_id": 558,
    "name": "Crustle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/558.png",
    "description": "Proud of its sturdy skull, it suddenly headbutts everything, but its weight makes it unstable, too.  It possesses legs of enormous strength, enabling it to carry heavy slabs for many days, even when crossing arid land.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/558.png",
    "types": [
      "rock",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba38b",
    "pkdx_id": 559,
    "national_id": 559,
    "name": "Scraggy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/559.png",
    "description": "It can smash concrete blocks with its kicking attacks. The one with the biggest crest is the group leader.  Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/559.png",
    "types": [
      "fighting",
      "dark"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Scrafty",
        "_id": "557a73821aa70d44b5aba38c"
      }
    ]
  },
  {
    "_id": "557a73841aa70d44b5aba3d2",
    "pkdx_id": 560,
    "national_id": 560,
    "name": "Scrafty",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/560.png",
    "description": "The guardians of an ancient city, they always fly the same route while keeping watch for invaders.  It pulls up its shed skin to protect itself while it kicks. The bigger the crest, the more respected it is.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/560.png",
    "types": [
      "fighting",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73761aa70d44b5aba247",
    "pkdx_id": 561,
    "national_id": 561,
    "name": "Sigilyph",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/561.png",
    "description": "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.  The guardians of an ancient city, they use their psychic power to attack enemies that invade their territory.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/561.png",
    "types": [
      "flying",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73811aa70d44b5aba374",
    "pkdx_id": 562,
    "national_id": 562,
    "name": "Yamask",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/562.png",
    "description": "Grave robbers who mistake them for real coffins and get too close end up trapped inside their bodies.  These Pokémon arose from the spirits of people interred in graves. Each retains memories of its former life.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/562.png",
    "types": [
      "ghost"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Cofagrigus",
        "_id": "557a73811aa70d44b5aba375"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba412",
    "pkdx_id": 563,
    "national_id": 563,
    "name": "Cofagrigus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/563.png",
    "description": "Restored from a fossil, this Pokémon can dive to depths beyond half a mile.  It has been said that they swallow those who get too close and turn them into mummies. They like to eat gold nuggets.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/563.png",
    "types": [
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba3a2",
    "pkdx_id": 564,
    "national_id": 564,
    "name": "Tirtouga",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/564.png",
    "description": "It could knock out a foe with a slap from one of its developed front appendages and chew it up, shell or bones and all.  About 100 million years ago, these Pokémon swam in oceans. It is thought they also went on land to attack prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/564.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Carracosta",
        "_id": "557a73821aa70d44b5aba3a3"
      }
    ]
  },
  {
    "_id": "557a73871aa70d44b5aba445",
    "pkdx_id": 565,
    "national_id": 565,
    "name": "Carracosta",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/565.png",
    "description": "Said to be an ancestor of bird Pokémon, they were unable to fly and moved about by hopping from one branch to another.  They can live both in the ocean and on land. A slap from one of them is enough to open a hole in the bottom of a tanker.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/565.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73871aa70d44b5aba434",
    "pkdx_id": 566,
    "national_id": 566,
    "name": "Archen",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/566.png",
    "description": "It runs better than it flies. It takes off into the sky by running at a speed of 25 mph.  Revived from a fossil, this Pokémon is thought to be the ancestor of all bird Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/566.png",
    "types": [
      "flying",
      "rock"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Archeops",
        "_id": "557a73871aa70d44b5aba435"
      }
    ]
  },
  {
    "_id": "557a73861aa70d44b5aba41e",
    "pkdx_id": 567,
    "national_id": 567,
    "name": "Archeops",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/567.png",
    "description": "Inhaling the gas they belch will make you sleep for a week. They prefer unsanitary places.  They are intelligent and will cooperate to catch prey. From the ground, they use a running start to take flight.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/567.png",
    "types": [
      "flying",
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3c2",
    "pkdx_id": 568,
    "national_id": 568,
    "name": "Trubbish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/568.png",
    "description": "Consuming garbage makes new kinds of poison gases and liquids inside their bodies.  The combination of garbage bags and industrial waste caused the chemical reaction that created this Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/568.png",
    "types": [
      "poison"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Garbodor",
        "_id": "557a73831aa70d44b5aba3c3"
      }
    ]
  },
  {
    "_id": "557a73781aa70d44b5aba26d",
    "pkdx_id": 569,
    "national_id": 569,
    "name": "Garbodor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/569.png",
    "description": "To protect themselves from danger, they hide their true identities by transforming into people and Pokémon.  It clenches opponents with its left arm and finishes them off with foul-smelling poison gas belched from its mouth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/569.png",
    "types": [
      "poison"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73801aa70d44b5aba352",
    "pkdx_id": 570,
    "national_id": 570,
    "name": "Zorua",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/570.png",
    "description": "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents.  It changes so it looks just like its foe, tricks it, and then uses that opportunity to flee.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/570.png",
    "types": [
      "dark"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Zoroark",
        "_id": "557a73801aa70d44b5aba353"
      }
    ]
  },
  {
    "_id": "557a737b1aa70d44b5aba2da",
    "pkdx_id": 571,
    "national_id": 571,
    "name": "Zoroark",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/571.png",
    "description": "These Pokémon prefer a tidy habitat. They are always sweeping and dusting, using their tails as brooms.  Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/571.png",
    "types": [
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3ab",
    "pkdx_id": 572,
    "national_id": 572,
    "name": "Minccino",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/572.png",
    "description": "Cinccino's body is coated in a special oil that helps it deflect attacks, such as punches.  Minccino greet each other by grooming one another thoroughly with their tails.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/572.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Cinccino",
        "_id": "557a73831aa70d44b5aba3ac"
      }
    ]
  },
  {
    "_id": "557a73811aa70d44b5aba37b",
    "pkdx_id": 573,
    "national_id": 573,
    "name": "Cinccino",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/573.png",
    "description": "They intently observe both Trainers and Pokémon. Apparently, they are looking at something that only Gothita can see.  Their white fur feels amazing to touch. Their fur repels dust and prevents static electricity from building up.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/573.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3ba",
    "pkdx_id": 574,
    "national_id": 574,
    "name": "Gothita",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/574.png",
    "description": "According to many old tales, it creates friends for itself by controlling sleeping children on starry nights.  Their ribbonlike feelers increase their psychic power. They are always staring at something.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/574.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Gothorita",
        "_id": "557a73831aa70d44b5aba3bb"
      }
    ]
  },
  {
    "_id": "557a73791aa70d44b5aba29f",
    "pkdx_id": 575,
    "national_id": 575,
    "name": "Gothorita",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/575.png",
    "description": "They can predict the future from the placement and movement of the stars. They can see Trainers' life spans.  Starlight is the source of their power. At night, they mark star positions by using psychic power to float stones.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/575.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 41,
        "method": "level_up",
        "to": "Gothitelle",
        "_id": "557a73791aa70d44b5aba2a0"
      }
    ]
  },
  {
    "_id": "557a736d1aa70d44b5aba130",
    "pkdx_id": 576,
    "national_id": 576,
    "name": "Gothitelle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/576.png",
    "description": "They drive away attackers by unleashing psychic power. They can use telepathy to talk with others.  Starry skies thousands of light-years away are visible in the space distorted by their intense psychic power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/576.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73831aa70d44b5aba3af",
    "pkdx_id": 577,
    "national_id": 577,
    "name": "Solosis",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/577.png",
    "description": "When their two divided brains think the same thoughts, their psychic power is maximized.  Because their bodies are enveloped in a special liquid, they are fine in any environment, no matter how severe.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/577.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Duosion",
        "_id": "557a73831aa70d44b5aba3b0"
      }
    ]
  },
  {
    "_id": "557a737f1aa70d44b5aba34a",
    "pkdx_id": 578,
    "national_id": 578,
    "name": "Duosion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/578.png",
    "description": "When Reuniclus shake hands, a network forms between their brains, increasing their psychic power.  Since they have two divided brains, at times they suddenly try to take two different actions at once.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/578.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 41,
        "method": "level_up",
        "to": "Reuniclus",
        "_id": "557a737f1aa70d44b5aba34b"
      }
    ]
  },
  {
    "_id": "557a73821aa70d44b5aba39f",
    "pkdx_id": 579,
    "national_id": 579,
    "name": "Reuniclus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/579.png",
    "description": "They are better at swimming than flying, and they happily eat their favorite food, peat moss, as they dive underwater.  They use psychic power to control their arms, which are made of a special liquid. They can crush boulders psychically.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/579.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73851aa70d44b5aba3f7",
    "pkdx_id": 580,
    "national_id": 580,
    "name": "Ducklett",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/580.png",
    "description": "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.  When attacked, it uses its feathers to splash water, escaping under cover of the spray.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/580.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Swanna",
        "_id": "557a73851aa70d44b5aba3f8"
      }
    ]
  },
  {
    "_id": "557a73851aa70d44b5aba40a",
    "pkdx_id": 581,
    "national_id": 581,
    "name": "Swanna",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/581.png",
    "description": "This Pokémon formed from icicles bathed in energy from the morning sun. It sleeps buried in snow.  Despite their elegant appearance, they can flap their wings strongly and fly for thousands of miles.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/581.png",
    "types": [
      "flying",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73851aa70d44b5aba3e8",
    "pkdx_id": 582,
    "national_id": 582,
    "name": "Vanillite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/582.png",
    "description": "Snowy mountains are this Pokémon's habitat. During an ancient ice age, they moved to southern areas.  The temperature of their breath is -58 degrees Fahrenheit. They create snow crystals and make snow fall in the areas around them.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/582.png",
    "types": [
      "ice"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Vanillish",
        "_id": "557a73851aa70d44b5aba3e9"
      }
    ]
  },
  {
    "_id": "557a73721aa70d44b5aba1cd",
    "pkdx_id": 583,
    "national_id": 583,
    "name": "Vanillish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/583.png",
    "description": "Swallowing large amounts of water, they make snow clouds inside their bodies and, when angry, cause violent blizzards.  They cool down the surrounding air and create ice particles, which they use to freeze their foes.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/583.png",
    "types": [
      "ice"
    ],
    "evolutions": [
      {
        "level": 47,
        "method": "level_up",
        "to": "Vanilluxe",
        "_id": "557a73721aa70d44b5aba1ce"
      }
    ]
  },
  {
    "_id": "557a73851aa70d44b5aba3f0",
    "pkdx_id": 584,
    "national_id": 584,
    "name": "Vanilluxe",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/584.png",
    "description": "If both heads get angry simultaneously, this Pokémon expels a blizzard, burying everything in snow.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/584.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73851aa70d44b5aba401",
    "pkdx_id": 585,
    "national_id": 585,
    "name": "Deerling",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/585.png",
    "description": "The turning of the seasons changes the color and scent of this Pokémon's fur. People use it to mark the seasons.  Their coloring changes according to the seasons and can be slightly affected by the temperature and humidity as well.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/585.png",
    "types": [
      "normal",
      "grass"
    ],
    "evolutions": [
      {
        "level": 34,
        "method": "level_up",
        "to": "Sawsbuck",
        "_id": "557a73851aa70d44b5aba402"
      }
    ]
  },
  {
    "_id": "557a73831aa70d44b5aba3be",
    "pkdx_id": 586,
    "national_id": 586,
    "name": "Sawsbuck",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/586.png",
    "description": "They migrate according to the seasons, so some people call Sawsbuck the harbingers of spring.  They migrate according to the seasons. People can tell the season by looking at Sawsbuck's horns.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/586.png",
    "types": [
      "normal",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73841aa70d44b5aba3df",
    "pkdx_id": 587,
    "national_id": 587,
    "name": "Emolga",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/587.png",
    "description": "The energy made in its cheeks' electric pouches is stored inside its membrane and released while it is gliding.  They live on treetops and glide using the inside of a cape-like membrane while discharging electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/587.png",
    "types": [
      "flying",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba387",
    "pkdx_id": 588,
    "national_id": 588,
    "name": "Karrablast",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/588.png",
    "description": "For some reason they evolve when they receive electrical energy while they are attacking Shelmet.  These mysterious Pokémon evolve when they receive electrical stimulation while they are in the same place as Shelmet.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/588.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Escavalier",
        "_id": "557a73821aa70d44b5aba388"
      }
    ]
  },
  {
    "_id": "557a737f1aa70d44b5aba34e",
    "pkdx_id": 589,
    "national_id": 589,
    "name": "Escavalier",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/589.png",
    "description": "These Pokémon evolve by wearing the shell covering of a Shelmet. The steel armor protects their whole body.  Wearing the shell covering they stole from Shelmet, they defend themselves and attack with two lances.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/589.png",
    "types": [
      "bug",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73811aa70d44b5aba382",
    "pkdx_id": 590,
    "national_id": 590,
    "name": "Foongus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/590.png",
    "description": "It lures Pokémon with its pattern that looks just like a Poké Ball, then releases poison spores.  It lures people in with its Poké Ball pattern, then releases poison spores. Why it resembles a Poké Ball is unknown.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/590.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Amoonguss",
        "_id": "557a73811aa70d44b5aba383"
      }
    ]
  },
  {
    "_id": "557a73801aa70d44b5aba36c",
    "pkdx_id": 591,
    "national_id": 591,
    "name": "Amoonguss",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/591.png",
    "description": "It lures prey close by dancing and waving its arm caps, which resemble Poké Balls, in a swaying motion.  They show off their Poké Ball caps to lure prey, but very few Pokémon are fooled by this.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/591.png",
    "types": [
      "poison",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73841aa70d44b5aba3e3",
    "pkdx_id": 592,
    "national_id": 592,
    "name": "Frillish",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/592.png",
    "description": "If its veil-like arms stun and wrap a foe, that foe will be dragged miles below the surface, never to return.  They paralyze prey with poison, then drag them down to their lairs, five miles below the surface.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/592.png",
    "types": [
      "ghost",
      "water"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Jellicent",
        "_id": "557a73841aa70d44b5aba3e4"
      }
    ]
  },
  {
    "_id": "557a73851aa70d44b5aba3ec",
    "pkdx_id": 593,
    "national_id": 593,
    "name": "Jellicent",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/593.png",
    "description": "The fate of the ships and crew that wander into Jellicent's habitat: all sunken, all lost, all vanished.  Its body is mostly seawater. It's said there's a castle of ships Jellicent have sunk on the seafloor.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/593.png",
    "types": [
      "ghost",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73821aa70d44b5aba398",
    "pkdx_id": 594,
    "national_id": 594,
    "name": "Alomomola",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/594.png",
    "description": "It gently holds injured and weak Pokémon in its fins. Its special membrane heals their wounds.  Floating in the open sea is how they live. When they find a wounded Pokémon, they embrace it and bring it to shore.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/594.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73841aa70d44b5aba3da",
    "pkdx_id": 595,
    "national_id": 595,
    "name": "Joltik",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/595.png",
    "description": "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.  Since it can't generate its own electricity, it sticks onto large-bodied Pokémon and absorbs static electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/595.png",
    "types": [
      "bug",
      "electric"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Galvantula",
        "_id": "557a73841aa70d44b5aba3db"
      }
    ]
  },
  {
    "_id": "557a73851aa70d44b5aba406",
    "pkdx_id": 596,
    "national_id": 596,
    "name": "Galvantula",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/596.png",
    "description": "When attacked, they create an electric barrier by spitting out many electrically charged threads.  They employ an electrically charged web to trap their prey. While it is immobilized by shock, they leisurely consume it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/596.png",
    "types": [
      "bug",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73851aa70d44b5aba3fc",
    "pkdx_id": 597,
    "national_id": 597,
    "name": "Ferroseed",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/597.png",
    "description": "It absorbs the iron it finds in the rock while clinging to the ceiling. It shoots spikes when in danger.  When threatened, it attacks by shooting a barrage of spikes, which gives it a chance to escape by rolling away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/597.png",
    "types": [
      "steel",
      "grass"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Ferrothorn",
        "_id": "557a73851aa70d44b5aba3fd"
      }
    ]
  },
  {
    "_id": "557a73841aa70d44b5aba3d6",
    "pkdx_id": 598,
    "national_id": 598,
    "name": "Ferrothorn",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/598.png",
    "description": "They attach themselves to cave ceilings, firing steel spikes at targets passing beneath them.  By swinging around its three spiky feelers and shooting spikes, it can obliterate an opponent.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/598.png",
    "types": [
      "steel",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73851aa70d44b5aba3f3",
    "pkdx_id": 599,
    "national_id": 599,
    "name": "Klink",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/599.png",
    "description": "The two minigears that mesh together are predetermined. Each will rebound from other minigears without meshing.  Interlocking two bodies and spinning around generates the energy they need to live.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/599.png",
    "types": [
      "steel"
    ],
    "evolutions": [
      {
        "level": 38,
        "method": "level_up",
        "to": "Klang",
        "_id": "557a73851aa70d44b5aba3f4"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd16",
    "pkdx_id": 600,
    "national_id": 600,
    "name": "Klang",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/600.png",
    "description": "A minigear and big gear comprise its body. If the minigear it launches at a foe doesn't return, it will die.  By changing the direction in which it rotates, it communicates its feelings to others. When angry, it rotates faster.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/600.png",
    "types": [
      "steel"
    ],
    "evolutions": [
      {
        "level": 49,
        "method": "level_up",
        "to": "Klinklang",
        "_id": "557a739b5de688cfb5dfdd17"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd1a",
    "pkdx_id": 601,
    "national_id": 601,
    "name": "Klinklang",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/601.png",
    "description": "Its red core functions as an energy tank. It fires the charged energy through its spikes into an area.  The gear with the red core is rotated at high speed for a rapid energy charge.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/601.png",
    "types": [
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739b5de688cfb5dfdd24",
    "pkdx_id": 602,
    "national_id": 602,
    "name": "Tynamo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/602.png",
    "description": "One alone can emit only a trickle of electricity, so a group of them gathers to unleash a powerful electric shock.  While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/602.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Eelektrik",
        "_id": "557a739b5de688cfb5dfdd25"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd1d",
    "pkdx_id": 603,
    "national_id": 603,
    "name": "Eelektrik",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/603.png",
    "description": "These Pokémon have a big appetite. When they spot their prey, they attack it and paralyze it with electricity.  It wraps itself around its prey and paralyzes it with electricity from the round spots on its sides. Then it chomps.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/603.png",
    "types": [
      "electric"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Eelektross",
        "_id": "557a739b5de688cfb5dfdd1e"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd28",
    "pkdx_id": 604,
    "national_id": 604,
    "name": "Eelektross",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/604.png",
    "description": "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.  With their sucker mouths, they suck in prey. Then they use their fangs to shock the prey with electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/604.png",
    "types": [
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739c5de688cfb5dfdd49",
    "pkdx_id": 605,
    "national_id": 605,
    "name": "Elgyem",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/605.png",
    "description": "Rumors of its origin are linked to a UFO crash site in the desert 50 years ago.  It uses its strong psychic power to squeeze its opponent's brain, causing unendurable headaches.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/605.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 42,
        "method": "level_up",
        "to": "Beheeyem",
        "_id": "557a739c5de688cfb5dfdd4a"
      }
    ]
  },
  {
    "_id": "557a739e5de688cfb5dfdd74",
    "pkdx_id": 606,
    "national_id": 606,
    "name": "Beheeyem",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/606.png",
    "description": "It uses psychic power to control an opponent's brain and tamper with its memories.  Apparently, it communicates by flashing its three fingers, but those patterns haven't been decoded.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/606.png",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd77",
    "pkdx_id": 607,
    "national_id": 607,
    "name": "Litwick",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/607.png",
    "description": "Litwick shines a light that absorbs the life energy of people and Pokémon, which becomes the fuel that it burns.  While shining a light and pretending to be a guide, it leeches off the life force of any who follow it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/607.png",
    "types": [
      "ghost",
      "fire"
    ],
    "evolutions": [
      {
        "level": 41,
        "method": "level_up",
        "to": "Lampent",
        "_id": "557a739e5de688cfb5dfdd78"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd2b",
    "pkdx_id": 608,
    "national_id": 608,
    "name": "Lampent",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/608.png",
    "description": "It arrives near the moment of death and steals spirit from the body.  The spirits it absorbs fuel its baleful fire. It hangs around hospitals waiting for people to pass on.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/608.png",
    "types": [
      "ghost",
      "fire"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Chandelure",
        "_id": "557a739b5de688cfb5dfdd2c"
      }
    ]
  },
  {
    "_id": "557a739c5de688cfb5dfdd3e",
    "pkdx_id": 609,
    "national_id": 609,
    "name": "Chandelure",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/609.png",
    "description": "The spirits burned up in its ominous flame lose their way and wander this world forever.  Being consumed in Chandelure's flame burns up the spirit, leaving the body behind.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/609.png",
    "types": [
      "ghost",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739b5de688cfb5dfdd33",
    "pkdx_id": 610,
    "national_id": 610,
    "name": "Axew",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/610.png",
    "description": "They mark their territory by leaving gashes in trees with their tusks. If a tusk breaks, a new one grows in quickly.  They use their tusks to crush the berries they eat. Repeated regrowth makes their tusks strong and sharp.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/610.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 38,
        "method": "level_up",
        "to": "Fraxure",
        "_id": "557a739b5de688cfb5dfdd34"
      }
    ]
  },
  {
    "_id": "557a739d5de688cfb5dfdd54",
    "pkdx_id": 611,
    "national_id": 611,
    "name": "Fraxure",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/611.png",
    "description": "A broken tusk will not grow back, so it diligently sharpens its tusks on river rocks after the end of a battle.  Their tusks can shatter rocks. Territory battles between Fraxure can be intensely violent.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/611.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 48,
        "method": "level_up",
        "to": "Haxorus",
        "_id": "557a739d5de688cfb5dfdd55"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd30",
    "pkdx_id": 612,
    "national_id": 612,
    "name": "Haxorus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/612.png",
    "description": "Their sturdy tusks will stay sharp even if used to cut steel beams. These Pokémon are covered in hard armor.  They are kind but can be relentless when defending territory. They challenge foes with tusks that can cut steel.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/612.png",
    "types": [
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739c5de688cfb5dfdd3a",
    "pkdx_id": 613,
    "national_id": 613,
    "name": "Cubchoo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/613.png",
    "description": "Their snot is a barometer of health. When healthy, their snot is sticky and the power of their ice moves increases.  Its nose is always running. It sniffs the snot back up because the mucus provides the raw material for its moves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/613.png",
    "types": [
      "ice"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Beartic",
        "_id": "557a739c5de688cfb5dfdd3b"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd37",
    "pkdx_id": 614,
    "national_id": 614,
    "name": "Beartic",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/614.png",
    "description": "It freezes its breath to create fangs and claws of ice to fight with. Cold northern areas are its habitat.  They love the cold seas of the north. They create pathways across the ocean waters by freezing their own breath.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/614.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739c5de688cfb5dfdd42",
    "pkdx_id": 615,
    "national_id": 615,
    "name": "Cryogonal",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/615.png",
    "description": "They are composed of ice crystals. They capture prey with chains of ice, freezing the prey at -148 degrees Fahrenheit.  They are born in snow clouds. They use chains made of ice crystals to capture prey.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/615.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd87",
    "pkdx_id": 616,
    "national_id": 616,
    "name": "Shelmet",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/616.png",
    "description": "It evolves when bathed in an electric-like energy along with Karrablast. The reason is still unknown.  When it and Karrablast are together, and both receive electrical stimulation, they both evolve.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/616.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Accelgor",
        "_id": "557a739e5de688cfb5dfdd88"
      }
    ]
  },
  {
    "_id": "557a739b5de688cfb5dfdd21",
    "pkdx_id": 617,
    "national_id": 617,
    "name": "Accelgor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/617.png",
    "description": "When its body dries out, it weakens. So, to prevent dehydration, it wraps itself in many layers of thin membrane.  Having removed its heavy shell, it becomes very light and can fight with ninja-like movements.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/617.png",
    "types": [
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739d5de688cfb5dfdd64",
    "pkdx_id": 618,
    "national_id": 618,
    "name": "Stunfisk",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/618.png",
    "description": "It conceals itself in the mud of the seashore. Then it waits. When prey touch it, it delivers a jolt of electricity.  Its skin is very hard, so it is unhurt even if stepped on by sumo wrestlers. It smiles when transmitting electricity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/618.png",
    "types": [
      "ground",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739c5de688cfb5dfdd45",
    "pkdx_id": 619,
    "national_id": 619,
    "name": "Mienfoo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/619.png",
    "description": "In fights, they dominate with onslaughts of flowing, continuous attacks. With their sharp claws, they cut enemies.  It takes pride in the speed at which it can use moves. What it loses in power, it makes up for in quantity.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/619.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 50,
        "method": "level_up",
        "to": "Mienshao",
        "_id": "557a739c5de688cfb5dfdd46"
      }
    ]
  },
  {
    "_id": "557a739c5de688cfb5dfdd4d",
    "pkdx_id": 620,
    "national_id": 620,
    "name": "Mienshao",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/620.png",
    "description": "Using the long fur on its arms like whips, it launches into combo attacks that, once started, no one can stop.  It wields the fur on its arms like a whip. Its arm attacks come with such rapidity that they cannot even be seen.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/620.png",
    "types": [
      "fighting"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd7c",
    "pkdx_id": 621,
    "national_id": 621,
    "name": "Druddigon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/621.png",
    "description": "It warms its body by absorbing sunlight with its wings. When its body temperature falls, it can no longer move.  It races through narrow caves, using its sharp claws to catch prey. The skin on its face is harder than a rock.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/621.png",
    "types": [
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739d5de688cfb5dfdd6f",
    "pkdx_id": 622,
    "national_id": 622,
    "name": "Golett",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/622.png",
    "description": "Ancient science fashioned this Pokémon from clay. It's been active for thousands of years.  The energy that burns inside it enables it to move, but no one has yet been able to identify this energy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/622.png",
    "types": [
      "ground",
      "ghost"
    ],
    "evolutions": [
      {
        "level": 43,
        "method": "level_up",
        "to": "Golurk",
        "_id": "557a739d5de688cfb5dfdd70"
      }
    ]
  },
  {
    "_id": "557a739d5de688cfb5dfdd5b",
    "pkdx_id": 623,
    "national_id": 623,
    "name": "Golurk",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/623.png",
    "description": "It flies across the sky at Mach speeds. Removing the seal on its chest makes its internal energy go out of control.  It is said that Golurk were ordered to protect people and Pokémon by the ancient people who made them.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/623.png",
    "types": [
      "ground",
      "ghost"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739d5de688cfb5dfdd5f",
    "pkdx_id": 624,
    "national_id": 624,
    "name": "Pawniard",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/624.png",
    "description": "Ignoring their injuries, groups attack by sinking the blades that cover their bodies into their prey.  Blades comprise this Pokémon's entire body. If battling dulls the blades, it sharpens them on stones by the river.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/624.png",
    "types": [
      "steel",
      "dark"
    ],
    "evolutions": [
      {
        "level": 52,
        "method": "level_up",
        "to": "Bisharp",
        "_id": "557a739d5de688cfb5dfdd60"
      }
    ]
  },
  {
    "_id": "557a739c5de688cfb5dfdd50",
    "pkdx_id": 625,
    "national_id": 625,
    "name": "Bisharp",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/625.png",
    "description": "Bisharp pursues prey in the company of a large group of Pawniard. Then Bisharp finishes off the prey.  This pitiless Pokémon commands a group of Pawniard to hound prey into immobility. It then moves in to finish the prey off.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/625.png",
    "types": [
      "steel",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd7f",
    "pkdx_id": 626,
    "national_id": 626,
    "name": "Bouffalant",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/626.png",
    "description": "Their fluffy fur absorbs damage, even if they strike foes with a fierce headbutt.  They charge wildly and headbutt everything. Their headbutts have enough destructive force to derail a train.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/626.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfdddc",
    "pkdx_id": 627,
    "national_id": 627,
    "name": "Rufflet",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/627.png",
    "description": "They will challenge anything, even strong opponents, without fear. Their frequent fights help them become stronger.  They crush berries with their talons. They bravely stand up to any opponent, no matter how strong it is.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/627.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 54,
        "method": "level_up",
        "to": "Braviary",
        "_id": "557a73a05de688cfb5dfdddd"
      }
    ]
  },
  {
    "_id": "557a739f5de688cfb5dfdd9b",
    "pkdx_id": 628,
    "national_id": 628,
    "name": "Braviary",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/628.png",
    "description": "They fight for their friends without any thought about danger to themselves. One can carry a car while flying.  For the sake of its friends, this brave warrior of the sky will not stop battling, even if injured.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/628.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfddf9",
    "pkdx_id": 629,
    "national_id": 629,
    "name": "Vullaby",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/629.png",
    "description": "Their wings are too tiny to allow them to fly. They guard their posteriors with bones that were gathered by Mandibuzz.  Its wings are too tiny to allow it to fly. As the time approaches for it to evolve, it discards the bones it was wearing.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/629.png",
    "types": [
      "flying",
      "dark"
    ],
    "evolutions": [
      {
        "level": 54,
        "method": "level_up",
        "to": "Mandibuzz",
        "_id": "557a73a15de688cfb5dfddfa"
      }
    ]
  },
  {
    "_id": "557a739d5de688cfb5dfdd68",
    "pkdx_id": 630,
    "national_id": 630,
    "name": "Mandibuzz",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/630.png",
    "description": "Watching from the sky, they swoop to strike weakened Pokémon on the ground. They decorate themselves with bones.  They fly in circles around the sky. When they spot prey, they attack and carry it back to their nest with ease.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/630.png",
    "types": [
      "flying",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739d5de688cfb5dfdd58",
    "pkdx_id": 631,
    "national_id": 631,
    "name": "Heatmor",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/631.png",
    "description": "It draws in air through its tail, transforms it into fire, and uses it like a tongue. It melts Durant and eats them.  Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/631.png",
    "types": [
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddbc",
    "pkdx_id": 632,
    "national_id": 632,
    "name": "Durant",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/632.png",
    "description": "They attack in groups, covering themselves in steel armor to protect themselves from Heatmor.  Individuals each play different roles in driving Heatmor, their natural predator, away from their colony.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/632.png",
    "types": [
      "bug",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd8b",
    "pkdx_id": 633,
    "national_id": 633,
    "name": "Deino",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/633.png",
    "description": "Lacking sight, it's unaware of its surroundings, so it bumps into things and eats anything that moves.  They cannot see, so they tackle and bite to learn about their surroundings. Their bodies are covered in wounds.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/633.png",
    "types": [
      "dragon",
      "dark"
    ],
    "evolutions": [
      {
        "level": 50,
        "method": "level_up",
        "to": "Zweilous",
        "_id": "557a739e5de688cfb5dfdd8c"
      }
    ]
  },
  {
    "_id": "557a739e5de688cfb5dfdd82",
    "pkdx_id": 634,
    "national_id": 634,
    "name": "Zweilous",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/634.png",
    "description": "After it has eaten up all the food in its territory, it moves to another area. Its two heads do not get along.  The two heads do not get along. Whichever head eats more than the other gets to be the leader.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/634.png",
    "types": [
      "dragon",
      "dark"
    ],
    "evolutions": [
      {
        "level": 64,
        "method": "level_up",
        "to": "Hydreigon",
        "_id": "557a739e5de688cfb5dfdd83"
      }
    ]
  },
  {
    "_id": "557a739f5de688cfb5dfddb8",
    "pkdx_id": 635,
    "national_id": 635,
    "name": "Hydreigon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/635.png",
    "description": "It responds to movement by attacking. This scary, three-headed Pokémon devours everything in its path!  The heads on their arms do not have brains. They use all three heads to consume and destroy everything.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/635.png",
    "types": [
      "dragon",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfddfe",
    "pkdx_id": 636,
    "national_id": 636,
    "name": "Larvesta",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/636.png",
    "description": "The base of volcanoes is where they make their homes. They shoot fire from their five horns to repel attacking enemies.  Said to have been born from the sun, it spews fire from its horns and encases itself in a cocoon of fire when it evolves.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/636.png",
    "types": [
      "bug",
      "fire"
    ],
    "evolutions": [
      {
        "level": 59,
        "method": "level_up",
        "to": "Volcarona",
        "_id": "557a73a15de688cfb5dfddff"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfdde5",
    "pkdx_id": 637,
    "national_id": 637,
    "name": "Volcarona",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/637.png",
    "description": "When volcanic ash darkened the atmosphere, it is said that Volcarona's fire provided a replacement for the sun.  A sea of fire engulfs the surroundings of their battles, since they use their six wings to scatter their ember scales.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/637.png",
    "types": [
      "bug",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfdde1",
    "pkdx_id": 638,
    "national_id": 638,
    "name": "Cobalion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/638.png",
    "description": "It has a body and heart of steel. It worked with its allies to punish people when they hurt Pokémon.  It has a body and heart of steel. Its glare is sufficient to make even an unruly Pokémon obey it.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/638.png",
    "types": [
      "fighting",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddc4",
    "pkdx_id": 639,
    "national_id": 639,
    "name": "Terrakion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/639.png",
    "description": "Spoken of in legend, this Pokémon used its phenomenal power to destroy a castle in its effort to protect Pokémon.  Its charge is strong enough to break through a giant castle wall in one blow. This Pokémon is spoken of in legends.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/639.png",
    "types": [
      "fighting",
      "rock"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739f5de688cfb5dfddb4",
    "pkdx_id": 640,
    "national_id": 640,
    "name": "Virizion",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/640.png",
    "description": "Legends say this Pokémon confounded opponents with its swift movements.  Its head sprouts horns as sharp as blades. Using whirlwind-like movements, it confounds and swiftly cuts opponents.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/640.png",
    "types": [
      "fighting",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739f5de688cfb5dfdd98",
    "pkdx_id": 641,
    "national_id": 641,
    "name": "Tornadus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/641.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/641.png",
    "description": "The lower half of its body is wrapped in a cloud of energy. It zooms through the sky at 200 mph.",
    "types": [
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddd4",
    "pkdx_id": 642,
    "national_id": 642,
    "name": "Thundurus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/642.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/642.png",
    "description": "The spikes on its tail discharge immense bolts of lightning. It flies around the Unova region firing off lightning bolts.",
    "types": [
      "flying",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfddf1",
    "pkdx_id": 643,
    "national_id": 643,
    "name": "Reshiram",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/643.png",
    "description": "When Reshiram's tail flares, the heat energy moves the atmosphere and changes the world's weather.  This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/643.png",
    "types": [
      "fire",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde1f",
    "pkdx_id": 644,
    "national_id": 644,
    "name": "Zekrom",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/644.png",
    "description": "Concealing itself in lightning clouds, it flies throughout the Unova region. It creates electricity in its tail.  This legendary Pokémon can scorch the world with lightning. It assists those who want to build an ideal world.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/644.png",
    "types": [
      "electric",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddd8",
    "pkdx_id": 645,
    "national_id": 645,
    "name": "Landorus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/645.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/645.png",
    "description": "Lands visited by Landorus grant such bountiful crops that it has been hailed as “The Guardian of the Fields.”",
    "types": [
      "flying",
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739f5de688cfb5dfddac",
    "pkdx_id": 646,
    "national_id": 646,
    "name": "Kyurem",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/646.png",
    "description": "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.  This legendary ice Pokémon waits for a hero to fill in the missing parts of its body with truth or ideals.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/646.png",
    "types": [
      "ice",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739f5de688cfb5dfdd9f",
    "pkdx_id": 647,
    "national_id": 647,
    "name": "Keldeo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/647.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/647.png",
    "description": "It crosses the world, running over the surfaces of oceans and rivers. It appears at scenic waterfronts.",
    "types": [
      "fighting",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfddf5",
    "pkdx_id": 648,
    "national_id": 648,
    "name": "Meloetta",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/648.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/648.png",
    "description": "The melodies sung by Meloetta have the power to make Pokémon that hear them happy or sad.",
    "types": [
      "normal",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde17",
    "pkdx_id": 649,
    "national_id": 649,
    "name": "Genesect",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/649.png",
    "description": "This Pokémon existed 300 million years ago. Team Plasma altered it and attached a cannon to its back.  This ancient bug Pokémon was altered by Team Plasma. They upgraded the cannon on its back.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/649.png",
    "types": [
      "bug",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddc8",
    "pkdx_id": 650,
    "national_id": 650,
    "name": "Chespin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/650.png",
    "description": "Such a thick shell of wood covers its head and back that even a direct hit from a truck wouldn't faze it.  The quills on its head are usually soft. When it flexes them, the points become so hard and sharp that they can pierce rock.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/650.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Quilladin",
        "_id": "557a73a05de688cfb5dfddc9"
      }
    ]
  },
  {
    "_id": "557a739f5de688cfb5dfddb0",
    "pkdx_id": 651,
    "national_id": 651,
    "name": "Quilladin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/651.png",
    "description": "They strengthen their lower bodies by running into one another. They are very kind and won't start fights.  It relies on its sturdy shell to deflect predators' attacks. It counterattacks with its sharp quills.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/651.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Chesnaught",
        "_id": "557a739f5de688cfb5dfddb1"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfde13",
    "pkdx_id": 652,
    "national_id": 652,
    "name": "Chesnaught",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/652.png",
    "description": "When it takes a defensive posture with its fists guarding its face, it could withstand a bomb blast.  Its Tackle is forceful enough to flip a 50-ton tank. It shields its allies from danger with its own body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/652.png",
    "types": [
      "fighting",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfde03",
    "pkdx_id": 653,
    "national_id": 653,
    "name": "Fennekin",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/653.png",
    "description": "As it walks, it munches on a twig in place of a snack. It intimidates opponents by puffing hot air out of its ears.  Eating a twig fills it with energy, and its roomy ears give vent to air hotter than 390 degrees Fahrenheit.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/653.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Braixen",
        "_id": "557a73a15de688cfb5dfde04"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfde07",
    "pkdx_id": 654,
    "national_id": 654,
    "name": "Braixen",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/654.png",
    "description": "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.  It has a twig stuck in its tail. With friction from its tail fur, it sets the twig on fire and launches into battle.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/654.png",
    "types": [
      "fire"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Delphox",
        "_id": "557a73a15de688cfb5dfde08"
      }
    ]
  },
  {
    "_id": "557a739e5de688cfb5dfdd94",
    "pkdx_id": 655,
    "national_id": 655,
    "name": "Delphox",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/655.png",
    "description": "Using psychic power, it generates a fiery vortex of 5,400 degrees Fahrenheit, incinerating foes swept into this whirl of flame.  It gazes into the flame at the tip of its branch to achieve a focused state, which allows it to see into the future.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/655.png",
    "types": [
      "fire",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde37",
    "pkdx_id": 656,
    "national_id": 656,
    "name": "Froakie",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/656.png",
    "description": "It protects its skin by covering its body in delicate bubbles. Beneath its happy-go-lucky air, it keeps a watchful eye on its surroundings.  It secretes flexible bubbles from its chest and back. The bubbles reduce the damage it would otherwise take when attacked.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/656.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 16,
        "method": "level_up",
        "to": "Frogadier",
        "_id": "557a73a25de688cfb5dfde38"
      }
    ]
  },
  {
    "_id": "557a73a05de688cfb5dfddcc",
    "pkdx_id": 657,
    "national_id": 657,
    "name": "Frogadier",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/657.png",
    "description": "Its swiftness is unparalleled. It can scale a tower of more than 2,000 feet in a minute's time.  It can throw bubble-covered pebbles with precise control, hitting empty cans up to a hundred feet away.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/657.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 36,
        "method": "level_up",
        "to": "Greninja",
        "_id": "557a73a05de688cfb5dfddcd"
      }
    ]
  },
  {
    "_id": "557a73a25de688cfb5dfde23",
    "pkdx_id": 658,
    "national_id": 658,
    "name": "Greninja",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/658.png",
    "description": "It appears and vanishes with a ninja's grace. It toys with its enemies using swift movements, while slicing them with throwing stars of sharpest water.  It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/658.png",
    "types": [
      "water",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739e5de688cfb5dfdd90",
    "pkdx_id": 659,
    "national_id": 659,
    "name": "Bunnelby",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/659.png",
    "description": "It has ears like shovels. Digging holes strengthens its ears so much that they can sever thick roots effortlessly.  They use their large ears to dig burrows. They will dig the whole night through.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/659.png",
    "types": [
      "normal"
    ],
    "evolutions": [
      {
        "level": 20,
        "method": "level_up",
        "to": "Diggersby",
        "_id": "557a739e5de688cfb5dfdd91"
      }
    ]
  },
  {
    "_id": "557a73a25de688cfb5dfde3b",
    "pkdx_id": 660,
    "national_id": 660,
    "name": "Diggersby",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/660.png",
    "description": "As powerful as an excavator, its ears can reduce dense bedrock to rubble. When it's finished digging, it lounges lazily.  With their powerful ears, they can heft boulders of a ton or more with ease. They can be a big help at construction sites.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/660.png",
    "types": [
      "normal",
      "ground"
    ],
    "evolutions": []
  },
  {
    "_id": "557a739f5de688cfb5dfdda3",
    "pkdx_id": 661,
    "national_id": 661,
    "name": "Fletchling",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/661.png",
    "description": "Despite the beauty of its lilting voice, it's merciless to intruders that enter its territory.  These friendly Pokémon send signals to one another with beautiful chirps and tail-feather movements.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/661.png",
    "types": [
      "normal",
      "flying"
    ],
    "evolutions": [
      {
        "level": 17,
        "method": "level_up",
        "to": "Fletchinder",
        "_id": "557a739f5de688cfb5dfdda4"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde55",
    "pkdx_id": 662,
    "national_id": 662,
    "name": "Fletchinder",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/662.png",
    "description": "The hotter the flame sac on its belly, the faster it can fly, but it takes some time to get the fire going.  From its beak, it expels embers that set the tall grass on fire. Then it pounces on the bewildered prey that pop out of the grass.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/662.png",
    "types": [
      "flying",
      "fire"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Talonflame",
        "_id": "557a73a35de688cfb5dfde56"
      }
    ]
  },
  {
    "_id": "557a739f5de688cfb5dfdda8",
    "pkdx_id": 663,
    "national_id": 663,
    "name": "Talonflame",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/663.png",
    "description": "When attacking prey, it can reach speeds of up to 310 mph. It finishes its prey off with a colossal kick.  In the fever of an exciting battle, it showers embers from the gaps between its feathers and takes to the air.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/663.png",
    "types": [
      "flying",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddd0",
    "pkdx_id": 664,
    "national_id": 664,
    "name": "Scatterbug",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/664.png",
    "description": "The powder that covers its body regulates its temperature, so it can live in any region or climate.  When under attack from bird Pokémon, it spews a poisonous black powder that causes paralysis on contact.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/664.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 9,
        "method": "level_up",
        "to": "Spewpa",
        "_id": "557a73a05de688cfb5dfddd1"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfdded",
    "pkdx_id": 665,
    "national_id": 665,
    "name": "Spewpa",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/665.png",
    "description": "The beaks of bird Pokémon can't begin to scratch its stalwart body. To defend itself, it spews powder.  It lives hidden within thicket shadows. When predators attack, it quickly bristles the fur covering its body in an effort to threaten them.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/665.png",
    "types": [
      "bug"
    ],
    "evolutions": [
      {
        "level": 12,
        "method": "level_up",
        "to": "Vivillon",
        "_id": "557a73a15de688cfb5dfddee"
      }
    ]
  },
  {
    "_id": "557a73a25de688cfb5dfde1b",
    "pkdx_id": 666,
    "national_id": 666,
    "name": "Vivillon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/666.png",
    "description": "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales.  Vivillon with many different patterns are found all over the world. These patterns are affected by the climate of their habitat.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/666.png",
    "types": [
      "flying",
      "bug"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde5a",
    "pkdx_id": 667,
    "national_id": 667,
    "name": "Litleo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/667.png",
    "description": "They set off on their own from their pride and live by themselves to become stronger. These hot-blooded Pokémon are quick to fight.  The stronger the opponent it faces, the more heat surges from its mane and the more power flows through its body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/667.png",
    "types": [
      "normal",
      "fire"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Pyroar",
        "_id": "557a73a35de688cfb5dfde5b"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfde0f",
    "pkdx_id": 668,
    "national_id": 668,
    "name": "Pyroar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/668.png",
    "description": "With fiery breath of more than 10,000 degrees Fahrenheit, they viciously threaten any challenger. The females protect the pride's cubs.  The male with the largest mane of fire is the leader of the pride.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/668.png",
    "types": [
      "normal",
      "fire"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a05de688cfb5dfddc0",
    "pkdx_id": 669,
    "national_id": 669,
    "name": "Flabebe",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/669.png",
    "description": "When it finds a flower it likes, it dwells on that flower its whole life long. It floats in the wind's embrace with an untroubled heart.  It draws out and controls the hidden power of flowers. The flower Flabébé holds is most likely part of its body.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/669.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "level": 19,
        "method": "level_up",
        "to": "Floette",
        "_id": "557a73a05de688cfb5dfddc1"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde4d",
    "pkdx_id": 670,
    "national_id": 670,
    "name": "Floette",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/670.png",
    "description": "When the flowers of a well-tended flower bed bloom, it appears and celebrates with an elegant dance.  It flutters around fields of flowers and cares for flowers that are starting to wilt. It draws out the hidden power of flowers to battle.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/670.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Florges",
        "_id": "557a73a35de688cfb5dfde4e"
      }
    ]
  },
  {
    "_id": "557a739d5de688cfb5dfdd6c",
    "pkdx_id": 671,
    "national_id": 671,
    "name": "Florges",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/671.png",
    "description": "In times long past, governors of castles would invite Florges to create flower gardens to embellish the castle domains.  It claims exquisite flower gardens as its territory, and it obtains power from basking in the energy emitted by flowering plants.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/671.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde49",
    "pkdx_id": 672,
    "national_id": 672,
    "name": "Skiddo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/672.png",
    "description": "If it has sunshine and water, it doesn't need to eat, because it can generate energy from the leaves on its back.  Thought to be one of the first Pokémon to live in harmony with humans, it has a placid disposition.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/672.png",
    "types": [
      "grass"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Gogoat",
        "_id": "557a73a35de688cfb5dfde4a"
      }
    ]
  },
  {
    "_id": "557a73a25de688cfb5dfde43",
    "pkdx_id": 673,
    "national_id": 673,
    "name": "Gogoat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/673.png",
    "description": "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns.  It can tell how its Trainer is feeling by subtle shifts in the grip on its horns. This empathic sense lets them run as if one being.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/673.png",
    "types": [
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a15de688cfb5dfdde9",
    "pkdx_id": 674,
    "national_id": 674,
    "name": "Pancham",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/674.png",
    "description": "It does its level best to glare and pull a scary face, but it can't help grinning if anyone pats its head.  It does its best to be taken seriously by its enemies, but its glare is not sufficiently intimidating. Chewing on a leaf is its trademark.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/674.png",
    "types": [
      "fighting"
    ],
    "evolutions": [
      {
        "level": 32,
        "method": "level_up",
        "to": "Pangoro",
        "_id": "557a73a15de688cfb5dfddea"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde51",
    "pkdx_id": 675,
    "national_id": 675,
    "name": "Pangoro",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/675.png",
    "description": "It charges ahead and bashes its opponents like a berserker, uncaring about any hits it might take. Its arms are mighty enough to snap a telephone pole.  Although it possesses a violent temperament, it won't put up with bullying. It uses the leaf in its mouth to sense the movements of its enemies.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/675.png",
    "types": [
      "fighting",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde34",
    "pkdx_id": 676,
    "national_id": 676,
    "name": "Furfrou",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/676.png",
    "description": "Historically, in the Kalos region, these Pokémon were the designated guardians of the king.  Trimming its fluffy fur not only makes it more elegant but also increases the swiftness of its movements.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/676.png",
    "types": [
      "normal"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde27",
    "pkdx_id": 677,
    "national_id": 677,
    "name": "Espurr",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/677.png",
    "description": "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.  The organ that emits its intense psychic power is sheltered by its ears to keep power from leaking out.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/677.png",
    "types": [
      "psychic"
    ],
    "evolutions": [
      {
        "level": 25,
        "method": "level_up",
        "to": "Meowstic-male",
        "_id": "557a73a25de688cfb5dfde28"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde70",
    "pkdx_id": 678,
    "national_id": 678,
    "name": "Meowstic",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/678.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/678.png",
    "description": "When in danger, it raises its ears and releases enough psychic power to grind a 10-ton truck into dust.",
    "types": [
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde2b",
    "pkdx_id": 679,
    "national_id": 679,
    "name": "Honedge",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/679.png",
    "description": "If anyone dares to grab its hilt, it wraps a blue cloth around that person's arm and drains that person's life energy completely.  Apparently this Pokémon is born when a departed spirit inhabits a sword. It attaches itself to people and drinks their life force.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/679.png",
    "types": [
      "ghost",
      "steel"
    ],
    "evolutions": [
      {
        "level": 35,
        "method": "level_up",
        "to": "Doublade",
        "_id": "557a73a25de688cfb5dfde2c"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde5f",
    "pkdx_id": 680,
    "national_id": 680,
    "name": "Doublade",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/680.png",
    "description": "The complex attack patterns of its two swords are unstoppable, even for an opponent greatly accomplished at swordplay.  When Honedge evolves, it divides into two swords, which cooperate via telepathy to coordinate attacks and slash their enemies to ribbons.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/680.png",
    "types": [
      "ghost",
      "steel"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Aegislash",
        "_id": "557a73a35de688cfb5dfde60"
      }
    ]
  },
  {
    "_id": "557a73a15de688cfb5dfde0b",
    "pkdx_id": 681,
    "national_id": 681,
    "name": "Aegislash",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/681.png",
    "description": "Apparently, it can detect the innate qualities of leadership. According to legend, whoever it recognizes is destined to become king.  Generations of kings were attended by these Pokémon, which used their spectral power to manipulate and control people and Pokémon.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/681.png",
    "types": [
      "ghost",
      "steel"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde3f",
    "pkdx_id": 682,
    "national_id": 682,
    "name": "Spritzee",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/682.png",
    "description": "In the past, rather than using perfume, royal ladies carried a Spritzee that would waft a fragrance they liked.  It emits a scent that enraptures those who smell it. This fragrance changes depending on what it has eaten.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/682.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Aromatisse",
        "_id": "557a73a25de688cfb5dfde40"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde69",
    "pkdx_id": 683,
    "national_id": 683,
    "name": "Aromatisse",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/683.png",
    "description": "Its scent is so overpowering that, unless a Trainer happens to really enjoy the smell, he or she will have a hard time walking alongside it.  It devises various scents, pleasant and unpleasant, and emits scents that its enemies dislike in order to gain an edge in battle.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/683.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a25de688cfb5dfde30",
    "pkdx_id": 684,
    "national_id": 684,
    "name": "Swirlix",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/684.png",
    "description": "Because it eats nothing but sweets, its fur is as sticky sweet as cotton candy.  To entangle its opponents in battle, it extrudes white threads as sweet and sticky as cotton candy.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/684.png",
    "types": [
      "fairy"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Slurpuff",
        "_id": "557a73a25de688cfb5dfde31"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde46",
    "pkdx_id": 685,
    "national_id": 685,
    "name": "Slurpuff",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/685.png",
    "description": "Its sense of smell is 100 million times better than a human's, so even the faintest scent tells it about everything in the area. It's like it can see with its nose!  It can distinguish the faintest of scents. It puts its sensitive sense of smell to use by helping pastry chefs in their work.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/685.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde64",
    "pkdx_id": 686,
    "national_id": 686,
    "name": "Inkay",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/686.png",
    "description": "It flashes the light-emitting spots on its body, which drains its opponent's will to fight. It takes the opportunity to scuttle away and hide.  Opponents who stare at the flashing of the light-emitting spots on its body become dazed and lose their will to fight.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/686.png",
    "types": [
      "dark",
      "psychic"
    ],
    "evolutions": [
      {
        "level": 30,
        "method": "level_up",
        "to": "Malamar",
        "_id": "557a73a35de688cfb5dfde65"
      }
    ]
  },
  {
    "_id": "557a73a45de688cfb5dfdebc",
    "pkdx_id": 687,
    "national_id": 687,
    "name": "Malamar",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/687.png",
    "description": "It lures its prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.  It wields the most compelling hypnotic powers of any Pokémon, and it forces others to do whatever it wants.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/687.png",
    "types": [
      "dark",
      "psychic"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfde8e",
    "pkdx_id": 688,
    "national_id": 688,
    "name": "Binacle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/688.png",
    "description": "They stretch and then contract, yanking their rocks along with them in bold hops. They eat seaweed that washes up on the shoreline.  Two Binacle live together on one rock. When they fight, one of them will move to a different rock.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/688.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Barbaracle",
        "_id": "557a73a45de688cfb5dfde8f"
      }
    ]
  },
  {
    "_id": "557a73a45de688cfb5dfdeb5",
    "pkdx_id": 689,
    "national_id": 689,
    "name": "Barbaracle",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/689.png",
    "description": "Barbaracle's legs and hands have minds of their own, and they will move independently. But they usually follow the head's orders.  When they evolve, two Binacle multiply into seven. They fight with the power of seven Binacle.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/689.png",
    "types": [
      "rock",
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde84",
    "pkdx_id": 690,
    "national_id": 690,
    "name": "Skrelp",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/690.png",
    "description": "It looks just like rotten kelp. It hides from foes while storing up power for its evolution.  Camouflaged as rotten kelp, they spray liquid poison on prey that approaches unawares and then finish it off.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/690.png",
    "types": [
      "poison",
      "water"
    ],
    "evolutions": [
      {
        "level": 48,
        "method": "level_up",
        "to": "Dragalge",
        "_id": "557a73a35de688cfb5dfde85"
      }
    ]
  },
  {
    "_id": "557a73a45de688cfb5dfde9c",
    "pkdx_id": 691,
    "national_id": 691,
    "name": "Dragalge",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/691.png",
    "description": "Tales are told of ships that wander into seas where Dragalge live, never to return.  Their poison is strong enough to eat through the hull of a tanker, and they spit it indiscriminately at anything that enters their territory.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/691.png",
    "types": [
      "poison",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdec8",
    "pkdx_id": 692,
    "national_id": 692,
    "name": "Clauncher",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/692.png",
    "description": "Through controlled explosions of internal gas, it can expel water like a pistol shot. At close distances, it can shatter rock.  They knock down flying prey by firing compressed water from their massive claws like shooting a pistol.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/692.png",
    "types": [
      "water"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Clawitzer",
        "_id": "557a73a45de688cfb5dfdec9"
      }
    ]
  },
  {
    "_id": "557a73a55de688cfb5dfdeeb",
    "pkdx_id": 693,
    "national_id": 693,
    "name": "Clawitzer",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/693.png",
    "description": "By expelling water from the nozzle in the back of its claw, it can move at a speed of 60 knots.  Their enormous claws launch cannonballs of water powerful enough to pierce tanker hulls.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/693.png",
    "types": [
      "water"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdead",
    "pkdx_id": 694,
    "national_id": 694,
    "name": "Helioptile",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/694.png",
    "description": "The frills on either side of its head have cells that generate electricity when exposed to sunlight.  They make their home in deserts. They can generate their energy from basking in the sun, so eating food is not a requirement.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/694.png",
    "types": [
      "normal",
      "electric"
    ],
    "evolutions": [
      {
        "method": "stone",
        "to": "Heliolisk",
        "_id": "557a73a45de688cfb5dfdeae"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde77",
    "pkdx_id": 695,
    "national_id": 695,
    "name": "Heliolisk",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/695.png",
    "description": "It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.  They flare their frills and generate energy. A single Heliolisk can generate sufficient electricity to power a skyscraper.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/695.png",
    "types": [
      "normal",
      "electric"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfde93",
    "pkdx_id": 696,
    "national_id": 696,
    "name": "Tyrunt",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/696.png",
    "description": "Its immense jaws have enough destructive force that it can chew up an automobile. It lived 100 million years ago.  This Pokémon was restored from a fossil. If something happens that it doesn't like, it throws a tantrum and runs wild.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/696.png",
    "types": [
      "rock",
      "dragon"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Tyrantrum",
        "_id": "557a73a45de688cfb5dfde94"
      }
    ]
  },
  {
    "_id": "557a73a55de688cfb5dfdee0",
    "pkdx_id": 697,
    "national_id": 697,
    "name": "Tyrantrum",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/697.png",
    "description": "Nothing could stop this Pokémon 100 million years ago, so it behaved like a king.  Thanks to its gargantuan jaws, which could shred thick metal plates as if they were paper, it was invincible in the ancient world it once inhabited.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/697.png",
    "types": [
      "rock",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde7b",
    "pkdx_id": 698,
    "national_id": 698,
    "name": "Amaura",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/698.png",
    "description": "This calm Pokémon lived in a cold land where there were no violent predators like Tyrantrum.  This ancient Pokémon was restored from part of its body that had been frozen in ice for over 100 million years.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/698.png",
    "types": [
      "rock",
      "ice"
    ],
    "evolutions": [
      {
        "level": 39,
        "method": "level_up",
        "to": "Aurorus",
        "_id": "557a73a35de688cfb5dfde7c"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde73",
    "pkdx_id": 699,
    "national_id": 699,
    "name": "Aurorus",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/699.png",
    "description": "Using its diamond-shaped crystals, it can instantly create a wall of ice to block an opponent's attack.  The diamond-shaped crystals on its body expel air as cold as -240 degrees Fahrenheit, surrounding its enemies and encasing them in ice.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/699.png",
    "types": [
      "rock",
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdeb2",
    "pkdx_id": 700,
    "national_id": 700,
    "name": "Sylveon",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/700.png",
    "description": "It wraps its ribbonlike feelers around the arm of its beloved Trainer and walks with him or her.  It sends a soothing aura from its ribbonlike feelers to calm fights.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/700.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfde98",
    "pkdx_id": 701,
    "national_id": 701,
    "name": "Hawlucha",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/701.png",
    "description": "With its wings, it controls its position in the air. It likes to attack from above, a maneuver that is difficult to defend against.  Although its body is small, its proficient fighting skills enable it to keep up with big bruisers like Machamp and Hariyama.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/701.png",
    "types": [
      "fighting",
      "flying"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a55de688cfb5dfded1",
    "pkdx_id": 702,
    "national_id": 702,
    "name": "Dedenne",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/702.png",
    "description": "It uses its tail to absorb electricity from power plants or from outlets in houses, and then it fires the electricity from its whiskers.  Its whiskers serve as antennas. By sending and receiving electrical waves, it can communicate with others over vast distances.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/702.png",
    "types": [
      "electric",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a55de688cfb5dfded9",
    "pkdx_id": 703,
    "national_id": 703,
    "name": "Carbink",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/703.png",
    "description": "It has slept underground for hundreds of millions of years since its birth. It's occasionally found during the excavation of caves.  Born from the temperatures and pressures deep underground, it fires beams from the stone in its head.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/703.png",
    "types": [
      "rock",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdec0",
    "pkdx_id": 704,
    "national_id": 704,
    "name": "Goomy",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/704.png",
    "description": "It's covered in a slimy membrane that makes any punches or kicks slide off it harmlessly.  The weakest Dragon-type Pokémon, it lives in damp, shady places, so its body doesn't dry out.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/704.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 40,
        "method": "level_up",
        "to": "Sliggoo",
        "_id": "557a73a45de688cfb5dfdec1"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde80",
    "pkdx_id": 705,
    "national_id": 705,
    "name": "Sliggoo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/705.png",
    "description": "Its four horns are a high-performance radar system. It uses them to sense sounds and smells, rather than using ears or a nose.  It drives away opponents by excreting a sticky liquid that can dissolve anything. Its eyes devolved, so it can't see anything.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/705.png",
    "types": [
      "dragon"
    ],
    "evolutions": [
      {
        "level": 50,
        "method": "level_up",
        "to": "Goodra",
        "_id": "557a73a35de688cfb5dfde81"
      }
    ]
  },
  {
    "_id": "557a73a45de688cfb5dfdeb9",
    "pkdx_id": 706,
    "national_id": 706,
    "name": "Goodra",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/706.png",
    "description": "It attacks with retractable horns. It throws a punch that's the equivalent of the force of a hundred pro boxers.  This very friendly Dragon-type Pokémon will hug its beloved Trainer, leaving that Trainer covered in sticky slime.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/706.png",
    "types": [
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdec4",
    "pkdx_id": 707,
    "national_id": 707,
    "name": "Klefki",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/707.png",
    "description": "It never lets go of a key that it likes, so people give it the keys to vaults and safes as a way to prevent crime.  These key collectors threaten any attackers by fiercely jingling their keys at them.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/707.png",
    "types": [
      "steel",
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a35de688cfb5dfde89",
    "pkdx_id": 708,
    "national_id": 708,
    "name": "Phantump",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/708.png",
    "description": "According to old tales, these Pokémon are stumps possessed by the spirits of children who died while lost in the forest.  These Pokémon are created when spirits possess rotten tree stumps. They prefer to live in abandoned forests.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/708.png",
    "types": [
      "ghost",
      "grass"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Trevenant",
        "_id": "557a73a35de688cfb5dfde8a"
      }
    ]
  },
  {
    "_id": "557a73a45de688cfb5dfdea0",
    "pkdx_id": 709,
    "national_id": 709,
    "name": "Trevenant",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/709.png",
    "description": "Using its roots as a nervous system, it controls the trees in the forest. It's kind to the Pokémon that reside in its body.  It can control trees at will. It will trap people who harm the forest, so they can never leave.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/709.png",
    "types": [
      "ghost",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdea8",
    "pkdx_id": 710,
    "national_id": 710,
    "name": "Pumpkaboo",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/710.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/710.png",
    "description": "The pumpkin body is inhabited by a spirit trapped in this world. As the sun sets, it becomes restless and active.",
    "types": [
      "ghost",
      "grass"
    ],
    "evolutions": [
      {
        "method": "trade",
        "to": "Gourgeist-average",
        "_id": "557a73a45de688cfb5dfdea9"
      }
    ]
  },
  {
    "_id": "557a73a55de688cfb5dfdee4",
    "pkdx_id": 711,
    "national_id": 711,
    "name": "Gourgeist",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/711.png",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/711.png",
    "description": "Singing in eerie voices, they wander town streets on the night of the new moon. Anyone who hears their song is cursed.",
    "types": [
      "ghost",
      "grass"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdea4",
    "pkdx_id": 712,
    "national_id": 712,
    "name": "Bergmite",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/712.png",
    "description": "Using air of -150 degrees Fahrenheit, they freeze opponents solid. They live in herds above the snow line on mountains.  It blocks opponents' attacks with the ice that shields its body. It uses cold air to repair any cracks with new ice.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/712.png",
    "types": [
      "ice"
    ],
    "evolutions": [
      {
        "level": 37,
        "method": "level_up",
        "to": "Avalugg",
        "_id": "557a73a45de688cfb5dfdea5"
      }
    ]
  },
  {
    "_id": "557a73a55de688cfb5dfdedd",
    "pkdx_id": 713,
    "national_id": 713,
    "name": "Avalugg",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/713.png",
    "description": "The way several Bergmite huddle on its back makes it look like an aircraft carrier made of ice.  Its ice-covered body is as hard as steel. Its cumbersome frame crushes anything that stands in its way.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/713.png",
    "types": [
      "ice"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a45de688cfb5dfdecc",
    "pkdx_id": 714,
    "national_id": 714,
    "name": "Noibat",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/714.png",
    "description": "Even a robust wrestler will become dizzy and unable to stand when exposed to its 200,000-hertz ultrasonic waves.  They live in pitch-black caves. Their enormous ears can emit ultrasonic waves of 200,000 hertz.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/714.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": [
      {
        "level": 48,
        "method": "level_up",
        "to": "Noivern",
        "_id": "557a73a45de688cfb5dfdecd"
      }
    ]
  },
  {
    "_id": "557a73a35de688cfb5dfde6c",
    "pkdx_id": 715,
    "national_id": 715,
    "name": "Noivern",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/715.png",
    "description": "The ultrasonic waves it emits from its ears can reduce a large boulder to pebbles. It swoops out of the dark to attack.  They fly around on moonless nights and attack careless prey. Nothing can beat them in a battle in the dark.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/715.png",
    "types": [
      "flying",
      "dragon"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a55de688cfb5dfdee8",
    "pkdx_id": 716,
    "national_id": 716,
    "name": "Xerneas",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/716.png",
    "description": "When the horns on its head shine in seven colors, it is said to be sharing everlasting life.  Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/716.png",
    "types": [
      "fairy"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73a55de688cfb5dfded5",
    "pkdx_id": 717,
    "national_id": 717,
    "name": "Yveltal",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/717.png",
    "description": "When its life comes to an end, it absorbs the life energy of every living thing and turns into a cocoon once more.  When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of living creatures.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/717.png",
    "types": [
      "flying",
      "dark"
    ],
    "evolutions": []
  },
  {
    "_id": "557a73b4ec77ea08b6dc04ae",
    "pkdx_id": 718,
    "national_id": 718,
    "name": "Zygarde",
    "__v": 1,
    "image_url": "http://pokeapi.co/media/img/718.png",
    "description": "It's hypothesized that it's monitoring those who destroy the ecosystem from deep in the cave where it lives.  When the Kalos region's ecosystem falls into disarray, it appears and reveals its secret power.",
    "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/718.png",
    "types": [
      "ground",
      "dragon"
    ],
    "evolutions": []
  }
]