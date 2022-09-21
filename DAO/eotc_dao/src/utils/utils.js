
// 0 0 0 trx
function initFormData(data) {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
        formData.append(key, value)
    }
    return formData
}



export default {
    initFormData
}

export const paytype = (value) => {
    switch (value) {
        case "yhk":
            return "银行卡";
        case "zfb":
            return "支付宝";
        case "wx":
            return "微信支付";
        case "xj":
            return '现金'
    }
}
