"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bdd = void 0;
var model_1 = require("../domain/model");
var interface_1 = require("./interface");
var remove_1 = require("./helper/remove");
var Bdd = /** @class */ (function () {
    function Bdd() {
        this.room = new interface_1.Room();
    }
    Bdd.prototype.createRoom = function (bdd, numberPlayer) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.numberPlayer = numberPlayer;
                return [2 /*return*/];
            });
        });
    };
    Bdd.prototype.readRoom = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, bdd.room];
            });
        });
    };
    Bdd.prototype.getNumberCharacter = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, bdd.room.roles.length];
            });
        });
    };
    Bdd.prototype.getNumberUser = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, bdd.room.user.length];
            });
        });
    };
    Bdd.prototype.login = function (bdd, username, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.user.push({ username: username, id: id });
                return [2 /*return*/, bdd.room.user[bdd.room.user.length - 1]];
            });
        });
    };
    /////////////////////////////////ADD ROLE////////////////////////////////
    Bdd.prototype.addWitch = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.roles.push(new model_1.Witch());
                return [2 /*return*/, bdd.room.roles];
            });
        });
    };
    Bdd.prototype.addWarewolf = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.roles.push(new model_1.Warewolf());
                return [2 /*return*/, bdd.room.roles];
            });
        });
    };
    Bdd.prototype.addPeasant = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.roles.push(new model_1.Peasant());
                return [2 /*return*/, bdd.room.roles];
            });
        });
    };
    Bdd.prototype.addCupid = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                bdd.room.roles.push(new model_1.Cupid());
                return [2 /*return*/, bdd.room.roles];
            });
        });
    };
    /////////////////////////////////REMOVE ROLE////////////////////////////////
    Bdd.prototype.remove = function (bdd, roleId) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = bdd.room;
                        return [4 /*yield*/, remove_1.removeRole(bdd.room.roles, roleId)];
                    case 1:
                        _a.roles = _b.sent();
                        return [2 /*return*/, bdd.room.roles];
                }
            });
        });
    };
    /////////////////////////////////GIVE ROLE////////////////////////////////
    Bdd.prototype.giveRole = function (bdd) {
        return __awaiter(this, void 0, void 0, function () {
            var i, index;
            return __generator(this, function (_a) {
                bdd.room.Saveroles = bdd.room.roles;
                for (i = 0; i < bdd.room.user.length; i++) {
                    index = this.getRandomInt(bdd.room.roles.length);
                    bdd.room.user[i].character = bdd.room.roles[index];
                    bdd.room.roles.splice(index, 1);
                }
                return [2 /*return*/, bdd.room.user];
            });
        });
    };
    Bdd.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    };
    return Bdd;
}());
exports.Bdd = Bdd;
//# sourceMappingURL=bdd.js.map