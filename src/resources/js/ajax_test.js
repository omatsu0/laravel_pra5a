function getAllData(){

  fetch('ajax-test/show_all', { // 第1引数に送り先
  })
      .then(response => response.json()) // 返ってきたレスポンスをjsonで受け取って次のthenへ渡す
      .then(res => {
       /*--------------------
            PHPからの受取成功
           --------------------*/
          // 取得したレコードをeachで順次取り出す
          res.forEach(elm =>{
              var insertHTML = "<tr class=\"target\"><td>" + elm['id'] + "</td><td>" + elm['name'] + "</td><td>" + elm['price'] + "</td></tr>"
              var all_show_result = document.getElementById("all_show_result");
              all_show_result.insertAdjacentHTML('afterend', insertHTML);
          })
          console.log("通信成功");
          console.log(res); // 返ってきたデータ
      })

      .catch(error => {
          console.log(error); // エラー表示
      })
}

// 関数を実行
getAllData();