import { ReactElement } from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { store } from "app/store";

export const withProviders = (app: () => ReactElement) => () => {
  return (
    <HashRouter>
      <Provider store={store}>{app()}</Provider>
    </HashRouter>
  );
};
