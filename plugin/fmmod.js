cmd({
            pattern: "fmmod1",
            react: "📥",
            desc: "Downloads apk from google.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {

const axios = require('axios')
const cheerio = require('cheerio')

const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36';
const urlsc = "https://fmmods.com/download-center/mega.php"
const Proxy = (url)=>(url ? `https://translate.google.com/translate?sl=en&tl=fr&hl=en&u=${encodeURIComponent(url)}&client=webapp`: '')

async function mods() {
	return new Promise((resolve, reject) => {
    const list = []
axios.get(Proxy(urlsc), {
  headers: {
    'User-Agent': userAgent,
  },
}).then((response) => {
        const $ = cheerio.load(response.data)
        $('div.su-button-center').each((i,element)=> {
            const link = $(element).find("a").attr("href");
            list.push({
                name: link.split('/')[7].replace('.', '_').replace('_apk', '.apk'),
                link: link
            });
        })
        const result = {}
        result.com_whatsapp = list && list[0] ? list[0] : undefined
        result.com_fmwhatsapp = list && list[1] ? list[1] : undefined
        result.com_gbwhatsapp = list && list[2] ? list[2] : undefined
        result.com_yowhatsapp = list && list[3] ? list[3] : undefined
        
        
        resolve(result);
      })
    })
}
