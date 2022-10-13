import '@/Blocks/EpubOverlay';

export const epubOverlay = {
  kind: 'CATEGORY',
  name: '元素',
  id: 'epubOverlay',
  colour: '240',
  contents: [
    {
      kind: 'BLOCK',
      blockxml: `<block type='epub_overlay_from_eid'>
      <value name="EID">
      <shadow type="text">
        <field name="TEXT"></field>
      </shadow>
    </value>
    </block>
    `,
    },
  ],
};
