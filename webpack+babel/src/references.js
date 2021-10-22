    /* -------------------------------------------------------------------------- */
    /*                                   Imports                                  */
    /* -------------------------------------------------------------------------- */
    import {getSeasonDate, isSaleOnline} from './dateFunctions.js';
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */
    /*                                 References                                 */
    /* -------------------------------------------------------------------------- */

    /* ---------------------------------- Sales --------------------------------- */
    export const countdownItems = 
    [
        {
            name: "Autumn",
            date: getSeasonDate("Autumn"),
            isOnline: isSaleOnline()
        },
        {
            name: "Nextfest",
            date: getSeasonDate("Nextfest"),
            isOnline: isSaleOnline()
        },
        {
            name: "Open World",
            date: getSeasonDate("OpenWorld"),
            isOnline: isSaleOnline()
        },
        {
            name: "Halloween",
            date: getSeasonDate("Halloween"),
            isOnline: isSaleOnline()
        },
        {
            name: "Winter",
            date: getSeasonDate("Winter"),
            isOnline: isSaleOnline()
        },
        {
            name: "Summer",
            date: getSeasonDate("Summer"),
            isOnline: isSaleOnline()
        }
    ];
    /* -------------------------------------------------------------------------- */

    /* ------------------------------ Slider Items ------------------------------ */
    export const sliderItems =  [
        {
            name: "Genshin Impact",
            description: "Anime kızlı oyun UwU",
            src: "../assets/images/slider/GenshinImpact.jpg",
            alt: "Genshin Impact slider wallpaper",
            price: null,
            isFavorite: false
        },
        {
            name: "Sea Of Thieves",
            description: "Captain, look!",
            src: "../assets/images/slider/SeaOfThieves.jpg",
            alt: "Sea Of Thieves slider wallpaper",
            price: 61 + " ₺",
            isFavorite: false
        },
        {
            name: "The Last Of Us: Part II",
            description: "Gustavo Santaolalla - Allowed to be Happy",
            src: "../assets/images/slider/TheLastOfUsPartII.jpg",
            alt: "The Last Of Us: Part II slider wallpaper",
            price: 295 + " ₺",
            isFavorite: true
        },
        {
            name: "Squad",
            description: "Kaskını tak, silahını al. Geri dönüş yok.",
            src: "../assets/images/slider/Squad.jpg",
            alt: "Squad slider wallpaper",
            price: 79.99 + " ₺",
            isFavorite: false
        },
        {
            name: "The Elder Scrolls V: Skrim",
            description: "Dovahkin",
            src: "../assets/images/slider/TheElderScrollsVSkyrim.jpg",
            alt: "The Elder Scrolls V: Skrim slider wallpaper",
            price: 199 + " ₺",
            isFavorite: false
        },
        {
            name: "The Witcher 3: Wild Hunt",
            description: "\"You were always an unruly child. I adored that about you. Now FLY!\"",
            src: "../assets/images/slider/TheWitcher3WildHunt.jpg",
            alt: "The Witcher 3: Wild Hunt slider wallpaper",
            price: 59.99 + " ₺",
            isFavorite: true
        },
        {
            name: "Red Dead Redemption 2",
            description: "\"We're thieves in a world that don't want us no more.\"",
            src: "../assets/images/slider/RedDeadRedemption2.jpg",
            alt: "Red Dead Redemption 2 slider wallpaper",
            price: 299 + " ₺",
            isFavorite: false
        }
    ]
    /* -------------------------------------------------------------------------- */

    /* -------------------------------------------------------------------------- */