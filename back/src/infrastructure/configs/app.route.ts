/**
 * Application routes with its version
 */
const rootApi = '/api';

const pokemonRoot = '/pokemon';

export const routesV1 = {
  version: `${rootApi}/v1`,
  pokemon: {
    root: pokemonRoot,
  },
};
