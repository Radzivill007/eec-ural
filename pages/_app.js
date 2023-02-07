import React, { useEffect, useState } from "react";
import ThemeSettings from "../components/customizer/theme-settings";
import "../public/assets/scss/app.scss";
import { ToastContainer } from "react-toastify";
import MessengerCustomerChat from "react-messenger-customer-chat";
import CartContextProvider from "../helpers/cart/CartContext";
import { WishlistContextProvider } from "../helpers/wishlist/WishlistContext";
import FilterProvider from "../helpers/filter/FilterProvider";
import SettingProvider from "../helpers/theme-setting/SettingProvider";
import { CompareContextProvider } from "../helpers/Compare/CompareContext";
import { CurrencyContextProvider } from "../helpers/Currency/CurrencyContext";
import Helmet from "react-helmet";
// import "react-accessible-accordion/dist/fancy-example.css";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState();

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add("dark");
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader" />
        </div>
      ) : (
        <>
          <MessengerCustomerChat pageId="" appId="" htmlRef="" />
          <Helmet>
            <meta
              name="description"
              content="Проводим пусконаладочные работы на предприятиях РФ и Свердловской области, Екатеринбург с бесплатным выездом. Звоните: 8 (932) 115-90-00."
            />
            <title>Пусконаладочные работы на предприятиях РФ | ООО ЭПИК</title>
          </Helmet>
          <div>
            <SettingProvider>
              <CompareContextProvider>
                <CurrencyContextProvider>
                  <CartContextProvider>
                    <WishlistContextProvider>
                      <FilterProvider>
                        <Component {...pageProps} />
                      </FilterProvider>
                    </WishlistContextProvider>
                  </CartContextProvider>
                </CurrencyContextProvider>
                <ThemeSettings />
              </CompareContextProvider>
            </SettingProvider>
            <ToastContainer />
          </div>
        </>
      )}
    </>
  );
}
