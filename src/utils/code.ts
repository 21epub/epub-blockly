import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';

export const formatXml = (xml: string): string => {
  // https://stackoverflow.com/questions/57039218/doesnt-monaco-editor-support-xml-language-by-default
  const PADDING = ' '.repeat(2);
  const reg = /(>)(<)(\/*)/g;
  let pad = 0;
  const parseXml = xml.replace(reg, '$1\r\n$2$3');
  return parseXml
    .split('\r\n')
    .map((node) => {
      let indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/) && pad > 0) {
        pad -= 1;
      } else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }
      pad += indent;
      return PADDING.repeat(pad - indent) + node;
    })
    .join('\r\n');
};

export const generateWorkspaceCode = (
  workspace?: Blockly.WorkspaceSvg | undefined
): string => {
  const currentWorkspace = workspace || Blockly.getMainWorkspace();
  const code = currentWorkspace
    ? javascriptGenerator.workspaceToCode(currentWorkspace)
    : '';
  const preCode = `(async function main() { \n\t${code?.replace(
    /\n/g,
    '\n\t'
  )}\n})()\n`;
  return preCode;
};

export const generateWorkspaceXml = function (
  workspace?: Blockly.WorkspaceSvg | undefined
): string {
  const currentWorkspace = workspace || Blockly.getMainWorkspace();
  try {
    const dom = Blockly.Xml.workspaceToDom(currentWorkspace);

    return formatXml(Blockly.Xml.domToText(dom));
  } catch (e) {
    return '';
  }
};

export const importWorkspaceXml = (
  xml: string,
  workspace?: Blockly.WorkspaceSvg | undefined
) => {
  const xmlContent =
    xml || '<xml xmlns="https://developers.google.com/blockly/xml"></xml>';
  const currentWorkspace = workspace || Blockly.getMainWorkspace();
  try {
    const dom = Blockly.Xml.textToDom(xmlContent);
    Blockly.Xml.domToWorkspace(dom, currentWorkspace);
  } catch (e) {
    console.log(e);
  }
};

export const clearWorkspace = (
  workspace?: Blockly.WorkspaceSvg | undefined
) => {
  const currentWorkspace = workspace || Blockly.getMainWorkspace();
  currentWorkspace.clear();
};
