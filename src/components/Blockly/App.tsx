import * as Blockly from 'blockly';
// @ts-ignore
import * as Zh from 'blockly/msg/zh-hans';
import * as React from 'react';

import { Dialog } from '../Dialog/main';
import config from './config';

// @ts-ignore
Blockly.setLocale(Zh);

export function App() {
  const ref = React.useRef(null);
  let workspace: Blockly.WorkspaceSvg | undefined;
  React.useEffect(() => {
    if (ref?.current) {
      workspace = Blockly.inject(ref?.current, config as any);
    }
    return () => {
      workspace?.dispose();
    };
  });
  return (
    <div className="app">
      <div className="blockly-container h-screen" ref={ref}></div>
      <Dialog></Dialog>
    </div>
  );
}
