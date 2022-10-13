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

import { exportXmlModalStatus } from '@/store/main';
import { generateWorkspaceXml } from '@/utils/code';

export function ExportXmlDialog() {
  const [isOpened, setIsOpen] = useRecoilState(exportXmlModalStatus);
  const xml = generateWorkspaceXml();
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Modal isOpen={isOpened} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="1000px" h="600px">
          <ModalHeader>导出Xml配置代码</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editor
              defaultLanguage="xml"
              defaultValue={xml}
              options={{
                formatOnPaste: true,
              }}
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
