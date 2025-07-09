const express = require('express');
const axios = require('axios');
const path = require('path');
const helmet = require('helmet');
const fs2 = require('fs-extra');
const fs = require("fs");
const cs  = require('string-similarity');
const app = express();

global.error = process.cwd() + '/ON/error.html';
global.home = process.cwd() + '/ON/home.html';


app.use(express.static("ON"))
app.set("json spaces", 4);
app.get('/', function (request, response) {
response.sendFile(global.home);
}).listen(app.get('port'));

app.get('/styles.css', function (request, response) {
    response.sendFile(global.css);
})
app.get('/error', function (request, response) {
     response.sendFile(global.error);
})
//===============[ CREADIT ]===============\\
var n = "SI TANVIR 6X";
var a= "20+";
var r = "Single";
var fb = " https://facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D";
var rating = "⭐⭐⭐⭐⭐";
var urllofi = "https://its.xan-xunder-t4n.repl.co/lofi/";
var EM = [ '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];
var E = EM[Math.floor(Math.random() * EM.length)];
//===============[ SYNC VIDEO ]===============\\
const islamic = fs.readdirSync(__dirname + '/ISLAM/');
const gazzal = fs.readdirSync(__dirname + '/GAZZAL/audio/');
const lofi = fs.readdirSync(__dirname + '/LOFI/video/');
//===============[ SYNC FILE ]===============\\
const quran = fs2.readFileSync(__dirname + '/database/TANVIR-6X/quran.txt', 'utf-8').split('\n');
const story = fs2.readFileSync(__dirname + '/database/RX-PAVEL/story.txt', 'utf-8').split('\n');
const couple = fs2.readFileSync(__dirname + '/database/TANVIR-TAMIM/couple.txt', 'utf-8').split('\n');
const sad = fs2.readFileSync(__dirname + '/database/RX-PAVEL/sad.txt', 'utf-8').split('\n');
const hot = fs2.readFileSync(__dirname + '/database/RX-PAVEL/hot.txt', 'utf-8').split('\n');
const lyrics = fs2.readFileSync(__dirname + '/database/TANVIR-TAMIM/lyrics.txt', 'utf-8').split('\n');
//===============[ FUNCTION ]===============\\
function getislam() {
  let isvid = islamic[Math.floor(Math.random() * islamic.length)];
  console.log(isvid);
  return isvid;
}

function getlofi() {
  let lofivid = lofi[Math.floor(Math.random() * lofi.length)];
  console.log(lofivid);
  return lofivid;
}

function getgazzal() {
  let gazzalaudio = gazzal[Math.floor(Math.random() * gazzal.length)];
console.log(gazzalaudio);
return gazzalaudio;
}

function getstory() {
  let story2 = story[Math.floor(Math.random() * story.length)];
 console.log(story2);
  return story2;
}

function getquran() {
  let quranic = quran[Math.floor(Math.random() * quran.length)];
console.log(quranic);
  return quranic;
}

function getcouple() {
  let couple2 = couple[Math.floor(Math.random() * couple.legnth)];
  console.log(couple2);
  return couple2;
}

function getsad() {
  let sad2 = sad[Math.floor(Math.random() * sad.length)];
  console.log(sad2);
  return sad2;
}

function gethot() {
  let hot2 = hot[Math.floor(Math.random() * hot.length)];
  console.log(hot2);
  return hot2;
}
 function getlyrics() {
   let lyrics2 = lyrics[Math.floor(Math.random() * lyrics.length)];
   console.log(lyrics2);
   return lyrics2;
 }
//===============[ APP GET DIR SYNC ]===========\\

//===============[ ISLAM ]===========\\
app.get('/islamic', (req, res) => {
res.json({ caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐌𝐚𝐮𝐥𝐚𝐧𝐚 𝐬𝐡𝐨𝐫𝐭𝐬 𝐯𝐢𝐝𝐞𝐨😊🖤`,
             title:`comingSoon🫦`,
             link:`https://its--xan-xunder-t4n.repl.co/islam/${getislam()}`, 
             admin:`SI TANVIR 6X`,                author:`https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D` });
return;
});

app.get('/islamic/:name', (req, res) => {
  let input = req.params.name;
  let getStream = fs.createReadStream(__dirname + `/ISLAM/${getislam()}`);
  getStream.pipe(res);
  return;
})
///==============[ LOFI ]================\\
app.get('/lofi', (req, res) => {
res.json({ caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜 𝐥𝐨𝐯𝐞 𝐬𝐡𝐨𝐫𝐭 𝐥𝐨𝐟𝐢 𝐯𝐢𝐝𝐞𝐨 🥰👩‍❤️‍👨`,
             title:`comingSoon🫦`,
             link:`https://its--xan-xunder-t4n.repl.co/lofi/${getlofi()}`, 
             admin:`SI TANVIR 6X`,                author:`https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D` });
return;
});

app.get('/lofi/:name', (req, res) => {
  let input = req.params.name;
  let getStream = fs.createReadStream(__dirname + `/LOFI/video/${getlofi()}`);
  getStream.pipe(res);
  return;
})
//===============[ GAZZAL ]===========\\
app.get('/gazzal', (req, res) => {
res.json({ caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐚𝐮𝐝𝐢𝐨 𝐠𝐚𝐳𝐳𝐚𝐥 😘💖`,
             title:`comingSoon🫦`,
             link:`https://its--xan-xunder-t4n.repl.co/gazzal/${getgazzal()}`, 
             admin:`SI TANVIR 6X`,                author:`https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D` });
return;
});

app.get('/gazzal/:name', (req, res) => {
  let input = req.params.name;
  let getStream = fs.createReadStream(__dirname + `/GAZZAL/audio/${getgazzal()}`);
  getStream.pipe(res);
  return;
})
//===============[ APP GET FILE SYNC ]===========\\
app.get('/quran', (req, res) => {
  res.json({
    caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝐈𝐬𝐥𝐚𝐦𝐢𝐜 𝐚𝐮𝐝𝐢𝐨 𝐪𝐮𝐫𝐚𝐧 𝐫𝐞𝐜𝐢𝐭𝐢𝐧𝐠 ❤️‍🩹 📖`,
    title:`ComingSoon🫦`,
    source: getquran(),
    admin:`SI TANVIR 6X`,
  });
  return;
});
app.get('/sad',  (req, res) => {
res.json({
  caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝐛𝐫𝐨𝐤𝐞𝐧 𝐥𝐨𝐯𝐞 𝐬𝐚𝐝 𝐯𝐢𝐝𝐞𝐨 🥺💔`,
  type: `video/mp4`,
  title:`comingSoon🫦`,
  source: getsad(),
  admin:`SI TANVIR 6X`,
  author:`https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D/`,
});
  return;
});
app.get('/hot', (req, res) => {
res.json({
  caption:`❐ 𝐇𝐞𝐫𝐞 𝐢𝐬 𝐬𝐨𝐦𝐞 𝟏𝟖+ 𝐬𝐞𝐱𝐮𝐚𝐥 𝐡𝐨𝐭 𝐯𝐢𝐝𝐞𝐨 🥵🫦`,
  type: `video/mp4`,
  title: `comingSoon🫦`,
  source: gethot(),
  admin:`SI TANVIR 6X`,
  author: `https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D/`,
});
  return;
});
app.get('/story', (req, res) => {
  res.json({
    caption:`Here Is Some Story Video 🥰🤩`,
    type: `video/mp4`,
    title: `comingSoon🫦`,
    source: getstory(),
    admin:`SI TANVIR 6X`,
    author: `https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D/`,
  });
    return;
  });
app.get('/couple', (req, res) => {
res.json({
  caption:`Here Is Some Couple Video 😘`,
  type: `video/mp4`,
  title: `comingSoon🫦`,
  source: getcouple(),
  admin:`SI TANVIR 6X`,
  author: `https://www.facebook.com/T4NV1R.BR4ND.Y0UR.N3X7.D4D/`,
});
  return;
});
//===≠===========[ RIMI ]===============\\
app.get('/meta', (req, res) => {
const dataSim = require('./data/janu.json');
const stringSimilarity = require('string-similarity');
if(!req.query.type) return res.json({ error: 'Sorry fuxk you🐸'})
if(req.query.type == 'talk') {
  var ask = encodeURI(req.query.ask)
  if (!ask) return res.jsonp({ error: 'Sorry🥺' });
  var msg = [];
  for (let id of dataSim) { 
      const data = id.ask
      msg.push(data)
  }
  var checker = stringSimilarity.findBestMatch(decodeURI(ask), msg)
  if (checker.bestMatch.rating >= 0.5) {
  var search = checker.bestMatch.target;
  }
  if(search == undefined) return res.jsonp({
      answer: '_তুমি উলটা পালটা কথা বললে আমি জবাব দিবো কি জানু-!!😤'
  })
  function recoverKey() {
      var data = dataSim.filter(i => i.ask.toLowerCase() == search.toLowerCase())
      return data
  }
  var find = recoverKey()
  var f2 = find[Math.floor(Math.random() * find.length)];
  var a = f2.ans[Math.floor(Math.random() * f2.ans.length)];
    return res.jsonp({
      answer: a
  })
}
if(req.query.type == 'tr') {
    const path = require('path').join(__dirname, 'data', 'janu.json');
    var id = dataSim.length
    var ask = req.query.ask
    var ans = req.query.ans || "❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔";
    var credit = "SI TANVIR 6X";
    if(!ask || !ans) return res.json({ error: 'missing data to execute the command' });
    var f = dataSim.find(i => i.ask == ask);
    console.log(f)
    if(f != undefined) {
      if(f.ans.includes(ans)) return res.json({ error: 'The answer already exists!'})
      f.ans.push(ans);
    }
    else {
      dataSim.push({
        credit,
        id,
        ask,  
        ans: [
          ans
        ]
      })
    }
    fs.writeFileSync(path, JSON.stringify(dataSim, null, 2), 'utf-8');
    return res.json({ 
      msg: 'training successfully this meta',
      data: {
        author: credit,
        talk: ask,
        answer: ans
      }
    })
  } 
});
//===============[ IMGUR ]================\\

//===============[ ENDED ]===============\\

app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function() {
    console.log('\x1b[36m=====================================================\n\x1b[38;5;220m[ START ] \x1b[33m→\x1b[38;5;119m Tanvir6x Server Is Running Personal Service\x1b[38;5;208m', app.get('port'), '\n\x1b[36m=====================================================\n');
});
