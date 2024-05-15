import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
import BreadCrumbs from '@/components/BreadCrumbs'
export const metadata = {
    title: 'Omni Auctions Lots',
}

const Lots = () => {
    return (
        <>
            <TopBar />
            <Navbar />
            <div className="buy-container">
                
                <BreadCrumbs/>
            </div>
            <Footer />
        </>
    )
}

export default Lots
