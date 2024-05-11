import TopBar from '@/components/TopBar'
import Navbar from '@/app/Navbar'
import Footer from '@/components/Footer'
export const metadata = {
    title: 'Omni Auctions About',
}

const About = () => {
    return (
        <>
            <TopBar />
            <div className="about-container">
                <Navbar />
            </div>
            <Footer />
        </>
    )
}

export default About
