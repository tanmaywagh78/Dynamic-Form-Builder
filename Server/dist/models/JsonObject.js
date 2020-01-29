"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
exports.JsonObjectSchema = new mongoose_1.mongoose.Schema({}, {
    strict: false
});
const JsonObject = mongoose_1.mongoose.model("JsonObject", exports.JsonObjectSchema);
exports.default = JsonObject;
//# sourceMappingURL=JsonObject.js.map