// 左側布告欄切換
document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.body_bulletin .categories div');
    const contentDivs = document.querySelectorAll('.body_bulletin .bulletin_content > div');

    categories.forEach(category => {
        category.addEventListener('click', function () {
            // 移除所有類別的 active 類
            categories.forEach(c => c.classList.remove('active'));
            // 移除所有內容的 active 類
            contentDivs.forEach(content => content.classList.remove('active'));

            // 為當前點擊的類別添加 active 類
            this.classList.add('active');

            // 顯示相應的內容
            const targetContentClass = this.className.split(' ')[0] + '_content';
            document.querySelector(`.body_bulletin .${targetContentClass}`).classList.add('active');
        });
    });

    // 設置默認顯示的內容
    document.querySelector('.body_guide').click();
});

// 熱門標籤影片切換
document.addEventListener('DOMContentLoaded', () => {
    const tagVdoCategories = document.querySelectorAll('.body_tagVdo .tagVdo_categories div');

    tagVdoCategories.forEach(tagVdoCategory => {
        tagVdoCategory.addEventListener('click', function () {
            // 移除所有類別的 active 類
            tagVdoCategories.forEach(c => c.classList.remove('active'));
            // 為當前點擊的類別添加 active 類
            this.classList.add('active');

            // 根據所選類別更新內容
            const hotTagContent = document.querySelector('.body_tagVdo .body_hotTag_content');
            const hotVdoContent = document.querySelector('.body_tagVdo .body_hotVdo_content');

            if (this.classList.contains('body_hotTag')) {
                hotTagContent.classList.add('active');
                hotVdoContent.classList.remove('active');
            } else if (this.classList.contains('body_hotVdo')) {
                hotTagContent.classList.remove('active');
                hotVdoContent.classList.add('active');
            }
        });
    });
});

// 右上活動切換
document.addEventListener('DOMContentLoaded', () => {
    // 獲取所有類別標籤
    const categories = document.querySelectorAll('.news_categories div');
    // 獲取所有內容區域
    const contentSections = document.querySelectorAll('.news_content, .limitEvt_content, .normalEvt_content');
    // 獲取 "更多" 按鈕的父容器
    const moreLinkContainer = document.querySelector('.news_more-link');

    // 處理類別標籤點擊事件
    categories.forEach((category) => {
        category.addEventListener('click', () => {
            // 移除所有類別標籤的 active 類
            categories.forEach((cat) => cat.classList.remove('active'));
            // 添加 active 類到當前被點擊的標籤
            category.classList.add('active');

            // 獲取當前被點擊標籤的 data-target 屬性
            const target = category.getAttribute('data-target');

            // 隱藏所有內容區域
            contentSections.forEach((section) => section.classList.remove('active'));

            // 顯示對應的內容區域
            const activeSection = document.querySelector(`.${target}`);
            activeSection.classList.add('active');

            // 顯示 "更多" 按鈕
            moreLinkContainer.classList.add('active-link');
        });
    });

    // 預設顯示熱門活動內容
    document.querySelector('.news_hotEvt').click();
});



// 右中文章欄切換
document.addEventListener('DOMContentLoaded', () => {
    // 取得所有類別標籤按鈕
    const categoryButtons = document.querySelectorAll('.atc_categories div');
    // 取得所有內容區域
    const contentSections = document.querySelectorAll('.body_atc > div');

    // 預設隱藏 niceAtc_content 和 normalAtc_content，顯示 hotAtc_content
    contentSections.forEach(section => {
        if (!section.classList.contains('hotAtc_content')) {
            section.classList.remove('active');
        } else {
            section.classList.add('active');
        }
    });

    // 預設將熱門文章的按鈕設為 active
    categoryButtons.forEach(button => {
        if (button.getAttribute('data-target') === 'hotAtc_content') {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按鈕的 active 類別
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // 隱藏所有內容區域
            contentSections.forEach(section => section.classList.remove('active'));

            // 為點選的按鈕添加 active 類別
            button.classList.add('active');
            // 顯示相對應的內容區域
            const targetClass = button.getAttribute('data-target');
            const targetSection = document.querySelector(`.${targetClass}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});




// 右下文章欄切換
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有类别标签
    const categories = document.querySelectorAll('.teach_categories div');
    // 获取所有内容区域
    const contentSections = document.querySelectorAll('.body_teach ul');
    // 获取所有的 "更多" 链接
    const moreLinks = document.querySelectorAll('.teachs_more-link');

    // 为每个类别标签添加点击事件
    categories.forEach((category, index) => {
        category.addEventListener('click', () => {
            // 移除所有类别标签和内容区域的 active 类
            categories.forEach(cat => cat.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            moreLinks.forEach(link => link.classList.remove('active-link'));

            // 为点击的标签添加 active 类
            category.classList.add('active');

            // 获取目标内容区域并显示
            const targetContentClass = category.getAttribute('data-target');
            const targetContent = document.querySelector(`.${targetContentClass}`);

            if (targetContent) {
                targetContent.classList.add('active');
            }

            // 显示对应的 "更多" 链接
            moreLinks[index].classList.add('active-link');
        });
    });
});

// 小幫手
document.addEventListener('DOMContentLoaded', function () {
    const helperBtn = document.getElementById('helperBtn');
    const helperBox = document.getElementById('helperBox');
    const helperSendButton = document.getElementById('helperSendButton');
    const helperInput = document.getElementById('helperInput');
    const helperText = document.getElementById('helperText');
    const helperWrapper = document.querySelector('.helper-wrapper');

    let isHelperBoxOpen = false; // 追蹤對話框是否已展開
    let hasDefaultMessageBeenAdded = false; // 追蹤是否已添加預設訊息
    let state = {
        step: 0,
        style: '',
        members: '',
        location: ''
    };



    helperBtn.addEventListener('click', () => {
        if (!isHelperBoxOpen) {
            helperBox.style.display = 'flex';
            helperWrapper.classList.add('expanded', 'forced-expanded'); // 保持展開狀態並加上強制展開的標記
            isHelperBoxOpen = true;

            // 如果還沒有添加預設訊息，則添加
            if (!hasDefaultMessageBeenAdded) {
                addMessage('helper', '你好！請問我可以幫你什麼？<br>可以點選以下問題或直接打字詢問');
                addDefaultQuestions(); // 添加預設問題
                hasDefaultMessageBeenAdded = true; // 標記預設訊息已添加
            }
        } else {
            helperBox.style.display = 'none';
            helperWrapper.classList.remove('forced-expanded'); // 移除強制展開的標記
            isHelperBoxOpen = false;
        }
    });

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

    function sendMessage() {
        const text = helperInput.value.trim();
        if (text !== '') {
            addMessage('user', text);
            processInput(text);
            helperInput.value = '';
        }
    };

    function addDefaultQuestions() {
        const questions = [
            { text: '1. 尋找酒吧', action: 'findBar' },
            { text: '2. 現在時間', action: 'currentTime' },
            { text: '3. 捷運末班車', action: 'lastTrain' }
        ];

        questions.forEach(question => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'chat-message helper'; // 使用現有樣式
            const bubble = document.createElement('div');
            bubble.className = 'chat-bubble';
            bubble.innerText = question.text;
            questionDiv.appendChild(bubble);
            helperText.appendChild(questionDiv);

            questionDiv.addEventListener('click', () => {
                handleDefaultQuestion(question.action);
            });
        });
    };

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
        return null; // 如果地點不匹配
    };

    function getRandomBar(location) {
        const region = getRegionFromLocation(location);
        const barList = bars[region];
        if (!barList) return '無法找到符合的酒吧';
        const randomIndex = Math.floor(Math.random() * barList.length);
        return barList[randomIndex];
    };

    function handleDefaultQuestion(action) {
        switch (action) {
            case 'findBar':
                addMessage('user', '尋找酒吧');
                state.step = 0; // 重置步驟
                processInput('尋找酒吧'); // 傳入初始文本
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
    };

    const responses = [
        {
            keywords: ['醉', '酒', '換一家', '其他家'],
            response: '請告訴我你想要的酒吧風格。<br>可選擇：英式復古、新手友善等。',
            nextStep: 1
        },
        // 其他預設的關鍵字與回應可在此添加
    ];

    function addMessage(sender, text) {
        const chatContainer = document.getElementById('chatContainer');
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'user-message' : 'helper-message';
        messageElement.innerHTML = text;
        chatContainer.appendChild(messageElement);
    };

    function processInput(text) {
        let response = '請告訴我你想要的酒吧風格。<br>可選擇：英式復古、新手友善等。';

        if (state.step === 0) {
            for (const item of responses) {
                for (const keyword of item.keywords) {
                    if (text.toLowerCase().includes(keyword.toLowerCase())) {
                        response = item.response;
                        state.step = item.nextStep;
                        break;
                    }
                }
                if (response !== '對不起，我不太明白你的問題。') {
                    break;
                }
            }
        } else if (state.step === 1) {
            if (!/[\u4e00-\u9fa5]+/.test(text)) {
                response = '請輸入中文。<br>請告訴我你想要的酒吧風格。';
            } else {
                state.style = text;
                response = '請告訴我你的人數。<br>選項：1-2、3-6、7-10、11-20。';
                state.step = 2;
            }
        } else if (state.step === 2) {
            if (!/^\d+$/.test(text)) {
                response = '請輸入數字。<br>請告訴我你的人數。<br>選項：1-2、3-6、7-10、11-20。';
            } else {
                state.members = text;
                response = '請告訴我你想要的地點。<br>選項：台北市大安區、高雄市鹽埕區等。';
                state.step = 3;
            }
        } else if (state.step === 3) {
            state.location = text;
            const recommendedBar = getRandomBar(state.location);
            response = `你想尋找的酒吧風格是: ${state.style}<br>人數是: ${state.members}<br>地點是: ${state.location} <br>以下是推薦給您的酒吧：<br>${recommendedBar} <a href="#">點此查看</a>`;
            state.step = 0; // 重置狀態
        }


        addMessage('helper', response);
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}`;
        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble';
        bubble.innerHTML = text; // 允许HTML内容
        messageDiv.appendChild(bubble);
        helperText.appendChild(messageDiv);
        helperText.scrollTop = helperText.scrollHeight; // 滾動到底部
    }
});