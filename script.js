function updateDate() {
  const now = new Date();
  const date = now.toLocaleDateString();
  document.getElementById("date").textContent = date;
}

function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");
  const ms = String(now.getMilliseconds()).padStart(3, "0");

  document.getElementById("time").textContent =
    `${h}:${m}:${s}.${ms}`;
}

updateDate();
setInterval(updateTime, 1);
