// NotSupport = 0,
//     Text = 1,
//     Number = 2,
//     SingleSelect = 3,
//     MultiSelect = 4,
//     DateTime = 5,
//     Checkbox = 7,
//     User = 11,
//     Phone = 13,
//     Url = 15,
//     Attachment = 17,
//     SingleLink = 18,
//     Lookup = 19,
//     Formula = 20,
//     DuplexLink = 21,
//     Location = 22,
//     GroupChat = 23,
//     Denied = 403,
//     /**
//      * 引用类型字段，前后端约定用10xx公共前缀开头
//      */
//     CreatedTime = 1001,
//     ModifiedTime = 1002,
//     CreatedUser = 1003,
//     ModifiedUser = 1004,
//     AutoNumber = 1005,
//     Barcode = 99001,
//     Progress = 99002,
//     Currency = 99003,
//     Rating = 99004

// 日语
const config = [
    ["batchDelete","批量删除","Batch Delete","バッチ削除"],
    ["delete","删除","Delete","削除"],
]


let rr = {
    zh: {},
    en: {},
    ja: {}
}
config.forEach(item => {
    rr.zh[item[0]] = item[1]
    rr.en[item[0]] = item[2]
    rr.ja[item[0]] = item[3]
})

export default rr
