export const SizeOfElement = (element) => {
  if (element) {
    let { width, height, top, right, bottom, left } =
      element.getBoundingClientRect();
    let parentHeight = document.body.offsetHeight;
    let parentWidth = document.body.offsetWidth;
    let parentFullHeight = document.body.scrollHeight;
    let parentFullWidth = document.body.scrollWidth;

    return {
      width: width,
      height: height,
      elementTop: top,
      elementBottom: parentHeight - bottom,
      elementRight: parentWidth - right,
      elementLeft: left,
      screenHeight: parentHeight,
      screenWidth: parentWidth,
      htmlWidth: parentFullWidth,
      htmlHeight: parentFullHeight,
    };
  }
};
export const scrollView = {
  async top() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  async left(Number) {
    window.scrollTo({ left: Number, behavior: "smooth" });
  },
  async right(Number) {
    window.scrollTo({ right: Number, behavior: "smooth" });
  },
  async elementRight(element, Number) {
    element.scrollLeft = Number;
  },
};

export const maxLengthText = (text, length) => {
  if (!text) return "";
  let maxLength =
    text.slice(0, length) + (text.length < length + 1 ? "" : "...");
  return maxLength;
};