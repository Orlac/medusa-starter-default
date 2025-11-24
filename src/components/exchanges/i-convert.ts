import {ConvertSchema} from "./dto/convert-schema";

export interface IConvert {

    convert(params: ConvertSchema): Promise<number>

}