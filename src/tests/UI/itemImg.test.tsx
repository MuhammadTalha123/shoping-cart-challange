import React from "react";
import { render } from "@testing-library/react";
import { ItemImg } from "../../components/ItemImg";

test("It should render the img", async () => {
  const imgSrc =
    "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024";
  const elem = render(<ItemImg img={imgSrc} />);
  expect(elem.baseElement).toBeVisible();
});
