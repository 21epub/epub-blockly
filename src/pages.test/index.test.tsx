import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import * as Blockly from 'blockly';
import { useEffect } from 'react';

import Index from '@/pages/index';

const XML_VALUE =
  '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="yB2Kqpbug~2~3MTfBE3N">el</variable></variables><block type="variables_set" id="wh@_!H*{+$TSo#V@6Z`D" x="337" y="-413"><field name="VAR" id="yB2Kqpbug~2~3MTfBE3N">el</field><value name="VALUE"><block type="epub_overlay_from_eid" id="[H?aGbCUhIu1:vWg!tHi"><value name="EID"><shadow type="text" id="MoTJl%MEV6wZRnX:SCD("><field name="TEXT">p_tttt</field></shadow></value></block></value></block></xml>';

jest.mock('@monaco-editor/react', () => {
  const FakeEditor = jest.fn((props) => {
    useEffect(() => {
      if (props.onMount) {
        props?.onMount({
          focus: () => {},
        });
        props?.onChange();
      }
    }, []);
    return (
      <textarea
        role="textbox"
        data-auto={props.wrapperClassName}
        onChange={(e) => props.onChange(e.target.value || XML_VALUE)}
        value={props.defaultValue}
      ></textarea>
    );
  });
  return FakeEditor;
});

jest.setTimeout(50000);

describe('Index page', () => {
  describe('Render method', () => {
    render(<Index />);

    it('should have BlocklySpace', async () => {
      expect(Blockly.getMainWorkspace()).toBeDefined();

      const el1 = screen.getByText('导出代码');

      act(() => el1.click());
      await waitFor(() => {
        const dialogEl1 = screen.getByText('导出Epub360自定义代码');
        expect(dialogEl1).toBeVisible();
      });

      let close = screen.getByText('关闭');
      act(() => close.click());
      await waitFor(() => {
        const dialogEl1 = screen.getByText('导出Epub360自定义代码');
        expect(dialogEl1).not.toBeVisible();
      });

      const el2 = screen.getByText('导出Xml配置');
      act(() => el2.click());
      await waitFor(() => {
        const dialogEl2 = screen.getByText('导出Xml配置代码');
        expect(dialogEl2).toBeVisible();
      });

      close = screen.getByText('关闭');
      act(() => close.click());
      await waitFor(() => {
        const dialogEl2 = screen.getByText('导出Xml配置代码');
        expect(dialogEl2).not.toBeVisible();
      });

      const el3 = screen.getByText('导入Xml配置');
      act(() => el3.click());
      await waitFor(() => {
        const inputArea = screen.getByRole('textbox');
        expect(inputArea).toBeVisible();
        inputArea.focus();
      });

      const inputArea = screen.getByRole('textbox') as HTMLTextAreaElement;
      expect(inputArea).toBeVisible();
      fireEvent.change(inputArea, {
        target: {
          value:
            '<xml xmlns="https://developers.google.com/blockly/xml"><block type="controls_if" id="~$B}HMfD#Ah}U6_V%Q=0" x="362" y="63"></block></xml>',
        },
      });

      const save = screen.getByText('确认');
      act(() => save.click());
      await waitFor(() => {
        const dialogEl3 = screen.getByText('导入Xml配置代码');
        expect(dialogEl3).not.toBeVisible();
      });

      act(() => el3.click());
      close = screen.getByText('取消');
      act(() => close.click());
      await waitFor(() => {
        const dialogEl3 = screen.getByText('导入Xml配置代码');
        expect(dialogEl3).not.toBeVisible();
      });

      const clear = screen.getByText('清空画布');
      expect(clear).toBeInTheDocument();
      act(() => clear.click());
    });
  });
});
