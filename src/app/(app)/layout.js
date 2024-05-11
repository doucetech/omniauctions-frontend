/* eslint-disable no-unused-vars */
'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

const AppLayout = ({ children, header }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="App">
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
