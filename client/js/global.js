define('global', ['zepto', 'msui', 'msuiExtend'], function() {
    console.log(Zepto);
    console.log($);

    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (!!r) {
            return (r[2]);
        } else {
            return null;
        }
    }

    $.GetQueryString = GetQueryString;
});
