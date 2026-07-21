(function(){
  var F=window.FableGarden=window.FableGarden||{};
  F.book={
    render:function(root,page){
      var draw=function(){
        var copy=document.createElement('section'),art=document.createElement('section'),h=document.createElement('h2');
        copy.className='book-copy'; art.className='book-art'; h.textContent=page.label; copy.append(h);
        page.sentences.forEach(function(sentence,index){
          var paragraph=document.createElement('p'); sentence.split(/(\s+)/).forEach(function(part){
            if(!part.trim()){paragraph.append(document.createTextNode(part));return;}
            var word=document.createElement('span');word.className='spoken-word';word.textContent=part;paragraph.append(word);
          });
          if(index===0) paragraph.className='currently-spoken';
          copy.append(paragraph);
        });
        var image=document.createElement('img');
        image.src=page.image; image.alt=page.alt; image.width=1280; image.height=720; image.decoding='async';
        image.dataset.sceneId=page.sceneId; image.dataset.storyPage=page.pageNumber;
        image.dataset.imageFilename=page.image.split('/').pop(); image.dataset.imageSize='1280x720'; image.dataset.imagePrompt=page.imagePrompt;
        art.append(image); root.replaceChildren(copy,art); root.classList.remove('turn');
      };
      if(root.children.length){ root.classList.add('turn'); setTimeout(draw,620); } else { draw(); }
    }
  };
})();
