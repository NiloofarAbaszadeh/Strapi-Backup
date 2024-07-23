'use strict';

/**
 * call-us service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::call-us.call-us');
