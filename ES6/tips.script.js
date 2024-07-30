const tips = [
  "لا تؤجل عمل اليوم إلي الغد",
  "ذاكر بجد",
  " تناول طعام صحي",
  "نم مبكرا",
  "ساعد والدتك",
  "أحسن لجارك",
  "صل رحمك",
  "الإبتسام في وجه أخيك صدقة",
  "إن أستطعت أن تنفع أخاك فلتفعل",
  "رتب أولوياتك"
];

function* tipGenerator(tipsArray) {
  let index = 0;
  while (true) {
    yield tipsArray[index % tipsArray.length];
    index++;
  }
}

const tipGen = tipGenerator(tips);
const tipContainer = document.getElementById('tip');
const showAllTipsButton = document.querySelector('.show-all-tips');
const showTipsIntervalButton = document.querySelector('.show-tips-interval');

let intervalId = null;

// Display all tips using for...of loop
showAllTipsButton.addEventListener('click', () => {
  tipContainer.innerHTML = '';
  for (const tip of tips) {
    const tipElement = document.createElement('p');
    tipElement.textContent = tip;
    tipContainer.appendChild(tipElement);
  }
  if (intervalId) clearInterval(intervalId);
});

// Display a tip every 3 seconds using setInterval
showTipsIntervalButton.addEventListener('click', () => {
  if (intervalId) clearInterval(intervalId); // Clear any existing interval
  tipContainer.innerHTML = '';
  intervalId = setInterval(() => {
    const nextTip = tipGen.next().value;
    tipContainer.textContent = nextTip;
  }, 3000);
});
