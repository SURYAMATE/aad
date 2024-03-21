import { JwtPayload } from "jsonwebtoken"

const jwt = require("jsonwebtoken")

export default {
    /**
     * Check if JWT token is expired
     * @param token string
     * @return boolean
     */
    isExpired(token: string): boolean {
        const payload: JwtPayload = jwt.decode(token)

        if (payload) {
            return payload.exp < parseInt((Date.now() / 1000).toFixed(0))
        }
        return false
    }
}
