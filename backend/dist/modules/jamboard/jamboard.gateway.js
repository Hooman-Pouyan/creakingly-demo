"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JamboardGateWay = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const events_model_1 = require("../../core/models/events.model");
const jamboard_service_1 = require("./jamboard.service");
let JamboardGateWay = class JamboardGateWay {
    onModuleInit() {
        this.server.on('connection', (socket) => {
            console.log('connected', socket.id);
        });
    }
    constructor(jamboardService) {
        this.jamboardService = jamboardService;
    }
    handleElementAppearanceChange(body) {
        console.log(body);
        this.server.emit(events_model_1.SocketEvents.JAMBOARD.ELEMENT$, {
            event: events_model_1.SocketEvents.JAMBOARD.ELEMENT$,
            userId: body[0],
            id: body[1],
            type: body[2],
            data: body[3],
        });
    }
    handleElementDataChange(body) {
        console.log(body);
        this.server.emit(events_model_1.SocketEvents.JAMBOARD.COMMENTS$, {
            event: events_model_1.SocketEvents.JAMBOARD.COMMENTS$,
            userId: body[0],
            id: body[1],
            type: body[2],
            data: body[3],
        });
        this.jamboardService.handleElementDataChange(body);
    }
    handleElementInfoChange(body) {
        this.server.emit(events_model_1.SocketEvents.JAMBOARD.ELEMENT.INFO, body);
        this.jamboardService.handleElementInfoChange(body);
    }
    handleCursorMove(body) {
        this.server.emit(events_model_1.SocketEvents.JAMBOARD.CURSOR.MOVE, body);
        this.jamboardService.handleCursorMove(body);
    }
};
exports.JamboardGateWay = JamboardGateWay;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], JamboardGateWay.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_model_1.SocketEvents.JAMBOARD.ELEMENT$),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JamboardGateWay.prototype, "handleElementAppearanceChange", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_model_1.SocketEvents.JAMBOARD.COMMENTS$),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JamboardGateWay.prototype, "handleElementDataChange", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_model_1.SocketEvents.JAMBOARD.ELEMENT.INFO),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JamboardGateWay.prototype, "handleElementInfoChange", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(events_model_1.SocketEvents.JAMBOARD.CURSOR.MOVE),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JamboardGateWay.prototype, "handleCursorMove", null);
exports.JamboardGateWay = JamboardGateWay = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
        },
    }),
    __metadata("design:paramtypes", [jamboard_service_1.JamboardService])
], JamboardGateWay);
//# sourceMappingURL=jamboard.gateway.js.map