"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const WilderSchema = new Schema({
    name: { type: String, unique: true },
    city: String,
    skills: [{ title: String, votes: Number }]
});
module.exports = mongoose_1.default.model("wilder", WilderSchema);
//# sourceMappingURL=wilderModel.js.map