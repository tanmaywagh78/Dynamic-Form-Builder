import { mongoose } from "../config/mongoose";
import url from "url";

class AppController {
    _model;
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
                res.status(201).json({data:savedObject, msg:"Data saved sucessfully"});
            }, (err) => {
                res.status(400).json({data:err.message, msg:"Failed to save data."});
               // return next(err);
            });
    }

    getAll(req, res, next) {
        this._model.find((err: any, objects: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(objects);
            }
        });

    }

    getById(req, res, next) {
        this._model.findById(req.params.id, (err: any, object: any) => {
            if (err) {
                res.send(err);
            } else {
                res.send(object);
            }
        });
    }

    deleteById(req, res, next) {
        this._model.deleteOne({ _id: req.params.id }, (err: any) => {
            if (err) {
                res.status(400).json({data:err.message, msg:"Failed to delete."});
            } else {
                res.status(201).json({ msg:"Deleted sucessfully."});
            }
        });
    }

    updateById(req, res, next) {
        this._model.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err: any, object: any) => {
                if (err) {
                    res.status(400).json({data:err.message, msg:"Failed to update."});
                } else {
                    res.status(201).json({msg:"Updated sucessfully."});
                }
            }
        );
    }


}

export default AppController;