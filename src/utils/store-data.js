const STORE_DATA = [{
    title:'men',
    products: [
        // 1/6 running
        {
            id:1,
            category:'Running',
            name:'Model 3',
            price:110,
            brand:'Nike'
        },
        {
            id:2,
            category:'Running',
            name:'Sixer',
            price:95,
            brand:'Nike'
        },
        {
            id:3,
            category:'Running',
            name:'Phase 7',
            price:80,
            brand:'Nike'
        },
        {
            id:4,
            category:'Running',
            name:'Finisher',
            price:100,
            brand:'Nike'
        },
        {
            id:5,
            category:'Running',
            name:'Strafer 8',
            price:110,
            brand:'Nike'
        },
        // 2/6 running
        {
            id:6,
            category:'Running',
            name:'Superb 7',
            price:70,
            brand:'Adidas'
        },
        {
            id:7,
            category:'Running',
            name:'Airflow',
            price:80,
            brand:'Adidas'
        },
        {
            id:8,
            category:'Running',
            name:'Sprinter',
            price:65,
            brand:'Adidas'
        },
        {
            id:9,
            category:'Running',
            name:'Slickz',
            price:65,
            brand:'Adidas'
        },
        {
            id:10,
            category:'Running',
            name:'Nicer Dicer',
            price:105,
            brand:'Adidas'
        },
        // 3/6 running
        {
            id:11,
            category:'Running',
            name:'Jumpstar',
            price:110,
            brand:'Jordan'
        },
        {
            id:12,
            category:'Running',
            name:'Turbo',
            price:130,
            brand:'Jordan'
        },
        {
            id:13,
            category:'Running',
            name:'Special 99',
            price:135,
            brand:'Jordan'
        },
        {
            id:14,
            category:'Running',
            name:'Runner-up',
            price:125,
            brand:'Jordan'
        },
        {
            id:15,
            category:'Running',
            name:'Splinter',
            price:100,
            brand:'Jordan'
        },
        // 4/6 running
        {
            id:16,
            category:'Running',
            name:'Perfecto',
            price:60,
            brand:'New Balance'
        },
        {
            id:17,
            category:'Running',
            name:'Rotor',
            price:55,
            brand:'New Balance'
        },
        {
            id:18,
            category:'Running',
            name:'Retrowave 83',
            price:70,
            brand:'New Balance'
        },
        {
            id:19,
            category:'Running',
            name:'Omega',
            price:65,
            brand:'New Balance'
        },
        {
            id:20,
            category:'Running',
            name:'Salazar',
            price:60,
            brand:'New Balance'
        },
        // 5/6 running
        {
            id:21,
            category:'Running',
            name:'Superflux',
            price:140,
            brand:'ON'
        },
        {
            id:22,
            category:'Running',
            name:'Cloudnova',
            price:170,
            brand:'ON'
        },
        {
            id:23,
            category:'Running',
            name:'Helixmaster',
            price:155,
            brand:'ON'
        },
        {
            id:24,
            category:'Running',
            name:'Hyperdust',
            price:160,
            brand:'ON'
        },
        {
            id:25,
            category:'Running',
            name:'Slammer',
            price:160,
            brand:'ON'
        },
        // 6/6 running
        {
            id:26,
            category:'Running',
            name:'Chilly',
            price:60,
            brand:'Vans'
        },
        {
            id:27,
            category:'Running',
            name:'Millenium',
            price:65,
            brand:'Vans'
        },
        {
            id:28,
            category:'Running',
            name:'Sk8-hi',
            price:60,
            brand:'Vans'
        },
        {
            id:29,
            category:'Running',
            name:'Canvas',
            price:70,
            brand:'Vans'
        },
        {
            id:30,
            category:'Running',
            name:'Model 3',
            price:55,
            brand:'Vans'
        },
        // lifestyle
        {
            id:31,
            category:'Lifestyle',
            name:'Superfly',
            price:80,
            brand:'Nike'
        },
        {
            id:32,
            category:'Lifestyle',
            name:'Allstar',
            price:90,
            brand:'Nike'
        },
        {
            id:33,
            category:'Lifestyle',
            name:'Regular 230',
            price:95,
            brand:'Nike'
        },
        {
            id:34,
            category:'Lifestyle',
            name:'Subliminal',
            price:80,
            brand:'Nike'
        },
        {
            id:35,
            category:'Lifestyle',
            name:'Yakuza 11',
            price:100,
            brand:'Nike'
        },
        // 2/6 lifestyle
        {
            id:36,
            category:'Lifestyle',
            name:'Anno 07',
            price:105,
            brand:'Adidas'
        },
        {
            id:37,
            category:'Lifestyle',
            name:'Steadfast',
            price:110,
            brand:'Adidas'
        },
        {
            id:38,
            category:'Lifestyle',
            name:'Scenery',
            price:105,
            brand:'Adidas'
        },
        {
            id:39,
            category:'Lifestyle',
            name:'Player One',
            price:90,
            brand:'Adidas'
        },
        {
            id:40,
            category:'Lifestyle',
            name:'Basilisk',
            price:95,
            brand:'Adidas'
        },
        // 3/6 lifestyle
        {
            id:41,
            category:'Lifestyle',
            name:'Gummo',
            price:130,
            brand:'Jordan'
        },
        {
            id:42,
            category:'Lifestyle',
            name:'Gummo',
            price:135,
            brand:'Jordan'
        },
        {
            id:43,
            category:'Lifestyle',
            name:'Menace',
            price:120,
            brand:'Jordan'
        },
        {
            id:44,
            category:'Lifestyle',
            name:'Flight',
            price:85,
            brand:'Jordan'
        },
        {
            id:45,
            category:'Lifestyle',
            name:'Yeet Feet',
            price:110,
            brand:'Jordan'
        },
        // 4/6 lifestyle
        {
            id:46,
            category:'Lifestyle',
            name:'Hera',
            price:90,
            brand:'ON'
        },
        {
            id:47,
            category:'Lifestyle',
            name:'Jupiter',
            price:85,
            brand:'ON'
        },
        {
            id:48,
            category:'Lifestyle',
            name:'Odin',
            price:110,
            brand:'ON'
        },
        {
            id:49,
            category:'Lifestyle',
            name:'Zuko',
            price:110,
            brand:'ON'
        },
        {
            id:50,
            category:'Lifestyle',
            name:'Bertram 09',
            price:90,
            brand:'ON'
        },
        // 5/6 lifestyle
        {
            id:51,
            category:'Lifestyle',
            name:'Dizzy',
            price:55,
            brand:'New Balance'
        },
        {
            id:52,
            category:'Lifestyle',
            name:'Vertigo',
            price:55,
            brand:'New Balance'
        },
        {
            id:53,
            category:'Lifestyle',
            name:'Hireme 69',
            price:60,
            brand:'New Balance'
        },
        {
            id:54,
            category:'Lifestyle',
            name:'Zoran',
            price:75,
            brand:'New Balance'
        },
        {
            id:55,
            category:'Lifestyle',
            name:'Koloss',
            price:65,
            brand:'New Balance'
        },
        // 6/6 lifestyle 
        {
            id:56,
            category:'Lifestyle',
            name:'Kool 03',
            price:80,
            brand:'Vans'
        },
        {
            id:57,
            category:'Lifestyle',
            name:'Retro 87',
            price:85,
            brand:'Vans'
        },
        {
            id:58,
            category:'Lifestyle',
            name:'Samsa',
            price:80,
            brand:'Vans'
        },
        {
            id:59,
            category:'Lifestyle',
            name:'The Cure',
            price:90,
            brand:'Vans'
        },
        {
            id:60,
            category:'Lifestyle',
            name:'Veil',
            price:70,
            brand:'Vans'
        },
        // 1/6 court
        {
            id:61,
            category:'Court',
            name:'Superstarski',
            price:130,
            brand:'Nike'
        },
        {
            id:62,
            category:'Court',
            name:'Court Style',
            price:130,
            brand:'Nike'
        },
        {
            id:63,
            category:'Court',
            name:'Special 1337',
            price:120,
            brand:'Nike'
        },
        {
            id:64,
            category:'Court',
            name:'Order 66',
            price:155,
            brand:'Nike'
        },
        {
            id:65,
            category:'Court',
            name:'Sipuku',
            price:140,
            brand:'Nike'
        },
        // 2/6 court
        {
            id:66,
            category:'Court',
            name:'Topper-Flopper',
            price:130,
            brand:'Adidas'
        },
        {
            id:67,
            category:'Court',
            name:'Addos',
            price:135,
            brand:'Adidas'
        },
        {
            id:68,
            category:'Court',
            name:'Ruger 22',
            price:140,
            brand:'Adidas'
        },
        {
            id:69,
            category:'Court',
            name:'Sixshooter',
            price:140,
            brand:'Adidas'
        },
        {
            id:70,
            category:'Court',
            name:'Quickdraw .45',
            price:115,
            brand:'Adidas'
        },
        // 3/6 court
        {
            id:71,
            category:'Court',
            name:'big-O',
            price:95,
            brand:'ON'
        },
        {
            id:72,
            category:'Court',
            name:'Doubletime',
            price:90,
            brand:'ON'
        },
        {
            id:73,
            category:'Court',
            name:'Tripletime',
            price:95,
            brand:'ON'
        },
        {
            id:74,
            category:'Court',
            name:'Quadrupletime',
            price:80,
            brand:'ON'
        },
        {
            id:75,
            category:'Court',
            name:'Veryfasttime',
            price:100,
            brand:'ON'
        },
        // 4/6 court
        {
            id:76,
            category:'Court',
            name:'Steampunk 500',
            price:100,
            brand:'New Balance'
        },
        {
            id:77,
            category:'Court',
            name:'Dieselpunk 33',
            price:90,
            brand:'New Balance'
        },
        {
            id:78,
            category:'Court',
            name:'Retrofuturism',
            price:80,
            brand:'New Balance'
        },
        {
            id:79,
            category:'Court',
            name:'Fancypants',
            price:85,
            brand:'New Balance'
        },
        {
            id:80,
            category:'Court',
            name:'Frostbite',
            price:100,
            brand:'New Balance'
        },
        // 5/6 court
        {
            id:81,
            category:'Court',
            name:'Notthecountry',
            price:155,
            brand:'Jordan'
        },
        {
            id:82,
            category:'Court',
            name:'Fieldday',
            price:215,
            brand:'Jordan'
        },
        {
            id:83,
            category:'Court',
            name:'Flipper 900',
            price:190,
            brand:'Jordan'
        },
        {
            id:84,
            category:'Court',
            name:'Schmordan',
            price:210,
            brand:'Jordan'
        },
        {
            id:85,
            category:'Court',
            name:'Blazer 1',
            price:170,
            brand:'Jordan'
        },
        // 6/6 court
        {
            id:86,
            category:'Court',
            name:'Sick Flick',
            price:70,
            brand:'Vans'
        },
        {
            id:87,
            category:'Court',
            name:'Great Plans',
            price:80,
            brand:'Vans'
        },
        {
            id:88,
            category:'Court',
            name:'Cool Cans',
            price:90,
            brand:'Vans'
        },
        {
            id:89,
            category:'Court',
            name:'Quicktrick 7',
            price:95,
            brand:'Vans'
        },
        {
            id:90,
            category:'Court',
            name:'Superlight',
            price:65,
            brand:'Vans'
        },
        // 1/6 Skate
        {
            id:91,
            category:'Skate',
            name:'Superlight',
            price:65,
            brand:'Nike'
        },
        {
            id:92,
            category:'Skate',
            name:'Anticipate',
            price:75,
            brand:'Nike'
        },
        {
            id:93,
            category:'Skate',
            name:'Edgegrinder',
            price:80,
            brand:'Nike'
        },
        {
            id:94,
            category:'Skate',
            name:'Topspin',
            price:80,
            brand:'Nike'
        },
        {
            id:95,
            category:'Skate',
            name:'Minze',
            price:75,
            brand:'Nike'
        },
        // 2/6 Skate
        {
            id:96,
            category:'Skate',
            name:'Backtrack 2003',
            price:130,
            brand:'Adidas'
        },
        {
            id:97,
            category:'Skate',
            name:'Benchmark',
            price:130,
            brand:'Adidas'
        },
        {
            id:98,
            category:'Skate',
            name:'Walkman 83',
            price:145,
            brand:'Adidas'
        },
        {
            id:99,
            category:'Skate',
            name:'Star-0',
            price:135,
            brand:'Adidas'
        },
        {
            id:100,
            category:'Skate',
            name:'Niagara',
            price:120,
            brand:'Adidas'
        },
        // 3/6 skate
        {
            id:101,
            category:'Skate',
            name:'Skyhigh',
            price:160,
            brand:'Jordan'
        },
        {
            id:102,
            category:'Skate',
            name:'Grounded 90',
            price:175,
            brand:'Jordan'
        },
        {
            id:103,
            category:'Skate',
            name:'Model C-37',
            price:155,
            brand:'Jordan'
        },
        {
            id:104,
            category:'Skate',
            name:'Chaser',
            price:160,
            brand:'Jordan'
        },
        {
            id:105,
            category:'Skate',
            name:'Tailgate',
            price:170,
            brand:'Jordan'
        },
        // 4/6 skate
        {
            id:106,
            category:'Skate',
            name:'Sinatra',
            price:100,
            brand:'ON'
        },
        {
            id:107,
            category:'Skate',
            name:'Mid Volume',
            price:110,
            brand:'ON'
        },
        {
            id:108,
            category:'Skate',
            name:'Presley 73',
            price:115,
            brand:'ON'
        },
        {
            id:109,
            category:'Skate',
            name:'Skatemaster',
            price:90,
            brand:'ON'
        },
        {
            id:110,
            category:'Skate',
            name:'Komplex 4',
            price:100,
            brand:'ON'
        },
        // 5/6 skate
        {
            id:111,
            category:'Skate',
            name:'Relocate',
            price:75,
            brand:'New Balance'
        },
        {
            id:112,
            category:'Skate',
            name:'Viper',
            price:80,
            brand:'New Balance'
        },
        {
            id:113,
            category:'Skate',
            name:'Chameleon',
            price:110,
            brand:'New Balance'
        },
        {
            id:114,
            category:'Skate',
            name:'Sahara',
            price:95,
            brand:'New Balance'
        },
        {
            id:115,
            category:'Skate',
            name:'Strafe Wave',
            price:80,
            brand:'New Balance'
        },
        // 6/6 brand
        {
            id:116,
            category:'Skate',
            name:'Checkerboard',
            price:55,
            brand:'Vans'
        },
        {
            id:117,
            category:'Skate',
            name:'New Skool',
            price:65,
            brand:'Vans'
        },
        {
            id:118,
            category:'Skate',
            name:'Old Skool',
            price:70,
            brand:'Vans'
        },
        {
            id:119,
            category:'Skate',
            name:'Kyle Walker',
            price:70,
            brand:'Vans'
        },
        {
            id:120,
            category:'Skate',
            name:'York Demo',
            price:60,
            brand:'Vans'
        },
        // 1/6 outdoor
    ]
}]


export default STORE_DATA;