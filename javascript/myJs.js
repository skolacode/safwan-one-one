const addMinusFunc = (operationType) => {
  const counter = document.getElementById("counter")

  const currentValue = Number(counter.innerText)

  if(operationType === "minus") {
    counter.innerText = currentValue - 1
  }
  else {
    counter.innerText = currentValue + 1
  }
}

const addStyle = () => {
  const style = document.getElementById("counter")

  const className = style.getAttribute('class')

  let appendClass = className+" makeThingBig"

  style.setAttribute("class", appendClass)
}

const doAnimation = () => {
  const style = document.getElementById("counter")

  const className = style.getAttribute('class')

  let appendClass = className+" addAnimation"

  console.log('class: ', className)    
  
  style.setAttribute("class", appendClass)
}