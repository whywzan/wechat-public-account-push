export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx29915a375ba2e3d2",
    // 公众号appSecret
    appSecret: "50e08a0dc4278a5a59e3c0512f468432",
    // 模板消息id
    templateId: "KRH_qIzGW6zolSdU4HQnABX68wClsgrYn-4ZFMPhhlA",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["o2AlR5y0uUN6OYVmHM6-ZnH6Ew4c"],
     
    // 信息配置
    // 所在省份
    province: "广东",
    // 所在城市
    city: "湛江",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "2001", "date": "09-10", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-05-09",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
