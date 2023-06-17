import { render } from "@testing-library/react"; //special function
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Test if the logo appears on rendering of Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter> // we need to render it on jsdom
  );
  // console.log(header);
  const logo = header.getAllByTestId("logo");
  // console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter> // we need to render it on jsdom
  );
  // console.log(header);
  const onlineStatus = header.getByTestId("online-status");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("🟢");
});

test("Cart should have 0 items on loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter> // we need to render it on jsdom
  );
  // console.log(header);
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart - 0");
});
