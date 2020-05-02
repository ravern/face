export default function unfocus() {
  if (process.browser) {
    const styleText =
      "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";

    const unfocusElement = document.createElement("style");

    document.getElementsByTagName("head")[0].appendChild(unfocusElement);

    document.addEventListener("mousedown", () => {
      unfocusElement.innerHTML = styleText + "}";
    });

    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 9) {
        unfocusElement.innerHTML = "";
      }
    });
  }
}
