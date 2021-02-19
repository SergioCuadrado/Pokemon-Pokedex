import { Injectable } from '@angular/core';

@Injectable()
export class PokemonsService {

    private pokemons: Pokemon[] = [
      {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "6.9 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.69,
        "avg_spawns": 69,
        "spawn_time": "20:00",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "13.0 kg",
        "candy": "Bulbasaur Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.042,
        "avg_spawns": 4.2,
        "spawn_time": "07:00",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "2.01 m",
        "weight": "100.0 kg",
        "candy": "Bulbasaur Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "11:30",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
        "type": [
          "Fire"
        ],
        "height": "0.61 m",
        "weight": "8.5 kg",
        "candy": "Charmander Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.253,
        "avg_spawns": 25.3,
        "spawn_time": "08:45",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        "type": [
          "Fire"
        ],
        "height": "1.09 m",
        "weight": "19.0 kg",
        "candy": "Charmander Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "19:00",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 6,
        "num": "006",
        "name": "Charizard",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        "type": [
          "Fire",
          "Flying"
        ],
        "height": "1.70 m",
        "weight": "90.5 kg",
        "candy": "Charmander Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0031,
        "avg_spawns": 0.31,
        "spawn_time": "13:34",
        "weaknesses": [
          "Water",
          "Electric",
          "Rock"
        ]
      }, {
        "id": 7,
        "num": "007",
        "name": "Squirtle",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        "type": [
          "Water"
        ],
        "height": "0.51 m",
        "weight": "9.0 kg",
        "candy": "Squirtle Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 0.58,
        "avg_spawns": 58,
        "spawn_time": "04:25",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 8,
        "num": "008",
        "name": "Wartortle",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        "type": [
          "Water"
        ],
        "height": "0.99 m",
        "weight": "22.5 kg",
        "candy": "Squirtle Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.034,
        "avg_spawns": 3.4,
        "spawn_time": "07:02",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 9,
        "num": "009",
        "name": "Blastoise",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        "type": [
          "Water"
        ],
        "height": "1.60 m",
        "weight": "85.5 kg",
        "candy": "Squirtle Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0067,
        "avg_spawns": 0.67,
        "spawn_time": "00:06",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 10,
        "num": "010",
        "name": "Caterpie",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        "type": [
          "Bug"
        ],
        "height": "0.30 m",
        "weight": "2.9 kg",
        "candy": "Caterpie Candy",
        "candy_count": 12,
        "egg": "2 km",
        "spawn_chance": 3.032,
        "avg_spawns": 303.2,
        "spawn_time": "16:35",
        "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
        ]
      }, {
        "id": 11,
        "num": "011",
        "name": "Metapod",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        "type": [
          "Bug"
        ],
        "height": "0.71 m",
        "weight": "9.9 kg",
        "candy": "Caterpie Candy",
        "candy_count": 50,
        "egg": "Not in Eggs",
        "spawn_chance": 0.187,
        "avg_spawns": 18.7,
        "spawn_time": "02:11",
        "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
        ]
      }, {
        "id": 12,
        "num": "012",
        "name": "Butterfree",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        "type": [
          "Bug",
          "Flying"
        ],
        "height": "1.09 m",
        "weight": "32.0 kg",
        "candy": "Caterpie Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.022,
        "avg_spawns": 2.2,
        "spawn_time": "05:23",
        "weaknesses": [
          "Fire",
          "Electric",
          "Ice",
          "Flying",
          "Rock"
        ]
      }, {
        "id": 13,
        "num": "013",
        "name": "Weedle",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        "type": [
          "Bug",
          "Poison"
        ],
        "height": "0.30 m",
        "weight": "3.2 kg",
        "candy": "Weedle Candy",
        "candy_count": 12,
        "egg": "2 km",
        "spawn_chance": 7.12,
        "avg_spawns": 712,
        "spawn_time": "02:21",
        "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 14,
        "num": "014",
        "name": "Kakuna",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
        "type": [
          "Bug",
          "Poison"
        ],
        "height": "0.61 m",
        "weight": "10.0 kg",
        "candy": "Weedle Candy",
        "candy_count": 50,
        "egg": "Not in Eggs",
        "spawn_chance": 0.44,
        "avg_spawns": 44,
        "spawn_time": "02:30",
        "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 15,
        "num": "015",
        "name": "Beedrill",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        "type": [
          "Bug",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "29.5 kg",
        "candy": "Weedle Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.051,
        "avg_spawns": 5.1,
        "spawn_time": "04:50",
        "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 16,
        "num": "016",
        "name": "Pidgey",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "0.30 m",
        "weight": "1.8 kg",
        "candy": "Pidgey Candy",
        "candy_count": 12,
        "egg": "2 km",
        "spawn_chance": 15.98,
        "avg_spawns": 1.598,
        "spawn_time": "01:34",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 17,
        "num": "017",
        "name": "Pidgeotto",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "1.09 m",
        "weight": "30.0 kg",
        "candy": "Pidgey Candy",
        "candy_count": 50,
        "egg": "Not in Eggs",
        "spawn_chance": 1.02,
        "avg_spawns": 102,
        "spawn_time": "01:30",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 18,
        "num": "018",
        "name": "Pidgeot",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "1.50 m",
        "weight": "39.5 kg",
        "candy": "Pidgey Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.13,
        "avg_spawns": 13,
        "spawn_time": "01:50",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 19,
        "num": "019",
        "name": "Rattata",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        "type": [
          "Normal"
        ],
        "height": "0.30 m",
        "weight": "3.5 kg",
        "candy": "Rattata Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 13.05,
        "avg_spawns": 1.305,
        "spawn_time": "01:55",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 20,
        "num": "020",
        "name": "Raticate",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
        "type": [
          "Normal"
        ],
        "height": "0.71 m",
        "weight": "18.5 kg",
        "candy": "Rattata Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.41,
        "avg_spawns": 41,
        "spawn_time": "01:56",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 21,
        "num": "021",
        "name": "Spearow",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "0.30 m",
        "weight": "2.0 kg",
        "candy": "Spearow Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 4.73,
        "avg_spawns": 473,
        "spawn_time": "12:25",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 22,
        "num": "022",
        "name": "Fearow",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "1.19 m",
        "weight": "38.0 kg",
        "candy": "Spearow Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.15,
        "avg_spawns": 15,
        "spawn_time": "01:11",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 23,
        "num": "023",
        "name": "Ekans",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
        "type": [
          "Poison"
        ],
        "height": "2.01 m",
        "weight": "6.9 kg",
        "candy": "Ekans Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.27,
        "avg_spawns": 227,
        "spawn_time": "12:20",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 24,
        "num": "024",
        "name": "Arbok",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        "type": [
          "Poison"
        ],
        "height": "3.51 m",
        "weight": "65.0 kg",
        "candy": "Ekans Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.072,
        "avg_spawns": 7.2,
        "spawn_time": "01:50",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 25,
        "num": "025",
        "name": "Pikachu",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        "type": [
          "Electric"
        ],
        "height": "0.41 m",
        "weight": "6.0 kg",
        "candy": "Pikachu Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 0.21,
        "avg_spawns": 21,
        "spawn_time": "04:00",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 26,
        "num": "026",
        "name": "Raichu",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        "type": [
          "Electric"
        ],
        "height": "0.79 m",
        "weight": "30.0 kg",
        "candy": "Pikachu Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0076,
        "avg_spawns": 0.76,
        "spawn_time": "23:58",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 27,
        "num": "027",
        "name": "Sandshrew",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
        "type": [
          "Ground"
        ],
        "height": "0.61 m",
        "weight": "12.0 kg",
        "candy": "Sandshrew Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 1.11,
        "avg_spawns": 111,
        "spawn_time": "01:58",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 28,
        "num": "028",
        "name": "Sandslash",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
        "type": [
          "Ground"
        ],
        "height": "0.99 m",
        "weight": "29.5 kg",
        "candy": "Sandshrew Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.037,
        "avg_spawns": 3.7,
        "spawn_time": "12:34",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 29,
        "num": "029",
        "name": "Nidoran ♀ (Female)",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
        "type": [
          "Poison"
        ],
        "height": "0.41 m",
        "weight": "7.0 kg",
        "candy": "Nidoran ♀ (Female) Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 1.38,
        "avg_spawns": 138,
        "spawn_time": "01:51",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 30,
        "num": "030",
        "name": "Nidorina",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
        "type": [
          "Poison"
        ],
        "height": "0.79 m",
        "weight": "20.0 kg",
        "candy": "Nidoran ♀ (Female) Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.088,
        "avg_spawns": 8.8,
        "spawn_time": "07:22",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 31,
        "num": "031",
        "name": "Nidoqueen",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
        "type": [
          "Poison",
          "Ground"
        ],
        "height": "1.30 m",
        "weight": "60.0 kg",
        "candy": "Nidoran ♀ (Female) Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "12:35",
        "weaknesses": [
          "Water",
          "Ice",
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 32,
        "num": "032",
        "name": "Nidoran ♂ (Male)",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
        "type": [
          "Poison"
        ],
        "height": "0.51 m",
        "weight": "9.0 kg",
        "candy": "Nidoran ♂ (Male) Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 1.31,
        "avg_spawns": 131,
        "spawn_time": "01:12",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 33,
        "num": "033",
        "name": "Nidorino",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
        "type": [
          "Poison"
        ],
        "height": "0.89 m",
        "weight": "19.5 kg",
        "candy": "Nidoran ♂ (Male) Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.083,
        "avg_spawns": 8.3,
        "spawn_time": "09:02",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 34,
        "num": "034",
        "name": "Nidoking",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
        "type": [
          "Poison",
          "Ground"
        ],
        "height": "1.40 m",
        "weight": "62.0 kg",
        "candy": "Nidoran ♂ (Male) Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "12:16",
        "weaknesses": [
          "Water",
          "Ice",
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 35,
        "num": "035",
        "name": "Clefairy",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
        "type": [
          "Normal"
        ],
        "height": "0.61 m",
        "weight": "7.5 kg",
        "candy": "Clefairy Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 0.92,
        "avg_spawns": 92,
        "spawn_time": "03:30",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 36,
        "num": "036",
        "name": "Clefable",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
        "type": [
          "Normal"
        ],
        "height": "1.30 m",
        "weight": "40.0 kg",
        "candy": "Clefairy Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "03:29",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 37,
        "num": "037",
        "name": "Vulpix",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
        "type": [
          "Fire"
        ],
        "height": "0.61 m",
        "weight": "9.9 kg",
        "candy": "Vulpix Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.22,
        "avg_spawns": 22,
        "spawn_time": "13:43",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 38,
        "num": "038",
        "name": "Ninetales",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
        "type": [
          "Fire"
        ],
        "height": "1.09 m",
        "weight": "19.9 kg",
        "candy": "Vulpix Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0077,
        "avg_spawns": 0.77,
        "spawn_time": "01:32",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 39,
        "num": "039",
        "name": "Jigglypuff",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        "type": [
          "Normal"
        ],
        "height": "0.51 m",
        "weight": "5.5 kg",
        "candy": "Jigglypuff Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 0.39,
        "avg_spawns": 39,
        "spawn_time": "08:46",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 40,
        "num": "040",
        "name": "Wigglytuff",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
        "type": [
          "Normal"
        ],
        "height": "0.99 m",
        "weight": "12.0 kg",
        "candy": "Jigglypuff Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.018,
        "avg_spawns": 1.8,
        "spawn_time": "12:28",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 41,
        "num": "041",
        "name": "Zubat",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
        "type": [
          "Poison",
          "Flying"
        ],
        "height": "0.79 m",
        "weight": "7.5 kg",
        "candy": "Zubat Candy",
        "candy_count": 50,
        "egg": "2 km",
        "spawn_chance": 6.52,
        "avg_spawns": 652,
        "spawn_time": "12:28",
        "weaknesses": [
          "Electric",
          "Ice",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 42,
        "num": "042",
        "name": "Golbat",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
        "type": [
          "Poison",
          "Flying"
        ],
        "height": "1.60 m",
        "weight": "55.0 kg",
        "candy": "Zubat Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.42,
        "avg_spawns": 42,
        "spawn_time": "02:15",
        "weaknesses": [
          "Electric",
          "Ice",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 43,
        "num": "043",
        "name": "Oddish",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.51 m",
        "weight": "5.4 kg",
        "candy": "Oddish Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 1.02,
        "avg_spawns": 102,
        "spawn_time": "03:58",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 44,
        "num": "044",
        "name": "Gloom",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.79 m",
        "weight": "8.6 kg",
        "candy": "Oddish Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.064,
        "avg_spawns": 6.4,
        "spawn_time": "11:33",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 45,
        "num": "045",
        "name": "Vileplume",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "1.19 m",
        "weight": "18.6 kg",
        "candy": "Oddish Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0097,
        "avg_spawns": 0.97,
        "spawn_time": "23:58",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 46,
        "num": "046",
        "name": "Paras",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
        "type": [
          "Bug",
          "Grass"
        ],
        "height": "0.30 m",
        "weight": "5.4 kg",
        "candy": "Paras Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.36,
        "avg_spawns": 236,
        "spawn_time": "01:42",
        "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Rock"
        ]
      }, {
        "id": 47,
        "num": "047",
        "name": "Parasect",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
        "type": [
          "Bug",
          "Grass"
        ],
        "height": "0.99 m",
        "weight": "29.5 kg",
        "candy": "Paras Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.074,
        "avg_spawns": 7.4,
        "spawn_time": "01:22",
        "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Rock"
        ]
      }, {
        "id": 48,
        "num": "048",
        "name": "Venonat",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
        "type": [
          "Bug",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "30.0 kg",
        "candy": "Venonat Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.28,
        "avg_spawns": 228,
        "spawn_time": "02:31",
        "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 49,
        "num": "049",
        "name": "Venomoth",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
        "type": [
          "Bug",
          "Poison"
        ],
        "height": "1.50 m",
        "weight": "12.5 kg",
        "candy": "Venonat Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.072,
        "avg_spawns": 7.2,
        "spawn_time": "23:40",
        "weaknesses": [
          "Fire",
          "Flying",
          "Psychic",
          "Rock"
        ]
      }, {
        "id": 50,
        "num": "050",
        "name": "Diglett",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        "type": [
          "Ground"
        ],
        "height": "0.20 m",
        "weight": "0.8 kg",
        "candy": "Diglett Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.40,
        "avg_spawns": 40,
        "spawn_time": "02:22",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 51,
        "num": "051",
        "name": "Dugtrio",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
        "type": [
          "Ground"
        ],
        "height": "0.71 m",
        "weight": "33.3 kg",
        "candy": "Dugtrio",
        "egg": "Not in Eggs",
        "spawn_chance": 0.014,
        "avg_spawns": 1.4,
        "spawn_time": "12:37",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 52,
        "num": "052",
        "name": "Meowth",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
        "type": [
          "Normal"
        ],
        "height": "0.41 m",
        "weight": "4.2 kg",
        "candy": "Meowth Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.86,
        "avg_spawns": 86,
        "spawn_time": "02:54",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 53,
        "num": "053",
        "name": "Persian",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
        "type": [
          "Normal"
        ],
        "height": "0.99 m",
        "weight": "32.0 kg",
        "candy": "Meowth Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.022,
        "avg_spawns": 2.2,
        "spawn_time": "02:44",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 54,
        "num": "054",
        "name": "Psyduck",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
        "type": [
          "Water"
        ],
        "height": "0.79 m",
        "weight": "19.6 kg",
        "candy": "Psyduck Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.54,
        "avg_spawns": 254,
        "spawn_time": "03:41",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 55,
        "num": "055",
        "name": "Golduck",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
        "type": [
          "Water"
        ],
        "height": "1.70 m",
        "weight": "76.6 kg",
        "candy": "Psyduck Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.087,
        "avg_spawns": 8.7,
        "spawn_time": "23:06",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 56,
        "num": "056",
        "name": "Mankey",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
        "type": [
          "Fighting"
        ],
        "height": "0.51 m",
        "weight": "28.0 kg",
        "candy": "Mankey Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.92,
        "avg_spawns": 92,
        "spawn_time": "12:52",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 57,
        "num": "057",
        "name": "Primeape",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
        "type": [
          "Fighting"
        ],
        "height": "0.99 m",
        "weight": "32.0 kg",
        "candy": "Mankey Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.031,
        "avg_spawns": 3.1,
        "spawn_time": "12:33",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 58,
        "num": "058",
        "name": "Growlithe",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
        "type": [
          "Fire"
        ],
        "height": "0.71 m",
        "weight": "19.0 kg",
        "candy": "Growlithe Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.92,
        "avg_spawns": 92,
        "spawn_time": "03:57",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 59,
        "num": "059",
        "name": "Arcanine",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
        "type": [
          "Fire"
        ],
        "height": "1.91 m",
        "weight": "155.0 kg",
        "candy": "Growlithe Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "03:11",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 60,
        "num": "060",
        "name": "Poliwag",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        "type": [
          "Water"
        ],
        "height": "0.61 m",
        "weight": "12.4 kg",
        "candy": "Poliwag Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 2.19,
        "avg_spawns": 219,
        "spawn_time": "03:40",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 61,
        "num": "061",
        "name": "Poliwhirl",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
        "type": [
          "Water"
        ],
        "height": "0.99 m",
        "weight": "20.0 kg",
        "candy": "Poliwag Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.13,
        "avg_spawns": 13,
        "spawn_time": "09:14",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 62,
        "num": "062",
        "name": "Poliwrath",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
        "type": [
          "Water",
          "Fighting"
        ],
        "height": "1.30 m",
        "weight": "54.0 kg",
        "candy": "Poliwag Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.011,
        "avg_spawns": 1.1,
        "spawn_time": "01:32",
        "weaknesses": [
          "Electric",
          "Grass",
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 63,
        "num": "063",
        "name": "Abra",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
        "type": [
          "Psychic"
        ],
        "height": "0.89 m",
        "weight": "19.5 kg",
        "candy": "Abra Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 0.42,
        "avg_spawns": 42,
        "spawn_time": "04:30",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 64,
        "num": "064",
        "name": "Kadabra",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
        "type": [
          "Psychic"
        ],
        "height": "1.30 m",
        "weight": "56.5 kg",
        "candy": "Abra Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.027,
        "avg_spawns": 2.7,
        "spawn_time": "11:25",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 65,
        "num": "065",
        "name": "Alakazam",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
        "type": [
          "Psychic"
        ],
        "height": "1.50 m",
        "weight": "48.0 kg",
        "candy": "Abra Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0073,
        "avg_spawns": 0.73,
        "spawn_time": "12:33",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 66,
        "num": "066",
        "name": "Machop",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
        "type": [
          "Fighting"
        ],
        "height": "0.79 m",
        "weight": "19.5 kg",
        "candy": "Machop Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 0.49,
        "avg_spawns": 49,
        "spawn_time": "01:55",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 67,
        "num": "067",
        "name": "Machoke",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
        "type": [
          "Fighting"
        ],
        "height": "1.50 m",
        "weight": "70.5 kg",
        "candy": "Machop Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.034,
        "avg_spawns": 3.4,
        "spawn_time": "10:32",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 68,
        "num": "068",
        "name": "Machamp",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
        "type": [
          "Fighting"
        ],
        "height": "1.60 m",
        "weight": "130.0 kg",
        "candy": "Machop Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0068,
        "avg_spawns": 0.68,
        "spawn_time": "02:55",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 69,
        "num": "069",
        "name": "Bellsprout",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.71 m",
        "weight": "4.0 kg",
        "candy": "Bellsprout Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 1.15,
        "avg_spawns": 115,
        "spawn_time": "04:10",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 70,
        "num": "070",
        "name": "Weepinbell",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "0.99 m",
        "weight": "6.4 kg",
        "candy": "Bellsprout Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.072,
        "avg_spawns": 7.2,
        "spawn_time": "09:45",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 71,
        "num": "071",
        "name": "Victreebel",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
        "type": [
          "Grass",
          "Poison"
        ],
        "height": "1.70 m",
        "weight": "15.5 kg",
        "candy": "Bellsprout Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0059,
        "avg_spawns": 0.59,
        "spawn_time": "12:19",
        "weaknesses": [
          "Fire",
          "Ice",
          "Flying",
          "Psychic"
        ]
      }, {
        "id": 72,
        "num": "072",
        "name": "Tentacool",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
        "type": [
          "Water",
          "Poison"
        ],
        "height": "0.89 m",
        "weight": "45.5 kg",
        "candy": "Tentacool Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.81,
        "avg_spawns": 81,
        "spawn_time": "03:20",
        "weaknesses": [
          "Electric",
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 73,
        "num": "073",
        "name": "Tentacruel",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
        "type": [
          "Water",
          "Poison"
        ],
        "height": "1.60 m",
        "weight": "55.0 kg",
        "candy": "Tentacool Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.082,
        "avg_spawns": 8.2,
        "spawn_time": "23:36",
        "weaknesses": [
          "Electric",
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 74,
        "num": "074",
        "name": "Geodude",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
        "type": [
          "Rock",
          "Ground"
        ],
        "height": "0.41 m",
        "weight": "20.0 kg",
        "candy": "Geodude Candy",
        "candy_count": 25,
        "egg": "2 km",
        "spawn_chance": 1.19,
        "avg_spawns": 119,
        "spawn_time": "12:40",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 75,
        "num": "075",
        "name": "Graveler",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
        "type": [
          "Rock",
          "Ground"
        ],
        "height": "0.99 m",
        "weight": "105.0 kg",
        "candy": "Geodude Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.071,
        "avg_spawns": 7.1,
        "spawn_time": "04:53",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 76,
        "num": "076",
        "name": "Golem",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
        "type": [
          "Rock",
          "Ground"
        ],
        "height": "1.40 m",
        "weight": "300.0 kg",
        "candy": "Geodude Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0047,
        "avg_spawns": 0.47,
        "spawn_time": "12:16",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 77,
        "num": "077",
        "name": "Ponyta",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
        "type": [
          "Fire"
        ],
        "height": "0.99 m",
        "weight": "30.0 kg",
        "candy": "Ponyta Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.51,
        "avg_spawns": 51,
        "spawn_time": "02:50",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 78,
        "num": "078",
        "name": "Rapidash",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
        "type": [
          "Fire"
        ],
        "height": "1.70 m",
        "weight": "95.0 kg",
        "candy": "Ponyta Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.011,
        "avg_spawns": 1.1,
        "spawn_time": "04:00",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 79,
        "num": "079",
        "name": "Slowpoke",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
        "type": [
          "Water",
          "Psychic"
        ],
        "height": "1.19 m",
        "weight": "36.0 kg",
        "candy": "Slowpoke Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 1.05,
        "avg_spawns": 105,
        "spawn_time": "07:12",
        "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 80,
        "num": "080",
        "name": "Slowbro",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
        "type": [
          "Water",
          "Psychic"
        ],
        "height": "1.60 m",
        "weight": "78.5 kg",
        "candy": "Slowpoke Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.036,
        "avg_spawns": 3.6,
        "spawn_time": "02:56",
        "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 81,
        "num": "081",
        "name": "Magnemite",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
        "type": [
          "Electric"
        ],
        "height": "0.30 m",
        "weight": "6.0 kg",
        "candy": "Magnemite Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.71,
        "avg_spawns": 71,
        "spawn_time": "04:04",
        "weaknesses": [
          "Fire",
          "Water",
          "Ground"
        ]
      }, {
        "id": 82,
        "num": "082",
        "name": "Magneton",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
        "type": [
          "Electric"
        ],
        "height": "0.99 m",
        "weight": "60.0 kg",
        "candy": "Magnemite Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.023,
        "avg_spawns": 2.3,
        "spawn_time": "15:25",
        "weaknesses": [
          "Fire",
          "Water",
          "Ground"
        ]
      }, {
        "id": 83,
        "num": "083",
        "name": "Farfetch'd",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "0.79 m",
        "weight": "15.0 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.0212,
        "avg_spawns": 2.12,
        "spawn_time": "01:09",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 84,
        "num": "084",
        "name": "Doduo",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "1.40 m",
        "weight": "39.2 kg",
        "candy": "Doduo Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.52,
        "avg_spawns": 52,
        "spawn_time": "05:10",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 85,
        "num": "085",
        "name": "Dodrio",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
        "type": [
          "Normal",
          "Flying"
        ],
        "height": "1.80 m",
        "weight": "85.2 kg",
        "candy": "Doduo Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.22,
        "avg_spawns": 22,
        "spawn_time": "02:12",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 86,
        "num": "086",
        "name": "Seel",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
        "type": [
          "Water"
        ],
        "height": "1.09 m",
        "weight": "90.0 kg",
        "candy": "Seel Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.28,
        "avg_spawns": 28,
        "spawn_time": "06:46",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 87,
        "num": "087",
        "name": "Dewgong",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
        "type": [
          "Water",
          "Ice"
        ],
        "height": "1.70 m",
        "weight": "120.0 kg",
        "candy": "Seel Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.013,
        "avg_spawns": 1.3,
        "spawn_time": "06:04",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
        ]
      }, {
        "id": 88,
        "num": "088",
        "name": "Grimer",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
        "type": [
          "Poison"
        ],
        "height": "0.89 m",
        "weight": "30.0 kg",
        "candy": "Grimer Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.052,
        "avg_spawns": 5.2,
        "spawn_time": "15:11",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 89,
        "num": "089",
        "name": "Muk",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
        "type": [
          "Poison"
        ],
        "height": "1.19 m",
        "weight": "30.0 kg",
        "candy": "Grimer Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0031,
        "avg_spawns": 0.31,
        "spawn_time": "01:28",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 90,
        "num": "090",
        "name": "Shellder",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
        "type": [
          "Water"
        ],
        "height": "0.30 m",
        "weight": "4.0 kg",
        "candy": "Shellder Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.52,
        "avg_spawns": 52,
        "spawn_time": "07:39",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 91,
        "num": "091",
        "name": "Cloyster",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
        "type": [
          "Water",
          "Ice"
        ],
        "height": "1.50 m",
        "weight": "132.5 kg",
        "candy": "Shellder Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.015,
        "avg_spawns": 1.5,
        "spawn_time": "02:33",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
        ]
      }, {
        "id": 92,
        "num": "092",
        "name": "Gastly",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
        "type": [
          "Ghost",
          "Poison"
        ],
        "height": "1.30 m",
        "weight": "0.1 kg",
        "candy": "Gastly Candy",
        "candy_count": 25,
        "egg": "5 km",
        "spawn_chance": 0.79,
        "avg_spawns": 79,
        "spawn_time": "04:21",
        "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 93,
        "num": "093",
        "name": "Haunter",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
        "type": [
          "Ghost",
          "Poison"
        ],
        "height": "1.60 m",
        "weight": "0.1 kg",
        "candy": "Gastly Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.052,
        "avg_spawns": 5.2,
        "spawn_time": "00:10",
        "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 94,
        "num": "094",
        "name": "Gengar",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        "type": [
          "Ghost",
          "Poison"
        ],
        "height": "1.50 m",
        "weight": "40.5 kg",
        "candy": "Gastly Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0067,
        "avg_spawns": 0.67,
        "spawn_time": "03:55",
        "weaknesses": [
          "Ground",
          "Psychic",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 95,
        "num": "095",
        "name": "Onix",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
        "type": [
          "Rock",
          "Ground"
        ],
        "height": "8.79 m",
        "weight": "210.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "01:18",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 96,
        "num": "096",
        "name": "Drowzee",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
        "type": [
          "Psychic"
        ],
        "height": "0.99 m",
        "weight": "32.4 kg",
        "candy": "Drowzee Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 3.21,
        "avg_spawns": 321,
        "spawn_time": "01:51",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 97,
        "num": "097",
        "name": "Hypno",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
        "type": [
          "Psychic"
        ],
        "height": "1.60 m",
        "weight": "75.6 kg",
        "candy": "Drowzee Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "02:17",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 98,
        "num": "098",
        "name": "Krabby",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
        "type": [
          "Water"
        ],
        "height": "0.41 m",
        "weight": "6.5 kg",
        "candy": "Krabby Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.12,
        "avg_spawns": 212,
        "spawn_time": "03:33",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 99,
        "num": "099",
        "name": "Kingler",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
        "type": [
          "Water"
        ],
        "height": "1.30 m",
        "weight": "60.0 kg",
        "candy": "Krabby Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.062,
        "avg_spawns": 6.2,
        "spawn_time": "03:44",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 100,
        "num": "100",
        "name": "Voltorb",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
        "type": [
          "Electric"
        ],
        "height": "0.51 m",
        "weight": "10.4 kg",
        "candy": "Voltorb Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.65,
        "avg_spawns": 65,
        "spawn_time": "04:36",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 101,
        "num": "101",
        "name": "Electrode",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
        "type": [
          "Electric"
        ],
        "height": "1.19 m",
        "weight": "66.6 kg",
        "candy": "Voltorb Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "04:10",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 102,
        "num": "102",
        "name": "Exeggcute",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
        "type": [
          "Grass",
          "Psychic"
        ],
        "height": "0.41 m",
        "weight": "2.5 kg",
        "candy": "Exeggcute Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.78,
        "avg_spawns": 78,
        "spawn_time": "09:09",
        "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 103,
        "num": "103",
        "name": "Exeggutor",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
        "type": [
          "Grass",
          "Psychic"
        ],
        "height": "2.01 m",
        "weight": "120.0 kg",
        "candy": "Exeggcute Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.014,
        "avg_spawns": 1.4,
        "spawn_time": "12:34",
        "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 104,
        "num": "104",
        "name": "Cubone",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
        "type": [
          "Ground"
        ],
        "height": "0.41 m",
        "weight": "6.5 kg",
        "candy": "Cubone Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.61,
        "avg_spawns": 61,
        "spawn_time": "01:51",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 105,
        "num": "105",
        "name": "Marowak",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
        "type": [
          "Ground"
        ],
        "height": "0.99 m",
        "weight": "45.0 kg",
        "candy": "Cubone Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "03:59",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice"
        ]
      }, {
        "id": 106,
        "num": "106",
        "name": "Hitmonlee",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
        "type": [
          "Fighting"
        ],
        "height": "1.50 m",
        "weight": "49.8 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "03:59",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 107,
        "num": "107",
        "name": "Hitmonchan",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
        "type": [
          "Fighting"
        ],
        "height": "1.40 m",
        "weight": "50.2 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.022,
        "avg_spawns": 2.2,
        "spawn_time": "05:58",
        "weaknesses": [
          "Flying",
          "Psychic",
          "Fairy"
        ]
      }, {
        "id": 108,
        "num": "108",
        "name": "Lickitung",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
        "type": [
          "Normal"
        ],
        "height": "1.19 m",
        "weight": "65.5 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.011,
        "avg_spawns": 1.1,
        "spawn_time": "02:46",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 109,
        "num": "109",
        "name": "Koffing",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
        "type": [
          "Poison"
        ],
        "height": "0.61 m",
        "weight": "1.0 kg",
        "candy": "Koffing Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.20,
        "avg_spawns": 20,
        "spawn_time": "08:16",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 110,
        "num": "110",
        "name": "Weezing",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
        "type": [
          "Poison"
        ],
        "height": "1.19 m",
        "weight": "9.5 kg",
        "candy": "Koffing Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.016,
        "avg_spawns": 1.6,
        "spawn_time": "12:17",
        "weaknesses": [
          "Ground",
          "Psychic"
        ]
      }, {
        "id": 111,
        "num": "111",
        "name": "Rhyhorn",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
        "type": [
          "Ground",
          "Rock"
        ],
        "height": "0.99 m",
        "weight": "115.0 kg",
        "candy": "Rhyhorn Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 0.63,
        "avg_spawns": 63,
        "spawn_time": "03:21",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 112,
        "num": "112",
        "name": "Rhydon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
        "type": [
          "Ground",
          "Rock"
        ],
        "height": "1.91 m",
        "weight": "120.0 kg",
        "candy": "Rhyhorn Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.022,
        "avg_spawns": 2.2,
        "spawn_time": "05:50",
        "weaknesses": [
          "Water",
          "Grass",
          "Ice",
          "Fighting",
          "Ground",
          "Steel"
        ]
      }, {
        "id": 113,
        "num": "113",
        "name": "Chansey",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
        "type": [
          "Normal"
        ],
        "height": "1.09 m",
        "weight": "34.6 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.013,
        "avg_spawns": 1.3,
        "spawn_time": "04:46",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 114,
        "num": "114",
        "name": "Tangela",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
        "type": [
          "Grass"
        ],
        "height": "0.99 m",
        "weight": "35.0 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.228,
        "avg_spawns": 22.8,
        "spawn_time": "23:13",
        "weaknesses": [
          "Fire",
          "Ice",
          "Poison",
          "Flying",
          "Bug"
        ]
      }, {
        "id": 115,
        "num": "115",
        "name": "Kangaskhan",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
        "type": [
          "Normal"
        ],
        "height": "2.21 m",
        "weight": "80.0 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.0086,
        "avg_spawns": 0.86,
        "spawn_time": "02:40",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 116,
        "num": "116",
        "name": "Horsea",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
        "type": [
          "Water"
        ],
        "height": "0.41 m",
        "weight": "8.0 kg",
        "candy": "Horsea Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 1.13,
        "avg_spawns": 113,
        "spawn_time": "02:53",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 117,
        "num": "117",
        "name": "Seadra",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
        "type": [
          "Water"
        ],
        "height": "1.19 m",
        "weight": "25.0 kg",
        "candy": "Horsea Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.034,
        "avg_spawns": 3.4,
        "spawn_time": "03:18",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 118,
        "num": "118",
        "name": "Goldeen",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
        "type": [
          "Water"
        ],
        "height": "0.61 m",
        "weight": "15.0 kg",
        "candy": "Goldeen Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 2.18,
        "avg_spawns": 218,
        "spawn_time": "03:14",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 119,
        "num": "119",
        "name": "Seaking",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
        "type": [
          "Water"
        ],
        "height": "1.30 m",
        "weight": "39.0 kg",
        "candy": "Goldeen Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.08,
        "avg_spawns": 8,
        "spawn_time": "05:21",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 120,
        "num": "120",
        "name": "Staryu",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
        "type": [
          "Water"
        ],
        "height": "0.79 m",
        "weight": "34.5 kg",
        "candy": "Staryu Candy",
        "candy_count": 50,
        "egg": "5 km",
        "spawn_chance": 1.95,
        "avg_spawns": 195,
        "spawn_time": "22:59",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 121,
        "num": "121",
        "name": "Starmie",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
        "type": [
          "Water",
          "Psychic"
        ],
        "height": "1.09 m",
        "weight": "80.0 kg",
        "candy": "Staryu Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.034,
        "avg_spawns": 3.4,
        "spawn_time": "06:57",
        "weaknesses": [
          "Electric",
          "Grass",
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 122,
        "num": "122",
        "name": "Mr. Mime",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
        "type": [
          "Psychic"
        ],
        "height": "1.30 m",
        "weight": "54.5 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.0031,
        "avg_spawns": 0.31,
        "spawn_time": "01:51",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 123,
        "num": "123",
        "name": "Scyther",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
        "type": [
          "Bug",
          "Flying"
        ],
        "height": "1.50 m",
        "weight": "56.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.14,
        "avg_spawns": 14,
        "spawn_time": "05:43",
        "weaknesses": [
          "Fire",
          "Electric",
          "Ice",
          "Flying",
          "Rock"
        ]
      }, {
        "id": 124,
        "num": "124",
        "name": "Jynx",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
        "type": [
          "Ice",
          "Psychic"
        ],
        "height": "1.40 m",
        "weight": "40.6 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.35,
        "avg_spawns": 35,
        "spawn_time": "05:41",
        "weaknesses": [
          "Fire",
          "Bug",
          "Rock",
          "Ghost",
          "Dark",
          "Steel"
        ]
      }, {
        "id": 125,
        "num": "125",
        "name": "Electabuzz",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
        "type": [
          "Electric"
        ],
        "height": "1.09 m",
        "weight": "30.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.074,
        "avg_spawns": 7.4,
        "spawn_time": "04:28",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 126,
        "num": "126",
        "name": "Magmar",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
        "type": [
          "Fire"
        ],
        "height": "1.30 m",
        "weight": "44.5 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "20:36",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 127,
        "num": "127",
        "name": "Pinsir",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
        "type": [
          "Bug"
        ],
        "height": "1.50 m",
        "weight": "55.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.99,
        "avg_spawns": 99,
        "spawn_time": "03:25",
        "weaknesses": [
          "Fire",
          "Flying",
          "Rock"
        ]
      }, {
        "id": 128,
        "num": "128",
        "name": "Tauros",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
        "type": [
          "Normal"
        ],
        "height": "1.40 m",
        "weight": "88.4 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.12,
        "avg_spawns": 12,
        "spawn_time": "00:37",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 129,
        "num": "129",
        "name": "Magikarp",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
        "type": [
          "Water"
        ],
        "height": "0.89 m",
        "weight": "10.0 kg",
        "candy": "Magikarp Candy",
        "candy_count": 400,
        "egg": "2 km",
        "spawn_chance": 4.78,
        "avg_spawns": 478,
        "spawn_time": "14:26",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 130,
        "num": "130",
        "name": "Gyarados",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
        "type": [
          "Water",
          "Flying"
        ],
        "height": "6.50 m",
        "weight": "235.0 kg",
        "candy": "Magikarp Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0032,
        "avg_spawns": 0.32,
        "spawn_time": "02:15",
        "weaknesses": [
          "Electric",
          "Rock"
        ]
      }, {
        "id": 131,
        "num": "131",
        "name": "Lapras",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
        "type": [
          "Water",
          "Ice"
        ],
        "height": "2.49 m",
        "weight": "220.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.006,
        "avg_spawns": 0.6,
        "spawn_time": "08:59",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Rock"
        ]
      }, {
        "id": 132,
        "num": "132",
        "name": "Ditto",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
        "type": [
          "Normal"
        ],
        "height": "0.30 m",
        "weight": "4.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 133,
        "num": "133",
        "name": "Eevee",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        "type": [
          "Normal"
        ],
        "height": "0.30 m",
        "weight": "6.5 kg",
        "candy": "Eevee Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 2.75,
        "avg_spawns": 275,
        "spawn_time": "05:32",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 134,
        "num": "134",
        "name": "Vaporeon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
        "type": [
          "Water"
        ],
        "height": "0.99 m",
        "weight": "29.0 kg",
        "candy": "Eevee Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.014,
        "avg_spawns": 1.4,
        "spawn_time": "10:54",
        "weaknesses": [
          "Electric",
          "Grass"
        ]
      }, {
        "id": 135,
        "num": "135",
        "name": "Jolteon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
        "type": [
          "Electric"
        ],
        "height": "0.79 m",
        "weight": "24.5 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "02:30",
        "weaknesses": [
          "Ground"
        ]
      }, {
        "id": 136,
        "num": "136",
        "name": "Flareon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
        "type": [
          "Fire"
        ],
        "height": "0.89 m",
        "weight": "25.0 kg",
        "candy": "Eevee Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.017,
        "avg_spawns": 1.7,
        "spawn_time": "07:02",
        "weaknesses": [
          "Water",
          "Ground",
          "Rock"
        ]
      }, {
        "id": 137,
        "num": "137",
        "name": "Porygon",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
        "type": [
          "Normal"
        ],
        "height": "0.79 m",
        "weight": "36.5 kg",
        "candy": "None",
        "egg": "5 km",
        "spawn_chance": 0.012,
        "avg_spawns": 1.2,
        "spawn_time": "02:49",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 138,
        "num": "138",
        "name": "Omanyte",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "0.41 m",
        "weight": "7.5 kg",
        "candy": "Omanyte Candy",
        "candy_count": 50,
        "egg": "10 km",
        "spawn_chance": 0.14,
        "avg_spawns": 14,
        "spawn_time": "10:23",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ]
      }, {
        "id": 139,
        "num": "139",
        "name": "Omastar",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "0.99 m",
        "weight": "35.0 kg",
        "candy": "None",
        "egg": "Omanyte Candy",
        "spawn_chance": 0.0061,
        "avg_spawns": 0.61,
        "spawn_time": "05:04",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ]
      }, {
        "id": 140,
        "num": "140",
        "name": "Kabuto",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "0.51 m",
        "weight": "11.5 kg",
        "candy": "Kabuto Candy",
        "candy_count": 50,
        "egg": "10 km",
        "spawn_chance": 0.10,
        "avg_spawns": 10,
        "spawn_time": "00:05",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ]
      }, {
        "id": 141,
        "num": "141",
        "name": "Kabutops",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
        "type": [
          "Rock",
          "Water"
        ],
        "height": "1.30 m",
        "weight": "40.5 kg",
        "candy": "Kabuto Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0032,
        "avg_spawns": 0.32,
        "spawn_time": "23:40",
        "weaknesses": [
          "Electric",
          "Grass",
          "Fighting",
          "Ground"
        ]
      }, {
        "id": 142,
        "num": "142",
        "name": "Aerodactyl",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
        "type": [
          "Rock",
          "Flying"
        ],
        "height": "1.80 m",
        "weight": "59.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.018,
        "avg_spawns": 1.8,
        "spawn_time": "23:40",
        "weaknesses": [
          "Water",
          "Electric",
          "Ice",
          "Rock",
          "Steel"
        ]
      }, {
        "id": 143,
        "num": "143",
        "name": "Snorlax",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        "type": [
          "Normal"
        ],
        "height": "2.11 m",
        "weight": "460.0 kg",
        "candy": "None",
        "egg": "10 km",
        "spawn_chance": 0.016,
        "avg_spawns": 1.6,
        "spawn_time": "23:40",
        "weaknesses": [
          "Fighting"
        ]
      }, {
        "id": 144,
        "num": "144",
        "name": "Articuno",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
        "type": [
          "Ice",
          "Flying"
        ],
        "height": "1.70 m",
        "weight": "55.4 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Fire",
          "Electric",
          "Rock",
          "Steel"
        ]
      }, {
        "id": 145,
        "num": "145",
        "name": "Zapdos",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
        "type": [
          "Electric",
          "Flying"
        ],
        "height": "1.60 m",
        "weight": "52.6 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Ice",
          "Rock"
        ]
      }, {
        "id": 146,
        "num": "146",
        "name": "Moltres",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
        "type": [
          "Fire",
          "Flying"
        ],
        "height": "2.01 m",
        "weight": "60.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Water",
          "Electric",
          "Rock"
        ]
      }, {
        "id": 147,
        "num": "147",
        "name": "Dratini",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
        "type": [
          "Dragon"
        ],
        "height": "1.80 m",
        "weight": "3.3 kg",
        "candy": "Dratini Candy",
        "candy_count": 25,
        "egg": "10 km",
        "spawn_chance": 0.30,
        "avg_spawns": 30,
        "spawn_time": "06:41",
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ]
      }, {
        "id": 148,
        "num": "148",
        "name": "Dragonair",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
        "type": [
          "Dragon"
        ],
        "height": "3.99 m",
        "weight": "16.5 kg",
        "candy": "Dratini Candy",
        "candy_count": 100,
        "egg": "Not in Eggs",
        "spawn_chance": 0.02,
        "avg_spawns": 2,
        "spawn_time": "11:57",
        "weaknesses": [
          "Ice",
          "Dragon",
          "Fairy"
        ]
      }, {
        "id": 149,
        "num": "149",
        "name": "Dragonite",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        "type": [
          "Dragon",
          "Flying"
        ],
        "height": "2.21 m",
        "weight": "210.0 kg",
        "candy": "Dratini Candy",
        "egg": "Not in Eggs",
        "spawn_chance": 0.0011,
        "avg_spawns": 0.11,
        "spawn_time": "23:38",
        "weaknesses": [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        ]
      }, {
        "id": 150,
        "num": "150",
        "name": "Mewtwo",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        "type": [
          "Psychic"
        ],
        "height": "2.01 m",
        "weight": "122.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }, {
        "id": 151,
        "num": "151",
        "name": "Mew",
        "img": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
        "type": [
          "Psychic"
        ],
        "height": "0.41 m",
        "weight": "4.0 kg",
        "candy": "None",
        "egg": "Not in Eggs",
        "spawn_chance": 0,
        "avg_spawns": 0,
        "spawn_time": "N/A",
        "weaknesses": [
          "Bug",
          "Ghost",
          "Dark"
        ]
      }
    ];

    getPokemons(): Pokemon[] {
        return this.pokemons;
    }


    // tslint:disable-next-line:typedef
    getPokemon( idx: string ){
      return this.pokemons[idx];
    }

    buscarPokemons( termino: string ): Pokemon[] {
      let pokemonsArr: Pokemon[] = [];
      termino = termino.toLowerCase();
      let i: number = 0;
      for( let pokemon of this.pokemons ) {

        let nombre = pokemon.name.toLowerCase();

        if ( nombre.indexOf( termino ) >= 0 ){
          pokemon.id = i;
          pokemonsArr.push( pokemon );
        }
        i++;
      }

      return pokemonsArr;

    }

}

export interface Pokemon{
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    candy: string;
    candy_count?: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    weaknesses: string[];
}
