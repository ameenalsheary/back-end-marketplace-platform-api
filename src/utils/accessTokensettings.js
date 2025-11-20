const accessTokensettings = (maxAge) => {
  return {
    httpOnly: true, // Prevents client-side JavaScript access
    secure: process.env.MODE_ENV === "production", // HTTPS only in production
    sameSite: process.env.MODE_ENV === "production" ? "None" : "Lax", // Cross-site requests allowed
    domain: process.env.MODE_ENV === "production" ? `.${process.env.FRONT_END_DOMAIN}` : undefined, // Allow cookie on all subdomains
    path: "/", // send cookie on all routes
    maxAge,
  }
}

module.exports = accessTokensettings;
