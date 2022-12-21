function addWordBoxesWithLetters(wordContainer) {
  for (let i = 0; i < 36; i++) {
    let letters = {
      0: "G",
      6: "R",
      8: "G",
      12: "E",
      13: "N",
      14: "E",
      15: "R",
      16: "G",
      17: "Y",
      18: "E",
      20: "N",
      22: "E",
      24: "N",
      26: "R",
      28: "N",
      32: "E",
      33: "Y",
      34: "E",
    };
    if (letters[i] != undefined)
      wordContainer.append(`
                <div class="wordBox">${letters[i]}</div>
              `);
    else
      wordContainer.append(`
                <div class="wordBox hiddenBox"></div>
              `);
  }
}
function shuffleLetters(letters) {
  for (let i = 0; i < letters.length; i++) {
    let j = Math.floor(Math.random() * letters.length);
    temp = letters[i];
    letters[i] = letters[j];
    letters[j] = temp;
  }
  return letters;
}
function placeLetters(letters) {
  letters = shuffleLetters(letters);
  for (let i = 0; i < letters.length; i++) {
    $(`#letterContainer > p:nth-of-type(${i + 1})`).html(letters[i]);
  }
}
function checkIsSelected() {
  let flag = false;
  $("#letterContainer > p").each(function () {
    if ($(this).hasClass("selected")) flag = true;
  });
  return flag;
}
function openWord(word, openedWords) {
  openedWords.push(word);
  if (word == "GREEN") {
    $(".wordBox").each(function (i) {
      if (i == 0 || i == 6 || i == 12 || i == 18 || i == 24) {
        $(this).addClass("opened");
        $(this).animate(
          { "background-color": "#122A5F", color: "white" },
          1500
        );
      }
    });
  } else if (word == "ENERGY") {
    $(".wordBox").each(function (i) {
      if (i >= 12 && i <= 17) {
        $(this).addClass("opened");
        $(this).animate(
          { "background-color": "#122A5F", color: "white" },
          1500
        );
      }
    });
  } else if (word == "GENRE") {
    $(".wordBox").each(function (i) {
      if (i == 8 || i == 14 || i == 20 || i == 26 || i == 32) {
        $(this).addClass("opened");
        $(this).animate(
          { "background-color": "#122A5F", color: "white" },
          1500
        );
      }
    });
  } else if (word == "GENE") {
    $(".wordBox").each(function (i) {
      if (i == 16 || i == 22 || i == 28 || i == 34) {
        $(this).addClass("opened");
        $(this).animate(
          { "background-color": "#122A5F", color: "white" },
          1500
        );
      }
    });
  } else if (word == "EYE") {
    $(".wordBox").each(function (i) {
      if (i == 32 || i == 33 || i == 34) {
        $(this).addClass("opened");

        $(this).animate(
          { "background-color": "#122A5F", color: "white" },
          1500
        );
      }
    });
  }
}
function pulsateOpenedWord(word) {
  if (word == "GREEN") {
    $(".wordBox").each(function (i) {
      if (i == 0 || i == 6 || i == 12 || i == 18 || i == 24)
        $(this).effect("pulsate", "swing", 700);
    });
  } else if (word == "ENERGY") {
    $(".wordBox").each(function (i) {
      if (i >= 12 && i <= 17) $(this).effect("pulsate", "swing", 700);
    });
  } else if (word == "GENRE") {
    $(".wordBox").each(function (i) {
      if (i == 8 || i == 14 || i == 20 || i == 26 || i == 32)
        $(this).effect("pulsate", "swing", 700);
    });
  } else if (word == "GENE") {
    $(".wordBox").each(function (i) {
      if (i == 16 || i == 22 || i == 28 || i == 34)
        $(this).effect("pulsate", "swing", 700);
    });
  } else if (word == "EYE") {
    $(".wordBox").each(function (i) {
      if (i == 32 || i == 33 || i == 34)
        $(this).effect("pulsate", "swing", 700);
    });
  }
}
