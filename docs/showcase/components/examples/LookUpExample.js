"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var karcin_ui_1 = require("karcin-ui");
var LookUpExample = /** @class */ (function (_super) {
    __extends(LookUpExample, _super);
    function LookUpExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LookUpExample.prototype.render = function () {
        var field = [
            {
                "type": "int",
                "name": "id",
                "label": "ID"
            },
            {
                "type": "string",
                "name": "title",
                "label": "Başlık"
            }
        ];
        var data = [{
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                userId: 1,
                id: 2,
                title: "qui est esse",
                body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                userId: 1,
                id: 3,
                title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
            },
            {
                userId: 1,
                id: 4,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
            },
            {
                userId: 1,
                id: 5,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
            },
            {
                userId: 1,
                id: 6,
                title: "dolorem eum magni eos aperiam quia",
                body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
            }];
        var store = new karcin_ui_1.Store({
            data: data
        });
        return React.createElement(karcin_ui_1.LookUp, { field: field, store: store, dataGridOption: { cellRenderer: function (e, a) {
                    console.log(e, a);
                } }, textField: 'title' });
    };
    return LookUpExample;
}(React.Component));
exports.default = LookUpExample;
//# sourceMappingURL=LookUpExample.js.map