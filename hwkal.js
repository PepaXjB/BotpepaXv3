


const fs = require('fs')
const chalk = require('chalk')

global.ig = '@-' // ubah aja
global.email =  'Error' //serah
global.region = 'indonesia' // serah

global.ownername = 'PepaxJB' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.namabot = ['BotpepaXv3'] //ubah jadi nama bot mu
global.namasv = ['BuyerpepaX'] //ubah jadi nama jb mu
global.versiscript = ['00.1']// versi sc
global.getsc  = ['Harga SC 500k 🗿']//link sc
//=================================================//
global.owner = ['6282194946235'] // ubah aja pake nomor lu
global.keyopenai = ''
global.botname = 'BotpepaXv3' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Sticker By pepex' // ubah aja ini nama sticker
global.author = 'PepaxID' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'RAIN BOTZ☆☆' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})