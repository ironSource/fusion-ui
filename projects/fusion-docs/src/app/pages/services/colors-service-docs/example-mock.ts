/* eslint-disable max-len */
export const EXAMPLE_CODE_MOCK = `// Just call needed method:
window.fusion.services.colorsService.getColorPalette();

// Response:
['#0D148C', '#3091F6', '#FD9C0A', '#00CCD7', '#FF6A63', '#A718A7', '#FF9CBD', '#9999FF', '#009999', '#ACC62B', '#85BFFF', '#D84C7C', '#33CC99', '#808080', '#DA2929', '#2E66E4', '#8758F1', '#F62F91']

// Convert HEX to RGB
window.fusion.services.colorsService.toRgba('#FF6A63');

// Response:
rgba(255,106,99,1);

// Convert HEX to RGBa (add 50% opacity)
window.fusion.services.colorsService.toRgba('#FF6A63', 50);

// Response:
rgba(255,106,99,0.5);`;
