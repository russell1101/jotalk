function helper() {
    const helperBtn = document.getElementById('helperBtn');
    const helperBox = document.getElementById('helperBox');
    const helperSendButton = document.getElementById('helperSendButton');
    const helperInput = document.getElementById('helperInput');
    const helperText = document.getElementById('helperText');
    const helperWrapper = document.querySelector('.helper-wrapper');
    const helperLabel = document.querySelector('.helper-label');

    let isHelperBoxOpen = false; // 追蹤對話框是否已展開
    let hasDefaultMessageBeenAdded = false;
    let state = {
        step: 0,
        style: '',
        members: '',
        location: ''
    };

    // 綁定到小幫手按鈕的點擊事件
    helperBtn.addEventListener('click', toggleHelperBox);

    // 綁定到 "LET ME HELP" 標籤的點擊事件
    helperLabel.addEventListener('click', toggleHelperBox);

    // 切換對話框的顯示狀態
    function toggleHelperBox() {
        if (!isHelperBoxOpen) {
            openHelperBox();
        } else {
            closeHelperBox();
        }
    }

    helperWrapper.addEventListener('mouseenter', () => {
        if (!isHelperBoxOpen) {
            helperWrapper.classList.add('expanded');
        }
    });

    helperWrapper.addEventListener('mouseleave', () => {
        if (!isHelperBoxOpen) {
            helperWrapper.classList.remove('expanded');
        }
    });

    helperSendButton.addEventListener('click', sendMessage);
    helperInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    document.addEventListener('click', (event) => {
        if (isHelperBoxOpen && !helperWrapper.contains(event.target) && !helperBtn.contains(event.target) && !helperLabel.contains(event.target)) {
            closeHelperBox();
        }
    });

    function openHelperBox() {
        helperBox.style.display = 'flex';
        helperWrapper.classList.add('expanded', 'forced-expanded');
        isHelperBoxOpen = true;

        if (!hasDefaultMessageBeenAdded) {
            addMessage('helper', 'Hi 我是Ai小幫手BEER，歡迎向我提問喔！<br>可以點選以下問題或直接打字詢問 🍺');
            addDefaultQuestions();
            hasDefaultMessageBeenAdded = true;
        }
    }

    function closeHelperBox() {
        helperBox.style.display = 'none';
        helperWrapper.classList.remove('forced-expanded');
        isHelperBoxOpen = false;
    }

    function sendMessage() {
        const text = helperInput.value.trim();
        if (text !== '') {
            addMessage('user', text);
            processInput(text);
            helperInput.value = '';
        }
    }

    function addDefaultQuestions() {
        const questions = [
            { text: '尋找酒吧 👀', action: 'findBar' },
            { text: '現在時間 ⏰', action: 'currentTime' },
            { text: '捷運末班車 💨', action: 'lastTrain' }
        ];

        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'chat-message helper';
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble';
            bubble.innerText = question.text;
            questionDiv.appendChild(bubble);
            helperText.appendChild(questionDiv);

            // 添加滑鼠事件
            questionDiv.style.cursor = 'pointer';

            questionDiv.addEventListener('click', () => {
                handleDefaultQuestion(question.action);
            });
        });
    }

    const bars = {
        北: ['Ludwig', 'Darwin', 'Blastoise', 'Oask'],
        中: ['Milotic', 'Coconut', 'Middle Two', 'River Night'],
        南: ['Nightfall Nook', 'Wine Bucket', 'Ocean', 'Sun Walk']
    };

    const regionKeywords = {
        '北': ['台北', '新北', '基隆'],
        '中': ['台中', '彰化', '南投'],
        '南': ['高雄', '台南', '屏東']
    };

    function getRegionFromLocation(location) {
        for (const [region, keywords] of Object.entries(regionKeywords)) {
            for (const keyword of keywords) {
                if (location.includes(keyword)) {
                    return region;
                }
            }
        }
        return null;
    }

    function getRandomBar(location) {
        const region = getRegionFromLocation(location);
        const barList = bars[region];
        if (!barList) return '無法找到符合的酒吧';
        const randomIndex = Math.floor(Math.random() * barList.length);
        return barList[randomIndex];
    }

    function handleDefaultQuestion(action) {
        switch (action) {
            case 'findBar':
                addMessage('user', '尋找酒吧');
                state.step = 0; // 重置步驟
                processInput('尋找酒吧');
                break;
            case 'currentTime':
                const now = new Date();
                const timeString = now.toLocaleString('zh-TW');
                addMessage('user', '現在時間');
                addMessage('helper', `現在時間是 ${timeString}`);
                break;
            case 'lastTrain':
                addMessage('user', '捷運末班車');
                addMessage('helper', '距離你最近的捷運站為善導寺站，末班車時間為00:44');
                break;
        }
    }

    const responses = [
        {
            keywords: ['尋找酒吧', '找酒吧'],
            response: '請告訴我你想要的酒吧風格<br>例如：英式復古、新手友善等',
            nextStep: 1
        },
        {
            keywords: ['醉', '酒', '換一家', '其他', '再一家'],
            response: '請告訴我你想要的酒吧風格<br>例如：英式復古、新手友善等',
            nextStep: 1
        },
        {
            keywords: ['現在時間', '幾點', '時間'],
            response: function () {
                const now = new Date();
                return `現在時間是 ${now.toLocaleString('zh-TW')}`;
            }
        },
        {
            keywords: ['捷運末班車', '末班車', '捷運'],
            response: '距離你最近的捷運站為善導寺站，末班車時間為00:44'
        }
    ];

    function processInput(text) {
        let response = '';

        if (state.step === 0) {
            let foundKeyword = false;

            for (const item of responses) {
                for (const keyword of item.keywords) {
                    if (text.toLowerCase().includes(keyword.toLowerCase())) {
                        if (typeof item.response === 'function') {
                            response = item.response();  // 如果回應是一個函數，則執行它
                        } else {
                            response = item.response;
                        }
                        state.step = item.nextStep || 0; // 如果沒有下一步，重置為0
                        foundKeyword = true;
                        break;
                    }
                }
                if (foundKeyword) {
                    break;
                }
            }

            if (!foundKeyword) {
                response = '對不起，我不太明白你的問題，請再次詢問😵';
            }

        } else if (state.step === 1) {
            if (!/[\u4e00-\u9fa5]+/.test(text)) {
                response = '請輸入中文<br>並告訴我你想要的酒吧風格🍺';
            } else {
                state.style = text;
                response = '請告訴我你的人數<br>選項：1-2、3-6、7-10、11-20';
                state.step = 2;
            }

        } else if (state.step === 2) {
            if (!/^\d+$/.test(text)) {
                response = '請輸入數字，並告訴我你的人數<br>選項：1-2、3-6、7-10、11-20';
            } else {
                state.members = text;
                response = '請告訴我你想要的地點<br>例如：台北市大安區、高雄市鹽埕區等';
                state.step = 3;
            }

        } else if (state.step === 3) {
            state.location = text;
            const recommendedBar = getRandomBar(state.location);
            response = `你想尋找的酒吧<br>風格是: ${state.style}<br>人數是: ${state.members}<br>地點是: ${state.location} <br>以下是推薦給您的酒吧：<br>${recommendedBar} <a class='commendBar' href="#" style="color:yellow">點此查看 ⬅︎</a>`;
            state.step = 0;
        }

        addMessage('helper', response);
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = text;
        messageDiv.appendChild(bubble);
        helperText.appendChild(messageDiv);
        helperText.scrollTop = helperText.scrollHeight;
    }
}

// 初始化小幫手功能
helper();
