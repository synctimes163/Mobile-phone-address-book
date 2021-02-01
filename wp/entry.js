var str = "hello webpack"

 str = require("./module.js");  // 需要重新编译  webpack entry.js -o bundle.js

//  require("./module.css");
// 没有加载器报错,请在项目中加载引入 npm install --save-dev css-loader style-loader require("style-loader!css-loader!./module.css");
// ------------------
//  ERROR in ./module.css 1:5
// Module parse failed: Unexpected token (1:5)
// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
// > body {
// |     background-color: red;
// | }
//  @ ./entry.js 6:1-24
//  -------------------

// require("style-loader!css-loader!./module.css");


require("./module.css")

window.onload = function() {
    var div = document.createElement("div");

    div.innerHTML = str;


    document.body.appendChild(div)
}