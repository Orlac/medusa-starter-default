import {MedusaRequest, MedusaResponse} from "@medusajs/framework/http";
import {ConvertSchema} from "../../../../components/exchanges/dto/convert-schema";
import {ExchangerateApi} from "../../../../components/exchanges/exchangerate-api";
import {IConvert} from "../../../../components/exchanges/i-convert";
import {ErrorsEnum} from "../../../../components/exchanges/errors-enum";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils"
import type { Logger } from "@medusajs/framework/types"


export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {
    const logger = req.scope.resolve<Logger>(ContainerRegistrationKeys.LOGGER)
    const exchange = new ExchangerateApi(logger) as IConvert;
    try {
        const response = await exchange.convert(req.validatedQuery as ConvertSchema)
        res.json({
            amount: response
        })
    } catch (error: ErrorsEnum) {
        console.log(error)
        res.json(error)
    }
}