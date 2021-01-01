import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["links", "template"];

  connect() {
    this.wrapperClass = this.data.get("wrapperClass") || "nested-fields";
    console.log(this.wrapperClass);
  }

  add_association(event) {
    event.preventDefault();

    var content = this.templateTarget.innerHTML.replace(
      /NEW_RECORD/g,
      new Date().getTime()
    );
    this.linksTarget.insertAdjacentHTML("beforebegin", content);
  }
}
