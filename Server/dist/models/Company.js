"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("../config/mongoose");
exports.CompanySchema = new mongoose_1.mongoose.Schema({
    Name: String,
    Description: String,
    CodeName: String,
    Subdomain: String,
    ActivationKey: String,
    IsDeleted: { type: Boolean, default: false },
    CreatedBy: { type: String, default: null },
    CreatedOn: { type: Date, default: Date.now },
    ModifiedBy: { type: String, default: null },
    ModifiedOn: { type: Date, default: Date.now }
}, {
    collection: 'Companies'
});
const Company = mongoose_1.mongoose.model("Company", exports.CompanySchema);
exports.default = Company;
//# sourceMappingURL=Company.js.map