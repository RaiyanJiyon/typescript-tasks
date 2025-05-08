var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function formatString(input, toUpper) {
    if (toUpper === void 0) { toUpper = true; }
    if (toUpper) {
        console.log(input.toUpperCase());
        return input.toUpperCase();
    }
    else {
        console.log(input.toLowerCase());
        return input.toLowerCase();
    }
}
function filterByRating(items) {
    console.log(items.filter(function (item) { return item.rating >= 4; }));
    return items.filter(function (item) { return item.rating >= 4; });
}
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    var result = [];
    for (var _a = 0, arrays_1 = arrays; _a < arrays_1.length; _a++) {
        var array = arrays_1[_a];
        result.push.apply(result, array);
    }
    console.log(result);
    return result;
}
var Vehicle = /** @class */ (function () {
    function Vehicle(makingCompany, year) {
        this._make = makingCompany;
        this._year = year;
    }
    Vehicle.prototype.getInfo = function () {
        console.log("Make: ".concat(this._make, ", Year: ").concat(this._year));
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(makingCompany, year, model) {
        var _this = _super.call(this, makingCompany, year) || this;
        _this._model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        console.log("Model: ".concat(this._model));
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 2020, "Corolla");
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.length);
        return value.length;
    }
    else if (typeof value === "number") {
        console.log(value * 2);
        return value * 2;
    }
    return 0;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    var mostExpensive = null;
    var highestPrice = -1;
    products.forEach(function (product) {
        if (product.price > highestPrice) {
            highestPrice = product.price;
            mostExpensive = product;
        }
    });
    console.log(mostExpensive);
    return mostExpensive;
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Monday ||
        day === Day.Tuesday ||
        day === Day.Wednesday ||
        day === Day.Thursday ||
        day === Day.Friday ||
        day === Day.Saturday) {
        console.log("Weekday");
        return "Weekday";
    }
    else if (day === Day.Sunday) {
        console.log("Weekend");
        return "Weekend";
    }
    else {
        return "Unknown";
    }
}
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (n < 0) {
                return [2 /*return*/, Promise.reject(new Error("Error: Negative number not allowed"))];
            }
            else {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve(n * n);
                        }, 1000);
                    })];
            }
            return [2 /*return*/];
        });
    });
}
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
