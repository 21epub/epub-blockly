import type { BlocklyOptions } from 'blockly';

import toolbox from './toolbox/main';

export default {
  move: {
    scrollbars: true,
    drag: true,
    wheel: true,
  },
  theme: 'zelos',
  toolbox,
  media: 'https://unpkg.creatby.com/blockly/media/',
  grid: {
    spacing: 25,
    length: 3,
    colour: '#ccc',
    snap: true,
  },
  zoom: {
    controls: true,
    startScale: 0.6,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },

  renderer: 'zelos',
} as BlocklyOptions;
