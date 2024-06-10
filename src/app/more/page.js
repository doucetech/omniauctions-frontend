import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import Navbar from '@/app/Navbar'
export const metadata = {
    title: 'Omni Auctions More',
}

const More = () => {
    return (
        <>
            <TopBar />
            <div className="buy-container">
                <Navbar />
            </div>
            <Footer />
        </>
    )
}

export default More
