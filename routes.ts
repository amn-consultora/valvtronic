// An array of routes that are accesible to the public
// These routes do not require authentication
// @type {string[]}
export const publicRoutes = [
    "/",
    "/contacto",
    "/ctv",
    "/nosotros",
    "/productos",
    "/productos/accesorios",
    "/productos/actuadores",
    "/productos/valvulas",
    "/productos/valvulas/**",
    "/servicios",
];

// An array of routes that are used for authentication
// These routes will redirect logged in users to /settings
// @type {string[]}
export const privateRoutes = [
    "/login",
    "/registro"
];

export const adminRoutes = [
    "/admin",
    "/admin/administrar-clientes",
];

/**  The prefix for API authentication routes
    Routes that start with this prefix are used for API authentication purposes
    @type {string}
*/
export const apiAuthPrefix:string = "/api/auth";

// The default redirect path after logging in
// @type {string}
// export const DEFAULT_LOGIN_REDIRECT = '/settings';
export const DEFAULT_LOGIN_REDIRECT = '/';

