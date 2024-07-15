PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "Chrome (Ubuntu)", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(1000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: '' + b64data });

               let SIGMA_MD_TEXT = `
*LUCKY MD V5 PAIRING CODE CONNECTED*

> You have completed the first step of Deploying *LUCKY_MD V5*
> Copy the above session Id and deploy your bot.
> ASK DEVELOPER LUCKY FOR BOT DEPLOYMENT ✅ 
> Meanwhile you must follow the 4 steps. 

> 1st STEP

> 1st STEP
*TAP THE LINK BELOW AND FOLLOW THE CHANNEL* 
𓄂 *_https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f_*

> 2nd STEP
*YOU MUST JOIN OUR GROUP FOR UPDATES ON THIS BOT*
𓄂 *_https://chat.whatsapp.com/Iu3UYEx1lE6IsHVRU7XKvp_*

> 3rd STEP
*FORK AND STAR 🌟 THE REPO FOR COURAGE*
𓄂 *_https://github.com/Fred1e/lucky_md_*

> 4th STEP 
*VISIT FOR TUTORIALS IF YOU DON'T KNOW HOW TO DEPLOY*
𓄂 *_https://www.youtube.com/@freeonlinetvT1_*

*DEVELOPER1: FREDIE TECH*
𓄂 *_https://wa.link/4d9cpj_*

*DEVELOPER2:FREDIE_TECH*
𓄂 *_https://wa.me/255620814108_*
> Dm ME ☝️ FOR WHATSAPP BOT DEPLOYMENT 🔥 🔥 

> ✅✅ 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 BY FREDIE ✅✅`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
