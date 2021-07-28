export const floor = (val: number, num: number | undefined): String => {
  num = num ?? 2;
  let temp = (Math.round(val * 10 * num) / (10 * num)).toString();
  let idx = temp.indexOf('.');
  if (idx < 0) {
    idx = temp.length;
    temp += '.';
  }
  while (temp.length <= idx + 2) {
    temp += '0';
  }
  return temp;
};

export const scrollTo = () => {
  let scrollToptimer = setInterval(function () {
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    let speed = top / 30;
    document.documentElement.scrollTop -= speed;
    if (top == 0) {
      clearInterval(scrollToptimer);
    }
  }, 5);
};

export const getScrollTop = () => {
  let scrollTop = 0,
    bodyScrollTop = 0,
    documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop =
    bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop;
  return scrollTop;
};

export const getScrollHeight = () => {
  let scrollHeight = 0,
    bodyScrollHeight = 0,
    documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight =
    bodyScrollHeight - documentScrollHeight > 0
      ? bodyScrollHeight
      : documentScrollHeight;
  return scrollHeight;
};

export const getWindowHeight = () => {
  let windowHeight = 0;
  if (document.compatMode == 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
};

export const toTheBottom = (distance: number = 10) => {
  return getScrollHeight() - getScrollTop() - getWindowHeight() < distance;
};

const urlReg =
  /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => urlReg.test(path);

export const isAbsoluteUrl = (path: string): boolean =>
  /(https|http):\/\//.test(path);

export const isDev = process.env.NODE_ENV === 'development';
