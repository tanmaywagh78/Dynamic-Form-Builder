import { mongoose } from "../config/mongoose";
import { Document } from "mongoose";

export interface IDTObject extends  Document{
}
export const DTObjectSchema = new mongoose.Schema<IDTObject>({

},
{
    strict: false
});
const DTObject = mongoose.model<IDTObject>("DTObject", DTObjectSchema);
export default DTObject;

