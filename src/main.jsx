import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store/store.js";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UseOpen from "./Context/useOpen.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <UseOpen>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </QueryClientProvider>
      </AuthProvider>
    </UseOpen>
  </React.StrictMode>
);
