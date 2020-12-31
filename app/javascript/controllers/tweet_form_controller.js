import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["body", "characterCount"];

  initialize() {
    // console.log(this.bodyTarget);
    // console.log(this.characterCountTarget);
    this.update();
  }

  update() {
    var count = this.bodyTarget.value.length;
    if (count == 1) {
      var message = "1 character";
    } else {
      var message = `${count} characters`;
    }

    this.characterCountTarget.textContent = message;

    if (count > 140) {
      this.characterCountTarget.classList.add("text-danger");
    } else {
      this.characterCountTarget.classList.remove("text-danger");
    }
  }
}
