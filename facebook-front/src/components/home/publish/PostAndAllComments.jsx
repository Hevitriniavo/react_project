import "./post_allcomments.css"
import { CloseRounded, MoreHoriz } from "@mui/icons-material";

const PostAndAllComments = ({ isToggle, visible }) => {
    return (
        <div>
            <div className={`container_publish ${!visible ? "translateY0" : "translateY100"}`}>
                <div className="center">
                    <div className="post_all">
                        <div className="post_top">
                            <div className="post_top_left">
                                <div className="profil post_profil">
                                    <img
                                        src="assets/profil/client-img.png"
                                        alt="..."
                                    />
                                </div>
                                <div className="post_top_center">
                                    <div className="post_top_center_top">
                                        Remena bila
                                    </div>
                                    <div className="post_top_center_during">
                                        1 hours ego
                                    </div>
                                </div>
                            </div>
                            <div className="post_top_right">
                                <MoreHoriz
                                    className="icon_more"
                                />
                                <CloseRounded
                                    onClick={isToggle}
                                    className="icon_closed"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn" >
                visible
            </button>
        </div>
    )
}

export default PostAndAllComments
