import { fetchAndDrawTable, CreateText, GenName,startDraw} from "./text.js";
import { headScroll} from "./head.js";
import { Bonk, checkBonk,fetchaAnddrawScore} from "./bonk.js";
import myJson from './animals.json' assert {type: 'json'};
import {updatebeforeSize} from "./config.js";
setInterval(fetchAndDrawTable, 1000);
setInterval(fetchaAnddrawScore, 1000);
setInterval(checkBonk,500);

document.addEventListener("DOMContentLoaded", () => {
  GenName(myJson);
  startDraw();
  window.addEventListener("scroll",() => {
    headScroll();
  });
  const button = document.getElementById("send_green");
  const message = document.getElementById("message");
  message.addEventListener('keypress', function (e) {
    if(e.key == 'Enter' && !e.shiftKey){
      CreateText();
    }

});
  button.addEventListener("click", () => {
    CreateText();
  });
  const bonk_btn = document.getElementById("bonk-btn");
  bonk_btn.addEventListener("click", () => {
    Bonk();
  });

});