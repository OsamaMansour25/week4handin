
import { SERVER_URL } from "../../settings.js"

export function initFindCar() {
  document.getElementById("result").innerText = ""
  document.getElementById("btn").addEventListener("click", findCar)
}


export async function findCar() {
  document.getElementById("error").innerText = ""
  const id = document.getElementById("car-id").value

  try {
    const car = await fetch(SERVER_URL + "/" + id)
      .then(res => {
        if (!res.ok) {
          throw new Error("Car not Found")
        }
        return res.json()
      })

    document.getElementById("result").innerText = JSON.stringify(car, null, 3)
  } catch(e){
    document.getElementById("error").innerText = e.message
  }
}

