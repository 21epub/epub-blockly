import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

/**
 *  通过Eid获取Epub360元素
 */
Blockly.Blocks.epub_overlay_from_eid = {
  init() {
    this.appendValueInput('EID').setCheck('String').appendField('获取EID=');
    this.appendDummyInput().appendField('的元素');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('通过Eid来获取Epub360组件元素');
    this.setHelpUrl('');
  },
};

javascriptGenerator.epub_overlay_from_eid = function (block: Blockly.Block) {
  const valueEid = javascriptGenerator.valueToCode(
    block,
    'EID',
    javascriptGenerator.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  const code = `$api.overlay.getOverlayModelByEid(${valueEid})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, javascriptGenerator.ORDER_NONE];
};
