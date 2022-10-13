import { atom } from 'recoil';

export const exportCodeModalStatus = atom({
  key: 'exportCodeModalStatus', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const exportXmlModalStatus = atom({
  key: 'exportXmlModalStatus', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const importXmlModalStatus = atom({
  key: 'importXmlModalStatus', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const exportCode = atom({
  key: 'code',
  default: '',
});
