// 文章視窗元件
function Post(props) {
    const { user_img, user_name, post_time, art_title, hashtag1, hashtag2, hashtag3, art_content, heart_num, comment_num, bookMark_num, time, time2, user_url, userName, user_time, user_time2, floor, content, heart_cmt, comment_cmt } = props;
    return (
        <>
            <div id="overlay" className="overlay"></div>


            <div id="content-1" className="content hidden">
                <figure className="closebtn"><img src="./img/forum/account/iconmonstr-x.svg" alt="" /></figure>
                <div className="content_user">
                    <figure><img src={user_img} alt="" /></figure>
                    <h2>{user_name}</h2>
                    <small>{post_time}</small>
                </div>
                <h1>{art_title}</h1>
                <div id="hashtag">
                    <small>{hashtag1}</small>
                    <small>{hashtag2}</small>
                    <small>{hashtag3}</small>
                </div>
                <div className="padding">
                    <p id="p">{art_content}</p>
                    <div id="like">
                        <div id="heart">
                            <img id="heart_img" src="../img/forum/account/like/icon _heart_.svg" alt="" />
                            <p id="heart_num">{heart_num}</p>
                        </div>
                        <div id="comment">
                            <img id="comment_img" src="../img/forum/account/like/icon _comment square_.svg"
                                alt="" />
                            <p id="comment_num">{comment_num}</p>
                        </div>
                        <div id="bookMark">
                            <img id="bookMark_img" src="../img/forum/account/like/icon _bookmark_.svg" alt="" />
                            <p id="bookMark_num">{bookMark_num}</p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="comment-section">
                    {/*排序按鈕區域*/}
                    <div className="sort-buttons">
                        <button className="sort-button sort-hot">熱門留言</button>
                        <button className="sort-button sort-newest">由新至舊留言</button>
                        <button className="sort-button sort-oldest">由舊至新留言</button>
                    </div>

                    <div id="comments1">
                        {/*留言區域*/}
                        <div className="comment" data-timestamp={time}>
                            <div className="comment_user">
                                <figure><img src={user_url} alt="" /></figure>
                                <h2>{userName}</h2>
                                <small>{user_time}</small>
                                <small>{floor}</small>
                            </div>
                            <p>{content}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="../img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="../img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                        <div className="comment" data-timestamp={time2}>
                            <div className="comment_user">
                                <figure><img src={user_url} alt="" /></figure>
                                <h2>{userName}</h2>
                                <small>{user_time2}</small>
                                <small>{floor}</small>
                            </div>
                            <p>{content}</p>
                            <div id="like">
                                <div id="heart">
                                    <img id="heart_img" src="../img/forum/account/like/icon _heart_.svg" alt="" />
                                    <p id="heart_num">{heart_cmt}</p>
                                </div>
                                <div id="comment">
                                    <img id="comment_img" src="../img/forum/account/like/icon _comment square_.svg" alt="" />
                                    <p id="comment_num">{comment_cmt}</p>
                                </div>
                                <small>查看更多回覆</small>
                            </div>
                            <hr />
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}