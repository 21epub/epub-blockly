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

import { importXmlModalStatus } from '@/store/main';
import { importWorkspaceXml } from '@/utils/code';

export function ImportXmlDialog() {
  const [xml, setXml] = React.useState('');
  const [isOpened, setIsOpen] = useRecoilState(importXmlModalStatus);
  const onClose = () => {
    setIsOpen(false);
  };
  const onSave = () => {
    importWorkspaceXml(xml);

    onClose();
  };
  const onChange = (v: string | undefined) => {
    setXml(v || '');
  };
  return (
    <div>
      <Modal isOpen={isOpened} onClose={onClose} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent maxW="1000px" h="600px">
          <ModalHeader>导入Xml配置代码</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Editor
              defaultLanguage="xml"
              defaultValue={''}
              options={{ autoIndent: 'full', formatOnPaste: true }}
              onChange={onChange}
              onMount={(editor) => {
                editor.focus();
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              取消
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onSave}>
              确认
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
