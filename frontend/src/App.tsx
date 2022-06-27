import { ThemeProvider } from "@mui/material";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { useSettings } from "./hooks/useSettings";
import Authentication from "./pages/Authentication";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { paths } from "./paths";
import { createTheme } from "./theme";

function App() {
  const { settings } = useSettings();

  // prettier-ignore
  return (
    <ThemeProvider
      theme={createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        mode: settings.theme,
      })}
    >
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path={paths.authentication.root} element={<Authentication.Main />}>
            <Route index element={<Navigate to={paths.authentication.signIn} replace={true} />} />
            <Route path={paths.authentication.signIn} element={<Authentication.SignIn />} />
            <Route path={paths.authentication.signUp} element={<Authentication.SignUp />} />
          </Route>
          <Route path={paths.dashboard.root} element={<Dashboard.Main />}>
            <Route index element={<Navigate to={paths.dashboard.overview} replace={true} />} />
            <Route path={paths.dashboard.overview} element={<Dashboard.Overview />} />
            <Route path={paths.dashboard.analytics} element={<Dashboard.Analytics />} />
            <Route path={paths.dashboard.finance} element={<Dashboard.Finance />} />
            <Route path={paths.dashboard.logistics} element={<Dashboard.Logistics />} />
            <Route path={paths.dashboard.account} element={<Dashboard.Account />} />
            <Route path={paths.dashboard.customers.root}>
              <Route index element={<Dashboard.Customers.List />} />
              <Route path={paths.dashboard.customers.id}>
                <Route index element={<Dashboard.Customers.Id.Details />} />
                <Route path={paths.dashboard.customers.edit} element={<Dashboard.Customers.Id.Edit />} />
              </Route>
            </Route>
            <Route path={paths.dashboard.products.root}>
              <Route index element={<Dashboard.Products.List />} />
              <Route path={paths.dashboard.products.create} element={<Dashboard.Products.Create />} />
            </Route>
            <Route path={paths.dashboard.orders.root}>
              <Route index element={<Dashboard.Orders.List />} />
              <Route path={paths.dashboard.orders.id}>
                <Route index element={<Dashboard.Orders.Id.Details />} />
              </Route>
            </Route>
            <Route path={paths.dashboard.invoices.root}>
              <Route index element={<Dashboard.Invoices.List />} />
              <Route path={paths.dashboard.invoices.id}>
                <Route index element={<Dashboard.Invoices.Id.Details />} />
              </Route>
            </Route>
            <Route path={paths.dashboard.jobs.root}>
              <Route index element={<Dashboard.Jobs.Browse />} />
              <Route path={paths.dashboard.jobs.companies}>
                <Route path={paths.dashboard.jobs.id} element={<Dashboard.Jobs.Companies.Details />} />
              </Route>
              <Route path={paths.dashboard.jobs.create} element={<Dashboard.Jobs.Create />} />
            </Route>
            <Route path={paths.dashboard.socialMedia.root}>
              <Route index element={<Dashboard.SocialMedia.Feed />} />
              <Route path={paths.dashboard.socialMedia.profile} element={<Dashboard.SocialMedia.Profile />} />
              <Route path={paths.dashboard.socialMedia.feed} element={<Dashboard.SocialMedia.Feed />} />
            </Route>
            <Route path={paths.dashboard.kanban} element={<Dashboard.Kanban />} />
            <Route path={paths.dashboard.mail} element={<Dashboard.Mail />} />
            <Route path={paths.dashboard.chat} element={<Dashboard.Chat />} />
            <Route path={paths.dashboard.calendar} element={<Dashboard.Calendar />} />
            <Route path={paths.dashboard.pricing} element={<Dashboard.Pricing />} />
          </Route>
          <Route path={paths.blog.root}>
            <Route index element={<Navigate to={paths.blog.posts.root} replace={true} />} />
            <Route path={paths.blog.posts.root}>
              <Route index element={<Navigate to={paths.blog.posts.root} replace={true} />} />
              <Route path={paths.blog.posts.root} element={<Blog.List />} />
              <Route path={paths.blog.posts.id} element={<Blog.Details />} />
              <Route path={paths.blog.posts.create} element={<Blog.Create />} />
            </Route>
          </Route>
          <Route path={paths.checkout} element={<Checkout />} />
          <Route path={paths.contact} element={<Contact />} />
          <Route path={paths.error.root}>
            <Route index element={<Navigate to={paths.error[404]} replace={true} />} />
            <Route path={paths.error[401]} element={<Error.AuthorizationRequired />} />
            <Route path={paths.error[404]} element={<Error.NotFound />} />
            <Route path={paths.error[500]} element={<Error.ServerError />} />
          </Route>
          <Route path="*" element={<Error.NotFound />} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
