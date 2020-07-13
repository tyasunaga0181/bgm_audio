var pre_audio = {
  type: 'html-button-response',
  stimulus:　"<p style = 'text-align:left'>Continueを押すと音楽が再生されます。</p>" +
             "<p style = 'text-align:left'>音楽聴取はヘッドホンを用いて行ってください。ヘッドホンがなければイヤホンでも構いません。</p>" +
  　　　　　　"<p style = 'text-align:left'>音楽が流れたら音量の調整を行ってください。</p>" ,
  choices: ['Continue'],
}

  var instructions = {
    type: 'html-button-response',
    stimulus: "<p style = 'text-align:left'>この画面が表示された実験参加者の方は音楽聴取を行わずにストループ課題を行っていただきます。</p>" +
              "<p style = 'text-align:left'>メールに記載したもう一つの実験(実験1)をストループ課題の練習が終わるところまで進めてください</p>" +
              "<p style = 'text-align:left'>もう一つの実験では<b>音楽を再生している状態で</b>と表示されると思いますが無視していただいて構いません</p>"+
              "<p style = 'text-align:left'>このままストループ課題を行ってください。</p>"+
              "<p style = 'text-align:left'>ただし<b>着けているヘッドホン,イヤホンは外さないでください。</b></p>"+
              "<p style = 'text-align:left'>準備ができ次第<b>Continueを押した後</b>もう一つの実験の課題を始めてください。</p>",
    choices: ['Continue'],
  };

  var instructions_2 = {
    type: 'html-keyboard-response',
    stimulus:  "<p style = 'text-align:left'>もう一つの実験のストループ課題を行ってください。もう一つの実験が終了し次第このウィンドウは閉じて構いません。</p>",
    choices: ['none'],
  };

  var timeline = [];
  timeline.push(pre_audio);
  timeline.push(instructions);
  timeline.push(instructions_2);
