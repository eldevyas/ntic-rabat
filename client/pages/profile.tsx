import { useEffect } from 'react'
import nextCookies from 'next-cookies'

export default function Profile({ token }: any) {
    useEffect(() => {
        document.cookie = 'token=Atik; HttpOnly; Secure;Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/'
        if (!token) {
            document.cookie = 'token=Atik; HttpOnly; Secure;Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/'
        }
    }, [token])

    return <p>Your token is: {
        token ? token : 'not set'
    }</p>
}

export async function getServerSideProps(context: any) {
    const allCookies = nextCookies(context)

    // set the token cookie
    if (allCookies.token) {
        context.res.setHeader('Set-Cookie', 'token=Atik; HttpOnly; Secure;Expires=Thu, 01 Jan 1970 00:00:00 UTC;  Path=/')
    }


    // get the token cookie
    const token = allCookies.token

    return { props: { token } }
}