import * as dotenv from 'dotenv'
dotenv.config()

const NODE_ENV: string = process.env.NODE_ENV || 'development'
const AUTHOR: string = process.env.AUTHOR || 'Andrew Moss'
const PORT: number = process.env.PORT as unknown as number || 4000
const END_POINT: string = process.env.END_POINT || 'graphql'

export {
    NODE_ENV,
    AUTHOR,
    PORT,
    END_POINT,
}