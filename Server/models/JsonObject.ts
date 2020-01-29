import { mongoose } from "../config/mongoose";
import { Document } from "mongoose";

export interface IJsonObject extends  Document{
}
export const JsonObjectSchema = new mongoose.Schema<IJsonObject>({

},
{
    strict: false
});
const JsonObject = mongoose.model<IJsonObject>("JsonObject", JsonObjectSchema);
export default JsonObject;

