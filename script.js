function checkQuiz() {
  let score = 0;
  let feedback = [];

  const answers = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "a",
    q5: "c",
    q6: "a"
  };

  const explanations = {
    q1: "Intellectual property laws help protect creators and their work.",
    q2: "Many systems collect data automatically, often without users fully noticing.",
    q3: "E-waste is a major environmental issue caused by discarded technology.",
    q4: "Phishing tricks users into giving sensitive information like passwords.",
    q5: "Strong passwords are one of the simplest and best security measures.",
    q6: "Open source licenses usually allow users to study, modify, and share code."
  };

  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);

    if (selected && selected.value === answers[key]) {
      score++;
      feedback.push(`<p>✅ ${key.toUpperCase()}: Correct</p>`);
    } else {
      feedback.push(`<p>❌ ${key.toUpperCase()}: ${explanations[key]}</p>`);
    }
  }

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p>Your score is ${score} out of 6</p>
    ${feedback.join("")}
  `;
}
