function checkQuiz() {
  let score = 0;

  if(document.querySelector('input[name="q1"]:checked')?.value == "1") score++;
  if(document.querySelector('input[name="q2"]:checked')?.value == "1") score++;
  if(document.querySelector('input[name="q3"]:checked')?.value == "1") score++;
  if(document.querySelector('input[name="q4"]:checked')?.value == "1") score++;

  document.getElementById("result").innerText = "Score: " + score + "/4";
}
