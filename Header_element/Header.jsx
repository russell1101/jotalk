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
            <header id="header" style={{ backgroundImage: `url(${props.bg})` }}>
                <div className="topbar">
                    <h1 className="logo">
                        <a href="./index.html">
                            <img src="./img/logo.svg" alt="jotalkLogo" />
                        </a>
                    </h1>

                    <div className="menu">
                        <a href="./forum.html">綜合論壇</a>
                        <a href="./barlist.html">酒吧清單</a>
                        <a href="#">關於我們</a>
                    </div>
                </div>


                <div className="forum_slogan" style={sloganNone}>
                    <h1>{props.h1}</h1>
                    <p>{props.p}</p>
                </div>

                <div class="slogan" style={slogan}>
                    <h1>Let's Jotalk</h1>
                </div>

                <div className="account_write" style={btnNone}>
                    <button id="writeBtn">發表文章</button>
                </div>

                <div className="account_login">
                    <button id="loginBtn">會員登入</button>
                </div>

                <div className="account_logout">
                    <button id="logoutBtn">會員登出</button>
                </div>

                <div id="overlay" className="overlay"></div>

                <div id="loginWindow" className="window">
                    <figure id="closebtn"><img src="../img/member/iconmonstr-x.svg" alt="" /></figure>
                    <div className="contant">
                        <div className="login_border">
                            <h2>LOGIN</h2>
                        </div>
                        <form action="./member.html" method="post" name="member_form" id="member_form" title="會員登入表單">
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id="email" title="email欄位" placeholder="*輸入信箱" required
                                autoComplete />
                            <div className="forget_passward">
                                <label htmlFor="password"></label>
                                <input type="password" name="password" id="password" title="password欄位" placeholder="*輸入密碼"
                                    required autoComplete />
                                <small>忘記密碼?</small>
                            </div>

                            <div className="button">
                                <button type="button" name="btn_submit" id="btn_login" title="送出按鈕">
                                    <span>登入</span>
                                </button>
                                <button type="button" name="btn_submit" id="btn_register" title="送出按鈕">
                                    <span>註冊</span>
                                </button>
                            </div>
                            <div className="fast__login">
                                <hr />
                                <p>快速登入</p>
                            </div>
                            <ul className="icon">
                                <li><a className="icon-fb" id="fb" href="#"></a></li>
                                <li><a className="icon-mail" id="google" href="#"></a></li>
                                <li><a className="icon-line" id="line" href="#"></a></li>
                            </ul>
                        </form>
                    </div>
                </div>
            </header>
        </>
    )
}