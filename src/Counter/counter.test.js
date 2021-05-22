import { shallow } from "enzyme";

import Counter from "./counter";

function setup() {
  return shallow(<Counter />);
}

const findBySelector = (wrapper, selector) => wrapper.find(selector);

test("render without error", () => {
  const wrapper = setup();
  const appComponent = findBySelector(wrapper, "[data-test='counter-app']");

  expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  const wrapper = setup();
  const button = findBySelector(wrapper, "[data-test='increment-button']");
  expect(button.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setup();
  const counterDisplay = findBySelector(
    wrapper,
    "[data-test='counter-display']"
  );
  expect(counterDisplay.length).toBe(1);
});

test("render counter display starts at 0", () => {
  const wrapper = setup();
  const count = findBySelector(wrapper, "[data-test='count']").text();
  expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
  const wrapper = setup();
  let button = findBySelector(wrapper, "[data-test='increment-button']");
  button.simulate("click");

  button = findBySelector(wrapper, "[data-test='increment-button']");
  button.simulate("click");

  button = findBySelector(wrapper, "[data-test='increment-button']");
  button.simulate("click");

  const count = findBySelector(wrapper, "[data-test='count']").text();
  expect(count).toBe("3");
});
