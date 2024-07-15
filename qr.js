const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: '' + b64data });
	
				   let SIGMA_MD_TEXT = `
*𝐁𝐄𝐋𝐓𝐀𝐇-𝐌𝐃 𝐕𝟒.𝟎.𝟎 𝐋𝐀𝐓𝐄𝐒𝐓 QR CODE CONNECTED*

> You have completed the first step of Deploying *BELTAH-MD*, Copy the above message and deploy your bot.Meanwhile you must follow the 4 steps. 

> 1st STEP
*TAP THE LINK BELOW AND FOLLOW THE CHANNEL* 
𓄂 *_https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F_*

> 2nd STEP
*YOU MUST JOIN OUR GROUP FOR UPDATES ON THIS BOT*
𓄂 *_https://chat.whatsapp.com/CQvUnqaDK4fBjgMXvFEAsI_*

> 3rd STEP
*FORK AND STAR 🌟 THE REPO FOR COURAGE*
𓄂 *_https://github.com/Beltahmd/beltah-md_*

> 4th STEP 
*VISIT FOR TUTORIALS IF YOU DON'T KNOW HOW TO DEPLOY*
𓄂 *_https://www.youtube.com/@Beltahtech2024_*

*DEVELOPER: BELTAH TECH*
𓄂 *_https://wa.me/254114141192_*

> MADE ON EARTH BY BELTAH🇰🇪
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐁𝐄𝐋𝐓𝐀𝐇 𝐓𝐄𝐂𝐇 `
					
	 await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
