// src/lib/countryData.js

export const countryInfo = {
        "Turkey": {
          flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
          alliances: ["NATO", "G20", "UN"],
          president: {
            name: "Recep Tayyip Erdoğan",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Recep_Tayyip_Erdo%C4%9Fan_August_2021.jpg",
            bio: "2014'ten beri Türkiye Cumhuriyeti'nin 12. Cumhurbaşkanı olarak görev yapmaktadır."
          },
          general: {
            population: "84.3 Milyon",
            capital: "Ankara",
            region: "Avrasya",
            language: "Türkçe",
            currency: "TRY",
            alliance: "NATO Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "23.7%",
              age15to64: "67.2%",
              over65: "9.1%"
            },
            urbanization: "76.1%",
            literacyRate: "96.7%",
            languages: ["Türkçe", "Kürtçe"],
            ethnicGroups: ["Türk", "Kürt", "Diğer"],
            religions: {
              "İslam": "99%",
              "Diğer": "1%"
            }
          },
          economy: {
            gdp: "720 Milyar USD",
            gdpRank: "20",
            gdpGrowth: "1.8%",
            majorSectors: ["Hizmet", "Sanayi", "Tarım"]
          },
          trade: {
            tradingPartners: ["AB", "Rusya", "Çin", "ABD"],
            mainExports: ["Makine", "Araçlar", "Tekstil"],
            mainImports: ["Petrol", "Makine", "Kimyasallar"]
          },
          military: {
            rank: "11",
            overview: "NATO'nun en büyük ikinci ordusuna sahip",
            personnel: {
              active: "355,200",
              reserve: "378,700"
            },
            equipment: {
              aircraft: "1,067",
              navalAssets: "156"
            },
            budget: "18.2 Milyar USD",
            capabilities: "Kara, Hava, Deniz ve Siber savunma kapasitesi"
          },
          geography: {
            area: "783,562 km²",
            coastline: "7,200 km",
            climate: "Ilıman",
            terrain: ["Dağlar", "Platolar", "Kıyı ovaları"],
            naturalResources: ["Kömür", "Krom", "Cıva"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği"]
          },
          innovation: {
            patents: "Yıllık 8,500",
            startupEcosystem: "Gelişmekte",
            rAndDSpending: "GSYİH'nin %1.1'i"
          },
          education: {
            universities: "207",
            studentPopulation: "7.5 milyon",
            researchOutput: "Yıllık 55,000 akademik yayın"
          },
          timeline: [
            {
              year: 1923,
              event: "Cumhuriyet'in İlanı",
              category: "political",
              description: "Mustafa Kemal Atatürk önderliğinde Türkiye Cumhuriyeti kuruldu."
            },
            {
              year: 1932,
              event: "Türk Dil Kurumu'nun Kuruluşu",
              category: "social",
              description: "Türk dilinin geliştirilmesi için TDK kuruldu."
            },
            {
              year: 1952,
              event: "NATO'ya Katılım",
              category: "military",
              description: "Türkiye, Kuzey Atlantik Antlaşması Örgütü'ne katıldı."
            },
            {
              year: 1963,
              event: "Ankara Anlaşması",
              category: "economic",
              description: "Türkiye-AET Ortaklık Anlaşması imzalandı."
            },
            {
              year: 1987,
              event: "AB'ye Tam Üyelik Başvurusu",
              category: "political",
              description: "Türkiye, AB'ye tam üyelik için başvuruda bulundu."
            },
            {
              year: 1996,
              event: "Gümrük Birliği",
              category: "economic",
              description: "AB ile Gümrük Birliği anlaşması yürürlüğe girdi."
            },
            {
              year: 1999,
              event: "AB Adaylığı",
              category: "political",
              description: "Türkiye'nin Avrupa Birliği adaylığı resmen kabul edildi."
            },
            {
              year: 2001,
              event: "Ekonomik Reform",
              category: "economic",
              description: "Kapsamlı ekonomik reform programı başlatıldı."
            },
            {
              year: 2005,
              event: "AB Müzakereleri",
              category: "political",
              description: "AB ile tam üyelik müzakereleri başladı."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 771.4, growth: 2.9, inflation: 16.3 },
              { year: 2019, gdp: 760.8, growth: 0.9, inflation: 15.2 },
              { year: 2020, gdp: 720.1, growth: 1.8, inflation: 12.3 },
              { year: 2021, gdp: 815.3, growth: 11.0, inflation: 19.6 },
              { year: 2022, gdp: 905.5, growth: 5.5, inflation: 72.3 }
            ],
            keyIndicators: {
              exportValue: "225.4 Milyar USD",
              importValue: "271.7 Milyar USD",
              foreignInvestment: "14.2 Milyar USD",
              unemployment: "10.8%"
            }
          }
        },
        "United States of America": {
          flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
          alliances: ["NATO", "G7", "UN"],
          president: {
            name: "Joe Biden",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/220px-Joe_Biden_presidential_portrait.jpg",
            bio: "Amerika Birleşik Devletleri'nin 46. başkanı olarak görev yapmaktadır."
          },
          general: {
            population: "331 Milyon",
            capital: "Washington, D.C.",
            region: "Kuzey Amerika",
            language: "İngilizce",
            currency: "USD",
            alliance: "NATO Lideri"
          },
          demographics: {
            ageStructure: {
              under15: "18.7%",
              age15to64: "65.2%",
              over65: "16.1%"
            },
            urbanization: "82.8%",
            literacyRate: "99%",
            languages: ["İngilizce", "İspanyolca"],
            ethnicGroups: ["Beyaz", "Hispanik", "Siyahi", "Asyalı"],
            religions: {
              "Hristiyan": "65%",
              "Yahudi": "2%",
              "Diğer": "33%"
            }
          },
          economy: {
            gdp: "21 Trilyon USD",
            gdpRank: "1",
            gdpGrowth: "2.3%",
            majorSectors: ["Hizmet", "Sanayi", "Teknoloji"]
          },
          trade: {
            tradingPartners: ["Çin", "Kanada", "Meksika", "AB"],
            mainExports: ["Teknoloji", "Makine", "Havacılık"],
            mainImports: ["Tüketici Ürünleri", "Petrol", "Elektronik"]
          },
          military: {
            rank: "1",
            overview: "Dünyanın en güçlü ordusu",
            personnel: {
              active: "1.4 Milyon",
              reserve: "845,000"
            },
            equipment: {
              aircraft: "13,200",
              navalAssets: "490"
            },
            budget: "778 Milyar USD",
            capabilities: "Küresel operasyon kapasitesi"
          },
          geography: {
            area: "9,833,517 km²",
            coastline: "19,924 km",
            climate: "Çeşitli",
            terrain: ["Dağlar", "Ovalar", "Çöller"],
            naturalResources: ["Petrol", "Doğalgaz", "Kömür"],
            environmentalIssues: ["İklim değişikliği", "Su kıtlığı"]
          },
          innovation: {
            patents: "Yıllık 597,000",
            startupEcosystem: "Dünya lideri",
            rAndDSpending: "GSYİH'nin %2.8'i"
          },
          education: {
            universities: "4,360",
            studentPopulation: "19.6 milyon",
            researchOutput: "Yıllık 422,800 akademik yayın"
          },
          timeline: [
            {
              year: 1776,
              event: "Bağımsızlık İlanı",
              category: "political",
              description: "Amerika Birleşik Devletleri'nin kuruluşu"
            },
            {
              year: 1865,
              event: "İç Savaşın Sonu",
              category: "military",
              description: "Amerikan İç Savaşı'nın sona ermesi"
            },
            {
              year: 1945,
              event: "II. Dünya Savaşı'nın Sonu",
              category: "military",
              description: "ABD'nin süper güç olarak yükselişi"
            },
            {
              year: 1969,
              event: "Ay'a İniş",
              category: "social",
              description: "Apollo 11 ile ilk insanlı Ay'a iniş"
            },
            {
              year: 1991,
              event: "Soğuk Savaşın Sonu",
              category: "political",
              description: "Sovyetler Birliği'nin dağılması"
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 20580, growth: 2.9, inflation: 2.4 },
              { year: 2019, gdp: 21430, growth: 2.3, inflation: 1.8 },
              { year: 2020, gdp: 20940, growth: -3.4, inflation: 1.2 },
              { year: 2021, gdp: 22990, growth: 5.7, inflation: 4.7 },
              { year: 2022, gdp: 25460, growth: 2.1, inflation: 8.0 }
            ],
            keyIndicators: {
              exportValue: "2.5 Trilyon USD",
              importValue: "3.1 Trilyon USD",
              foreignInvestment: "350.8 Milyar USD",
              unemployment: "3.7%"
            }
          }
        },
        "China": {
          flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png",
          alliances: ["UN", "BRICS", "SCO", "G20"],
          president: {
            name: "Xi Jinping",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Xi_Jinping_2019.jpg",
            bio: "2013'ten bu yana Çin Devlet Başkanı olarak görev yapmaktadır."
          },
          general: {
            population: "1.4 Milyar",
            capital: "Pekin",
            region: "Doğu Asya",
            language: "Mandarin Çincesi",
            currency: "CNY",
            alliance: "BM Güvenlik Konseyi Daimi Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "17.8%",
              age15to64: "70.5%",
              over65: "11.7%"
            },
            urbanization: "61.4%",
            literacyRate: "96.8%",
            languages: ["Mandarin", "Kantonca", "Diğer Lehçeler"],
            ethnicGroups: ["Han Çinlisi", "Zhuang", "Hui", "Uygur", "Tibetli", "Diğer"],
            religions: {
              "Budizm": "18%",
              "Hristiyan": "5%",
              "İnançsız": "73%",
              "Diğer": "4%"
            }
          },
          economy: {
            gdp: "14.7 Trilyon USD",
            gdpRank: "2",
            gdpGrowth: "6.0%",
            majorSectors: ["Sanayi", "Hizmet", "Tarım"]
          },
          trade: {
            tradingPartners: ["ABD", "AB", "Japonya", "Güney Kore"],
            mainExports: ["Elektronik", "Makine", "Tekstil"],
            mainImports: ["Ham petrol", "Yarı iletkenler", "Demir cevheri"]
          },
          military: {
            rank: "3",
            overview: "Dünyanın en büyük aktif askeri personeline sahip",
            personnel: {
              active: "2 Milyon",
              reserve: "510,000"
            },
            equipment: {
              aircraft: "3,260",
              navalAssets: "777"
            },
            budget: "252 Milyar USD",
            capabilities: "Geniş kara, deniz ve hava gücü, nükleer kapasite"
          },
          geography: {
            area: "9,596,961 km²",
            coastline: "14,500 km",
            climate: "Çeşitli",
            terrain: ["Dağlar", "Platolar", "Vadiler", "Kıyı ovaları"],
            naturalResources: ["Kömür", "Demir", "Petrol"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği", "Çölleşme"]
          },
          innovation: {
            patents: "Yıllık 1.4 Milyon",
            startupEcosystem: "Dünya çapında yükselen",
            rAndDSpending: "GSYİH'nin %2.4'ü"
          },
          education: {
            universities: "2,600+",
            studentPopulation: "40 milyon+",
            researchOutput: "Dünya lideri yayın hacmi"
          },
          timeline: [
            {
              year: 1949,
              event: "Çin Halk Cumhuriyeti'nin Kuruluşu",
              category: "political",
              description: "Mao Zedong önderliğinde yeni hükümet kuruldu."
            },
            {
              year: 1978,
              event: "Reform ve Dışa Açılma Politikası",
              category: "economic",
              description: "Deng Xiaoping yönetiminde ekonomik reformlar başladı."
            },
            {
              year: 2001,
              event: "Dünya Ticaret Örgütü'ne Katılım",
              category: "economic",
              description: "Çin, küresel ticaret sistemine dahil oldu."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 13608, growth: 6.6, inflation: 2.1 },
              { year: 2019, gdp: 14260, growth: 6.0, inflation: 2.9 },
              { year: 2020, gdp: 14722, growth: 2.3, inflation: 2.5 },
              { year: 2021, gdp: 17734, growth: 8.1, inflation: 1.5 },
              { year: 2022, gdp: 18100, growth: 3.0, inflation: 2.2 }
            ],
            keyIndicators: {
              exportValue: "3.36 Trilyon USD",
              importValue: "2.69 Trilyon USD",
              foreignInvestment: "163 Milyar USD",
              unemployment: "5.5%"
            }
          }
        },
        "Russia": {
          flag: "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg",
          alliances: ["UN", "BRICS", "SCO"],
          president: {
            name: "Vladimir Putin",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Vladimir_Putin_%28September_2022%29_-_2.jpg",
            bio: "2000 yılından bu yana aralıklarla Rusya Devlet Başkanı olarak görev yapmaktadır."
          },
          general: {
            population: "146 Milyon",
            capital: "Moskova",
            region: "Doğu Avrupa / Kuzey Asya",
            language: "Rusça",
            currency: "Ruble (RUB)",
            alliance: "BM Güvenlik Konseyi Daimi Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "17.3%",
              age15to64: "67.4%",
              over65: "15.3%"
            },
            urbanization: "74.3%",
            literacyRate: "99.7%",
            languages: ["Rusça", "Tatarca", "Ukraynca", "Diğer"],
            ethnicGroups: ["Rus", "Tatar", "Ukraynalı", "Baskır", "Diğer"],
            religions: {
              "Ortodoks Hristiyan": "71%",
              "Müslüman": "10%",
              "Diğer": "19%"
            }
          },
          economy: {
            gdp: "1.48 Trilyon USD",
            gdpRank: "11",
            gdpGrowth: "1.3%",
            majorSectors: ["Enerji", "Metalurji", "Savunma"]
          },
          trade: {
            tradingPartners: ["Çin", "Almanya", "Hollanda", "Türkiye"],
            mainExports: ["Petrol", "Doğalgaz", "Metaller"],
            mainImports: ["Makine", "Elektronik", "Tüketici Ürünleri"]
          },
          military: {
            rank: "2",
            overview: "Geniş nükleer cephaneliğe sahip güçlü askeri yapı",
            personnel: {
              active: "900,000",
              reserve: "2,000,000"
            },
            equipment: {
              aircraft: "4,173",
              navalAssets: "598"
            },
            budget: "65.1 Milyar USD",
            capabilities: "Kara, deniz, hava ve stratejik füze kuvvetleri"
          },
          geography: {
            area: "17,098,242 km²",
            coastline: "37,653 km",
            climate: "Çoğunlukla karasal, kuzey bölgelerde kutup iklimi",
            terrain: ["Ovalar", "Dağlar", "Tundra", "Taiga"],
            naturalResources: ["Petrol", "Doğalgaz", "Ormanlar"],
            environmentalIssues: ["Ormansızlaşma", "Kirlenme", "Kara mayın alanları"]
          },
          innovation: {
            patents: "Yıllık 35,000+",
            startupEcosystem: "Gelişmekte",
            rAndDSpending: "GSYİH'nin %1.1'i"
          },
          education: {
            universities: "741+",
            studentPopulation: "4.4 milyon",
            researchOutput: "Önemli akademik geleneğe sahip"
          },
          timeline: [
            {
              year: 1917,
              event: "Ekim Devrimi",
              category: "political",
              description: "Bolşevikler tarafından çarlık yönetimine son verildi."
            },
            {
              year: 1991,
              event: "Sovyetler Birliği'nin Dağılması",
              category: "political",
              description: "Rusya Federasyonu kuruldu."
            },
            {
              year: 2014,
              event: "Kırım'ın İlhakı",
              category: "political",
              description: "Rusya, Kırım yarımadasını ilhak etti."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 1579, growth: 2.5, inflation: 2.9 },
              { year: 2019, gdp: 1690, growth: 1.3, inflation: 4.5 },
              { year: 2020, gdp: 1470, growth: -3.1, inflation: 3.4 },
              { year: 2021, gdp: 1770, growth: 4.7, inflation: 6.7 },
              { year: 2022, gdp: 1480, growth: -2.2, inflation: 12.0 }
            ],
            keyIndicators: {
              exportValue: "335 Milyar USD",
              importValue: "240 Milyar USD",
              foreignInvestment: "20 Milyar USD",
              unemployment: "5.2%"
            }
          }
        },
        "India": {
          flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
          alliances: ["UN", "BRICS", "SCO", "G20"],
          president: {
            name: "Droupadi Murmu",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Droupadi_Murmu_in_June_2022.jpg",
            bio: "2022'den beri Hindistan Devlet Başkanı olarak görev yapmaktadır."
          },
          general: {
            population: "1.38 Milyar",
            capital: "Yeni Delhi",
            region: "Güney Asya",
            language: "Hintçe, İngilizce",
            currency: "Hindistan Rupisi (INR)",
            alliance: "BRICS Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "26.2%",
              age15to64: "67.0%",
              over65: "6.8%"
            },
            urbanization: "34.9%",
            literacyRate: "77.7%",
            languages: ["Hintçe", "Bengalce", "Telugu", "Tamilce", "Gujarati", "Marathice", "İngilizce"],
            ethnicGroups: ["Hintli", "Dravidya", "Diğer"],
            religions: {
              "Hinduizm": "79.8%",
              "İslam": "14.2%",
              "Diğer": "6%"
            }
          },
          economy: {
            gdp: "3.05 Trilyon USD",
            gdpRank: "5",
            gdpGrowth: "7.0%",
            majorSectors: ["Hizmet", "Sanayi", "Tarım"]
          },
          trade: {
            tradingPartners: ["Çin", "ABD", "Birleşik Arap Emirlikleri", "Suudi Arabistan"],
            mainExports: ["Petrol ürünleri", "Tekstil", "Mücevher"],
            mainImports: ["Ham petrol", "Elektronik", "Altın"]
          },
          military: {
            rank: "4",
            overview: "Dünyanın en büyük ikinci aktif asker sayısına sahip",
            personnel: {
              active: "1.45 Milyon",
              reserve: "1.15 Milyon"
            },
            equipment: {
              aircraft: "2,182",
              navalAssets: "295"
            },
            budget: "72.9 Milyar USD",
            capabilities: "Çok yönlü savunma, nükleer silahlar, uzay yetenekleri"
          },
          geography: {
            area: "3,287,263 km²",
            coastline: "7,516 km",
            climate: "Çeşitli (tropikal, muson, dağ iklimi)",
            terrain: ["Dağlar", "Ovalar", "Plato", "Kıyı bölgeleri"],
            naturalResources: ["Kömür", "Demir cevheri", "Doğalgaz"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği", "Kentleşme"]
          },
          innovation: {
            patents: "Yıllık \~45,000",
            startupEcosystem: "Dünyanın en büyüklerinden biri",
            rAndDSpending: "GSYİH'nin %0.7'si"
          },
          education: {
            universities: "1000+",
            studentPopulation: "37 milyon+",
            researchOutput: "Yükselen akademik yayın sayısı"
          },
          timeline: [
            {
              year: 1947,
              event: "Bağımsızlık",
              category: "political",
              description: "Hindistan, İngiltere'den bağımsızlığını kazandı."
            },
            {
              year: 1950,
              event: "Cumhuriyetin İlanı",
              category: "political",
              description: "Hindistan Cumhuriyeti Anayasası yürürlüğe girdi."
            },
            {
              year: 1991,
              event: "Ekonomik Liberalizasyon",
              category: "economic",
              description: "Piyasa odaklı reformlar ivme kazandı."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 2713, growth: 6.1, inflation: 3.4 },
              { year: 2019, gdp: 2875, growth: 4.0, inflation: 3.7 },
              { year: 2020, gdp: 2668, growth: -6.6, inflation: 6.6 },
              { year: 2021, gdp: 3173, growth: 8.9, inflation: 5.1 },
              { year: 2022, gdp: 3390, growth: 7.0, inflation: 6.8 }
            ],
            keyIndicators: {
              exportValue: "420 Milyar USD",
              importValue: "610 Milyar USD",
              foreignInvestment: "81.7 Milyar USD",
              unemployment: "6.4%"
            }
          }
        },
        "Germany": {
          flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
          alliances: ["EU", "NATO", "UN"],
          president: {
            name: "Frank-Walter Steinmeier",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Frank-Walter_Steinmeier_%28cropped%29.jpg",
            bio: "2017'den bu yana Almanya Federal Cumhurbaşkanı olarak görev yapmaktadır."
          },
          general: {
            population: "83.2 Milyon",
            capital: "Berlin",
            region: "Batı Avrupa",
            language: "Almanca",
            currency: "Euro (EUR)",
            alliance: "EU'nun Motor Ülkesi"
          },
          demographics: {
            ageStructure: {
              under15: "13.2%",
              age15to64: "64.2%",
              over65: "22.6%"
            },
            urbanization: "77.5%",
            literacyRate: "99%",
            languages: ["Almanca"],
            ethnicGroups: ["Alman", "Türk", "Diğer"],
            religions: {
              "Hristiyan": "54%",
              "İnançsız": "36%",
              "Diğer": "10%"
            }
          },
          economy: {
            gdp: "4.2 Trilyon USD",
            gdpRank: "4",
            gdpGrowth: "1.5%",
            majorSectors: ["Sanayi", "Hizmet", "Tarım"]
          },
          trade: {
            tradingPartners: ["Çin", "ABD", "Fransa", "Hollanda"],
            mainExports: ["Araçlar", "Makineler", "Kimyasallar"],
            mainImports: ["Makineler", "Araçlar", "Elektronik"]
          },
          military: {
            rank: "7",
            overview: "AB'nin büyük askeri güçlerinden biri",
            personnel: {
              active: "184,000",
              reserve: "30,000"
            },
            equipment: {
              aircraft: "617",
              navalAssets: "81"
            },
            budget: "56 Milyar USD",
            capabilities: "Kara, deniz ve hava kuvvetleri"
          },
          geography: {
            area: "357,022 km²",
            coastline: "2,389 km",
            climate: "Ilıman",
            terrain: ["Düzlükler", "Ormanlık alanlar", "Dağlar"],
            naturalResources: ["Kömür", "Doğalgaz", "Demir cevheri"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği"]
          },
          innovation: {
            patents: "Yıllık 67,000",
            startupEcosystem: "Gelişmekte",
            rAndDSpending: "GSYİH'nin %3.1'i"
          },
          education: {
            universities: "427",
            studentPopulation: "2.9 milyon",
            researchOutput: "Yıllık 100,000 akademik yayın"
          },
          timeline: [
            {
              year: 1949,
              event: "Almanya Federal Cumhuriyeti'nin Kuruluşu",
              category: "political",
              description: "II. Dünya Savaşı'ndan sonra Almanya'nın batısında yeni hükümet kuruldu."
            },
            {
              year: 1990,
              event: "Almanya'nın Yeniden Birleşmesi",
              category: "political",
              description: "Doğu ve Batı Almanya birleştirildi."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 4073, growth: 1.5, inflation: 1.8 },
              { year: 2019, gdp: 4210, growth: 0.6, inflation: 1.4 },
              { year: 2020, gdp: 3842, growth: -4.9, inflation: 0.4 },
              { year: 2021, gdp: 4212, growth: 2.6, inflation: 3.1 },
              { year: 2022, gdp: 4455, growth: 1.8, inflation: 7.9 }
            ],
            keyIndicators: {
              exportValue: "1.5 Trilyon USD",
              importValue: "1.28 Trilyon USD",
              foreignInvestment: "670 Milyar USD",
              unemployment: "5.4%"
            }
          }
        },
        "United Kingdom": {
          flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
          alliances: ["EU", "NATO", "UN"],
          president: {
            name: "Charles III",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Charles_III_in_2021.jpg",
            bio: "2022'de tahta çıkan Birleşik Krallık Kralı"
          },
          general: {
            population: "67.2 Milyon",
            capital: "Londra",
            region: "Batı Avrupa",
            language: "İngilizce",
            currency: "Pound (GBP)",
            alliance: "NATO'nun kurucu üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "17.7%",
              age15to64: "63.5%",
              over65: "18.8%"
            },
            urbanization: "83%",
            literacyRate: "99%",
            languages: ["İngilizce"],
            ethnicGroups: ["Beyaz", "Hindistanlı", "Pakistanlı", "Diğer"],
            religions: {
              "Hristiyan": "59.5%",
              "İnançsız": "38.4%",
              "Diğer": "2.1%"
            }
          },
          economy: {
            gdp: "2.83 Trilyon USD",
            gdpRank: "6",
            gdpGrowth: "1.3%",
            majorSectors: ["Hizmet", "Sanayi", "Tarım"]
          },
          trade: {
            tradingPartners: ["ABD", "Almanya", "Çin", "Hollanda"],
            mainExports: ["Araçlar", "İlaçlar", "Makine"],
            mainImports: ["Makine", "Araçlar", "Petrol"]
          },
          military: {
            rank: "8",
            overview: "Dünyanın en eski ve etkili ordularından biri",
            personnel: {
              active: "194,000",
              reserve: "80,000"
            },
            equipment: {
              aircraft: "833",
              navalAssets: "77"
            },
            budget: "59 Milyar USD",
            capabilities: "Geniş stratejik operasyon kapasitesi, nükleer yetenekler"
          },
          geography: {
            area: "242,495 km²",
            coastline: "12,429 km",
            climate: "Ilıman okyanus iklimi",
            terrain: ["Düzlüklükler", "Dağlar", "Vadiler"],
            naturalResources: ["Kömür", "Doğalgaz", "Balıkçılık"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği"]
          },
          innovation: {
            patents: "Yıllık 19,000",
            startupEcosystem: "Dünyanın en büyüklerinden biri",
            rAndDSpending: "GSYİH'nin %1.7'si"
          },
          education: {
            universities: "130+",
            studentPopulation: "2.4 milyon",
            researchOutput: "Yıllık 170,000 akademik yayın"
          },
          timeline: [
            {
              year: 1066,
              event: "Norman Fethi",
              category: "political",
              description: "Normanlar, İngiltere'yi fethetti ve yönetimi ele geçirdi."
            },
            {
              year: 1801,
              event: "İngiliz-İrlanda Birliği",
              category: "political",
              description: "Birleşik Krallık kuruldu."
            },
            {
              year: 1945,
              event: "II. Dünya Savaşı'nın Sonu",
              category: "military",
              description: "Birleşik Krallık, II. Dünya Savaşı'ndan büyük askeri güç olarak çıktı."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 2853, growth: 1.3, inflation: 2.5 },
              { year: 2019, gdp: 2830, growth: 1.4, inflation: 1.8 },
              { year: 2020, gdp: 2715, growth: -9.3, inflation: 0.9 },
              { year: 2021, gdp: 3100, growth: 7.4, inflation: 2.5 },
              { year: 2022, gdp: 2947, growth: 4.1, inflation: 10.1 }
            ],
            keyIndicators: {
              exportValue: "450 Milyar USD",
              importValue: "620 Milyar USD",
              foreignInvestment: "70.2 Milyar USD",
              unemployment: "4.1%"
            }
          }
        },
        "France": {
          flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
          alliances: ["EU", "NATO", "UN"],
          president: {
            name: "Emmanuel Macron",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Emmanuel_Macron_%282019-05-09%29.jpg",
            bio: "2017'den beri Fransa Cumhurbaşkanı olarak görev yapmaktadır."
          },
          general: {
            population: "67.1 Milyon",
            capital: "Paris",
            region: "Batı Avrupa",
            language: "Fransızca",
            currency: "Euro (EUR)",
            alliance: "NATO ve AB Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "18.0%",
              age15to64: "63.1%",
              over65: "18.9%"
            },
            urbanization: "80.4%",
            literacyRate: "99%",
            languages: ["Fransızca"],
            ethnicGroups: ["Fransız", "Cezayirli", "Diğer"],
            religions: {
              "Hristiyan": "63%",
              "İnançsız": "28%",
              "Diğer": "9%"
            }
          },
          economy: {
            gdp: "2.78 Trilyon USD",
            gdpRank: "7",
            gdpGrowth: "1.6%",
            majorSectors: ["Hizmet", "Sanayi", "Tarım"]
          },
          trade: {
            tradingPartners: ["Almanya", "İtalya", "İspanya", "ABD"],
            mainExports: ["Makine", "Havacılık", "Kimyasallar"],
            mainImports: ["Makine", "Petrol", "Araçlar"]
          },
          military: {
            rank: "6",
            overview: "Dünya genelinde operasyon kapasitesine sahip", 
            personnel: {
              active: "270,000",
              reserve: "35,000"
            },
            equipment: {
              aircraft: "1,056",
              navalAssets: "190"
            },
            budget: "58.0 Milyar USD",
            capabilities: "Nükleer kapasite, geniş operasyonel erişim"
          },
          geography: {
            area: "643,801 km²",
            coastline: "3,427 km",
            climate: "Ilıman",
            terrain: ["Yaylalar", "Ovalar", "Dağlar"],
            naturalResources: ["Kömür", "Demir cevheri", "Boksit"],
            environmentalIssues: ["Hava kirliliği", "Su kirliliği"]
          },
          innovation: {
            patents: "Yıllık 13,000",
            startupEcosystem: "Gelişmekte",
            rAndDSpending: "GSYİH'nin %2.2'si"
          },
          education: {
            universities: "300+",
            studentPopulation: "2.5 milyon",
            researchOutput: "Yüksek akademik yayın sayısı"
          },
          timeline: [
            {
              year: 1789,
              event: "Fransız Devrimi",
              category: "political",
              description: "Prensipler ve sosyal yapı üzerinde büyük etkiler bırakan bir halk ayaklanması"
            },
            {
              year: 1944,
              event: "II. Dünya Savaşı'nın Sonu",
              category: "military",
              description: "Fransa, işgalden kurtuldu ve yeniden egemen bir hale geldi"
            },
            {
              year: 1958,
              event: "Beşinci Cumhuriyet'in Kuruluşu",
              category: "political",
              description: "Charles de Gaulle önderliğinde yeni anayasa kabul edildi"
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 2789, growth: 1.8, inflation: 1.8 },
              { year: 2019, gdp: 2749, growth: 1.2, inflation: 1.3 },
              { year: 2020, gdp: 2609, growth: -8.0, inflation: 0.5 },
              { year: 2021, gdp: 2924, growth: 6.8, inflation: 2.0 },
              { year: 2022, gdp: 3011, growth: 2.6, inflation: 5.8 }
            ],
            keyIndicators: {
              exportValue: "583 Milyar USD",
              importValue: "673 Milyar USD",
              foreignInvestment: "50 Milyar USD",
              unemployment: "8.4%"
            }
          }
        },
        "Brazil": {
          flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
          alliances: ["UN", "BRICS", "G20"],
          president: {
            name: "Luiz Inácio Lula da Silva",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Luiz_In%C3%A1cio_Lula_da_Silva_2007.jpg",
            bio: "Brezilya Devlet Başkanı olarak üçüncü görev süresine başlayan siyasetçi"
          },
          general: {
            population: "212.6 Milyon",
            capital: "Brezilya",
            region: "Güney Amerika",
            language: "Portekizce",
            currency: "Brezilya Reali (BRL)",
            alliance: "BRICS Üyesi"
          },
          demographics: {
            ageStructure: {
              under15: "21.8%",
              age15to64: "68.9%",
              over65: "9.3%"
            },
            urbanization: "86%",
            literacyRate: "93.2%",
            languages: ["Portekizce"],
            ethnicGroups: ["Beyaz", "Karma", "Afrika kökenli", "Diğer"],
            religions: {
              "Hristiyan": "87%",
              "Diğer": "13%"
            }
          },
          economy: {
            gdp: "1.84 Trilyon USD",
            gdpRank: "12",
            gdpGrowth: "2.3%",
            majorSectors: ["Hizmet", "Sanayi", "Tarım"]
          },
          trade: {
            tradingPartners: ["Çin", "ABD", "Arjantin", "Almanya"],
            mainExports: ["Soya Fasulyesi", "Ham Petrol", "Demir Cevheri"],
            mainImports: ["Makine", "Petrol", "Elektronik"]
          },
          military: {
            rank: "10",
            overview: "Bölgesel lider, geniş kara kuvvetlerine sahip",
            personnel: {
              active: "334,500",
              reserve: "1.34 Milyon"
            },
            equipment: {
              aircraft: "727",
              navalAssets: "110"
            },
            budget: "29.3 Milyar USD",
            capabilities: "Bölgesel savunma ve barış gücü operasyonları"
          },
          geography: {
            area: "8,515,767 km²",
            coastline: "7,491 km",
            climate: "Tropikal",
            terrain: ["Amazon Ormanları", "Dağlar", "Düzlükler"],
            naturalResources: ["Altın", "Demir Cevheri", "Petrol"],
            environmentalIssues: ["Ormansızlaşma", "Su kirliliği", "Biyoçeşitlilik kaybı"]
          },
          innovation: {
            patents: "Yıllık 6,500",
            startupEcosystem: "Gelişmekte olan",
            rAndDSpending: "GSYİH'nin %1.2'si"
          },
          education: {
            universities: "2,367",
            studentPopulation: "8.3 milyon",
            researchOutput: "Yıllık 60,000 akademik yayın"
          },
          timeline: [
            {
              year: 1822,
              event: "Bağımsızlık",
              category: "political",
              description: "Brezilya, Portekiz'den bağımsızlığını kazandı."
            },
            {
              year: 1964,
              event: "Askeri Darbe",
              category: "political",
              description: "Askeri rejim iktidarı ele geçirdi."
            },
            {
              year: 1985,
              event: "Demokrasinin Yeniden Kurulması",
              category: "political",
              description: "Sivil yönetim yeniden tesis edildi."
            }
          ],
          economicData: {
            gdpTrend: [
              { year: 2018, gdp: 2055, growth: 1.3, inflation: 3.7 },
              { year: 2019, gdp: 2150, growth: 1.1, inflation: 3.7 },
              { year: 2020, gdp: 2088, growth: -3.9, inflation: 3.2 },
              { year: 2021, gdp: 2494, growth: 4.6, inflation: 8.3 },
              { year: 2022, gdp: 2630, growth: 2.9, inflation: 10.1 }
            ],
            keyIndicators: {
              exportValue: "280 Milyar USD",
              importValue: "220 Milyar USD",
              foreignInvestment: "60.4 Milyar USD",
              unemployment: "11.1%"
            }
          }
        }
      };
/* Karşılaştırma kategorileri */
export const comparisonCategories = {
  economy: ["GSYİH", "Büyüme Oranı", "Enflasyon"],
  military: ["Aktif Personel", "Savunma Bütçesi", "Ekipman"],
  demographics: ["Nüfus", "Ortalama Yaş", "Şehirleşme"],
  geography: ["Toplam Alan", "Sahil Şeridi", "İklim"]
};

/* Karşılaştırma verilerini getiren fonksiyon */
export function getComparisonData(country1, country2, category) {
  const data1 = countryInfo[country1];
  const data2 = countryInfo[country2];
  switch (category) {
    case 'economy':
      return {
        labels: comparisonCategories.economy,
        datasets: [
          {
            label: country1,
            data: [
              parseFloat(data1.economy.gdp),
              parseFloat(data1.economy.gdpGrowth),
              data1.economicData.gdpTrend[data1.economicData.gdpTrend.length - 1].inflation
            ]
          },
          {
            label: country2,
            data: [
              parseFloat(data2.economy.gdp),
              parseFloat(data2.economy.gdpGrowth),
              data2.economicData.gdpTrend[data2.economicData.gdpTrend.length - 1].inflation
            ]
          }
        ]
      };
    case 'military':
      return {
        labels: comparisonCategories.military,
        datasets: [
          {
            label: country1,
            data: [
              parseInt(data1.military.personnel.active.replace(/[^0-9]/g, '')),
              parseInt(data1.military.budget.replace(/[^0-9]/g, '')),
              parseInt(data1.military.equipment.aircraft.replace(/[^0-9]/g, ''))
            ]
          },
          {
            label: country2,
            data: [
              parseInt(data2.military.personnel.active.replace(/[^0-9]/g, '')),
              parseInt(data2.military.budget.replace(/[^0-9]/g, '')),
              parseInt(data2.military.equipment.aircraft.replace(/[^0-9]/g, ''))
            ]
          }
        ]
      };

    default:
      return null;
  }
}
