/* eslint-disable */
import "./style.css";

window.onload = function() {
  //write your code here
  let who = [" The dog", " My grandma", " The mailman", " My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let primero = Math.floor(Math.random() * who.length);
  let segundo = Math.floor(Math.random() * action.length);
  let tercero = Math.floor(Math.random() * what.length);
  let cuarto = Math.floor(Math.random() * when.length);

  document.querySelector("#g-excuse").innerHTML =
    who[primero] + action[segundo] + what[tercero] + when[cuarto];
};
