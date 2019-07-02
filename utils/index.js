
/**
 * A function to load all high level middlewares
 * @param {Object} middlewares
 * @param {Object} router
 * @returns {Void} no return value
 */
export const middlewareLoader = (middlewares, router) => {
  for (const middleware of middlewares) {
    middleware(router);
  }
};

/**
 * A function to load all routes
 * @param {Object} routes
 * @param {Object} router
 * @returns {Void} null
 */
export const routesLoader = (routes, router) => {
  for (const route of routes) {
    const { path, handlers, method } = route;
    (router)[method](path, handlers);
  }
};
