$(function(){

    // セーブボタンが押されたら、ローカルストレージに保存する。
    $("#is_open_with_window").click(function () {
      if ($("#is_open_with_window").prop('checked')) {
        localStorage["is_open_with_window"] = "on";
      }
      else {
        localStorage["is_open_with_window"] = "off";
      }
    });
  
    // オプション画面の初期値を設定する
    if (localStorage["is_open_with_window"] == "on") {	
      $('#is_open_with_window').prop('checked', true);
    }
    else {
      $('#is_open_with_window').prop('checked', false);
    }
  });