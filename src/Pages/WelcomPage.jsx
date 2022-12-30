import "../Styles/StyledWelcomPage.scss"
import banner from "../Images/banner.png";

const WelcomPage = () => {
    return (
        <div className="welcom_page">
            <div className="content">
                <div className="inromation">
                    <div className="title">
                        <strong>Find</strong> all your favorite <strong>character</strong>
                    </div>
                    <div>
                        <h1 className="sub_title">
                            You can find out all the information about your favorite characters
                        </h1>
                    </div>
                    <button>Se more...</button>
                </div>
                <div className="banner">
                    <img src={banner} alt="banner" />
                </div>
            </div>
        </div>
    )
}

export default WelcomPage;