'use strict';

/**
 * external-agent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::external-agent.external-agent');
