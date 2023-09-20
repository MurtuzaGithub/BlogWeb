import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"


const handler =  NextAuth(authOptions)
//Useing Google Cloud Api for SignUp

export {handler as GET, handler as POST};