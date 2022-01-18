const romeBuildings = {
  provinceCapital: {
    tier1: {
      city: {
        baseCost: 1500,
        food: 0,
        growth: 0,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 200,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 6,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier2: {
      garrisonColonia: {
        baseCost: 2000,
        food: -1,
        growth: 3,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 250,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 6,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilColonia: {
        baseCost: 2700,
        food: -1,
        growth: 5,
        publicOrder: 0,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 300,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 8,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      garrisonMunicipium: {
        baseCost: 3000,
        food: -4,
        growth: 3,
        publicOrder: 4,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 300,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 6,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilMunicipium: {
        baseCost: 4400,
        food: -4,
        growth: 7,
        publicOrder: 0,
        latin: 4,
        political: 0,
        research: 0,
        income: {
          subsistence: 400,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 10,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      garrisonUrbs: {
        baseCost: 0,
        food: -8,
        growth: 3,
        publicOrder: 6,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 350,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 6,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilUrbs: {
        baseCost: 0,
        food: -8,
        growth: 9,
        publicOrder: 0,
        latin: 6,
        political: 0,
        research: 0,
        income: {
          subsistence: 500,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 12,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  },
  minorSettlement: {
    tier1: {
      village: {
          baseCost: 1200,
          food: 0,
          growth: 1,
          publicOrder: 0,
          latin: 0,
          political: 0,
          research: 0,
          income: {
            subsistence: 50,
            agriculture: 0,
            culture: 0,
            commerce: 0,
            industry: 0
          },
          boost: {
            all: 1,
            agriculture: 0,
            culture: 0,
            commerce: 0,
            industry: 0,
            maritime: 0,
            trade: 0,
            slaves: 0
          }
      }
    },
    tier2: {
      marketSettlement: {
        baseCost: 1800,
        food: -1,
        growth: 2,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 100,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 3,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      farmingSettlement: {
        baseCost: 1800,
        food: -1,
        growth: 0,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 100,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 3,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilSettlement: {
        baseCost: 1900,
        food: -1,
        growth: 2,
        publicOrder: 1,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 100,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 2,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      marketTown: {
        baseCost: 2700,
        food: -4,
        growth: 3,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 150,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 6,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      farmingTown: {
        baseCost: 2600,
        food: -4,
        growth: 3,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 150,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 6,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilTown: {
        baseCost: 2700,
        food: -4,
        growth: 3,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 150,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 4,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      marketColonia: {
        baseCost: 3700,
        food: -8,
        growth: 4,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 200,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 9,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      farmingColonia: {
        baseCost: 3600,
        food: -8,
        growth: 4,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 200,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 9,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      civilColonia: {
        baseCost: 3800,
        food: -8,
        growth: 4,
        publicOrder: 3,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 200,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 6,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  },
  religious: {
    tier1: {
      consescratedGround: {
        baseCost: 700,
        food: 0,
        growth: 0,
        publicOrder: 2,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier2: {
      shrineOfNeptune: {
        baseCost: 1600,
        food: 0,
        growth: 0,
        publicOrder: 2,
        latin: 3,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 10,
          trade: 0,
          slaves: 0
        }
      },
      shrineOfMinerva: {
        baseCost: 1300,
        food: -1,
        growth: 0,
        publicOrder: 4,
        latin: 2,
        political: 0,
        research: 2,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 5,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      shrineOfMars: {
        baseCost: 1200,
        food: -1,
        growth: 0,
        publicOrder: 3,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 3
        }
      },
      shrineOfVulcan: {
        baseCost: 1300,
        food: -1,
        growth: 0,
        publicOrder: 2,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 60,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 5,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      shrineOfJupiter: {
        baseCost: 1700,
        food: -1,
        growth: 0,
        publicOrder: 4,
        latin: 4,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 4,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      templeOfMinerva: {
        baseCost: 2200,
        food: -4,
        growth: 0,
        publicOrder: 6,
        latin: 2,
        political: 0,
        research: 4,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 10,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      templeOfMars: {
        baseCost: 1900,
        food: -4,
        growth: 0,
        publicOrder: 4,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 6
        }
      },
      templeOfVulcan: {
        baseCost: 2100,
        food: -4,
        growth: 0,
        publicOrder: 2,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 120,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 10,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      templeOfJupiter: {
        baseCost: 3500,
        food: -4,
        growth: 0,
        publicOrder: 6,
        latin: 6,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 8,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      templeOfNeptune: {
        baseCost: 3000,
        food: 0,
        growth: 0,
        publicOrder: 2,
        latin: 4,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 20,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      basilicaOfMinerva: {
        baseCost: 2600,
        food: -8,
        growth: 0,
        publicOrder: 8,
        latin: 2,
        political: 0,
        research: 8,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 20,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      basilicaOfMars: {
        baseCost: 3000,
        food: -8,
        growth: 0,
        publicOrder: 5,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 12
        }
      },
      basilicaOfVulcan: {
        baseCost: 3700,
        food: -8,
        growth: 0,
        publicOrder: 2,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 240,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 20,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      basilicaOfJupiter: {
        baseCost: 6300,
        food: -8,
        growth: 0,
        publicOrder: 8,
        latin: 8,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 16,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      basilicaOfNeptune: {
        baseCost: 5000,
        food: 0,
        growth: 0,
        publicOrder: 2,
        latin: 5,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 30,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier5: {
      pantheon: {
        baseCost: 12600,
        food: -8,
        growth: 0,
        publicOrder: 12,
        latin: 12,
        political: 2,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 20,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  },
  sanitation: {
    tier1: {
      aqueduct: {
        baseCost: 800,
        food: 0,
        growth: 2,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier2: {
      waterTank: {
        baseCost: 1300,
        food: -1,
        growth: 2,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 5,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      latrines: {
        baseCost: 1800,
        food: 0,
        growth: 4,
        publicOrder: 2,
        latin: 2,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      fountains: {
        baseCost: 2600,
        food: -1,
        growth: 4,
        publicOrder: 3,
        latin: 4,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 60,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      fireWatch: {
        baseCost: 1900,
        food: -3,
        growth: 2,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 10,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      sewers: {
        baseCost: 3900,
        food: 0,
        growth: 8,
        publicOrder: 2,
        latin: 3,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      publicBaths: {
        baseCost: 5400,
        food: -2,
        growth: 6,
        publicOrder: 4,
        latin: 6,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 120,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      vigilesUrbani: {
        baseCost: 3100,
        food: -6,
        growth: 2,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 20,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      cloaca: {
        baseCost: 7000,
        food: 0,
        growth: 12,
        publicOrder: 2,
        latin: 4,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      },
      Thermae: {
        baseCost: 10200,
        food: -3,
        growth: 8,
        publicOrder: 5,
        latin: 8,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 240,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier5: {
      cloacaMaxima: {
        baseCost: 16000,
        food: 0,
        growth: 16,
        publicOrder: 8,
        latin: 8,
        political: 2,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  },
  amber: {
    tier1: {
      villageAmberShore: {
        baseCost: 1000,
        food: 0,
        growth: 1,
        publicOrder: 1,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 150,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 2,
          slaves: 0
        }
      }
    },
    tier2: {
      settlementAmberCollector: {
        baseCost: 1400,
        food: -1,
        growth: 2,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 250,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 4
          slaves: 0
        }
      }
    }
    tier3: {
      townAmberTrader: {
        baseCost: 1900,
        food: -4,
        growth: 3,
        publicOrder: 3,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 350,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 6,
          slaves: 0
        }
      }
    },
    tier4: {
      coloniaAmberRoad: {
        baseCost: 2500,
        food: -8,
        growth: 4,
        publicOrder: 4,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 500,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 8,
          slaves: 0
        }
      }
    }
  },
  purpleDye: {
    tier1: {
      villageMurexSnailFarm: {
        baseCost: 1100,
        food: 0,
        growth: 1,
        publicOrder: 1,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 200,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 10,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier2: {
      settlementSnailVats: {
        baseCost: 1500,
        food: -1,
        growth: 2,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 350,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 20,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      townDyeWorks: {
        baseCost: 2300,
        food: -4,
        growth: 3,
        publicOrder: 4,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 500,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 30,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      coloniaMasterDyeWorks: {
        baseCost: 3800,
        food: -8,
        growth: 4,
        publicOrder: 6,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 650,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 40,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  },
  glass: {
    tier1: {
      villageGlassware: {
        baseCost: 1000,
        food: 0,
        growth: 1,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 4,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 100
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier2: {
      settlementGlassBlower: {
        baseCost: 1400,
        food: -1,
        growth: 2,
        publicOrder: 1,
        latin: 0,
        political: 0,
        research: 8,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 150
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier3: {
      townGlassMaker: {
        baseCost: 2100,
        food: -4,
        growth: 3,
        publicOrder: 2,
        latin: 0,
        political: 0,
        research: 12,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 200
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    },
    tier4: {
      coloniaMasterGlassMaker: {
        baseCost: 3100,
        food: -8,
        growth: 4,
        publicOrder: 3,
        latin: 0,
        political: 0,
        research: 16,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 300
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }
      }
    }
  }
}

        baseCost: 0,
        food: 0,
        growth: 0,
        publicOrder: 0,
        latin: 0,
        political: 0,
        research: 0,
        income: {
          subsistence: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0
        },
        boost: {
          all: 0,
          agriculture: 0,
          culture: 0,
          commerce: 0,
          industry: 0,
          maritime: 0,
          trade: 0,
          slaves: 0
        }