import { z } from "zod"
import {CurrencyEnum} from "../models/currency-enum";

export interface ConvertSchema {
    amount: number,
    from: string,
    to: string,
}