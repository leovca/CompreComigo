const config = require('../../config/config.json');

export default ($mdThemingProvider) => {

    let greenHeaderPallet = $mdThemingProvider.extendPalette('green', {
        'A100': '#fff',
        'A200': '#fff'
    });

    let greenMain = $mdThemingProvider.extendPalette('green', {
        '50': 'f1f8e9',
        '100': 'dcedc8',
        '200': 'c5e1a5',
        '300': 'aed581',
        '400': '9ccc65',
        '500': '8bc34a',
        '600': '7cb342',
        '700': '689f38',
        '800': '558b2f',
        '900': '33691e',
        'A100': 'ccff90',
        'A200': 'b2ff59',
        'A400': '76ff03',
        'A700': '64dd17',
        // 'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
        //                                     // on this palette should be dark or light
        //
        // 'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        // 'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.definePalette('greenMain', greenMain);
    $mdThemingProvider.definePalette('greenHeaderPallet', greenHeaderPallet);

    $mdThemingProvider.theme('toolbar')
        .primaryPalette('greenMain')
        .accentPalette('greenHeaderPallet');

    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('green');
};
