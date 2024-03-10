"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const Questions = new Schema({
    message: String,
    ref_id: String,
    nextInstance: String,
    solved: Boolean,
    dateCreated: String,
});
const QuestionsModel = mongoose_1.default.model("QuestionsModel", Questions);
exports.default = QuestionsModel;
//# sourceMappingURL=questions.js.map