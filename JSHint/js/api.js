
/**
 * NW接口模块
 * @module NWAPI
 * @requires {@link https://github.com/nwjs/nw.js/wiki/Window}
 */
var gui = require('nw.gui');
var win = gui.Window.get();

/**
 * 获取NW客户端永久存储目录
 * @alias module:NWAPI.getDataPath
 * @return {String} 永久存储目录
 */
var getDataPath = function() {
    return gui.App.dataPath;
};

global.NWAPI = {
    window: win,
    getDataPath: getDataPath
};
