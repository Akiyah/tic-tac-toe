const KEYS = [
  [
    '___' + '\n' +
    '___' + '\n' +
    '___'
  ], [
    'o__' + '\n' +
    '___' + '\n' +
    '___',

    '_o_' + '\n' +
    '___' + '\n' +
    '___',

    '___' + '\n' +
    '_o_' + '\n' +
    '___'
  ], [
    'ox_' + '\n' +
    '___' + '\n' +
    '___',

    'x_o' + '\n' +
    '___' + '\n' +
    '___',

    'o__' + '\n' +
    '_x_' + '\n' +
    '___',

    '__o' + '\n' +
    'x__' + '\n' +
    '___',

    '__x' + '\n' +
    '___' + '\n' +
    'o__',

    'xo_' + '\n' +
    '___' + '\n' +
    '___',

    '_x_' + '\n' +
    'o__' + '\n' +
    '___',

    '_o_' + '\n' +
    '_x_' + '\n' +
    '___',

    '__x' + '\n' +
    'o__' + '\n' +
    '___',

    '___' + '\n' +
    'x_o' + '\n' +
    '___',

    'x__' + '\n' +
    '_o_' + '\n' +
    '___',

    '_x_' + '\n' +
    '_o_' + '\n' +
    '___'
  ], [
    'oxo' + '\n' +
    '___' + '\n' +
    '___',

    'ox_' + '\n' +
    'o__' + '\n' +
    '___',

    'ox_' + '\n' +
    '_o_' + '\n' +
    '___',

    '_xo' + '\n' +
    'o__' + '\n' +
    '___',

    'o_o' + '\n' +
    'x__' + '\n' +
    '___',

    'o__' + '\n' +
    'x_o' + '\n' +
    '___',

    '_xo' + '\n' +
    '___' + '\n' +
    'o__',

    'xoo' + '\n' +
    '___' + '\n' +
    '___',

    'o_x' + '\n' +
    'o__' + '\n' +
    '___',

    'x_o' + '\n' +
    '_o_' + '\n' +
    '___',

    'x_o' + '\n' +
    'o__' + '\n' +
    '___',

    'o_x' + '\n' +
    '___' + '\n' +
    'o__',

    'x__' + '\n' +
    '__o' + '\n' +
    'o__',

    'x_o' + '\n' +
    '___' + '\n' +
    'o__',

    'oo_' + '\n' +
    '_x_' + '\n' +
    '___',

    'o_o' + '\n' +
    '_x_' + '\n' +
    '___',

    '__o' + '\n' +
    'ox_' + '\n' +
    '___',

    '__o' + '\n' +
    '_x_' + '\n' +
    'o__',

    '_oo' + '\n' +
    'x__' + '\n' +
    '___',

    '__o' + '\n' +
    'x_o' + '\n' +
    '___',

    '__o' + '\n' +
    'xo_' + '\n' +
    '___',

    'o__' + '\n' +
    '__x' + '\n' +
    'o__',

    '_x_' + '\n' +
    '__o' + '\n' +
    'o__',

    '__x' + '\n' +
    'o__' + '\n' +
    'o__',

    '__x' + '\n' +
    '_o_' + '\n' +
    'o__',

    '_ox' + '\n' +
    '___' + '\n' +
    'o__',

    'xo_' + '\n' +
    'o__' + '\n' +
    '___',

    'xo_' + '\n' +
    '_o_' + '\n' +
    '___',

    '_ox' + '\n' +
    'o__' + '\n' +
    '___',

    'x__' + '\n' +
    'o_o' + '\n' +
    '___',

    '_x_' + '\n' +
    'oo_' + '\n' +
    '___',

    '_o_' + '\n' +
    'x_o' + '\n' +
    '___',

    '_x_' + '\n' +
    'o_o' + '\n' +
    '___',

    '_o_' + '\n' +
    'ox_' + '\n' +
    '___',

    '___' + '\n' +
    'oxo' + '\n' +
    '___',

    '__x' + '\n' +
    'oo_' + '\n' +
    '___',

    '_o_' + '\n' +
    '__o' + '\n' +
    'x__',

    '___' + '\n' +
    'xoo' + '\n' +
    '___'
  ], [
    'oxo' + '\n' +
    'x__' + '\n' +
    '___',

    'oxo' + '\n' +
    '_x_' + '\n' +
    '___',

    'o_x' + '\n' +
    'x__' + '\n' +
    'o__',

    'o__' + '\n' +
    'x_x' + '\n' +
    'o__',

    'oxx' + '\n' +
    'o__' + '\n' +
    '___',

    'ox_' + '\n' +
    'ox_' + '\n' +
    '___',

    '_xo' + '\n' +
    'x_o' + '\n' +
    '___',

    'oox' + '\n' +
    'x__' + '\n' +
    '___',

    'oo_' + '\n' +
    'x_x' + '\n' +
    '___',

    '_xo' + '\n' +
    '__o' + '\n' +
    'x__',

    'xxo' + '\n' +
    '_o_' + '\n' +
    '___',

    'ox_' + '\n' +
    'xo_' + '\n' +
    '___',

    '_xo' + '\n' +
    'xo_' + '\n' +
    '___',

    'o_x' + '\n' +
    'xo_' + '\n' +
    '___',

    'o__' + '\n' +
    'xox' + '\n' +
    '___',

    '__x' + '\n' +
    'xo_' + '\n' +
    'o__',

    'xxo' + '\n' +
    'o__' + '\n' +
    '___',

    'ox_' + '\n' +
    'x_o' + '\n' +
    '___',

    '_xo' + '\n' +
    'ox_' + '\n' +
    '___',

    'ox_' + '\n' +
    '__o' + '\n' +
    'x__',

    '_o_' + '\n' +
    'x_x' + '\n' +
    'o__',

    '_ox' + '\n' +
    'x__' + '\n' +
    'o__',

    'oxx' + '\n' +
    '___' + '\n' +
    'o__',

    'o_o' + '\n' +
    'xx_' + '\n' +
    '___',

    'ox_' + '\n' +
    '__x' + '\n' +
    'o__',

    'o_o' + '\n' +
    'x_x' + '\n' +
    '___',

    'o_o' + '\n' +
    '__x' + '\n' +
    'x__',

    'x__' + '\n' +
    'x_o' + '\n' +
    'o__',

    'o__' + '\n' +
    'xxo' + '\n' +
    '___',

    '_x_' + '\n' +
    'x_o' + '\n' +
    'o__',

    'o_x' + '\n' +
    'x_o' + '\n' +
    '___',

    '__x' + '\n' +
    'x_o' + '\n' +
    'o__',

    'xxo' + '\n' +
    '___' + '\n' +
    'o__',

    '_xo' + '\n' +
    '__x' + '\n' +
    'o__',

    '_xo' + '\n' +
    '_x_' + '\n' +
    'o__',

    '_xo' + '\n' +
    'x__' + '\n' +
    'o__',

    'x_o' + '\n' +
    '__x' + '\n' +
    'o__',

    '__o' + '\n' +
    'x_x' + '\n' +
    'o__',

    'xoo' + '\n' +
    '_x_' + '\n' +
    '___',

    'xoo' + '\n' +
    'x__' + '\n' +
    '___',

    'oox' + '\n' +
    '___' + '\n' +
    'x__',

    'x__' + '\n' +
    'o_x' + '\n' +
    'o__',

    'x_x' + '\n' +
    'o__' + '\n' +
    'o__',

    'o_x' + '\n' +
    'ox_' + '\n' +
    '___',

    'x_o' + '\n' +
    'x_o' + '\n' +
    '___',

    'oo_' + '\n' +
    '__x' + '\n' +
    'x__',

    'x_o' + '\n' +
    '__o' + '\n' +
    'x__',

    'x_o' + '\n' +
    'xo_' + '\n' +
    '___',

    'o_x' + '\n' +
    '_o_' + '\n' +
    'x__',

    'x__' + '\n' +
    '_ox' + '\n' +
    'o__',

    'x_x' + '\n' +
    '_o_' + '\n' +
    'o__',

    'x_o' + '\n' +
    'ox_' + '\n' +
    '___',

    'o_x' + '\n' +
    '__o' + '\n' +
    'x__',

    'xo_' + '\n' +
    '__x' + '\n' +
    'o__',

    'xox' + '\n' +
    '___' + '\n' +
    'o__',

    'o_x' + '\n' +
    '_x_' + '\n' +
    'o__',

    'o_x' + '\n' +
    '__x' + '\n' +
    'o__',

    'x_x' + '\n' +
    '___' + '\n' +
    'o_o',

    'x__' + '\n' +
    '_xo' + '\n' +
    'o__',

    'xx_' + '\n' +
    '__o' + '\n' +
    'o__',

    'x_x' + '\n' +
    '__o' + '\n' +
    'o__',

    'x_o' + '\n' +
    '_x_' + '\n' +
    'o__',

    'o_x' + '\n' +
    '___' + '\n' +
    'x_o',

    '_oo' + '\n' +
    'xx_' + '\n' +
    '___',

    '__o' + '\n' +
    'xxo' + '\n' +
    '___',

    '__x' + '\n' +
    'ox_' + '\n' +
    'o__',

    'o__' + '\n' +
    '_xx' + '\n' +
    'o__',

    '_x_' + '\n' +
    '_xo' + '\n' +
    'o__',

    '_ox' + '\n' +
    '_x_' + '\n' +
    'o__',

    '_x_' + '\n' +
    'o_x' + '\n' +
    'o__',

    '_xx' + '\n' +
    'o__' + '\n' +
    'o__',

    '__x' + '\n' +
    'o_x' + '\n' +
    'o__',

    '_x_' + '\n' +
    '_ox' + '\n' +
    'o__',

    '_xx' + '\n' +
    '_o_' + '\n' +
    'o__',

    '_xx' + '\n' +
    '__o' + '\n' +
    'o__',

    'xox' + '\n' +
    'o__' + '\n' +
    '___',

    'xo_' + '\n' +
    'ox_' + '\n' +
    '___',

    '_ox' + '\n' +
    'x_o' + '\n' +
    '___',

    '_ox' + '\n' +
    '__o' + '\n' +
    'x__',

    'xox' + '\n' +
    '_o_' + '\n' +
    '___',

    'xx_' + '\n' +
    'oo_' + '\n' +
    '___',

    '_ox' + '\n' +
    'xo_' + '\n' +
    '___',

    'x_x' + '\n' +
    'oo_' + '\n' +
    '___',

    '__x' + '\n' +
    'xoo' + '\n' +
    '___',

    '_ox' + '\n' +
    '_o_' + '\n' +
    'x__',

    'xo_' + '\n' +
    'x_o' + '\n' +
    '___',

    '_ox' + '\n' +
    'ox_' + '\n' +
    '___',

    'xo_' + '\n' +
    '__o' + '\n' +
    'x__',

    '_o_' + '\n' +
    'o_x' + '\n' +
    'x__',

    '_ox' + '\n' +
    'o__' + '\n' +
    'x__',

    'x__' + '\n' +
    'o_o' + '\n' +
    'x__',

    'xx_' + '\n' +
    'o_o' + '\n' +
    '___',

    'x__' + '\n' +
    'oxo' + '\n' +
    '___',

    '_x_' + '\n' +
    'o_o' + '\n' +
    'x__',

    'x_x' + '\n' +
    'o_o' + '\n' +
    '___',

    '__x' + '\n' +
    'o_o' + '\n' +
    'x__',

    '_o_' + '\n' +
    'xox' + '\n' +
    '___',

    '_xx' + '\n' +
    'oo_' + '\n' +
    '___',

    '_x_' + '\n' +
    'xoo' + '\n' +
    '___',

    '_x_' + '\n' +
    '_oo' + '\n' +
    'x__',

    '_o_' + '\n' +
    'xxo' + '\n' +
    '___',

    '_o_' + '\n' +
    'x_o' + '\n' +
    'x__',

    '_x_' + '\n' +
    'x_o' + '\n' +
    '_o_',

    '_x_' + '\n' +
    'oxo' + '\n' +
    '___',

    '_o_' + '\n' +
    'x_x' + '\n' +
    '_o_',

    '_o_' + '\n' +
    '_xo' + '\n' +
    'x__',

    'x__' + '\n' +
    'xoo' + '\n' +
    '___',

    'x__' + '\n' +
    '_oo' + '\n' +
    'x__'
  ], [
    'oxo' + '\n' +
    'xo_' + '\n' +
    '___',

    'oxo' + '\n' +
    'x_o' + '\n' +
    '___',

    'oxo' + '\n' +
    'x__' + '\n' +
    'o__',

    'ox_' + '\n' +
    'x_o' + '\n' +
    'o__',

    'oxo' + '\n' +
    '__x' + '\n' +
    'o__',

    'oxo' + '\n' +
    'ox_' + '\n' +
    '___',

    'oxo' + '\n' +
    '_x_' + '\n' +
    'o__',

    'o__' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oox' + '\n' +
    'x__' + '\n' +
    'o__',

    'o_x' + '\n' +
    'xo_' + '\n' +
    'o__',

    'oxo' + '\n' +
    '__o' + '\n' +
    'x__',

    'o_x' + '\n' +
    'x_o' + '\n' +
    'o__',

    'o_x' + '\n' +
    'x__' + '\n' +
    'o_o',

    'oo_' + '\n' +
    'x_x' + '\n' +
    'o__',

    'o__' + '\n' +
    'xox' + '\n' +
    'o__',

    'o_o' + '\n' +
    'x_x' + '\n' +
    'o__',

    'oxx' + '\n' +
    'oo_' + '\n' +
    '___',

    'xxo' + '\n' +
    'o_o' + '\n' +
    '___',

    'oxx' + '\n' +
    'o__' + '\n' +
    'o__',

    'oo_' + '\n' +
    'x_o' + '\n' +
    'x__',

    'xxo' + '\n' +
    '__o' + '\n' +
    'o__',

    'ox_' + '\n' +
    'oxo' + '\n' +
    '___',

    'ooo' + '\n' +
    'xx_' + '\n' +
    '___',

    'oo_' + '\n' +
    'xxo' + '\n' +
    '___',

    '_xo' + '\n' +
    '_xo' + '\n' +
    'o__',

    '_xo' + '\n' +
    'xoo' + '\n' +
    '___',

    'ox_' + '\n' +
    'o_x' + '\n' +
    'o__',

    '_xo' + '\n' +
    'x_o' + '\n' +
    '_o_',

    '_xo' + '\n' +
    'x_o' + '\n' +
    'o__',

    'oox' + '\n' +
    'xo_' + '\n' +
    '___',

    'ox_' + '\n' +
    'o_o' + '\n' +
    'x__',

    'oox' + '\n' +
    'x_o' + '\n' +
    '___',

    'xoo' + '\n' +
    '__x' + '\n' +
    'o__',

    'oo_' + '\n' +
    'xox' + '\n' +
    '___',

    'oo_' + '\n' +
    'x_x' + '\n' +
    '_o_',

    'ooo' + '\n' +
    'x_x' + '\n' +
    '___',

    '_oo' + '\n' +
    'x_x' + '\n' +
    'o__',

    '_xo' + '\n' +
    '_oo' + '\n' +
    'x__',

    '_xo' + '\n' +
    'o_o' + '\n' +
    'x__',

    'ooo' + '\n' +
    '__x' + '\n' +
    'x__',

    '_oo' + '\n' +
    'o_x' + '\n' +
    'x__',

    'xxo' + '\n' +
    'oo_' + '\n' +
    '___',

    'oxx' + '\n' +
    '_o_' + '\n' +
    'o__',

    'x__' + '\n' +
    'xoo' + '\n' +
    'o__',

    'xxo' + '\n' +
    '_o_' + '\n' +
    'o__',

    'ox_' + '\n' +
    'xoo' + '\n' +
    '___',

    '_xo' + '\n' +
    '_ox' + '\n' +
    'o__',

    'ox_' + '\n' +
    '_ox' + '\n' +
    'o__',

    '_x_' + '\n' +
    'xoo' + '\n' +
    'o__',

    '_xo' + '\n' +
    'xo_' + '\n' +
    'o__',

    'ox_' + '\n' +
    '_oo' + '\n' +
    'x__',

    'o_x' + '\n' +
    'xoo' + '\n' +
    '___',

    'x_o' + '\n' +
    '_ox' + '\n' +
    'o__',

    '_o_' + '\n' +
    'xox' + '\n' +
    'o__',

    'o_o' + '\n' +
    'xox' + '\n' +
    '___',

    '__o' + '\n' +
    'xox' + '\n' +
    'o__',

    '_ox' + '\n' +
    'xo_' + '\n' +
    'o__',

    'o_o' + '\n' +
    '_ox' + '\n' +
    'x__',

    '__x' + '\n' +
    'xoo' + '\n' +
    'o__',

    'oxx' + '\n' +
    '__o' + '\n' +
    'o__',

    'xo_' + '\n' +
    'x_o' + '\n' +
    'o__',

    'xxo' + '\n' +
    'o__' + '\n' +
    'o__',

    'ox_' + '\n' +
    'x_o' + '\n' +
    '_o_',

    '_xo' + '\n' +
    'o_x' + '\n' +
    'o__',

    'ox_' + '\n' +
    '_xo' + '\n' +
    'o__',

    '_o_' + '\n' +
    'xxo' + '\n' +
    'o__',

    '_xo' + '\n' +
    'ox_' + '\n' +
    'o__',

    'o_x' + '\n' +
    'x_o' + '\n' +
    '_o_',

    'x_o' + '\n' +
    '__x' + '\n' +
    'oo_',

    'o_o' + '\n' +
    'x_x' + '\n' +
    '_o_',

    'o_o' + '\n' +
    '__x' + '\n' +
    'xo_',

    '_ox' + '\n' +
    'x_o' + '\n' +
    'o__',

    'o_o' + '\n' +
    'x_o' + '\n' +
    'x__',

    'xxo' + '\n' +
    '___' + '\n' +
    'o_o',

    'o_o' + '\n' +
    'xxo' + '\n' +
    '___',

    'o_o' + '\n' +
    '_xx' + '\n' +
    'o__',

    'ox_' + '\n' +
    '__x' + '\n' +
    'oo_',

    'o_o' + '\n' +
    '__x' + '\n' +
    'ox_',

    'o_o' + '\n' +
    'o_x' + '\n' +
    'x__',

    'x_o' + '\n' +
    'x_o' + '\n' +
    'o__',

    '__o' + '\n' +
    'xxo' + '\n' +
    'o__',

    'x_o' + '\n' +
    'o_x' + '\n' +
    'o__',

    'oox' + '\n' +
    'ox_' + '\n' +
    '___',

    'xoo' + '\n' +
    'ox_' + '\n' +
    '___',

    'oox' + '\n' +
    '_x_' + '\n' +
    'o__',

    'x__' + '\n' +
    'oxo' + '\n' +
    'o__',

    'xoo' + '\n' +
    '_x_' + '\n' +
    'o__',

    'xoo' + '\n' +
    'x_o' + '\n' +
    '___',

    'xoo' + '\n' +
    'xo_' + '\n' +
    '___',

    'oox' + '\n' +
    '__x' + '\n' +
    'o__',

    'xx_' + '\n' +
    'o_o' + '\n' +
    'o__',

    'oox' + '\n' +
    'o__' + '\n' +
    'x__',

    'oox' + '\n' +
    '_o_' + '\n' +
    'x__',

    'oox' + '\n' +
    '__o' + '\n' +
    'x__',

    'o_x' + '\n' +
    'o_o' + '\n' +
    'x__',

    'oox' + '\n' +
    '___' + '\n' +
    'x_o',

    'oo_' + '\n' +
    'o_x' + '\n' +
    'x__',

    'x__' + '\n' +
    'oox' + '\n' +
    'o__',

    'xo_' + '\n' +
    'o_x' + '\n' +
    'o__',

    'xoo' + '\n' +
    '__o' + '\n' +
    'x__',

    'x_x' + '\n' +
    'oo_' + '\n' +
    'o__',

    'xox' + '\n' +
    'o__' + '\n' +
    'o__',

    'x_x' + '\n' +
    'o__' + '\n' +
    'o_o',

    'x_x' + '\n' +
    'o_o' + '\n' +
    'o__',

    'x_o' + '\n' +
    'oxo' + '\n' +
    '___',

    'o_x' + '\n' +
    'ox_' + '\n' +
    'o__',

    'oo_' + '\n' +
    '_xo' + '\n' +
    'x__',

    'x_o' + '\n' +
    '_xo' + '\n' +
    'o__',

    'x_o' + '\n' +
    'xoo' + '\n' +
    '___',

    'o_x' + '\n' +
    'o_x' + '\n' +
    'o__',

    'x_o' + '\n' +
    'x_o' + '\n' +
    '_o_',

    'oo_' + '\n' +
    '_ox' + '\n' +
    'x__',

    'xo_' + '\n' +
    '__x' + '\n' +
    'oo_',

    'x_o' + '\n' +
    '_oo' + '\n' +
    'x__',

    'x_o' + '\n' +
    'o_o' + '\n' +
    'x__',

    'x_o' + '\n' +
    '__o' + '\n' +
    'x_o',

    'x_x' + '\n' +
    '__o' + '\n' +
    'oo_',

    'o_x' + '\n' +
    '_ox' + '\n' +
    'o__',

    'xx_' + '\n' +
    '_oo' + '\n' +
    'o__',

    'o_x' + '\n' +
    '_oo' + '\n' +
    'x__',

    'o_x' + '\n' +
    '_o_' + '\n' +
    'x_o',

    'xo_' + '\n' +
    '_ox' + '\n' +
    'o__',

    'xox' + '\n' +
    '_o_' + '\n' +
    'o__',

    'x_x' + '\n' +
    '_o_' + '\n' +
    'o_o',

    'x_x' + '\n' +
    '_oo' + '\n' +
    'o__',

    'o_x' + '\n' +
    '_xo' + '\n' +
    'o__',

    'xo_' + '\n' +
    '_xo' + '\n' +
    'o__',

    'o_x' + '\n' +
    '__o' + '\n' +
    'xo_',

    'xox' + '\n' +
    '___' + '\n' +
    'o_o',

    'xox' + '\n' +
    '__o' + '\n' +
    'o__',

    'o_o' + '\n' +
    '_xo' + '\n' +
    'x__',

    'x_o' + '\n' +
    '_x_' + '\n' +
    'o_o',

    'o_x' + '\n' +
    '__x' + '\n' +
    'oo_',

    '_oo' + '\n' +
    'xxo' + '\n' +
    '___',

    'oo_' + '\n' +
    '_xx' + '\n' +
    'o__',

    '_x_' + '\n' +
    'oxo' + '\n' +
    'o__',

    'o__' + '\n' +
    'oxx' + '\n' +
    'o__',

    '_o_' + '\n' +
    'oxx' + '\n' +
    'o__',

    '_oo' + '\n' +
    '_xo' + '\n' +
    'x__',

    '_ox' + '\n' +
    'ox_' + '\n' +
    'o__',

    '__x' + '\n' +
    'oxo' + '\n' +
    'o__',

    '_ox' + '\n' +
    '_xo' + '\n' +
    'o__',

    '_x_' + '\n' +
    'o_x' + '\n' +
    'oo_',

    '_x_' + '\n' +
    'oox' + '\n' +
    'o__',

    '_oo' + '\n' +
    'x_o' + '\n' +
    'x__',

    '_xx' + '\n' +
    'oo_' + '\n' +
    'o__',

    '_xx' + '\n' +
    'o_o' + '\n' +
    'o__',

    '__x' + '\n' +
    'oox' + '\n' +
    'o__',

    '_ox' + '\n' +
    'o_x' + '\n' +
    'o__',

    '_xx' + '\n' +
    '_oo' + '\n' +
    'o__',

    'xox' + '\n' +
    'oo_' + '\n' +
    '___',

    'xox' + '\n' +
    'o_o' + '\n' +
    '___',

    'xo_' + '\n' +
    'o_o' + '\n' +
    'x__',

    'xo_' + '\n' +
    'oxo' + '\n' +
    '___',

    '_ox' + '\n' +
    'xoo' + '\n' +
    '___',

    '_ox' + '\n' +
    'x_o' + '\n' +
    '_o_',

    '_ox' + '\n' +
    '_oo' + '\n' +
    'x__',

    '_ox' + '\n' +
    'o_o' + '\n' +
    'x__',

    'x__' + '\n' +
    'ooo' + '\n' +
    'x__',

    'xo_' + '\n' +
    'xoo' + '\n' +
    '___',

    'xx_' + '\n' +
    'ooo' + '\n' +
    '___',

    '_x_' + '\n' +
    'ooo' + '\n' +
    'x__',

    'xo_' + '\n' +
    '_oo' + '\n' +
    'x__',

    'x_x' + '\n' +
    'ooo' + '\n' +
    '___',

    '_o_' + '\n' +
    'oox' + '\n' +
    'x__',

    '_ox' + '\n' +
    'oo_' + '\n' +
    'x__',

    '__x' + '\n' +
    'ooo' + '\n' +
    'x__',

    'xx_' + '\n' +
    'o_o' + '\n' +
    '_o_',

    '_o_' + '\n' +
    'oxo' + '\n' +
    'x__',

    'x_x' + '\n' +
    'o_o' + '\n' +
    '_o_',

    '_o_' + '\n' +
    'xox' + '\n' +
    '_o_',

    '_o_' + '\n' +
    'xoo' + '\n' +
    'x__',

    '_x_' + '\n' +
    'xoo' + '\n' +
    '_o_',

    '_x_' + '\n' +
    'oxo' + '\n' +
    '_o_'
  ], [
    'oxo' + '\n' +
    'xox' + '\n' +
    '___',

    'oxx' + '\n' +
    'xo_' + '\n' +
    'o__',

    'ox_' + '\n' +
    'xox' + '\n' +
    'o__',

    'oxo' + '\n' +
    '_ox' + '\n' +
    'x__',

    'oxo' + '\n' +
    'xxo' + '\n' +
    '___',

    'oxo' + '\n' +
    'x_o' + '\n' +
    'x__',

    'ox_' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'oxo' + '\n' +
    'o_x' + '\n' +
    'x__',

    'oxo' + '\n' +
    'xx_' + '\n' +
    'o__',

    'oxo' + '\n' +
    'x_x' + '\n' +
    'o__',

    'oxo' + '\n' +
    '__x' + '\n' +
    'x_o',

    'ox_' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oxo' + '\n' +
    'x_x' + '\n' +
    '_o_',

    'oxx' + '\n' +
    'x_o' + '\n' +
    'o__',

    'oxo' + '\n' +
    '__x' + '\n' +
    'xo_',

    'oxo' + '\n' +
    '_xx' + '\n' +
    'o__',

    'oxx' + '\n' +
    'x__' + '\n' +
    'o_o',

    'oxo' + '\n' +
    '__x' + '\n' +
    'ox_',

    'oox' + '\n' +
    'xx_' + '\n' +
    'o__',

    'oo_' + '\n' +
    'xxx' + '\n' +
    'o__',

    'oxo' + '\n' +
    '_xo' + '\n' +
    'x__',

    'o_o' + '\n' +
    'xxx' + '\n' +
    'o__',

    'o_x' + '\n' +
    'xx_' + '\n' +
    'o_o',

    'o_x' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oox' + '\n' +
    'x_x' + '\n' +
    'o__',

    'xoo' + '\n' +
    '__x' + '\n' +
    'x_o',

    'o_x' + '\n' +
    'xox' + '\n' +
    'o__',

    'x_o' + '\n' +
    '_ox' + '\n' +
    'x_o',

    'o_x' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'o_x' + '\n' +
    'x_o',

    'x_o' + '\n' +
    'x_x' + '\n' +
    'o_o',

    'xxo' + '\n' +
    'xoo' + '\n' +
    '___',

    'oxx' + '\n' +
    'oo_' + '\n' +
    'x__',

    'oo_' + '\n' +
    'xox' + '\n' +
    'x__',

    'xxo' + '\n' +
    '_oo' + '\n' +
    'x__',

    'xxo' + '\n' +
    'oxo' + '\n' +
    '___',

    'oxx' + '\n' +
    'o_o' + '\n' +
    'x__',

    'xo_' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'o_o' + '\n' +
    'x__',

    'oo_' + '\n' +
    'xxo' + '\n' +
    'x__',

    'xxo' + '\n' +
    'x_o' + '\n' +
    '_o_',

    'oox' + '\n' +
    'x_o' + '\n' +
    'x__',

    'x_x' + '\n' +
    'x_o' + '\n' +
    'oo_',

    'xxo' + '\n' +
    '_xo' + '\n' +
    'o__',

    'xxo' + '\n' +
    'x_o' + '\n' +
    'o__',

    'oxx' + '\n' +
    'o__' + '\n' +
    'x_o',

    'x_o' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'ox_' + '\n' +
    'oxo' + '\n' +
    'x__',

    'oo_' + '\n' +
    'xxx' + '\n' +
    '_o_',

    '_xo' + '\n' +
    'oxo' + '\n' +
    'x__',

    '_xo' + '\n' +
    'xxo' + '\n' +
    '_o_',

    'oox' + '\n' +
    'xxo' + '\n' +
    '___',

    '_oo' + '\n' +
    'oxx' + '\n' +
    'x__',

    '_xo' + '\n' +
    'xxo' + '\n' +
    'o__',

    'xoo' + '\n' +
    '_xx' + '\n' +
    'o__',

    '_oo' + '\n' +
    'xxx' + '\n' +
    'o__',

    'ox_' + '\n' +
    'oox' + '\n' +
    'x__',

    '_x_' + '\n' +
    'xox' + '\n' +
    'oo_',

    '_xo' + '\n' +
    'xoo' + '\n' +
    'x__',

    'ox_' + '\n' +
    'o_x' + '\n' +
    'xo_',

    '_xx' + '\n' +
    'x_o' + '\n' +
    'oo_',

    'xoo' + '\n' +
    '__x' + '\n' +
    'ox_',

    '_xo' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'xox' + '\n' +
    '___',

    'xoo' + '\n' +
    '_ox' + '\n' +
    'x__',

    'xoo' + '\n' +
    'x_x' + '\n' +
    '_o_',

    'xoo' + '\n' +
    '__x' + '\n' +
    'xo_',

    'xoo' + '\n' +
    'o_x' + '\n' +
    'x__',

    'xoo' + '\n' +
    'x_x' + '\n' +
    'o__',

    '_oo' + '\n' +
    'xox' + '\n' +
    'x__',

    '_ox' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'xoo' + '\n' +
    '___',

    'oxx' + '\n' +
    '_oo' + '\n' +
    'x__',

    'xo_' + '\n' +
    'xox' + '\n' +
    'o__',

    'xox' + '\n' +
    'xo_' + '\n' +
    'o__',

    'oxx' + '\n' +
    '_ox' + '\n' +
    'o__',

    'o_o' + '\n' +
    'xox' + '\n' +
    'x__',

    'x_x' + '\n' +
    'xo_' + '\n' +
    'o_o',

    'ox_' + '\n' +
    'xoo' + '\n' +
    'x__',

    'xx_' + '\n' +
    'xoo' + '\n' +
    'o__',

    'o_x' + '\n' +
    'xoo' + '\n' +
    'x__',

    'x_x' + '\n' +
    'xoo' + '\n' +
    'o__',

    'ox_' + '\n' +
    'xox' + '\n' +
    '_o_',

    '_xo' + '\n' +
    'oox' + '\n' +
    'x__',

    'o_o' + '\n' +
    'xox' + '\n' +
    '_x_',

    'o_x' + '\n' +
    '_ox' + '\n' +
    'ox_',

    'ox_' + '\n' +
    '_ox' + '\n' +
    'xo_',

    '_xx' + '\n' +
    'xoo' + '\n' +
    'o__',

    'x_o' + '\n' +
    'xox' + '\n' +
    '_o_',

    'x_o' + '\n' +
    '_ox' + '\n' +
    'xo_',

    'x_o' + '\n' +
    'oox' + '\n' +
    'x__',

    '_ox' + '\n' +
    'xox' + '\n' +
    'o__',

    'oxx' + '\n' +
    '_xo' + '\n' +
    'o__',

    'o_o' + '\n' +
    'x_x' + '\n' +
    'xo_',

    'xox' + '\n' +
    'x__' + '\n' +
    'o_o',

    'oxx' + '\n' +
    'x_o' + '\n' +
    '_o_',

    'xo_' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oxx' + '\n' +
    '__o' + '\n' +
    'xo_',

    'xox' + '\n' +
    'x_o' + '\n' +
    'o__',

    'xxo' + '\n' +
    'o_x' + '\n' +
    'o__',

    'xxo' + '\n' +
    'ox_' + '\n' +
    'o__',

    'oxx' + '\n' +
    '__o' + '\n' +
    'x_o',

    'ox_' + '\n' +
    'xxo' + '\n' +
    '_o_',

    '_xo' + '\n' +
    'o_x' + '\n' +
    'xo_',

    '_xo' + '\n' +
    'oxx' + '\n' +
    'o__',

    'xxo' + '\n' +
    '__x' + '\n' +
    'oo_',

    'o_o' + '\n' +
    'xxx' + '\n' +
    '_o_',

    'o_o' + '\n' +
    '_xx' + '\n' +
    'xo_',

    'o_x' + '\n' +
    'xxo' + '\n' +
    '_o_',

    '_ox' + '\n' +
    'xxo' + '\n' +
    'o__',

    'x_o' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'o_x' + '\n' +
    'xo_',

    'o_o' + '\n' +
    'xxo' + '\n' +
    'x__',

    'oxx' + '\n' +
    '__x' + '\n' +
    'oo_',

    'x_x' + '\n' +
    'x_o' + '\n' +
    'o_o',

    'xxo' + '\n' +
    '_x_' + '\n' +
    'o_o',

    'xxo' + '\n' +
    'x__' + '\n' +
    'o_o',

    'ox_' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'o_o' + '\n' +
    'oxx' + '\n' +
    'x__',

    'o_o' + '\n' +
    '_xx' + '\n' +
    'ox_',

    'oox' + '\n' +
    '__x' + '\n' +
    'ox_',

    'x_o' + '\n' +
    'xxo' + '\n' +
    'o__',

    'o_x' + '\n' +
    'x_o' + '\n' +
    'x_o',

    'x_o' + '\n' +
    'oxx' + '\n' +
    'o__',

    'xoo' + '\n' +
    'xxo' + '\n' +
    '___',

    'oox' + '\n' +
    'ox_' + '\n' +
    'x__',

    'oo_' + '\n' +
    'oxx' + '\n' +
    'x__',

    'xoo' + '\n' +
    '_xo' + '\n' +
    'x__',

    'oox' + '\n' +
    '_xo' + '\n' +
    'x__',

    'xo_' + '\n' +
    'oxx' + '\n' +
    'o__',

    'xox' + '\n' +
    'ox_' + '\n' +
    'o__',

    'oox' + '\n' +
    '_xx' + '\n' +
    'o__',

    'x_x' + '\n' +
    'ox_' + '\n' +
    'o_o',

    'xx_' + '\n' +
    'oxo' + '\n' +
    'o__',

    'o_x' + '\n' +
    'oxo' + '\n' +
    'x__',

    'x_x' + '\n' +
    'oxo' + '\n' +
    'o__',

    'oox' + '\n' +
    '_x_' + '\n' +
    'x_o',

    'oox' + '\n' +
    'o_x' + '\n' +
    'x__',

    'xx_' + '\n' +
    'o_x' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'x_o' + '\n' +
    'x__',

    'oox' + '\n' +
    '_ox' + '\n' +
    'x__',

    'xx_' + '\n' +
    'oox' + '\n' +
    'o__',

    'xxx' + '\n' +
    'oo_' + '\n' +
    'o__',

    'xxx' + '\n' +
    'o__' + '\n' +
    'o_o',

    'oox' + '\n' +
    '__x' + '\n' +
    'xo_',

    'xxx' + '\n' +
    'o_o' + '\n' +
    'o__',

    'x_x' + '\n' +
    '__o' + '\n' +
    'xoo',

    'o_x' + '\n' +
    'oox' + '\n' +
    'x__',

    'x_x' + '\n' +
    '_oo' + '\n' +
    'x_o',

    'o_x' + '\n' +
    'o_x' + '\n' +
    'xo_',

    'xox' + '\n' +
    '__o' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'o_o' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'o_x' + '\n' +
    'oo_',

    'x_x' + '\n' +
    'oox' + '\n' +
    'o__',

    'xox' + '\n' +
    'o_x' + '\n' +
    'o__',

    'xo_' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'oxo' + '\n' +
    'x__',

    'x_o' + '\n' +
    'xxo' + '\n' +
    '_o_',

    'x_x' + '\n' +
    '_xo' + '\n' +
    'oo_',

    'xx_' + '\n' +
    '_ox' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'xoo' + '\n' +
    'x__',

    'xxx' + '\n' +
    '__o' + '\n' +
    'oo_',

    'x_x' + '\n' +
    '_ox' + '\n' +
    'oo_',

    'xox' + '\n' +
    '__x' + '\n' +
    'oo_',

    'xxx' + '\n' +
    '_o_' + '\n' +
    'o_o',

    'o_x' + '\n' +
    '_ox' + '\n' +
    'xo_',

    'xxx' + '\n' +
    '_oo' + '\n' +
    'o__',

    'xox' + '\n' +
    '_o_' + '\n' +
    'x_o',

    'xox' + '\n' +
    '_ox' + '\n' +
    'o__',

    'xox' + '\n' +
    '_x_' + '\n' +
    'o_o',

    'o_x' + '\n' +
    '_xo' + '\n' +
    'xo_',

    'xox' + '\n' +
    '_xo' + '\n' +
    'o__',

    'xox' + '\n' +
    'o__' + '\n' +
    'x_o',

    'o_x' + '\n' +
    '_xx' + '\n' +
    'oo_',

    '_x_' + '\n' +
    'oxx' + '\n' +
    'oo_',

    '_oo' + '\n' +
    'xxo' + '\n' +
    'x__',

    '_xx' + '\n' +
    'oxo' + '\n' +
    'o__',

    '_ox' + '\n' +
    'oxx' + '\n' +
    'o__',

    '_xx' + '\n' +
    'o_x' + '\n' +
    'oo_',

    '_xx' + '\n' +
    'oox' + '\n' +
    'o__',

    'xox' + '\n' +
    'xoo' + '\n' +
    '___',

    'xox' + '\n' +
    'oo_' + '\n' +
    'x__',

    'xo_' + '\n' +
    'oox' + '\n' +
    'x__',

    'xox' + '\n' +
    '_oo' + '\n' +
    'x__',

    'xox' + '\n' +
    'oxo' + '\n' +
    '___',

    'xox' + '\n' +
    'o_o' + '\n' +
    'x__',

    'xo_' + '\n' +
    'o_x' + '\n' +
    'xo_',

    'xo_' + '\n' +
    'oxo' + '\n' +
    'x__',

    'xox' + '\n' +
    'x_o' + '\n' +
    '_o_',

    'xox' + '\n' +
    '__o' + '\n' +
    'xo_',

    '_ox' + '\n' +
    'xxo' + '\n' +
    '_o_',

    '_ox' + '\n' +
    'oxo' + '\n' +
    'x__',

    '_x_' + '\n' +
    'oox' + '\n' +
    'xo_',

    '_ox' + '\n' +
    'xoo' + '\n' +
    'x__',

    '_xx' + '\n' +
    'o_o' + '\n' +
    'xo_',

    'xo_' + '\n' +
    'xoo' + '\n' +
    'x__',

    '_xx' + '\n' +
    'xoo' + '\n' +
    '_o_',

    '_ox' + '\n' +
    'oox' + '\n' +
    'x__',

    'x_x' + '\n' +
    'xoo' + '\n' +
    '_o_',

    'x_x' + '\n' +
    '_oo' + '\n' +
    'xo_',

    'xx_' + '\n' +
    'oxo' + '\n' +
    '_o_',

    'xxx' + '\n' +
    'o_o' + '\n' +
    '_o_',

    'x_x' + '\n' +
    'oxo' + '\n' +
    '_o_',

    'xx_' + '\n' +
    'xoo' + '\n' +
    '_o_'
  ], [
    'oxo' + '\n' +
    'xox' + '\n' +
    'o__',

    'oxo' + '\n' +
    'xox' + '\n' +
    '_o_',

    'oxo' + '\n' +
    'xoo' + '\n' +
    'x__',

    'oxx' + '\n' +
    'xoo' + '\n' +
    'o__',

    'oxx' + '\n' +
    'xo_' + '\n' +
    'o_o',

    'ox_' + '\n' +
    'xox' + '\n' +
    'oo_',

    'oxo' + '\n' +
    '_ox' + '\n' +
    'ox_',

    'oxo' + '\n' +
    'oox' + '\n' +
    'x__',

    'oxo' + '\n' +
    '_ox' + '\n' +
    'x_o',

    'oxo' + '\n' +
    '_ox' + '\n' +
    'xo_',

    'oxo' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oxo' + '\n' +
    'xxo' + '\n' +
    '_o_',

    'oxo' + '\n' +
    'oxx' + '\n' +
    'o__',

    'oxx' + '\n' +
    'x_o' + '\n' +
    'oo_',

    'oxo' + '\n' +
    'x_o' + '\n' +
    'x_o',

    'oxo' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'oxo' + '\n' +
    'o_x' + '\n' +
    'ox_',

    'oxo' + '\n' +
    'o_x' + '\n' +
    'x_o',

    'oxo' + '\n' +
    'o_x' + '\n' +
    'xo_',

    'oxo' + '\n' +
    'xx_' + '\n' +
    'o_o',

    'oxo' + '\n' +
    'x_x' + '\n' +
    'o_o',

    'oxo' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'x_o' + '\n' +
    'o_o',

    'oxo' + '\n' +
    'oxo' + '\n' +
    'x__',

    'oox' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oox' + '\n' +
    'xx_' + '\n' +
    'o_o',

    'oxo' + '\n' +
    '_xo' + '\n' +
    'x_o',

    'o_x' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'o_x' + '\n' +
    'xxo' + '\n' +
    'o_o',

    'oox' + '\n' +
    'xox' + '\n' +
    'o__',

    'oox' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'x_x' + '\n' +
    'o_o',

    'xoo' + '\n' +
    '_ox' + '\n' +
    'x_o',

    'xoo' + '\n' +
    '__x' + '\n' +
    'xoo',

    'xoo' + '\n' +
    'o_x' + '\n' +
    'x_o',

    'o_x' + '\n' +
    'xox' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'xox' + '\n' +
    'o_o',

    'x_o' + '\n' +
    'oox' + '\n' +
    'x_o',

    'ooo' + '\n' +
    'x_x' + '\n' +
    'x_o',

    'oxx' + '\n' +
    'oox' + '\n' +
    'o__',

    'xxo' + '\n' +
    'xoo' + '\n' +
    '_o_',

    'xxo' + '\n' +
    'xoo' + '\n' +
    'o__',

    'oxx' + '\n' +
    'ooo' + '\n' +
    'x__',

    'oox' + '\n' +
    'xoo' + '\n' +
    'x__',

    'oxx' + '\n' +
    'oo_' + '\n' +
    'x_o',

    'xo_' + '\n' +
    'xox' + '\n' +
    'oo_',

    'ooo' + '\n' +
    'xox' + '\n' +
    'x__',

    'x_o' + '\n' +
    'xox' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'ooo' + '\n' +
    'x__',

    'xxo' + '\n' +
    '_oo' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'xoo' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'oxo' + '\n' +
    'o__',

    'xxo' + '\n' +
    'oxo' + '\n' +
    '_o_',

    'xxo' + '\n' +
    'oxo' + '\n' +
    'o__',

    'oxx' + '\n' +
    'o_o' + '\n' +
    'xo_',

    'oxx' + '\n' +
    'o_o' + '\n' +
    'x_o',

    'ooo' + '\n' +
    'x_x' + '\n' +
    'xo_',

    'xoo' + '\n' +
    'x_x' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'o_o' + '\n' +
    'x_o',

    'xox' + '\n' +
    'x_o' + '\n' +
    'oo_',

    'ooo' + '\n' +
    'xxo' + '\n' +
    'x__',

    'xxo' + '\n' +
    '_xo' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'o_x' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'x_o' + '\n' +
    'oo_',

    'oox' + '\n' +
    'x_o' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'x_o' + '\n' +
    'ooo',

    'oxx' + '\n' +
    'ox_' + '\n' +
    'o_o',

    'xxo' + '\n' +
    'x_o' + '\n' +
    'o_o',

    'oox' + '\n' +
    'xxo' + '\n' +
    '_o_',

    'xoo' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'ooo' + '\n' +
    '_xx' + '\n' +
    'xo_',

    '_ox' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'ox_' + '\n' +
    'oxx' + '\n' +
    'oo_',

    '_xo' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'oxx' + '\n' +
    'o__',

    'ooo' + '\n' +
    'oxx' + '\n' +
    'x__',

    'ooo' + '\n' +
    '_xx' + '\n' +
    'ox_',

    'ox_' + '\n' +
    'oox' + '\n' +
    'xo_',

    'xoo' + '\n' +
    '_ox' + '\n' +
    'ox_',

    'ooo' + '\n' +
    'xox' + '\n' +
    '_x_',

    '_xo' + '\n' +
    'xox' + '\n' +
    'oo_',

    'o_x' + '\n' +
    'oox' + '\n' +
    'ox_',

    '_xx' + '\n' +
    'xoo' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'o_x' + '\n' +
    'ox_',

    'oox' + '\n' +
    'o_x' + '\n' +
    'ox_',

    'xoo' + '\n' +
    'xox' + '\n' +
    '_o_',

    'xoo' + '\n' +
    'xox' + '\n' +
    'o__',

    'xoo' + '\n' +
    '_ox' + '\n' +
    'xo_',

    'xoo' + '\n' +
    'oox' + '\n' +
    'x__',

    'xoo' + '\n' +
    'o_x' + '\n' +
    'xo_',

    '_ox' + '\n' +
    'xox' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'xoo' + '\n' +
    '_o_',

    'xxo' + '\n' +
    'oox' + '\n' +
    'o__',

    'oxx' + '\n' +
    '_oo' + '\n' +
    'xo_',

    'oxx' + '\n' +
    '_oo' + '\n' +
    'x_o',

    'o_o' + '\n' +
    'xox' + '\n' +
    'xo_',

    'xox' + '\n' +
    'xo_' + '\n' +
    'o_o',

    'xox' + '\n' +
    'xoo' + '\n' +
    'o__',

    'oxx' + '\n' +
    '_ox' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'xo_' + '\n' +
    'o_o',

    'x_x' + '\n' +
    'xoo' + '\n' +
    'o_o',

    'xxo' + '\n' +
    '_ox' + '\n' +
    'oo_',

    'o_x' + '\n' +
    'xoo' + '\n' +
    'x_o',

    '_xo' + '\n' +
    'oox' + '\n' +
    'xo_',

    'oox' + '\n' +
    '_ox' + '\n' +
    'ox_',

    'x_o' + '\n' +
    'oox' + '\n' +
    'xo_',

    'oxx' + '\n' +
    '_xo' + '\n' +
    'oo_',

    'xxo' + '\n' +
    'ox_' + '\n' +
    'o_o',

    'xox' + '\n' +
    'x_o' + '\n' +
    'o_o',

    'xxo' + '\n' +
    'o_x' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'xxo' + '\n' +
    'o__',

    'oox' + '\n' +
    'o_x' + '\n' +
    'x_o',

    '_xo' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'o_o' + '\n' +
    'oxx' + '\n' +
    'xo_',

    'x_o' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'x_o' + '\n' +
    'xxo' + '\n' +
    'o_o',

    'oox' + '\n' +
    'oxx' + '\n' +
    'o__',

    'xoo' + '\n' +
    'xxo' + '\n' +
    '_o_',

    'xo_' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'xoo' + '\n' +
    'oxo' + '\n' +
    'x__',

    'xoo' + '\n' +
    '_xo' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'oxo' + '\n' +
    'oo_',

    'xox' + '\n' +
    'ox_' + '\n' +
    'o_o',

    'xox' + '\n' +
    'oxo' + '\n' +
    'o__',

    'oox' + '\n' +
    '_xx' + '\n' +
    'oo_',

    'x_x' + '\n' +
    'oxo' + '\n' +
    'o_o',

    'oox' + '\n' +
    'oox' + '\n' +
    'x__',

    'oox' + '\n' +
    'o_x' + '\n' +
    'xo_',

    'xx_' + '\n' +
    'oox' + '\n' +
    'oo_',

    'oox' + '\n' +
    '_ox' + '\n' +
    'xo_',

    'x_x' + '\n' +
    '_oo' + '\n' +
    'xoo',

    'xox' + '\n' +
    '__o' + '\n' +
    'xoo',

    'o_x' + '\n' +
    'oox' + '\n' +
    'xo_',

    'xox' + '\n' +
    '_oo' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'ooo' + '\n' +
    'x_o',

    'xox' + '\n' +
    'o_o' + '\n' +
    'x_o',

    'x_x' + '\n' +
    'oox' + '\n' +
    'oo_',

    'xox' + '\n' +
    'o_x' + '\n' +
    'oo_',

    'xox' + '\n' +
    'oox' + '\n' +
    'o__',

    'x_o' + '\n' +
    'oxo' + '\n' +
    'x_o',

    'xox' + '\n' +
    '_xo' + '\n' +
    'oo_',

    'o_x' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'xox' + '\n' +
    '_ox' + '\n' +
    'oo_',

    'xox' + '\n' +
    'oo_' + '\n' +
    'x_o',

    '_xx' + '\n' +
    'oxo' + '\n' +
    'oo_',

    '_xx' + '\n' +
    'oox' + '\n' +
    'oo_',

    'xox' + '\n' +
    'xoo' + '\n' +
    '_o_',

    'xox' + '\n' +
    'ooo' + '\n' +
    'x__',

    'xo_' + '\n' +
    'oox' + '\n' +
    'xo_',

    'xox' + '\n' +
    '_oo' + '\n' +
    'xo_',

    'xox' + '\n' +
    'oxo' + '\n' +
    '_o_',

    'xox' + '\n' +
    'o_o' + '\n' +
    'xo_',

    '_xx' + '\n' +
    'ooo' + '\n' +
    'xo_'
  ], [
    'oxo' + '\n' +
    'xox' + '\n' +
    'xo_',

    'oxx' + '\n' +
    'xox' + '\n' +
    'oo_',

    'xxo' + '\n' +
    '_ox' + '\n' +
    'xoo',

    'xxo' + '\n' +
    'oox' + '\n' +
    'x_o',

    'oox' + '\n' +
    'xox' + '\n' +
    'ox_',

    'oxo' + '\n' +
    'xxx' + '\n' +
    'oo_',

    'oxo' + '\n' +
    'oxx' + '\n' +
    'x_o',

    'oxx' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'oxo' + '\n' +
    'oxx' + '\n' +
    'xo_',

    'xxo' + '\n' +
    'o_x' + '\n' +
    'xoo',

    'oxo' + '\n' +
    'x_x' + '\n' +
    'xoo',

    'oxo' + '\n' +
    'xxx' + '\n' +
    'o_o',

    'oxo' + '\n' +
    'x_x' + '\n' +
    'oxo',

    'oxx' + '\n' +
    'xxo' + '\n' +
    'o_o',

    'oox' + '\n' +
    'xxx' + '\n' +
    'oo_',

    'xoo' + '\n' +
    '_xx' + '\n' +
    'xoo',

    'xoo' + '\n' +
    'oxx' + '\n' +
    'x_o',

    'xoo' + '\n' +
    'xxx' + '\n' +
    'o_o',

    'xoo' + '\n' +
    'xox' + '\n' +
    'x_o',

    'xoo' + '\n' +
    'x_x' + '\n' +
    'xoo',

    'oxx' + '\n' +
    'oox' + '\n' +
    'xo_',

    'xxx' + '\n' +
    'xoo' + '\n' +
    'oo_',

    'x_x' + '\n' +
    'oox' + '\n' +
    'xoo',

    'oxx' + '\n' +
    'oxo' + '\n' +
    'xo_',

    'xox' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'oxo' + '\n' +
    'x_o',

    'xoo' + '\n' +
    'xxx' + '\n' +
    'oo_',

    'xox' + '\n' +
    'o_x' + '\n' +
    'xoo',

    'oox' + '\n' +
    'x_x' + '\n' +
    'xoo',

    'xxo' + '\n' +
    'xxo' + '\n' +
    'oo_',

    'oox' + '\n' +
    'xxo' + '\n' +
    'x_o',

    'oxx' + '\n' +
    'o_x' + '\n' +
    'xoo',

    'xoo' + '\n' +
    'oxx' + '\n' +
    'xo_',

    'xoo' + '\n' +
    'oxx' + '\n' +
    'ox_',

    'xox' + '\n' +
    'oox' + '\n' +
    'ox_',

    'oxx' + '\n' +
    'xoo' + '\n' +
    'xo_',

    'xxo' + '\n' +
    'oox' + '\n' +
    'xo_',

    'xox' + '\n' +
    'oox' + '\n' +
    'x_o',

    'xox' + '\n' +
    'xox' + '\n' +
    'o_o',

    'xxx' + '\n' +
    'xoo' + '\n' +
    'o_o',

    'xox' + '\n' +
    'xxo' + '\n' +
    'o_o',

    'xxo' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'oxx' + '\n' +
    'x_o' + '\n' +
    'xoo',

    'oox' + '\n' +
    'oxx' + '\n' +
    'x_o',

    'oox' + '\n' +
    'oxx' + '\n' +
    'xo_',

    'xxx' + '\n' +
    'oxo' + '\n' +
    'oo_',

    'xox' + '\n' +
    'oxx' + '\n' +
    'oo_',

    'xox' + '\n' +
    '_xo' + '\n' +
    'xoo',

    'xox' + '\n' +
    'oxo' + '\n' +
    'x_o',

    'xxx' + '\n' +
    'oxo' + '\n' +
    'o_o',

    'oox' + '\n' +
    'oox' + '\n' +
    'xx_',

    'xxx' + '\n' +
    '_oo' + '\n' +
    'xoo',

    'xxx' + '\n' +
    'o_o' + '\n' +
    'xoo',

    'xxx' + '\n' +
    'oox' + '\n' +
    'oo_',

    'xox' + '\n' +
    'xoo' + '\n' +
    'x_o',

    'xox' + '\n' +
    'oxo' + '\n' +
    'xo_',

    'xox' + '\n' +
    'o_o' + '\n' +
    'xox'
  ], [
    'oxo' + '\n' +
    'xox' + '\n' +
    'xoo',

    'xxo' + '\n' +
    'xox' + '\n' +
    'ooo',

    'xxo' + '\n' +
    'oox' + '\n' +
    'xoo',

    'oxo' + '\n' +
    'oxx' + '\n' +
    'xoo',

    'oxx' + '\n' +
    'xxo' + '\n' +
    'ooo',

    'oxo' + '\n' +
    'xox' + '\n' +
    'oxo',

    'xoo' + '\n' +
    'oxx' + '\n' +
    'xoo',

    'oxx' + '\n' +
    'oox' + '\n' +
    'xoo',

    'xox' + '\n' +
    'oox' + '\n' +
    'xoo',

    'xox' + '\n' +
    'xxo' + '\n' +
    'ooo',

    'oox' + '\n' +
    'xox' + '\n' +
    'xoo',

    'xxo' + '\n' +
    'xxo' + '\n' +
    'ooo',

    'oxx' + '\n' +
    'xoo' + '\n' +
    'xoo',

    'xox' + '\n' +
    'xox' + '\n' +
    'ooo',

    'xox' + '\n' +
    'ooo' + '\n' +
    'xox'
  ]
]

module.exports = KEYS;
