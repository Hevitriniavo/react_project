import "./slidebar_left.css";
import {
  RssFeed,
  Group,
  HelpOutline,
  WorkOutline,
  Event,
  PlayCircleFilledOutlined,
  Bookmark,
  School
} from "@mui/icons-material";

const SlideBarLeft = () => {
  return (
    <div className="container_left">
      <ul className="container_icons">
        <li className="d_flex">
          <span className="profil left_profil">
            <img src="assets/profil/client-img.png" alt="..." />
          </span>
          <span className="username">
            Remenabila
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <RssFeed
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            Feed
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <PlayCircleFilledOutlined
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            videos
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <Group
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            groups
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <HelpOutline
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            questions
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <WorkOutline
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            jobs
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <Event
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            events
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <Bookmark
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            Bookmarks
          </span>
        </li>
        <li className="d_flex">
          <span className="icons_left">
            <School
              className="icon_left"
            />
          </span>
          <span className="icon_text">
            Courses
          </span>
        </li>
        <li className="d_flex">
          <hr className="hr_left" />
        </li>
      </ul>
    </div>
  )
}

export default SlideBarLeft
