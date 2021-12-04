// 进行动画偏移的动画函数

/**
 * 操作dom的动画方法, 请不要大量使用, 影响性能
 * @param {String} elementId 需要监听的元素id
 * @param {String} className 当屏幕滚动到此区域时进行添加的类名
 * 
 * @returns {function} 返回一个注销函数事件
 */

export const transfromDom = (elementId = '', className = '') => {

    // window.onscroll = this.onPageScroll;

    let throttleKey = false;




    let handleFunction = () => {

        // if (throttleKey) {
        //     return;
        // }
        // throttleKey = true;
        // setTimeout(() => {
        //     throttleKey = false;
        //     clearTimeout(throttleKey);
        // }, 50);

        let element = document.getElementById(elementId);
        // 当前检测不到此元素时, 立即清除添加的监听事件 
        if (!element) {

            document.removeEventListener('scroll', handleFunction);
            return
        }
        let offsetTop = element.offsetTop;
        let clientHeight = element.clientHeight;

        let scrollTop =
            (document.documentElement.scrollTop || document.body.scrollTop)

        let pageHeight = document.documentElement.clientHeight;

        // 当这个元素有至少1/4显示在屏幕中时, 进行事件的触发, 为它添加类
        if (scrollTop + pageHeight - (offsetTop + (clientHeight / 4)) >= 0 && scrollTop - ((clientHeight / 4 * 3) + offsetTop) <= 0) {
            element.className += ' ' + className;
            document.removeEventListener('scroll', handleFunction)
        }
    }
    // 初始化运行
    handleFunction();
    document.addEventListener('scroll', handleFunction)

    return () => {
        document.removeEventListener('scroll', handleFunction)
    }
}