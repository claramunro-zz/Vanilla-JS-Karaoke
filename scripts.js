let chorus = "Don't want to be a fool for you, Just another player in your game for two, You may hate me but it ain't no lie, Baby bye bye bye, Bye bye, I Don't want to make it tough, I just want to tell you that I've had enough, It might sound crazy but it ain't no lie, Baby bye bye bye"

function Song(chorusString, position = 0) {
  this.chorus = chorusString;
  this.chorusArray = this.chorus.split(', ');
  this.position = position;
  this.currentPhrase = this.chorusArray[this.position];
}

let byeByeBye = new Song(chorus);

function switchPhrase() {
  if (byeByeBye.position < byeByeBye.chorusArray.length - 1) {
    let newPosition = byeByeBye.position + 1;
    const newSong = new Song(byeByeBye.chorus, newPosition);
    return newSong;
  } else {
    let newSong = new Song(byeByeBye.chorus);
    return newSong;
  }
}

function displayPhrase(song) {
  document.getElementById('words').innerHTML = song.currentPhrase;
}

window.onload = function() {
  displayPhrase(byeByeBye);
}

function userClick() {
  byeByeBye = switchPhrase();
  displayPhrase(byeByeBye);
}
