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
exports.RoomRoute = void 0;
var RoomRoute = /** @class */ (function () {
    function RoomRoute(p) {
        this.path = "/room";
        this.app = p.app;
        this.bdd = p.bdd;
        this.io = p.io;
        this.app.post("" + this.path, this.create.bind(this));
        this.app.get("" + this.path, this.read.bind(this));
        this.app.post(this.path + "/witch", this.addWitch.bind(this));
        this.app.post(this.path + "/warewolf", this.addWarewolf.bind(this));
        this.app.post(this.path + "/peasant", this.addPeasant.bind(this));
        this.app.post(this.path + "/cupid", this.addCupid.bind(this));
        this.app.post(this.path + "/remove", this.remove.bind(this));
    }
    //TODO create route addRole (req.body.idRole)
    //TODO create route get all possible role
    RoomRoute.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.bdd.createRoom(this.bdd, req.body.numberPlayer);
                res.json("done");
                return [2 /*return*/];
            });
        });
    };
    RoomRoute.prototype.read = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.readRoom(this.bdd)];
                    case 1:
                        roles = (_a.sent()).roles.sort(function (previous, current) { return previous.order - current.order; });
                        res.json(roles);
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomRoute.prototype.addWitch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.addWitch(this.bdd)];
                    case 1:
                        roles = _a.sent();
                        this.io.emit('refresh_role', roles);
                        res.json("done");
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomRoute.prototype.addWarewolf = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.addWarewolf(this.bdd)];
                    case 1:
                        roles = _a.sent();
                        this.io.emit('refresh_role', roles);
                        res.json("done");
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomRoute.prototype.addPeasant = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.addPeasant(this.bdd)];
                    case 1:
                        roles = _a.sent();
                        this.io.emit('refresh_role', roles);
                        res.json("done");
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomRoute.prototype.addCupid = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.addCupid(this.bdd)];
                    case 1:
                        roles = _a.sent();
                        this.io.emit('refresh_role', roles);
                        res.json("done");
                        return [2 /*return*/];
                }
            });
        });
    };
    RoomRoute.prototype.remove = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var roles;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bdd.remove(this.bdd, req.body.roleId)];
                    case 1:
                        roles = _a.sent();
                        this.io.emit('refresh_role', roles);
                        res.json("done");
                        return [2 /*return*/];
                }
            });
        });
    };
    return RoomRoute;
}());
exports.RoomRoute = RoomRoute;
//# sourceMappingURL=Room.js.map