function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5WtWQ0GXVzH":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="lagu.mp3";
audio.load();
audio.play();
}

