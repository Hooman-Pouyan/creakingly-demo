"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketEvents = void 0;
exports.SocketEvents = {
    JAMBOARD: {
        STATE: 'jambaord:state',
        ELEMENT$: 'jamboard:element',
        COMMENTS$: 'jamboard:comments',
        ELEMENT: {
            SIZE: 'jamboard:element:size',
            POSITION: 'jamboard:element:position',
            APPEARANCE: 'jamboard:element:appearence',
            DATA: 'jamboard:element:data',
            INFO: 'jamboard:element:info',
        },
        CURSOR: {
            MOVE: 'jamboard:cursor:move',
        },
        USERS$: 'jamboard:users',
        USERS: {
            LOGIN: 'jamboard:users:login',
            LOGOUT: 'jamboard:users:logout',
            UPDATE: 'jamboard:users:update',
        },
    },
    PLANNING: {
        state: 'plannnig:state',
        TASK: {
            DATA: 'planning:task:data',
        },
        CURSOR: {
            MOVE: 'planning:cursor:move',
        },
        USERS: {
            ACTIVE: 'planning:users:active',
        },
    },
};
//# sourceMappingURL=events.model.js.map