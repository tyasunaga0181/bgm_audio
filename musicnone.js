var pre_audio = {
  type: 'html-button-response',
  stimulus:　"<p style = 'text-align:left'>Continueを押すと音楽が再生されます。</p>" +
             "<p style = 'text-align:left'>音楽聴取はヘッドホンを用いて行ってください。ヘッドホンがなければイヤホンでも構いません。</p>" +
  　　　　　　"<p style = 'text-align:left'>音楽が流れたら音量の調整を行ってください。</p>" ,
  choices: ['Continue'],
}

  var instructions = {
    type: 'html-keyboard-response',
    stimulus: "<p style = 'text-align:left'>この画面が表示された実験参加者の方は音楽聴取を行わずに課題を行っていただきます。</p>" +
              "<p style = 'text-align:left'>課題を行うURL https://tyasunaga0181.github.io/Stroop-task/stroop_master_updated_3.html にアクセスし、画面の指示に従って課題を進めてください。</p>"+
              "<p style = 'text-align:left'>課題へのリンクは概要欄に掲載しておりますのでそちらからアクセスしてください。</p>"+
    "<p style = 'text-align:left'>なお、<b>ヘッドホン・イヤホンを着け、指示があるまで外さないでください。</b></p>",          
    choices: ['none'],
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
