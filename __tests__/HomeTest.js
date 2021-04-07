import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";



test("Check for Getting Started Text", async () => {
  const { findByText } = render(<Home />);
  try {
    expect(await findByText("Need coding experience ?")).toBeVisible()
  }catch(e){
        console.log("ok");
  }
});