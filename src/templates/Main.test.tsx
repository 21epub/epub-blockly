import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have OptionMenu', () => {
      render(<Main meta={null}>{null}</Main>);

      const menu1 = screen.getByText('导出代码');

      expect(menu1).toBeInTheDocument();
      const menu2 = screen.getByText('导出Xml配置');

      expect(menu2).toBeInTheDocument();
      const menu3 = screen.getByText('导入Xml配置');

      expect(menu3).toBeInTheDocument();
    });

    it('should have Content', () => {
      const { container } = render(<Main meta={null}>{null}</Main>);

      // const content = container.getElementsByClassName('content');
      expect(container).toHaveLength(1);
    });
  });
});
