$(function () {
  let timeLeft = [8, 23, 55, 41]
  let timeText = []

  const timer = setInterval(() => {
    timeLeft[3] -= 1

    const secTop = $(".sec .top")
    secTop.addClass("active")
    secTop.on("animationend", () => {
      secTop.removeClass("active")
    })

    if (timeLeft[3] === -1) {
      timeLeft[3] = 59
      timeLeft[2] -= 1
      const minTop = $(".min .top")
      minTop.addClass("active")
      minTop.on("animationend", () => {
        minTop.removeClass("active")
      })
    }
    if (timeLeft[2] === -1) {
      timeLeft[2] = 59
      timeLeft[1] -= 1
      const hourTop = $(".hour .top")
      hourTop.addClass("active")
      hourTop.on("animationend", () => {
        hourTop.removeClass("active")
      })
    }
    if (timeLeft[1] === -1) {
      timeLeft[1] = 23
      timeLeft[0] -= 1
      const dayTop = $(".day .top")
      dayTop.addClass("active")
      dayTop.on("animationend", () => {
        dayTop.removeClass("active")
      })
    }
    if (timeLeft.every(t => t === 0)) {
      clearInterval(timer)
    }

    timeLeft.forEach((t, i) => {
      timeText[i] = t > 9 ? t : "0" + t
    })
    $(".bot .digit").each((i, e) => {
      e.textContent = timeText[i]
    })
    $(".top .digit").each((i, e) => {
      e.textContent = timeText[i]
    })
    $(".back .digit").each((i, e) => {
      e.textContent = timeText[i]
    })
  }, 1000)
})
