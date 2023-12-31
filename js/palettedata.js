// Tileset
const TILESET_BLOCK_1 = [
    0,
    0b100101,
    0b000110,
    0b011011
];
const TILESET_BLOCK_2 = [
    0,
    0b100101,
    0b111001,
    -1
];
const TILESET_BLOCK_3 = [
    0,
    0b010101,
    0b101010,
    -1
];
const TILESET_BLOCK_4 = [
    0,
    0b100101,
    0b111001,
    0b011011
];
const TILESET_BLOCK_5 = [
    0,
    0b100101,
    0b111001,
    0b000110
];
const TILESET_BLOCK_6 = [
    0,
    -1,
    0b000110,
    0b011011
];
const TILESET_BLOCK_7 = [
    0,
    0b100100,
    0b111001,
    -1
];
const TILESET_BLOCK_8 = [
    0,
    0b101010,
    0b111111,
    -1
];
const TILESET_BLOCK_9 = [
    0,
    0b100100,
    0b111000,
    -1
];
const TILESET_BLOCK_10 = [
    0,
    0b100001,
    0b110110,
    -1
];
const TILESET_BLOCK_11 = [
    0,
    0b100001,
    0b110110,
    0b111010,
];
// Figures
const FIGURE_BLOCK = [
    0,
    0b101011,
    0b111111,
    -1
];
// Flame
const FLAME_BLOCK1 = [
    0,
    0b110100,
    0b111000,
    -1
];
const FLAME_BLOCK2 = [
    0,
    0b111101,
    0b111000,
    -1
];
// Ice block
const ICE_BLOCK = [
    0,
    0b000110,
    0b011011,
    0b101111
];
// Snowball
const SNOWBALL_BLOCK1 = [
    0,
    0b111111,
    0b101011,
    -1
];
const SNOWBALL_BLOCK2 = [
    0,
    0b010110,
    0b101011,
    -1
];
// Button
const BUTTON_BLOCK_1 = [
    0,
    0b100001,
    0b110110,
    -1
];
const BUTTON_BLOCK_2 = [
    0,
    0b010101,
    0b101010,
    -1
];
// Bat
const BAT_BLOCK = [
    0,
    0,
    0b110100,
    -1
];
export const PALETTE1 = [
    // Line 1
    TILESET_BLOCK_1, TILESET_BLOCK_1, TILESET_BLOCK_1, TILESET_BLOCK_2,
    TILESET_BLOCK_5, TILESET_BLOCK_4, TILESET_BLOCK_6, TILESET_BLOCK_3,
    TILESET_BLOCK_7, TILESET_BLOCK_8, TILESET_BLOCK_9, TILESET_BLOCK_9,
    TILESET_BLOCK_11, TILESET_BLOCK_11,
    // Line 2
    TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_2,
    TILESET_BLOCK_2, TILESET_BLOCK_2, TILESET_BLOCK_6, TILESET_BLOCK_3,
    TILESET_BLOCK_7, TILESET_BLOCK_1, TILESET_BLOCK_9, TILESET_BLOCK_9,
    TILESET_BLOCK_11, TILESET_BLOCK_11,
    // Line 3
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, SNOWBALL_BLOCK1, SNOWBALL_BLOCK2,
    TILESET_BLOCK_10, TILESET_BLOCK_10,
    // Line 4
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, BUTTON_BLOCK_1, BUTTON_BLOCK_1,
    FIGURE_BLOCK, FIGURE_BLOCK, SNOWBALL_BLOCK2, SNOWBALL_BLOCK2,
    TILESET_BLOCK_10, TILESET_BLOCK_10,
    // Line 5
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FLAME_BLOCK1, FLAME_BLOCK1, ICE_BLOCK, ICE_BLOCK,
    BAT_BLOCK, BAT_BLOCK,
    // Line 6
    FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK, FIGURE_BLOCK,
    FIGURE_BLOCK, FIGURE_BLOCK, BUTTON_BLOCK_2, BUTTON_BLOCK_2,
    FLAME_BLOCK2, FLAME_BLOCK1, ICE_BLOCK, ICE_BLOCK,
    BAT_BLOCK, BAT_BLOCK,
];
