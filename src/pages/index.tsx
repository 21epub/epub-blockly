import { ChakraProvider } from '@chakra-ui/react';

import { App } from '@/components/Blockly/App';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Editor = () => (
  <ChakraProvider>
    <Main
      meta={
        <Meta title="Epub360 Block Editor" description="Epub360 Block Editor" />
      }
    >
      <App></App>
    </Main>
  </ChakraProvider>
);

export default Editor;
