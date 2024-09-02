function Helper() {
    return (
        <div className="helper-wrapper">

            <button id="helperBtn" className="helper-btn">
                <img src="./img/helperbear.jpg" alt="小幫手" className="helper-icon" />
            </button>


            <div id="helperBox" className="helper-box">
                <div id="helperText" className="chat-messages"></div>
                <div className="chat-input">
                    <input type="text" id="helperInput" placeholder="輸入您的問題..." />
                    <button id="helperSendButton">發送</button>
                </div>
            </div>

            <div className="helper-label">LET ME<br />HELP!</div>
        </div>

    )
}