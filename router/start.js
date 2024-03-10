"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const crypto_1 = __importDefault(require("crypto"));
const questions_1 = __importDefault(require("../database/questions"));
const router = express_1.default.Router();
const sendToSamyuktFunction = {
    sendSamyukt(message, ID) {
        fetch(`http://localhost:1223/analize/generate/${ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: message.toString()
        });
    }
};
router.use(express_1.default.urlencoded({ extended: true }));
router.post('/', async (req, res) => {
    const { message } = req.body;
    const ref_id = crypto_1.default.randomInt(1000000000, 281474976710655.);
    const question = await questions_1.default.create({
        message: message,
        ref_id: ref_id.toString(),
        solved: false,
        nextInstance: "Samyukt.",
        dateCreated: new Date().toISOString()
    });
    const IdOfQuestion = question._id.toString();
    console.log(IdOfQuestion);
    sendToSamyuktFunction.sendSamyukt(message, IdOfQuestion);
    res.send(`Server is processing your string. it will take up to 4 mins to get your response. your REF_ID: ${ref_id}`);
});
exports.default = router;
//# sourceMappingURL=start.js.map