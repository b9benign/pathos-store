const STORE_DATA = [
        // 1/6 running
        {
            id:2,
            category:'Running',
            name:'Sixer',
            price:95,
            brand:'Nike',
            gender:'men'
        },
        {
            id:6,
            category:'Running',
            name:'Superb 7',
            price:70,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:7,
            category:'Running',
            name:'Airflow',
            price:80,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:3,
            category:'Running',
            name:'Phase 7',
            price:80,
            brand:'Nike',
            gender:'men'
        },
        {
            id:4,
            category:'Running',
            name:'Finisher',
            price:100,
            brand:'Nike',
            gender:'women'
        },
        {
            id:5,
            category:'Running',
            name:'Strafer 8',
            price:110,
            brand:'Nike',
            gender:'women'
        },
        {
            id:8,
            category:'Running',
            name:'Sprinter',
            price:65,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:22,
            category:'Running',
            name:'Cloudnova',
            price:170,
            brand:'ON',
            gender:'men'
        },
        {
            id:40,
            category:'Lifestyle',
            name:'Basilisk',
            price:95,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:32,
            category:'Lifestyle',
            name:'Allstar',
            price:90,
            brand:'Nike',
            gender:'women'
        },
        {
            id:1,
            category:'Running',
            name:'Model 3',
            price:110,
            brand:'Nike',
            gender:'men'
        },
        {
            id:9,
            category:'Running',
            name:'Slickz',
            price:65,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:10,
            category:'Running',
            name:'Nicer Dicer',
            price:105,
            brand:'Adidas',
            gender:'men'
        },
        // 3/6 running
        {
            id:11,
            category:'Running',
            name:'Jumpstar',
            price:110,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:12,
            category:'Running',
            name:'Turbo',
            price:130,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:13,
            category:'Running',
            name:'Special 99',
            price:135,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:14,
            category:'Running',
            name:'Runner-up',
            price:125,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:15,
            category:'Running',
            name:'Splinter',
            price:100,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:18,
            category:'Running',
            name:'Retrowave 83',
            price:70,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:33,
            category:'Lifestyle',
            name:'Regular 230',
            price:95,
            brand:'Nike',
            gender:'men'
        },
        {
            id:23,
            category:'Running',
            name:'Helixmaster',
            price:155,
            brand:'ON',
            gender:'women'
        },
        {
            id:24,
            category:'Running',
            name:'Hyperdust',
            price:160,
            brand:'ON',
            gender:'women'
        },
        {
            id:25,
            category:'Running',
            name:'Slammer',
            price:160,
            brand:'ON',
            gender:'women'
        },
        // 6/6 running
        {
            id:28,
            category:'Running',
            name:'Sk8-hi',
            price:60,
            brand:'Vans',
            gender:'women'
        },
        {
            id:16,
            category:'Running',
            name:'Perfecto',
            price:60,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:17,
            category:'Running',
            name:'Rotor',
            price:55,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:29,
            category:'Running',
            name:'Canvas',
            price:70,
            brand:'Vans',
            gender:'men'
        },
        {
            id:30,
            category:'Running',
            name:'Model 97',
            price:55,
            brand:'Vans',
            gender:'women'
        },
        // lifestyle
        {
            id:31,
            category:'Lifestyle',
            name:'Superfly',
            price:80,
            brand:'Nike',
            gender:'men'
        },
        {
            id:39,
            category:'Lifestyle',
            name:'Player One',
            price:90,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:34,
            category:'Lifestyle',
            name:'Subliminal',
            price:80,
            brand:'Nike',
            gender:'men'
        },
        {
            id:19,
            category:'Running',
            name:'Omega',
            price:65,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:20,
            category:'Running',
            name:'Salazar',
            price:60,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:21,
            category:'Running',
            name:'Superflux',
            price:140,
            brand:'ON',
            gender:'men'
        },
        {
            id:27,
            category:'Running',
            name:'Millenium',
            price:65,
            brand:'Vans',
            gender:'men'
        },
        {
            id:56,
            category:'Lifestyle',
            name:'Kool 03',
            price:80,
            brand:'Vans',
            gender:'men'
        },
        {
            id:57,
            category:'Lifestyle',
            name:'Retro 87',
            price:85,
            brand:'Vans',
            gender:'women'
        },
        {
            id:37,
            category:'Lifestyle',
            name:'Steadfast',
            price:110,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:38,
            category:'Lifestyle',
            name:'Scenery',
            price:105,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:41,
            category:'Lifestyle',
            name:'Gummo',
            price:130,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:35,
            category:'Lifestyle',
            name:'Yakuza 11',
            price:100,
            brand:'Nike',
            gender:'men'
        },
        {
            id:36,
            category:'Lifestyle',
            name:'Anno 07',
            price:105,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:26,
            category:'Running',
            name:'Chilly',
            price:60,
            brand:'Vans',
            gender:'women'
        },
        {
            id:42,
            category:'Lifestyle',
            name:'Stargaze',
            price:135,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:45,
            category:'Lifestyle',
            name:'Yeet Feet',
            price:110,
            brand:'Jordan',
            gender:'women'
        },
        // 4/6 lifestyle
        {
            id:46,
            category:'Lifestyle',
            name:'Hera',
            price:90,
            brand:'ON',
            gender:'men'
        },
        {
            id:54,
            category:'Lifestyle',
            name:'Zoran',
            price:75,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:55,
            category:'Lifestyle',
            name:'Koloss',
            price:65,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:43,
            category:'Lifestyle',
            name:'Menace',
            price:120,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:44,
            category:'Lifestyle',
            name:'Flight',
            price:85,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:71,
            category:'Court',
            name:'big-O',
            price:95,
            brand:'ON',
            gender:'men'
        },
        {
            id:47,
            category:'Lifestyle',
            name:'Jupiter',
            price:85,
            brand:'ON',
            gender:'women'
        },
        {
            id:51,
            category:'Lifestyle',
            name:'Dizzy',
            price:55,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:52,
            category:'Lifestyle',
            name:'Vertigo',
            price:55,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:53,
            category:'Lifestyle',
            name:'Hireme 69',
            price:60,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:72,
            category:'Court',
            name:'Doubletime',
            price:90,
            brand:'ON',
            gender:'men'
        },
        {
            id:73,
            category:'Court',
            name:'Tripletime',
            price:95,
            brand:'ON',
            gender:'men'
        },
        // 6/6 lifestyle 
        {
            id:48,
            category:'Lifestyle',
            name:'Odin',
            price:110,
            brand:'ON',
            gender:'women'
        },
        {
            id:49,
            category:'Lifestyle',
            name:'Zuko',
            price:110,
            brand:'ON',
            gender:'men'
        },
        {
            id:50,
            category:'Lifestyle',
            name:'Bertram 09',
            price:90,
            brand:'ON',
            gender:'women'
        },
        {
            id:58,
            category:'Lifestyle',
            name:'Samsa',
            price:80,
            brand:'Vans',
            gender:'women'
        },
        {
            id:59,
            category:'Lifestyle',
            name:'The Cure',
            price:90,
            brand:'Vans',
            gender:'women'
        },
        {
            id:60,
            category:'Lifestyle',
            name:'Veil',
            price:70,
            brand:'Vans',
            gender:'men'
        },
        // 1/6 court
        {
            id:61,
            category:'Court',
            name:'Superstarski',
            price:130,
            brand:'Nike',
            gender:'men'
        },
        {
            id:65,
            category:'Court',
            name:'Sipuku',
            price:140,
            brand:'Nike',
            gender:'women'
        },
        // 2/6 court
        {
            id:66,
            category:'Court',
            name:'Topper-Flopper',
            price:130,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:67,
            category:'Court',
            name:'Addos',
            price:135,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:68,
            category:'Court',
            name:'Ruger 22',
            price:140,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:90,
            category:'Court',
            name:'Superlight',
            price:65,
            brand:'Vans',
            gender:'women'
        },
        {
            id:91,
            category:'Skate',
            name:'Superlight',
            price:65,
            brand:'Nike',
            gender:'men'
        },
        {
            id:92,
            category:'Skate',
            name:'Anticipate',
            price:75,
            brand:'Nike',
            gender:'men'
        },
        {
            id:69,
            category:'Court',
            name:'Sixshooter',
            price:140,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:70,
            category:'Court',
            name:'Quickdraw .45',
            price:115,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:74,
            category:'Court',
            name:'Quadrupletime',
            price:80,
            brand:'ON',
            gender:'men'
        },
        {
            id:75,
            category:'Court',
            name:'Veryfasttime',
            price:100,
            brand:'ON',
            gender:'women'
        },
        // 4/6 court
        {
            id:76,
            category:'Court',
            name:'Steampunk 500',
            price:100,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:77,
            category:'Court',
            name:'Dieselpunk 33',
            price:90,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:78,
            category:'Court',
            name:'Retrofuturism',
            price:80,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:62,
            category:'Court',
            name:'Court Style',
            price:130,
            brand:'Nike',
            gender:'women'
        },
        {
            id:63,
            category:'Court',
            name:'Special 1337',
            price:120,
            brand:'Nike',
            gender:'men'
        },
        {
            id:64,
            category:'Court',
            name:'Order 66',
            price:155,
            brand:'Nike',
            gender:'men'
        },
        {
            id:79,
            category:'Court',
            name:'Fancypants',
            price:85,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:80,
            category:'Court',
            name:'Frostbite',
            price:100,
            brand:'New Balance',
            gender:'men'
        },
        // 5/6 court
        {
            id:81,
            category:'Court',
            name:'Notthecountry',
            price:155,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:82,
            category:'Court',
            name:'Fieldday',
            price:215,
            brand:'Jordan',
            gender:'men'
        },
        
        // 6/6 court
        {
            id:86,
            category:'Court',
            name:'Sick Flick',
            price:70,
            brand:'Vans',
            gender:'men'
        },
        {
            id:87,
            category:'Court',
            name:'Great Plans',
            price:80,
            brand:'Vans',
            gender:'women'
        },
        {
            id:88,
            category:'Court',
            name:'Cool Cans',
            price:90,
            brand:'Vans',
            gender:'women'
        },
        {
            id:89,
            category:'Court',
            name:'Quicktrick 7',
            price:95,
            brand:'Vans',
            gender:'men'
        },
        {
            id:83,
            category:'Court',
            name:'Flipper 900',
            price:190,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:84,
            category:'Court',
            name:'Schmordan',
            price:210,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:85,
            category:'Court',
            name:'Blazer 1',
            price:170,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:93,
            category:'Skate',
            name:'Edgegrinder',
            price:80,
            brand:'Nike',
            gender:'women'
        },
        {
            id:94,
            category:'Skate',
            name:'Topspin',
            price:80,
            brand:'Nike',
            gender:'men'
        },
        {
            id:95,
            category:'Skate',
            name:'Minze',
            price:75,
            brand:'Nike',
            gender:'women'
        },
        // 2/6 Skate
        {
            id:96,
            category:'Skate',
            name:'Backtrack 2003',
            price:130,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:97,
            category:'Skate',
            name:'Benchmark',
            price:130,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:107,
            category:'Skate',
            name:'Mid Volume',
            price:110,
            brand:'ON',
            gender:'men'
        },
        {
            id:110,
            category:'Skate',
            name:'Komplex 4',
            price:100,
            brand:'ON',
            gender:'women'
        },
        {
            id:98,
            category:'Skate',
            name:'Walkman 83',
            price:145,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:101,
            category:'Skate',
            name:'Skyhigh',
            price:160,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:102,
            category:'Skate',
            name:'Grounded 90',
            price:175,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:99,
            category:'Skate',
            name:'Star-0',
            price:135,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:100,
            category:'Skate',
            name:'Niagara',
            price:120,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:103,
            category:'Skate',
            name:'Model C-37',
            price:155,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:104,
            category:'Skate',
            name:'Chaser',
            price:160,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:105,
            category:'Skate',
            name:'Tailgate',
            price:170,
            brand:'Jordan',
            gender:'men'
        },
        // 4/6 skate
        {
            id:106,
            category:'Skate',
            name:'Sinatra',
            price:100,
            brand:'ON',
            gender:'men'
        },
        
        // 5/6 skate
        {
            id:111,
            category:'Skate',
            name:'Relocate',
            price:75,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:108,
            category:'Skate',
            name:'Presley 73',
            price:115,
            brand:'ON',
            gender:'women'
        },
        {
            id:109,
            category:'Skate',
            name:'Skatemaster',
            price:90,
            brand:'ON',
            gender:'women'
        },
        {
            id:112,
            category:'Skate',
            name:'Viper',
            price:80,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:113,
            category:'Skate',
            name:'Chameleon',
            price:110,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:114,
            category:'Skate',
            name:'Sahara',
            price:95,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:115,
            category:'Skate',
            name:'Strafe Wave',
            price:80,
            brand:'New Balance',
            gender:'women'
        },
        // 6/6 brand
        {
            id:116,
            category:'Skate',
            name:'Checkerboard',
            price:55,
            brand:'Vans',
            gender:'women'
        },
        {
            id:131,
            category:'Outdoor',
            name:'Cloud 7',
            price:130,
            brand:'ON',
            gender:'men'
        },
        {
            id:139,
            category:'Outdoor',
            name:'Autumn',
            price:175,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:117,
            category:'Skate',
            name:'New Skool',
            price:65,
            brand:'Vans',
            gender:'women'
        },
        
        {
            id:120,
            category:'Skate',
            name:'York Demo',
            price:60,
            brand:'Vans',
            gender:'men'
        },
        {
            id:121,
            category:'Outdoor',
            name:'Terrain',
            price:145,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:118,
            category:'Skate',
            name:'Old Skool',
            price:70,
            brand:'Vans',
            gender:'men'
        },
        {
            id:119,
            category:'Skate',
            name:'Kyle Walker',
            price:70,
            brand:'Vans',
            gender:'women'
        },
        {
            id:122,
            category:'Outdoor',
            name:'Terraform',
            price:135,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:123,
            category:'Outdoor',
            name:'Outskirts',
            price:155,
            brand:'Adidas',
            gender:'men'
        },
        {
            id:124,
            category:'Outdoor',
            name:'Palmer 2008',
            price:150,
            brand:'Adidas',
            gender:'women'
        },
        {
            id:125,
            category:'Outdoor',
            name:'Nightline',
            price:130,
            brand:'Adidas',
            gender:'men'
        },
        // 2/6 outdoor
        {
            id:126,
            category:'Outdoor',
            name:'Tuned 5',
            price:110,
            brand:'Nike',
            gender:'women'
        },
        {
            id:127,
            category:'Outdoor',
            name:'Air Max 5',
            price:105,
            brand:'Nike',
            gender:'men'
        },
        {
            id:128,
            category:'Outdoor',
            name:'City Rep TR',
            price:120,
            brand:'Nike',
            gender:'women'
        },
        
        {
            id:130,
            category:'Outdoor',
            name:'Zoom Fire',
            price:100,
            brand:'Nike',
            gender:'men'
        },
        {
            id:129,
            category:'Outdoor',
            name:'90s Essential',
            price:105,
            brand:'Nike',
            gender:'men'
        },
        {
            id:140,
            category:'Outdoor',
            name:'Windbreaker',
            price:220,
            brand:'Jordan',
            gender:'women'
        },
        // 5/6 outdoor
        {
            id:141,
            category:'Outdoor',
            name:'Vox Populi',
            price:90,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:132,
            category:'Outdoor',
            name:'Cloud X3',
            price:120,
            brand:'ON',
            gender:'men'
        },
        {
            id:133,
            category:'Outdoor',
            name:'Cloudrift',
            price:140,
            brand:'ON',
            gender:'women'
        },
        {
            id:134,
            category:'Outdoor',
            name:'Hyperbeast',
            price:145,
            brand:'ON',
            gender:'women'
        },
        {
            id:135,
            category:'Outdoor',
            name:'Cloudmonster',
            price:125,
            brand:'ON',
            gender:'men'
        },
        // 4/6 outdoor
        {
            id:136,
            category:'Outdoor',
            name:'Stonefaced',
            price:180,
            brand:'Jordan',
            gender:'women'
        },
        {
            id:137,
            category:'Outdoor',
            name:'Mudder Special',
            price:190,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:138,
            category:'Outdoor',
            name:'Edition 47',
            price:200,
            brand:'Jordan',
            gender:'men'
        },
        {
            id:142,
            category:'Outdoor',
            name:'Flikflak',
            price:100,
            brand:'New Balance',
            gender:'women'
        },
        {
            id:143,
            category:'Outdoor',
            name:'Winter Ed.',
            price:105,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:144,
            category:'Outdoor',
            name:'The Remaster',
            price:85,
            brand:'New Balance',
            gender:'men'
        },
        {
            id:145,
            category:'Outdoor',
            name:'Thunder 4',
            price:90,
            brand:'New Balance',
            gender:'women'
        },
        // 6/6 outdoor
        {
            id:146,
            category:'Outdoor',
            name:'Colfox',
            price:110,
            brand:'Vans',
            gender:'men'
        },
        {
            id:149,
            category:'Outdoor',
            name:'Velcro',
            price:120,
            brand:'Vans',
            gender:'women'
        },
        {
            id:150,
            category:'Outdoor',
            name:'City Milano',
            price:105,
            brand:'Vans',
            gender:'men'
        },
        {
            id:147,
            category:'Outdoor',
            name:'Reconstruct',
            price:115,
            brand:'Vans',
            gender:'women'
        },
        {
            id:148,
            category:'Outdoor',
            name:'Sk8 Low',
            price:100,
            brand:'Vans',
            gender:'men'
        },
        
    ]



export default STORE_DATA;