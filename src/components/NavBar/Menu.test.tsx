import { render, renderHook, screen } from '@testing-library/react';
import * as React from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';

import { exportCodeModalStatus } from '@/store/main';

import { OperationMenu } from './Menu';

jest.setTimeout(20000);

describe('Index page', () => {
  describe('Render method', () => {
    render(
      <RecoilRoot>
        <OperationMenu />
      </RecoilRoot>
    );
    const { result } = renderHook(() => useRecoilState(exportCodeModalStatus), {
      wrapper: RecoilRoot,
    });

    it('should have Dialog', async () => {
      expect(result.current[0]).toEqual(false);

      const el1 = screen.getByText('导出代码');

      expect(el1).not.toBeVisible();
    });
  });
});
