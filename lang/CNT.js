﻿(function() {
    function g() {};
    g.prototype.lang = [{
	"info": {
	    "lang": "繁体中文",
	    "author": "James Junzhi Wen &Jerome Waldispuhl",
	},
	"header": {
	    "field 1": "開始",
	    "field 2": "入門教程",
	    "field 3": "關於",
	    "field 4": "認證",
	    "field 5": "排名",
	    "field 6": "最新排名",
	    "field 7": "最好成績",
	    "field 8": "結果",
	    "field 9": "返回",
	    "field 10": "比較基因組的人腦-電腦框架",
	    "field 11": "手機版",
	    "field 12": "經典版",
	    "field 13": "參與貢獻，點擊這裡",
	    "field 14": "回到非移動版",
	},
	"body": {
		"play": {
			"gameselect": {
				"login": {
				    "field 1": "訪客登錄",
					"field 2": "登錄",
					"field 3": "註冊",
					"field 4": "直接登錄",
					"field 5": "退出",
					"field 6": "請登錄/註冊，這樣你能夠留下自己對科學的貢獻記錄",
					"field 7": "用戶名",
					"field 8": "密碼",
					"field 9": "郵箱（可選）",
					"field 10": "確認",
					"field 11": "挑戰朋友，分享匹配的樂趣，還有更多！",
					"field 12": "用Facebook帳戶登錄",
					"field 13": "未登錄，以訪客身份進行遊戲",
					"field 14": "歡迎 ***",
					"field 15": "您現在已經退出",
					"field 16": "未能夠登錄，錯誤的用戶名/密碼",
					"field 17": "退出",
					"field 18": "註冊",
					"field 19": "歡迎回來！我不是 ***？",
					},
			"levelselect": {
			    "header": "選擇級別. 按照難度, ID 或者相關疾病",
				"random": {
				"field 1": "選擇序列條數",
				    "field 2": "隨機",
				    "field 3": "易 – 難",
				    },
				"level id": {
				    "field 1": "輸入想玩的級別ID",
					"field 2": "級別ID",
					"field 3": "輸入級別ID",
					"field 4": "提交",
					},
				"disease": {
				    "field 1": "選擇疾病，遊戲中探索",
					"field 2": "疾病",
					"field 3": "血液與免疫系統",
					"field 4": "骨骼與皮膚",
					"field 5": "腦與神經系統",
					"field 6": "癌症",
					"field 7": "消化系統",
					"field 8": "心血管系統",
					"field 9": "代謝障礙",
					"field 10": "肌肉",
					"field 11": "生殖系統",
					"field 12": "呼吸系統",
					"field 13": "知覺系統",
					},
				    },
			"short tutorial": {
			    "field 1": "水準移動方磚。讓上下的兩個方塊顏色保持一致，並減少插空",
				"field 2": "繼續",
				"field 3": "點這裡，看看你的表現。紅色分數意味你能夠提高分支",
				"field 4": "看這裡有標杆分數。它是你過關的最低分。點閃爍的行行行，開始吧",
				"field 5": "準備好了",
				"field 6": "強烈推薦把教程閱讀完，請點擊這裡",
				},
			"video tutorial": {
			    "field 1": "Phylo入門",
				},
			"game board": {
			    "field 1": "分數",
				"field 2": "標杆",
				"field 3": "階段",
				"field 4": "最高分",
				"field 5": "級別",
				"field 6": "難度",
				"field 7": "音樂：開 – 關 – 靜音",
				"field 8": "統計",
				"field 9": "匹配數",
				"field 10": "錯配數",
				"field 11": "插空",
				"field 12": "插空長度",
				"field 13": "當前分數",
				},
			"end of game": {
			    "field 1": "謝謝您",
				"field 2": "我們感謝您對科學的貢獻。您知道下面的資料嗎",
				"field 3": "恭喜你！你已經通關了，我們正提交你的成果",
				"field 4": "很不幸，超時了。你的成果不能提交了",
				"field 5": "你已經達到了級別 ***。記住這個ID以便下次繼續遊戲！你的DNA遊戲已經涉及：",
				"field 6": "這個級別完成者有***人次，失敗者有***人次。",
				"field 7": "這個級別的最高分是***",
				"field 8": "這個級別的平均分數是***",
				"field 9": "***創造了這個級別的最高分",
				"field 10": "至今 *** 位玩家已經為***次不同級別，提交了***比對結果",
				"field 11": "新遊戲",
				"field 12": "重新玩",
				"field 13": "分享到Facebook",
				"field 14": "挑戰朋友",
				"field 15": "目錄",
				"field 16": "再次點擊星星，提交你的分數吧，當然，你也可以繼續完善，衝擊更高的分數",
				},
			    },
		"tutorial": {
		    "field 1": "在Phylo中，你的目標是水準移動方磚，讓方磚的顏色在垂直方向上儘量的相似。每一個匹配將帶來加分。",
			"field 2": "然而，序列並不相同。因此，顏色錯配/插空不可避免，它們會帶來一些罰分。",
			"field 3": "你的挑戰是找到最低代價的方案，在加分與罰分中取得平衡。",
			"field 4": "加分與罰分相對插空而言是次要的！而零散的插空比連續的罰分更多。優先減少插空的數量吧",
			"field 5": "你注意到左邊的樹了嗎？它告訴你需要序列解決的次序。它能讓你循序漸漸。獲得相同組內保守的模式比增加不同組間的相似性更重要。",
			"field 6": "為了到達最後的挑戰，你需要過關斬將。這需要衝擊標杆（電腦的分數）。當你的分數達到/超過標杆時，一顆閃閃的星星將在右下角出現。點擊它吧，你過關了。",
			"field 7": "當所有的序列都出現的時候，嘗試獲得更高的分數，點擊星星，將提交你的成果。",
			"field 8": "匹配",
			"field 9": "錯配",
			"field 10": "插空",
			"field 11": "進化樹",
			},
		"about": {
		    "field 1":"什麼是Phylo？",
			"field 2":"它看上去只是一款遊戲，但玩它你也能夠解決真正的科學難題：多序列比對。",
			"field 3": "什麼是多序列比對？",
			"field 4": "序列比對是排列DNA/RNA/蛋白質，從而發現相似性。而相似性將與其功能、結構與進化關係息息相關。從比對結果中，生物學家可能推理出進化祖先、鑒定出重要的功能性位點並且發現突變。更重要的是，為解決遺傳疾病的提供了靈感。",
			"field 5": "而問題是",
			"field 6": "傳統的多序列比對方法使用電腦複雜啟發演算法來解決。不幸的是，啟發式演算法並不能保證其結果是全域最優的。而生命世界的基因組是龐大的，大大的超越了電腦的解決能力。",
			"field 7": "而我們的方法是",
			"field 8": "我們人類有著卓越的模式識別能力，能高效的處理視覺問題。我們把序列資訊抽象為不同顏色的方磚，用遊戲的形式來解決。站在電腦結果的基礎上，讓玩家獲得更好的成果。",
			"field 9": "我們的資料",
			"field 10": "所有電腦比對結果來自于UCSC基因組流覽器。事實上，所有序列比對包含了與人類息息相關的遺傳疾病難題，如乳腺癌等。我們期待這款遊戲能獲取更優的答案。",
			"field 11": "想要更多的資訊，點這裡",
			},
		"credit": {
		    "field 1": "專案領導者（媒體與科學連絡人）",
		    "field 2": "開發團隊",
		    "field 3": "原始參與者",
		    "field 4": "支持者",
		    "field 5": "跟隨我們",
		    "field 6": "音樂",
		    "field 7": "非常感謝",
		    "field 8": "科學顧問",
		    "field 9": "翻譯",
		},
		"ranking": {
		    "field 1": "2011年度Phylo排名",
			"field 2": "排名，用戶名，分數",
			"field 3": "總體排名",
			"field 4": "2011年貢獻者",
			"field 5": "第一貢獻者",
			"field 6": "按疾病分類的排名",
			"field 7": "血液與免疫系統",
			"field 8": "骨骼與皮膚",
			"field 9": "腦與神經系統",
			"field 10": "癌症",
			"field 11": "消化系統",
			"field 12": "心血管系統",
			"field 13": "代謝障礙",
			"field 14": "肌肉",
			"field 15": "生殖系統",
			"field 16": "呼吸系統",
			"field 17": "直覺系統",
			"field 18": "信息",
			"field 19": "疾病分類法",
			"field 20": "疾病分類法採用Phylo在2011年11月29日的方案",
			"field 21": "注意，分類方法容易受到變化的影響。",
			"field 22": "得分系統",
			"field 23": "得分系統的描述",
			"field 24": "註冊玩家的得分基於完善DNA比對難題的數量",
			"field 25": "我們重新加入了44個生物物種的多序列比對結果。玩家每創建一個問題的更優解決方案將獲得一分。當然，重複的會被去除，我們有以下幾種排名：",
			"field 26": "總體排名：所有的難題都會被考慮。玩家將按總分排序。",
			"field 27": "第一貢獻排名：問題的第一位解決者加一分，其他的人不計分",
			"field 28": "疾病分類排名：解決與疾病相關的問題算入本項分數。相關疾病清單請參與疾病分類。",
			},
		"live ranking": {
		    "field 1": "Phylo的即時排名",
			"field 2": "即時排名",
			"field 3": "每月排名",
			"field 4": "每週排名",
			"field 5": "已完成級別數",		
			},
		"results": {
		    "field 1": "2011年的結果",
			"field 2": "結果打包下載於",
			},
		"challenge": {
		    "field 1": "挑戰",
			"field 2": "挑戰開啟",
			"field 3": "輸入好友的名字，或者隨機挑戰",
			"field 4": "現在開始",
			},
		    },
	"footer": {
	    "field 1": "Phylo是一個挑戰科學難題的Flash遊戲，遊戲中的每個難關與人類疾病密切相關。瞭解更多",
		"field 2": "加入Phylo的Facebook社區，給我們豎一個大拇指吧。",
		},
	    },
	}];

    var proto = g.prototype,
            attr = [
                    ["lang",proto.lang],
                    ];
    common.exportSingleton("CNTscript",g,proto);
})();