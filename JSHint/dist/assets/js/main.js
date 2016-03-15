
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

var Datas = {"sliders":[{"id":"slide-rId2","background":"../res/image/bg_master-rId1_layout-rId2.png","nodes":[{"id":"slide-rId2_shape-3","type":"image","background":null,"src":"../res/image/slide-rId2_shape-3.png","link":null,"chapter":null,"setting":{"width":48.3161163,"height":257.8403,"top":80.4555359,"left":361.429077},"style":"width:48.31612px; height:257.8403px; top:80.45554px; left:361.4291px;"},{"id":"slide-rId2_shape-8","type":"image","background":null,"src":"../res/image/slide-rId2_shape-8.png","link":null,"chapter":null,"setting":{"width":0.0,"height":559.432251,"top":27.36462,"left":628.4053},"style":"color:#000000;width:0px; height:559.4323px; top:27.36462px; left:628.4053px;"},{"id":"slide-rId2_shape-11","type":"image","background":null,"src":"../res/image/slide-rId2_shape-11.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":80.28388,"left":245.64325},"style":"color:#000000;width:483.8333px; height:0px; top:80.28388px; left:245.6432px;"},{"id":"slide-rId2_shape-13","type":"image","background":null,"src":"../res/image/slide-rId2_shape-13.png","link":null,"chapter":null,"setting":{"width":0.405249357,"height":536.752563,"top":27.36462,"left":361.023834},"style":"color:#000000;width:0.4052494px; height:536.7526px; top:27.36462px; left:361.0238px;"},{"id":"slide-rId2_shape-18","type":"image","background":null,"src":"../res/image/slide-rId2_shape-18.png","link":null,"chapter":null,"setting":{"width":0.405249357,"height":559.432251,"top":27.36462,"left":494.714539},"style":"color:#000000;width:0.4052494px; height:559.4323px; top:27.36462px; left:494.7145px;"},{"id":"slide-rId2_shape-35","type":"image","background":null,"src":"../res/image/slide-rId2_shape-35.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":209.375641,"left":253.203156},"style":"color:#000000;width:483.8333px; height:0px; top:209.3756px; left:253.2032px;"},{"id":"slide-rId2_shape-36","type":"image","background":null,"src":"../res/image/slide-rId2_shape-36.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":299.520844,"left":245.64325},"style":"color:#000000;width:483.8333px; height:0px; top:299.5208px; left:245.6432px;"},{"id":"slide-rId2_shape-38","type":"image","background":null,"src":"../res/image/slide-rId2_shape-38.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":338.066864,"left":253.203156},"style":"color:#000000;width:483.8333px; height:0px; top:338.0669px; left:253.2032px;"},{"id":"slide-rId2_shape-42","type":"image","background":null,"src":"../res/image/slide-rId2_shape-42.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":430.7474,"left":245.64325},"style":"color:#000000;width:483.8333px; height:0px; top:430.7474px; left:245.6432px;"},{"id":"slide-rId2_shape-43","type":"image","background":null,"src":"../res/image/slide-rId2_shape-43.png","link":null,"chapter":null,"setting":{"width":483.833282,"height":0.0,"top":557.0287,"left":252.7979},"style":"color:#000000;width:483.8333px; height:0px; top:557.0287px; left:252.7979px;"},{"id":"slide-rId2_shape-44","type":"image","background":null,"src":"../res/image/slide-rId2_shape-44.png","link":null,"chapter":null,"setting":{"width":48.3161163,"height":257.8403,"top":299.520844,"left":578.6881},"style":"width:48.31612px; height:257.8403px; top:299.5208px; left:578.6881px;"},{"id":"slide-rId2_shape-45","type":"image","background":null,"src":"../res/image/slide-rId2_shape-45.png","link":null,"chapter":null,"setting":{"width":267.3814,"height":38.775013,"top":299.29187,"left":361.023834},"style":"width:267.3814px; height:38.77501px; top:299.2919px; left:361.0238px;"},{"id":"slide-rId2_shape-46","type":"image","background":null,"src":"../res/image/slide-rId2_shape-46.png","link":null,"chapter":null,"setting":{"width":48.3161163,"height":257.8403,"top":189.759155,"left":470.556427},"style":"transform: rotate(31.95938deg); width:48.31612px; height:257.8403px; top:189.7592px; left:470.5564px;"}],"remark":null,"timelines":[],"entry":{"type":"fade","speed":"med","duration":"1","playSec":null,"isAutoPlay":false,"options":{"dir":null,"pattern":null,"hasBounce":null},"sound":{"src":null,"loop":false,"type":"keep"}},"exercise":[]}],"setting":{"width":960.0,"height":720.0}}
var Exercises = [null]
var Speeches = ["false"]