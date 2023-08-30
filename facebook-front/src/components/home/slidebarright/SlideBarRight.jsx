import "./slidebar_right.css";


const SlideBarRight = () => {
    const arr = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.png", "6.jpg", "7.jpg", "8.png", "9.jpg", "10.jpg", "11.png", "12.png"];

    return (
        <div className="container_right z_index">
            <ul className="user_online">                {arr.map(item => (
                    <li key={item} className="item_list">
                        <img src={`assets/post/${item}`} alt=".." />
                        <span>{item} items 1 {item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SlideBarRight
