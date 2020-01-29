"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
exports.DTObjectSchema = new mongoose_1.mongoose.Schema({}, {
    strict: false
});
const DTObject = mongoose_1.mongoose.model("DTObject", exports.DTObjectSchema);
exports.default = DTObject;
//# sourceMappingURL=DTObject.js.map