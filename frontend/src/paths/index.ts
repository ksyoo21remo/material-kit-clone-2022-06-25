export const paths = {
  authentication: {
    root: "authentication",
    signIn: "sign-in",
    signUp: "sign-up",
  },
  dashboard: {
    root: "dashboard",
    overview: "overview",
    analytics: "analytics",
    finance: "finance",
    logistics: "logistics",
    account: "account",
    customers: {
      root: "customers",
      id: ":id",
      edit: "edit",
    },
    products: {
      root: "products",
      create: "create",
    },
    orders: {
      root: "orders",
      id: ":id",
    },
    invoices: {
      root: "invoices",
      id: ":id",
    },
    jobs: {
      root: "jobs",
      companies: "companies",
      id: ":id",
      create: "create",
    },
    socialMedia: {
      root: "social-media",
      profile: "profile",
      feed: "feed",
    },
    kanban: "kanban",
    mail: "mail",
    chat: "chat",
    calendar: "calendar",
    pricing: "pricing",
  },
  blog: {
    root: "blog",
    posts: {
      root: "posts",
      id: ":id",
      create: "create",
    },
  },
  checkout: "checkout",
  contact: "contact",
  error: {
    root: "error",
    401: "401",
    404: "404",
    500: "500",
  },
};
