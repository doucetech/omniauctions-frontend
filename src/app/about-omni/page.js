import TopBar from '@/components/TopBar'
import Navbar from '@/app/Navbar'
import Footer from '@/components/Footer'
import BreadCrumbs from '@/components/BreadCrumbs'
export const metadata = {
    title: 'Omni Auctions About',
}

const About = () => {
    return (
        <>
            <TopBar />
            <div className="about-container">
                <Navbar />
                <BreadCrumbs/>
            </div>
            <Footer />
        </>
    )
}

export default About
