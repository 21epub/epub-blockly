import * as React from 'react';

import { ExportCodeDialog } from './ExportCode';
import { ExportXmlDialog } from './ExportXml';
import { ImportXmlDialog } from './ImportCode';

export function Dialog() {
  return (
    <div>
      <ExportCodeDialog></ExportCodeDialog>
      <ExportXmlDialog></ExportXmlDialog>
      <ImportXmlDialog></ImportXmlDialog>
    </div>
  );
}
