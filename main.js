const timer = () => {
  const dateNow = new Date().getTime();
  const datetimer = new Date("March 17,2022 00:00:00").getTime();
  const gap = datetimer - dateNow;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const texthour = Math.floor((gap % day) / hour);
  const textminute = Math.floor((gap % hour) / minute);
  const textsecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = texthour;
  document.querySelector(".minute").innerText = textminute;
  document.querySelector(".second").innerText = textsecond;
};
setInterval(timer, 1000);
