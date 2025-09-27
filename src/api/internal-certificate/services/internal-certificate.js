'use strict';

/**
 * internal-certificate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internal-certificate.internal-certificate');
