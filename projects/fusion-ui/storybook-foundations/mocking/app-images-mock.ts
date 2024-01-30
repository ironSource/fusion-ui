export const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomAppImage = () => {
    return AppImagesMock[getRandomNumber(0, AppImagesMock.length - 1)];
};

export const AppImagesMock = [
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Bobbie_Friends_Cat_Life_Simulator.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Chocolate_Chip_Cookie_Game.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Cute_Cactus_Adventures.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Dizzy_Diamond_Puzzle.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Do_Re_Mix.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Girl_Power_Cupcake_Maker.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/May_Green_Garden.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Off-Road_Rider_Multi_Level_Driving_Game.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Poly_Dating.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/The_Neighborhood_Moovers.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Words_for_Winners.png',
    'https://fusion.ironsrc.net/assets/images/v4/app_mock/Zippy_Scissors.png'
];
