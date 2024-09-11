function Activity(props) {
    // const {  } = props;

        return (
            <>
                <div id="overlay_evt" class="overlay_evt"></div>

                <div id="window_evt" class="window_evt">
                    <figure id="closeBtn_evt"><img src="./img/forum/account/iconmonstr-x.svg" alt="" /></figure>
                    <div class="wrap_evt">
                        <figure class="event_img"><img src="./img/forum/forum_right_pic/event-1.jpg" alt="" /></figure>
                        <div class="details">
                            <div class="left_detail">
                                <h2>期間限定! 世界調酒冠軍的得獎之作</h2>
                                <small>2024年9月20日</small>
                                <p>這是一個你絕對不想錯過的夜晚！來自全球的調酒冠軍，將親臨現場，展示他們的得獎之作。<br />
                                    無論你是調酒愛好者，還是酒吧文化的忠實粉絲，這次活動都將帶你進入一個前所未有的味覺冒險。
                                    世界調酒冠軍將帶來他們的冠軍調酒作品，每一款都經過精心設計，融合了創新與經典的元素。每一口，都將帶你感受冠軍的靈感與創意，體驗前所未有的味蕾衝擊。<br />
                                    活動當晚，你可以親眼見證世界調酒冠軍的獨特技藝，感受頂級調酒的創意火花，並且每位參加者都有機會品嚐到這些難得的限量冠軍調酒。
                                    此外，我們還準備了現場互動遊戲，參加者將有機會贏取冠軍特製調酒的專屬配方及限量紀念品。<br />
                                    這不僅僅是品味調酒，更是一場感官的饗宴，帶給你難忘的夜晚！我們邀請所有對調酒充滿熱情的人，共襄盛舉，與世界冠軍一起舉杯歡慶這個特別的夜晚。
                                    趕快鎖定這個獨一無二的機會，與我們一同沉醉在冠軍調酒的迷人世界中！</p>
                            </div>
                            <div class="right_detail">

                                <div class="share_evt">
                                {/* onClick={handleBookmarkClick}  onClick={handleShareClick} */}
                                    <img id="bookmark" src="./img/forum/news/likes/bookmark_window.svg"  alt=""  />
                                    <img id="share" src="./img/forum/news/likes/share_window.svg" alt=""  />
                                </div>
                                <p><code class="bold">活動時間：</code><br />
                                    2024年9月20日（週五）<br />19:00-22:00<br />
                                    <code class="bold">活動地點：</code><br />
                                    台北市大安區復興南路一段100號2樓 – Funky Mix Bar<br />
                                    <code class="bold">購票資訊：</code><br />
                                    早鳥票：NT$1,500（限量50張）<br />
                                    現場票：NT$1,800</p>
                                <a href="#" class="link">前往活動</a>
                            </div>
                        </div>
                        <hr />

                    </div>
                </div>
            </>
        );
    }