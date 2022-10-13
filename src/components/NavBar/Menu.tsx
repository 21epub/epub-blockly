import {
  AddIcon,
  DeleteIcon,
  DownloadIcon,
  ExternalLinkIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import * as React from 'react';
import { useSetRecoilState } from 'recoil';

import {
  exportCodeModalStatus,
  exportXmlModalStatus,
  importXmlModalStatus,
} from '@/store/main';
import { clearWorkspace } from '@/utils/code';

export function OperationMenu() {
  const setCodeExportOpen = useSetRecoilState(exportCodeModalStatus);
  const setXmlExportOpen = useSetRecoilState(exportXmlModalStatus);
  const setXmlImportOpen = useSetRecoilState(importXmlModalStatus);
  return (
    <div className="absolute top-2 right-2 z-10">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem
            icon={<DownloadIcon />}
            onClickCapture={() => setCodeExportOpen(true)}
          >
            导出代码
          </MenuItem>
          <MenuItem
            icon={<ExternalLinkIcon />}
            onClickCapture={() => setXmlExportOpen(true)}
          >
            导出Xml配置
          </MenuItem>
          <MenuItem
            icon={<AddIcon />}
            onClickCapture={() => setXmlImportOpen(true)}
          >
            导入Xml配置
          </MenuItem>
          <MenuItem
            icon={<DeleteIcon />}
            onClickCapture={() => clearWorkspace()}
          >
            清空画布
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
