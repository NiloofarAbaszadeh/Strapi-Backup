'use strict';

/**
 * call-us router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::call-us.call-us');
