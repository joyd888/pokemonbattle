const POKEMON_DATA = [
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 64,
    "height": 7,
    "weight": 69,
    "abilities": [
      "overgrow",
      "chlorophyll"
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 60
    },
    "base_experience": 142,
    "height": 10,
    "weight": 130,
    "abilities": [
      "overgrow",
      "chlorophyll"
    ]
  },
  {
    "id": 3,
    "name": "venusaur",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 83,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    },
    "base_experience": 236,
    "height": 20,
    "weight": 1000,
    "abilities": [
      "overgrow",
      "chlorophyll"
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 62,
    "height": 6,
    "weight": 85,
    "abilities": [
      "blaze",
      "solar-power"
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    },
    "base_experience": 142,
    "height": 11,
    "weight": 190,
    "abilities": [
      "blaze",
      "solar-power"
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    },
    "base_experience": 240,
    "height": 17,
    "weight": 905,
    "abilities": [
      "blaze",
      "solar-power"
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 48,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 64,
      "speed": 43
    },
    "base_experience": 63,
    "height": 5,
    "weight": 90,
    "abilities": [
      "torrent",
      "rain-dish"
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 63,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 58
    },
    "base_experience": 142,
    "height": 10,
    "weight": 225,
    "abilities": [
      "torrent",
      "rain-dish"
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 79,
      "attack": 83,
      "defense": 100,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 78
    },
    "base_experience": 239,
    "height": 16,
    "weight": 855,
    "abilities": [
      "torrent",
      "rain-dish"
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "types": [
      "bug"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 45
    },
    "base_experience": 39,
    "height": 3,
    "weight": 29,
    "abilities": [
      "shield-dust",
      "run-away"
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "types": [
      "bug"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 30
    },
    "base_experience": 72,
    "height": 7,
    "weight": 99,
    "abilities": [
      "shed-skin"
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 50,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 70
    },
    "base_experience": 178,
    "height": 11,
    "weight": 320,
    "abilities": [
      "compound-eyes",
      "tinted-lens"
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 50
    },
    "base_experience": 39,
    "height": 3,
    "weight": 32,
    "abilities": [
      "shield-dust",
      "run-away"
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 25,
      "defense": 50,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 35
    },
    "base_experience": 72,
    "height": 6,
    "weight": 100,
    "abilities": [
      "shed-skin"
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 80,
      "speed": 75
    },
    "base_experience": 178,
    "height": 10,
    "weight": 295,
    "abilities": [
      "swarm",
      "sniper"
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 56
    },
    "base_experience": 50,
    "height": 3,
    "weight": 18,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ]
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 71
    },
    "base_experience": 122,
    "height": 11,
    "weight": 300,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ]
  },
  {
    "id": 18,
    "name": "pidgeot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 83,
      "attack": 80,
      "defense": 75,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 101
    },
    "base_experience": 216,
    "height": 15,
    "weight": 395,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 56,
      "defense": 35,
      "special_attack": 25,
      "special_defense": 35,
      "speed": 72
    },
    "base_experience": 51,
    "height": 3,
    "weight": 35,
    "abilities": [
      "run-away",
      "guts",
      "hustle"
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 81,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 97
    },
    "base_experience": 145,
    "height": 7,
    "weight": 185,
    "abilities": [
      "run-away",
      "guts",
      "hustle"
    ]
  },
  {
    "id": 21,
    "name": "spearow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 30,
      "special_attack": 31,
      "special_defense": 31,
      "speed": 70
    },
    "base_experience": 52,
    "height": 3,
    "weight": 20,
    "abilities": [
      "keen-eye",
      "sniper"
    ]
  },
  {
    "id": 22,
    "name": "fearow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 65,
      "special_attack": 61,
      "special_defense": 61,
      "speed": 100
    },
    "base_experience": 155,
    "height": 12,
    "weight": 380,
    "abilities": [
      "keen-eye",
      "sniper"
    ]
  },
  {
    "id": 23,
    "name": "ekans",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 60,
      "defense": 44,
      "special_attack": 40,
      "special_defense": 54,
      "speed": 55
    },
    "base_experience": 58,
    "height": 20,
    "weight": 69,
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ]
  },
  {
    "id": 24,
    "name": "arbok",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special_attack": 65,
      "special_defense": 79,
      "speed": 80
    },
    "base_experience": 157,
    "height": 35,
    "weight": 650,
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ]
  },
  {
    "id": 25,
    "name": "pikachu",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    },
    "base_experience": 112,
    "height": 4,
    "weight": 60,
    "abilities": [
      "static",
      "lightning-rod"
    ]
  },
  {
    "id": 26,
    "name": "raichu",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 55,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 110
    },
    "base_experience": 218,
    "height": 8,
    "weight": 300,
    "abilities": [
      "static",
      "lightning-rod"
    ]
  },
  {
    "id": 27,
    "name": "sandshrew",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 85,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 40
    },
    "base_experience": 60,
    "height": 6,
    "weight": 120,
    "abilities": [
      "sand-veil",
      "sand-rush"
    ]
  },
  {
    "id": 28,
    "name": "sandslash",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 110,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 65
    },
    "base_experience": 158,
    "height": 10,
    "weight": 295,
    "abilities": [
      "sand-veil",
      "sand-rush"
    ]
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 47,
      "defense": 52,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 41
    },
    "base_experience": 55,
    "height": 4,
    "weight": 70,
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ]
  },
  {
    "id": 30,
    "name": "nidorina",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 62,
      "defense": 67,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 56
    },
    "base_experience": 128,
    "height": 8,
    "weight": 200,
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ]
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "types": [
      "poison",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 87,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 76
    },
    "base_experience": 227,
    "height": 13,
    "weight": 600,
    "abilities": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ]
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 46,
      "attack": 57,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 50
    },
    "base_experience": 55,
    "height": 5,
    "weight": 90,
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ]
  },
  {
    "id": 33,
    "name": "nidorino",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 72,
      "defense": 57,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 65
    },
    "base_experience": 128,
    "height": 9,
    "weight": 195,
    "abilities": [
      "poison-point",
      "rivalry",
      "hustle"
    ]
  },
  {
    "id": 34,
    "name": "nidoking",
    "types": [
      "poison",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 81,
      "attack": 102,
      "defense": 77,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 85
    },
    "base_experience": 227,
    "height": 14,
    "weight": 620,
    "abilities": [
      "poison-point",
      "rivalry",
      "sheer-force"
    ]
  },
  {
    "id": 35,
    "name": "clefairy",
    "types": [
      "fairy"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 45,
      "defense": 48,
      "special_attack": 60,
      "special_defense": 65,
      "speed": 35
    },
    "base_experience": 113,
    "height": 6,
    "weight": 75,
    "abilities": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ]
  },
  {
    "id": 36,
    "name": "clefable",
    "types": [
      "fairy"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 70,
      "defense": 73,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 60
    },
    "base_experience": 217,
    "height": 13,
    "weight": 400,
    "abilities": [
      "cute-charm",
      "magic-guard",
      "unaware"
    ]
  },
  {
    "id": 37,
    "name": "vulpix",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 41,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 65,
      "speed": 65
    },
    "base_experience": 60,
    "height": 6,
    "weight": 99,
    "abilities": [
      "flash-fire",
      "drought"
    ]
  },
  {
    "id": 38,
    "name": "ninetales",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 73,
      "attack": 76,
      "defense": 75,
      "special_attack": 81,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 177,
    "height": 11,
    "weight": 199,
    "abilities": [
      "flash-fire",
      "drought"
    ]
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 115,
      "attack": 45,
      "defense": 20,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 20
    },
    "base_experience": 95,
    "height": 5,
    "weight": 55,
    "abilities": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ]
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 140,
      "attack": 70,
      "defense": 45,
      "special_attack": 85,
      "special_defense": 50,
      "speed": 45
    },
    "base_experience": 196,
    "height": 10,
    "weight": 120,
    "abilities": [
      "cute-charm",
      "competitive",
      "frisk"
    ]
  },
  {
    "id": 41,
    "name": "zubat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 55
    },
    "base_experience": 49,
    "height": 8,
    "weight": 75,
    "abilities": [
      "inner-focus",
      "infiltrator"
    ]
  },
  {
    "id": 42,
    "name": "golbat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 90
    },
    "base_experience": 159,
    "height": 16,
    "weight": 550,
    "abilities": [
      "inner-focus",
      "infiltrator"
    ]
  },
  {
    "id": 43,
    "name": "oddish",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 55,
      "special_attack": 75,
      "special_defense": 65,
      "speed": 30
    },
    "base_experience": 64,
    "height": 5,
    "weight": 54,
    "abilities": [
      "chlorophyll",
      "run-away"
    ]
  },
  {
    "id": 44,
    "name": "gloom",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    },
    "base_experience": 138,
    "height": 8,
    "weight": 86,
    "abilities": [
      "chlorophyll",
      "stench"
    ]
  },
  {
    "id": 45,
    "name": "vileplume",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 85,
      "special_attack": 110,
      "special_defense": 90,
      "speed": 50
    },
    "base_experience": 221,
    "height": 12,
    "weight": 186,
    "abilities": [
      "chlorophyll",
      "effect-spore"
    ]
  },
  {
    "id": 46,
    "name": "paras",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 70,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 25
    },
    "base_experience": 57,
    "height": 3,
    "weight": 54,
    "abilities": [
      "effect-spore",
      "dry-skin",
      "damp"
    ]
  },
  {
    "id": 47,
    "name": "parasect",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 30
    },
    "base_experience": 142,
    "height": 10,
    "weight": 295,
    "abilities": [
      "effect-spore",
      "dry-skin",
      "damp"
    ]
  },
  {
    "id": 48,
    "name": "venonat",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 45
    },
    "base_experience": 61,
    "height": 10,
    "weight": 300,
    "abilities": [
      "compound-eyes",
      "tinted-lens",
      "run-away"
    ]
  },
  {
    "id": 49,
    "name": "venomoth",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 75,
      "speed": 90
    },
    "base_experience": 158,
    "height": 15,
    "weight": 125,
    "abilities": [
      "shield-dust",
      "tinted-lens",
      "wonder-skin"
    ]
  },
  {
    "id": 50,
    "name": "diglett",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 10,
      "attack": 55,
      "defense": 25,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 95
    },
    "base_experience": 53,
    "height": 2,
    "weight": 8,
    "abilities": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ]
  },
  {
    "id": 51,
    "name": "dugtrio",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 100,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 120
    },
    "base_experience": 149,
    "height": 7,
    "weight": 333,
    "abilities": [
      "sand-veil",
      "arena-trap",
      "sand-force"
    ]
  },
  {
    "id": 52,
    "name": "meowth",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    },
    "base_experience": 58,
    "height": 4,
    "weight": 42,
    "abilities": [
      "pickup",
      "technician",
      "unnerve"
    ]
  },
  {
    "id": 53,
    "name": "persian",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 70,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 115
    },
    "base_experience": 154,
    "height": 10,
    "weight": 320,
    "abilities": [
      "limber",
      "technician",
      "unnerve"
    ]
  },
  {
    "id": 54,
    "name": "psyduck",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 52,
      "defense": 48,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 55
    },
    "base_experience": 64,
    "height": 8,
    "weight": 196,
    "abilities": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ]
  },
  {
    "id": 55,
    "name": "golduck",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 78,
      "special_attack": 95,
      "special_defense": 80,
      "speed": 85
    },
    "base_experience": 175,
    "height": 17,
    "weight": 766,
    "abilities": [
      "damp",
      "cloud-nine",
      "swift-swim"
    ]
  },
  {
    "id": 56,
    "name": "mankey",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 70
    },
    "base_experience": 61,
    "height": 5,
    "weight": 280,
    "abilities": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ]
  },
  {
    "id": 57,
    "name": "primeape",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 105,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 95
    },
    "base_experience": 159,
    "height": 10,
    "weight": 320,
    "abilities": [
      "vital-spirit",
      "anger-point",
      "defiant"
    ]
  },
  {
    "id": 58,
    "name": "growlithe",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 60
    },
    "base_experience": 70,
    "height": 7,
    "weight": 190,
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ]
  },
  {
    "id": 59,
    "name": "arcanine",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 110,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 95
    },
    "base_experience": 194,
    "height": 19,
    "weight": 1550,
    "abilities": [
      "intimidate",
      "flash-fire",
      "justified"
    ]
  },
  {
    "id": 60,
    "name": "poliwag",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 90
    },
    "base_experience": 60,
    "height": 6,
    "weight": 124,
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ]
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 90
    },
    "base_experience": 135,
    "height": 10,
    "weight": 200,
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ]
  },
  {
    "id": 62,
    "name": "poliwrath",
    "types": [
      "water",
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 95,
      "special_attack": 70,
      "special_defense": 90,
      "speed": 70
    },
    "base_experience": 230,
    "height": 13,
    "weight": 540,
    "abilities": [
      "water-absorb",
      "damp",
      "swift-swim"
    ]
  },
  {
    "id": 63,
    "name": "abra",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 15,
      "special_attack": 105,
      "special_defense": 55,
      "speed": 90
    },
    "base_experience": 62,
    "height": 9,
    "weight": 195,
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ]
  },
  {
    "id": 64,
    "name": "kadabra",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 30,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 105
    },
    "base_experience": 140,
    "height": 13,
    "weight": 565,
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ]
  },
  {
    "id": 65,
    "name": "alakazam",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 45,
      "special_attack": 135,
      "special_defense": 95,
      "speed": 120
    },
    "base_experience": 225,
    "height": 15,
    "weight": 480,
    "abilities": [
      "synchronize",
      "inner-focus",
      "magic-guard"
    ]
  },
  {
    "id": 66,
    "name": "machop",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 50,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 35
    },
    "base_experience": 61,
    "height": 8,
    "weight": 195,
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ]
  },
  {
    "id": 67,
    "name": "machoke",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 45
    },
    "base_experience": 142,
    "height": 15,
    "weight": 705,
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ]
  },
  {
    "id": 68,
    "name": "machamp",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 55
    },
    "base_experience": 227,
    "height": 16,
    "weight": 1300,
    "abilities": [
      "guts",
      "no-guard",
      "steadfast"
    ]
  },
  {
    "id": 69,
    "name": "bellsprout",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 30,
      "speed": 40
    },
    "base_experience": 60,
    "height": 7,
    "weight": 40,
    "abilities": [
      "chlorophyll",
      "gluttony"
    ]
  },
  {
    "id": 70,
    "name": "weepinbell",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 50,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 55
    },
    "base_experience": 137,
    "height": 10,
    "weight": 64,
    "abilities": [
      "chlorophyll",
      "gluttony"
    ]
  },
  {
    "id": 71,
    "name": "victreebel",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 221,
    "height": 17,
    "weight": 155,
    "abilities": [
      "chlorophyll",
      "gluttony"
    ]
  },
  {
    "id": 72,
    "name": "tentacool",
    "types": [
      "water",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 70
    },
    "base_experience": 67,
    "height": 9,
    "weight": 455,
    "abilities": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ]
  },
  {
    "id": 73,
    "name": "tentacruel",
    "types": [
      "water",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 100
    },
    "base_experience": 180,
    "height": 16,
    "weight": 550,
    "abilities": [
      "clear-body",
      "liquid-ooze",
      "rain-dish"
    ]
  },
  {
    "id": 74,
    "name": "geodude",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 80,
      "defense": 100,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 20
    },
    "base_experience": 60,
    "height": 4,
    "weight": 200,
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ]
  },
  {
    "id": 75,
    "name": "graveler",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 115,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 35
    },
    "base_experience": 137,
    "height": 10,
    "weight": 1050,
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ]
  },
  {
    "id": 76,
    "name": "golem",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 130,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 223,
    "height": 14,
    "weight": 3000,
    "abilities": [
      "rock-head",
      "sturdy",
      "sand-veil"
    ]
  },
  {
    "id": 77,
    "name": "ponyta",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 90
    },
    "base_experience": 82,
    "height": 10,
    "weight": 300,
    "abilities": [
      "run-away",
      "flash-fire",
      "flame-body"
    ]
  },
  {
    "id": 78,
    "name": "rapidash",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 105
    },
    "base_experience": 175,
    "height": 17,
    "weight": 950,
    "abilities": [
      "run-away",
      "flash-fire",
      "flame-body"
    ]
  },
  {
    "id": 79,
    "name": "slowpoke",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 65,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 15
    },
    "base_experience": 63,
    "height": 12,
    "weight": 360,
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ]
  },
  {
    "id": 80,
    "name": "slowbro",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 110,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 30
    },
    "base_experience": 172,
    "height": 16,
    "weight": 785,
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ]
  },
  {
    "id": 81,
    "name": "magnemite",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 55,
      "speed": 45
    },
    "base_experience": 65,
    "height": 3,
    "weight": 60,
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ]
  },
  {
    "id": 82,
    "name": "magneton",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 163,
    "height": 10,
    "weight": 600,
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ]
  },
  {
    "id": 83,
    "name": "farfetchd",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 52,
      "attack": 90,
      "defense": 55,
      "special_attack": 58,
      "special_defense": 62,
      "speed": 60
    },
    "base_experience": 132,
    "height": 8,
    "weight": 150,
    "abilities": [
      "keen-eye",
      "inner-focus",
      "defiant"
    ]
  },
  {
    "id": 84,
    "name": "doduo",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 85,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 75
    },
    "base_experience": 62,
    "height": 14,
    "weight": 392,
    "abilities": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ]
  },
  {
    "id": 85,
    "name": "dodrio",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 110,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 110
    },
    "base_experience": 165,
    "height": 18,
    "weight": 852,
    "abilities": [
      "run-away",
      "early-bird",
      "tangled-feet"
    ]
  },
  {
    "id": 86,
    "name": "seel",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 70,
      "speed": 45
    },
    "base_experience": 65,
    "height": 11,
    "weight": 900,
    "abilities": [
      "thick-fat",
      "hydration",
      "ice-body"
    ]
  },
  {
    "id": 87,
    "name": "dewgong",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 70,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 95,
      "speed": 70
    },
    "base_experience": 166,
    "height": 17,
    "weight": 1200,
    "abilities": [
      "thick-fat",
      "hydration",
      "ice-body"
    ]
  },
  {
    "id": 88,
    "name": "grimer",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 25
    },
    "base_experience": 65,
    "height": 9,
    "weight": 300,
    "abilities": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ]
  },
  {
    "id": 89,
    "name": "muk",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 105,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 100,
      "speed": 50
    },
    "base_experience": 175,
    "height": 12,
    "weight": 300,
    "abilities": [
      "stench",
      "sticky-hold",
      "poison-touch"
    ]
  },
  {
    "id": 90,
    "name": "shellder",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 65,
      "defense": 100,
      "special_attack": 45,
      "special_defense": 25,
      "speed": 40
    },
    "base_experience": 61,
    "height": 3,
    "weight": 40,
    "abilities": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ]
  },
  {
    "id": 91,
    "name": "cloyster",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 180,
      "special_attack": 85,
      "special_defense": 45,
      "speed": 70
    },
    "base_experience": 184,
    "height": 15,
    "weight": 1325,
    "abilities": [
      "shell-armor",
      "skill-link",
      "overcoat"
    ]
  },
  {
    "id": 92,
    "name": "gastly",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 35,
      "defense": 30,
      "special_attack": 100,
      "special_defense": 35,
      "speed": 80
    },
    "base_experience": 62,
    "height": 13,
    "weight": 1,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 93,
    "name": "haunter",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 45,
      "special_attack": 115,
      "special_defense": 55,
      "speed": 95
    },
    "base_experience": 142,
    "height": 16,
    "weight": 1,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 94,
    "name": "gengar",
    "types": [
      "ghost",
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 75,
      "speed": 110
    },
    "base_experience": 225,
    "height": 15,
    "weight": 405,
    "abilities": [
      "cursed-body"
    ]
  },
  {
    "id": 95,
    "name": "onix",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 45,
      "defense": 160,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 70
    },
    "base_experience": 77,
    "height": 88,
    "weight": 2100,
    "abilities": [
      "rock-head",
      "sturdy",
      "weak-armor"
    ]
  },
  {
    "id": 96,
    "name": "drowzee",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 48,
      "defense": 45,
      "special_attack": 43,
      "special_defense": 90,
      "speed": 42
    },
    "base_experience": 66,
    "height": 10,
    "weight": 324,
    "abilities": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ]
  },
  {
    "id": 97,
    "name": "hypno",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 73,
      "defense": 70,
      "special_attack": 73,
      "special_defense": 115,
      "speed": 67
    },
    "base_experience": 169,
    "height": 16,
    "weight": 756,
    "abilities": [
      "insomnia",
      "forewarn",
      "inner-focus"
    ]
  },
  {
    "id": 98,
    "name": "krabby",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 105,
      "defense": 90,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 50
    },
    "base_experience": 65,
    "height": 4,
    "weight": 65,
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ]
  },
  {
    "id": 99,
    "name": "kingler",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 130,
      "defense": 115,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 75
    },
    "base_experience": 166,
    "height": 13,
    "weight": 600,
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "sheer-force"
    ]
  },
  {
    "id": 100,
    "name": "voltorb",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 100
    },
    "base_experience": 66,
    "height": 5,
    "weight": 104,
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ]
  },
  {
    "id": 101,
    "name": "electrode",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 150
    },
    "base_experience": 172,
    "height": 12,
    "weight": 666,
    "abilities": [
      "soundproof",
      "static",
      "aftermath"
    ]
  },
  {
    "id": 102,
    "name": "exeggcute",
    "types": [
      "grass",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 40
    },
    "base_experience": 65,
    "height": 4,
    "weight": 25,
    "abilities": [
      "chlorophyll",
      "harvest"
    ]
  },
  {
    "id": 103,
    "name": "exeggutor",
    "types": [
      "grass",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 75,
      "speed": 55
    },
    "base_experience": 186,
    "height": 20,
    "weight": 1200,
    "abilities": [
      "chlorophyll",
      "harvest"
    ]
  },
  {
    "id": 104,
    "name": "cubone",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 35
    },
    "base_experience": 64,
    "height": 4,
    "weight": 65,
    "abilities": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ]
  },
  {
    "id": 105,
    "name": "marowak",
    "types": [
      "ground"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 110,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 45
    },
    "base_experience": 149,
    "height": 10,
    "weight": 450,
    "abilities": [
      "rock-head",
      "lightning-rod",
      "battle-armor"
    ]
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 120,
      "defense": 53,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 87
    },
    "base_experience": 159,
    "height": 15,
    "weight": 498,
    "abilities": [
      "limber",
      "reckless",
      "unburden"
    ]
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "types": [
      "fighting"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 105,
      "defense": 79,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 76
    },
    "base_experience": 159,
    "height": 14,
    "weight": 502,
    "abilities": [
      "keen-eye",
      "iron-fist",
      "inner-focus"
    ]
  },
  {
    "id": 108,
    "name": "lickitung",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 30
    },
    "base_experience": 77,
    "height": 12,
    "weight": 655,
    "abilities": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ]
  },
  {
    "id": 109,
    "name": "koffing",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 95,
      "special_attack": 60,
      "special_defense": 45,
      "speed": 35
    },
    "base_experience": 68,
    "height": 6,
    "weight": 10,
    "abilities": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ]
  },
  {
    "id": 110,
    "name": "weezing",
    "types": [
      "poison"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 120,
      "special_attack": 85,
      "special_defense": 70,
      "speed": 60
    },
    "base_experience": 172,
    "height": 12,
    "weight": 95,
    "abilities": [
      "levitate",
      "neutralizing-gas",
      "stench"
    ]
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 95,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 25
    },
    "base_experience": 69,
    "height": 10,
    "weight": 1150,
    "abilities": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ]
  },
  {
    "id": 112,
    "name": "rhydon",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 130,
      "defense": 120,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 40
    },
    "base_experience": 170,
    "height": 19,
    "weight": 1200,
    "abilities": [
      "lightning-rod",
      "rock-head",
      "reckless"
    ]
  },
  {
    "id": 113,
    "name": "chansey",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 250,
      "attack": 5,
      "defense": 5,
      "special_attack": 35,
      "special_defense": 105,
      "speed": 50
    },
    "base_experience": 395,
    "height": 11,
    "weight": 346,
    "abilities": [
      "natural-cure",
      "serene-grace",
      "healer"
    ]
  },
  {
    "id": 114,
    "name": "tangela",
    "types": [
      "grass"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 115,
      "special_attack": 100,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 87,
    "height": 10,
    "weight": 350,
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ]
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 90
    },
    "base_experience": 172,
    "height": 22,
    "weight": 800,
    "abilities": [
      "early-bird",
      "scrappy",
      "inner-focus"
    ]
  },
  {
    "id": 116,
    "name": "horsea",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 25,
      "speed": 60
    },
    "base_experience": 59,
    "height": 4,
    "weight": 80,
    "abilities": [
      "swift-swim",
      "sniper",
      "damp"
    ]
  },
  {
    "id": 117,
    "name": "seadra",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 45,
      "speed": 85
    },
    "base_experience": 154,
    "height": 12,
    "weight": 250,
    "abilities": [
      "poison-point",
      "sniper",
      "damp"
    ]
  },
  {
    "id": 118,
    "name": "goldeen",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 67,
      "defense": 60,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 63
    },
    "base_experience": 64,
    "height": 6,
    "weight": 150,
    "abilities": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ]
  },
  {
    "id": 119,
    "name": "seaking",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 92,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 80,
      "speed": 68
    },
    "base_experience": 158,
    "height": 13,
    "weight": 390,
    "abilities": [
      "swift-swim",
      "water-veil",
      "lightning-rod"
    ]
  },
  {
    "id": 120,
    "name": "staryu",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 55,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 85
    },
    "base_experience": 68,
    "height": 8,
    "weight": 345,
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ]
  },
  {
    "id": 121,
    "name": "starmie",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 85,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 115
    },
    "base_experience": 182,
    "height": 11,
    "weight": 800,
    "abilities": [
      "illuminate",
      "natural-cure",
      "analytic"
    ]
  },
  {
    "id": 122,
    "name": "mr-mime",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 120,
      "speed": 90
    },
    "base_experience": 161,
    "height": 13,
    "weight": 545,
    "abilities": [
      "soundproof",
      "filter",
      "technician"
    ]
  },
  {
    "id": 123,
    "name": "scyther",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 105
    },
    "base_experience": 100,
    "height": 15,
    "weight": 560,
    "abilities": [
      "swarm",
      "technician",
      "steadfast"
    ]
  },
  {
    "id": 124,
    "name": "jynx",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 50,
      "defense": 35,
      "special_attack": 115,
      "special_defense": 95,
      "speed": 95
    },
    "base_experience": 159,
    "height": 14,
    "weight": 406,
    "abilities": [
      "oblivious",
      "forewarn",
      "dry-skin"
    ]
  },
  {
    "id": 125,
    "name": "electabuzz",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 83,
      "defense": 57,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 105
    },
    "base_experience": 172,
    "height": 11,
    "weight": 300,
    "abilities": [
      "static",
      "vital-spirit"
    ]
  },
  {
    "id": 126,
    "name": "magmar",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 57,
      "special_attack": 100,
      "special_defense": 85,
      "speed": 93
    },
    "base_experience": 173,
    "height": 13,
    "weight": 445,
    "abilities": [
      "flame-body",
      "vital-spirit"
    ]
  },
  {
    "id": 127,
    "name": "pinsir",
    "types": [
      "bug"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 70,
      "speed": 85
    },
    "base_experience": 175,
    "height": 15,
    "weight": 550,
    "abilities": [
      "hyper-cutter",
      "mold-breaker",
      "moxie"
    ]
  },
  {
    "id": 128,
    "name": "tauros",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 110
    },
    "base_experience": 172,
    "height": 14,
    "weight": 884,
    "abilities": [
      "intimidate",
      "anger-point",
      "sheer-force"
    ]
  },
  {
    "id": 129,
    "name": "magikarp",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 55,
      "special_attack": 15,
      "special_defense": 20,
      "speed": 80
    },
    "base_experience": 40,
    "height": 9,
    "weight": 100,
    "abilities": [
      "swift-swim",
      "rattled"
    ]
  },
  {
    "id": 130,
    "name": "gyarados",
    "types": [
      "water",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 125,
      "defense": 79,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 81
    },
    "base_experience": 189,
    "height": 65,
    "weight": 2350,
    "abilities": [
      "intimidate",
      "moxie"
    ]
  },
  {
    "id": 131,
    "name": "lapras",
    "types": [
      "water",
      "ice"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 130,
      "attack": 85,
      "defense": 80,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 60
    },
    "base_experience": 187,
    "height": 25,
    "weight": 2200,
    "abilities": [
      "water-absorb",
      "shell-armor",
      "hydration"
    ]
  },
  {
    "id": 132,
    "name": "ditto",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 48,
      "defense": 48,
      "special_attack": 48,
      "special_defense": 48,
      "speed": 48
    },
    "base_experience": 101,
    "height": 3,
    "weight": 40,
    "abilities": [
      "limber",
      "imposter"
    ]
  },
  {
    "id": 133,
    "name": "eevee",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 55
    },
    "base_experience": 65,
    "height": 3,
    "weight": 65,
    "abilities": [
      "run-away",
      "adaptability",
      "anticipation"
    ]
  },
  {
    "id": 134,
    "name": "vaporeon",
    "types": [
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 130,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 65
    },
    "base_experience": 184,
    "height": 10,
    "weight": 290,
    "abilities": [
      "water-absorb",
      "hydration"
    ]
  },
  {
    "id": 135,
    "name": "jolteon",
    "types": [
      "electric"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 130
    },
    "base_experience": 184,
    "height": 8,
    "weight": 245,
    "abilities": [
      "volt-absorb",
      "quick-feet"
    ]
  },
  {
    "id": 136,
    "name": "flareon",
    "types": [
      "fire"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 110,
      "speed": 65
    },
    "base_experience": 184,
    "height": 9,
    "weight": 250,
    "abilities": [
      "flash-fire",
      "guts"
    ]
  },
  {
    "id": 137,
    "name": "porygon",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 40
    },
    "base_experience": 79,
    "height": 8,
    "weight": 365,
    "abilities": [
      "trace",
      "download",
      "analytic"
    ]
  },
  {
    "id": 138,
    "name": "omanyte",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 40,
      "defense": 100,
      "special_attack": 90,
      "special_defense": 55,
      "speed": 35
    },
    "base_experience": 71,
    "height": 4,
    "weight": 75,
    "abilities": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ]
  },
  {
    "id": 139,
    "name": "omastar",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 125,
      "special_attack": 115,
      "special_defense": 70,
      "speed": 55
    },
    "base_experience": 173,
    "height": 10,
    "weight": 350,
    "abilities": [
      "swift-swim",
      "shell-armor",
      "weak-armor"
    ]
  },
  {
    "id": 140,
    "name": "kabuto",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 80,
      "defense": 90,
      "special_attack": 55,
      "special_defense": 45,
      "speed": 55
    },
    "base_experience": 71,
    "height": 5,
    "weight": 115,
    "abilities": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ]
  },
  {
    "id": 141,
    "name": "kabutops",
    "types": [
      "rock",
      "water"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 115,
      "defense": 105,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 80
    },
    "base_experience": 173,
    "height": 13,
    "weight": 405,
    "abilities": [
      "swift-swim",
      "battle-armor",
      "weak-armor"
    ]
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 65,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 130
    },
    "base_experience": 180,
    "height": 18,
    "weight": 590,
    "abilities": [
      "rock-head",
      "pressure",
      "unnerve"
    ]
  },
  {
    "id": 143,
    "name": "snorlax",
    "types": [
      "normal"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 160,
      "attack": 110,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 110,
      "speed": 30
    },
    "base_experience": 189,
    "height": 21,
    "weight": 4600,
    "abilities": [
      "immunity",
      "thick-fat",
      "gluttony"
    ]
  },
  {
    "id": 144,
    "name": "articuno",
    "types": [
      "ice",
      "flying"
    ],
    "generation": 1,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 125,
      "speed": 85
    },
    "base_experience": 261,
    "height": 17,
    "weight": 554,
    "abilities": [
      "pressure",
      "snow-cloak"
    ]
  },
  {
    "id": 145,
    "name": "zapdos",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 1,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 85,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 100
    },
    "base_experience": 261,
    "height": 16,
    "weight": 526,
    "abilities": [
      "pressure",
      "static"
    ]
  },
  {
    "id": 146,
    "name": "moltres",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 1,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 85,
      "speed": 90
    },
    "base_experience": 261,
    "height": 20,
    "weight": 600,
    "abilities": [
      "pressure",
      "flame-body"
    ]
  },
  {
    "id": 147,
    "name": "dratini",
    "types": [
      "dragon"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 41,
      "attack": 64,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 50
    },
    "base_experience": 60,
    "height": 18,
    "weight": 33,
    "abilities": [
      "shed-skin",
      "marvel-scale"
    ]
  },
  {
    "id": 148,
    "name": "dragonair",
    "types": [
      "dragon"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 84,
      "defense": 65,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 147,
    "height": 40,
    "weight": 165,
    "abilities": [
      "shed-skin",
      "marvel-scale"
    ]
  },
  {
    "id": 149,
    "name": "dragonite",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 1,
    "legendary": false,
    "stats": {
      "hp": 91,
      "attack": 134,
      "defense": 95,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 80
    },
    "base_experience": 270,
    "height": 22,
    "weight": 2100,
    "abilities": [
      "inner-focus",
      "multiscale"
    ]
  },
  {
    "id": 150,
    "name": "mewtwo",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": true,
    "stats": {
      "hp": 106,
      "attack": 110,
      "defense": 90,
      "special_attack": 154,
      "special_defense": 90,
      "speed": 130
    },
    "base_experience": 306,
    "height": 20,
    "weight": 1220,
    "abilities": [
      "pressure",
      "unnerve"
    ]
  },
  {
    "id": 151,
    "name": "mew",
    "types": [
      "psychic"
    ],
    "generation": 1,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 4,
    "weight": 40,
    "abilities": [
      "synchronize"
    ]
  },
  {
    "id": 152,
    "name": "chikorita",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 65,
      "special_attack": 49,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 64,
    "height": 9,
    "weight": 64,
    "abilities": [
      "overgrow",
      "leaf-guard"
    ]
  },
  {
    "id": 153,
    "name": "bayleef",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 80,
      "special_attack": 63,
      "special_defense": 80,
      "speed": 60
    },
    "base_experience": 142,
    "height": 12,
    "weight": 158,
    "abilities": [
      "overgrow",
      "leaf-guard"
    ]
  },
  {
    "id": 154,
    "name": "meganium",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 82,
      "defense": 100,
      "special_attack": 83,
      "special_defense": 100,
      "speed": 80
    },
    "base_experience": 236,
    "height": 18,
    "weight": 1005,
    "abilities": [
      "overgrow",
      "leaf-guard"
    ]
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 62,
    "height": 5,
    "weight": 79,
    "abilities": [
      "blaze",
      "flash-fire"
    ]
  },
  {
    "id": 156,
    "name": "quilava",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 64,
      "defense": 58,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 80
    },
    "base_experience": 142,
    "height": 9,
    "weight": 190,
    "abilities": [
      "blaze",
      "flash-fire"
    ]
  },
  {
    "id": 157,
    "name": "typhlosion",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 84,
      "defense": 78,
      "special_attack": 109,
      "special_defense": 85,
      "speed": 100
    },
    "base_experience": 240,
    "height": 17,
    "weight": 795,
    "abilities": [
      "blaze",
      "flash-fire"
    ]
  },
  {
    "id": 158,
    "name": "totodile",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 64,
      "special_attack": 44,
      "special_defense": 48,
      "speed": 43
    },
    "base_experience": 63,
    "height": 6,
    "weight": 95,
    "abilities": [
      "torrent",
      "sheer-force"
    ]
  },
  {
    "id": 159,
    "name": "croconaw",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 80,
      "special_attack": 59,
      "special_defense": 63,
      "speed": 58
    },
    "base_experience": 142,
    "height": 11,
    "weight": 250,
    "abilities": [
      "torrent",
      "sheer-force"
    ]
  },
  {
    "id": 160,
    "name": "feraligatr",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 100,
      "special_attack": 79,
      "special_defense": 83,
      "speed": 78
    },
    "base_experience": 239,
    "height": 23,
    "weight": 888,
    "abilities": [
      "torrent",
      "sheer-force"
    ]
  },
  {
    "id": 161,
    "name": "sentret",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 46,
      "defense": 34,
      "special_attack": 35,
      "special_defense": 45,
      "speed": 20
    },
    "base_experience": 43,
    "height": 8,
    "weight": 60,
    "abilities": [
      "run-away",
      "keen-eye",
      "frisk"
    ]
  },
  {
    "id": 162,
    "name": "furret",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 76,
      "defense": 64,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 90
    },
    "base_experience": 145,
    "height": 18,
    "weight": 325,
    "abilities": [
      "run-away",
      "keen-eye",
      "frisk"
    ]
  },
  {
    "id": 163,
    "name": "hoothoot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 30,
      "defense": 30,
      "special_attack": 36,
      "special_defense": 56,
      "speed": 50
    },
    "base_experience": 52,
    "height": 7,
    "weight": 212,
    "abilities": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ]
  },
  {
    "id": 164,
    "name": "noctowl",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 50,
      "special_attack": 86,
      "special_defense": 96,
      "speed": 70
    },
    "base_experience": 158,
    "height": 16,
    "weight": 408,
    "abilities": [
      "insomnia",
      "keen-eye",
      "tinted-lens"
    ]
  },
  {
    "id": 165,
    "name": "ledyba",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 20,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 80,
      "speed": 55
    },
    "base_experience": 53,
    "height": 10,
    "weight": 108,
    "abilities": [
      "swarm",
      "early-bird",
      "rattled"
    ]
  },
  {
    "id": 166,
    "name": "ledian",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 35,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 110,
      "speed": 85
    },
    "base_experience": 137,
    "height": 14,
    "weight": 356,
    "abilities": [
      "swarm",
      "early-bird",
      "iron-fist"
    ]
  },
  {
    "id": 167,
    "name": "spinarak",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 60,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    },
    "base_experience": 50,
    "height": 5,
    "weight": 85,
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ]
  },
  {
    "id": 168,
    "name": "ariados",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 40
    },
    "base_experience": 140,
    "height": 11,
    "weight": 335,
    "abilities": [
      "swarm",
      "insomnia",
      "sniper"
    ]
  },
  {
    "id": 169,
    "name": "crobat",
    "types": [
      "poison",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 90,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 130
    },
    "base_experience": 241,
    "height": 18,
    "weight": 750,
    "abilities": [
      "inner-focus",
      "infiltrator"
    ]
  },
  {
    "id": 170,
    "name": "chinchou",
    "types": [
      "water",
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 38,
      "defense": 38,
      "special_attack": 56,
      "special_defense": 56,
      "speed": 67
    },
    "base_experience": 66,
    "height": 5,
    "weight": 120,
    "abilities": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ]
  },
  {
    "id": 171,
    "name": "lanturn",
    "types": [
      "water",
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 125,
      "attack": 58,
      "defense": 58,
      "special_attack": 76,
      "special_defense": 76,
      "speed": 67
    },
    "base_experience": 161,
    "height": 12,
    "weight": 225,
    "abilities": [
      "volt-absorb",
      "illuminate",
      "water-absorb"
    ]
  },
  {
    "id": 172,
    "name": "pichu",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 15,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 60
    },
    "base_experience": 41,
    "height": 3,
    "weight": 20,
    "abilities": [
      "static",
      "lightning-rod"
    ]
  },
  {
    "id": 173,
    "name": "cleffa",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 25,
      "defense": 28,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 15
    },
    "base_experience": 44,
    "height": 3,
    "weight": 30,
    "abilities": [
      "cute-charm",
      "magic-guard",
      "friend-guard"
    ]
  },
  {
    "id": 174,
    "name": "igglybuff",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 30,
      "defense": 15,
      "special_attack": 40,
      "special_defense": 20,
      "speed": 15
    },
    "base_experience": 42,
    "height": 3,
    "weight": 10,
    "abilities": [
      "cute-charm",
      "competitive",
      "friend-guard"
    ]
  },
  {
    "id": 175,
    "name": "togepi",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 20,
      "defense": 65,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 20
    },
    "base_experience": 49,
    "height": 3,
    "weight": 15,
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ]
  },
  {
    "id": 176,
    "name": "togetic",
    "types": [
      "fairy",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 85,
      "special_attack": 80,
      "special_defense": 105,
      "speed": 40
    },
    "base_experience": 142,
    "height": 6,
    "weight": 32,
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ]
  },
  {
    "id": 177,
    "name": "natu",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 45,
      "speed": 70
    },
    "base_experience": 64,
    "height": 2,
    "weight": 20,
    "abilities": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ]
  },
  {
    "id": 178,
    "name": "xatu",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 70,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 95
    },
    "base_experience": 165,
    "height": 15,
    "weight": 150,
    "abilities": [
      "synchronize",
      "early-bird",
      "magic-bounce"
    ]
  },
  {
    "id": 179,
    "name": "mareep",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 35
    },
    "base_experience": 56,
    "height": 6,
    "weight": 78,
    "abilities": [
      "static",
      "plus"
    ]
  },
  {
    "id": 180,
    "name": "flaaffy",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special_attack": 80,
      "special_defense": 60,
      "speed": 45
    },
    "base_experience": 128,
    "height": 8,
    "weight": 133,
    "abilities": [
      "static",
      "plus"
    ]
  },
  {
    "id": 181,
    "name": "ampharos",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 85,
      "special_attack": 115,
      "special_defense": 90,
      "speed": 55
    },
    "base_experience": 230,
    "height": 14,
    "weight": 615,
    "abilities": [
      "static",
      "plus"
    ]
  },
  {
    "id": 182,
    "name": "bellossom",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 95,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 50
    },
    "base_experience": 221,
    "height": 4,
    "weight": 58,
    "abilities": [
      "chlorophyll",
      "healer"
    ]
  },
  {
    "id": 183,
    "name": "marill",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 20,
      "defense": 50,
      "special_attack": 20,
      "special_defense": 50,
      "speed": 40
    },
    "base_experience": 88,
    "height": 4,
    "weight": 85,
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ]
  },
  {
    "id": 184,
    "name": "azumarill",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 50,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 50
    },
    "base_experience": 189,
    "height": 8,
    "weight": 285,
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ]
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "types": [
      "rock"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 115,
      "special_attack": 30,
      "special_defense": 65,
      "speed": 30
    },
    "base_experience": 144,
    "height": 12,
    "weight": 380,
    "abilities": [
      "sturdy",
      "rock-head",
      "rattled"
    ]
  },
  {
    "id": 186,
    "name": "politoed",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 75,
      "defense": 75,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 70
    },
    "base_experience": 225,
    "height": 11,
    "weight": 339,
    "abilities": [
      "water-absorb",
      "damp",
      "drizzle"
    ]
  },
  {
    "id": 187,
    "name": "hoppip",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 55,
      "speed": 50
    },
    "base_experience": 50,
    "height": 4,
    "weight": 5,
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ]
  },
  {
    "id": 188,
    "name": "skiploom",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 80
    },
    "base_experience": 119,
    "height": 6,
    "weight": 10,
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ]
  },
  {
    "id": 189,
    "name": "jumpluff",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 55,
      "defense": 70,
      "special_attack": 55,
      "special_defense": 95,
      "speed": 110
    },
    "base_experience": 207,
    "height": 8,
    "weight": 30,
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "infiltrator"
    ]
  },
  {
    "id": 190,
    "name": "aipom",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 85
    },
    "base_experience": 72,
    "height": 8,
    "weight": 115,
    "abilities": [
      "run-away",
      "pickup",
      "skill-link"
    ]
  },
  {
    "id": 191,
    "name": "sunkern",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 30
    },
    "base_experience": 36,
    "height": 3,
    "weight": 18,
    "abilities": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ]
  },
  {
    "id": 192,
    "name": "sunflora",
    "types": [
      "grass"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 55,
      "special_attack": 105,
      "special_defense": 85,
      "speed": 30
    },
    "base_experience": 149,
    "height": 8,
    "weight": 85,
    "abilities": [
      "chlorophyll",
      "solar-power",
      "early-bird"
    ]
  },
  {
    "id": 193,
    "name": "yanma",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 45,
      "special_attack": 75,
      "special_defense": 45,
      "speed": 95
    },
    "base_experience": 78,
    "height": 12,
    "weight": 380,
    "abilities": [
      "speed-boost",
      "compound-eyes",
      "frisk"
    ]
  },
  {
    "id": 194,
    "name": "wooper",
    "types": [
      "water",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 45,
      "defense": 45,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    },
    "base_experience": 42,
    "height": 4,
    "weight": 85,
    "abilities": [
      "damp",
      "water-absorb",
      "unaware"
    ]
  },
  {
    "id": 195,
    "name": "quagsire",
    "types": [
      "water",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 85,
      "defense": 85,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 35
    },
    "base_experience": 151,
    "height": 14,
    "weight": 750,
    "abilities": [
      "damp",
      "water-absorb",
      "unaware"
    ]
  },
  {
    "id": 196,
    "name": "espeon",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 65,
      "defense": 60,
      "special_attack": 130,
      "special_defense": 95,
      "speed": 110
    },
    "base_experience": 184,
    "height": 9,
    "weight": 265,
    "abilities": [
      "synchronize",
      "magic-bounce"
    ]
  },
  {
    "id": 197,
    "name": "umbreon",
    "types": [
      "dark"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 110,
      "special_attack": 60,
      "special_defense": 130,
      "speed": 65
    },
    "base_experience": 184,
    "height": 10,
    "weight": 270,
    "abilities": [
      "synchronize",
      "inner-focus"
    ]
  },
  {
    "id": 198,
    "name": "murkrow",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 42,
      "special_attack": 85,
      "special_defense": 42,
      "speed": 91
    },
    "base_experience": 81,
    "height": 5,
    "weight": 21,
    "abilities": [
      "insomnia",
      "super-luck",
      "prankster"
    ]
  },
  {
    "id": 199,
    "name": "slowking",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 75,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 110,
      "speed": 30
    },
    "base_experience": 172,
    "height": 20,
    "weight": 795,
    "abilities": [
      "oblivious",
      "own-tempo",
      "regenerator"
    ]
  },
  {
    "id": 200,
    "name": "misdreavus",
    "types": [
      "ghost"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 85,
      "special_defense": 85,
      "speed": 85
    },
    "base_experience": 87,
    "height": 7,
    "weight": 10,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 201,
    "name": "unown",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 72,
      "defense": 48,
      "special_attack": 72,
      "special_defense": 48,
      "speed": 48
    },
    "base_experience": 118,
    "height": 5,
    "weight": 50,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "types": [
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 190,
      "attack": 33,
      "defense": 58,
      "special_attack": 33,
      "special_defense": 58,
      "speed": 33
    },
    "base_experience": 142,
    "height": 13,
    "weight": 285,
    "abilities": [
      "shadow-tag",
      "telepathy"
    ]
  },
  {
    "id": 203,
    "name": "girafarig",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 65,
      "speed": 85
    },
    "base_experience": 159,
    "height": 15,
    "weight": 415,
    "abilities": [
      "inner-focus",
      "early-bird",
      "sap-sipper"
    ]
  },
  {
    "id": 204,
    "name": "pineco",
    "types": [
      "bug"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 90,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 15
    },
    "base_experience": 58,
    "height": 6,
    "weight": 72,
    "abilities": [
      "sturdy",
      "overcoat"
    ]
  },
  {
    "id": 205,
    "name": "forretress",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 140,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 40
    },
    "base_experience": 163,
    "height": 12,
    "weight": 1258,
    "abilities": [
      "sturdy",
      "overcoat"
    ]
  },
  {
    "id": 206,
    "name": "dunsparce",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 70,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 145,
    "height": 15,
    "weight": 140,
    "abilities": [
      "serene-grace",
      "run-away",
      "rattled"
    ]
  },
  {
    "id": 207,
    "name": "gligar",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 105,
      "special_attack": 35,
      "special_defense": 65,
      "speed": 85
    },
    "base_experience": 86,
    "height": 11,
    "weight": 648,
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "immunity"
    ]
  },
  {
    "id": 208,
    "name": "steelix",
    "types": [
      "steel",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 85,
      "defense": 200,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 30
    },
    "base_experience": 179,
    "height": 92,
    "weight": 4000,
    "abilities": [
      "rock-head",
      "sturdy",
      "sheer-force"
    ]
  },
  {
    "id": 209,
    "name": "snubbull",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    },
    "base_experience": 60,
    "height": 6,
    "weight": 78,
    "abilities": [
      "intimidate",
      "run-away",
      "rattled"
    ]
  },
  {
    "id": 210,
    "name": "granbull",
    "types": [
      "fairy"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 45
    },
    "base_experience": 158,
    "height": 14,
    "weight": 487,
    "abilities": [
      "intimidate",
      "quick-feet",
      "rattled"
    ]
  },
  {
    "id": 211,
    "name": "qwilfish",
    "types": [
      "water",
      "poison"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 85
    },
    "base_experience": 88,
    "height": 5,
    "weight": 39,
    "abilities": [
      "poison-point",
      "swift-swim",
      "intimidate"
    ]
  },
  {
    "id": 212,
    "name": "scizor",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 65
    },
    "base_experience": 175,
    "height": 18,
    "weight": 1180,
    "abilities": [
      "swarm",
      "technician",
      "light-metal"
    ]
  },
  {
    "id": 213,
    "name": "shuckle",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 10,
      "defense": 230,
      "special_attack": 10,
      "special_defense": 230,
      "speed": 5
    },
    "base_experience": 177,
    "height": 6,
    "weight": 205,
    "abilities": [
      "sturdy",
      "gluttony",
      "contrary"
    ]
  },
  {
    "id": 214,
    "name": "heracross",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 125,
      "defense": 75,
      "special_attack": 40,
      "special_defense": 95,
      "speed": 85
    },
    "base_experience": 175,
    "height": 15,
    "weight": 540,
    "abilities": [
      "swarm",
      "guts",
      "moxie"
    ]
  },
  {
    "id": 215,
    "name": "sneasel",
    "types": [
      "dark",
      "ice"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 95,
      "defense": 55,
      "special_attack": 35,
      "special_defense": 75,
      "speed": 115
    },
    "base_experience": 86,
    "height": 9,
    "weight": 280,
    "abilities": [
      "inner-focus",
      "keen-eye",
      "pickpocket"
    ]
  },
  {
    "id": 216,
    "name": "teddiursa",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    },
    "base_experience": 66,
    "height": 6,
    "weight": 88,
    "abilities": [
      "pickup",
      "quick-feet",
      "honey-gather"
    ]
  },
  {
    "id": 217,
    "name": "ursaring",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 130,
      "defense": 75,
      "special_attack": 75,
      "special_defense": 75,
      "speed": 55
    },
    "base_experience": 175,
    "height": 18,
    "weight": 1258,
    "abilities": [
      "guts",
      "quick-feet",
      "unnerve"
    ]
  },
  {
    "id": 218,
    "name": "slugma",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 40,
      "speed": 20
    },
    "base_experience": 50,
    "height": 7,
    "weight": 350,
    "abilities": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ]
  },
  {
    "id": 219,
    "name": "magcargo",
    "types": [
      "fire",
      "rock"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 120,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 30
    },
    "base_experience": 151,
    "height": 8,
    "weight": 550,
    "abilities": [
      "magma-armor",
      "flame-body",
      "weak-armor"
    ]
  },
  {
    "id": 220,
    "name": "swinub",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 50
    },
    "base_experience": 50,
    "height": 4,
    "weight": 65,
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ]
  },
  {
    "id": 221,
    "name": "piloswine",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    },
    "base_experience": 158,
    "height": 11,
    "weight": 558,
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ]
  },
  {
    "id": 222,
    "name": "corsola",
    "types": [
      "water",
      "rock"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 55,
      "defense": 95,
      "special_attack": 65,
      "special_defense": 95,
      "speed": 35
    },
    "base_experience": 144,
    "height": 6,
    "weight": 50,
    "abilities": [
      "hustle",
      "natural-cure",
      "regenerator"
    ]
  },
  {
    "id": 223,
    "name": "remoraid",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 65,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 35,
      "speed": 65
    },
    "base_experience": 60,
    "height": 6,
    "weight": 120,
    "abilities": [
      "hustle",
      "sniper",
      "moody"
    ]
  },
  {
    "id": 224,
    "name": "octillery",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 105,
      "defense": 75,
      "special_attack": 105,
      "special_defense": 75,
      "speed": 45
    },
    "base_experience": 168,
    "height": 9,
    "weight": 285,
    "abilities": [
      "suction-cups",
      "sniper",
      "moody"
    ]
  },
  {
    "id": 225,
    "name": "delibird",
    "types": [
      "ice",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 45,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 75
    },
    "base_experience": 116,
    "height": 9,
    "weight": 160,
    "abilities": [
      "vital-spirit",
      "hustle",
      "insomnia"
    ]
  },
  {
    "id": 226,
    "name": "mantine",
    "types": [
      "water",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 40,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 140,
      "speed": 70
    },
    "base_experience": 170,
    "height": 21,
    "weight": 2200,
    "abilities": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ]
  },
  {
    "id": 227,
    "name": "skarmory",
    "types": [
      "steel",
      "flying"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 140,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 163,
    "height": 17,
    "weight": 505,
    "abilities": [
      "keen-eye",
      "sturdy",
      "weak-armor"
    ]
  },
  {
    "id": 228,
    "name": "houndour",
    "types": [
      "dark",
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 30,
      "special_attack": 80,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 66,
    "height": 6,
    "weight": 108,
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ]
  },
  {
    "id": 229,
    "name": "houndoom",
    "types": [
      "dark",
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 90,
      "defense": 50,
      "special_attack": 110,
      "special_defense": 80,
      "speed": 95
    },
    "base_experience": 175,
    "height": 14,
    "weight": 350,
    "abilities": [
      "early-bird",
      "flash-fire",
      "unnerve"
    ]
  },
  {
    "id": 230,
    "name": "kingdra",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 85
    },
    "base_experience": 243,
    "height": 18,
    "weight": 1520,
    "abilities": [
      "swift-swim",
      "sniper",
      "damp"
    ]
  },
  {
    "id": 231,
    "name": "phanpy",
    "types": [
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 40
    },
    "base_experience": 66,
    "height": 5,
    "weight": 335,
    "abilities": [
      "pickup",
      "sand-veil"
    ]
  },
  {
    "id": 232,
    "name": "donphan",
    "types": [
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 120,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    },
    "base_experience": 175,
    "height": 11,
    "weight": 1200,
    "abilities": [
      "sturdy",
      "sand-veil"
    ]
  },
  {
    "id": 233,
    "name": "porygon2",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 90,
      "special_attack": 105,
      "special_defense": 95,
      "speed": 60
    },
    "base_experience": 180,
    "height": 6,
    "weight": 325,
    "abilities": [
      "trace",
      "download",
      "analytic"
    ]
  },
  {
    "id": 234,
    "name": "stantler",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 73,
      "attack": 95,
      "defense": 62,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 85
    },
    "base_experience": 163,
    "height": 14,
    "weight": 712,
    "abilities": [
      "intimidate",
      "frisk",
      "sap-sipper"
    ]
  },
  {
    "id": 235,
    "name": "smeargle",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 20,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 45,
      "speed": 75
    },
    "base_experience": 88,
    "height": 12,
    "weight": 580,
    "abilities": [
      "own-tempo",
      "technician",
      "moody"
    ]
  },
  {
    "id": 236,
    "name": "tyrogue",
    "types": [
      "fighting"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 35,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 35
    },
    "base_experience": 42,
    "height": 7,
    "weight": 210,
    "abilities": [
      "guts",
      "steadfast",
      "vital-spirit"
    ]
  },
  {
    "id": 237,
    "name": "hitmontop",
    "types": [
      "fighting"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 95,
      "defense": 95,
      "special_attack": 35,
      "special_defense": 110,
      "speed": 70
    },
    "base_experience": 159,
    "height": 14,
    "weight": 480,
    "abilities": [
      "intimidate",
      "technician",
      "steadfast"
    ]
  },
  {
    "id": 238,
    "name": "smoochum",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 15,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 65
    },
    "base_experience": 61,
    "height": 4,
    "weight": 60,
    "abilities": [
      "oblivious",
      "forewarn",
      "hydration"
    ]
  },
  {
    "id": 239,
    "name": "elekid",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 63,
      "defense": 37,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 95
    },
    "base_experience": 72,
    "height": 6,
    "weight": 235,
    "abilities": [
      "static",
      "vital-spirit"
    ]
  },
  {
    "id": 240,
    "name": "magby",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 37,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 83
    },
    "base_experience": 73,
    "height": 7,
    "weight": 214,
    "abilities": [
      "flame-body",
      "vital-spirit"
    ]
  },
  {
    "id": 241,
    "name": "miltank",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 80,
      "defense": 105,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 100
    },
    "base_experience": 172,
    "height": 12,
    "weight": 755,
    "abilities": [
      "thick-fat",
      "scrappy",
      "sap-sipper"
    ]
  },
  {
    "id": 242,
    "name": "blissey",
    "types": [
      "normal"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 255,
      "attack": 10,
      "defense": 10,
      "special_attack": 75,
      "special_defense": 135,
      "speed": 55
    },
    "base_experience": 608,
    "height": 15,
    "weight": 468,
    "abilities": [
      "natural-cure",
      "serene-grace",
      "healer"
    ]
  },
  {
    "id": 243,
    "name": "raikou",
    "types": [
      "electric"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 85,
      "defense": 75,
      "special_attack": 115,
      "special_defense": 100,
      "speed": 115
    },
    "base_experience": 261,
    "height": 19,
    "weight": 1780,
    "abilities": [
      "pressure",
      "inner-focus"
    ]
  },
  {
    "id": 244,
    "name": "entei",
    "types": [
      "fire"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 115,
      "attack": 115,
      "defense": 85,
      "special_attack": 90,
      "special_defense": 75,
      "speed": 100
    },
    "base_experience": 261,
    "height": 21,
    "weight": 1980,
    "abilities": [
      "pressure",
      "inner-focus"
    ]
  },
  {
    "id": 245,
    "name": "suicune",
    "types": [
      "water"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 75,
      "defense": 115,
      "special_attack": 90,
      "special_defense": 115,
      "speed": 85
    },
    "base_experience": 261,
    "height": 20,
    "weight": 1870,
    "abilities": [
      "pressure",
      "inner-focus"
    ]
  },
  {
    "id": 246,
    "name": "larvitar",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 41
    },
    "base_experience": 60,
    "height": 6,
    "weight": 720,
    "abilities": [
      "guts",
      "sand-veil"
    ]
  },
  {
    "id": 247,
    "name": "pupitar",
    "types": [
      "rock",
      "ground"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 84,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 51
    },
    "base_experience": 144,
    "height": 12,
    "weight": 1520,
    "abilities": [
      "shed-skin"
    ]
  },
  {
    "id": 248,
    "name": "tyranitar",
    "types": [
      "rock",
      "dark"
    ],
    "generation": 2,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 134,
      "defense": 110,
      "special_attack": 95,
      "special_defense": 100,
      "speed": 61
    },
    "base_experience": 270,
    "height": 20,
    "weight": 2020,
    "abilities": [
      "sand-stream",
      "unnerve"
    ]
  },
  {
    "id": 249,
    "name": "lugia",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 106,
      "attack": 90,
      "defense": 130,
      "special_attack": 90,
      "special_defense": 154,
      "speed": 110
    },
    "base_experience": 306,
    "height": 52,
    "weight": 2160,
    "abilities": [
      "pressure",
      "multiscale"
    ]
  },
  {
    "id": 250,
    "name": "ho-oh",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 106,
      "attack": 130,
      "defense": 90,
      "special_attack": 110,
      "special_defense": 154,
      "speed": 90
    },
    "base_experience": 306,
    "height": 38,
    "weight": 1990,
    "abilities": [
      "pressure",
      "regenerator"
    ]
  },
  {
    "id": 251,
    "name": "celebi",
    "types": [
      "psychic",
      "grass"
    ],
    "generation": 2,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 6,
    "weight": 50,
    "abilities": [
      "natural-cure"
    ]
  },
  {
    "id": 252,
    "name": "treecko",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 70
    },
    "base_experience": 62,
    "height": 5,
    "weight": 50,
    "abilities": [
      "overgrow",
      "unburden"
    ]
  },
  {
    "id": 253,
    "name": "grovyle",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special_attack": 85,
      "special_defense": 65,
      "speed": 95
    },
    "base_experience": 142,
    "height": 9,
    "weight": 216,
    "abilities": [
      "overgrow",
      "unburden"
    ]
  },
  {
    "id": 254,
    "name": "sceptile",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special_attack": 105,
      "special_defense": 85,
      "speed": 120
    },
    "base_experience": 239,
    "height": 17,
    "weight": 522,
    "abilities": [
      "overgrow",
      "unburden"
    ]
  },
  {
    "id": 255,
    "name": "torchic",
    "types": [
      "fire"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 45
    },
    "base_experience": 62,
    "height": 4,
    "weight": 25,
    "abilities": [
      "blaze",
      "speed-boost"
    ]
  },
  {
    "id": 256,
    "name": "combusken",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special_attack": 85,
      "special_defense": 60,
      "speed": 55
    },
    "base_experience": 142,
    "height": 9,
    "weight": 195,
    "abilities": [
      "blaze",
      "speed-boost"
    ]
  },
  {
    "id": 257,
    "name": "blaziken",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 70,
      "special_attack": 110,
      "special_defense": 70,
      "speed": 80
    },
    "base_experience": 239,
    "height": 19,
    "weight": 520,
    "abilities": [
      "blaze",
      "speed-boost"
    ]
  },
  {
    "id": 258,
    "name": "mudkip",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    },
    "base_experience": 62,
    "height": 4,
    "weight": 76,
    "abilities": [
      "torrent",
      "damp"
    ]
  },
  {
    "id": 259,
    "name": "marshtomp",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    },
    "base_experience": 142,
    "height": 7,
    "weight": 280,
    "abilities": [
      "torrent",
      "damp"
    ]
  },
  {
    "id": 260,
    "name": "swampert",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 110,
      "defense": 90,
      "special_attack": 85,
      "special_defense": 90,
      "speed": 60
    },
    "base_experience": 241,
    "height": 15,
    "weight": 819,
    "abilities": [
      "torrent",
      "damp"
    ]
  },
  {
    "id": 261,
    "name": "poochyena",
    "types": [
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 35,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 35
    },
    "base_experience": 56,
    "height": 5,
    "weight": 136,
    "abilities": [
      "run-away",
      "quick-feet",
      "rattled"
    ]
  },
  {
    "id": 262,
    "name": "mightyena",
    "types": [
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 70
    },
    "base_experience": 147,
    "height": 10,
    "weight": 370,
    "abilities": [
      "intimidate",
      "quick-feet",
      "moxie"
    ]
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 41,
      "special_attack": 30,
      "special_defense": 41,
      "speed": 60
    },
    "base_experience": 56,
    "height": 4,
    "weight": 175,
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ]
  },
  {
    "id": 264,
    "name": "linoone",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 70,
      "defense": 61,
      "special_attack": 50,
      "special_defense": 61,
      "speed": 100
    },
    "base_experience": 147,
    "height": 5,
    "weight": 325,
    "abilities": [
      "pickup",
      "gluttony",
      "quick-feet"
    ]
  },
  {
    "id": 265,
    "name": "wurmple",
    "types": [
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 35,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 20
    },
    "base_experience": 56,
    "height": 3,
    "weight": 36,
    "abilities": [
      "shield-dust",
      "run-away"
    ]
  },
  {
    "id": 266,
    "name": "silcoon",
    "types": [
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    },
    "base_experience": 72,
    "height": 6,
    "weight": 100,
    "abilities": [
      "shed-skin"
    ]
  },
  {
    "id": 267,
    "name": "beautifly",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 178,
    "height": 10,
    "weight": 284,
    "abilities": [
      "swarm",
      "rivalry"
    ]
  },
  {
    "id": 268,
    "name": "cascoon",
    "types": [
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    },
    "base_experience": 72,
    "height": 7,
    "weight": 115,
    "abilities": [
      "shed-skin"
    ]
  },
  {
    "id": 269,
    "name": "dustox",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 90,
      "speed": 65
    },
    "base_experience": 173,
    "height": 12,
    "weight": 316,
    "abilities": [
      "shield-dust",
      "compound-eyes"
    ]
  },
  {
    "id": 270,
    "name": "lotad",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 30
    },
    "base_experience": 44,
    "height": 5,
    "weight": 26,
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ]
  },
  {
    "id": 271,
    "name": "lombre",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    },
    "base_experience": 119,
    "height": 12,
    "weight": 325,
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ]
  },
  {
    "id": 272,
    "name": "ludicolo",
    "types": [
      "water",
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 70,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 70
    },
    "base_experience": 216,
    "height": 15,
    "weight": 550,
    "abilities": [
      "swift-swim",
      "rain-dish",
      "own-tempo"
    ]
  },
  {
    "id": 273,
    "name": "seedot",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 50,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 30
    },
    "base_experience": 44,
    "height": 5,
    "weight": 40,
    "abilities": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ]
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 119,
    "height": 10,
    "weight": 280,
    "abilities": [
      "chlorophyll",
      "early-bird",
      "pickpocket"
    ]
  },
  {
    "id": 275,
    "name": "shiftry",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 60,
      "speed": 80
    },
    "base_experience": 216,
    "height": 13,
    "weight": 596,
    "abilities": [
      "chlorophyll",
      "wind-rider",
      "pickpocket"
    ]
  },
  {
    "id": 276,
    "name": "taillow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 85
    },
    "base_experience": 54,
    "height": 3,
    "weight": 23,
    "abilities": [
      "guts",
      "scrappy"
    ]
  },
  {
    "id": 277,
    "name": "swellow",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 50,
      "speed": 125
    },
    "base_experience": 159,
    "height": 7,
    "weight": 198,
    "abilities": [
      "guts",
      "scrappy"
    ]
  },
  {
    "id": 278,
    "name": "wingull",
    "types": [
      "water",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 30,
      "special_attack": 55,
      "special_defense": 30,
      "speed": 85
    },
    "base_experience": 54,
    "height": 6,
    "weight": 95,
    "abilities": [
      "keen-eye",
      "hydration",
      "rain-dish"
    ]
  },
  {
    "id": 279,
    "name": "pelipper",
    "types": [
      "water",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 65
    },
    "base_experience": 154,
    "height": 12,
    "weight": 280,
    "abilities": [
      "keen-eye",
      "drizzle",
      "rain-dish"
    ]
  },
  {
    "id": 280,
    "name": "ralts",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 28,
      "attack": 25,
      "defense": 25,
      "special_attack": 45,
      "special_defense": 35,
      "speed": 40
    },
    "base_experience": 40,
    "height": 4,
    "weight": 66,
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ]
  },
  {
    "id": 281,
    "name": "kirlia",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 35,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 50
    },
    "base_experience": 97,
    "height": 8,
    "weight": 202,
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ]
  },
  {
    "id": 282,
    "name": "gardevoir",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 65,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 115,
      "speed": 80
    },
    "base_experience": 233,
    "height": 16,
    "weight": 484,
    "abilities": [
      "synchronize",
      "trace",
      "telepathy"
    ]
  },
  {
    "id": 283,
    "name": "surskit",
    "types": [
      "bug",
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 32,
      "special_attack": 50,
      "special_defense": 52,
      "speed": 65
    },
    "base_experience": 54,
    "height": 5,
    "weight": 17,
    "abilities": [
      "swift-swim",
      "rain-dish"
    ]
  },
  {
    "id": 284,
    "name": "masquerain",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 62,
      "special_attack": 100,
      "special_defense": 82,
      "speed": 80
    },
    "base_experience": 159,
    "height": 8,
    "weight": 36,
    "abilities": [
      "intimidate",
      "unnerve"
    ]
  },
  {
    "id": 285,
    "name": "shroomish",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 35
    },
    "base_experience": 59,
    "height": 4,
    "weight": 45,
    "abilities": [
      "effect-spore",
      "poison-heal",
      "quick-feet"
    ]
  },
  {
    "id": 286,
    "name": "breloom",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 130,
      "defense": 80,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 70
    },
    "base_experience": 161,
    "height": 12,
    "weight": 392,
    "abilities": [
      "effect-spore",
      "poison-heal",
      "technician"
    ]
  },
  {
    "id": 287,
    "name": "slakoth",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 30
    },
    "base_experience": 56,
    "height": 8,
    "weight": 240,
    "abilities": [
      "truant"
    ]
  },
  {
    "id": 288,
    "name": "vigoroth",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 90
    },
    "base_experience": 154,
    "height": 14,
    "weight": 465,
    "abilities": [
      "vital-spirit"
    ]
  },
  {
    "id": 289,
    "name": "slaking",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 150,
      "attack": 160,
      "defense": 100,
      "special_attack": 95,
      "special_defense": 65,
      "speed": 100
    },
    "base_experience": 252,
    "height": 20,
    "weight": 1305,
    "abilities": [
      "truant"
    ]
  },
  {
    "id": 290,
    "name": "nincada",
    "types": [
      "bug",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 31,
      "attack": 45,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 40
    },
    "base_experience": 53,
    "height": 5,
    "weight": 55,
    "abilities": [
      "compound-eyes",
      "run-away"
    ]
  },
  {
    "id": 291,
    "name": "ninjask",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 90,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 160
    },
    "base_experience": 160,
    "height": 8,
    "weight": 120,
    "abilities": [
      "speed-boost",
      "infiltrator"
    ]
  },
  {
    "id": 292,
    "name": "shedinja",
    "types": [
      "bug",
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 1,
      "attack": 90,
      "defense": 45,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 40
    },
    "base_experience": 83,
    "height": 8,
    "weight": 12,
    "abilities": [
      "wonder-guard"
    ]
  },
  {
    "id": 293,
    "name": "whismur",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 64,
      "attack": 51,
      "defense": 23,
      "special_attack": 51,
      "special_defense": 23,
      "speed": 28
    },
    "base_experience": 48,
    "height": 6,
    "weight": 163,
    "abilities": [
      "soundproof",
      "rattled"
    ]
  },
  {
    "id": 294,
    "name": "loudred",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 84,
      "attack": 71,
      "defense": 43,
      "special_attack": 71,
      "special_defense": 43,
      "speed": 48
    },
    "base_experience": 126,
    "height": 10,
    "weight": 405,
    "abilities": [
      "soundproof",
      "scrappy"
    ]
  },
  {
    "id": 295,
    "name": "exploud",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 104,
      "attack": 91,
      "defense": 63,
      "special_attack": 91,
      "special_defense": 73,
      "speed": 68
    },
    "base_experience": 221,
    "height": 15,
    "weight": 840,
    "abilities": [
      "soundproof",
      "scrappy"
    ]
  },
  {
    "id": 296,
    "name": "makuhita",
    "types": [
      "fighting"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 60,
      "defense": 30,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 25
    },
    "base_experience": 47,
    "height": 10,
    "weight": 864,
    "abilities": [
      "thick-fat",
      "guts",
      "sheer-force"
    ]
  },
  {
    "id": 297,
    "name": "hariyama",
    "types": [
      "fighting"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 144,
      "attack": 120,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 50
    },
    "base_experience": 166,
    "height": 23,
    "weight": 2538,
    "abilities": [
      "thick-fat",
      "guts",
      "sheer-force"
    ]
  },
  {
    "id": 298,
    "name": "azurill",
    "types": [
      "normal",
      "fairy"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 20,
      "defense": 40,
      "special_attack": 20,
      "special_defense": 40,
      "speed": 20
    },
    "base_experience": 38,
    "height": 2,
    "weight": 20,
    "abilities": [
      "thick-fat",
      "huge-power",
      "sap-sipper"
    ]
  },
  {
    "id": 299,
    "name": "nosepass",
    "types": [
      "rock"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 135,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 30
    },
    "base_experience": 75,
    "height": 10,
    "weight": 970,
    "abilities": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ]
  },
  {
    "id": 300,
    "name": "skitty",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 45,
      "defense": 45,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 50
    },
    "base_experience": 52,
    "height": 6,
    "weight": 110,
    "abilities": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ]
  },
  {
    "id": 301,
    "name": "delcatty",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 90
    },
    "base_experience": 140,
    "height": 11,
    "weight": 326,
    "abilities": [
      "cute-charm",
      "normalize",
      "wonder-skin"
    ]
  },
  {
    "id": 302,
    "name": "sableye",
    "types": [
      "dark",
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 65,
      "speed": 50
    },
    "base_experience": 133,
    "height": 5,
    "weight": 110,
    "abilities": [
      "keen-eye",
      "stall",
      "prankster"
    ]
  },
  {
    "id": 303,
    "name": "mawile",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 50
    },
    "base_experience": 133,
    "height": 6,
    "weight": 115,
    "abilities": [
      "hyper-cutter",
      "intimidate",
      "sheer-force"
    ]
  },
  {
    "id": 304,
    "name": "aron",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 100,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 30
    },
    "base_experience": 66,
    "height": 4,
    "weight": 600,
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ]
  },
  {
    "id": 305,
    "name": "lairon",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 140,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 40
    },
    "base_experience": 151,
    "height": 9,
    "weight": 1200,
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ]
  },
  {
    "id": 306,
    "name": "aggron",
    "types": [
      "steel",
      "rock"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 180,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 50
    },
    "base_experience": 239,
    "height": 21,
    "weight": 3600,
    "abilities": [
      "sturdy",
      "rock-head",
      "heavy-metal"
    ]
  },
  {
    "id": 307,
    "name": "meditite",
    "types": [
      "fighting",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 55,
      "speed": 60
    },
    "base_experience": 56,
    "height": 6,
    "weight": 112,
    "abilities": [
      "pure-power",
      "telepathy"
    ]
  },
  {
    "id": 308,
    "name": "medicham",
    "types": [
      "fighting",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 80
    },
    "base_experience": 144,
    "height": 13,
    "weight": 315,
    "abilities": [
      "pure-power",
      "telepathy"
    ]
  },
  {
    "id": 309,
    "name": "electrike",
    "types": [
      "electric"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 40,
      "speed": 65
    },
    "base_experience": 59,
    "height": 6,
    "weight": 152,
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ]
  },
  {
    "id": 310,
    "name": "manectric",
    "types": [
      "electric"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 60,
      "special_attack": 105,
      "special_defense": 60,
      "speed": 105
    },
    "base_experience": 166,
    "height": 15,
    "weight": 402,
    "abilities": [
      "static",
      "lightning-rod",
      "minus"
    ]
  },
  {
    "id": 311,
    "name": "plusle",
    "types": [
      "electric"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 40,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 95
    },
    "base_experience": 142,
    "height": 4,
    "weight": 42,
    "abilities": [
      "plus",
      "lightning-rod"
    ]
  },
  {
    "id": 312,
    "name": "minun",
    "types": [
      "electric"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 50,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 95
    },
    "base_experience": 142,
    "height": 4,
    "weight": 42,
    "abilities": [
      "minus",
      "volt-absorb"
    ]
  },
  {
    "id": 313,
    "name": "volbeat",
    "types": [
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 73,
      "defense": 75,
      "special_attack": 47,
      "special_defense": 85,
      "speed": 85
    },
    "base_experience": 151,
    "height": 7,
    "weight": 177,
    "abilities": [
      "illuminate",
      "swarm",
      "prankster"
    ]
  },
  {
    "id": 314,
    "name": "illumise",
    "types": [
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 47,
      "defense": 75,
      "special_attack": 73,
      "special_defense": 85,
      "speed": 85
    },
    "base_experience": 151,
    "height": 6,
    "weight": 177,
    "abilities": [
      "oblivious",
      "tinted-lens",
      "prankster"
    ]
  },
  {
    "id": 315,
    "name": "roselia",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 45,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 65
    },
    "base_experience": 140,
    "height": 3,
    "weight": 20,
    "abilities": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ]
  },
  {
    "id": 316,
    "name": "gulpin",
    "types": [
      "poison"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 43,
      "defense": 53,
      "special_attack": 43,
      "special_defense": 53,
      "speed": 40
    },
    "base_experience": 60,
    "height": 4,
    "weight": 103,
    "abilities": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ]
  },
  {
    "id": 317,
    "name": "swalot",
    "types": [
      "poison"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 73,
      "defense": 83,
      "special_attack": 73,
      "special_defense": 83,
      "speed": 55
    },
    "base_experience": 163,
    "height": 17,
    "weight": 800,
    "abilities": [
      "liquid-ooze",
      "sticky-hold",
      "gluttony"
    ]
  },
  {
    "id": 318,
    "name": "carvanha",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 90,
      "defense": 20,
      "special_attack": 65,
      "special_defense": 20,
      "speed": 65
    },
    "base_experience": 61,
    "height": 8,
    "weight": 208,
    "abilities": [
      "rough-skin",
      "speed-boost"
    ]
  },
  {
    "id": 319,
    "name": "sharpedo",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 40,
      "special_attack": 95,
      "special_defense": 40,
      "speed": 95
    },
    "base_experience": 161,
    "height": 18,
    "weight": 888,
    "abilities": [
      "rough-skin",
      "speed-boost"
    ]
  },
  {
    "id": 320,
    "name": "wailmer",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 130,
      "attack": 70,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 35,
      "speed": 60
    },
    "base_experience": 80,
    "height": 20,
    "weight": 1300,
    "abilities": [
      "water-veil",
      "oblivious",
      "pressure"
    ]
  },
  {
    "id": 321,
    "name": "wailord",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 170,
      "attack": 90,
      "defense": 45,
      "special_attack": 90,
      "special_defense": 45,
      "speed": 60
    },
    "base_experience": 175,
    "height": 145,
    "weight": 3980,
    "abilities": [
      "water-veil",
      "oblivious",
      "pressure"
    ]
  },
  {
    "id": 322,
    "name": "numel",
    "types": [
      "fire",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 40,
      "special_attack": 65,
      "special_defense": 45,
      "speed": 35
    },
    "base_experience": 61,
    "height": 7,
    "weight": 240,
    "abilities": [
      "oblivious",
      "simple",
      "own-tempo"
    ]
  },
  {
    "id": 323,
    "name": "camerupt",
    "types": [
      "fire",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special_attack": 105,
      "special_defense": 75,
      "speed": 40
    },
    "base_experience": 161,
    "height": 19,
    "weight": 2200,
    "abilities": [
      "magma-armor",
      "solid-rock",
      "anger-point"
    ]
  },
  {
    "id": 324,
    "name": "torkoal",
    "types": [
      "fire"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 140,
      "special_attack": 85,
      "special_defense": 70,
      "speed": 20
    },
    "base_experience": 165,
    "height": 5,
    "weight": 804,
    "abilities": [
      "white-smoke",
      "drought",
      "shell-armor"
    ]
  },
  {
    "id": 325,
    "name": "spoink",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 25,
      "defense": 35,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 60
    },
    "base_experience": 66,
    "height": 7,
    "weight": 306,
    "abilities": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ]
  },
  {
    "id": 326,
    "name": "grumpig",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 45,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 110,
      "speed": 80
    },
    "base_experience": 165,
    "height": 9,
    "weight": 715,
    "abilities": [
      "thick-fat",
      "own-tempo",
      "gluttony"
    ]
  },
  {
    "id": 327,
    "name": "spinda",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 60
    },
    "base_experience": 126,
    "height": 11,
    "weight": 50,
    "abilities": [
      "own-tempo",
      "tangled-feet",
      "contrary"
    ]
  },
  {
    "id": 328,
    "name": "trapinch",
    "types": [
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 10
    },
    "base_experience": 58,
    "height": 7,
    "weight": 150,
    "abilities": [
      "hyper-cutter",
      "arena-trap",
      "sheer-force"
    ]
  },
  {
    "id": 329,
    "name": "vibrava",
    "types": [
      "ground",
      "dragon"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 70,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 70
    },
    "base_experience": 119,
    "height": 11,
    "weight": 153,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 330,
    "name": "flygon",
    "types": [
      "ground",
      "dragon"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 100
    },
    "base_experience": 234,
    "height": 20,
    "weight": 820,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 331,
    "name": "cacnea",
    "types": [
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 85,
      "defense": 40,
      "special_attack": 85,
      "special_defense": 40,
      "speed": 35
    },
    "base_experience": 67,
    "height": 4,
    "weight": 513,
    "abilities": [
      "sand-veil",
      "water-absorb"
    ]
  },
  {
    "id": 332,
    "name": "cacturne",
    "types": [
      "grass",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 60,
      "special_attack": 115,
      "special_defense": 60,
      "speed": 55
    },
    "base_experience": 166,
    "height": 13,
    "weight": 774,
    "abilities": [
      "sand-veil",
      "water-absorb"
    ]
  },
  {
    "id": 333,
    "name": "swablu",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 75,
      "speed": 50
    },
    "base_experience": 62,
    "height": 4,
    "weight": 12,
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ]
  },
  {
    "id": 334,
    "name": "altaria",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 90,
      "special_attack": 70,
      "special_defense": 105,
      "speed": 80
    },
    "base_experience": 172,
    "height": 11,
    "weight": 206,
    "abilities": [
      "natural-cure",
      "cloud-nine"
    ]
  },
  {
    "id": 335,
    "name": "zangoose",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 73,
      "attack": 115,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 90
    },
    "base_experience": 160,
    "height": 13,
    "weight": 403,
    "abilities": [
      "immunity",
      "toxic-boost"
    ]
  },
  {
    "id": 336,
    "name": "seviper",
    "types": [
      "poison"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 73,
      "attack": 100,
      "defense": 60,
      "special_attack": 100,
      "special_defense": 60,
      "speed": 65
    },
    "base_experience": 160,
    "height": 27,
    "weight": 525,
    "abilities": [
      "shed-skin",
      "infiltrator"
    ]
  },
  {
    "id": 337,
    "name": "lunatone",
    "types": [
      "rock",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 55,
      "defense": 65,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 70
    },
    "base_experience": 161,
    "height": 10,
    "weight": 1680,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 338,
    "name": "solrock",
    "types": [
      "rock",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 95,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 70
    },
    "base_experience": 161,
    "height": 12,
    "weight": 1540,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 339,
    "name": "barboach",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 48,
      "defense": 43,
      "special_attack": 46,
      "special_defense": 41,
      "speed": 60
    },
    "base_experience": 58,
    "height": 4,
    "weight": 19,
    "abilities": [
      "oblivious",
      "anticipation",
      "hydration"
    ]
  },
  {
    "id": 340,
    "name": "whiscash",
    "types": [
      "water",
      "ground"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 78,
      "defense": 73,
      "special_attack": 76,
      "special_defense": 71,
      "speed": 60
    },
    "base_experience": 164,
    "height": 9,
    "weight": 236,
    "abilities": [
      "oblivious",
      "anticipation",
      "hydration"
    ]
  },
  {
    "id": 341,
    "name": "corphish",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 43,
      "attack": 80,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 35,
      "speed": 35
    },
    "base_experience": 62,
    "height": 6,
    "weight": 115,
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ]
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "types": [
      "water",
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 63,
      "attack": 120,
      "defense": 85,
      "special_attack": 90,
      "special_defense": 55,
      "speed": 55
    },
    "base_experience": 164,
    "height": 11,
    "weight": 328,
    "abilities": [
      "hyper-cutter",
      "shell-armor",
      "adaptability"
    ]
  },
  {
    "id": 343,
    "name": "baltoy",
    "types": [
      "ground",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 70,
      "speed": 55
    },
    "base_experience": 60,
    "height": 5,
    "weight": 215,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 344,
    "name": "claydol",
    "types": [
      "ground",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 105,
      "special_attack": 70,
      "special_defense": 120,
      "speed": 75
    },
    "base_experience": 175,
    "height": 15,
    "weight": 1080,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 345,
    "name": "lileep",
    "types": [
      "rock",
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 66,
      "attack": 41,
      "defense": 77,
      "special_attack": 61,
      "special_defense": 87,
      "speed": 23
    },
    "base_experience": 71,
    "height": 10,
    "weight": 238,
    "abilities": [
      "suction-cups",
      "storm-drain"
    ]
  },
  {
    "id": 346,
    "name": "cradily",
    "types": [
      "rock",
      "grass"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 86,
      "attack": 81,
      "defense": 97,
      "special_attack": 81,
      "special_defense": 107,
      "speed": 43
    },
    "base_experience": 173,
    "height": 15,
    "weight": 604,
    "abilities": [
      "suction-cups",
      "storm-drain"
    ]
  },
  {
    "id": 347,
    "name": "anorith",
    "types": [
      "rock",
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 95,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    },
    "base_experience": 71,
    "height": 7,
    "weight": 125,
    "abilities": [
      "battle-armor",
      "swift-swim"
    ]
  },
  {
    "id": 348,
    "name": "armaldo",
    "types": [
      "rock",
      "bug"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 45
    },
    "base_experience": 173,
    "height": 15,
    "weight": 682,
    "abilities": [
      "battle-armor",
      "swift-swim"
    ]
  },
  {
    "id": 349,
    "name": "feebas",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 15,
      "defense": 20,
      "special_attack": 10,
      "special_defense": 55,
      "speed": 80
    },
    "base_experience": 40,
    "height": 6,
    "weight": 74,
    "abilities": [
      "swift-swim",
      "oblivious",
      "adaptability"
    ]
  },
  {
    "id": 350,
    "name": "milotic",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 60,
      "defense": 79,
      "special_attack": 100,
      "special_defense": 125,
      "speed": 81
    },
    "base_experience": 189,
    "height": 62,
    "weight": 1620,
    "abilities": [
      "marvel-scale",
      "competitive",
      "cute-charm"
    ]
  },
  {
    "id": 351,
    "name": "castform",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 147,
    "height": 3,
    "weight": 8,
    "abilities": [
      "forecast"
    ]
  },
  {
    "id": 352,
    "name": "kecleon",
    "types": [
      "normal"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 120,
      "speed": 40
    },
    "base_experience": 154,
    "height": 10,
    "weight": 220,
    "abilities": [
      "color-change",
      "protean"
    ]
  },
  {
    "id": 353,
    "name": "shuppet",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 75,
      "defense": 35,
      "special_attack": 63,
      "special_defense": 33,
      "speed": 45
    },
    "base_experience": 59,
    "height": 6,
    "weight": 23,
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ]
  },
  {
    "id": 354,
    "name": "banette",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 64,
      "attack": 115,
      "defense": 65,
      "special_attack": 83,
      "special_defense": 63,
      "speed": 65
    },
    "base_experience": 159,
    "height": 11,
    "weight": 125,
    "abilities": [
      "insomnia",
      "frisk",
      "cursed-body"
    ]
  },
  {
    "id": 355,
    "name": "duskull",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 40,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 90,
      "speed": 25
    },
    "base_experience": 59,
    "height": 8,
    "weight": 150,
    "abilities": [
      "levitate",
      "frisk"
    ]
  },
  {
    "id": 356,
    "name": "dusclops",
    "types": [
      "ghost"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 130,
      "speed": 25
    },
    "base_experience": 159,
    "height": 16,
    "weight": 306,
    "abilities": [
      "pressure",
      "frisk"
    ]
  },
  {
    "id": 357,
    "name": "tropius",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 99,
      "attack": 68,
      "defense": 83,
      "special_attack": 72,
      "special_defense": 87,
      "speed": 51
    },
    "base_experience": 161,
    "height": 20,
    "weight": 1000,
    "abilities": [
      "chlorophyll",
      "solar-power",
      "harvest"
    ]
  },
  {
    "id": 358,
    "name": "chimecho",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 50,
      "defense": 80,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 65
    },
    "base_experience": 159,
    "height": 6,
    "weight": 10,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 359,
    "name": "absol",
    "types": [
      "dark"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 130,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 60,
      "speed": 75
    },
    "base_experience": 163,
    "height": 12,
    "weight": 470,
    "abilities": [
      "pressure",
      "super-luck",
      "justified"
    ]
  },
  {
    "id": 360,
    "name": "wynaut",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 23,
      "defense": 48,
      "special_attack": 23,
      "special_defense": 48,
      "speed": 23
    },
    "base_experience": 52,
    "height": 6,
    "weight": 140,
    "abilities": [
      "shadow-tag",
      "telepathy"
    ]
  },
  {
    "id": 361,
    "name": "snorunt",
    "types": [
      "ice"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 50,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 50
    },
    "base_experience": 60,
    "height": 7,
    "weight": 168,
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ]
  },
  {
    "id": 362,
    "name": "glalie",
    "types": [
      "ice"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    },
    "base_experience": 168,
    "height": 15,
    "weight": 2565,
    "abilities": [
      "inner-focus",
      "ice-body",
      "moody"
    ]
  },
  {
    "id": 363,
    "name": "spheal",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 40,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 50,
      "speed": 25
    },
    "base_experience": 58,
    "height": 8,
    "weight": 395,
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ]
  },
  {
    "id": 364,
    "name": "sealeo",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 70,
      "speed": 45
    },
    "base_experience": 144,
    "height": 11,
    "weight": 876,
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ]
  },
  {
    "id": 365,
    "name": "walrein",
    "types": [
      "ice",
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 90,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 65
    },
    "base_experience": 239,
    "height": 14,
    "weight": 1506,
    "abilities": [
      "thick-fat",
      "ice-body",
      "oblivious"
    ]
  },
  {
    "id": 366,
    "name": "clamperl",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 64,
      "defense": 85,
      "special_attack": 74,
      "special_defense": 55,
      "speed": 32
    },
    "base_experience": 69,
    "height": 4,
    "weight": 525,
    "abilities": [
      "shell-armor",
      "rattled"
    ]
  },
  {
    "id": 367,
    "name": "huntail",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 104,
      "defense": 105,
      "special_attack": 94,
      "special_defense": 75,
      "speed": 52
    },
    "base_experience": 170,
    "height": 17,
    "weight": 270,
    "abilities": [
      "swift-swim",
      "water-veil"
    ]
  },
  {
    "id": 368,
    "name": "gorebyss",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 84,
      "defense": 105,
      "special_attack": 114,
      "special_defense": 75,
      "speed": 52
    },
    "base_experience": 170,
    "height": 18,
    "weight": 226,
    "abilities": [
      "swift-swim",
      "hydration"
    ]
  },
  {
    "id": 369,
    "name": "relicanth",
    "types": [
      "water",
      "rock"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 90,
      "defense": 130,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 55
    },
    "base_experience": 170,
    "height": 10,
    "weight": 234,
    "abilities": [
      "swift-swim",
      "rock-head",
      "sturdy"
    ]
  },
  {
    "id": 370,
    "name": "luvdisc",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 43,
      "attack": 30,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 97
    },
    "base_experience": 116,
    "height": 6,
    "weight": 87,
    "abilities": [
      "swift-swim",
      "hydration"
    ]
  },
  {
    "id": 371,
    "name": "bagon",
    "types": [
      "dragon"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 75,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 50
    },
    "base_experience": 60,
    "height": 6,
    "weight": 421,
    "abilities": [
      "rock-head",
      "sheer-force"
    ]
  },
  {
    "id": 372,
    "name": "shelgon",
    "types": [
      "dragon"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 95,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 50
    },
    "base_experience": 147,
    "height": 11,
    "weight": 1105,
    "abilities": [
      "rock-head",
      "overcoat"
    ]
  },
  {
    "id": 373,
    "name": "salamence",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 135,
      "defense": 80,
      "special_attack": 110,
      "special_defense": 80,
      "speed": 100
    },
    "base_experience": 270,
    "height": 15,
    "weight": 1026,
    "abilities": [
      "intimidate",
      "moxie"
    ]
  },
  {
    "id": 374,
    "name": "beldum",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 80,
      "special_attack": 35,
      "special_defense": 60,
      "speed": 30
    },
    "base_experience": 60,
    "height": 6,
    "weight": 952,
    "abilities": [
      "clear-body",
      "light-metal"
    ]
  },
  {
    "id": 375,
    "name": "metang",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 75,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 50
    },
    "base_experience": 147,
    "height": 12,
    "weight": 2025,
    "abilities": [
      "clear-body",
      "light-metal"
    ]
  },
  {
    "id": 376,
    "name": "metagross",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 135,
      "defense": 130,
      "special_attack": 95,
      "special_defense": 90,
      "speed": 70
    },
    "base_experience": 270,
    "height": 16,
    "weight": 5500,
    "abilities": [
      "clear-body",
      "light-metal"
    ]
  },
  {
    "id": 377,
    "name": "regirock",
    "types": [
      "rock"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 200,
      "special_attack": 50,
      "special_defense": 100,
      "speed": 50
    },
    "base_experience": 261,
    "height": 17,
    "weight": 2300,
    "abilities": [
      "clear-body",
      "sturdy"
    ]
  },
  {
    "id": 378,
    "name": "regice",
    "types": [
      "ice"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 200,
      "speed": 50
    },
    "base_experience": 261,
    "height": 18,
    "weight": 1750,
    "abilities": [
      "clear-body",
      "ice-body"
    ]
  },
  {
    "id": 379,
    "name": "registeel",
    "types": [
      "steel"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 75,
      "defense": 150,
      "special_attack": 75,
      "special_defense": 150,
      "speed": 50
    },
    "base_experience": 261,
    "height": 19,
    "weight": 2050,
    "abilities": [
      "clear-body",
      "light-metal"
    ]
  },
  {
    "id": 380,
    "name": "latias",
    "types": [
      "dragon",
      "psychic"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 90,
      "special_attack": 110,
      "special_defense": 130,
      "speed": 110
    },
    "base_experience": 270,
    "height": 14,
    "weight": 400,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 381,
    "name": "latios",
    "types": [
      "dragon",
      "psychic"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 90,
      "defense": 80,
      "special_attack": 130,
      "special_defense": 110,
      "speed": 110
    },
    "base_experience": 270,
    "height": 20,
    "weight": 600,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 382,
    "name": "kyogre",
    "types": [
      "water"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 90,
      "special_attack": 150,
      "special_defense": 140,
      "speed": 90
    },
    "base_experience": 302,
    "height": 45,
    "weight": 3520,
    "abilities": [
      "drizzle"
    ]
  },
  {
    "id": 383,
    "name": "groudon",
    "types": [
      "ground"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 140,
      "special_attack": 100,
      "special_defense": 90,
      "speed": 90
    },
    "base_experience": 302,
    "height": 35,
    "weight": 9500,
    "abilities": [
      "drought"
    ]
  },
  {
    "id": 384,
    "name": "rayquaza",
    "types": [
      "dragon",
      "flying"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 105,
      "attack": 150,
      "defense": 90,
      "special_attack": 150,
      "special_defense": 90,
      "speed": 95
    },
    "base_experience": 306,
    "height": 70,
    "weight": 2065,
    "abilities": [
      "air-lock"
    ]
  },
  {
    "id": 385,
    "name": "jirachi",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 3,
    "weight": 11,
    "abilities": [
      "serene-grace"
    ]
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "types": [
      "psychic"
    ],
    "generation": 3,
    "legendary": true,
    "stats": {
      "hp": 50,
      "attack": 150,
      "defense": 50,
      "special_attack": 150,
      "special_defense": 50,
      "speed": 150
    },
    "base_experience": 270,
    "height": 17,
    "weight": 608,
    "abilities": [
      "pressure"
    ]
  },
  {
    "id": 387,
    "name": "turtwig",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 68,
      "defense": 64,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 31
    },
    "base_experience": 64,
    "height": 4,
    "weight": 102,
    "abilities": [
      "overgrow",
      "shell-armor"
    ]
  },
  {
    "id": 388,
    "name": "grotle",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 89,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 36
    },
    "base_experience": 142,
    "height": 11,
    "weight": 970,
    "abilities": [
      "overgrow",
      "shell-armor"
    ]
  },
  {
    "id": 389,
    "name": "torterra",
    "types": [
      "grass",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 109,
      "defense": 105,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 56
    },
    "base_experience": 236,
    "height": 22,
    "weight": 3100,
    "abilities": [
      "overgrow",
      "shell-armor"
    ]
  },
  {
    "id": 390,
    "name": "chimchar",
    "types": [
      "fire"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 58,
      "defense": 44,
      "special_attack": 58,
      "special_defense": 44,
      "speed": 61
    },
    "base_experience": 62,
    "height": 5,
    "weight": 62,
    "abilities": [
      "blaze",
      "iron-fist"
    ]
  },
  {
    "id": 391,
    "name": "monferno",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 64,
      "attack": 78,
      "defense": 52,
      "special_attack": 78,
      "special_defense": 52,
      "speed": 81
    },
    "base_experience": 142,
    "height": 9,
    "weight": 220,
    "abilities": [
      "blaze",
      "iron-fist"
    ]
  },
  {
    "id": 392,
    "name": "infernape",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 76,
      "attack": 104,
      "defense": 71,
      "special_attack": 104,
      "special_defense": 71,
      "speed": 108
    },
    "base_experience": 240,
    "height": 12,
    "weight": 550,
    "abilities": [
      "blaze",
      "iron-fist"
    ]
  },
  {
    "id": 393,
    "name": "piplup",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 53,
      "attack": 51,
      "defense": 53,
      "special_attack": 61,
      "special_defense": 56,
      "speed": 40
    },
    "base_experience": 63,
    "height": 4,
    "weight": 52,
    "abilities": [
      "torrent",
      "competitive"
    ]
  },
  {
    "id": 394,
    "name": "prinplup",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 64,
      "attack": 66,
      "defense": 68,
      "special_attack": 81,
      "special_defense": 76,
      "speed": 50
    },
    "base_experience": 142,
    "height": 8,
    "weight": 230,
    "abilities": [
      "torrent",
      "competitive"
    ]
  },
  {
    "id": 395,
    "name": "empoleon",
    "types": [
      "water",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 84,
      "attack": 86,
      "defense": 88,
      "special_attack": 111,
      "special_defense": 101,
      "speed": 60
    },
    "base_experience": 239,
    "height": 17,
    "weight": 845,
    "abilities": [
      "torrent",
      "competitive"
    ]
  },
  {
    "id": 396,
    "name": "starly",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 60
    },
    "base_experience": 49,
    "height": 3,
    "weight": 20,
    "abilities": [
      "keen-eye",
      "reckless"
    ]
  },
  {
    "id": 397,
    "name": "staravia",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 80
    },
    "base_experience": 119,
    "height": 6,
    "weight": 155,
    "abilities": [
      "intimidate",
      "reckless"
    ]
  },
  {
    "id": 398,
    "name": "staraptor",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 120,
      "defense": 70,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 100
    },
    "base_experience": 218,
    "height": 12,
    "weight": 249,
    "abilities": [
      "intimidate",
      "reckless"
    ]
  },
  {
    "id": 399,
    "name": "bidoof",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 40,
      "speed": 31
    },
    "base_experience": 50,
    "height": 5,
    "weight": 200,
    "abilities": [
      "simple",
      "unaware",
      "moody"
    ]
  },
  {
    "id": 400,
    "name": "bibarel",
    "types": [
      "normal",
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 79,
      "attack": 85,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 71
    },
    "base_experience": 144,
    "height": 10,
    "weight": 315,
    "abilities": [
      "simple",
      "unaware",
      "moody"
    ]
  },
  {
    "id": 401,
    "name": "kricketot",
    "types": [
      "bug"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 37,
      "attack": 25,
      "defense": 41,
      "special_attack": 25,
      "special_defense": 41,
      "speed": 25
    },
    "base_experience": 39,
    "height": 3,
    "weight": 22,
    "abilities": [
      "shed-skin",
      "run-away"
    ]
  },
  {
    "id": 402,
    "name": "kricketune",
    "types": [
      "bug"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 77,
      "attack": 85,
      "defense": 51,
      "special_attack": 55,
      "special_defense": 51,
      "speed": 65
    },
    "base_experience": 134,
    "height": 10,
    "weight": 255,
    "abilities": [
      "swarm",
      "technician"
    ]
  },
  {
    "id": 403,
    "name": "shinx",
    "types": [
      "electric"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 34,
      "special_attack": 40,
      "special_defense": 34,
      "speed": 45
    },
    "base_experience": 53,
    "height": 5,
    "weight": 95,
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ]
  },
  {
    "id": 404,
    "name": "luxio",
    "types": [
      "electric"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 49,
      "special_attack": 60,
      "special_defense": 49,
      "speed": 60
    },
    "base_experience": 127,
    "height": 9,
    "weight": 305,
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ]
  },
  {
    "id": 405,
    "name": "luxray",
    "types": [
      "electric"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 79,
      "special_attack": 95,
      "special_defense": 79,
      "speed": 70
    },
    "base_experience": 235,
    "height": 14,
    "weight": 420,
    "abilities": [
      "rivalry",
      "intimidate",
      "guts"
    ]
  },
  {
    "id": 406,
    "name": "budew",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 70,
      "speed": 55
    },
    "base_experience": 56,
    "height": 2,
    "weight": 12,
    "abilities": [
      "natural-cure",
      "poison-point",
      "leaf-guard"
    ]
  },
  {
    "id": 407,
    "name": "roserade",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 70,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 105,
      "speed": 90
    },
    "base_experience": 232,
    "height": 9,
    "weight": 145,
    "abilities": [
      "natural-cure",
      "poison-point",
      "technician"
    ]
  },
  {
    "id": 408,
    "name": "cranidos",
    "types": [
      "rock"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 125,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 58
    },
    "base_experience": 70,
    "height": 9,
    "weight": 315,
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ]
  },
  {
    "id": 409,
    "name": "rampardos",
    "types": [
      "rock"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 97,
      "attack": 165,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 58
    },
    "base_experience": 173,
    "height": 16,
    "weight": 1025,
    "abilities": [
      "mold-breaker",
      "sheer-force"
    ]
  },
  {
    "id": 410,
    "name": "shieldon",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 42,
      "defense": 118,
      "special_attack": 42,
      "special_defense": 88,
      "speed": 30
    },
    "base_experience": 70,
    "height": 5,
    "weight": 570,
    "abilities": [
      "sturdy",
      "soundproof"
    ]
  },
  {
    "id": 411,
    "name": "bastiodon",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 52,
      "defense": 168,
      "special_attack": 47,
      "special_defense": 138,
      "speed": 30
    },
    "base_experience": 173,
    "height": 13,
    "weight": 1495,
    "abilities": [
      "sturdy",
      "soundproof"
    ]
  },
  {
    "id": 412,
    "name": "burmy",
    "types": [
      "bug"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 29,
      "defense": 45,
      "special_attack": 29,
      "special_defense": 45,
      "speed": 36
    },
    "base_experience": 45,
    "height": 2,
    "weight": 34,
    "abilities": [
      "shed-skin",
      "overcoat"
    ]
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 59,
      "defense": 85,
      "special_attack": 79,
      "special_defense": 105,
      "speed": 36
    },
    "base_experience": 148,
    "height": 5,
    "weight": 65,
    "abilities": [
      "anticipation",
      "overcoat"
    ]
  },
  {
    "id": 414,
    "name": "mothim",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 94,
      "defense": 50,
      "special_attack": 94,
      "special_defense": 50,
      "speed": 66
    },
    "base_experience": 148,
    "height": 9,
    "weight": 233,
    "abilities": [
      "swarm",
      "tinted-lens"
    ]
  },
  {
    "id": 415,
    "name": "combee",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 30,
      "defense": 42,
      "special_attack": 30,
      "special_defense": 42,
      "speed": 70
    },
    "base_experience": 49,
    "height": 3,
    "weight": 55,
    "abilities": [
      "honey-gather",
      "hustle"
    ]
  },
  {
    "id": 416,
    "name": "vespiquen",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 102,
      "special_attack": 80,
      "special_defense": 102,
      "speed": 40
    },
    "base_experience": 166,
    "height": 12,
    "weight": 385,
    "abilities": [
      "pressure",
      "unnerve"
    ]
  },
  {
    "id": 417,
    "name": "pachirisu",
    "types": [
      "electric"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 95
    },
    "base_experience": 142,
    "height": 4,
    "weight": 39,
    "abilities": [
      "run-away",
      "pickup",
      "volt-absorb"
    ]
  },
  {
    "id": 418,
    "name": "buizel",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 65,
      "defense": 35,
      "special_attack": 60,
      "special_defense": 30,
      "speed": 85
    },
    "base_experience": 66,
    "height": 7,
    "weight": 295,
    "abilities": [
      "swift-swim",
      "water-veil"
    ]
  },
  {
    "id": 419,
    "name": "floatzel",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 50,
      "speed": 115
    },
    "base_experience": 173,
    "height": 11,
    "weight": 335,
    "abilities": [
      "swift-swim",
      "water-veil"
    ]
  },
  {
    "id": 420,
    "name": "cherubi",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 45,
      "special_attack": 62,
      "special_defense": 53,
      "speed": 35
    },
    "base_experience": 55,
    "height": 4,
    "weight": 33,
    "abilities": [
      "chlorophyll"
    ]
  },
  {
    "id": 421,
    "name": "cherrim",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 70,
      "special_attack": 87,
      "special_defense": 78,
      "speed": 85
    },
    "base_experience": 158,
    "height": 5,
    "weight": 93,
    "abilities": [
      "flower-gift"
    ]
  },
  {
    "id": 422,
    "name": "shellos",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 76,
      "attack": 48,
      "defense": 48,
      "special_attack": 57,
      "special_defense": 62,
      "speed": 34
    },
    "base_experience": 65,
    "height": 3,
    "weight": 63,
    "abilities": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ]
  },
  {
    "id": 423,
    "name": "gastrodon",
    "types": [
      "water",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 111,
      "attack": 83,
      "defense": 68,
      "special_attack": 92,
      "special_defense": 82,
      "speed": 39
    },
    "base_experience": 166,
    "height": 9,
    "weight": 299,
    "abilities": [
      "sticky-hold",
      "storm-drain",
      "sand-force"
    ]
  },
  {
    "id": 424,
    "name": "ambipom",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 66,
      "special_attack": 60,
      "special_defense": 66,
      "speed": 115
    },
    "base_experience": 169,
    "height": 12,
    "weight": 203,
    "abilities": [
      "technician",
      "pickup",
      "skill-link"
    ]
  },
  {
    "id": 425,
    "name": "drifloon",
    "types": [
      "ghost",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 50,
      "defense": 34,
      "special_attack": 60,
      "special_defense": 44,
      "speed": 70
    },
    "base_experience": 70,
    "height": 4,
    "weight": 12,
    "abilities": [
      "aftermath",
      "unburden",
      "flare-boost"
    ]
  },
  {
    "id": 426,
    "name": "drifblim",
    "types": [
      "ghost",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 150,
      "attack": 80,
      "defense": 44,
      "special_attack": 90,
      "special_defense": 54,
      "speed": 80
    },
    "base_experience": 174,
    "height": 12,
    "weight": 150,
    "abilities": [
      "aftermath",
      "unburden",
      "flare-boost"
    ]
  },
  {
    "id": 427,
    "name": "buneary",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 66,
      "defense": 44,
      "special_attack": 44,
      "special_defense": 56,
      "speed": 85
    },
    "base_experience": 70,
    "height": 4,
    "weight": 55,
    "abilities": [
      "run-away",
      "klutz",
      "limber"
    ]
  },
  {
    "id": 428,
    "name": "lopunny",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 76,
      "defense": 84,
      "special_attack": 54,
      "special_defense": 96,
      "speed": 105
    },
    "base_experience": 168,
    "height": 12,
    "weight": 333,
    "abilities": [
      "cute-charm",
      "klutz",
      "limber"
    ]
  },
  {
    "id": 429,
    "name": "mismagius",
    "types": [
      "ghost"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 60,
      "special_attack": 105,
      "special_defense": 105,
      "speed": 105
    },
    "base_experience": 173,
    "height": 9,
    "weight": 44,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 430,
    "name": "honchkrow",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 52,
      "special_attack": 105,
      "special_defense": 52,
      "speed": 71
    },
    "base_experience": 177,
    "height": 9,
    "weight": 273,
    "abilities": [
      "insomnia",
      "super-luck",
      "moxie"
    ]
  },
  {
    "id": 431,
    "name": "glameow",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 49,
      "attack": 55,
      "defense": 42,
      "special_attack": 42,
      "special_defense": 37,
      "speed": 85
    },
    "base_experience": 62,
    "height": 5,
    "weight": 39,
    "abilities": [
      "limber",
      "own-tempo",
      "keen-eye"
    ]
  },
  {
    "id": 432,
    "name": "purugly",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 71,
      "attack": 82,
      "defense": 64,
      "special_attack": 64,
      "special_defense": 59,
      "speed": 112
    },
    "base_experience": 158,
    "height": 10,
    "weight": 438,
    "abilities": [
      "thick-fat",
      "own-tempo",
      "defiant"
    ]
  },
  {
    "id": 433,
    "name": "chingling",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 50,
      "speed": 45
    },
    "base_experience": 57,
    "height": 2,
    "weight": 6,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 434,
    "name": "stunky",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 63,
      "attack": 63,
      "defense": 47,
      "special_attack": 41,
      "special_defense": 41,
      "speed": 74
    },
    "base_experience": 66,
    "height": 4,
    "weight": 192,
    "abilities": [
      "stench",
      "aftermath",
      "keen-eye"
    ]
  },
  {
    "id": 435,
    "name": "skuntank",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 103,
      "attack": 93,
      "defense": 67,
      "special_attack": 71,
      "special_defense": 61,
      "speed": 84
    },
    "base_experience": 168,
    "height": 10,
    "weight": 380,
    "abilities": [
      "stench",
      "aftermath",
      "keen-eye"
    ]
  },
  {
    "id": 436,
    "name": "bronzor",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 57,
      "attack": 24,
      "defense": 86,
      "special_attack": 24,
      "special_defense": 86,
      "speed": 23
    },
    "base_experience": 60,
    "height": 5,
    "weight": 605,
    "abilities": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ]
  },
  {
    "id": 437,
    "name": "bronzong",
    "types": [
      "steel",
      "psychic"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 89,
      "defense": 116,
      "special_attack": 79,
      "special_defense": 116,
      "speed": 33
    },
    "base_experience": 175,
    "height": 13,
    "weight": 1870,
    "abilities": [
      "levitate",
      "heatproof",
      "heavy-metal"
    ]
  },
  {
    "id": 438,
    "name": "bonsly",
    "types": [
      "rock"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 80,
      "defense": 95,
      "special_attack": 10,
      "special_defense": 45,
      "speed": 10
    },
    "base_experience": 58,
    "height": 5,
    "weight": 150,
    "abilities": [
      "sturdy",
      "rock-head",
      "rattled"
    ]
  },
  {
    "id": 439,
    "name": "mime-jr",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 20,
      "attack": 25,
      "defense": 45,
      "special_attack": 70,
      "special_defense": 90,
      "speed": 60
    },
    "base_experience": 62,
    "height": 6,
    "weight": 130,
    "abilities": [
      "soundproof",
      "filter",
      "technician"
    ]
  },
  {
    "id": 440,
    "name": "happiny",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 5,
      "defense": 5,
      "special_attack": 15,
      "special_defense": 65,
      "speed": 30
    },
    "base_experience": 110,
    "height": 6,
    "weight": 244,
    "abilities": [
      "natural-cure",
      "serene-grace",
      "friend-guard"
    ]
  },
  {
    "id": 441,
    "name": "chatot",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 76,
      "attack": 65,
      "defense": 45,
      "special_attack": 92,
      "special_defense": 42,
      "speed": 91
    },
    "base_experience": 144,
    "height": 5,
    "weight": 19,
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ]
  },
  {
    "id": 442,
    "name": "spiritomb",
    "types": [
      "ghost",
      "dark"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 92,
      "defense": 108,
      "special_attack": 92,
      "special_defense": 108,
      "speed": 35
    },
    "base_experience": 170,
    "height": 10,
    "weight": 1080,
    "abilities": [
      "pressure",
      "infiltrator"
    ]
  },
  {
    "id": 443,
    "name": "gible",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 70,
      "defense": 45,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 42
    },
    "base_experience": 60,
    "height": 7,
    "weight": 205,
    "abilities": [
      "sand-veil",
      "rough-skin"
    ]
  },
  {
    "id": 444,
    "name": "gabite",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 90,
      "defense": 65,
      "special_attack": 50,
      "special_defense": 55,
      "speed": 82
    },
    "base_experience": 144,
    "height": 14,
    "weight": 560,
    "abilities": [
      "sand-veil",
      "rough-skin"
    ]
  },
  {
    "id": 445,
    "name": "garchomp",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 108,
      "attack": 130,
      "defense": 95,
      "special_attack": 80,
      "special_defense": 85,
      "speed": 102
    },
    "base_experience": 270,
    "height": 19,
    "weight": 950,
    "abilities": [
      "sand-veil",
      "rough-skin"
    ]
  },
  {
    "id": 446,
    "name": "munchlax",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 135,
      "attack": 85,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 85,
      "speed": 5
    },
    "base_experience": 78,
    "height": 6,
    "weight": 1050,
    "abilities": [
      "pickup",
      "thick-fat",
      "gluttony"
    ]
  },
  {
    "id": 447,
    "name": "riolu",
    "types": [
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 70,
      "defense": 40,
      "special_attack": 35,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 57,
    "height": 7,
    "weight": 202,
    "abilities": [
      "steadfast",
      "inner-focus",
      "prankster"
    ]
  },
  {
    "id": 448,
    "name": "lucario",
    "types": [
      "fighting",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 70,
      "special_attack": 115,
      "special_defense": 70,
      "speed": 90
    },
    "base_experience": 184,
    "height": 12,
    "weight": 540,
    "abilities": [
      "steadfast",
      "inner-focus",
      "justified"
    ]
  },
  {
    "id": 449,
    "name": "hippopotas",
    "types": [
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 72,
      "defense": 78,
      "special_attack": 38,
      "special_defense": 42,
      "speed": 32
    },
    "base_experience": 66,
    "height": 8,
    "weight": 495,
    "abilities": [
      "sand-stream",
      "sand-force"
    ]
  },
  {
    "id": 450,
    "name": "hippowdon",
    "types": [
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 108,
      "attack": 112,
      "defense": 118,
      "special_attack": 68,
      "special_defense": 72,
      "speed": 47
    },
    "base_experience": 184,
    "height": 20,
    "weight": 3000,
    "abilities": [
      "sand-stream",
      "sand-force"
    ]
  },
  {
    "id": 451,
    "name": "skorupi",
    "types": [
      "poison",
      "bug"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 50,
      "defense": 90,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 65
    },
    "base_experience": 66,
    "height": 8,
    "weight": 120,
    "abilities": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ]
  },
  {
    "id": 452,
    "name": "drapion",
    "types": [
      "poison",
      "dark"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 110,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 95
    },
    "base_experience": 175,
    "height": 13,
    "weight": 615,
    "abilities": [
      "battle-armor",
      "sniper",
      "keen-eye"
    ]
  },
  {
    "id": 453,
    "name": "croagunk",
    "types": [
      "poison",
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 61,
      "defense": 40,
      "special_attack": 61,
      "special_defense": 40,
      "speed": 50
    },
    "base_experience": 60,
    "height": 7,
    "weight": 230,
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ]
  },
  {
    "id": 454,
    "name": "toxicroak",
    "types": [
      "poison",
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 83,
      "attack": 106,
      "defense": 65,
      "special_attack": 86,
      "special_defense": 65,
      "speed": 85
    },
    "base_experience": 172,
    "height": 13,
    "weight": 444,
    "abilities": [
      "anticipation",
      "dry-skin",
      "poison-touch"
    ]
  },
  {
    "id": 455,
    "name": "carnivine",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 74,
      "attack": 100,
      "defense": 72,
      "special_attack": 90,
      "special_defense": 72,
      "speed": 46
    },
    "base_experience": 159,
    "height": 14,
    "weight": 270,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 456,
    "name": "finneon",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 49,
      "attack": 49,
      "defense": 56,
      "special_attack": 49,
      "special_defense": 61,
      "speed": 66
    },
    "base_experience": 66,
    "height": 4,
    "weight": 70,
    "abilities": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ]
  },
  {
    "id": 457,
    "name": "lumineon",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 69,
      "attack": 69,
      "defense": 76,
      "special_attack": 69,
      "special_defense": 86,
      "speed": 91
    },
    "base_experience": 161,
    "height": 12,
    "weight": 240,
    "abilities": [
      "swift-swim",
      "storm-drain",
      "water-veil"
    ]
  },
  {
    "id": 458,
    "name": "mantyke",
    "types": [
      "water",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 120,
      "speed": 50
    },
    "base_experience": 69,
    "height": 10,
    "weight": 650,
    "abilities": [
      "swift-swim",
      "water-absorb",
      "water-veil"
    ]
  },
  {
    "id": 459,
    "name": "snover",
    "types": [
      "grass",
      "ice"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 62,
      "defense": 50,
      "special_attack": 62,
      "special_defense": 60,
      "speed": 40
    },
    "base_experience": 67,
    "height": 10,
    "weight": 505,
    "abilities": [
      "snow-warning",
      "soundproof"
    ]
  },
  {
    "id": 460,
    "name": "abomasnow",
    "types": [
      "grass",
      "ice"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 92,
      "defense": 75,
      "special_attack": 92,
      "special_defense": 85,
      "speed": 60
    },
    "base_experience": 173,
    "height": 22,
    "weight": 1355,
    "abilities": [
      "snow-warning",
      "soundproof"
    ]
  },
  {
    "id": 461,
    "name": "weavile",
    "types": [
      "dark",
      "ice"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 120,
      "defense": 65,
      "special_attack": 45,
      "special_defense": 85,
      "speed": 125
    },
    "base_experience": 179,
    "height": 11,
    "weight": 340,
    "abilities": [
      "pressure",
      "pickpocket"
    ]
  },
  {
    "id": 462,
    "name": "magnezone",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 70,
      "defense": 115,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 60
    },
    "base_experience": 241,
    "height": 12,
    "weight": 1800,
    "abilities": [
      "magnet-pull",
      "sturdy",
      "analytic"
    ]
  },
  {
    "id": 463,
    "name": "lickilicky",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 95,
      "special_attack": 80,
      "special_defense": 95,
      "speed": 50
    },
    "base_experience": 180,
    "height": 17,
    "weight": 1400,
    "abilities": [
      "own-tempo",
      "oblivious",
      "cloud-nine"
    ]
  },
  {
    "id": 464,
    "name": "rhyperior",
    "types": [
      "ground",
      "rock"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 115,
      "attack": 140,
      "defense": 130,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 40
    },
    "base_experience": 241,
    "height": 24,
    "weight": 2828,
    "abilities": [
      "lightning-rod",
      "solid-rock",
      "reckless"
    ]
  },
  {
    "id": 465,
    "name": "tangrowth",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 125,
      "special_attack": 110,
      "special_defense": 50,
      "speed": 50
    },
    "base_experience": 187,
    "height": 20,
    "weight": 1286,
    "abilities": [
      "chlorophyll",
      "leaf-guard",
      "regenerator"
    ]
  },
  {
    "id": 466,
    "name": "electivire",
    "types": [
      "electric"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 123,
      "defense": 67,
      "special_attack": 95,
      "special_defense": 85,
      "speed": 95
    },
    "base_experience": 243,
    "height": 18,
    "weight": 1386,
    "abilities": [
      "motor-drive",
      "vital-spirit"
    ]
  },
  {
    "id": 467,
    "name": "magmortar",
    "types": [
      "fire"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 67,
      "special_attack": 125,
      "special_defense": 95,
      "speed": 83
    },
    "base_experience": 243,
    "height": 16,
    "weight": 680,
    "abilities": [
      "flame-body",
      "vital-spirit"
    ]
  },
  {
    "id": 468,
    "name": "togekiss",
    "types": [
      "fairy",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 50,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 115,
      "speed": 80
    },
    "base_experience": 245,
    "height": 15,
    "weight": 380,
    "abilities": [
      "hustle",
      "serene-grace",
      "super-luck"
    ]
  },
  {
    "id": 469,
    "name": "yanmega",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 86,
      "attack": 76,
      "defense": 86,
      "special_attack": 116,
      "special_defense": 56,
      "speed": 95
    },
    "base_experience": 180,
    "height": 19,
    "weight": 515,
    "abilities": [
      "speed-boost",
      "tinted-lens",
      "frisk"
    ]
  },
  {
    "id": 470,
    "name": "leafeon",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 110,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 65,
      "speed": 95
    },
    "base_experience": 184,
    "height": 10,
    "weight": 255,
    "abilities": [
      "leaf-guard",
      "chlorophyll"
    ]
  },
  {
    "id": 471,
    "name": "glaceon",
    "types": [
      "ice"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 110,
      "special_attack": 130,
      "special_defense": 95,
      "speed": 65
    },
    "base_experience": 184,
    "height": 8,
    "weight": 259,
    "abilities": [
      "snow-cloak",
      "ice-body"
    ]
  },
  {
    "id": 472,
    "name": "gliscor",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 125,
      "special_attack": 45,
      "special_defense": 75,
      "speed": 95
    },
    "base_experience": 179,
    "height": 20,
    "weight": 425,
    "abilities": [
      "hyper-cutter",
      "sand-veil",
      "poison-heal"
    ]
  },
  {
    "id": 473,
    "name": "mamoswine",
    "types": [
      "ice",
      "ground"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 130,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 60,
      "speed": 80
    },
    "base_experience": 239,
    "height": 25,
    "weight": 2910,
    "abilities": [
      "oblivious",
      "snow-cloak",
      "thick-fat"
    ]
  },
  {
    "id": 474,
    "name": "porygon-z",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 80,
      "defense": 70,
      "special_attack": 135,
      "special_defense": 75,
      "speed": 90
    },
    "base_experience": 241,
    "height": 9,
    "weight": 340,
    "abilities": [
      "adaptability",
      "download",
      "analytic"
    ]
  },
  {
    "id": 475,
    "name": "gallade",
    "types": [
      "psychic",
      "fighting"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 125,
      "defense": 65,
      "special_attack": 65,
      "special_defense": 115,
      "speed": 80
    },
    "base_experience": 233,
    "height": 16,
    "weight": 520,
    "abilities": [
      "steadfast",
      "sharpness",
      "justified"
    ]
  },
  {
    "id": 476,
    "name": "probopass",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 145,
      "special_attack": 75,
      "special_defense": 150,
      "speed": 40
    },
    "base_experience": 184,
    "height": 14,
    "weight": 3400,
    "abilities": [
      "sturdy",
      "magnet-pull",
      "sand-force"
    ]
  },
  {
    "id": 477,
    "name": "dusknoir",
    "types": [
      "ghost"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 100,
      "defense": 135,
      "special_attack": 65,
      "special_defense": 135,
      "speed": 45
    },
    "base_experience": 236,
    "height": 22,
    "weight": 1066,
    "abilities": [
      "pressure",
      "frisk"
    ]
  },
  {
    "id": 478,
    "name": "froslass",
    "types": [
      "ice",
      "ghost"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 80,
      "defense": 70,
      "special_attack": 80,
      "special_defense": 70,
      "speed": 110
    },
    "base_experience": 168,
    "height": 13,
    "weight": 266,
    "abilities": [
      "snow-cloak",
      "cursed-body"
    ]
  },
  {
    "id": 479,
    "name": "rotom",
    "types": [
      "electric",
      "ghost"
    ],
    "generation": 4,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 77,
      "special_attack": 95,
      "special_defense": 77,
      "speed": 91
    },
    "base_experience": 154,
    "height": 3,
    "weight": 3,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 480,
    "name": "uxie",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 130,
      "special_attack": 75,
      "special_defense": 130,
      "speed": 95
    },
    "base_experience": 261,
    "height": 3,
    "weight": 3,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 481,
    "name": "mesprit",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 105,
      "defense": 105,
      "special_attack": 105,
      "special_defense": 105,
      "speed": 80
    },
    "base_experience": 261,
    "height": 3,
    "weight": 3,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 482,
    "name": "azelf",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 70,
      "speed": 115
    },
    "base_experience": 261,
    "height": 3,
    "weight": 3,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 483,
    "name": "dialga",
    "types": [
      "steel",
      "dragon"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 120,
      "special_attack": 150,
      "special_defense": 100,
      "speed": 90
    },
    "base_experience": 306,
    "height": 54,
    "weight": 6830,
    "abilities": [
      "pressure",
      "telepathy"
    ]
  },
  {
    "id": 484,
    "name": "palkia",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 120,
      "defense": 100,
      "special_attack": 150,
      "special_defense": 120,
      "speed": 100
    },
    "base_experience": 306,
    "height": 42,
    "weight": 3360,
    "abilities": [
      "pressure",
      "telepathy"
    ]
  },
  {
    "id": 485,
    "name": "heatran",
    "types": [
      "fire",
      "steel"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 106,
      "special_attack": 130,
      "special_defense": 106,
      "speed": 77
    },
    "base_experience": 270,
    "height": 17,
    "weight": 4300,
    "abilities": [
      "flash-fire",
      "flame-body"
    ]
  },
  {
    "id": 486,
    "name": "regigigas",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 110,
      "attack": 160,
      "defense": 110,
      "special_attack": 80,
      "special_defense": 110,
      "speed": 100
    },
    "base_experience": 302,
    "height": 37,
    "weight": 4200,
    "abilities": [
      "slow-start"
    ]
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "types": [
      "ghost",
      "dragon"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 150,
      "attack": 100,
      "defense": 120,
      "special_attack": 100,
      "special_defense": 120,
      "speed": 90
    },
    "base_experience": 306,
    "height": 45,
    "weight": 7500,
    "abilities": [
      "pressure",
      "telepathy"
    ]
  },
  {
    "id": 488,
    "name": "cresselia",
    "types": [
      "psychic"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 120,
      "attack": 70,
      "defense": 110,
      "special_attack": 75,
      "special_defense": 120,
      "speed": 85
    },
    "base_experience": 270,
    "height": 15,
    "weight": 856,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 489,
    "name": "phione",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    },
    "base_experience": 216,
    "height": 4,
    "weight": 31,
    "abilities": [
      "hydration"
    ]
  },
  {
    "id": 490,
    "name": "manaphy",
    "types": [
      "water"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 3,
    "weight": 14,
    "abilities": [
      "hydration"
    ]
  },
  {
    "id": 491,
    "name": "darkrai",
    "types": [
      "dark"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 90,
      "special_attack": 135,
      "special_defense": 90,
      "speed": 125
    },
    "base_experience": 270,
    "height": 15,
    "weight": 505,
    "abilities": [
      "bad-dreams"
    ]
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "types": [
      "grass"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 2,
    "weight": 21,
    "abilities": [
      "natural-cure"
    ]
  },
  {
    "id": 493,
    "name": "arceus",
    "types": [
      "normal"
    ],
    "generation": 4,
    "legendary": true,
    "stats": {
      "hp": 120,
      "attack": 120,
      "defense": 120,
      "special_attack": 120,
      "special_defense": 120,
      "speed": 120
    },
    "base_experience": 324,
    "height": 32,
    "weight": 3200,
    "abilities": [
      "multitype"
    ]
  },
  {
    "id": 494,
    "name": "victini",
    "types": [
      "psychic",
      "fire"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 100,
      "defense": 100,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 100
    },
    "base_experience": 270,
    "height": 4,
    "weight": 40,
    "abilities": [
      "victory-star"
    ]
  },
  {
    "id": 495,
    "name": "snivy",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 55,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 63
    },
    "base_experience": 62,
    "height": 6,
    "weight": 81,
    "abilities": [
      "overgrow",
      "contrary"
    ]
  },
  {
    "id": 496,
    "name": "servine",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 75,
      "special_attack": 60,
      "special_defense": 75,
      "speed": 83
    },
    "base_experience": 145,
    "height": 8,
    "weight": 160,
    "abilities": [
      "overgrow",
      "contrary"
    ]
  },
  {
    "id": 497,
    "name": "serperior",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 95,
      "special_attack": 75,
      "special_defense": 95,
      "speed": 113
    },
    "base_experience": 238,
    "height": 33,
    "weight": 630,
    "abilities": [
      "overgrow",
      "contrary"
    ]
  },
  {
    "id": 498,
    "name": "tepig",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 63,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 45
    },
    "base_experience": 62,
    "height": 5,
    "weight": 99,
    "abilities": [
      "blaze",
      "thick-fat"
    ]
  },
  {
    "id": 499,
    "name": "pignite",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 93,
      "defense": 55,
      "special_attack": 70,
      "special_defense": 55,
      "speed": 55
    },
    "base_experience": 146,
    "height": 10,
    "weight": 555,
    "abilities": [
      "blaze",
      "thick-fat"
    ]
  },
  {
    "id": 500,
    "name": "emboar",
    "types": [
      "fire",
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 123,
      "defense": 65,
      "special_attack": 100,
      "special_defense": 65,
      "speed": 65
    },
    "base_experience": 238,
    "height": 16,
    "weight": 1500,
    "abilities": [
      "blaze",
      "reckless"
    ]
  },
  {
    "id": 501,
    "name": "oshawott",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 45,
      "special_attack": 63,
      "special_defense": 45,
      "speed": 45
    },
    "base_experience": 62,
    "height": 5,
    "weight": 59,
    "abilities": [
      "torrent",
      "shell-armor"
    ]
  },
  {
    "id": 502,
    "name": "dewott",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 60,
      "special_attack": 83,
      "special_defense": 60,
      "speed": 60
    },
    "base_experience": 145,
    "height": 8,
    "weight": 245,
    "abilities": [
      "torrent",
      "shell-armor"
    ]
  },
  {
    "id": 503,
    "name": "samurott",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 100,
      "defense": 85,
      "special_attack": 108,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 238,
    "height": 15,
    "weight": 946,
    "abilities": [
      "torrent",
      "shell-armor"
    ]
  },
  {
    "id": 504,
    "name": "patrat",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 39,
      "special_attack": 35,
      "special_defense": 39,
      "speed": 42
    },
    "base_experience": 51,
    "height": 5,
    "weight": 116,
    "abilities": [
      "run-away",
      "keen-eye",
      "analytic"
    ]
  },
  {
    "id": 505,
    "name": "watchog",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 69,
      "special_attack": 60,
      "special_defense": 69,
      "speed": 77
    },
    "base_experience": 147,
    "height": 11,
    "weight": 270,
    "abilities": [
      "illuminate",
      "keen-eye",
      "analytic"
    ]
  },
  {
    "id": 506,
    "name": "lillipup",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 45,
      "special_attack": 25,
      "special_defense": 45,
      "speed": 55
    },
    "base_experience": 55,
    "height": 4,
    "weight": 41,
    "abilities": [
      "vital-spirit",
      "pickup",
      "run-away"
    ]
  },
  {
    "id": 507,
    "name": "herdier",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 80,
      "defense": 65,
      "special_attack": 35,
      "special_defense": 65,
      "speed": 60
    },
    "base_experience": 130,
    "height": 9,
    "weight": 147,
    "abilities": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ]
  },
  {
    "id": 508,
    "name": "stoutland",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 90,
      "special_attack": 45,
      "special_defense": 90,
      "speed": 80
    },
    "base_experience": 225,
    "height": 12,
    "weight": 610,
    "abilities": [
      "intimidate",
      "sand-rush",
      "scrappy"
    ]
  },
  {
    "id": 509,
    "name": "purrloin",
    "types": [
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 41,
      "attack": 50,
      "defense": 37,
      "special_attack": 50,
      "special_defense": 37,
      "speed": 66
    },
    "base_experience": 56,
    "height": 4,
    "weight": 101,
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ]
  },
  {
    "id": 510,
    "name": "liepard",
    "types": [
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 64,
      "attack": 88,
      "defense": 50,
      "special_attack": 88,
      "special_defense": 50,
      "speed": 106
    },
    "base_experience": 156,
    "height": 11,
    "weight": 375,
    "abilities": [
      "limber",
      "unburden",
      "prankster"
    ]
  },
  {
    "id": 511,
    "name": "pansage",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    },
    "base_experience": 63,
    "height": 6,
    "weight": 105,
    "abilities": [
      "gluttony",
      "overgrow"
    ]
  },
  {
    "id": 512,
    "name": "simisage",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    },
    "base_experience": 174,
    "height": 11,
    "weight": 305,
    "abilities": [
      "gluttony",
      "overgrow"
    ]
  },
  {
    "id": 513,
    "name": "pansear",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    },
    "base_experience": 63,
    "height": 6,
    "weight": 110,
    "abilities": [
      "gluttony",
      "blaze"
    ]
  },
  {
    "id": 514,
    "name": "simisear",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    },
    "base_experience": 174,
    "height": 10,
    "weight": 280,
    "abilities": [
      "gluttony",
      "blaze"
    ]
  },
  {
    "id": 515,
    "name": "panpour",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 48,
      "special_attack": 53,
      "special_defense": 48,
      "speed": 64
    },
    "base_experience": 63,
    "height": 6,
    "weight": 135,
    "abilities": [
      "gluttony",
      "torrent"
    ]
  },
  {
    "id": 516,
    "name": "simipour",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 63,
      "special_attack": 98,
      "special_defense": 63,
      "speed": 101
    },
    "base_experience": 174,
    "height": 10,
    "weight": 290,
    "abilities": [
      "gluttony",
      "torrent"
    ]
  },
  {
    "id": 517,
    "name": "munna",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 76,
      "attack": 25,
      "defense": 45,
      "special_attack": 67,
      "special_defense": 55,
      "speed": 24
    },
    "base_experience": 58,
    "height": 6,
    "weight": 233,
    "abilities": [
      "forewarn",
      "synchronize",
      "telepathy"
    ]
  },
  {
    "id": 518,
    "name": "musharna",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 116,
      "attack": 55,
      "defense": 85,
      "special_attack": 107,
      "special_defense": 95,
      "speed": 29
    },
    "base_experience": 170,
    "height": 11,
    "weight": 605,
    "abilities": [
      "forewarn",
      "synchronize",
      "telepathy"
    ]
  },
  {
    "id": 519,
    "name": "pidove",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 55,
      "defense": 50,
      "special_attack": 36,
      "special_defense": 30,
      "speed": 43
    },
    "base_experience": 53,
    "height": 3,
    "weight": 21,
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ]
  },
  {
    "id": 520,
    "name": "tranquill",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 77,
      "defense": 62,
      "special_attack": 50,
      "special_defense": 42,
      "speed": 65
    },
    "base_experience": 125,
    "height": 6,
    "weight": 150,
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ]
  },
  {
    "id": 521,
    "name": "unfezant",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 115,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 93
    },
    "base_experience": 220,
    "height": 12,
    "weight": 290,
    "abilities": [
      "big-pecks",
      "super-luck",
      "rivalry"
    ]
  },
  {
    "id": 522,
    "name": "blitzle",
    "types": [
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 60,
      "defense": 32,
      "special_attack": 50,
      "special_defense": 32,
      "speed": 76
    },
    "base_experience": 59,
    "height": 8,
    "weight": 298,
    "abilities": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ]
  },
  {
    "id": 523,
    "name": "zebstrika",
    "types": [
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 100,
      "defense": 63,
      "special_attack": 80,
      "special_defense": 63,
      "speed": 116
    },
    "base_experience": 174,
    "height": 16,
    "weight": 795,
    "abilities": [
      "lightning-rod",
      "motor-drive",
      "sap-sipper"
    ]
  },
  {
    "id": 524,
    "name": "roggenrola",
    "types": [
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 85,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 15
    },
    "base_experience": 56,
    "height": 4,
    "weight": 180,
    "abilities": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ]
  },
  {
    "id": 525,
    "name": "boldore",
    "types": [
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 105,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 20
    },
    "base_experience": 137,
    "height": 9,
    "weight": 1020,
    "abilities": [
      "sturdy",
      "weak-armor",
      "sand-force"
    ]
  },
  {
    "id": 526,
    "name": "gigalith",
    "types": [
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 135,
      "defense": 130,
      "special_attack": 60,
      "special_defense": 80,
      "speed": 25
    },
    "base_experience": 232,
    "height": 17,
    "weight": 2600,
    "abilities": [
      "sturdy",
      "sand-stream",
      "sand-force"
    ]
  },
  {
    "id": 527,
    "name": "woobat",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 45,
      "defense": 43,
      "special_attack": 55,
      "special_defense": 43,
      "speed": 72
    },
    "base_experience": 65,
    "height": 4,
    "weight": 21,
    "abilities": [
      "unaware",
      "klutz",
      "simple"
    ]
  },
  {
    "id": 528,
    "name": "swoobat",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 57,
      "defense": 55,
      "special_attack": 77,
      "special_defense": 55,
      "speed": 114
    },
    "base_experience": 149,
    "height": 9,
    "weight": 105,
    "abilities": [
      "unaware",
      "klutz",
      "simple"
    ]
  },
  {
    "id": 529,
    "name": "drilbur",
    "types": [
      "ground"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 85,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 45,
      "speed": 68
    },
    "base_experience": 66,
    "height": 3,
    "weight": 85,
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ]
  },
  {
    "id": 530,
    "name": "excadrill",
    "types": [
      "ground",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 135,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 65,
      "speed": 88
    },
    "base_experience": 178,
    "height": 7,
    "weight": 404,
    "abilities": [
      "sand-rush",
      "sand-force",
      "mold-breaker"
    ]
  },
  {
    "id": 531,
    "name": "audino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 103,
      "attack": 60,
      "defense": 86,
      "special_attack": 60,
      "special_defense": 86,
      "speed": 50
    },
    "base_experience": 390,
    "height": 11,
    "weight": 310,
    "abilities": [
      "healer",
      "regenerator",
      "klutz"
    ]
  },
  {
    "id": 532,
    "name": "timburr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 55,
      "special_attack": 25,
      "special_defense": 35,
      "speed": 35
    },
    "base_experience": 61,
    "height": 6,
    "weight": 125,
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ]
  },
  {
    "id": 533,
    "name": "gurdurr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 105,
      "defense": 85,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 40
    },
    "base_experience": 142,
    "height": 12,
    "weight": 400,
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ]
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 227,
    "height": 14,
    "weight": 870,
    "abilities": [
      "guts",
      "sheer-force",
      "iron-fist"
    ]
  },
  {
    "id": 535,
    "name": "tympole",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 40,
      "speed": 64
    },
    "base_experience": 59,
    "height": 5,
    "weight": 45,
    "abilities": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ]
  },
  {
    "id": 536,
    "name": "palpitoad",
    "types": [
      "water",
      "ground"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 65,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 69
    },
    "base_experience": 134,
    "height": 8,
    "weight": 170,
    "abilities": [
      "swift-swim",
      "hydration",
      "water-absorb"
    ]
  },
  {
    "id": 537,
    "name": "seismitoad",
    "types": [
      "water",
      "ground"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 95,
      "defense": 75,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 74
    },
    "base_experience": 229,
    "height": 15,
    "weight": 620,
    "abilities": [
      "swift-swim",
      "poison-touch",
      "water-absorb"
    ]
  },
  {
    "id": 538,
    "name": "throh",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 120,
      "attack": 100,
      "defense": 85,
      "special_attack": 30,
      "special_defense": 85,
      "speed": 45
    },
    "base_experience": 163,
    "height": 13,
    "weight": 555,
    "abilities": [
      "guts",
      "inner-focus",
      "mold-breaker"
    ]
  },
  {
    "id": 539,
    "name": "sawk",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 75,
      "special_attack": 30,
      "special_defense": 75,
      "speed": 85
    },
    "base_experience": 163,
    "height": 14,
    "weight": 510,
    "abilities": [
      "sturdy",
      "inner-focus",
      "mold-breaker"
    ]
  },
  {
    "id": 540,
    "name": "sewaddle",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 53,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 42
    },
    "base_experience": 62,
    "height": 3,
    "weight": 25,
    "abilities": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ]
  },
  {
    "id": 541,
    "name": "swadloon",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 63,
      "defense": 90,
      "special_attack": 50,
      "special_defense": 80,
      "speed": 42
    },
    "base_experience": 133,
    "height": 5,
    "weight": 73,
    "abilities": [
      "leaf-guard",
      "chlorophyll",
      "overcoat"
    ]
  },
  {
    "id": 542,
    "name": "leavanny",
    "types": [
      "bug",
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 103,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 92
    },
    "base_experience": 225,
    "height": 12,
    "weight": 205,
    "abilities": [
      "swarm",
      "chlorophyll",
      "overcoat"
    ]
  },
  {
    "id": 543,
    "name": "venipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 45,
      "defense": 59,
      "special_attack": 30,
      "special_defense": 39,
      "speed": 57
    },
    "base_experience": 52,
    "height": 4,
    "weight": 53,
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ]
  },
  {
    "id": 544,
    "name": "whirlipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 99,
      "special_attack": 40,
      "special_defense": 79,
      "speed": 47
    },
    "base_experience": 126,
    "height": 12,
    "weight": 585,
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ]
  },
  {
    "id": 545,
    "name": "scolipede",
    "types": [
      "bug",
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 89,
      "special_attack": 55,
      "special_defense": 69,
      "speed": 112
    },
    "base_experience": 218,
    "height": 25,
    "weight": 2005,
    "abilities": [
      "poison-point",
      "swarm",
      "speed-boost"
    ]
  },
  {
    "id": 546,
    "name": "cottonee",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 27,
      "defense": 60,
      "special_attack": 37,
      "special_defense": 50,
      "speed": 66
    },
    "base_experience": 56,
    "height": 3,
    "weight": 6,
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ]
  },
  {
    "id": 547,
    "name": "whimsicott",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 67,
      "defense": 85,
      "special_attack": 77,
      "special_defense": 75,
      "speed": 116
    },
    "base_experience": 168,
    "height": 7,
    "weight": 66,
    "abilities": [
      "prankster",
      "infiltrator",
      "chlorophyll"
    ]
  },
  {
    "id": 548,
    "name": "petilil",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 35,
      "defense": 50,
      "special_attack": 70,
      "special_defense": 50,
      "speed": 30
    },
    "base_experience": 56,
    "height": 5,
    "weight": 66,
    "abilities": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ]
  },
  {
    "id": 549,
    "name": "lilligant",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 60,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 75,
      "speed": 90
    },
    "base_experience": 168,
    "height": 11,
    "weight": 163,
    "abilities": [
      "chlorophyll",
      "own-tempo",
      "leaf-guard"
    ]
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 92,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 55,
      "speed": 98
    },
    "base_experience": 161,
    "height": 10,
    "weight": 180,
    "abilities": [
      "reckless",
      "adaptability",
      "mold-breaker"
    ]
  },
  {
    "id": 551,
    "name": "sandile",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 72,
      "defense": 35,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 65
    },
    "base_experience": 58,
    "height": 7,
    "weight": 152,
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ]
  },
  {
    "id": 552,
    "name": "krokorok",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 82,
      "defense": 45,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 74
    },
    "base_experience": 123,
    "height": 10,
    "weight": 334,
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ]
  },
  {
    "id": 553,
    "name": "krookodile",
    "types": [
      "ground",
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 80,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 92
    },
    "base_experience": 234,
    "height": 15,
    "weight": 963,
    "abilities": [
      "intimidate",
      "moxie",
      "anger-point"
    ]
  },
  {
    "id": 554,
    "name": "darumaka",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 90,
      "defense": 45,
      "special_attack": 15,
      "special_defense": 45,
      "speed": 50
    },
    "base_experience": 63,
    "height": 6,
    "weight": 375,
    "abilities": [
      "hustle",
      "inner-focus"
    ]
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 105,
      "attack": 140,
      "defense": 55,
      "special_attack": 30,
      "special_defense": 55,
      "speed": 95
    },
    "base_experience": 168,
    "height": 13,
    "weight": 929,
    "abilities": [
      "sheer-force",
      "zen-mode"
    ]
  },
  {
    "id": 556,
    "name": "maractus",
    "types": [
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 86,
      "defense": 67,
      "special_attack": 106,
      "special_defense": 67,
      "speed": 60
    },
    "base_experience": 161,
    "height": 10,
    "weight": 280,
    "abilities": [
      "water-absorb",
      "chlorophyll",
      "storm-drain"
    ]
  },
  {
    "id": 557,
    "name": "dwebble",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 85,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 55
    },
    "base_experience": 65,
    "height": 3,
    "weight": 145,
    "abilities": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ]
  },
  {
    "id": 558,
    "name": "crustle",
    "types": [
      "bug",
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 125,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 45
    },
    "base_experience": 170,
    "height": 14,
    "weight": 2000,
    "abilities": [
      "sturdy",
      "shell-armor",
      "weak-armor"
    ]
  },
  {
    "id": 559,
    "name": "scraggy",
    "types": [
      "dark",
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 70,
      "special_attack": 35,
      "special_defense": 70,
      "speed": 48
    },
    "base_experience": 70,
    "height": 6,
    "weight": 118,
    "abilities": [
      "shed-skin",
      "moxie",
      "intimidate"
    ]
  },
  {
    "id": 560,
    "name": "scrafty",
    "types": [
      "dark",
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 115,
      "special_attack": 45,
      "special_defense": 115,
      "speed": 58
    },
    "base_experience": 171,
    "height": 11,
    "weight": 300,
    "abilities": [
      "shed-skin",
      "moxie",
      "intimidate"
    ]
  },
  {
    "id": 561,
    "name": "sigilyph",
    "types": [
      "psychic",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 58,
      "defense": 80,
      "special_attack": 103,
      "special_defense": 80,
      "speed": 97
    },
    "base_experience": 172,
    "height": 14,
    "weight": 140,
    "abilities": [
      "wonder-skin",
      "magic-guard",
      "tinted-lens"
    ]
  },
  {
    "id": 562,
    "name": "yamask",
    "types": [
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 30,
      "defense": 85,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 30
    },
    "base_experience": 61,
    "height": 5,
    "weight": 15,
    "abilities": [
      "mummy"
    ]
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "types": [
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 50,
      "defense": 145,
      "special_attack": 95,
      "special_defense": 105,
      "speed": 30
    },
    "base_experience": 169,
    "height": 17,
    "weight": 765,
    "abilities": [
      "mummy"
    ]
  },
  {
    "id": 564,
    "name": "tirtouga",
    "types": [
      "water",
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 54,
      "attack": 78,
      "defense": 103,
      "special_attack": 53,
      "special_defense": 45,
      "speed": 22
    },
    "base_experience": 71,
    "height": 7,
    "weight": 165,
    "abilities": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ]
  },
  {
    "id": 565,
    "name": "carracosta",
    "types": [
      "water",
      "rock"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 74,
      "attack": 108,
      "defense": 133,
      "special_attack": 83,
      "special_defense": 65,
      "speed": 32
    },
    "base_experience": 173,
    "height": 12,
    "weight": 810,
    "abilities": [
      "solid-rock",
      "sturdy",
      "swift-swim"
    ]
  },
  {
    "id": 566,
    "name": "archen",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 112,
      "defense": 45,
      "special_attack": 74,
      "special_defense": 45,
      "speed": 70
    },
    "base_experience": 71,
    "height": 5,
    "weight": 95,
    "abilities": [
      "defeatist"
    ]
  },
  {
    "id": 567,
    "name": "archeops",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 140,
      "defense": 65,
      "special_attack": 112,
      "special_defense": 65,
      "speed": 110
    },
    "base_experience": 177,
    "height": 14,
    "weight": 320,
    "abilities": [
      "defeatist"
    ]
  },
  {
    "id": 568,
    "name": "trubbish",
    "types": [
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 62,
      "special_attack": 40,
      "special_defense": 62,
      "speed": 65
    },
    "base_experience": 66,
    "height": 6,
    "weight": 310,
    "abilities": [
      "stench",
      "sticky-hold",
      "aftermath"
    ]
  },
  {
    "id": 569,
    "name": "garbodor",
    "types": [
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 82,
      "special_attack": 60,
      "special_defense": 82,
      "speed": 75
    },
    "base_experience": 166,
    "height": 19,
    "weight": 1073,
    "abilities": [
      "stench",
      "weak-armor",
      "aftermath"
    ]
  },
  {
    "id": 570,
    "name": "zorua",
    "types": [
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 65,
      "defense": 40,
      "special_attack": 80,
      "special_defense": 40,
      "speed": 65
    },
    "base_experience": 66,
    "height": 7,
    "weight": 125,
    "abilities": [
      "illusion"
    ]
  },
  {
    "id": 571,
    "name": "zoroark",
    "types": [
      "dark"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 105,
      "defense": 60,
      "special_attack": 120,
      "special_defense": 60,
      "speed": 105
    },
    "base_experience": 179,
    "height": 16,
    "weight": 811,
    "abilities": [
      "illusion"
    ]
  },
  {
    "id": 572,
    "name": "minccino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 50,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 75
    },
    "base_experience": 60,
    "height": 4,
    "weight": 58,
    "abilities": [
      "cute-charm",
      "technician",
      "skill-link"
    ]
  },
  {
    "id": 573,
    "name": "cinccino",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 95,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 60,
      "speed": 115
    },
    "base_experience": 165,
    "height": 5,
    "weight": 75,
    "abilities": [
      "cute-charm",
      "technician",
      "skill-link"
    ]
  },
  {
    "id": 574,
    "name": "gothita",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 45
    },
    "base_experience": 58,
    "height": 4,
    "weight": 58,
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ]
  },
  {
    "id": 575,
    "name": "gothorita",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 85,
      "speed": 55
    },
    "base_experience": 137,
    "height": 7,
    "weight": 180,
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ]
  },
  {
    "id": 576,
    "name": "gothitelle",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 110,
      "speed": 65
    },
    "base_experience": 221,
    "height": 15,
    "weight": 440,
    "abilities": [
      "frisk",
      "competitive",
      "shadow-tag"
    ]
  },
  {
    "id": 577,
    "name": "solosis",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 30,
      "defense": 40,
      "special_attack": 105,
      "special_defense": 50,
      "speed": 20
    },
    "base_experience": 58,
    "height": 3,
    "weight": 10,
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ]
  },
  {
    "id": 578,
    "name": "duosion",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 40,
      "defense": 50,
      "special_attack": 125,
      "special_defense": 60,
      "speed": 30
    },
    "base_experience": 130,
    "height": 6,
    "weight": 80,
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ]
  },
  {
    "id": 579,
    "name": "reuniclus",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 75,
      "special_attack": 125,
      "special_defense": 85,
      "speed": 30
    },
    "base_experience": 221,
    "height": 10,
    "weight": 201,
    "abilities": [
      "overcoat",
      "magic-guard",
      "regenerator"
    ]
  },
  {
    "id": 580,
    "name": "ducklett",
    "types": [
      "water",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 44,
      "defense": 50,
      "special_attack": 44,
      "special_defense": 50,
      "speed": 55
    },
    "base_experience": 61,
    "height": 5,
    "weight": 55,
    "abilities": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ]
  },
  {
    "id": 581,
    "name": "swanna",
    "types": [
      "water",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 87,
      "defense": 63,
      "special_attack": 87,
      "special_defense": 63,
      "speed": 98
    },
    "base_experience": 166,
    "height": 13,
    "weight": 242,
    "abilities": [
      "keen-eye",
      "big-pecks",
      "hydration"
    ]
  },
  {
    "id": 582,
    "name": "vanillite",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 36,
      "attack": 50,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 60,
      "speed": 44
    },
    "base_experience": 61,
    "height": 4,
    "weight": 57,
    "abilities": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ]
  },
  {
    "id": 583,
    "name": "vanillish",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 51,
      "attack": 65,
      "defense": 65,
      "special_attack": 80,
      "special_defense": 75,
      "speed": 59
    },
    "base_experience": 138,
    "height": 11,
    "weight": 410,
    "abilities": [
      "ice-body",
      "snow-cloak",
      "weak-armor"
    ]
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 71,
      "attack": 95,
      "defense": 85,
      "special_attack": 110,
      "special_defense": 95,
      "speed": 79
    },
    "base_experience": 241,
    "height": 13,
    "weight": 575,
    "abilities": [
      "ice-body",
      "snow-warning",
      "weak-armor"
    ]
  },
  {
    "id": 585,
    "name": "deerling",
    "types": [
      "normal",
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    },
    "base_experience": 67,
    "height": 6,
    "weight": 195,
    "abilities": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ]
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "types": [
      "normal",
      "grass"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 70,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 95
    },
    "base_experience": 166,
    "height": 19,
    "weight": 925,
    "abilities": [
      "chlorophyll",
      "sap-sipper",
      "serene-grace"
    ]
  },
  {
    "id": 587,
    "name": "emolga",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 60,
      "special_attack": 75,
      "special_defense": 60,
      "speed": 103
    },
    "base_experience": 150,
    "height": 4,
    "weight": 50,
    "abilities": [
      "static",
      "motor-drive"
    ]
  },
  {
    "id": 588,
    "name": "karrablast",
    "types": [
      "bug"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 75,
      "defense": 45,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 60
    },
    "base_experience": 63,
    "height": 5,
    "weight": 59,
    "abilities": [
      "swarm",
      "shed-skin",
      "no-guard"
    ]
  },
  {
    "id": 589,
    "name": "escavalier",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 135,
      "defense": 105,
      "special_attack": 60,
      "special_defense": 105,
      "speed": 20
    },
    "base_experience": 173,
    "height": 10,
    "weight": 330,
    "abilities": [
      "swarm",
      "shell-armor",
      "overcoat"
    ]
  },
  {
    "id": 590,
    "name": "foongus",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 69,
      "attack": 55,
      "defense": 45,
      "special_attack": 55,
      "special_defense": 55,
      "speed": 15
    },
    "base_experience": 59,
    "height": 2,
    "weight": 10,
    "abilities": [
      "effect-spore",
      "regenerator"
    ]
  },
  {
    "id": 591,
    "name": "amoonguss",
    "types": [
      "grass",
      "poison"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 114,
      "attack": 85,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 80,
      "speed": 30
    },
    "base_experience": 162,
    "height": 6,
    "weight": 105,
    "abilities": [
      "effect-spore",
      "regenerator"
    ]
  },
  {
    "id": 592,
    "name": "frillish",
    "types": [
      "water",
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 40,
      "defense": 50,
      "special_attack": 65,
      "special_defense": 85,
      "speed": 40
    },
    "base_experience": 67,
    "height": 12,
    "weight": 330,
    "abilities": [
      "water-absorb",
      "cursed-body",
      "damp"
    ]
  },
  {
    "id": 593,
    "name": "jellicent",
    "types": [
      "water",
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 60,
      "defense": 70,
      "special_attack": 85,
      "special_defense": 105,
      "speed": 60
    },
    "base_experience": 168,
    "height": 22,
    "weight": 1350,
    "abilities": [
      "water-absorb",
      "cursed-body",
      "damp"
    ]
  },
  {
    "id": 594,
    "name": "alomomola",
    "types": [
      "water"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 165,
      "attack": 75,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 65
    },
    "base_experience": 165,
    "height": 12,
    "weight": 316,
    "abilities": [
      "healer",
      "hydration",
      "regenerator"
    ]
  },
  {
    "id": 595,
    "name": "joltik",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 47,
      "defense": 50,
      "special_attack": 57,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 64,
    "height": 1,
    "weight": 6,
    "abilities": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ]
  },
  {
    "id": 596,
    "name": "galvantula",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 77,
      "defense": 60,
      "special_attack": 97,
      "special_defense": 60,
      "speed": 108
    },
    "base_experience": 165,
    "height": 8,
    "weight": 143,
    "abilities": [
      "compound-eyes",
      "unnerve",
      "swarm"
    ]
  },
  {
    "id": 597,
    "name": "ferroseed",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 50,
      "defense": 91,
      "special_attack": 24,
      "special_defense": 86,
      "speed": 10
    },
    "base_experience": 61,
    "height": 6,
    "weight": 188,
    "abilities": [
      "iron-barbs"
    ]
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 74,
      "attack": 94,
      "defense": 131,
      "special_attack": 54,
      "special_defense": 116,
      "speed": 20
    },
    "base_experience": 171,
    "height": 10,
    "weight": 1100,
    "abilities": [
      "iron-barbs",
      "anticipation"
    ]
  },
  {
    "id": 599,
    "name": "klink",
    "types": [
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 60,
      "speed": 30
    },
    "base_experience": 60,
    "height": 3,
    "weight": 210,
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ]
  },
  {
    "id": 600,
    "name": "klang",
    "types": [
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 80,
      "defense": 95,
      "special_attack": 70,
      "special_defense": 85,
      "speed": 50
    },
    "base_experience": 154,
    "height": 6,
    "weight": 510,
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ]
  },
  {
    "id": 601,
    "name": "klinklang",
    "types": [
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 100,
      "defense": 115,
      "special_attack": 70,
      "special_defense": 85,
      "speed": 90
    },
    "base_experience": 234,
    "height": 6,
    "weight": 810,
    "abilities": [
      "plus",
      "minus",
      "clear-body"
    ]
  },
  {
    "id": 602,
    "name": "tynamo",
    "types": [
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special_attack": 45,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 55,
    "height": 2,
    "weight": 3,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 603,
    "name": "eelektrik",
    "types": [
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 70,
      "special_attack": 75,
      "special_defense": 70,
      "speed": 40
    },
    "base_experience": 142,
    "height": 12,
    "weight": 220,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 604,
    "name": "eelektross",
    "types": [
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 115,
      "defense": 80,
      "special_attack": 105,
      "special_defense": 80,
      "speed": 50
    },
    "base_experience": 232,
    "height": 21,
    "weight": 805,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 605,
    "name": "elgyem",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 55,
      "speed": 30
    },
    "base_experience": 67,
    "height": 5,
    "weight": 90,
    "abilities": [
      "telepathy",
      "synchronize",
      "analytic"
    ]
  },
  {
    "id": 606,
    "name": "beheeyem",
    "types": [
      "psychic"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 75,
      "defense": 75,
      "special_attack": 125,
      "special_defense": 95,
      "speed": 40
    },
    "base_experience": 170,
    "height": 10,
    "weight": 345,
    "abilities": [
      "telepathy",
      "synchronize",
      "analytic"
    ]
  },
  {
    "id": 607,
    "name": "litwick",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 30,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 55,
      "speed": 20
    },
    "base_experience": 55,
    "height": 3,
    "weight": 31,
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ]
  },
  {
    "id": 608,
    "name": "lampent",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 40,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 55
    },
    "base_experience": 130,
    "height": 6,
    "weight": 130,
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ]
  },
  {
    "id": 609,
    "name": "chandelure",
    "types": [
      "ghost",
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 90,
      "special_attack": 145,
      "special_defense": 90,
      "speed": 80
    },
    "base_experience": 234,
    "height": 10,
    "weight": 343,
    "abilities": [
      "flash-fire",
      "flame-body",
      "infiltrator"
    ]
  },
  {
    "id": 610,
    "name": "axew",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 46,
      "attack": 87,
      "defense": 60,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 57
    },
    "base_experience": 64,
    "height": 6,
    "weight": 180,
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ]
  },
  {
    "id": 611,
    "name": "fraxure",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 66,
      "attack": 117,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 67
    },
    "base_experience": 144,
    "height": 10,
    "weight": 360,
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ]
  },
  {
    "id": 612,
    "name": "haxorus",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 76,
      "attack": 147,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 97
    },
    "base_experience": 243,
    "height": 18,
    "weight": 1055,
    "abilities": [
      "rivalry",
      "mold-breaker",
      "unnerve"
    ]
  },
  {
    "id": 613,
    "name": "cubchoo",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 70,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 40
    },
    "base_experience": 61,
    "height": 5,
    "weight": 85,
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "rattled"
    ]
  },
  {
    "id": 614,
    "name": "beartic",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 130,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 50
    },
    "base_experience": 177,
    "height": 26,
    "weight": 2600,
    "abilities": [
      "snow-cloak",
      "slush-rush",
      "swift-swim"
    ]
  },
  {
    "id": 615,
    "name": "cryogonal",
    "types": [
      "ice"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 50,
      "defense": 50,
      "special_attack": 95,
      "special_defense": 135,
      "speed": 105
    },
    "base_experience": 180,
    "height": 11,
    "weight": 1480,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 616,
    "name": "shelmet",
    "types": [
      "bug"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 85,
      "special_attack": 40,
      "special_defense": 65,
      "speed": 25
    },
    "base_experience": 61,
    "height": 4,
    "weight": 77,
    "abilities": [
      "hydration",
      "shell-armor",
      "overcoat"
    ]
  },
  {
    "id": 617,
    "name": "accelgor",
    "types": [
      "bug"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 70,
      "defense": 40,
      "special_attack": 100,
      "special_defense": 60,
      "speed": 145
    },
    "base_experience": 173,
    "height": 8,
    "weight": 253,
    "abilities": [
      "hydration",
      "sticky-hold",
      "unburden"
    ]
  },
  {
    "id": 618,
    "name": "stunfisk",
    "types": [
      "ground",
      "electric"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 109,
      "attack": 66,
      "defense": 84,
      "special_attack": 81,
      "special_defense": 99,
      "speed": 32
    },
    "base_experience": 165,
    "height": 7,
    "weight": 110,
    "abilities": [
      "static",
      "limber",
      "sand-veil"
    ]
  },
  {
    "id": 619,
    "name": "mienfoo",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 50,
      "special_attack": 55,
      "special_defense": 50,
      "speed": 65
    },
    "base_experience": 70,
    "height": 9,
    "weight": 200,
    "abilities": [
      "inner-focus",
      "regenerator",
      "reckless"
    ]
  },
  {
    "id": 620,
    "name": "mienshao",
    "types": [
      "fighting"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 105
    },
    "base_experience": 179,
    "height": 14,
    "weight": 355,
    "abilities": [
      "inner-focus",
      "regenerator",
      "reckless"
    ]
  },
  {
    "id": 621,
    "name": "druddigon",
    "types": [
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 77,
      "attack": 120,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 48
    },
    "base_experience": 170,
    "height": 16,
    "weight": 1390,
    "abilities": [
      "rough-skin",
      "sheer-force",
      "mold-breaker"
    ]
  },
  {
    "id": 622,
    "name": "golett",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 74,
      "defense": 50,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 35
    },
    "base_experience": 61,
    "height": 10,
    "weight": 920,
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ]
  },
  {
    "id": 623,
    "name": "golurk",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 89,
      "attack": 124,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 80,
      "speed": 55
    },
    "base_experience": 169,
    "height": 28,
    "weight": 3300,
    "abilities": [
      "iron-fist",
      "klutz",
      "no-guard"
    ]
  },
  {
    "id": 624,
    "name": "pawniard",
    "types": [
      "dark",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 85,
      "defense": 70,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 68,
    "height": 5,
    "weight": 102,
    "abilities": [
      "defiant",
      "inner-focus",
      "pressure"
    ]
  },
  {
    "id": 625,
    "name": "bisharp",
    "types": [
      "dark",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 125,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 70
    },
    "base_experience": 172,
    "height": 16,
    "weight": 700,
    "abilities": [
      "defiant",
      "inner-focus",
      "pressure"
    ]
  },
  {
    "id": 626,
    "name": "bouffalant",
    "types": [
      "normal"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 110,
      "defense": 95,
      "special_attack": 40,
      "special_defense": 95,
      "speed": 55
    },
    "base_experience": 172,
    "height": 16,
    "weight": 946,
    "abilities": [
      "reckless",
      "sap-sipper",
      "soundproof"
    ]
  },
  {
    "id": 627,
    "name": "rufflet",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 83,
      "defense": 50,
      "special_attack": 37,
      "special_defense": 50,
      "speed": 60
    },
    "base_experience": 70,
    "height": 5,
    "weight": 105,
    "abilities": [
      "keen-eye",
      "sheer-force",
      "hustle"
    ]
  },
  {
    "id": 628,
    "name": "braviary",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 123,
      "defense": 75,
      "special_attack": 57,
      "special_defense": 75,
      "speed": 80
    },
    "base_experience": 179,
    "height": 15,
    "weight": 410,
    "abilities": [
      "keen-eye",
      "sheer-force",
      "defiant"
    ]
  },
  {
    "id": 629,
    "name": "vullaby",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 75,
      "special_attack": 45,
      "special_defense": 65,
      "speed": 60
    },
    "base_experience": 74,
    "height": 5,
    "weight": 90,
    "abilities": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ]
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 65,
      "defense": 105,
      "special_attack": 55,
      "special_defense": 95,
      "speed": 80
    },
    "base_experience": 179,
    "height": 12,
    "weight": 395,
    "abilities": [
      "big-pecks",
      "overcoat",
      "weak-armor"
    ]
  },
  {
    "id": 631,
    "name": "heatmor",
    "types": [
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 97,
      "defense": 66,
      "special_attack": 105,
      "special_defense": 66,
      "speed": 65
    },
    "base_experience": 169,
    "height": 14,
    "weight": 580,
    "abilities": [
      "gluttony",
      "flash-fire",
      "white-smoke"
    ]
  },
  {
    "id": 632,
    "name": "durant",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 109,
      "defense": 112,
      "special_attack": 48,
      "special_defense": 48,
      "speed": 109
    },
    "base_experience": 169,
    "height": 3,
    "weight": 330,
    "abilities": [
      "swarm",
      "hustle",
      "truant"
    ]
  },
  {
    "id": 633,
    "name": "deino",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 52,
      "attack": 65,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 38
    },
    "base_experience": 60,
    "height": 8,
    "weight": 173,
    "abilities": [
      "hustle"
    ]
  },
  {
    "id": 634,
    "name": "zweilous",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 85,
      "defense": 70,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 58
    },
    "base_experience": 147,
    "height": 14,
    "weight": 500,
    "abilities": [
      "hustle"
    ]
  },
  {
    "id": 635,
    "name": "hydreigon",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 92,
      "attack": 105,
      "defense": 90,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 98
    },
    "base_experience": 270,
    "height": 18,
    "weight": 1600,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 636,
    "name": "larvesta",
    "types": [
      "bug",
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 55,
      "speed": 60
    },
    "base_experience": 72,
    "height": 11,
    "weight": 288,
    "abilities": [
      "flame-body",
      "swarm"
    ]
  },
  {
    "id": 637,
    "name": "volcarona",
    "types": [
      "bug",
      "fire"
    ],
    "generation": 5,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 60,
      "defense": 65,
      "special_attack": 135,
      "special_defense": 105,
      "speed": 100
    },
    "base_experience": 248,
    "height": 16,
    "weight": 460,
    "abilities": [
      "flame-body",
      "swarm"
    ]
  },
  {
    "id": 638,
    "name": "cobalion",
    "types": [
      "steel",
      "fighting"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 129,
      "special_attack": 90,
      "special_defense": 72,
      "speed": 108
    },
    "base_experience": 261,
    "height": 21,
    "weight": 2500,
    "abilities": [
      "justified"
    ]
  },
  {
    "id": 639,
    "name": "terrakion",
    "types": [
      "rock",
      "fighting"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 91,
      "attack": 129,
      "defense": 90,
      "special_attack": 72,
      "special_defense": 90,
      "speed": 108
    },
    "base_experience": 261,
    "height": 19,
    "weight": 2600,
    "abilities": [
      "justified"
    ]
  },
  {
    "id": 640,
    "name": "virizion",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 91,
      "attack": 90,
      "defense": 72,
      "special_attack": 90,
      "special_defense": 129,
      "speed": 108
    },
    "base_experience": 261,
    "height": 20,
    "weight": 2000,
    "abilities": [
      "justified"
    ]
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "types": [
      "flying"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 80,
      "speed": 111
    },
    "base_experience": 261,
    "height": 15,
    "weight": 630,
    "abilities": [
      "prankster",
      "defiant"
    ]
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "types": [
      "electric",
      "flying"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 79,
      "attack": 115,
      "defense": 70,
      "special_attack": 125,
      "special_defense": 80,
      "speed": 111
    },
    "base_experience": 261,
    "height": 15,
    "weight": 610,
    "abilities": [
      "prankster",
      "defiant"
    ]
  },
  {
    "id": 643,
    "name": "reshiram",
    "types": [
      "dragon",
      "fire"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 100,
      "special_attack": 150,
      "special_defense": 120,
      "speed": 90
    },
    "base_experience": 306,
    "height": 32,
    "weight": 3300,
    "abilities": [
      "turboblaze"
    ]
  },
  {
    "id": 644,
    "name": "zekrom",
    "types": [
      "dragon",
      "electric"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 150,
      "defense": 120,
      "special_attack": 120,
      "special_defense": 100,
      "speed": 90
    },
    "base_experience": 306,
    "height": 29,
    "weight": 3450,
    "abilities": [
      "teravolt"
    ]
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "types": [
      "ground",
      "flying"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 89,
      "attack": 125,
      "defense": 90,
      "special_attack": 115,
      "special_defense": 80,
      "speed": 101
    },
    "base_experience": 270,
    "height": 15,
    "weight": 680,
    "abilities": [
      "sand-force",
      "sheer-force"
    ]
  },
  {
    "id": 646,
    "name": "kyurem",
    "types": [
      "dragon",
      "ice"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 125,
      "attack": 130,
      "defense": 90,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 95
    },
    "base_experience": 297,
    "height": 30,
    "weight": 3250,
    "abilities": [
      "pressure"
    ]
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "types": [
      "water",
      "fighting"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 91,
      "attack": 72,
      "defense": 90,
      "special_attack": 129,
      "special_defense": 90,
      "speed": 108
    },
    "base_experience": 261,
    "height": 14,
    "weight": 485,
    "abilities": [
      "justified"
    ]
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "special_attack": 128,
      "special_defense": 128,
      "speed": 90
    },
    "base_experience": 270,
    "height": 6,
    "weight": 65,
    "abilities": [
      "serene-grace"
    ]
  },
  {
    "id": 649,
    "name": "genesect",
    "types": [
      "bug",
      "steel"
    ],
    "generation": 5,
    "legendary": true,
    "stats": {
      "hp": 71,
      "attack": 120,
      "defense": 95,
      "special_attack": 120,
      "special_defense": 95,
      "speed": 99
    },
    "base_experience": 270,
    "height": 15,
    "weight": 825,
    "abilities": [
      "download"
    ]
  },
  {
    "id": 650,
    "name": "chespin",
    "types": [
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 56,
      "attack": 61,
      "defense": 65,
      "special_attack": 48,
      "special_defense": 45,
      "speed": 38
    },
    "base_experience": 63,
    "height": 4,
    "weight": 90,
    "abilities": [
      "overgrow",
      "bulletproof"
    ]
  },
  {
    "id": 651,
    "name": "quilladin",
    "types": [
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 78,
      "defense": 95,
      "special_attack": 56,
      "special_defense": 58,
      "speed": 57
    },
    "base_experience": 142,
    "height": 7,
    "weight": 290,
    "abilities": [
      "overgrow",
      "bulletproof"
    ]
  },
  {
    "id": 652,
    "name": "chesnaught",
    "types": [
      "grass",
      "fighting"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 88,
      "attack": 107,
      "defense": 122,
      "special_attack": 74,
      "special_defense": 75,
      "speed": 64
    },
    "base_experience": 239,
    "height": 16,
    "weight": 900,
    "abilities": [
      "overgrow",
      "bulletproof"
    ]
  },
  {
    "id": 653,
    "name": "fennekin",
    "types": [
      "fire"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 62,
      "special_defense": 60,
      "speed": 60
    },
    "base_experience": 61,
    "height": 4,
    "weight": 94,
    "abilities": [
      "blaze",
      "magician"
    ]
  },
  {
    "id": 654,
    "name": "braixen",
    "types": [
      "fire"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 59,
      "defense": 58,
      "special_attack": 90,
      "special_defense": 70,
      "speed": 73
    },
    "base_experience": 143,
    "height": 10,
    "weight": 145,
    "abilities": [
      "blaze",
      "magician"
    ]
  },
  {
    "id": 655,
    "name": "delphox",
    "types": [
      "fire",
      "psychic"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 69,
      "defense": 72,
      "special_attack": 114,
      "special_defense": 100,
      "speed": 104
    },
    "base_experience": 240,
    "height": 15,
    "weight": 390,
    "abilities": [
      "blaze",
      "magician"
    ]
  },
  {
    "id": 656,
    "name": "froakie",
    "types": [
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 41,
      "attack": 56,
      "defense": 40,
      "special_attack": 62,
      "special_defense": 44,
      "speed": 71
    },
    "base_experience": 63,
    "height": 3,
    "weight": 70,
    "abilities": [
      "torrent",
      "protean"
    ]
  },
  {
    "id": 657,
    "name": "frogadier",
    "types": [
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 54,
      "attack": 63,
      "defense": 52,
      "special_attack": 83,
      "special_defense": 56,
      "speed": 97
    },
    "base_experience": 142,
    "height": 6,
    "weight": 109,
    "abilities": [
      "torrent",
      "protean"
    ]
  },
  {
    "id": 658,
    "name": "greninja",
    "types": [
      "water",
      "dark"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 95,
      "defense": 67,
      "special_attack": 103,
      "special_defense": 71,
      "speed": 122
    },
    "base_experience": 239,
    "height": 15,
    "weight": 400,
    "abilities": [
      "torrent",
      "protean"
    ]
  },
  {
    "id": 659,
    "name": "bunnelby",
    "types": [
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 36,
      "defense": 38,
      "special_attack": 32,
      "special_defense": 36,
      "speed": 57
    },
    "base_experience": 47,
    "height": 4,
    "weight": 50,
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ]
  },
  {
    "id": 660,
    "name": "diggersby",
    "types": [
      "normal",
      "ground"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 56,
      "defense": 77,
      "special_attack": 50,
      "special_defense": 77,
      "speed": 78
    },
    "base_experience": 148,
    "height": 10,
    "weight": 424,
    "abilities": [
      "pickup",
      "cheek-pouch",
      "huge-power"
    ]
  },
  {
    "id": 661,
    "name": "fletchling",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 43,
      "special_attack": 40,
      "special_defense": 38,
      "speed": 62
    },
    "base_experience": 56,
    "height": 3,
    "weight": 17,
    "abilities": [
      "big-pecks",
      "gale-wings"
    ]
  },
  {
    "id": 662,
    "name": "fletchinder",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 73,
      "defense": 55,
      "special_attack": 56,
      "special_defense": 52,
      "speed": 84
    },
    "base_experience": 134,
    "height": 7,
    "weight": 160,
    "abilities": [
      "flame-body",
      "gale-wings"
    ]
  },
  {
    "id": 663,
    "name": "talonflame",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 81,
      "defense": 71,
      "special_attack": 74,
      "special_defense": 69,
      "speed": 126
    },
    "base_experience": 175,
    "height": 12,
    "weight": 245,
    "abilities": [
      "flame-body",
      "gale-wings"
    ]
  },
  {
    "id": 664,
    "name": "scatterbug",
    "types": [
      "bug"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 35,
      "defense": 40,
      "special_attack": 27,
      "special_defense": 25,
      "speed": 35
    },
    "base_experience": 40,
    "height": 3,
    "weight": 25,
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ]
  },
  {
    "id": 665,
    "name": "spewpa",
    "types": [
      "bug"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 22,
      "defense": 60,
      "special_attack": 27,
      "special_defense": 30,
      "speed": 29
    },
    "base_experience": 75,
    "height": 3,
    "weight": 84,
    "abilities": [
      "shed-skin",
      "friend-guard"
    ]
  },
  {
    "id": 666,
    "name": "vivillon",
    "types": [
      "bug",
      "flying"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 52,
      "defense": 50,
      "special_attack": 90,
      "special_defense": 50,
      "speed": 89
    },
    "base_experience": 185,
    "height": 12,
    "weight": 170,
    "abilities": [
      "shield-dust",
      "compound-eyes",
      "friend-guard"
    ]
  },
  {
    "id": 667,
    "name": "litleo",
    "types": [
      "fire",
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 50,
      "defense": 58,
      "special_attack": 73,
      "special_defense": 54,
      "speed": 72
    },
    "base_experience": 74,
    "height": 6,
    "weight": 135,
    "abilities": [
      "rivalry",
      "unnerve",
      "moxie"
    ]
  },
  {
    "id": 668,
    "name": "pyroar",
    "types": [
      "fire",
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 86,
      "attack": 68,
      "defense": 72,
      "special_attack": 109,
      "special_defense": 66,
      "speed": 106
    },
    "base_experience": 177,
    "height": 15,
    "weight": 815,
    "abilities": [
      "rivalry",
      "unnerve",
      "moxie"
    ]
  },
  {
    "id": 669,
    "name": "flabebe",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 39,
      "special_attack": 61,
      "special_defense": 79,
      "speed": 42
    },
    "base_experience": 61,
    "height": 1,
    "weight": 1,
    "abilities": [
      "flower-veil",
      "symbiosis"
    ]
  },
  {
    "id": 670,
    "name": "floette",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 54,
      "attack": 45,
      "defense": 47,
      "special_attack": 75,
      "special_defense": 98,
      "speed": 52
    },
    "base_experience": 130,
    "height": 2,
    "weight": 9,
    "abilities": [
      "flower-veil",
      "symbiosis"
    ]
  },
  {
    "id": 671,
    "name": "florges",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 65,
      "defense": 68,
      "special_attack": 112,
      "special_defense": 154,
      "speed": 75
    },
    "base_experience": 248,
    "height": 11,
    "weight": 100,
    "abilities": [
      "flower-veil",
      "symbiosis"
    ]
  },
  {
    "id": 672,
    "name": "skiddo",
    "types": [
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 66,
      "attack": 65,
      "defense": 48,
      "special_attack": 62,
      "special_defense": 57,
      "speed": 52
    },
    "base_experience": 70,
    "height": 9,
    "weight": 310,
    "abilities": [
      "sap-sipper",
      "grass-pelt"
    ]
  },
  {
    "id": 673,
    "name": "gogoat",
    "types": [
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 123,
      "attack": 100,
      "defense": 62,
      "special_attack": 97,
      "special_defense": 81,
      "speed": 68
    },
    "base_experience": 186,
    "height": 17,
    "weight": 910,
    "abilities": [
      "sap-sipper",
      "grass-pelt"
    ]
  },
  {
    "id": 674,
    "name": "pancham",
    "types": [
      "fighting"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 82,
      "defense": 62,
      "special_attack": 46,
      "special_defense": 48,
      "speed": 43
    },
    "base_experience": 70,
    "height": 6,
    "weight": 80,
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ]
  },
  {
    "id": 675,
    "name": "pangoro",
    "types": [
      "fighting",
      "dark"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 124,
      "defense": 78,
      "special_attack": 69,
      "special_defense": 71,
      "speed": 58
    },
    "base_experience": 173,
    "height": 21,
    "weight": 1360,
    "abilities": [
      "iron-fist",
      "mold-breaker",
      "scrappy"
    ]
  },
  {
    "id": 676,
    "name": "furfrou",
    "types": [
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 60,
      "special_attack": 65,
      "special_defense": 90,
      "speed": 102
    },
    "base_experience": 165,
    "height": 12,
    "weight": 280,
    "abilities": [
      "fur-coat"
    ]
  },
  {
    "id": 677,
    "name": "espurr",
    "types": [
      "psychic"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 54,
      "special_attack": 63,
      "special_defense": 60,
      "speed": 68
    },
    "base_experience": 71,
    "height": 3,
    "weight": 35,
    "abilities": [
      "keen-eye",
      "infiltrator",
      "own-tempo"
    ]
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "types": [
      "psychic"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 74,
      "attack": 48,
      "defense": 76,
      "special_attack": 83,
      "special_defense": 81,
      "speed": 104
    },
    "base_experience": 163,
    "height": 6,
    "weight": 85,
    "abilities": [
      "keen-eye",
      "infiltrator",
      "prankster"
    ]
  },
  {
    "id": 679,
    "name": "honedge",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 80,
      "defense": 100,
      "special_attack": 35,
      "special_defense": 37,
      "speed": 28
    },
    "base_experience": 65,
    "height": 8,
    "weight": 20,
    "abilities": [
      "no-guard"
    ]
  },
  {
    "id": 680,
    "name": "doublade",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 110,
      "defense": 150,
      "special_attack": 45,
      "special_defense": 49,
      "speed": 35
    },
    "base_experience": 157,
    "height": 8,
    "weight": 45,
    "abilities": [
      "no-guard"
    ]
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "types": [
      "steel",
      "ghost"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 140,
      "special_attack": 50,
      "special_defense": 140,
      "speed": 60
    },
    "base_experience": 234,
    "height": 17,
    "weight": 530,
    "abilities": [
      "stance-change"
    ]
  },
  {
    "id": 682,
    "name": "spritzee",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 52,
      "defense": 60,
      "special_attack": 63,
      "special_defense": 65,
      "speed": 23
    },
    "base_experience": 68,
    "height": 2,
    "weight": 5,
    "abilities": [
      "healer",
      "aroma-veil"
    ]
  },
  {
    "id": 683,
    "name": "aromatisse",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 101,
      "attack": 72,
      "defense": 72,
      "special_attack": 99,
      "special_defense": 89,
      "speed": 29
    },
    "base_experience": 162,
    "height": 8,
    "weight": 155,
    "abilities": [
      "healer",
      "aroma-veil"
    ]
  },
  {
    "id": 684,
    "name": "swirlix",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 48,
      "defense": 66,
      "special_attack": 59,
      "special_defense": 57,
      "speed": 49
    },
    "base_experience": 68,
    "height": 4,
    "weight": 35,
    "abilities": [
      "sweet-veil",
      "unburden"
    ]
  },
  {
    "id": 685,
    "name": "slurpuff",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 82,
      "attack": 80,
      "defense": 86,
      "special_attack": 85,
      "special_defense": 75,
      "speed": 72
    },
    "base_experience": 168,
    "height": 8,
    "weight": 50,
    "abilities": [
      "sweet-veil",
      "unburden"
    ]
  },
  {
    "id": 686,
    "name": "inkay",
    "types": [
      "dark",
      "psychic"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 53,
      "attack": 54,
      "defense": 53,
      "special_attack": 37,
      "special_defense": 46,
      "speed": 45
    },
    "base_experience": 58,
    "height": 4,
    "weight": 35,
    "abilities": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ]
  },
  {
    "id": 687,
    "name": "malamar",
    "types": [
      "dark",
      "psychic"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 86,
      "attack": 92,
      "defense": 88,
      "special_attack": 68,
      "special_defense": 75,
      "speed": 73
    },
    "base_experience": 169,
    "height": 15,
    "weight": 470,
    "abilities": [
      "contrary",
      "suction-cups",
      "infiltrator"
    ]
  },
  {
    "id": 688,
    "name": "binacle",
    "types": [
      "rock",
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 42,
      "attack": 52,
      "defense": 67,
      "special_attack": 39,
      "special_defense": 56,
      "speed": 50
    },
    "base_experience": 61,
    "height": 5,
    "weight": 310,
    "abilities": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ]
  },
  {
    "id": 689,
    "name": "barbaracle",
    "types": [
      "rock",
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 105,
      "defense": 115,
      "special_attack": 54,
      "special_defense": 86,
      "speed": 68
    },
    "base_experience": 175,
    "height": 13,
    "weight": 960,
    "abilities": [
      "tough-claws",
      "sniper",
      "pickpocket"
    ]
  },
  {
    "id": 690,
    "name": "skrelp",
    "types": [
      "poison",
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 60,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 60,
      "speed": 30
    },
    "base_experience": 64,
    "height": 5,
    "weight": 73,
    "abilities": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ]
  },
  {
    "id": 691,
    "name": "dragalge",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 75,
      "defense": 90,
      "special_attack": 97,
      "special_defense": 123,
      "speed": 44
    },
    "base_experience": 173,
    "height": 18,
    "weight": 815,
    "abilities": [
      "poison-point",
      "poison-touch",
      "adaptability"
    ]
  },
  {
    "id": 692,
    "name": "clauncher",
    "types": [
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special_attack": 58,
      "special_defense": 63,
      "speed": 44
    },
    "base_experience": 66,
    "height": 5,
    "weight": 83,
    "abilities": [
      "mega-launcher"
    ]
  },
  {
    "id": 693,
    "name": "clawitzer",
    "types": [
      "water"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 71,
      "attack": 73,
      "defense": 88,
      "special_attack": 120,
      "special_defense": 89,
      "speed": 59
    },
    "base_experience": 100,
    "height": 13,
    "weight": 353,
    "abilities": [
      "mega-launcher"
    ]
  },
  {
    "id": 694,
    "name": "helioptile",
    "types": [
      "electric",
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 44,
      "attack": 38,
      "defense": 33,
      "special_attack": 61,
      "special_defense": 43,
      "speed": 70
    },
    "base_experience": 58,
    "height": 5,
    "weight": 60,
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ]
  },
  {
    "id": 695,
    "name": "heliolisk",
    "types": [
      "electric",
      "normal"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 55,
      "defense": 52,
      "special_attack": 109,
      "special_defense": 94,
      "speed": 109
    },
    "base_experience": 168,
    "height": 10,
    "weight": 210,
    "abilities": [
      "dry-skin",
      "sand-veil",
      "solar-power"
    ]
  },
  {
    "id": 696,
    "name": "tyrunt",
    "types": [
      "rock",
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 89,
      "defense": 77,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 48
    },
    "base_experience": 72,
    "height": 8,
    "weight": 260,
    "abilities": [
      "strong-jaw",
      "sturdy"
    ]
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "types": [
      "rock",
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 82,
      "attack": 121,
      "defense": 119,
      "special_attack": 69,
      "special_defense": 59,
      "speed": 71
    },
    "base_experience": 182,
    "height": 25,
    "weight": 2700,
    "abilities": [
      "strong-jaw",
      "rock-head"
    ]
  },
  {
    "id": 698,
    "name": "amaura",
    "types": [
      "rock",
      "ice"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 77,
      "attack": 59,
      "defense": 50,
      "special_attack": 67,
      "special_defense": 63,
      "speed": 46
    },
    "base_experience": 72,
    "height": 13,
    "weight": 252,
    "abilities": [
      "refrigerate",
      "snow-warning"
    ]
  },
  {
    "id": 699,
    "name": "aurorus",
    "types": [
      "rock",
      "ice"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 123,
      "attack": 77,
      "defense": 72,
      "special_attack": 99,
      "special_defense": 92,
      "speed": 58
    },
    "base_experience": 104,
    "height": 27,
    "weight": 2250,
    "abilities": [
      "refrigerate",
      "snow-warning"
    ]
  },
  {
    "id": 700,
    "name": "sylveon",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 65,
      "defense": 65,
      "special_attack": 110,
      "special_defense": 130,
      "speed": 60
    },
    "base_experience": 184,
    "height": 10,
    "weight": 235,
    "abilities": [
      "cute-charm",
      "pixilate"
    ]
  },
  {
    "id": 701,
    "name": "hawlucha",
    "types": [
      "fighting",
      "flying"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 92,
      "defense": 75,
      "special_attack": 74,
      "special_defense": 63,
      "speed": 118
    },
    "base_experience": 175,
    "height": 8,
    "weight": 215,
    "abilities": [
      "limber",
      "unburden",
      "mold-breaker"
    ]
  },
  {
    "id": 702,
    "name": "dedenne",
    "types": [
      "electric",
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 58,
      "defense": 57,
      "special_attack": 81,
      "special_defense": 67,
      "speed": 101
    },
    "base_experience": 151,
    "height": 2,
    "weight": 22,
    "abilities": [
      "cheek-pouch",
      "pickup",
      "plus"
    ]
  },
  {
    "id": 703,
    "name": "carbink",
    "types": [
      "rock",
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 50,
      "defense": 150,
      "special_attack": 50,
      "special_defense": 150,
      "speed": 50
    },
    "base_experience": 100,
    "height": 3,
    "weight": 57,
    "abilities": [
      "clear-body",
      "sturdy"
    ]
  },
  {
    "id": 704,
    "name": "goomy",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 50,
      "defense": 35,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 40
    },
    "base_experience": 60,
    "height": 3,
    "weight": 28,
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ]
  },
  {
    "id": 705,
    "name": "sliggoo",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 75,
      "defense": 53,
      "special_attack": 83,
      "special_defense": 113,
      "speed": 60
    },
    "base_experience": 158,
    "height": 8,
    "weight": 175,
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ]
  },
  {
    "id": 706,
    "name": "goodra",
    "types": [
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 70,
      "special_attack": 110,
      "special_defense": 150,
      "speed": 80
    },
    "base_experience": 270,
    "height": 20,
    "weight": 1505,
    "abilities": [
      "sap-sipper",
      "hydration",
      "gooey"
    ]
  },
  {
    "id": 707,
    "name": "klefki",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 57,
      "attack": 80,
      "defense": 91,
      "special_attack": 80,
      "special_defense": 87,
      "speed": 75
    },
    "base_experience": 165,
    "height": 2,
    "weight": 30,
    "abilities": [
      "prankster",
      "magician"
    ]
  },
  {
    "id": 708,
    "name": "phantump",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 43,
      "attack": 70,
      "defense": 48,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 38
    },
    "base_experience": 62,
    "height": 4,
    "weight": 70,
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ]
  },
  {
    "id": 709,
    "name": "trevenant",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 110,
      "defense": 76,
      "special_attack": 65,
      "special_defense": 82,
      "speed": 56
    },
    "base_experience": 166,
    "height": 15,
    "weight": 710,
    "abilities": [
      "natural-cure",
      "frisk",
      "harvest"
    ]
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 49,
      "attack": 66,
      "defense": 70,
      "special_attack": 44,
      "special_defense": 55,
      "speed": 51
    },
    "base_experience": 67,
    "height": 4,
    "weight": 50,
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ]
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 90,
      "defense": 122,
      "special_attack": 58,
      "special_defense": 75,
      "speed": 84
    },
    "base_experience": 173,
    "height": 9,
    "weight": 125,
    "abilities": [
      "pickup",
      "frisk",
      "insomnia"
    ]
  },
  {
    "id": 712,
    "name": "bergmite",
    "types": [
      "ice"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 69,
      "defense": 85,
      "special_attack": 32,
      "special_defense": 35,
      "speed": 28
    },
    "base_experience": 61,
    "height": 10,
    "weight": 995,
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ]
  },
  {
    "id": 713,
    "name": "avalugg",
    "types": [
      "ice"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 117,
      "defense": 184,
      "special_attack": 44,
      "special_defense": 46,
      "speed": 28
    },
    "base_experience": 180,
    "height": 20,
    "weight": 5050,
    "abilities": [
      "own-tempo",
      "ice-body",
      "sturdy"
    ]
  },
  {
    "id": 714,
    "name": "noibat",
    "types": [
      "flying",
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 30,
      "defense": 35,
      "special_attack": 45,
      "special_defense": 40,
      "speed": 55
    },
    "base_experience": 49,
    "height": 5,
    "weight": 80,
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ]
  },
  {
    "id": 715,
    "name": "noivern",
    "types": [
      "flying",
      "dragon"
    ],
    "generation": 6,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 70,
      "defense": 80,
      "special_attack": 97,
      "special_defense": 80,
      "speed": 123
    },
    "base_experience": 187,
    "height": 15,
    "weight": 850,
    "abilities": [
      "frisk",
      "infiltrator",
      "telepathy"
    ]
  },
  {
    "id": 716,
    "name": "xerneas",
    "types": [
      "fairy"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special_attack": 131,
      "special_defense": 98,
      "speed": 99
    },
    "base_experience": 306,
    "height": 30,
    "weight": 2150,
    "abilities": [
      "fairy-aura"
    ]
  },
  {
    "id": 717,
    "name": "yveltal",
    "types": [
      "dark",
      "flying"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 126,
      "attack": 131,
      "defense": 95,
      "special_attack": 131,
      "special_defense": 98,
      "speed": 99
    },
    "base_experience": 306,
    "height": 58,
    "weight": 2030,
    "abilities": [
      "dark-aura"
    ]
  },
  {
    "id": 718,
    "name": "zygarde-50",
    "types": [
      "dragon",
      "ground"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 108,
      "attack": 100,
      "defense": 121,
      "special_attack": 81,
      "special_defense": 95,
      "speed": 95
    },
    "base_experience": 270,
    "height": 50,
    "weight": 3050,
    "abilities": [
      "aura-break"
    ]
  },
  {
    "id": 719,
    "name": "diancie",
    "types": [
      "rock",
      "fairy"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 50,
      "attack": 100,
      "defense": 150,
      "special_attack": 100,
      "special_defense": 150,
      "speed": 50
    },
    "base_experience": 270,
    "height": 7,
    "weight": 88,
    "abilities": [
      "clear-body"
    ]
  },
  {
    "id": 720,
    "name": "hoopa",
    "types": [
      "psychic",
      "ghost"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 60,
      "special_attack": 150,
      "special_defense": 130,
      "speed": 70
    },
    "base_experience": 270,
    "height": 5,
    "weight": 90,
    "abilities": [
      "magician"
    ]
  },
  {
    "id": 721,
    "name": "volcanion",
    "types": [
      "fire",
      "water"
    ],
    "generation": 6,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 110,
      "defense": 120,
      "special_attack": 130,
      "special_defense": 90,
      "speed": 70
    },
    "base_experience": 270,
    "height": 17,
    "weight": 1950,
    "abilities": [
      "water-absorb"
    ]
  },
  {
    "id": 722,
    "name": "rowlet",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 55,
      "defense": 55,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 42
    },
    "base_experience": 64,
    "height": 3,
    "weight": 15,
    "abilities": [
      "overgrow",
      "long-reach"
    ]
  },
  {
    "id": 723,
    "name": "dartrix",
    "types": [
      "grass",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 75,
      "defense": 75,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 52
    },
    "base_experience": 147,
    "height": 7,
    "weight": 160,
    "abilities": [
      "overgrow",
      "long-reach"
    ]
  },
  {
    "id": 724,
    "name": "decidueye",
    "types": [
      "grass",
      "ghost"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 107,
      "defense": 75,
      "special_attack": 100,
      "special_defense": 100,
      "speed": 70
    },
    "base_experience": 239,
    "height": 16,
    "weight": 366,
    "abilities": [
      "overgrow",
      "long-reach"
    ]
  },
  {
    "id": 725,
    "name": "litten",
    "types": [
      "fire"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special_attack": 60,
      "special_defense": 40,
      "speed": 70
    },
    "base_experience": 64,
    "height": 4,
    "weight": 43,
    "abilities": [
      "blaze",
      "intimidate"
    ]
  },
  {
    "id": 726,
    "name": "torracat",
    "types": [
      "fire"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 85,
      "defense": 50,
      "special_attack": 80,
      "special_defense": 50,
      "speed": 90
    },
    "base_experience": 147,
    "height": 7,
    "weight": 250,
    "abilities": [
      "blaze",
      "intimidate"
    ]
  },
  {
    "id": 727,
    "name": "incineroar",
    "types": [
      "fire",
      "dark"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 115,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 60
    },
    "base_experience": 239,
    "height": 18,
    "weight": 830,
    "abilities": [
      "blaze",
      "intimidate"
    ]
  },
  {
    "id": 728,
    "name": "popplio",
    "types": [
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 54,
      "defense": 54,
      "special_attack": 66,
      "special_defense": 56,
      "speed": 40
    },
    "base_experience": 64,
    "height": 4,
    "weight": 75,
    "abilities": [
      "torrent",
      "liquid-voice"
    ]
  },
  {
    "id": 729,
    "name": "brionne",
    "types": [
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 69,
      "defense": 69,
      "special_attack": 91,
      "special_defense": 81,
      "speed": 50
    },
    "base_experience": 147,
    "height": 6,
    "weight": 175,
    "abilities": [
      "torrent",
      "liquid-voice"
    ]
  },
  {
    "id": 730,
    "name": "primarina",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 74,
      "defense": 74,
      "special_attack": 126,
      "special_defense": 116,
      "speed": 60
    },
    "base_experience": 239,
    "height": 18,
    "weight": 440,
    "abilities": [
      "torrent",
      "liquid-voice"
    ]
  },
  {
    "id": 731,
    "name": "pikipek",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 35,
      "attack": 75,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 65
    },
    "base_experience": 53,
    "height": 3,
    "weight": 12,
    "abilities": [
      "keen-eye",
      "skill-link",
      "pickup"
    ]
  },
  {
    "id": 732,
    "name": "trumbeak",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 85,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 75
    },
    "base_experience": 124,
    "height": 6,
    "weight": 148,
    "abilities": [
      "keen-eye",
      "skill-link",
      "pickup"
    ]
  },
  {
    "id": 733,
    "name": "toucannon",
    "types": [
      "normal",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 120,
      "defense": 75,
      "special_attack": 75,
      "special_defense": 75,
      "speed": 60
    },
    "base_experience": 218,
    "height": 11,
    "weight": 260,
    "abilities": [
      "keen-eye",
      "skill-link",
      "sheer-force"
    ]
  },
  {
    "id": 734,
    "name": "yungoos",
    "types": [
      "normal"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 70,
      "defense": 30,
      "special_attack": 30,
      "special_defense": 30,
      "speed": 45
    },
    "base_experience": 51,
    "height": 4,
    "weight": 60,
    "abilities": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ]
  },
  {
    "id": 735,
    "name": "gumshoos",
    "types": [
      "normal"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 88,
      "attack": 110,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 45
    },
    "base_experience": 146,
    "height": 7,
    "weight": 142,
    "abilities": [
      "stakeout",
      "strong-jaw",
      "adaptability"
    ]
  },
  {
    "id": 736,
    "name": "grubbin",
    "types": [
      "bug"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 47,
      "attack": 62,
      "defense": 45,
      "special_attack": 55,
      "special_defense": 45,
      "speed": 46
    },
    "base_experience": 60,
    "height": 4,
    "weight": 44,
    "abilities": [
      "swarm"
    ]
  },
  {
    "id": 737,
    "name": "charjabug",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 57,
      "attack": 82,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 36
    },
    "base_experience": 140,
    "height": 5,
    "weight": 105,
    "abilities": [
      "battery"
    ]
  },
  {
    "id": 738,
    "name": "vikavolt",
    "types": [
      "bug",
      "electric"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 77,
      "attack": 70,
      "defense": 90,
      "special_attack": 145,
      "special_defense": 75,
      "speed": 43
    },
    "base_experience": 225,
    "height": 15,
    "weight": 450,
    "abilities": [
      "levitate"
    ]
  },
  {
    "id": 739,
    "name": "crabrawler",
    "types": [
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 47,
      "attack": 82,
      "defense": 57,
      "special_attack": 42,
      "special_defense": 47,
      "speed": 63
    },
    "base_experience": 68,
    "height": 6,
    "weight": 70,
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ]
  },
  {
    "id": 740,
    "name": "crabominable",
    "types": [
      "fighting",
      "ice"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 97,
      "attack": 132,
      "defense": 77,
      "special_attack": 62,
      "special_defense": 67,
      "speed": 43
    },
    "base_experience": 167,
    "height": 17,
    "weight": 1800,
    "abilities": [
      "hyper-cutter",
      "iron-fist",
      "anger-point"
    ]
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "types": [
      "fire",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 70,
      "defense": 70,
      "special_attack": 98,
      "special_defense": 70,
      "speed": 93
    },
    "base_experience": 167,
    "height": 6,
    "weight": 34,
    "abilities": [
      "dancer"
    ]
  },
  {
    "id": 742,
    "name": "cutiefly",
    "types": [
      "bug",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 40,
      "special_attack": 55,
      "special_defense": 40,
      "speed": 84
    },
    "base_experience": 61,
    "height": 1,
    "weight": 2,
    "abilities": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ]
  },
  {
    "id": 743,
    "name": "ribombee",
    "types": [
      "bug",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 55,
      "defense": 60,
      "special_attack": 95,
      "special_defense": 70,
      "speed": 124
    },
    "base_experience": 162,
    "height": 2,
    "weight": 5,
    "abilities": [
      "honey-gather",
      "shield-dust",
      "sweet-veil"
    ]
  },
  {
    "id": 744,
    "name": "rockruff",
    "types": [
      "rock"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 65,
      "defense": 40,
      "special_attack": 30,
      "special_defense": 40,
      "speed": 60
    },
    "base_experience": 56,
    "height": 5,
    "weight": 92,
    "abilities": [
      "keen-eye",
      "vital-spirit",
      "steadfast"
    ]
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "types": [
      "rock"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 115,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 65,
      "speed": 112
    },
    "base_experience": 170,
    "height": 8,
    "weight": 250,
    "abilities": [
      "keen-eye",
      "sand-rush",
      "steadfast"
    ]
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "types": [
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 20,
      "defense": 20,
      "special_attack": 25,
      "special_defense": 25,
      "speed": 40
    },
    "base_experience": 61,
    "height": 2,
    "weight": 3,
    "abilities": [
      "schooling"
    ]
  },
  {
    "id": 747,
    "name": "mareanie",
    "types": [
      "poison",
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 53,
      "defense": 62,
      "special_attack": 43,
      "special_defense": 52,
      "speed": 45
    },
    "base_experience": 61,
    "height": 4,
    "weight": 80,
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ]
  },
  {
    "id": 748,
    "name": "toxapex",
    "types": [
      "poison",
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 63,
      "defense": 152,
      "special_attack": 53,
      "special_defense": 142,
      "speed": 35
    },
    "base_experience": 173,
    "height": 7,
    "weight": 145,
    "abilities": [
      "merciless",
      "limber",
      "regenerator"
    ]
  },
  {
    "id": 749,
    "name": "mudbray",
    "types": [
      "ground"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 100,
      "defense": 70,
      "special_attack": 45,
      "special_defense": 55,
      "speed": 45
    },
    "base_experience": 77,
    "height": 10,
    "weight": 1100,
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ]
  },
  {
    "id": 750,
    "name": "mudsdale",
    "types": [
      "ground"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 100,
      "special_attack": 55,
      "special_defense": 85,
      "speed": 35
    },
    "base_experience": 175,
    "height": 25,
    "weight": 9200,
    "abilities": [
      "own-tempo",
      "stamina",
      "inner-focus"
    ]
  },
  {
    "id": 751,
    "name": "dewpider",
    "types": [
      "water",
      "bug"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 40,
      "defense": 52,
      "special_attack": 40,
      "special_defense": 72,
      "speed": 27
    },
    "base_experience": 54,
    "height": 3,
    "weight": 40,
    "abilities": [
      "water-bubble",
      "water-absorb"
    ]
  },
  {
    "id": 752,
    "name": "araquanid",
    "types": [
      "water",
      "bug"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 70,
      "defense": 92,
      "special_attack": 50,
      "special_defense": 132,
      "speed": 42
    },
    "base_experience": 159,
    "height": 18,
    "weight": 820,
    "abilities": [
      "water-bubble",
      "water-absorb"
    ]
  },
  {
    "id": 753,
    "name": "fomantis",
    "types": [
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 55,
      "defense": 35,
      "special_attack": 50,
      "special_defense": 35,
      "speed": 35
    },
    "base_experience": 50,
    "height": 3,
    "weight": 15,
    "abilities": [
      "leaf-guard",
      "contrary"
    ]
  },
  {
    "id": 754,
    "name": "lurantis",
    "types": [
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 105,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 45
    },
    "base_experience": 168,
    "height": 9,
    "weight": 185,
    "abilities": [
      "leaf-guard",
      "contrary"
    ]
  },
  {
    "id": 755,
    "name": "morelull",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 35,
      "defense": 55,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 15
    },
    "base_experience": 57,
    "height": 2,
    "weight": 15,
    "abilities": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ]
  },
  {
    "id": 756,
    "name": "shiinotic",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 100,
      "speed": 30
    },
    "base_experience": 142,
    "height": 10,
    "weight": 115,
    "abilities": [
      "illuminate",
      "effect-spore",
      "rain-dish"
    ]
  },
  {
    "id": 757,
    "name": "salandit",
    "types": [
      "poison",
      "fire"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 44,
      "defense": 40,
      "special_attack": 71,
      "special_defense": 40,
      "speed": 77
    },
    "base_experience": 64,
    "height": 6,
    "weight": 48,
    "abilities": [
      "corrosion",
      "oblivious"
    ]
  },
  {
    "id": 758,
    "name": "salazzle",
    "types": [
      "poison",
      "fire"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 64,
      "defense": 60,
      "special_attack": 111,
      "special_defense": 60,
      "speed": 117
    },
    "base_experience": 168,
    "height": 12,
    "weight": 222,
    "abilities": [
      "corrosion",
      "oblivious"
    ]
  },
  {
    "id": 759,
    "name": "stufful",
    "types": [
      "normal",
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 50,
      "special_attack": 45,
      "special_defense": 50,
      "speed": 50
    },
    "base_experience": 68,
    "height": 5,
    "weight": 68,
    "abilities": [
      "fluffy",
      "klutz",
      "cute-charm"
    ]
  },
  {
    "id": 760,
    "name": "bewear",
    "types": [
      "normal",
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 120,
      "attack": 125,
      "defense": 80,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 60
    },
    "base_experience": 175,
    "height": 21,
    "weight": 1350,
    "abilities": [
      "fluffy",
      "klutz",
      "unnerve"
    ]
  },
  {
    "id": 761,
    "name": "bounsweet",
    "types": [
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 38,
      "special_attack": 30,
      "special_defense": 38,
      "speed": 32
    },
    "base_experience": 42,
    "height": 3,
    "weight": 32,
    "abilities": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ]
  },
  {
    "id": 762,
    "name": "steenee",
    "types": [
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 52,
      "attack": 40,
      "defense": 48,
      "special_attack": 40,
      "special_defense": 48,
      "speed": 62
    },
    "base_experience": 102,
    "height": 7,
    "weight": 82,
    "abilities": [
      "leaf-guard",
      "oblivious",
      "sweet-veil"
    ]
  },
  {
    "id": 763,
    "name": "tsareena",
    "types": [
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 120,
      "defense": 98,
      "special_attack": 50,
      "special_defense": 98,
      "speed": 72
    },
    "base_experience": 230,
    "height": 12,
    "weight": 214,
    "abilities": [
      "leaf-guard",
      "queenly-majesty",
      "sweet-veil"
    ]
  },
  {
    "id": 764,
    "name": "comfey",
    "types": [
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 51,
      "attack": 52,
      "defense": 90,
      "special_attack": 82,
      "special_defense": 110,
      "speed": 100
    },
    "base_experience": 170,
    "height": 1,
    "weight": 3,
    "abilities": [
      "flower-veil",
      "triage",
      "natural-cure"
    ]
  },
  {
    "id": 765,
    "name": "oranguru",
    "types": [
      "normal",
      "psychic"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 60,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 110,
      "speed": 60
    },
    "base_experience": 172,
    "height": 15,
    "weight": 760,
    "abilities": [
      "inner-focus",
      "telepathy",
      "symbiosis"
    ]
  },
  {
    "id": 766,
    "name": "passimian",
    "types": [
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 120,
      "defense": 90,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 80
    },
    "base_experience": 172,
    "height": 20,
    "weight": 828,
    "abilities": [
      "receiver",
      "defiant"
    ]
  },
  {
    "id": 767,
    "name": "wimpod",
    "types": [
      "bug",
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 25,
      "attack": 35,
      "defense": 40,
      "special_attack": 20,
      "special_defense": 30,
      "speed": 80
    },
    "base_experience": 46,
    "height": 5,
    "weight": 120,
    "abilities": [
      "wimp-out"
    ]
  },
  {
    "id": 768,
    "name": "golisopod",
    "types": [
      "bug",
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 125,
      "defense": 140,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 40
    },
    "base_experience": 186,
    "height": 20,
    "weight": 1080,
    "abilities": [
      "emergency-exit"
    ]
  },
  {
    "id": 769,
    "name": "sandygast",
    "types": [
      "ghost",
      "ground"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 55,
      "defense": 80,
      "special_attack": 70,
      "special_defense": 45,
      "speed": 15
    },
    "base_experience": 64,
    "height": 5,
    "weight": 700,
    "abilities": [
      "water-compaction",
      "sand-veil"
    ]
  },
  {
    "id": 770,
    "name": "palossand",
    "types": [
      "ghost",
      "ground"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 85,
      "attack": 75,
      "defense": 110,
      "special_attack": 100,
      "special_defense": 75,
      "speed": 35
    },
    "base_experience": 168,
    "height": 13,
    "weight": 2500,
    "abilities": [
      "water-compaction",
      "sand-veil"
    ]
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "types": [
      "water"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 60,
      "defense": 130,
      "special_attack": 30,
      "special_defense": 130,
      "speed": 5
    },
    "base_experience": 144,
    "height": 3,
    "weight": 12,
    "abilities": [
      "innards-out",
      "unaware"
    ]
  },
  {
    "id": 772,
    "name": "type-null",
    "types": [
      "normal"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 59
    },
    "base_experience": 107,
    "height": 19,
    "weight": 1205,
    "abilities": [
      "battle-armor"
    ]
  },
  {
    "id": 773,
    "name": "silvally",
    "types": [
      "normal"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 95,
      "attack": 95,
      "defense": 95,
      "special_attack": 95,
      "special_defense": 95,
      "speed": 95
    },
    "base_experience": 257,
    "height": 23,
    "weight": 1005,
    "abilities": [
      "rks-system"
    ]
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "types": [
      "rock",
      "flying"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 60,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 100,
      "speed": 60
    },
    "base_experience": 154,
    "height": 3,
    "weight": 400,
    "abilities": [
      "shields-down"
    ]
  },
  {
    "id": 775,
    "name": "komala",
    "types": [
      "normal"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 115,
      "defense": 65,
      "special_attack": 75,
      "special_defense": 95,
      "speed": 65
    },
    "base_experience": 168,
    "height": 4,
    "weight": 199,
    "abilities": [
      "comatose"
    ]
  },
  {
    "id": 776,
    "name": "turtonator",
    "types": [
      "fire",
      "dragon"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 78,
      "defense": 135,
      "special_attack": 91,
      "special_defense": 85,
      "speed": 36
    },
    "base_experience": 170,
    "height": 20,
    "weight": 2120,
    "abilities": [
      "shell-armor"
    ]
  },
  {
    "id": 777,
    "name": "togedemaru",
    "types": [
      "electric",
      "steel"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 98,
      "defense": 63,
      "special_attack": 40,
      "special_defense": 73,
      "speed": 96
    },
    "base_experience": 152,
    "height": 3,
    "weight": 33,
    "abilities": [
      "iron-barbs",
      "lightning-rod",
      "sturdy"
    ]
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "types": [
      "ghost",
      "fairy"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 90,
      "defense": 80,
      "special_attack": 50,
      "special_defense": 105,
      "speed": 96
    },
    "base_experience": 167,
    "height": 2,
    "weight": 7,
    "abilities": [
      "disguise"
    ]
  },
  {
    "id": 779,
    "name": "bruxish",
    "types": [
      "water",
      "psychic"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 105,
      "defense": 70,
      "special_attack": 70,
      "special_defense": 70,
      "speed": 92
    },
    "base_experience": 166,
    "height": 9,
    "weight": 190,
    "abilities": [
      "dazzling",
      "strong-jaw",
      "wonder-skin"
    ]
  },
  {
    "id": 780,
    "name": "drampa",
    "types": [
      "normal",
      "dragon"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 78,
      "attack": 60,
      "defense": 85,
      "special_attack": 135,
      "special_defense": 91,
      "speed": 36
    },
    "base_experience": 170,
    "height": 30,
    "weight": 1850,
    "abilities": [
      "berserk",
      "sap-sipper",
      "cloud-nine"
    ]
  },
  {
    "id": 781,
    "name": "dhelmise",
    "types": [
      "ghost",
      "grass"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 131,
      "defense": 100,
      "special_attack": 86,
      "special_defense": 90,
      "speed": 40
    },
    "base_experience": 181,
    "height": 39,
    "weight": 2100,
    "abilities": [
      "steelworker"
    ]
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "types": [
      "dragon"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 55,
      "defense": 65,
      "special_attack": 45,
      "special_defense": 45,
      "speed": 45
    },
    "base_experience": 60,
    "height": 6,
    "weight": 297,
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ]
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 55,
      "attack": 75,
      "defense": 90,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 65
    },
    "base_experience": 147,
    "height": 12,
    "weight": 470,
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ]
  },
  {
    "id": 784,
    "name": "kommo-o",
    "types": [
      "dragon",
      "fighting"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 110,
      "defense": 125,
      "special_attack": 100,
      "special_defense": 105,
      "speed": 85
    },
    "base_experience": 270,
    "height": 16,
    "weight": 782,
    "abilities": [
      "bulletproof",
      "soundproof",
      "overcoat"
    ]
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "types": [
      "electric",
      "fairy"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 70,
      "attack": 115,
      "defense": 85,
      "special_attack": 95,
      "special_defense": 75,
      "speed": 130
    },
    "base_experience": 257,
    "height": 18,
    "weight": 205,
    "abilities": [
      "electric-surge",
      "telepathy"
    ]
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 75,
      "special_attack": 130,
      "special_defense": 115,
      "speed": 95
    },
    "base_experience": 257,
    "height": 12,
    "weight": 186,
    "abilities": [
      "psychic-surge",
      "telepathy"
    ]
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "types": [
      "grass",
      "fairy"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 70,
      "attack": 130,
      "defense": 115,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 75
    },
    "base_experience": 257,
    "height": 19,
    "weight": 455,
    "abilities": [
      "grassy-surge",
      "telepathy"
    ]
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "types": [
      "water",
      "fairy"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 70,
      "attack": 75,
      "defense": 115,
      "special_attack": 95,
      "special_defense": 130,
      "speed": 85
    },
    "base_experience": 257,
    "height": 13,
    "weight": 212,
    "abilities": [
      "misty-surge",
      "telepathy"
    ]
  },
  {
    "id": 789,
    "name": "cosmog",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 31,
      "special_attack": 29,
      "special_defense": 31,
      "speed": 37
    },
    "base_experience": 40,
    "height": 2,
    "weight": 1,
    "abilities": [
      "unaware"
    ]
  },
  {
    "id": 790,
    "name": "cosmoem",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 43,
      "attack": 29,
      "defense": 131,
      "special_attack": 29,
      "special_defense": 131,
      "speed": 37
    },
    "base_experience": 140,
    "height": 1,
    "weight": 9999,
    "abilities": [
      "sturdy"
    ]
  },
  {
    "id": 791,
    "name": "solgaleo",
    "types": [
      "psychic",
      "steel"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 137,
      "attack": 137,
      "defense": 107,
      "special_attack": 113,
      "special_defense": 89,
      "speed": 97
    },
    "base_experience": 306,
    "height": 34,
    "weight": 2300,
    "abilities": [
      "full-metal-body"
    ]
  },
  {
    "id": 792,
    "name": "lunala",
    "types": [
      "psychic",
      "ghost"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 137,
      "attack": 113,
      "defense": 89,
      "special_attack": 137,
      "special_defense": 107,
      "speed": 97
    },
    "base_experience": 306,
    "height": 40,
    "weight": 1200,
    "abilities": [
      "shadow-shield"
    ]
  },
  {
    "id": 793,
    "name": "nihilego",
    "types": [
      "rock",
      "poison"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 109,
      "attack": 53,
      "defense": 47,
      "special_attack": 127,
      "special_defense": 131,
      "speed": 103
    },
    "base_experience": 257,
    "height": 12,
    "weight": 555,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 794,
    "name": "buzzwole",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 107,
      "attack": 139,
      "defense": 139,
      "special_attack": 53,
      "special_defense": 53,
      "speed": 79
    },
    "base_experience": 257,
    "height": 24,
    "weight": 3336,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 795,
    "name": "pheromosa",
    "types": [
      "bug",
      "fighting"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 71,
      "attack": 137,
      "defense": 37,
      "special_attack": 137,
      "special_defense": 37,
      "speed": 151
    },
    "base_experience": 257,
    "height": 18,
    "weight": 250,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 796,
    "name": "xurkitree",
    "types": [
      "electric"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 83,
      "attack": 89,
      "defense": 71,
      "special_attack": 173,
      "special_defense": 71,
      "speed": 83
    },
    "base_experience": 257,
    "height": 38,
    "weight": 1000,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 797,
    "name": "celesteela",
    "types": [
      "steel",
      "flying"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 97,
      "attack": 101,
      "defense": 103,
      "special_attack": 107,
      "special_defense": 101,
      "speed": 61
    },
    "base_experience": 257,
    "height": 92,
    "weight": 9999,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 798,
    "name": "kartana",
    "types": [
      "grass",
      "steel"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 59,
      "attack": 181,
      "defense": 131,
      "special_attack": 59,
      "special_defense": 31,
      "speed": 109
    },
    "base_experience": 257,
    "height": 3,
    "weight": 1,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 799,
    "name": "guzzlord",
    "types": [
      "dark",
      "dragon"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 223,
      "attack": 101,
      "defense": 53,
      "special_attack": 97,
      "special_defense": 53,
      "speed": 43
    },
    "base_experience": 257,
    "height": 55,
    "weight": 8880,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 800,
    "name": "necrozma",
    "types": [
      "psychic"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 97,
      "attack": 107,
      "defense": 101,
      "special_attack": 127,
      "special_defense": 89,
      "speed": 79
    },
    "base_experience": 270,
    "height": 24,
    "weight": 2300,
    "abilities": [
      "prism-armor"
    ]
  },
  {
    "id": 801,
    "name": "magearna",
    "types": [
      "steel",
      "fairy"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 95,
      "defense": 115,
      "special_attack": 130,
      "special_defense": 115,
      "speed": 65
    },
    "base_experience": 270,
    "height": 10,
    "weight": 805,
    "abilities": [
      "soul-heart"
    ]
  },
  {
    "id": 802,
    "name": "marshadow",
    "types": [
      "fighting",
      "ghost"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 90,
      "attack": 125,
      "defense": 80,
      "special_attack": 90,
      "special_defense": 90,
      "speed": 125
    },
    "base_experience": 270,
    "height": 7,
    "weight": 222,
    "abilities": [
      "technician"
    ]
  },
  {
    "id": 803,
    "name": "poipole",
    "types": [
      "poison"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 67,
      "attack": 73,
      "defense": 67,
      "special_attack": 73,
      "special_defense": 67,
      "speed": 73
    },
    "base_experience": 189,
    "height": 6,
    "weight": 18,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 804,
    "name": "naganadel",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 73,
      "attack": 73,
      "defense": 73,
      "special_attack": 127,
      "special_defense": 73,
      "speed": 121
    },
    "base_experience": 243,
    "height": 36,
    "weight": 1500,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 805,
    "name": "stakataka",
    "types": [
      "rock",
      "steel"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 131,
      "defense": 211,
      "special_attack": 53,
      "special_defense": 101,
      "speed": 13
    },
    "base_experience": 257,
    "height": 55,
    "weight": 8200,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 806,
    "name": "blacephalon",
    "types": [
      "fire",
      "ghost"
    ],
    "generation": 7,
    "legendary": false,
    "stats": {
      "hp": 53,
      "attack": 127,
      "defense": 53,
      "special_attack": 151,
      "special_defense": 79,
      "speed": 107
    },
    "base_experience": 257,
    "height": 18,
    "weight": 130,
    "abilities": [
      "beast-boost"
    ]
  },
  {
    "id": 807,
    "name": "zeraora",
    "types": [
      "electric"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 88,
      "attack": 112,
      "defense": 75,
      "special_attack": 102,
      "special_defense": 80,
      "speed": 143
    },
    "base_experience": 270,
    "height": 15,
    "weight": 445,
    "abilities": [
      "volt-absorb"
    ]
  },
  {
    "id": 808,
    "name": "meltan",
    "types": [
      "steel"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 46,
      "attack": 65,
      "defense": 65,
      "special_attack": 55,
      "special_defense": 35,
      "speed": 34
    },
    "base_experience": 135,
    "height": 2,
    "weight": 80,
    "abilities": [
      "magnet-pull"
    ]
  },
  {
    "id": 809,
    "name": "melmetal",
    "types": [
      "steel"
    ],
    "generation": 7,
    "legendary": true,
    "stats": {
      "hp": 135,
      "attack": 143,
      "defense": 143,
      "special_attack": 80,
      "special_defense": 65,
      "speed": 34
    },
    "base_experience": 270,
    "height": 25,
    "weight": 8000,
    "abilities": [
      "iron-fist"
    ]
  },
  {
    "id": 810,
    "name": "grookey",
    "types": [
      "grass"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 65
    },
    "base_experience": 62,
    "height": 3,
    "weight": 50,
    "abilities": [
      "overgrow",
      "grassy-surge"
    ]
  },
  {
    "id": 811,
    "name": "thwackey",
    "types": [
      "grass"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 70,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 80
    },
    "base_experience": 147,
    "height": 7,
    "weight": 140,
    "abilities": [
      "overgrow",
      "grassy-surge"
    ]
  },
  {
    "id": 812,
    "name": "rillaboom",
    "types": [
      "grass"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 85
    },
    "base_experience": 265,
    "height": 21,
    "weight": 900,
    "abilities": [
      "overgrow",
      "grassy-surge"
    ]
  },
  {
    "id": 813,
    "name": "scorbunny",
    "types": [
      "fire"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 71,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 69
    },
    "base_experience": 62,
    "height": 3,
    "weight": 45,
    "abilities": [
      "blaze",
      "libero"
    ]
  },
  {
    "id": 814,
    "name": "raboot",
    "types": [
      "fire"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 86,
      "defense": 60,
      "special_attack": 55,
      "special_defense": 60,
      "speed": 94
    },
    "base_experience": 147,
    "height": 6,
    "weight": 90,
    "abilities": [
      "blaze",
      "libero"
    ]
  },
  {
    "id": 815,
    "name": "cinderace",
    "types": [
      "fire"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 116,
      "defense": 75,
      "special_attack": 65,
      "special_defense": 75,
      "speed": 119
    },
    "base_experience": 265,
    "height": 14,
    "weight": 330,
    "abilities": [
      "blaze",
      "libero"
    ]
  },
  {
    "id": 816,
    "name": "sobble",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 40,
      "defense": 40,
      "special_attack": 70,
      "special_defense": 40,
      "speed": 70
    },
    "base_experience": 62,
    "height": 3,
    "weight": 40,
    "abilities": [
      "torrent",
      "sniper"
    ]
  },
  {
    "id": 817,
    "name": "drizzile",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 55,
      "special_attack": 95,
      "special_defense": 55,
      "speed": 90
    },
    "base_experience": 147,
    "height": 7,
    "weight": 115,
    "abilities": [
      "torrent",
      "sniper"
    ]
  },
  {
    "id": 818,
    "name": "inteleon",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 65,
      "special_attack": 125,
      "special_defense": 65,
      "speed": 120
    },
    "base_experience": 265,
    "height": 19,
    "weight": 452,
    "abilities": [
      "torrent",
      "sniper"
    ]
  },
  {
    "id": 819,
    "name": "skwovet",
    "types": [
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 55,
      "defense": 55,
      "special_attack": 35,
      "special_defense": 35,
      "speed": 25
    },
    "base_experience": 55,
    "height": 3,
    "weight": 25,
    "abilities": [
      "cheek-pouch",
      "gluttony"
    ]
  },
  {
    "id": 820,
    "name": "greedent",
    "types": [
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 120,
      "attack": 95,
      "defense": 95,
      "special_attack": 55,
      "special_defense": 75,
      "speed": 20
    },
    "base_experience": 161,
    "height": 6,
    "weight": 60,
    "abilities": [
      "cheek-pouch",
      "gluttony"
    ]
  },
  {
    "id": 821,
    "name": "rookidee",
    "types": [
      "flying"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 38,
      "attack": 47,
      "defense": 35,
      "special_attack": 33,
      "special_defense": 35,
      "speed": 57
    },
    "base_experience": 49,
    "height": 2,
    "weight": 18,
    "abilities": [
      "keen-eye",
      "unnerve",
      "big-pecks"
    ]
  },
  {
    "id": 822,
    "name": "corvisquire",
    "types": [
      "flying"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 67,
      "defense": 55,
      "special_attack": 43,
      "special_defense": 55,
      "speed": 77
    },
    "base_experience": 128,
    "height": 8,
    "weight": 160,
    "abilities": [
      "keen-eye",
      "unnerve",
      "big-pecks"
    ]
  },
  {
    "id": 823,
    "name": "corviknight",
    "types": [
      "flying",
      "steel"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 98,
      "attack": 87,
      "defense": 105,
      "special_attack": 53,
      "special_defense": 85,
      "speed": 67
    },
    "base_experience": 248,
    "height": 22,
    "weight": 750,
    "abilities": [
      "pressure",
      "unnerve",
      "mirror-armor"
    ]
  },
  {
    "id": 824,
    "name": "blipbug",
    "types": [
      "bug"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 25,
      "attack": 20,
      "defense": 20,
      "special_attack": 25,
      "special_defense": 45,
      "speed": 45
    },
    "base_experience": 36,
    "height": 4,
    "weight": 80,
    "abilities": [
      "swarm",
      "compound-eyes",
      "telepathy"
    ]
  },
  {
    "id": 825,
    "name": "dottler",
    "types": [
      "bug",
      "psychic"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 35,
      "defense": 80,
      "special_attack": 50,
      "special_defense": 90,
      "speed": 30
    },
    "base_experience": 117,
    "height": 4,
    "weight": 195,
    "abilities": [
      "swarm",
      "compound-eyes",
      "telepathy"
    ]
  },
  {
    "id": 826,
    "name": "orbeetle",
    "types": [
      "bug",
      "psychic"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 45,
      "defense": 110,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 90
    },
    "base_experience": 253,
    "height": 4,
    "weight": 408,
    "abilities": [
      "swarm",
      "frisk",
      "telepathy"
    ]
  },
  {
    "id": 827,
    "name": "nickit",
    "types": [
      "dark"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 28,
      "defense": 28,
      "special_attack": 47,
      "special_defense": 52,
      "speed": 50
    },
    "base_experience": 49,
    "height": 6,
    "weight": 89,
    "abilities": [
      "run-away",
      "unburden",
      "stakeout"
    ]
  },
  {
    "id": 828,
    "name": "thievul",
    "types": [
      "dark"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 58,
      "defense": 58,
      "special_attack": 87,
      "special_defense": 92,
      "speed": 90
    },
    "base_experience": 159,
    "height": 12,
    "weight": 199,
    "abilities": [
      "run-away",
      "unburden",
      "stakeout"
    ]
  },
  {
    "id": 829,
    "name": "gossifleur",
    "types": [
      "grass"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 60,
      "special_attack": 40,
      "special_defense": 60,
      "speed": 10
    },
    "base_experience": 50,
    "height": 4,
    "weight": 22,
    "abilities": [
      "cotton-down",
      "regenerator",
      "effect-spore"
    ]
  },
  {
    "id": 830,
    "name": "eldegoss",
    "types": [
      "grass"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 50,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 120,
      "speed": 60
    },
    "base_experience": 161,
    "height": 5,
    "weight": 25,
    "abilities": [
      "cotton-down",
      "regenerator",
      "effect-spore"
    ]
  },
  {
    "id": 831,
    "name": "wooloo",
    "types": [
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 42,
      "attack": 40,
      "defense": 55,
      "special_attack": 40,
      "special_defense": 45,
      "speed": 48
    },
    "base_experience": 122,
    "height": 6,
    "weight": 60,
    "abilities": [
      "fluffy",
      "run-away",
      "bulletproof"
    ]
  },
  {
    "id": 832,
    "name": "dubwool",
    "types": [
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 100,
      "special_attack": 60,
      "special_defense": 90,
      "speed": 88
    },
    "base_experience": 172,
    "height": 13,
    "weight": 430,
    "abilities": [
      "fluffy",
      "steadfast",
      "bulletproof"
    ]
  },
  {
    "id": 833,
    "name": "chewtle",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 64,
      "defense": 50,
      "special_attack": 38,
      "special_defense": 38,
      "speed": 44
    },
    "base_experience": 57,
    "height": 3,
    "weight": 85,
    "abilities": [
      "strong-jaw",
      "shell-armor",
      "swift-swim"
    ]
  },
  {
    "id": 834,
    "name": "drednaw",
    "types": [
      "water",
      "rock"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 115,
      "defense": 90,
      "special_attack": 48,
      "special_defense": 68,
      "speed": 74
    },
    "base_experience": 170,
    "height": 10,
    "weight": 1155,
    "abilities": [
      "strong-jaw",
      "shell-armor",
      "swift-swim"
    ]
  },
  {
    "id": 835,
    "name": "yamper",
    "types": [
      "electric"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 59,
      "attack": 45,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 26
    },
    "base_experience": 54,
    "height": 3,
    "weight": 135,
    "abilities": [
      "ball-fetch",
      "rattled"
    ]
  },
  {
    "id": 836,
    "name": "boltund",
    "types": [
      "electric"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 69,
      "attack": 90,
      "defense": 60,
      "special_attack": 90,
      "special_defense": 60,
      "speed": 121
    },
    "base_experience": 172,
    "height": 10,
    "weight": 340,
    "abilities": [
      "strong-jaw",
      "competitive"
    ]
  },
  {
    "id": 837,
    "name": "rolycoly",
    "types": [
      "rock"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 40,
      "defense": 50,
      "special_attack": 40,
      "special_defense": 50,
      "speed": 30
    },
    "base_experience": 48,
    "height": 3,
    "weight": 120,
    "abilities": [
      "steam-engine",
      "heatproof",
      "flash-fire"
    ]
  },
  {
    "id": 838,
    "name": "carkol",
    "types": [
      "rock",
      "fire"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 60,
      "defense": 90,
      "special_attack": 60,
      "special_defense": 70,
      "speed": 50
    },
    "base_experience": 144,
    "height": 11,
    "weight": 780,
    "abilities": [
      "steam-engine",
      "flame-body",
      "flash-fire"
    ]
  },
  {
    "id": 839,
    "name": "coalossal",
    "types": [
      "rock",
      "fire"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 80,
      "defense": 120,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 30
    },
    "base_experience": 255,
    "height": 28,
    "weight": 3105,
    "abilities": [
      "steam-engine",
      "flame-body",
      "flash-fire"
    ]
  },
  {
    "id": 840,
    "name": "applin",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 40,
      "defense": 80,
      "special_attack": 40,
      "special_defense": 40,
      "speed": 20
    },
    "base_experience": 52,
    "height": 2,
    "weight": 5,
    "abilities": [
      "ripen",
      "gluttony",
      "bulletproof"
    ]
  },
  {
    "id": 841,
    "name": "flapple",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 80,
      "special_attack": 95,
      "special_defense": 60,
      "speed": 70
    },
    "base_experience": 170,
    "height": 3,
    "weight": 10,
    "abilities": [
      "ripen",
      "gluttony",
      "hustle"
    ]
  },
  {
    "id": 842,
    "name": "appletun",
    "types": [
      "grass",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 110,
      "attack": 85,
      "defense": 80,
      "special_attack": 100,
      "special_defense": 80,
      "speed": 30
    },
    "base_experience": 170,
    "height": 4,
    "weight": 130,
    "abilities": [
      "ripen",
      "gluttony",
      "thick-fat"
    ]
  },
  {
    "id": 843,
    "name": "silicobra",
    "types": [
      "ground"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 52,
      "attack": 57,
      "defense": 75,
      "special_attack": 35,
      "special_defense": 50,
      "speed": 46
    },
    "base_experience": 63,
    "height": 22,
    "weight": 76,
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ]
  },
  {
    "id": 844,
    "name": "sandaconda",
    "types": [
      "ground"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 107,
      "defense": 125,
      "special_attack": 65,
      "special_defense": 70,
      "speed": 71
    },
    "base_experience": 179,
    "height": 38,
    "weight": 655,
    "abilities": [
      "sand-spit",
      "shed-skin",
      "sand-veil"
    ]
  },
  {
    "id": 845,
    "name": "cramorant",
    "types": [
      "flying",
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 85,
      "defense": 55,
      "special_attack": 85,
      "special_defense": 95,
      "speed": 85
    },
    "base_experience": 166,
    "height": 8,
    "weight": 180,
    "abilities": [
      "gulp-missile"
    ]
  },
  {
    "id": 846,
    "name": "arrokuda",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 41,
      "attack": 63,
      "defense": 40,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 66
    },
    "base_experience": 56,
    "height": 5,
    "weight": 10,
    "abilities": [
      "swift-swim",
      "propeller-tail"
    ]
  },
  {
    "id": 847,
    "name": "barraskewda",
    "types": [
      "water"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 61,
      "attack": 123,
      "defense": 60,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 136
    },
    "base_experience": 172,
    "height": 13,
    "weight": 300,
    "abilities": [
      "swift-swim",
      "propeller-tail"
    ]
  },
  {
    "id": 848,
    "name": "toxel",
    "types": [
      "electric",
      "poison"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 38,
      "defense": 35,
      "special_attack": 54,
      "special_defense": 35,
      "speed": 40
    },
    "base_experience": 48,
    "height": 4,
    "weight": 110,
    "abilities": [
      "rattled",
      "static",
      "klutz"
    ]
  },
  {
    "id": 849,
    "name": "toxtricity-amped",
    "types": [
      "electric",
      "poison"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 98,
      "defense": 70,
      "special_attack": 114,
      "special_defense": 70,
      "speed": 75
    },
    "base_experience": 176,
    "height": 16,
    "weight": 400,
    "abilities": [
      "punk-rock",
      "plus",
      "technician"
    ]
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "types": [
      "fire",
      "bug"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 65,
      "defense": 45,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 45
    },
    "base_experience": 61,
    "height": 7,
    "weight": 10,
    "abilities": [
      "flash-fire",
      "white-smoke",
      "flame-body"
    ]
  },
  {
    "id": 851,
    "name": "centiskorch",
    "types": [
      "fire",
      "bug"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 115,
      "defense": 65,
      "special_attack": 90,
      "special_defense": 90,
      "speed": 65
    },
    "base_experience": 184,
    "height": 30,
    "weight": 1200,
    "abilities": [
      "flash-fire",
      "white-smoke",
      "flame-body"
    ]
  },
  {
    "id": 852,
    "name": "clobbopus",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 50,
      "attack": 68,
      "defense": 60,
      "special_attack": 50,
      "special_defense": 50,
      "speed": 32
    },
    "base_experience": 62,
    "height": 6,
    "weight": 40,
    "abilities": [
      "limber",
      "technician"
    ]
  },
  {
    "id": 853,
    "name": "grapploct",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 118,
      "defense": 90,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 42
    },
    "base_experience": 168,
    "height": 16,
    "weight": 390,
    "abilities": [
      "limber",
      "technician"
    ]
  },
  {
    "id": 854,
    "name": "sinistea",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 40,
      "attack": 45,
      "defense": 45,
      "special_attack": 74,
      "special_defense": 54,
      "speed": 50
    },
    "base_experience": 62,
    "height": 1,
    "weight": 2,
    "abilities": [
      "weak-armor",
      "cursed-body"
    ]
  },
  {
    "id": 855,
    "name": "polteageist",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 65,
      "special_attack": 134,
      "special_defense": 114,
      "speed": 70
    },
    "base_experience": 178,
    "height": 2,
    "weight": 4,
    "abilities": [
      "weak-armor",
      "cursed-body"
    ]
  },
  {
    "id": 856,
    "name": "hatenna",
    "types": [
      "psychic"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 42,
      "attack": 30,
      "defense": 45,
      "special_attack": 56,
      "special_defense": 53,
      "speed": 39
    },
    "base_experience": 53,
    "height": 4,
    "weight": 34,
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ]
  },
  {
    "id": 857,
    "name": "hattrem",
    "types": [
      "psychic"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 57,
      "attack": 40,
      "defense": 65,
      "special_attack": 86,
      "special_defense": 73,
      "speed": 49
    },
    "base_experience": 130,
    "height": 6,
    "weight": 48,
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ]
  },
  {
    "id": 858,
    "name": "hatterene",
    "types": [
      "psychic",
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 57,
      "attack": 90,
      "defense": 95,
      "special_attack": 136,
      "special_defense": 103,
      "speed": 29
    },
    "base_experience": 255,
    "height": 21,
    "weight": 51,
    "abilities": [
      "healer",
      "anticipation",
      "magic-bounce"
    ]
  },
  {
    "id": 859,
    "name": "impidimp",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 45,
      "defense": 30,
      "special_attack": 55,
      "special_defense": 40,
      "speed": 50
    },
    "base_experience": 53,
    "height": 4,
    "weight": 55,
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ]
  },
  {
    "id": 860,
    "name": "morgrem",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 45,
      "special_attack": 75,
      "special_defense": 55,
      "speed": 70
    },
    "base_experience": 130,
    "height": 8,
    "weight": 125,
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ]
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "types": [
      "dark",
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 95,
      "attack": 120,
      "defense": 65,
      "special_attack": 95,
      "special_defense": 75,
      "speed": 60
    },
    "base_experience": 255,
    "height": 15,
    "weight": 610,
    "abilities": [
      "prankster",
      "frisk",
      "pickpocket"
    ]
  },
  {
    "id": 862,
    "name": "obstagoon",
    "types": [
      "dark",
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 93,
      "attack": 90,
      "defense": 101,
      "special_attack": 60,
      "special_defense": 81,
      "speed": 95
    },
    "base_experience": 260,
    "height": 16,
    "weight": 460,
    "abilities": [
      "reckless",
      "guts",
      "defiant"
    ]
  },
  {
    "id": 863,
    "name": "perrserker",
    "types": [
      "steel"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 110,
      "defense": 100,
      "special_attack": 50,
      "special_defense": 60,
      "speed": 50
    },
    "base_experience": 154,
    "height": 8,
    "weight": 280,
    "abilities": [
      "battle-armor",
      "tough-claws",
      "steely-spirit"
    ]
  },
  {
    "id": 864,
    "name": "cursola",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 50,
      "special_attack": 145,
      "special_defense": 130,
      "speed": 30
    },
    "base_experience": 179,
    "height": 10,
    "weight": 4,
    "abilities": [
      "weak-armor",
      "perish-body"
    ]
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 62,
      "attack": 135,
      "defense": 95,
      "special_attack": 68,
      "special_defense": 82,
      "speed": 65
    },
    "base_experience": 177,
    "height": 8,
    "weight": 1170,
    "abilities": [
      "steadfast",
      "scrappy"
    ]
  },
  {
    "id": 866,
    "name": "mr-rime",
    "types": [
      "ice",
      "psychic"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 80,
      "attack": 85,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 100,
      "speed": 70
    },
    "base_experience": 182,
    "height": 15,
    "weight": 582,
    "abilities": [
      "tangled-feet",
      "screen-cleaner",
      "ice-body"
    ]
  },
  {
    "id": 867,
    "name": "runerigus",
    "types": [
      "ground",
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 145,
      "special_attack": 50,
      "special_defense": 105,
      "speed": 30
    },
    "base_experience": 169,
    "height": 16,
    "weight": 666,
    "abilities": [
      "wandering-spirit"
    ]
  },
  {
    "id": 868,
    "name": "milcery",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 45,
      "attack": 40,
      "defense": 40,
      "special_attack": 50,
      "special_defense": 61,
      "speed": 34
    },
    "base_experience": 54,
    "height": 2,
    "weight": 3,
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ]
  },
  {
    "id": 869,
    "name": "alcremie",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 60,
      "defense": 75,
      "special_attack": 110,
      "special_defense": 121,
      "speed": 64
    },
    "base_experience": 173,
    "height": 3,
    "weight": 5,
    "abilities": [
      "sweet-veil",
      "aroma-veil"
    ]
  },
  {
    "id": 870,
    "name": "falinks",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 65,
      "attack": 100,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 60,
      "speed": 75
    },
    "base_experience": 165,
    "height": 30,
    "weight": 620,
    "abilities": [
      "battle-armor",
      "defiant"
    ]
  },
  {
    "id": 871,
    "name": "pincurchin",
    "types": [
      "electric"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 48,
      "attack": 101,
      "defense": 95,
      "special_attack": 91,
      "special_defense": 85,
      "speed": 15
    },
    "base_experience": 152,
    "height": 3,
    "weight": 10,
    "abilities": [
      "lightning-rod",
      "electric-surge"
    ]
  },
  {
    "id": 872,
    "name": "snom",
    "types": [
      "ice",
      "bug"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 30,
      "attack": 25,
      "defense": 35,
      "special_attack": 45,
      "special_defense": 30,
      "speed": 20
    },
    "base_experience": 37,
    "height": 3,
    "weight": 38,
    "abilities": [
      "shield-dust",
      "ice-scales"
    ]
  },
  {
    "id": 873,
    "name": "frosmoth",
    "types": [
      "ice",
      "bug"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 65,
      "defense": 60,
      "special_attack": 125,
      "special_defense": 90,
      "speed": 65
    },
    "base_experience": 166,
    "height": 13,
    "weight": 420,
    "abilities": [
      "shield-dust",
      "ice-scales"
    ]
  },
  {
    "id": 874,
    "name": "stonjourner",
    "types": [
      "rock"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 100,
      "attack": 125,
      "defense": 135,
      "special_attack": 20,
      "special_defense": 20,
      "speed": 70
    },
    "base_experience": 165,
    "height": 25,
    "weight": 5200,
    "abilities": [
      "power-spot"
    ]
  },
  {
    "id": 875,
    "name": "eiscue-ice",
    "types": [
      "ice"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 75,
      "attack": 80,
      "defense": 110,
      "special_attack": 65,
      "special_defense": 90,
      "speed": 50
    },
    "base_experience": 165,
    "height": 14,
    "weight": 890,
    "abilities": [
      "ice-face"
    ]
  },
  {
    "id": 876,
    "name": "indeedee-male",
    "types": [
      "psychic",
      "normal"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 60,
      "attack": 65,
      "defense": 55,
      "special_attack": 105,
      "special_defense": 95,
      "speed": 95
    },
    "base_experience": 166,
    "height": 9,
    "weight": 280,
    "abilities": [
      "inner-focus",
      "synchronize",
      "psychic-surge"
    ]
  },
  {
    "id": 877,
    "name": "morpeko-full-belly",
    "types": [
      "electric",
      "dark"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 58,
      "attack": 95,
      "defense": 58,
      "special_attack": 70,
      "special_defense": 58,
      "speed": 97
    },
    "base_experience": 153,
    "height": 3,
    "weight": 30,
    "abilities": [
      "hunger-switch"
    ]
  },
  {
    "id": 878,
    "name": "cufant",
    "types": [
      "steel"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 72,
      "attack": 80,
      "defense": 49,
      "special_attack": 40,
      "special_defense": 49,
      "speed": 40
    },
    "base_experience": 66,
    "height": 12,
    "weight": 1000,
    "abilities": [
      "sheer-force",
      "heavy-metal"
    ]
  },
  {
    "id": 879,
    "name": "copperajah",
    "types": [
      "steel"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 122,
      "attack": 130,
      "defense": 69,
      "special_attack": 80,
      "special_defense": 69,
      "speed": 30
    },
    "base_experience": 175,
    "height": 30,
    "weight": 6500,
    "abilities": [
      "sheer-force",
      "heavy-metal"
    ]
  },
  {
    "id": 880,
    "name": "dracozolt",
    "types": [
      "electric",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 80,
      "special_defense": 70,
      "speed": 75
    },
    "base_experience": 177,
    "height": 18,
    "weight": 1900,
    "abilities": [
      "volt-absorb",
      "hustle",
      "sand-rush"
    ]
  },
  {
    "id": 881,
    "name": "arctozolt",
    "types": [
      "electric",
      "ice"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 100,
      "defense": 90,
      "special_attack": 90,
      "special_defense": 80,
      "speed": 55
    },
    "base_experience": 177,
    "height": 23,
    "weight": 1500,
    "abilities": [
      "volt-absorb",
      "static",
      "slush-rush"
    ]
  },
  {
    "id": 882,
    "name": "dracovish",
    "types": [
      "water",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "special_attack": 70,
      "special_defense": 80,
      "speed": 75
    },
    "base_experience": 177,
    "height": 23,
    "weight": 2150,
    "abilities": [
      "water-absorb",
      "strong-jaw",
      "sand-rush"
    ]
  },
  {
    "id": 883,
    "name": "arctovish",
    "types": [
      "water",
      "ice"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 90,
      "attack": 90,
      "defense": 100,
      "special_attack": 80,
      "special_defense": 90,
      "speed": 55
    },
    "base_experience": 177,
    "height": 20,
    "weight": 1750,
    "abilities": [
      "water-absorb",
      "ice-body",
      "slush-rush"
    ]
  },
  {
    "id": 884,
    "name": "duraludon",
    "types": [
      "steel",
      "dragon"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 70,
      "attack": 95,
      "defense": 115,
      "special_attack": 120,
      "special_defense": 50,
      "speed": 85
    },
    "base_experience": 187,
    "height": 18,
    "weight": 400,
    "abilities": [
      "light-metal",
      "heavy-metal",
      "stalwart"
    ]
  },
  {
    "id": 885,
    "name": "dreepy",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 28,
      "attack": 60,
      "defense": 30,
      "special_attack": 40,
      "special_defense": 30,
      "speed": 82
    },
    "base_experience": 54,
    "height": 5,
    "weight": 20,
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ]
  },
  {
    "id": 886,
    "name": "drakloak",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 68,
      "attack": 80,
      "defense": 50,
      "special_attack": 60,
      "special_defense": 50,
      "speed": 102
    },
    "base_experience": 144,
    "height": 14,
    "weight": 110,
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ]
  },
  {
    "id": 887,
    "name": "dragapult",
    "types": [
      "dragon",
      "ghost"
    ],
    "generation": 8,
    "legendary": false,
    "stats": {
      "hp": 88,
      "attack": 120,
      "defense": 75,
      "special_attack": 100,
      "special_defense": 75,
      "speed": 142
    },
    "base_experience": 300,
    "height": 30,
    "weight": 500,
    "abilities": [
      "clear-body",
      "infiltrator",
      "cursed-body"
    ]
  },
  {
    "id": 888,
    "name": "zacian",
    "types": [
      "fairy"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "special_attack": 80,
      "special_defense": 115,
      "speed": 138
    },
    "base_experience": 335,
    "height": 28,
    "weight": 1100,
    "abilities": [
      "intrepid-sword"
    ]
  },
  {
    "id": 889,
    "name": "zamazenta",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 92,
      "attack": 120,
      "defense": 115,
      "special_attack": 80,
      "special_defense": 115,
      "speed": 138
    },
    "base_experience": 335,
    "height": 29,
    "weight": 2100,
    "abilities": [
      "dauntless-shield"
    ]
  },
  {
    "id": 890,
    "name": "eternatus",
    "types": [
      "poison",
      "dragon"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 140,
      "attack": 85,
      "defense": 95,
      "special_attack": 145,
      "special_defense": 95,
      "speed": 130
    },
    "base_experience": 345,
    "height": 200,
    "weight": 9500,
    "abilities": [
      "pressure"
    ]
  },
  {
    "id": 891,
    "name": "kubfu",
    "types": [
      "fighting"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 60,
      "attack": 90,
      "defense": 60,
      "special_attack": 53,
      "special_defense": 50,
      "speed": 72
    },
    "base_experience": 77,
    "height": 6,
    "weight": 120,
    "abilities": [
      "inner-focus"
    ]
  },
  {
    "id": 892,
    "name": "urshifu-single-strike",
    "types": [
      "fighting",
      "dark"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 130,
      "defense": 100,
      "special_attack": 63,
      "special_defense": 60,
      "speed": 97
    },
    "base_experience": 275,
    "height": 19,
    "weight": 1050,
    "abilities": [
      "unseen-fist"
    ]
  },
  {
    "id": 893,
    "name": "zarude",
    "types": [
      "dark",
      "grass"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 105,
      "attack": 120,
      "defense": 105,
      "special_attack": 70,
      "special_defense": 95,
      "speed": 105
    },
    "base_experience": 300,
    "height": 18,
    "weight": 700,
    "abilities": [
      "leaf-guard"
    ]
  },
  {
    "id": 894,
    "name": "regieleki",
    "types": [
      "electric"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 80,
      "attack": 100,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 200
    },
    "base_experience": 290,
    "height": 12,
    "weight": 1450,
    "abilities": [
      "transistor"
    ]
  },
  {
    "id": 895,
    "name": "regidrago",
    "types": [
      "dragon"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 200,
      "attack": 100,
      "defense": 50,
      "special_attack": 100,
      "special_defense": 50,
      "speed": 80
    },
    "base_experience": 290,
    "height": 21,
    "weight": 2000,
    "abilities": [
      "dragons-maw"
    ]
  },
  {
    "id": 896,
    "name": "glastrier",
    "types": [
      "ice"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 145,
      "defense": 130,
      "special_attack": 65,
      "special_defense": 110,
      "speed": 30
    },
    "base_experience": 290,
    "height": 22,
    "weight": 8000,
    "abilities": [
      "chilling-neigh"
    ]
  },
  {
    "id": 897,
    "name": "spectrier",
    "types": [
      "ghost"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 65,
      "defense": 60,
      "special_attack": 145,
      "special_defense": 80,
      "speed": 130
    },
    "base_experience": 290,
    "height": 20,
    "weight": 445,
    "abilities": [
      "grim-neigh"
    ]
  },
  {
    "id": 898,
    "name": "calyrex",
    "types": [
      "psychic",
      "grass"
    ],
    "generation": 8,
    "legendary": true,
    "stats": {
      "hp": 100,
      "attack": 80,
      "defense": 80,
      "special_attack": 80,
      "special_defense": 80,
      "speed": 80
    },
    "base_experience": 250,
    "height": 11,
    "weight": 77,
    "abilities": [
      "unnerve"
    ]
  }
];
