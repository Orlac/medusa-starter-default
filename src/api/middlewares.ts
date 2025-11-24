import {
    validateAndTransformQuery,
    defineMiddlewares,
} from "@medusajs/framework/http"
import {ConvertSchema} from "../components/exchanges/valdators/convert-schema";

export default defineMiddlewares({
    routes: [
        {
            matcher: '/store/currency/convert',
            method: 'GET',
            middlewares: [
                validateAndTransformQuery(
                    ConvertSchema,
                    {}
                ),
            ],
        },
    ],
})