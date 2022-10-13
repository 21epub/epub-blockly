// Blockly blocks test
import * as Blockly from 'blockly';
// @ts-ignore
import * as Zh from 'blockly/msg/zh-hans';

import config from '@/components/Blockly/config';
import { generateWorkspaceCode } from '@/utils/code';

const wrapPreCode = (code: string) =>
  `(async function main() { 
  ${code}
})()`.replace(/\s/g, '');

describe('Blocks Tests', () => {
  // @ts-ignore
  Blockly.setLocale(Zh);

  describe('Overlay Blocks', () => {
    document.body.innerHTML = '<div></div>';
    const workspace = Blockly.inject('div', config as any);

    it('should have BlocklySpace', () => {
      expect(workspace).toBeDefined();
      workspace?.newBlock('epub_overlay_from_eid');
      const code = generateWorkspaceCode(workspace);
      expect(code.replace(/\s/g, '')).toEqual(
        wrapPreCode('$api.overlay.getOverlayModelByEid();')
      );
    });
  });
});
