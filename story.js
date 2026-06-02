const story = {

DAY1_HOME: {
    background: "背景/1.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    name:"DAY-1",
    text: [
        "我叫赵哥,今年25岁。",
        "之前干过好几份工作。",
        "但无一例外，全部被裁员了。",
        "距离上一次失业已经过去四个月。",
        "说实话，我已经快记不清上班是什么感觉了。",
        "今天早上，我像往常一样刷着招聘软件。",
        "忽然，一条招聘信息吸引了我的注意。",
        "公司名称陌生。",
        "薪资高得离谱，招人条件也没那么严苛。",
        "翻着翻着，我看到了其中一条要求。",
        "年龄18至35岁。",
        "我盯着屏幕沉默了几秒。",
        "这玩意不会是诈骗吧？",
        "但很快，我又叹了口气。",
        "我现在还有什么被骗的价值吗？",
        "抱着试试看的心态，我投出了简历。"
    ],
    choices: [
        { text: "进入第二天", next: "DAY2_BUILDING" }
    ]
},

DAY2_BUILDING: {
    background: "背景/2.png",
     characters: {left:"立绘/ZG震惊.png",
                      right:""},
    name:"DAY-2",
    text: [
        "第二天。",
        "我按照地址来到面试地点。",
        "刚下车，我就愣住了。",
        "一栋高耸入云的大厦出现在眼前。",
        "我抬头看了半天。",
        "愣是没看到顶。",
        "“我们市什么时候有这么高的楼了？”",
        "“怎么看着和周围格格不入。”",
        "“可能是我太久没出门了？”",
        "“等等。”",
        "“卧槽！”",
        "“我还发什么呆啊!” ",
        "”要迟到了！“"
    ],
    choices: [
        { text: "进入大楼", next: "DAY2_HALL" }
    ]
},

DAY2_HALL: {
    background: "背景/ON.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
     name:"DAY-2",
    text: [
        "冲进大楼后。",
        "大厅里已经站满了人。",
        "乌泱泱一大片。",
        "看得我头皮发麻。",
        "果然。",
        "找工作这种事情。",
        "竞争永远激烈。",
        "就在这时。",
        "一道洪亮的声音响彻大厅。",
        "“安静！”",
        "“人都到齐了吧？”",
        "“接下来请大家配合，下载本公司自主研发的这款软件，后续经过其他“考验”再来考虑是否适合本岗位”",
        "“工作人员会将二维码发到各位手中。”",
        "“完成后再进行下一步。”"
    ],
    choices: [
        { text: "打开手机", next: "DAY2_QRCODE" }
    ]
},

DAY2_QRCODE: {
    background: "背景/ON.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:"none"},
      name:"DAY-2",
    text: [
        "工作人员开始发放二维码。",
        "我低头看着手里的方形小卡片。",
        "心里顿时冒出一个念头。",
        "“我去。”",
        "“真是诈骗啊？”",
        "“刚来就让人下载东西？”"
    ],
    choices: [
        { text: "老老实实下载", next: "DAY2_DOWNLOAD" },
        { text: "我就不下", next: "DAY2_REFUSE" }
    ]
},

DAY2_DOWNLOAD: {
    background: "背景/ON.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
      name:"DAY-2",
    text: [
        "“算了。”",
        "”来都来了。“",
        "“总不至于把我卖到缅北吧。”",
        "我掏出手机扫了二维码。",
        "软件安装成功。",
        "名称：The Seventh Day。"
    ],
    choices: [
        { text: "进行下一步", next: "DAY3_A1" }
    ]
},

DAY2_REFUSE: {
    background: "背景/ON.jpg",
    characters: {left:"立绘/ZG生气.png",
                      right:""},
  name:"DAY-2",
    text: [
        "我默默收起手机。",
        "”呵。“",
        "”我不下能怎么样？“",
        "“难不成还能一个个检查？”",
        "安保人员开始在过道查看",
        "......",
        "”搞毛啊？“",
        "”我这个月流量没剩多少了......“",
        "眼看着安保人员过来",
        "......",
        "我默默掏出了手机。"
    ],
    choices: [
        { text: "安装软件", next: "DAY3_A1" }
    ]
},

DAY3_A1:{
    background:"背景/ON.jpg",
    character:"",
     name:"DAY-3",
    text:[
       "“很好，看来大家已经都安装完成，那么我们进入下一个环节，请大家打开刚才安装的软件。”",
       "“我到底是来面试的还是来这给他们刷下载量的?”",
       "“好的,大家将自己设备与软件绑定,我们会给大家安排接下来的面试环节！”"
      ],
     choices:[
            {text:"与手机绑定",next:"DAY3_B1"},
            {text:"离开这里",next:"DAY3_B2"}
      ]
   },

 DAY3_B1:{
       background:"背景/ON.jpg",
      characters: {left:"立绘/ZG正常.png",
                      right:""},
name:"DAY-2",
        text:[
            "“大家进行下一步吧。”与此同时，走来了一位眼镜男",
             "“你跟我来吧”",
             "“嚯！真高级啊，面试还是一对一的”",
           ],
    choices:[
             {text:"进入房间",next:"DAY3_C1"}
          ]
      },
        DAY3_C1:{
           background:"背景/ON2.jpg",
            characters: {left:"立绘/ZG害怕.png",
                      right:""},
             text:[
                "“这里怎么这么黑？”",
                "“等等.......这不会真是缅北诈骗吧？！”",
                "我下意识朝门口方向摸索。",
               "可刚走两步，身后突然传来某种声音，“咔”，眼前瞬间陷入黑暗。",
         ],
      choices:[
           {text:"被迫进入第三天",next:"DAY3_START"}
         ]
     },
   DAY3_B2:{
          background:"背景/ON.jpg",
          characters: {left:"立绘/ZG正常.png",
                      right:""},
            text:[
              "“先生，我看您很有潜力，我相信您能够胜任我们公司的岗位，您确定要走吗？”：某个声音",
              "“要不试一下？毕竟都到这一步了。”长时间的失业也让我积蓄所剩无几......",
              "“如果您想好了就请跟我来，当然，我们并不强制您留下来，完全尊重您的选择。”",
              "我没得选。",
            ],
     choices:[
                {text:"跟他走",next:"DAY3_C1"}
           ]
        },

DAY3_START: {
    background: "背景/3.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    name:"DAY-3",
    text: [
        "刺眼的阳光让我缓缓睁开双眼。",
        "......",
        "”这里是哪？“",
        "我猛地从地上坐起。",
        "眼前是一片陌生的荒野。",
        "枯黄的杂草被风吹得沙沙作响。",
        "天空呈现出诡异的灰红色。",
        "而在极远处。",
        "一棵巨大到夸张的黑色巨树直插云层。",
        "我盯着那棵树看了好几秒。",
        "”卧槽，这特么是哪？刚才不是在面试吗？“",
        "”话说你这转场也太断层了吧？拍电影呢？“",
        "就在这时，手机忽然震动。",
        "剩余人数：66",
        "当前目标：活下去"
    ],
    choices: [
        { text: "看一下 流量是不是用超了", next: "DAY3_PHONE" },
        { text: "观察周围", next: "DAY3_LOOK" },
        { text: "这树怕不是成精了，过去拍个照", next: "DAY3_TREE" },
    ]
},

DAY3_PHONE: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG震惊.png",
                      right:""},
    text: [
        "我点开手机界面。",
        "手机显示完全变了并且出现了一个人数显示的手机部件，除了人数显示外，还有一个不断跳动的倒计时。",
        "以及一个从未见过的地图。",
        "怎么看都不像恶作剧。",
        "我开始有点慌了。"
    ],
    choices: [
        { text: "四周看看", next: "DAY3_BODY" }
    ]
},

DAY3_LOOK: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    text: [
        "我仔细观察四周。",
        "附近还有不少刚醒来的人。",
        "他们和我一样满脸茫然。",
        "但很快，远处突然传来尖叫声。"
    ],
    choices: [
        { text: "跑过去看看", next: "DAY3_BODY" }
    ]
},

DAY3_TREE: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    text: [
        "我朝巨树方向走去。",
        "没过多久，前方忽然传来骚动。"
    ],
    choices: [
        { text: "查看情况", next: "DAY3_BODY" }
    ]
},

DAY3_BODY: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG震惊.png",
                      right:""},
    text: [
        "越来越多的人聚集在一起，我挤进人群。",
        "随后愣在原地，地上躺着一个男人。",
        "双眼圆睁，已经失去了呼吸。",
        "......",
        "”死人了，真的死人了。“",
        "这一瞬间，所有人都意识到，这不是玩笑。"
    ],
    choices: [
        { text: "检查尸体", next: "DAY3_CHECK" },
        { text: "询问周围的人", next: "DAY3_ASK" },
        { text: "撒腿就跑", next: "DAY3_BACK" },
    ]
},

DAY3_CHECK: {
    background: "背景/4.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},
    text: [
        "我强忍恶心蹲下，男人脖子上有一道诡异伤口。",
        "不像刀伤，更像被什么东西咬穿。",
        "就在这时，远处树林传来低沉嘶吼。"
    ],
    choices: [
        { text: "继续", next: "DAY3_END" }
    ]
},

DAY3_ASK: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    text: [
        "没人知道发生了什么。",
        "有人说看见黑影。",
        "有人说是怪物。",
        "还有人说这是节目效果。",
        "但地上的尸体不会骗人。"
    ],
    choices: [
        { text: "保持冷静", next: "DAY3_END" }
    ]
},

DAY3_BACK: {
    background: "背景/4.jpg",
    characters: {left:"立绘/ZG害怕.png",
                      right:""},

    text: [
        "腿已经软了，不过我还是下意识后退两步，胃里一阵翻腾。",
        "我长这么大，第一次亲眼看见尸体，而且离我这么近。"
    ],
    choices: [
        { text: "嗡，嗡，嗡", next: "DAY3_END" }
    ]
},

DAY3_END: {
    background: "背景/4.jpg",
   characters: {left:"立绘/ZG震惊.png",
                      right:""},

    text: [
        "就在所有人惊恐的时候，手机再次震动。",
        "剩余人数：65",
        "......",
        "第一位参与者已死亡。",
        "游戏正式开始。"
    ],
    choices: [
        { text: "继续", next: "DAY4_START" }
    ]
},

DAY4_START: {
    background: "背景/6.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "第一位参与者死亡后，人群彻底陷入混乱。",
        "有人崩溃大哭，有人疯狂拨打报警电话。",
        "当然。",
        "一个都打不通。",
        "我看着手机信号栏。",
        "那里只剩一个奇怪的图标。",
        "仿佛整个世界都与外界断开了联系。"
    ],
    choices: [
        { text: "继续", next: "DAY4_LINYU" }
    ]
},

DAY4_LINYU: {
    background: "背景/6.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "就在这时。",
        "不远处传来一个女孩的声音。",
        "”有人受伤了！“",
        "我顺着声音望去。",
        "一个短发女孩正蹲在地上。",
        "努力给伤者包扎。",
        "她的动作有些生疏。",
        "但依然没有放弃。",
        "我不由得多看了她几眼。"
    ],
    choices: [
        { text: "过去帮忙", next: "DAY4_HELP" },
        { text: "远远观察", next: "DAY4_WATCH" }
    ]
},

DAY4_HELP: {
    background: "背景/5.jpg",
    characters: {left:"立绘/ZG尴尬.png",
                      right:""},

    text: [
        "我走了过去开始帮起忙来。",
        "女孩抬起头。",
        "”谢谢。“",
        "”不过我其实也不会急救。“",
        "......",
        "”巧了。“",
        "”我也不会。“",
        "空气突然安静。"
    ],
    choices: [
        { text: "继续", next: "DAY4_GROUP" }
    ]
},

DAY4_WATCH: {
    background: "背景/6.jpg",
     characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我站在远处观察。",
        "说实话。",
        "这种时候还敢主动帮助别人的人。",
        "不多。",
        "至少她看起来不像坏人。",
        "算了,还是过去帮帮忙吧。"
    ],
    choices: [
        { text: "继续", next: "DAY4_GROUP" }
    ]
},

DAY4_GROUP: {
    background: "背景/5.jpg",
    characters: {left:"立绘/ZG尴尬.png",
                      right:""},

    text: [
        "女孩站起身。",
        "”我叫林雨。“",
        "大学刚毕业。",
        "没想到会遇到这种事情。",
        "我点了点头。",
        "”我叫赵哥。“",
        "”失业人士。“",
        "她愣了一下。",
        "然后忍不住笑了。"
    ],
    choices: [
        { text: "继续", next: "DAY4_CHENMO" }
    ]
},

DAY4_CHENMO: {
    background: "背景/5.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "就在这时。",
        "一道沉稳的声音传来。",
        "各位。",
        "继续留在这里没有意义。",
        "说话的是一个戴眼镜的男人。",
        "看起来三十岁左右。",
        "神情异常冷静。",
        "我叫陈默。",
        "如果想活下去。",
        "我们应该先寻找庇护所。"
    ],
    choices: [
        { text: "有道理", next: "DAY4_STATION" },
        { text: "真能装", next: "DAY4_STATION" }
    ]
},

DAY4_STATION: {
    background: "背景/7.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "最终。",
        "幸存者们组成队伍开始移动。",
        "几个小时后。",
        "远处出现一座废弃车站。",
        "手机忽然震动。",
        "发现区域：废弃车站。",
        "安全区已开放。"
    ],
    choices: [
        { text: "进入车站", next: "DAY5_START" }
    ]
},

DAY5_START: {
    background: "背景/9.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "夜幕降临。",
        "废弃车站暂时成为了众人的避难所。",
        "有人靠着墙休息。",
        "有人不停哭泣。",
        "还有人在讨论离开的办法。",
        "但所有人都知道。",
        "这里没有出口。"
    ],
    choices: [
        { text: "进入第四天 ", next: "DAY5_NOISE" }
    ]
},

DAY5_NOISE: {
    background: "背景/9.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},
 name:"DAY-4",
    text: [
        "凌晨。",
        "一阵奇怪的声音将我惊醒。",
        "嘎吱——",
        "嘎吱——",
        "像是什么东西正在外面爬行。",
        "我睁开双眼。",
        "发现陈默已经站了起来。"
    ],
    choices: [
        { text: "询问陈默", next: "DAY5_MONSTER" }
    ]
},

DAY5_MONSTER: {
    background: "背景/9.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "陈默脸色很难看。",
        "有东西来了。",
        "话音刚落。",
        "车站外突然传来惨叫。",
        "啊啊啊啊——",
        "所有人瞬间惊醒。",
        "一个浑身扭曲的人形怪物冲进了车站。"
    ],
    choices: [
        { text: "向外看去", next: "DAY5_END" }
    ]
},

DAY5_END: {
    background: "背景/9.jpg",
     characters: {left:"立绘/ZG震惊.png",
                      right:""},

    text: [
        "那是一种我形容不出来的恐怖，让我san值狂掉",
        "“卧槽!”",
        "“搞什么啊！？”",
        "“生化危机吗？！”"
    ],
    choices: [
        { text: "继续", next: "DAY6_START" }
    ]
},

DAY6_START: {
    background: "背景/9.jpg",
    characters: {left:"立绘/ZG震惊.png",
                      right:""},

    text: [
        "怪物的嘶吼声越来越近。",
        "整个车站彻底乱成一团。",
        "有人哭喊。",
        "有人逃跑。",
        "还有人被扑倒在地。",
        "鲜血溅满墙壁。",
        "......",
        "我脑子里只剩下一个念头：跑！"
    ],
    choices: [
        { text: "冲向车站深处", next: "DAY6_ESCAPE" }
    ]
},

DAY6_ESCAPE: {
    background: "背景/10.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},
    text: [
        "我拼命冲向车站深处，林雨紧跟在我身后。",
        "陈默也跑了过来，我们三人躲进一间仓库。",
        "砰！铁门被重重关上，外面的嘶吼声逐渐远去。",
        "整个仓库只剩下急促的喘息声。"
    ],
    choices: [
        { text: "查看手机", next: "DAY6_RULE" }
    ]
},

DAY6_RULE: {
    background: "背景/10.jpg",
   characters: {left:"立绘/ZG震惊.png",
                      right:""},

    text: [
        "就在这时，所有人的手机同时震动。",
        "屏幕亮起：The Seventh Day",
        "规则一：活下去。",
        "规则二：死亡即真实死亡。",
        "规则三：游戏结束时，仅允许存在最终胜利者。"
    ],
    choices: [
        { text: "确认", next: "DAY6_REACTION" }
    ]
},

DAY6_REACTION: {
    background: "背景/10.jpg",
    characters: {left:"立绘/ZG震惊.png",
                      right:""},

    text: [
        "我盯着屏幕，大脑一片空白。",
        "谁家游戏死亡是真死啊？这玩意合法吗？",
        "林雨说：\"不可能，这一定是在开玩笑……\"",
        "陈默冷静地说道：\"如果规则是真的，那么最终只能活下来一个人。\""
    ],
    choices: [
        { text: "继续", next: "DAY6_NUMBER" }
    ]
},

DAY6_NUMBER: {
    background: "背景/10.jpg",
    characters: {left:"立绘/ZG害怕.png",
                      right:""},

    text: [
        "手机数字开始变化：",
        "66 → 65 → 64 → 63 → 62",
        "我盯着屏幕，心里发凉。"
    ],
    choices: [
        { text: "继续", next: "DAY6_CHOICE1" }
    ]
},

DAY6_CHOICE1: {
    background: "背景/10.jpg",
   characters: {left:"立绘/ZG害怕.png",
                      right:""},

    text: [
        "面对这条残酷规则，我该怎么办？"
    ],
    choices: [
        { text: "相信系统", next: "DAY6_LINYU" },
        { text: "这是恶作剧", next: "DAY6_LINYU" },
        { text: "开一把王者荣耀", next: "DAY6_KING" }
    ]
},

DAY6_KING: {
    background: "背景/11.jpg",
    characters: {left:"立绘/ZG生气.png",
                      right:""},

    text: [
        "我掏出手机，打开王者荣耀。",
        "连接中……连接失败……连接失败……连接失败……",
        "我心里吐槽：这个时候开个毛的王者荣耀啊！而且这里根本没信号！",
    ],
    choices: [
        { text: "相信系统", next: "DAY6_LINYU" },
        { text: "这是恶作剧", next: "DAY6_LINYU" }
    ]
},

DAY6_LINYU: {
    background: "背景/11.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "林雨看向我，脸色苍白：\"那些人……真的死了吗？\""
    ],
    choices: [
        { text: "安慰她", next: "DAY6_END" },
        { text: "保持沉默", next: "DAY6_END" }
    ]
},

DAY6_END: {
    background: "背景/11.jpg",
    characters: {left:"立绘/ZG震惊.png",
                      right:""},
    text: [
        "突然，仓库外传来声音：",
        "咚。咚。咚。",
        "一个男人疯狂拍门：\"救命！求求你们开门！让我进去！\"",
        "仓库内一片死寂，因为没人知道门外到底是人，还是怪物。"
    ],
    choices: [
        { text: "开门", next: "DAY7_OPEN" },
        { text: "不开门", next: "DAY7_CLOSE" }
    ]
},

DAY7_OPEN: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"我咬了咬牙。",
"最终还是拉开了仓库铁门。",
"一个中年男人跌跌撞撞冲了进来。",
"他满头大汗。",
"脸色苍白。",
"身上的衣服已经被划破。",
"砰！",
"铁门再次被关上。",
"男人瘫坐在地。",
"大口喘着粗气。",
"谢谢......谢谢你们。",
"我叫高建国。",
"大家都叫我老高。"
],
choices: [
{ text: "继续", next: "DAY7_SAFE" }
]
},

DAY7_CLOSE: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"我没有开门。",
"仓库内安静得可怕。",
"拍门声持续了很久。",
"求求你们......",
"让我进去......",
"声音越来越弱。",
"最终彻底消失。",
"林雨低下头。",
"我们是不是做错了？",
"我沉默着。",
"根本不知道该怎么回答。"
],
choices: [
{ text: "继续", next: "DAY7_VENT" }
]
},

DAY7_VENT: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG震惊.png",
                      right:""},

text: [
"突然。",
"仓库后方传来一声巨响。",
"咣当！",
"一个男人从通风管道里摔了下来。",
"卧槽！",
"我差点跳起来。",
"男人捂着腰站起身。",
"前门不给进。",
"后门总能进吧？",
"他苦笑了一声。",
"我叫高建国。",
"大家都叫我老高。"
],
choices: [
{ text: "继续", next: "DAY7_SAFE" }
]
},

DAY7_SAFE: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"仓库外依旧不断传来撞击声。",
"所有人都不敢说话。",
"时间一分一秒过去。",
"半个小时后。",
"外面终于彻底安静下来。",
"我长长松了口气。",
"看来今晚暂时安全了。",
"看看仓库有什么可以用到的东西吧。"
],
choices: [
{ text: "查看仓库", next: "DAY7_MATERIAL" }
]
},

DAY7_MATERIAL: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"趁着安全。",
"我们开始搜索仓库。",
"很快找到了一些物资。",
"矿泉水 ×2",
"压缩饼干 ×3",
"医疗包 ×1",
"这些东西该怎么分配？"
],
choices: [
{ text: "分给林雨一半", next: "DAY7_CHAT" },
{ text: "分给老高一半", next: "DAY7_CHAT" },
{ text: "分给陈默一半", next: "DAY7_CHAT" },
{ text: "自己保管", next: "DAY7_CHAT" },
]
},

DAY7_CHAT: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"( 其实想在这里设定类似信任度的东西，但是这些内容都够我喝一壶了)",
"夜色逐渐降临。",
"大家围坐在仓库角落。",
"谁都没有睡意。",
"气氛有些压抑。"
],
choices: [
{ text: "和林雨聊天", next: "DAY7_LINYU" },
{ text: "和老高聊天", next: "DAY7_OLDGAO" },
{ text: "和陈默聊天", next: "DAY7_CHENMO" },
{ text: "询问大家为什么会来这里", next: "DAY7_GROUPCHAT" },
{ text: "直接休息", next: "DAY7_NIGHT" },
]
},

DAY7_LINYU: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"林雨抱着膝盖坐在角落。",
"大学刚毕业。",
"准备找一份好工作。",
"谁不想刚出社会就站稳脚呢。",
"结果工作还没找到。",
"人先掉进这种鬼地方了。",
"说完。",
"她苦笑了一下。"
],
choices: [
{ text: "继续", next: "DAY7_NIGHT" }
]
},

DAY7_OLDGAO: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"老高靠在墙边。",
"孩子生病了。",
"以前工资还能撑住。",
"现在已经完全不够用了。",
"所以看到高薪招聘。",
"我就来了。",
"没想到来了这种地方。"
],
choices: [
{ text: "继续", next: "DAY7_NIGHT" }
]
},

DAY7_CHENMO: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"陈默低头看着手机。",
"我忍不住问道。",
"你以前是干什么的？",
"陈默沉默片刻。",
"管理岗。",
"仅此而已。",
"说完便不再开口。",
"总感觉他隐瞒了什么。"
],
choices: [
{ text: "继续", next: "DAY7_NIGHT" }
]
},

DAY7_GROUPCHAT: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"不知道是谁先开的头。",
"大家开始聊起自己的经历。",
"林雨刚毕业。",
"老高为了给孩子治病。",
"陈默则说自己是公司管理层。",
"而我。",
"只是一个连续失业四个月的倒霉蛋。",
"气氛居然轻松了一点。"
],
choices: [
{ text: "继续", next: "DAY7_NIGHT" }
]
},

DAY7_NIGHT: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"深夜。",
"大家陆续睡去。",
"可我却毫无睡意。",
"总觉得哪里不太对劲。"
],
choices: [
{ text: "观察林雨", next: "DAY7_OB_LINYU" },
{ text: "观察老高", next: "DAY7_OB_OLDGAO" },
{ text: "观察陈默", next: "DAY7_OB_CHENMO" },
{ text: "强迫自己睡觉", next: "DAY7_LIVE" },
]
},

DAY7_OB_LINYU: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"我看向林雨。",
"发现她背对着众人。",
"肩膀微微颤抖。",
"她在偷偷哭。",
"但没有发出任何声音。"
],
choices: [
{ text: "继续", next: "DAY7_LIVE" }
]
},

DAY7_OB_OLDGAO: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"老高没有睡。",
"他正看着手机相册。",
"屏幕里是一个小女孩。",
"应该是他的女儿。",
"他的眼神很复杂。"
],
choices: [
{ text: "继续", next: "DAY7_LIVE" }
]
},

DAY7_OB_CHENMO: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"陈默正盯着手机。",
"似乎在分析什么。",
"那种表情。",
"不像第一次经历这种事情。",
"让我心里有些发毛。"
],
choices: [
{ text: "睡觉", next: "DAY7_LIVE" }
]
},

DAY7_LIVE: {
background: "背景/11.jpg",
characters: {left:"立绘/ZG正常.png",
                      right:""},

text: [
"之前经历的一幕幕在我脑中回响",
"让我一直处于一种半梦半醒的状态",
],
choices: [
{ text: "第五天白天", next: "DAY8_START" }
]
},

DAY8_START: {
    background: "背景/12.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "清晨的阳光透过仓库的缝隙射进来。",
        "昨夜的紧张气氛依然在空气中回荡。",
        "我揉了揉眼睛，感到浑身酸痛。",
        "林雨、老高和陈默都还在睡觉，但神情紧绷，仿佛随时会被惊醒。"
    ],
    choices: [
        { text: "叫醒大家", next: "DAY8_WAKE" },
        { text: "继续观察周围", next: "DAY8_OBSERVE" }
    ]
},

DAY8_WAKE: {
    background: "背景/12.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我轻轻拍了拍林雨和老高。",
        "大家慢慢醒来，眼神中充满戒备。",
        "陈默看向我，眉头微微皱起。",
        "我说道：\"我们得找食物和水，不能一直待在仓库里。\""
    ],
    choices: [
        { text: "讨论行动计划", next: "DAY8_PLAN" }
    ]
},

DAY8_SCOUT: {
    background: "背景/12.jpg",
    character: "",
    text: [
        "我悄悄推开仓库的门。",
        "外面静悄悄的，地上满是昨夜的泥土印记。",
        "远处有一些废弃车辆，可以当掩体。",
        "空气中弥漫着焦糊和血腥味，让人作呕。"
    ],
    choices: [
        { text: "回去叫大家", next: "DAY8_WAKE" },
        { text: "单独侦查附近", next: "DAY8_ALONE" }
    ]
},

DAY8_OBSERVE: {
    background: "背景/12.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我静静观察大家的动作。",
        "林雨在整理自己的衣物，看起来很紧张。",
        "老高则在检查装备，神情严肃。",
        "陈默依然盯着手机，眉头紧锁。",
        "我意识到，每个人都在试图找到生存的策略。"
    ],
    choices: [
        { text: "主动加入讨论", next: "DAY8_PLAN" }
    ]
},

DAY8_ALONE: {
    background: "背景/12.jpg",
    character: "",
    text: [
        "我沿着车站外围小心前行，",
        "发现一些零散的食物和水，但数量很少。",
        "突然，远处传来轻微的脚步声。",
        "我屏住呼吸，想看清来者。"
    ],
    choices: [
        { text: "躲起来观察", next: "DAY8_HIDE" },
        { text: "上前询问", next: "DAY8_CONFRONT" }
    ]
},

DAY8_HIDE: {
    background: "背景/12.jpg",
    character: "",
    text: [
        "我趴在一辆废弃车辆后面。",
        "一个中年男子缓缓走过，眼神中充满恐惧。",
        "他似乎在寻找食物和水。",
        "我暗自松了一口气，决定不打扰他。"
    ],
    choices: [
        { text: "回去叫大家", next: "DAY8_WAKE" }
    ]
},

DAY8_CONFRONT: {
    background: "",
    character: "",
    text: [
        "我小心上前。",
        "男子一看到我，整个人都僵住。",
        "\"别……别靠近！\"他颤声说道。",
        "我尽量露出友善表情，缓和气氛。",
        "经过短暂对话，他决定和我们汇合。"
    ],
    choices: [
        { text: "带他回仓库", next: "DAY8_WAKE" }
    ]
},

DAY8_PLAN: {
    background: "背景/12.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "大家围坐在仓库内，开始讨论接下来的行动计划。",
        "林雨建议：\"我们需要找安全区和食物。\"",
        "老高补充：\"还有水和医疗包，不能掉以轻心。\"",
        "陈默看着地图，指着远处一处建筑说：\"那边可能比较安全，我们可以先去那儿。\""
    ],
    choices: [
        { text: "同意出发", next: "DAY8_MOVE" }
    ]
},

DAY8_MOVE: {
    background: "背景/12.jpg",
    characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我们收拾好简单的物资。",
        "大家小心翼翼地走出仓库。",
        "远处建筑物阴影中，似乎有移动的身影。",
        "我警觉地提醒大家保持安静。"
    ],
    choices: [
        { text: "慢慢靠近建筑", next: "DAY8_APPROACH" },
        { text: "绕道前行", next: "DAY8_ALTERNATE" }
    ]
},

DAY8_APPROACH: {
    background: "背景/12.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},
  
    text: [
        "我们小心靠近建筑。",
        "林雨不小心踩到一块碎石，发出轻响。",
        "老高立刻压低声音：\"小心！\"",
        "空气紧张得令人窒息，每一步都可能带来危险。"
    ],
    choices: [
        { text: "继续前行", next: "DAY9_START" }
    ]
},

DAY8_ALTERNATE: {
    background: "背景/12.jpg",
 characters: {left:"立绘/ZG正常.png",
                      right:""},
  
    text: [
        "我们选择绕道前行，避开建筑的正面。",
        "途中发现一些废弃食物和水源。",
        "这让大家稍微松了口气，但仍然紧张异常。",
        "看来，安全并不意味着没有危险。"
    ],
    choices: [
        { text: "继续前行", next: "DAY9_START" }
    ]
},

DAY9_START: {
    background: "背景/13.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我们抵达了陈默发现的废弃超市。",
        "里面摆放着凌乱的货架，还有一些幸存者在巡逻。",
        "看起来，他们是这里的‘主人’。",
        "一个壮汉走了过来，他的目光锐利，像在衡量我们。"
    ],
    choices: [
        { text: "主动打招呼", next: "DAY9_FRIENDLY" },
        { text: "保持警惕", next: "DAY9_ALERT" },
        { text: "观察环境", next: "DAY9_OBSERVE" }
    ]
},

DAY9_FRIENDLY: {
    background: "背景/13.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我走上前，举手示意：\"我们没有恶意，只是找些物资。\"",
        "壮汉皱了皱眉，沉默了一会儿，随后点头。",
        "看来态度稍微缓和了一些。"
    ],
    choices: [
        { text: "继续探索超市", next: "DAY9_MATERIAL" }
    ]
},

DAY9_ALERT: {
    background: "背景/13.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我们保持警惕，缓缓进入超市。",
        "周围幸存者的目光都落在我们身上，气氛紧张。",
        "一旦出手，情况可能会升级。"
    ],
    choices: [
        { text: "继续探索超市", next: "DAY9_MATERIAL" }
    ]
},

DAY9_OBSERVE: {
    background: "背景/13.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我躲在货架后观察环境。",
        "发现周涛团队已经把物资分配好，控制着超市的安全出口。",
        "任何尝试抢夺或直接行动的人都会被盯上。"
    ],
    choices: [
        { text: "继续探索超市", next: "DAY9_MATERIAL" }
    ]
},

DAY9_MATERIAL: {
    background: "背景/13.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},
  
    text: [
        "我们找到一些物资：",
        "矿泉水 ×3",
        "压缩饼干 ×5",
        "医疗包 ×2",
        "但是周涛团队明显在观察我们。",
        "我们必须决定如何分配物资，或者是否私下行动。"
    ],
    choices: [
        { text: "告诉大家物资情况", next: "DAY9_SHARE" },
        { text: "假装没看到", next: "DAY9_IGNORE" },
        { text: "自己偷偷拿一点", next: "DAY9_STEAL" }
    ]
},

DAY9_SHARE: {
    background: "背景/13.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "我将物资情况告诉了林雨和老高。",
        "陈默点了点头，表示信任我。",
        "我们暂时平稳，但周涛团队的警惕依旧。"
    ],
    choices: [
        { text: "继续", next: "DAY10_START" }
    ]
},

DAY9_IGNORE: {
    background: "背景/13.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},
 
    text: [
        "我选择假装没看到，多观察一会儿。",
        "暂时没有风险，但也没有额外收益。",
        "大家对我的态度保持中立。"
    ],
    choices: [
        { text: "继续", next: "DAY10_START" }
    ]
},

DAY9_STEAL: {
    background: "背景/13.jpg",
   characters: {left:"立绘/ZG尴尬.png",
                      right:""},

    text: [
        "趁周涛团队不注意，我悄悄拿了一些食物。",
        "林雨瞪了我一眼，我只能苦笑。",
        "这可能会引起后续冲突，但至少有了额外补给。"
    ],
    choices: [
        { text: "继续", next: "DAY10_START" }
    ]
},

DAY10_START: {
    background: "背景/14.jpg",
  characters: {left:"立绘/ZG正常.png",
                      right:""},
 
    text: [
        "夜晚来临，所有人都在超市内休息。",
        "突然，所有人的手机再次同时震动。",
        "屏幕上出现新的任务：",
        "【区域任务开启】",
        "【七日生存】",
        "【72小时后安全区关闭】",
        "【未离开者将被抹杀】",
        "空气骤然安静，紧张感瞬间弥漫全场。"
    ],
    choices: [
        { text: "继续", next: "DAY10_OBSERVE" }
    ]
},

DAY10_OBSERVE: {
    background: "背景/14.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "周涛团队立刻开始行动，搬运物资，显然想先到安全区。",
        "陈默皱起眉头，查看手机地图。",
        "新的区域出现在地图上——黑树外围区。",
        "那正是我第一天醒来时看到的巨大黑树方向。"
    ],
    choices: [
        { text: "前往黑树外围区", next: "DAY10_END" }
    ]
},

DAY10_END: {
    background: "背景/15.jpg",
   characters: {left:"立绘/ZG正常.png",
                      right:""},

    text: [
        "众人站在超市楼顶，望向远方。",
        "灰红色天空下，巨树直冲云层。",
        "赵哥心中升起一丝不安：\"我忽然有一种不好的预感。\"",
        "林雨低声回应：\"我也是。\"",
        "陈默缓缓开口：\"如果我没猜错，这里就是游戏真正开始的地方。\"",
        "屏幕出现提示：",
        "【主线任务更新】",
        "前往黑树外围区"
    ],
    choices: [
        { text: "完", next: "DAY11_START" }
    ]
}
};
