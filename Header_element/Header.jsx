function Header(props) {
    const sloganNone = {
        display: props.leftSlogan ? 'block' : 'none'
    };
    const slogan = {
        display: props.slogan ? 'block' : 'none'
    };
    const btnNone = {
        display: props.btn ? 'block' : 'none'
    };

    return (
        <>
            <header id="header_el" style={{ backgroundImage: `url(${props.bg})` }}>
                <div className="topbar_el">
                    <h1 className="logo_el">
                        <a href="./index.html">
                            <img src="./img/logo.svg" alt="jotalkLogo" />
                        </a>
                    </h1>

                    <div className="menu_el">
                        <a href="./forum.html">綜合論壇</a>
                        <a href="./barlist.html">酒吧清單</a>
                        <a href="./member.html">我的會員</a>
                    </div>
                </div>


                <div className="left_slogan_el" style={sloganNone}>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>

                <div class="slogan_el" style={slogan}>
                    <h1>LET'S JOTALK!</h1>
                </div>

                <div className="writeBtn_el" style={btnNone}>
                    <button id="writeBtn_el">發表文章</button>
                </div>

                <div className="account_login_el">
                    <button id="loginBtn_el">會員登入</button>
                </div>

                <div className="account_logout_el">
                    <button id="logoutBtn_el">會員登出</button>
                </div>

                <div id="account_overlay_el" className="account_overlay_el"></div>

                <div id="loginWindow_el" className="window_el">
                    <figure id="closebtn_el"><img src="./img/member/iconmonstr-x.svg"/></figure>
                    <div className="contant_el">
                        <div className="login_border_el">
                            <h2>LOGIN</h2>
                        </div>
                        <form action="./member.html" method="post" name="member_form" id="member_form" title="會員登入表單">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" title="輸入信箱欄位" placeholder="*輸入信箱" required
                                autoComplete />
                            <div className="forget_passward">
                                <label htmlFor="password"></label>
                                <input type="password" name="password" id="password" title="輸入密碼欄位" placeholder="*輸入密碼"
                                    required autoComplete />
                                <small title="忘記密碼">忘記密碼?</small>
                            </div>

                            <div className="button_el">
                                <button type="button" name="btn_submit" id="btn_login" title="送出按鈕">
                                    <span>登入</span>
                                </button>
                                <button type="button" name="btn_submit" id="btn_register" title="送出按鈕">
                                    <span>註冊</span>
                                </button>
                            </div></form>
                            <div className="fast__login">
                                <hr />
                                <p>快速登入</p>
                            </div>
                            <ul className="icon_el">
                                <li><a className="icon_el-fb" id="fb" href="#"></a></li>
                                <li><a className="icon_el-mail" id="google" href="#"></a></li>
                                <li><a className="icon_el-line" id="line" href="#"></a></li>
                            </ul>
                        
                    </div>
                </div>
            </header>
        </>
    )
}