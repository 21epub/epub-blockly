import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import Editor from '@monaco-editor/react';
import * as React from 'react';
import { useRecoilState } from 'recoil';

import { exportCodeModalStatus } from '@/store/main';
import { generateWorkspaceCode } from '@/utils/code';

export function ExportCodeDialog() {
  const [isOpened, setIsOpen] = useRecoilState(exportCodeModalStatus);
  const code = generateWorkspaceCode();
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={isOpened} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="1000px" h="600px">
          <ModalHeader>导出Epub360自定义代码</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editor
              defaultLanguage="javascript"
              defaultValue={code}
              options={{ autoIndent: 'full' }}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              关闭
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
