"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const winston_1 = __importDefault(require("winston"));
const logger = winston_1.default.createLogger({
    level: 'error',
    transports: [
        new winston_1.default.transports.File({ filename: 'error.log' })
    ]
});
const errorHandler = (error) => {
    logger.error(`${new Date().toISOString()}: ${error}`);
};
const connectToDatabase = async () => {
    try {
        const connection = await mongoose_1.default.connect("mongodb://localhost:27017/ppp");
        console.log('Connected to Database.');
        mongoose_1.default.connection.on('error', errorHandler);
        return connection;
    }
    catch (error) {
        console.log("Error connecting Database see logs.");
        errorHandler(error);
        throw error;
    }
};
exports.default = connectToDatabase;
//# sourceMappingURL=index.js.map