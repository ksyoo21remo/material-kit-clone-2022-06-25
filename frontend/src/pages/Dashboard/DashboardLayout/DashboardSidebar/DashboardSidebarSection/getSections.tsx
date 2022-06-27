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

const getSections = (t: TFunction): Section[] => [
  {
    title: t("General"),
    items: [
      {
        title: t("Overview"),
        path: "/dashboard",
        icon: <HomeIcon fontSize="small" />,
      },
      {
        title: t("Analytics"),
        path: "/dashboard/analytics",
        icon: <ChartBarIcon fontSize="small" />,
      },
      {
        title: t("Finance"),
        path: "/dashboard/finance",
        icon: <ChartPieIcon fontSize="small" />,
      },
      {
        title: t("Logistics"),
        path: "/dashboard/logistics",
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
        path: "/dashboard/account",
        icon: <UserCircleIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("Management"),
    items: [
      {
        title: t("Customers"),
        path: "/dashboard/customers",
        icon: <UserIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: "/dashboard/customers",
          },
          {
            title: t("Details"),
            path: "/dashboard/customers/1",
          },
          {
            title: t("Edit"),
            path: "/dashboard/customers/1/edit",
          },
        ],
      },
      {
        title: t("Products"),
        path: "/dashboard/products",
        icon: <ShoppingBagIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: "/dashboard/products",
          },
          {
            title: t("Create"),
            path: "/dashboard/products/new",
          },
        ],
      },
      {
        title: t("Orders"),
        icon: <ShoppingCartIcon fontSize="small" />,
        path: "/dashboard/orders",
        children: [
          {
            title: t("List"),
            path: "/dashboard/orders",
          },
          {
            title: t("Details"),
            path: "/dashboard/orders/1",
          },
        ],
      },
      {
        title: t("Invoices"),
        path: "/dashboard/invoices",
        icon: <ReceiptTaxIcon fontSize="small" />,
        children: [
          {
            title: t("List"),
            path: "/dashboard/invoices",
          },
          {
            title: t("Details"),
            path: "/dashboard/invoices/1",
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
        path: "/dashboard/jobs",
        icon: <OfficeBuildingIcon fontSize="small" />,
        children: [
          {
            title: t("Browse"),
            path: "/dashboard/jobs",
          },
          {
            title: t("Details"),
            path: "/dashboard/jobs/companies/1",
          },
          {
            title: t("Create"),
            path: "/dashboard/jobs/new",
          },
        ],
      },
      {
        title: t("Social Media"),
        path: "/dashboard/social",
        icon: <ShareIcon fontSize="small" />,
        children: [
          {
            title: t("Profile"),
            path: "/dashboard/social/profile",
          },
          {
            title: t("Feed"),
            path: "/dashboard/social/feed",
          },
        ],
      },
      {
        title: t("Blog"),
        path: "/blog",
        icon: <NewspaperIcon fontSize="small" />,
        children: [
          {
            title: t("Post List"),
            path: "/blog",
          },
          {
            title: t("Post Details"),
            path: "/blog/1",
          },
          {
            title: t("Post Create"),
            path: "/blog/new",
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
        path: "/dashboard/kanban",
        icon: <ClipboardListIcon fontSize="small" />,
      },
      {
        title: t("Mail"),
        path: "/dashboard/mail",
        icon: <MailIcon fontSize="small" />,
      },
      {
        title: t("Chat"),
        path: "/dashboard/chat",
        icon: <ChatAlt2Icon fontSize="small" />,
      },
      {
        title: t("Calendar"),
        path: "/dashboard/calendar",
        icon: <CalendarIcon fontSize="small" />,
      },
    ],
  },
  {
    title: t("Pages"),
    items: [
      {
        title: t("Auth"),
        path: "/authentication",
        icon: <LockClosedIcon fontSize="small" />,
        children: [
          {
            title: t("Register"),
            path: "/authentication/register?disableGuard=true",
          },
          {
            title: t("Login"),
            path: "/authentication/login?disableGuard=true",
          },
        ],
      },
      {
        title: t("Pricing"),
        path: "/dashboard/pricing",
        icon: <CreditCardIcon fontSize="small" />,
      },
      {
        title: t("Checkout"),
        path: "/checkout",
        icon: <CashIcon fontSize="small" />,
      },
      {
        title: t("Contact"),
        path: "/contact",
        icon: <MailOpenIcon fontSize="small" />,
      },
      {
        title: t("Error"),
        path: "/error",
        icon: <XCircleIcon fontSize="small" />,
        children: [
          {
            title: "401",
            path: "/401",
          },
          {
            title: "404",
            path: "/404",
          },
          {
            title: "500",
            path: "/500",
          },
        ],
      },
    ],
  },
];

export default getSections;
