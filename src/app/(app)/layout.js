/* eslint-disable no-unused-vars */
'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'
import '@/app/dashboard.css'
import '@/app/custom.css'
import '@/app/fonts.css'
import Header from '@/app/(app)/Header'

const AppLayout = ({ children, header }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div id="wrapper">
            <Navigation />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header user={user} />
                    <div className="container-fluid">{children}</div>
                </div>
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Omni Auctions 2024</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default AppLayout
