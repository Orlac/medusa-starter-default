import { z } from "zod"
import {CurrencyEnum} from "../currency-enum";

export const ConvertSchema = z.object({
    amount: z.preprocess(
        (val: string) => {
            // return false;
            console.log('val', val)
            console.log('val', Object.keys(CurrencyEnum))
            return parseInt(val)
        },
        z.number(),
    ),
    from: z.preprocess(
        (val: string) => {
            if (typeof val === 'string') {
                return CurrencyEnum[val] || undefined;
            }
        },
        z.string(),
    ),
    to: z.preprocess(
        (val: string) => {
            if (typeof val === 'string') {
                return CurrencyEnum[val] || undefined;
            }
        },
        z.string(),
    ),
})