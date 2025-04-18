import { ElementTypes } from '@/models/types';

export const TYPES: ElementTypes = {
  "bug": {
      "attack": {
          "double": [
              "psychic",
              "grass",
              "dark"
          ],
          "half": [
              "fighting",
              "fire",
              "flying",
              "ghost",
              "poison",
              "steel",
              "fairy"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "fighting",
              "grass",
              "ground"
          ],
          "double": [
              "fire",
              "flying",
              "rock"
          ],
          "zero": []
      }
  },
  "dark": {
      "attack": {
          "double": [
              "ghost",
              "psychic"
          ],
          "half": [
              "dark",
              "fighting",
              "fairy"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "dark",
              "ghost"
          ],
          "double": [
              "bug",
              "fighting",
              "fairy"
          ],
          "zero": [
              "psychic"
          ]
      }
  },
  "dragon": {
      "attack": {
          "double": [
              "dragon"
          ],
          "half": [
              "steel"
          ],
          "zero": [
              "fairy"
          ]
      },
      "defense": {
          "half": [
              "electric",
              "fire",
              "grass",
              "water"
          ],
          "double": [
              "dragon",
              "ice",
              "fairy"
          ],
          "zero": []
      }
  },
  "electric": {
      "attack": {
          "double": [
              "flying",
              "water"
          ],
          "half": [
              "dragon",
              "electric",
              "grass"
          ],
          "zero": [
              "ground"
          ]
      },
      "defense": {
          "half": [
              "electric",
              "flying",
              "steel"
          ],
          "double": [
              "ground"
          ],
          "zero": []
      }
  },
  "fairy": {
      "attack": {
          "double": [
              "dark",
              "dragon",
              "fighting"
          ],
          "half": [
              "fire",
              "poison",
              "steel"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "bug",
              "dark",
              "fighting"
          ],
          "double": [
              "poison",
              "steel"
          ],
          "zero": [
              "dragon"
          ]
      }
  },
  "fighting": {
      "attack": {
          "double": [
              "dark",
              "ice",
              "normal",
              "rock",
              "steel"
          ],
          "half": [
              "bug",
              "fairy",
              "flying",
              "poison",
              "psychic"
          ],
          "zero": [
              "ghost"
          ]
      },
      "defense": {
          "half": [
              "bug",
              "dark",
              "rock"
          ],
          "double": [
              "fairy",
              "flying",
              "psychic"
          ],
          "zero": []
      }
  },
  "fire": {
      "attack": {
          "double": [
              "bug",
              "grass",
              "ice",
              "steel"
          ],
          "half": [
              "dragon",
              "fire",
              "rock",
              "water"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "bug",
              "fairy",
              "fire",
              "grass",
              "ice",
              "steel"
          ],
          "double": [
              "bug",
              "fire",
              "flying",
              "ice",
              "poison"
          ],
          "zero": []
      }
  },
  "flying": {
      "attack": {
          "double": [
              "bug",
              "fighting",
              "grass"
          ],
          "half": [
              "electric",
              "rock",
              "steel"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "bug",
              "fighting",
              "grass"
          ],
          "double": [
              "electric",
              "ice",
              "rock"
          ],
          "zero": [
              "ground"
          ]
      }
  },
  "ghost": {
      "attack": {
          "double": [
              "ghost",
              "psychic"
          ],
          "half": [
              "dark"
          ],
          "zero": [
              "normal"
          ]
      },
      "defense": {
          "half": [
              "bug",
              "poison"
          ],
          "double": [
              "ghost",
              "dark"
          ],
          "zero": [
              "normal",
              "fighting"
          ]
      }
  },
  "grass": {
      "attack": {
          "double": [
              "ground",
              "rock",
              "water"
          ],
          "half": [
              "bug",
              "dragon",
              "fire",
              "flying",
              "grass",
              "poison",
              "steel"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "electric",
              "grass",
              "ground",
              "water"
          ],
          "double": [
              "bug",
              "fire",
              "flying",
              "ice",
              "poison"
          ],
          "zero": []
      }
  },
  "ground": {
      "attack": {
          "double": [
              "electric",
              "fire",
              "poison",
              "rock",
              "steel"
          ],
          "half": [
              "bug",
              "grass"
          ],
          "zero": [
              "flying"
          ]
      },
      "defense": {
          "half": [
              "poison",
              "rock"
          ],
          "double": [
              "grass",
              "ice",
              "water"
          ],
          "zero": [
              "electric"
          ]
      }
  },
  "ice": {
      "attack": {
          "double": [
              "dragon",
              "flying",
              "grass",
              "ground"
          ],
          "half": [
              "fire",
              "ice",
              "steel",
              "water"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "ice"
          ],
          "double": [
              "fighting",
              "fire",
              "rock",
              "steel"
          ],
          "zero": []
      }
  },
  "normal": {
      "attack": {
          "double": [],
          "half": [
              "rock",
              "steel"
          ],
          "zero": [
              "ghost"
          ]
      },
      "defense": {
          "half": [],
          "double": [
              "fighting"
          ],
          "zero": [
              "ghost"
          ]
      }
  },
  "poison": {
      "attack": {
          "double": [
              "grass",
              "fairy"
          ],
          "half": [
              "ghost",
              "ground",
              "poison",
              "rock"
          ],
          "zero": [
              "steel"
          ]
      },
      "defense": {
          "half": [
              "bug",
              "fairy",
              "fighting",
              "grass",
              "poison"
          ],
          "double": [
              "ground",
              "psychic"
          ],
          "zero": []
      }
  },
  "psychic": {
      "attack": {
          "double": [
              "fighting",
              "poison"
          ],
          "half": [
              "psychic",
              "steel"
          ],
          "zero": [
              "dark"
          ]
      },
      "defense": {
          "half": [
              "fighting",
              "psychic"
          ],
          "double": [
              "bug",
              "dark",
              "ghost"
          ],
          "zero": []
      }
  },
  "rock": {
      "attack": {
          "double": [
              "bug",
              "fire",
              "flying",
              "ice"
          ],
          "half": [
              "fighting",
              "ground",
              "steel"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "fire",
              "flying",
              "normal",
              "poison"
          ],
          "double": [
              "fighting",
              "grass",
              "ground",
              "steel",
              "water"
          ],
          "zero": []
      }
  },
  "steel": {
      "attack": {
          "double": [
              "fairy",
              "ice",
              "rock"
          ],
          "half": [
              "electric",
              "fire",
              "steel",
              "water"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "bug",
              "dragon",
              "fairy",
              "flying",
              "grass",
              "ice",
              "normal",
              "psychic",
              "rock",
              "steel"
          ],
          "double": [
              "fighting",
              "fire",
              "ground"
          ],
          "zero": [
              "poison"
          ]
      }
  },
  "water": {
      "attack": {
          "double": [
              "fire",
              "ground",
              "rock"
          ],
          "half": [
              "dragon",
              "grass",
              "steel"
          ],
          "zero": []
      },
      "defense": {
          "half": [
              "fire",
              "ice",
              "steel",
              "water"
          ],
          "double": [
              "electric",
              "grass"
          ],
          "zero": []
      }
  }
}