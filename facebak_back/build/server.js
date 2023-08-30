"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildServer = void 0;
var fastify_1 = __importDefault(require("fastify"));
var cors_1 = __importDefault(require("@fastify/cors"));
var comment_1 = require("./modules/comment");
var post_1 = require("./modules/post");
var shared_1 = require("./modules/shared");
var user_1 = require("./modules/user");
var reaction_1 = require("./modules/reaction");
var DEFAULT_OPTIONS = {};
var buildServer = function (opts) {
    if (opts === void 0) { opts = {}; }
    var server = (0, fastify_1.default)(__assign(__assign({}, DEFAULT_OPTIONS), opts));
    shared_1.schemas.forEach(function (schema) {
        server.addSchema(schema);
    });
    server.register(cors_1.default);
    // do not want to use prefix here
    server.register(comment_1.commentRoutes);
    server.register(post_1.postRoutes);
    server.register(user_1.userRoutes);
    server.register(reaction_1.reactionRoutes);
    return server;
};
exports.buildServer = buildServer;
