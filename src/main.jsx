import { createRoot } from "react-dom/client";
import { MainLayout } from "./layouts/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainLayout></MainLayout>
  </Provider>
);
