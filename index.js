const sleep = (m) => new Promise((r) => setTimeout(r, m));

document.forms[0].addEventListener("submit", async (e) => {
  e.preventDefault();

  document.querySelector("button").textContent = "Sending...";
  document.querySelectorAll('input[type="text"]').forEach((el) => {
    el.disabled = true;
  });

  await sleep(1000);

  alert("Success!");

  document.querySelector("button").textContent = "Send";
  document.querySelectorAll('input[type="text"]').forEach((el) => {
    el.disabled = false;
  });

  e.target.reset();
});

document.querySelectorAll('input[type="text"]').forEach((el) => {
  el.addEventListener("keypress", function (e) {
    if (e.which == 13) {
      e.preventDefault();
      var nextInput = document.querySelectorAll(
        '[tabIndex="' + (this.tabIndex + 1) + '"]'
      );
      if (nextInput.length === 0) {
        nextInput = document.querySelectorAll('[tabIndex="1"]');
      }
      nextInput[0].focus();
    }
  });
});
