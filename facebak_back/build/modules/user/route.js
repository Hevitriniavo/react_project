"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
var controller_1 = require("./controller");
var shared_1 = require("../shared");
var userRoutes = function (server, _, done) {
    server.get("/users", controller_1.getUsersHandler);
    server.post("/users", {
        schema: {
            body: (0, shared_1.$ref)("createUserDto"),
        },
    }, controller_1.createUserHandler);
    server.get("/users/:uid", controller_1.getUserByIdHandler);
    server.put("/users", {
        schema: {
            body: (0, shared_1.$ref)("updateUserDto"),
        },
    }, controller_1.updateUserHandler);
    done();
};
exports.userRoutes = userRoutes;
