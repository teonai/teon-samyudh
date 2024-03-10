"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const start_1 = __importDefault(require("./router/start"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./database"));
//Env Config
dotenv_1.default.config();
//App Config
const app = (0, express_1.default)();
const corsOptions = {
    methods: ['GET', 'POST'], // Add any other methods your client uses
    allowedHeaders: ['Content-Type'], // Add any other headers your client sends
};
app.use((0, cors_1.default)(corsOptions));
//Mapping APi.
app.use('/start', start_1.default);
// Define the port number for the server to listen on
const PORT = parseInt(process.env.PORT || '3000');
const HOST = process.env.HOST || "localhost";
(0, database_1.default)();
//Running it.
app.listen(PORT, HOST, () => {
    console.log(`Server is running port: ${PORT}`);
});
//# sourceMappingURL=index.js.map