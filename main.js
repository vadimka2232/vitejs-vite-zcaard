document.addEventListener('DOMContentLoaded', function () {
  const EncodeButton = document.querySelector('.main_button');
  const CopyButton = document.querySelector('.main_copy');
  const TargetTextarea = document.querySelector('.main_textarea');
  const TargetResult = document.querySelector('.main_result');

  EncodeButton.addEventListener('click', EncoderText);
  CopyButton.addEventListener('click', copyToClipboard);

  function EncoderText() {
    const AreaValue = TargetTextarea.value;
    let resultStr = '';
    let count = 1;

    if (!/^[A-Z]+$/.test(AreaValue)) {
      alert('Ошибка: только заглавные латинские буквы допустимы.');
      return;
    }

    for (let i = 0; i < AreaValue.length; i++) {
      if (AreaValue[i] === AreaValue[i + 1]) {
        count++;
      } else {
        resultStr += count > 1 ? count + AreaValue[i] : AreaValue[i];
        count = 1;
      }
    }
    TargetResult.innerText = resultStr;
  }
  function copyToClipboard() {
    const resultText = TargetResult.innerText;

    if (resultText) {
      navigator.clipboard
        .writeText(resultText)
        .then(() => {
          alert('Текст скопирован в буфер обмена');
        })
        .catch((err) => {
          console.error('Ошибка при копировании: ', err);
        });
    } else {
      alert('Нет текста для копирования');
    }
  }
});
