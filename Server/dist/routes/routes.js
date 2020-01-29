"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const JsonObjectController_1 = __importDefault(require("../controllers/JsonObjectController"));
const JsonObject_1 = __importDefault(require("../models/JsonObject"));
const jsonObjectCtrl = new JsonObjectController_1.default(JsonObject_1.default);
const DTObjectController_1 = __importDefault(require("../controllers/DTObjectController"));
const DTObject_1 = __importDefault(require("../models/DTObject"));
const dTObjectCtrl = new DTObjectController_1.default(DTObject_1.default);
const router = express_1.default.Router();
router.post('/json', jsonObjectCtrl.create);
router.get('/jsons', jsonObjectCtrl.getAll);
router.get("/json/:id", jsonObjectCtrl.getById);
router.put("/json/:id", jsonObjectCtrl.updateById);
router.delete("/json/:id", jsonObjectCtrl.deleteById);
router.post('/dto', dTObjectCtrl.create);
router.get('/dtos', dTObjectCtrl.getAll);
router.get("/dto/:id", dTObjectCtrl.getById);
router.put("/dto/:id", dTObjectCtrl.updateById);
router.delete("/dto/:id", dTObjectCtrl.deleteById);
exports.default = router;
//# sourceMappingURL=routes.js.map