var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var platformModule = require("platform");
var observableModule = require("data/observable");
var enumsModule = require("ui/enums");
var frameModule = require("ui/frame");

var ViewModelBase = (function (_super) {
    __extends(ViewModelBase, _super);
    function ViewModelBase() {
        _super.call(this);
        this._loadingCount = 0;
    }
    Object.defineProperty(ViewModelBase.prototype, "androidVisibility", {
        get: function () {
            if (platformModule.device.os === ANDROID_OS_NAME) {
                return enumsModule.Visibility.visible;
            }

            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(ViewModelBase.prototype, "iosVisibility", {
        get: function () {
            if (platformModule.device.os === IOS_OS_NAME) {
                return enumsModule.Visibility.visible;
            }

            return enumsModule.Visibility.collapsed;
        },
        enumerable: true,
        configurable: true
    });

    ViewModelBase.prototype.beginLoading = function () {
        if (!this._loadingCount) {
            this.set("isLoading", true);
        }

        this._loadingCount++;
    };

    ViewModelBase.prototype.endLoading = function () {
        if (this._loadingCount > 0) {
            this._loadingCount--;
            if (!this.loadingCount) {
                this.set("isLoading", false);
            }
        }
    };

    ViewModelBase.prototype.navigateTo = function (navigationContext) {
        var topmost = frameModule.topmost();
        topmost.navigate(navigationContext);
    };

    ViewModelBase.prototype.goBack = function () {
        var topmost = frameModule.topmost();
        topmost.goBack();
    };
    return ViewModelBase;
})(observableModule.Observable);
exports.ViewModelBase = ViewModelBase;
//# sourceMappingURL=view-model-base.js.map
