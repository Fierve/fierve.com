const isProduction = process.env.NODE_ENV === "production";

export const config = {
  isProduction,
  isDev: !isProduction,

  site: {
    domain: "fierve.com",
    domainWithProtocol: "https://fierve.com",
    companyName: "Fierve s.r.o",
    yearFounded: 2021,
    gitHub: "https://github.com/fierve/fierve.com",
  },
} as const;
