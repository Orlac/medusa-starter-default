import {IConvert} from "./i-convert";
import {ConvertSchema} from "./dto/convert-schema";
import axios from "axios";
import {ErrorsEnum} from "./errors-enum";
import { Logger } from "@medusajs/framework/types"

export  class ExchangerateApi implements IConvert {

    constructor(private logger: Logger) {

    }

    public async convert(params: ConvertSchema): Promise<number> {
        const url = process.env.EXCHANGERAATE_BASE_URI + '' + process.env.EXCHANGERAATE_AP_KEY + '/pair/' + params.from + '/' + params.to + '/' + params.amount
        console.log('url', url);
        return axios.get(url)
            .then((response) => {
                return response.data.conversion_result;
            })
            .catch((error) => {
                // console.log(error);
                this.logger.error("API error", error)
                throw ErrorsEnum.SERVICE_NOT_AVAILABLE
            });
    }

}