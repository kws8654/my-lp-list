$('.startstop').click(function () {
  $(this).toggleClass('active');
  $('.turntable').toggleClass('active');
});

$('.startstop').click(function () {
  $(this).toggleClass('active');
  $('.rec').toggleClass('active');
});

let num = 1;
function nextLp(index) {
  const image = document.querySelector('.rec');
  const audio = document.querySelector('.audioPlay');
  // let rec = document.querySelector(".rec").getAttribute('src');
  let title = document.querySelector('.title');

  if (index) {
    if (num == 5) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }

  image.setAttribute('src', 'rec' + num + '.png');

  if (audio.paused) {
    audio.setAttribute('src', 'aud' + num + '.mp3');
  } else {
    audio.setAttribute('src', 'aud' + num + '.mp3');
    audio.play();
  }
  if (image.getAttribute('src') === 'rec1.png') {
    title.innerText = '연극이 끝난 후_샤프';
  } else if (image.getAttribute('src') === 'rec2.png') {
    title.innerText = 'Drive_김현철';
  } else if (image.getAttribute('src') === 'rec3.png') {
    title.innerText = '네온_유키카';
  } else if (image.getAttribute('src') === 'rec4.png') {
    title.innerText = '운전만 해_Brave Girls';
  } else if (image.getAttribute('src') === 'rec5.png') {
    title.innerText = 'Summer man_윤종신';
  }
}

function playLp() {
  const audio = document.querySelector('.audioPlay');
  let rec = document.querySelector('.rec').getAttribute('src');
  let title = document.querySelector('.title');

  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
  if (rec === './rec1.png') {
    title.innerText = '연극이 끝난 후_샤프';
  }
}
