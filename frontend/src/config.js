// Optional split deploy (Vercel + API): set REACT_APP_API_URL to the API origin, no trailing slash.
// Same-origin deploy (e.g. Render one service): leave unset; API uses relative /api, socket uses page origin.
export const getApiBaseUrl = () => {
  const base = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");
  return base;
};

// Socket: dev (CRA on :3000) must target :5000. Same host in production (e.g. Render) uses window.location.origin.
export const getSocketUrl = () => {
  const fromEnv =
    process.env.REACT_APP_SOCKET_URL || process.env.REACT_APP_API_URL;
  if (fromEnv) return fromEnv.replace(/\/$/, "");
  if (typeof window !== "undefined" && window.location) {
    const { hostname, origin } = window.location;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return "http://localhost:5000";
    }
    return origin;
  }
  return "http://localhost:5000";
};
