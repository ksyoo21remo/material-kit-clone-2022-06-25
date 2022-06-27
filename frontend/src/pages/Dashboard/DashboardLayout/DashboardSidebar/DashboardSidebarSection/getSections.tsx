import { Chip, Typography } from "@mui/material";
import React from "react";
import { TFunction } from "react-i18next";
import { Section } from "./types";
import { Calendar as CalendarIcon } from "../../../../../icons/Calendar";
import { Cash as CashIcon } from "../../../../../icons/Cash";
import { ChartBar as ChartBarIcon } from "../../../../../icons/ChartBar";
import { ChartPie as ChartPieIcon } from "../../../../../icons/ChartPie";
import { ChatAlt2 as ChatAlt2Icon } from "../../../../../icons/ChatAlt2";
import { ClipboardList as ClipboardListIcon } from "../../../../../icons/ClipboardList";
import { CreditCard as CreditCardIcon } from "../../../../../icons/CreditCard";
import { Home as HomeIcon } from "../../../../../icons/Home";
import { LockClosed as LockClosedIcon } from "../../../../../icons/LockClosed";
import { Mail as MailIcon } from "../../../../../icons/Mail";
import { MailOpen as MailOpenIcon } from "../../../../../icons/MailOpen";
import { Newspaper as NewspaperIcon } from "../../../../../icons/Newspaper";
import { OfficeBuilding as OfficeBuildingIcon } from "../../../../../icons/OfficeBuilding";
import { Share as ShareIcon } from "../../../../../icons/Share";
import { ReceiptTax as ReceiptTaxIcon } from "../../../../../icons/ReceiptTax";
import { ShoppingBag as ShoppingBagIcon } from "../../../../../icons/ShoppingBag";
import { ShoppingCart as ShoppingCartIcon } from "../../../../../icons/ShoppingCart";
import { Truck as TruckIcon } from "../../../../../icons/Truck";
import { User as UserIcon } from "../../../../../icons/User";
import { UserCircle as UserCircleIcon } from "../../../../../icons/UserCircle";
import { XCircle as XCircleIcon } from "../../../../../icons/XCircle";
import { paths } from "../../../../../paths";

const getSections = (t: TFunction): Section[] => [
  {
    title: t("General"),
    items: [
      {
        title: t("Overview"),
        path: `/${paths.dashboard.root}/${paths.dashboard.overview}`,
        icon: <HomeIcon fontSize="small" />,
      },
      {
        title: t("Analytics"),
        path: `/${paths.dashboard.root}/${paths.dashboard.analytics}`,
        icon: <ChartBarIcon fontSize="small" />,
      },
      {
        title: t("Finance"),
        path: `/${paths.dashboard.root}/${paths.dashboard.finance}`,
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: t("Logistics"),
        path: `/${paths.dashboard.root}/${paths.dashboard.logistics}`,
        icon: <TruckIcon fontSize="small" />,
        chip: (
          <Chip
            color="secondary"
            label={
              <Typography
                sx={{
                  flexShrink: 1,
                  fontSize: "10px",
                  fontWeight: "600",
                }}
              >
                NEW
              </Typography>
            }
            size="small"
          />
        ),
      },
      {
        title: t("Account"),
        path: `/${paths.dashboard.root}/${paths.dashboard.account}`,
        icon: <UserCircleIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("Management"),
    items: [
      {
        title: t("Customers"),
        path: `/${paths.dashboard.root}/${paths.dashboard.customers.root}`,
        icon: <UserIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: `/${paths.dashboard.root}/${paths.dashboard.customers.root}`,
          },
          {
            title: t("Details"),
            path: `/${paths.dashboard.root}/${paths.dashboard.customers.root}/1234`,
          },
          {
            title: t("Edit"),
            path: `/${paths.dashboard.root}/${paths.dashboard.customers.root}/1234/${paths.dashboard.customers.edit}`,
          },
        ],
      },
      {
        title: t("Products"),
        path: `/${paths.dashboard.root}/${paths.dashboard.products.root}`,
        icon: <ShoppingBagIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: `/${paths.dashboard.root}/${paths.dashboard.products.root}`,
          },
          {
            title: t("Create"),
            path: `/${paths.dashboard.root}/${paths.dashboard.products.root}/${paths.dashboard.products.create}`,
          },
        ],
      },
      {
        title: t("Orders"),
        icon: <ShoppingCartIcon fontSize="small" />,
        path: `/${paths.dashboard.root}/${paths.dashboard.orders.root}`,
        children: [
          {
            title: t("List"),
            path: `/${paths.dashboard.root}/${paths.dashboard.orders.root}`,
          },
          {
            title: t("Details"),
            path: `/${paths.dashboard.root}/${paths.dashboard.orders.root}/5678`,
          },
        ],
      },
      {
        title: t("Invoices"),
        path: `/${paths.dashboard.root}/${paths.dashboard.invoices.root}`,
        icon: <ReceiptTaxIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: `/${paths.dashboard.root}/${paths.dashboard.invoices.root}`,
          },
          {
            title: t("Details"),
            path: `/${paths.dashboard.root}/${paths.dashboard.invoices.root}/9012`,
          },
        ],
      },
    ],
  },
  {
    title: t("Platforms"),
    items: [
      {
        title: t("Job Listings"),
        path: `/${paths.dashboard.root}/${paths.dashboard.jobs.root}`,
        icon: <OfficeBuildingIcon fontSize="small" />,
        children: [
          {
            title: t("Browse"),
            path: `/${paths.dashboard.root}/${paths.dashboard.jobs.root}`,
          },
          {
            title: t("Details"),
            path: `/${paths.dashboard.root}/${paths.dashboard.jobs.root}/${paths.dashboard.jobs.companies}/3456`,
          },
          {
            title: t("Create"),
            path: `/${paths.dashboard.root}/${paths.dashboard.jobs.root}/${paths.dashboard.jobs.create}`,
          },
        ],
      },
      {
        title: t("Social Media"),
        path: `/${paths.dashboard.root}/${paths.dashboard.socialMedia.root}`,
        icon: <ShareIcon fontSize="small" />,
        children: [
          {
            title: t("Profile"),
            path: `/${paths.dashboard.root}/${paths.dashboard.socialMedia.root}/${paths.dashboard.socialMedia.profile}`,
          },
          {
            title: t("Feed"),
            path: `/${paths.dashboard.root}/${paths.dashboard.socialMedia.root}/${paths.dashboard.socialMedia.feed}`,
          },
        ],
      },
      {
        title: t("Blog"),
        path: `/${paths.blog.root}`,
        icon: <NewspaperIcon fontSize="small" />,
        children: [
          {
            title: t("Post List"),
            path: `/${paths.blog.root}/${paths.blog.posts.root}`,
          },
          {
            title: t("Post Details"),
            path: `/${paths.blog.root}/${paths.blog.posts.root}/7890`,
          },
          {
            title: t("Post Create"),
            path: `/${paths.blog.root}/${paths.blog.posts.root}/${paths.blog.posts.create}`,
          },
        ],
      },
    ],
  },
  {
    title: t("Apps"),
    items: [
      {
        title: t("Kanban"),
        path: `/${paths.dashboard.root}/${paths.dashboard.kanban}`,
        icon: <ClipboardListIcon fontSize="small" />,
      },
      {
        title: t("Mail"),
        path: `/${paths.dashboard.root}/${paths.dashboard.mail}`,
        icon: <MailIcon fontSize="small" />,
      },
      {
        title: t("Chat"),
        path: `/${paths.dashboard.root}/${paths.dashboard.chat}`,
        icon: <ChatAlt2Icon fontSize="small" />,
      },
      {
        title: t("Calendar"),
        path: `/${paths.dashboard.root}/${paths.dashboard.calendar}`,
        icon: <CalendarIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("Pages"),
    items: [
      {
        title: t("Auth"),
        path: `/${paths.authentication.root}`,
        icon: <LockClosedIcon fontSize="small" />,
        children: [
          {
            title: t("Register"),
            path: `/${paths.authentication.root}/${paths.authentication.signUp}?disableGuard=true`,
          },
          {
            title: t("Login"),
            path: `/${paths.authentication.root}/${paths.authentication.signIn}?disableGuard=true`,
          },
        ],
      },
      {
        title: t("Pricing"),
        path: `/${paths.dashboard.root}/${paths.dashboard.pricing}`,
        icon: <CreditCardIcon fontSize="small" />,
      },
      {
        title: t("Checkout"),
        path: `/${paths.checkout}`,
        icon: <CashIcon fontSize="small" />,
      },
      {
        title: t("Contact"),
        path: `/${paths.contact}`,
        icon: <MailOpenIcon fontSize="small" />,
      },
      {
        title: t("Error"),
        path: `/${paths.error.root}`,
        icon: <XCircleIcon fontSize="small" />,
        children: [
          {
            title: "401",
            path: `/${paths.error.root}/${paths.error[401]}`,
          },
          {
            title: "404",
            path: `/${paths.error.root}/${paths.error[404]}`,
          },
          {
            title: "500",
            path: `/${paths.error.root}/${paths.error[500]}`,
          },
        ],
      },
    ],
  },
];

export default getSections;
