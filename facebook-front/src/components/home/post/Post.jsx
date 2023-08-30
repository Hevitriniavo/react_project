import "./post.css";
import {
    MoreHoriz,
    CloseRounded,
    EmojiEmotionsOutlined,
    EmojiEventsRounded,
    Comment,
    Share
} from "@mui/icons-material";

const Post = () => {
    return (
        <div className='post'>
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
                        className="icon_closed"
                    />
                </div>
            </div>
            <div className="post_center">
                <h2 className="post_title">
                    hello welcome at Tana
                </h2>
                <p className="post_content">
                    You have a unique gift for translating emotions into images. This picture takes me back to that moment, evoking the same feelings I had when experiencing it firsthand. Your work is truly transformative
                </p>
                <div className="post_img">
                    <img
                        src="assets/post/4.png"
                        alt="..."
                        className="post_img"
                    />
                </div>
            </div>
            <div className="post_bottom">
                <div className="post_bottom_header">
                    <div className="liked">
                        <EmojiEmotionsOutlined className="like ok" />
                        <EmojiEventsRounded className="like ko" />
                        <span className="counter_reaction">
                            18
                        </span>
                    </div>
                    <div className="share">
                        <Share className="share_icons" />
                    </div>
                    <div className="comments">
                        <span className="count_comment">
                            12
                        </span>
                        <Comment className="comment" />
                    </div>
                </div>
                <div className="post_bottom_footer">
                    <div className="post_bottom_footer_left">
                        <EmojiEventsRounded className="like" />
                        <span>I liked it!</span>
                    </div>
                    <div className="commented">
                        <EmojiEventsRounded className="like" />
                        <span>I comment it!</span>
                    </div>
                    <div className="shared">
                        <EmojiEventsRounded className="share" />
                        <span>to share</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
