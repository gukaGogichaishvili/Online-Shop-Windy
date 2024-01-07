import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./shared/Header.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import { FetchProvider } from "./context/FetchContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import { RatingProvider } from "./context/RatingContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { ProfileToggleProvider } from "./context/ToggleProfilePageContext.jsx";
import "./theme.min.css";
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FetchProvider>
          <RatingProvider>
            <ShoppingCartProvider>
              <FilterProvider>
                <WishlistProvider>
                  <ProfileToggleProvider>
                    <main className="page-wrapper">
                      <Header />
                      <App />
                      {/*<Footer />*/}
                    </main>
                  </ProfileToggleProvider>
                </WishlistProvider>
              </FilterProvider>
            </ShoppingCartProvider>
          </RatingProvider>
        </FetchProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
