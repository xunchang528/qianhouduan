import gasp from "gasp";
import { gsap } from "gsap";

class InOutAnimation {
  constructor(doName) {
    this.dom = doName
  }

  comeIn(tween) {
    tween = tween || gasp.timeline()
    tween.to(this.dom, {
      duration:0, display: "none", opacity: 0, x:0, y:40
    })
    tween.to(this.dom, {
      duration:1, display: "flex", opacity: 1, x:0, y:0
    })
  }

  comeOut(tween) {
    tween = tween || gasp.timeline()
    tween.to(this.dom, {
      duration:0, display: "flex", opacity: 1, x:0, y:0
    })
    tween.to(this.dom, {
      duration:1, display: "none", opacity: 0, x:0, y:-40
    })
  }
}

const login = new InOutAnimation(".login")
const register = new InOutAnimation(".register")
const welcome = new InOutAnimation(".welcome")

function showLogin() {
  console.log("showLogin");
  const tween = gsap.timeline({ delay: 0.1 })
  register.comeOut(tween)
  login.comeIn(tween)
}

function showRegister() {
  console.log("showRegister");
  const tween = gsap.timeline({ delay: 0.1 })
  login.comeOut(tween)
  register.comeIn(tween)
}

function showWelcom() {
  console.log("showWelcom");
  const tween = gsap.timeline({ delay: 0.1 })
  login.comeOut(tween)
  welcome.comeIn(tween)
}

export {
  InOutAnimation,
  showLogin,
  showRegister,
  showWelcom
}
