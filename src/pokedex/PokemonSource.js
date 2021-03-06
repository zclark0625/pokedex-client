const PokemonNames = [
  'zero-placeholder',
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Caterpie',
  'Metapod',
  'Butterfree',
  'Weedle',
  'Kakuna',
  'Beedrill',
  'Pidgey',
  'Pidgeotto',
  'Pidgeot',
  'Rattata',
  'Raticate',
  'Spearow',
  'Fearow',
  'Ekans',
  'Arbok',
  'Pikachu',
  'Raichu',
  'Sandshrew',
  'Sandslash',
  'Nidoran♀',
  'Nidorina',
  'Nidoqueen',
  'Nidoran♂',
  'Nidorino',
  'Nidoking',
  'Clefairy',
  'Clefable',
  'Vulpix',
  'Ninetales',
  'Jigglypuff',
  'Wigglytuff',
  'Zubat',
  'Golbat',
  'Oddish',
  'Gloom',
  'Vileplume',
  'Paras',
  'Parasect',
  'Venonat',
  'Venomoth',
  'Diglett',
  'Dugtrio',
  'Meowth',
  'Persian',
  'Psyduck',
  'Golduck',
  'Mankey',
  'Primeape',
  'Growlithe',
  'Arcanine',
  'Poliwag',
  'Poliwhirl',
  'Poliwrath',
  'Abra',
  'Kadabra',
  'Alakazam',
  'Machop',
  'Machoke',
  'Machamp',
  'Bellsprout',
  'Weepinbell',
  'Victreebel',
  'Tentacool',
  'Tentacruel',
  'Geodude',
  'Graveler',
  'Golem',
  'Ponyta',
  'Rapidash',
  'Slowpoke',
  'Slowbro',
  'Magnemite',
  'Magneton',
  'Farfetch’d',
  'Doduo',
  'Dodrio',
  'Seel',
  'Dewgong',
  'Grimer',
  'Muk',
  'Shellder',
  'Cloyster',
  'Gastly',
  'Haunter',
  'Gengar',
  'Onix',
  'Drowzee',
  'Hypno',
  'Krabby',
  'Kingler',
  'Voltorb',
  'Electrode',
  'Exeggcute',
  'Exeggutor',
  'Cubone',
  'Marowak',
  'Hitmonlee',
  'Hitmonchan',
  'Lickitung',
  'Koffing',
  'Weezing',
  'Rhyhorn',
  'Rhydon',
  'Chansey',
  'Tangela',
  'Kangaskhan',
  'Horsea',
  'Seadra',
  'Goldeen',
  'Seaking',
  'Staryu',
  'Starmie',
  'Mr. Mime',
  'Scyther',
  'Jynx',
  'Electabuzz',
  'Magmar',
  'Pinsir',
  'Tauros',
  'Magikarp',
  'Gyarados',
  'Lapras',
  'Ditto',
  'Eevee',
  'Vaporeon',
  'Jolteon',
  'Flareon',
  'Porygon',
  'Omanyte',
  'Omastar',
  'Kabuto',
  'Kabutops',
  'Aerodactyl',
  'Snorlax',
  'Articuno',
  'Zapdos',
  'Moltres',
  'Dratini',
  'Dragonair',
  'Dragonite',
  'Mewtwo',
  'Mew'
]

const PokemonTypes = [
  ['???', '???'],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'fire' ],
  [ 'fire' ],
  [ 'flying', 'fire' ],
  [ 'water' ],
  [ 'water' ],
  [ 'water' ],
  [ 'bug' ],
  [ 'bug' ],
  [ 'flying', 'bug' ],
  [ 'poison', 'bug' ],
  [ 'poison', 'bug' ],
  [ 'poison', 'bug' ],
  [ 'flying', 'normal' ],
  [ 'flying', 'normal' ],
  [ 'flying', 'normal' ],
  [ 'normal' ],
  [ 'normal' ],
  [ 'flying', 'normal' ],
  [ 'flying', 'normal' ],
  [ 'poison' ],
  [ 'poison' ],
  [ 'electric' ],
  [ 'electric' ],
  [ 'ground' ],
  [ 'ground' ],
  [ 'poison' ],
  [ 'poison' ],
  [ 'ground', 'poison' ],
  [ 'poison' ],
  [ 'poison' ],
  [ 'ground', 'poison' ],
  [ 'fairy' ],
  [ 'fairy' ],
  [ 'fire' ],
  [ 'fire' ],
  [ 'fairy', 'normal' ],
  [ 'fairy', 'normal' ],
  [ 'flying', 'poison' ],
  [ 'flying', 'poison' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'grass', 'bug' ],
  [ 'grass', 'bug' ],
  [ 'poison', 'bug' ],
  [ 'poison', 'bug' ],
  [ 'ground' ],
  [ 'ground' ],
  [ 'normal' ],
  [ 'normal' ],
  [ 'water' ],
  [ 'water' ],
  [ 'fighting' ],
  [ 'fighting' ],
  [ 'fire' ],
  [ 'fire' ],
  [ 'water' ],
  [ 'water' ],
  [ 'fighting', 'water' ],
  [ 'psychic' ],
  [ 'psychic' ],
  [ 'psychic' ],
  [ 'fighting' ],
  [ 'fighting' ],
  [ 'fighting' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'grass' ],
  [ 'poison', 'water' ],
  [ 'poison', 'water' ],
  [ 'ground', 'rock' ],
  [ 'ground', 'rock' ],
  [ 'ground', 'rock' ],
  [ 'fire' ],
  [ 'fire' ],
  [ 'psychic', 'water' ],
  [ 'psychic', 'water' ],
  [ 'steel', 'electric' ],
  [ 'steel', 'electric' ],
  [ 'flying', 'normal' ],
  [ 'flying', 'normal' ],
  [ 'flying', 'normal' ],
  [ 'water' ],
  [ 'ice', 'water' ],
  [ 'poison' ],
  [ 'poison' ],
  [ 'water' ],
  [ 'ice', 'water' ],
  [ 'poison', 'ghost' ],
  [ 'poison', 'ghost' ],
  [ 'poison', 'ghost' ],
  [ 'ground', 'rock' ],
  [ 'psychic' ],
  [ 'psychic' ],
  [ 'water' ],
  [ 'water' ],
  [ 'electric' ],
  [ 'electric' ],
  [ 'psychic', 'grass' ],
  [ 'psychic', 'grass' ],
  [ 'ground' ],
  [ 'ground' ],
  [ 'fighting' ],
  [ 'fighting' ],
  [ 'normal' ],
  [ 'poison' ],
  [ 'poison' ],
  [ 'rock', 'ground' ],
  [ 'rock', 'ground' ],
  [ 'normal' ],
  [ 'grass' ],
  [ 'normal' ],
  [ 'water' ],
  [ 'water' ],
  [ 'water' ],
  [ 'water' ],
  [ 'water' ],
  [ 'psychic', 'water' ],
  [ 'fairy', 'psychic' ],
  [ 'flying', 'bug' ],
  [ 'psychic', 'ice' ],
  [ 'electric' ],
  [ 'fire' ],
  [ 'bug' ],
  [ 'normal' ],
  [ 'water' ],
  [ 'flying', 'water' ],
  [ 'ice', 'water' ],
  [ 'normal' ],
  [ 'normal' ],
  [ 'water' ],
  [ 'electric' ],
  [ 'fire' ],
  [ 'normal' ],
  [ 'water', 'rock' ],
  [ 'water', 'rock' ],
  [ 'water', 'rock' ],
  [ 'water', 'rock' ],
  [ 'flying', 'rock' ],
  [ 'normal' ],
  [ 'flying', 'ice' ],
  [ 'flying', 'electric' ],
  [ 'flying', 'fire' ],
  [ 'dragon' ],
  [ 'dragon' ],
  [ 'flying', 'dragon' ],
  [ 'psychic' ],
  [ 'psychic' ]
]

const PokemonSource = []

function buildObjects () {
  PokemonNames.forEach((name, i) => {
    if (i > 0) {
      PokemonSource.push({
        name: name,
        id: i,
        types: PokemonTypes[i] ? PokemonTypes[i] : ['', '']
      })
    }
  })
}

buildObjects()

export default PokemonSource