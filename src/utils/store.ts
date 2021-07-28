const CATEGORIESKEY = 'finger.categories';
const CURRENTCATEGORYKEY = 'finger.currentCategory';
const LOGOS = 'finger.logos';
const MPICON = 'finger.mpicon';
const MINIPROGRAMICON = 'finger.miniprogramicon';

const setStorage = (key: string, data: any): void => {
  if (data) {
    window.sessionStorage.setItem(key, JSON.stringify(data));
  } else {
    window.sessionStorage.removeItem(key);
  }
};

const getStorage = (key: string): any | null => {
  const storage = window.sessionStorage.getItem(key);
  if (storage) {
    return JSON.parse(storage);
  }
  return null;
};

const Categories = {
  get() {
    return getStorage(CATEGORIESKEY);
  },
  set(data: any[]) {
    setStorage(CATEGORIESKEY, data);
  },
};

const CurrentCategory = {
  get() {
    return getStorage(CURRENTCATEGORYKEY);
  },
  set(data: any) {
    setStorage(CURRENTCATEGORYKEY, data);
  },
};

const Logos = {
  get() {
    return getStorage(LOGOS);
  },
  set(data: any) {
    setStorage(LOGOS, data);
  },
};

const MPIcon = {
  get() {
    return getStorage(MPICON);
  },
  set(data: any) {
    setStorage(MPICON, data);
  },
};

const MiniProgramIcon = {
  get() {
    return getStorage(MINIPROGRAMICON);
  },
  set(data: any) {
    setStorage(MINIPROGRAMICON, data);
  },
};

export default {
  Categories,
  CurrentCategory,
  Logos,
  MPIcon,
  MiniProgramIcon,
};
