import {
    Search, Home, Notifications,
    Message
} from "@mui/icons-material";

import "./navbar.css";

const NavBar = () => {
    return (
        <>
            <div className="nav_bar_container">
                <div className="nav__flex">
                    <div className="nav_bar_left">
                        <div className="logo">
                            <h2 className="title_logo">
                                <span className="color_red">
                                    face
                                </span>
                                <span className="font_size_bold">
                                    b
                                </span>
                                <span className="color_blue">
                                    ak
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="nav_bar_center">
                        <div className="search_input">
                            <input
                                type="text"
                                name="search" id="search"
                                placeholder="search your friend(s)" />
                            <Search
                                className="search_icons"
                            />
                        </div>
                    </div>

                    <div className="nav_bar_right">
                        <div className="icons_home">
                            <Home
                                className="icons_right"
                            />
                        </div>
                        <div className="messager">
                            <Message
                                className="icons_right"
                            />
                        </div>
                        <div className="icons_notifications">
                            <Notifications
                                className="icons_right"
                            />
                        </div>
                        <div className="profil">
                            <img
                                src="assets/profil/client-img.png"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;