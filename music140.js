var repo_site = "https://tyasunaga0181.github.io/bgm_audio/";

var pre_audio = {
  type: 'html-button-response',
  stimulus:　"<p style = 'text-align:left'>Continueを押すと音楽が再生されます。</p>" +
             "<p style = 'text-align:left'>音楽聴取はヘッドホンを用いて行ってください。ヘッドホンがなければイヤホンでも構いません。</p>" +
  　　　　　　"<p style = 'text-align:left'>音楽が流れたら音量の調整を行ってください。</p>" ,
  choices: ['Continue'],
}

var trial_1 = {
  type: 'audio-keyboard-response',
  stimulus: '"+repo_site+"sound/Rosini_BPM140_repeat.mp3',
  prompt: '音量調節が終わったらいずれかのキーを押してください',
}

var main_audio = {
  type: 'html-button-response',
  stimulus:　"<p style = 'text-align:left'>Continueを押すと音楽が再生されます</p>" +
  　　　　　　"<p style = 'text-align:left'>メールに記載したもう一つの実験(実験２)をストループ課題の練習が終わるところまで進めてください</p>" +
             "<p style = 'text-align:left'><b>音楽が再生され次第</b>もう一つの実験の課題を始めてください。</p>" ,
  choices: ['Continue'],
}

var trial_2 = {
  type: 'audio-keyboard-response',
  stimulus: '"+repo_site+"sound/Rosini_BPM140_repeat.mp3',
  choices: ['none'],
  prompt: 'もう一つの実験のストループ課題を行ってください. もう一つの実験が終了し次第このウィンドウを閉じてください',
}

var timeline = [];
timeline.push(pre_audio);
timeline.push(trial_1);
timeline.push(main_audio);
timeline.push(trial_2);
