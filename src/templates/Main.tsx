import type { ReactNode } from 'react';
// import { AppConfig } from "@/utils/AppConfig";
import { RecoilRoot } from 'recoil';

import { OperationMenu } from '@/components/NavBar/Menu';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <RecoilRoot>
    <div className="w-full text-gray-700 antialiased">
      {props.meta}
      <OperationMenu></OperationMenu>
      <div className="mx-auto h-screen w-full">
        <div className="content w-full text-xl">{props.children}</div>
      </div>
    </div>
  </RecoilRoot>
);

export { Main };
