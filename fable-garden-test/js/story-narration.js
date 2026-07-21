(function(){
  var F=window.FableGarden=window.FableGarden||{},speech=window.speechSynthesis;
  F.narration={
    voices:function(){return speech?speech.getVoices().filter(function(v){return /^en/i.test(v.lang)}):[]},
    cancel:function(){if(speech)speech.cancel()},
    speak:function(text,opts,end){
      if(!speech||!window.SpeechSynthesisUtterance||opts.muted)return false;
      speech.cancel();
      var utterance=new SpeechSynthesisUtterance(text);
      utterance.rate=opts.rate;utterance.pitch=1;utterance.volume=opts.volume;utterance.voice=opts.voice||null;
      utterance.onboundary=function(event){if(typeof opts.boundary==='function')opts.boundary(event.charIndex||0)};
      utterance.onend=end;
      utterance.onerror=function(){F.utilities.notify('Narration could not play. You can still read and turn pages.')};
      speech.speak(utterance);return true;
    }
  };
})();
