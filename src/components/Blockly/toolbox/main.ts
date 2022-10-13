// import { dict } from './dict';
// import { epubEidOverlay, epubOverlay, epubPage } from './epub';

import { color, list, logic, loop, math, text } from './basic';
import { epubOverlay } from './epub/main';

const toolbox = {
  contents: [
    {
      kind: 'CATEGORY',
      name: '通用功能',
      id: 'catCommonWrapper',
      expanded: 'true',
      contents: [
        logic,
        loop,
        math,
        text,
        list,
        // dict,
        color,
        {
          kind: 'CATEGORY',
          id: 'catVariables',
          colour: '330',
          custom: 'VARIABLE',
          name: '变量',
        },
        {
          kind: 'CATEGORY',
          id: 'catFunctions',
          colour: '290',
          custom: 'PROCEDURE',
          name: '函数',
        },
        {
          kind: 'SEP',
        },

        // epubOverlay,
        // epubEidOverlay,
        // epubPage,
      ],
    },
    {
      kind: 'CATEGORY',
      name: 'Epub功能',
      id: 'catEpubWrapper',
      expanded: 'true',
      contents: [epubOverlay],
    },
  ],
  kind: 'categoryToolbox',
  id: 'toolbox',
  style: 'display: none',
};

export default toolbox;
