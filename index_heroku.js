let linebot = require('linebot');


// 初始化 line bot 需要的資訊，在 Heroku 上的設定的 Config Vars，可參考 Step2
let bot = linebot({
    channelId: "Ua595316cfe2569b28de29f5ce156c970",
    channelSecret: "4e333938a2f727bb6b461725d83660a7",
    channelAccessToken: "c7+fUVubA7cW3H9yGeUxbSuKEMvFA079mY7Sh2b7EhQrhgMrkg5UIMCWuVMJVBRqgqTJlAqsaTVFDN/5sxa/W7BwnOebnjid2pJlvjNoUr9mU1Nv0ARzawFZVT11/kFd/zll6IA279wO3C/q7zp32gdB04t89/1O/w1cDnyilFU="
});


const { Pool, Client} = require('pg')
const connectionString = "postgres://frbftxxjblaves:1400e1ffea2ef7f43e755bf3fcd70e0d780ef076f7be66549cb57e31f37eb410@ec2-54-237-135-248.compute-1.amazonaws.com:5432/dehi54mlh790fp"
const pool = new Pool({
    connectionString,
  })

  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  const client = new Client({
    connectionString,
  })
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  }) 


  function testabc(){
    console.log("123")
    const name = "愛愛"
    return name
}
function queryName(){
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

// 當有人傳送訊息給 Bot 時
bot.on('message', function (event) {
    // 回覆訊息給使用者 (一問一答所以是回覆不是推送)
    // const query = `SELECT * FROM account `;
    console.log(event.message.text)
    const name = testabc()
    event.reply(name).then(function (data) {
        // 當訊息成功回傳後的處理
      }).catch(function (error) {
        // 當訊息回傳失敗後的處理
      });
});

bot.listen('/', process.env.PORT || 5000, function () {
  console.log('全國首家LINE線上機器人上線啦！！');
});