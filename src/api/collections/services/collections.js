'use strict';

/**
 * collections service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::collections.collections');
