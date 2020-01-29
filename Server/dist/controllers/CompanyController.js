"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppController_1 = __importDefault(require("../controllers/AppController"));
class CompanyController extends AppController_1.default {
    /**
     * @param {Model} model
     */
    constructor(model) {
        super(model);
    }
}
exports.default = CompanyController;
//# sourceMappingURL=CompanyController.js.map