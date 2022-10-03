import { showLogin, showRegister } from "../components/inOutAnimation";

class ToSomeWhere {
  static toRegisterBtn = document.querySelector(".to-register-btn")
  static toLoginBtn = document.querySelector(".to-login-btn")


  static init() {
    ToSomeWhere._addListener(ToSomeWhere.toRegisterBtn, "click", showRegister)
    ToSomeWhere._addListener(ToSomeWhere.toLoginBtn, "click", showLogin)
  }

  static _addListener(btn, type, callback) {
    btn.addEventListener(type || 'click', ()=> {
      callback()
    })
  }
}

export { ToSomeWhere }