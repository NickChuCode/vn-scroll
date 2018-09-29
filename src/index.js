import VnScroll from './vn-scroll'

export default VnScroll

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vn-scroll', VnScroll);
}


