'use strict';

/**
 * employee-notice service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-notice.employee-notice');
