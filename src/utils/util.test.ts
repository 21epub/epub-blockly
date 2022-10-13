// Utils functions unit tests

import { formatXml } from '@/utils/code';

describe('Units functions Tests', () => {
  it('should generate xml Ok ?', () => {
    let xml = formatXml('<block/>');
    expect(xml).toEqual('<block/>');
    xml = formatXml('<block>test</block>');
    expect(xml).toEqual('<block>test</block>');
  });
});
