import { useCallback, useState } from "react"
import Post from "../post/Post"
import PostAndAllComments from "../publish/PostAndAllComments"
import Share from "../share/Share"
import "./slidebar_center.css"

const SlideBarCenter = () => {
    const [visible, setVisible] = useState(false);

    const isToggle = useCallback(() => {
        setVisible(!visible);
    }, [visible])

    return (
        <div className="container_center">
            <Share />
            <Post />
            <Post />
            <PostAndAllComments
                isToggle={isToggle}
                visible={visible}
            />
        </div>
    )
}

export default SlideBarCenter
