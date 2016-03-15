var requirejs = {
    baseUrl: (window.__root ? __root : ''),
    paths: {
        'zepto': 'http://g.alicdn.com/sj/lib/zepto/zepto.min',
        'msui': 'http://g.alicdn.com/msui/sm/0.6.2/js/sm.min',
        'msuiExtend': 'http://g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min',
        'swiper': './vendor/swiper/js/swiper.min'
    },
    shim: {
        'zepto': {
            deps: [],
            exports: ''
        },
        'msui': {
            deps: ['zepto'],
            exports: ''
        },
        'msuiExtend': {
            deps: ['msui'],
            exports: ''
        },
        'swiper': {
            deps: [],
            exports: 'Swiper'
        }
    },
    waitSeconds: 0
};
