//  export 注重导出
define("modules-export", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("modules-import", ["require", "exports", "./xyz.txt!text", "json!http://example.com/data.json"], function (require, exports, xyz_txt_text_1, data_json_1) {
    "use strict";
    exports.__esModule = true;
    var Ob = /** @class */ (function () {
        function Ob() {
        }
        Ob.prototype.is = function (s) {
            return false;
        };
        return Ob;
    }());
    console.log(new Ob().is("ss"));
    console.log(data_json_1["default"], xyz_txt_text_1["default"]);
});
