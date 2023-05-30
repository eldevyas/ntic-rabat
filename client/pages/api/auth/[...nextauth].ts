import { authOptions } from "@/app/lib/auth";
import NextAuth from "next-auth";

const Handler = NextAuth(authOptions);
export default Handler; 