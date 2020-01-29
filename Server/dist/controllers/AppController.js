"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
class AppController {
    /**
    * @param {Model} model
    */
    constructor(model) {
        this._model = model;
        this.create = this.create.bind(this);
        this.getAll = this.getAll.bind(this);
        this.getById = this.getById.bind(this);
        this.deleteById = this.deleteById.bind(this);
        this.updateById = this.updateById.bind(this);
        this.getModelSchema = this.getModelSchema.bind(this);
    }
    /**
     * @param {Object} req The request object
     * @param {Object} res The response object
     * @param {function} next The callback to the next program handler
     * @return {Object} res The response object
     */
    create(req, res, next) {
        let obj = req.body;
        let object = new this._model(obj);
        object.save()
            .then((savedObject) => {
            res.status(201).json(savedObject);
        }, (err) => {
            return next(err);
        });
    }
    getAll(req, res, next) {
        this._model.find((err, objects) => {
            if (err) {
                res.send("Error!");
            }
            else {
                res.send(objects);
            }
        });
    }
    getById(req, res, next) {
        this._model.findById(req.params.id, (err, object) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(object);
            }
        });
    }
    deleteById(req, res, next) {
        this._model.deleteOne({ _id: req.params.id }, (err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Successfully Deleted ");
            }
        });
    }
    updateById(req, res, next) {
        this._model.findByIdAndUpdate(req.params.id, req.body, (err, object) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send("Successfully updated ");
            }
        });
    }
    getModelSchema(req, res, next) {
        // console.log(this._model.prototype.schema.obj);
        var q = url_1.default.parse(req.url, true);
        var modelFields = Object.keys(this._model.prototype.schema.paths);
        var queryFields = Object.keys(q.query);
        console.log(modelFields, modelFields.length, queryFields, queryFields.length);
        this._model.find(q.query, (err, objects) => {
            if (err) {
                res.send("Error!");
            }
            else {
                res.send(objects);
            }
        });
    }
}
exports.default = AppController;
//# sourceMappingURL=AppController.js.map