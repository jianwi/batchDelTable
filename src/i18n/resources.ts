
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
