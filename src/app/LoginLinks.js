/* eslint-disable prettier/prettier */
'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            {user ? (
                <div className="login">
                    <Link
                        href="/dashboard"
                        className="ml-4 text-sm text-gray-700 underline">
                        Dashboard
                    </Link>
                </div>
            ) : (
                <>
                    <div className="reg">
                        <Link
                            href="/register"
                            className="ml-4 text-sm text-gray-700 underline">
                            Register
                        </Link>
                    </div>
                    <div className="login">
                        <Link
                            href="/login"
                            className="text-sm text-gray-700 underline">
                            Login
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}

export default LoginLinks
