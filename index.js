

const Express = require('express');
const BodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const mongoObjectID = require('mongodb').ObjectId;
const mongo = 'mongodb://localhost:27017'
// const pg = require('pg');

// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let linebot = require('linebot');
let bot = linebot({
  channelId: "Ua595316cfe2569b28de29f5ce156c970",
  channelSecret: "4e333938a2f727bb6b461725d83660a7",
  channelAccessToken: "c7+fUVubA7cW3H9yGeUxbSuKEMvFA079mY7Sh2b7EhQrhgMrkg5UIMCWuVMJVBRqgqTJlAqsaTVFDN/5sxa/W7BwnOebnjid2pJlvjNoUr9mU1Nv0ARzawFZVT11/kFd/zll6IA279wO3C/q7zp32gdB04t89/1O/w1cDnyilFU="
});

const linebotParser = bot.parser();
const app = Express();

// for line webhook usage
app.post('/linewebhook', linebotParser);

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

mongoClient.connect(mongo, { useUnifiedTopology: true }, function (err, db) {
  if (err) return console.log(err)
  mongodb = db.db("linebot");

  // Start Service
  app.listen(3000, function () {
    console.log('Server Starts')
  })
})

// }
function testabc() {
  console.log("123")
  const name = "愛愛"
  return name
}
function queryName() {
  console.log("queryName()")
  console.log(`Running query to PostgreSQL server: ${config.host}`);

  const query = 'SELECT * FROM account;';

  client.query(query)
    .then(res => {
      const rows = res.rows;

      rows.map(row => {
        console.log(`Read: ${JSON.stringify(row)}`);
      });

      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
  const name = "愛愛"
  return name
}
function addmember(event) {
  let msg = event.message.text
  let member = {
    'name': event.message.text
  }
  console.log(newMember)
  ccollection.insertOne(newMember, function (err, document) {
    if (err) return console.log("新增失敗")
    console.log("新增成功");
  });
}
function queryMember(event) {
  const collection = mongodb.collection('addressBook');
  let name = event.message.text.replace("查", "").replace(" ", "")
  let member = {
    'name': name
  };
  collection
    .findOne(member)
    .then(result => {
      console.log(result)
      return result
    }).then(result => {
      console.log(result);
      let msg = `${result}`
      let msg2 = {
        "type": "template",
        "altText": `${name}的資料`,
        "template": {
            "type": "confirm",
            "text": "Are you sure?",
            "actions": [
                {
                  "type": "message",
                  "label": "Yes",
                  "text": "yes"
                },
                {
                  "type": "message",
                  "label": "No",
                  "text": "no"
                }
            ]
        }
      }
      event.reply(msg2)
        .then(function (data) {
          // 當訊息成功回傳後的處理
          console.log("回傳成功")
        }).catch(function (err) {
          // 當訊息回傳失敗後的處理
          console.log("回傳失敗", err)
        });

    }).catch( err => {
      console.log(err)
    });

}
// 當有人傳送訊息給 Bot 時
bot.on('message', function (event) {
  // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
  console.log(event.message.text);
  let msg =event.message.text;
  if (msg.includes('查')){
    console.log("yes")
    queryMember(event)
  } else {
    console.log("NO")
  };



  // event.reply("123").then(function (data) {
  //   // 當訊息成功回傳後的處理
  //   console.log("回傳成功")
  // }).catch(function (error) {
  //   // 當訊息回傳失敗後的處理
  // });
});



