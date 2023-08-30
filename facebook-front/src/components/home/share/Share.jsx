import "./share.css";

const Share = () => {
    return (
        <div className="container_share">
            <div className="conatiner_top">
                <div className="profil">
                    <img
                        src="assets/profil/client-img.png"
                        alt="..."
                    />
                </div>
            </div>
            <div className="container_bottom">
                <input
                    type="text"
                    className="news"
                    placeholder="what's up ?"
                />
            </div>
            <div className="container_bottom">
                <button
                    className="btn_share"
                >
                    share
                </button>
            </div>
        </div>
    )
}

export default Share
