import './home-intro.css'
import BannerVedio from "../../assets/banner-video1.mp4"

const HomeIntro = () => {
    

    return (
        <section className='intro'>
            <video autoPlay muted loop id="background-video">
                <source src={BannerVedio} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='intro-text container' data-aos="zoom-out-right">
                <h1 className="heading">Get the traction your product/service deserves</h1>
                <div className='sub-heading'>
                    <p>By leveraging the most of digital landscape</p>
                    <p>Your digital consultant awaits!</p>
                </div>
                <div className='intro-btn'>
                    <a className='whatsapp-btn' target='_blank' href="https://wa.me/923118120088?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Codexura.%20Could%20you%20please%20provide%20me%20with%20some%20details%3F">
                        <button>Schedule free 30 min call</button>
                    </a>
                </div>
            </div>

        </section>
    )
}

export default HomeIntro


