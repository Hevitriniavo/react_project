import SlideBarLeft from "./slidebarleft/SlideBarLeft";
import SlideBarCenter from "./slidebarcenter/SlideBarCenter";
import SlideBarRight from "./slidebarright/SlideBarRight";

import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <SlideBarLeft />
                <SlideBarCenter />
                <SlideBarRight />
            </div>
        </div>
    )
}

export default Home
