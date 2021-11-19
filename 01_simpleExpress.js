let express = require("express");
let app     = express();
 
app.get("/", (req, res) => { // get 방식 요청이 오면, 이하 함수를 실행
  res.send("Hello World");
});
 
app.listen(3000);
