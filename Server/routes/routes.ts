import express from 'express';

import JsonObjectController from '../controllers/JsonObjectController';
import JsonObject from '../models/JsonObject';
const jsonObjectCtrl = new JsonObjectController(JsonObject);

import DTObjectController from '../controllers/DTObjectController';
import DTObject from '../models/DTObject';
const dTObjectCtrl = new DTObjectController(DTObject);

const router = express.Router();

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
export default router;