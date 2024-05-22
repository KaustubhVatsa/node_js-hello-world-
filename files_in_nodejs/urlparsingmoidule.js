var url = require('url')

function parseurl (reqUrl){
    var parsedurl = url.parse(reqUrl ,true);
    return parsedurl.pathname;
}

module.exports.parseurl = parseurl;