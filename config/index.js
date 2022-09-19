export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_ID: "wxecd1f21a6d76e738",

  // 公众号APP_SECRET
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  APP_SECRET: "b449e1b705b2cfdd05706c9b85e572c8",

  // 是否给文字设置多彩颜色, 和emoji不兼容
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,

  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    weather: true,

    /** 节假日 */
    // 下一休息日综合提醒
    holidaytts: true,

    /** 每日N句 */
    // 金山每日一句
    CIBA: true,
    // 每日一言
    oneTalk: false,
    // 土味情话(彩虹屁)
    earthyLoveWords: false,
    // 朋友圈文案
    momentCopyrighting: false,
    // 毒鸡汤
    poisonChickenSoup: false,
    // 古诗古文
    poetry: false,

    /** 星座运势 */
    horoscope: false,

    /** 生日消息和节日消息 */
    birthdayMessage: true,
  },

  /** 每日一言 */

  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: "",
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "宝",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oBJyR6vvlDFltKpz35-HdbdiNoJE",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "8lHe50zTF__RLWVRWBUS4K1HIhHGnAyy5n5gJlw6wTk",
      // 所在省份
      province: "天津",
      // 所在城市
      city: "天津",
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '10-20',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn",
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "宝", "year": "2002", "date": "10-20"},
        {"type": "节日", "name": "纪念日", "year": "2022", "date": "09-02"},
      ],
      // 专属纪念日/倒数日，如果你在这里填写了纪念日/倒数日，就不会计算CUSTOMIZED_DATE_LIST的日子了, 和CUSTOMIZED_DATE_LIST的配置方法相同，可以往下查看，我这里就不重复写了
      customizedDateList: [
        // 在一起的日子
        {"keyword": "love_day", date: "2022-09-02"},
      ]
    },
    {
      name: "严云翔",
      id: "oBJyR6rRky5Jrx8pb-48gkMih2Ak",
      useTemplateId: "8lHe50zTF__RLWVRWBUS4K1HIhHGnAyy5n5gJlw6wTk",
      province: "贵州",
      city: "兴义",
      horoscopeDate: '01-27',
      horoscopeDateType: '今日',
      openUrl: "https://wangxinleo.cn",
    },
    ],
  /**
   * 【推送完成提醒】 相关，主要用来展示发送是否成功/失败的数据
   */

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "8lHe50zTF__RLWVRWBUS4K1HIhHGnAyy5n5gJlw6wTk",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oBJyR6rRky5Jrx8pb-48gkMih2Ak",
    },
  ],

  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "天津",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "天津",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  FESTIVALS: [
    // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
    {"type": "*生日", "name": "宝", "year": "2002", "date": "10-20", isShowAge: true},
    {"type": "节日", "name": "纪念日", "year": "2022", "date": "09-02"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-02"},
    
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
      "你喜欢的人也是凡人，你的喜欢为他镀上金身。",
      "为了你，我也有走向光明的热望，世界不会与我太寂寞。",
      "我想和你在一起，因为你的眼睛就是万家灯火，里面住着一个我；我想和你在一起，因为就算是最黑的夜，我也知道你就在这里。",
      "其实，我瞒了所有人，偷偷喜欢你了好久。",
      "奇迹就留给别人吧，我有你了。",
      "你是年少的欢喜，我想把这句话反过来告诉你。",
      "人生路上过客很多，每个人都有各自的终点，他人向东向西向南向北，而我向你。",
      "能在最好的年纪遇见最好的你，我很幸福。",
      "只要你一向在我身边，其他东西不再重要。",
      "那些和你在一齐的日子，连空气都是甜的。",
      "情不知所起，一往而深。",
    ]},
  ],


}
