"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
//import fastify, { FastifyBodyParser, FastifyReply, FastifyRequest } from 'fastify'
var express_1 = __importDefault(require("express"));
var routes_1 = require("./api/routes");
var data_1 = require("./data");
var cors_1 = __importDefault(require("cors"));
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var routes_2 = require("./api/routes");
var Main = /** @class */ (function () {
    function Main() {
        this.app = express_1.default();
        this.bdd = new data_1.Bdd();
        this.httpServer = http_1.createServer(this.app);
        this.io = new socket_io_1.Server(this.httpServer, {
            cors: {
                origin: "*",
                methods: ["GET", "POST", "PUT", "DELETE"]
            },
        });
        this.id = "";
    }
    Main.prototype.start = function () {
        var _this = this;
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        var bdd = new data_1.Bdd();
        this.httpServer.listen(3000, function () {
            console.log('Votre app est disponible sur localhost:3000 !');
        });
        var userRoute = new routes_1.UserRoute({ app: this.app, bdd: this.bdd, io: this.io });
        var roomRoute = new routes_1.RoomRoute({ app: this.app, bdd: this.bdd, io: this.io });
        var gemaRoom = new routes_2.GameRoute({ app: this.app, bdd: this.bdd, io: this.io });
        this.app.get('/', function (req, res) {
            res.json("toto");
        });
        this.io.on('connection', function (socket) {
            _this.io.emit('connection', socket.id);
        });
        return Promise.resolve(true);
    };
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=app.js.map