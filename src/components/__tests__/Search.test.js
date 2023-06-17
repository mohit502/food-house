import { render } from "@testing-library/react";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import { RESTAURANT_DATA } from "../../mocks/data";
import store from "../../utils/store";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA)
  })
})  

test("search result on home page", () => { 
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer =  body.getByTestId("shimmer");

  expect(shimmer).toBeInTheDocument();
  console.log(shimmer);

});

// import render
// provider import
// static router import
