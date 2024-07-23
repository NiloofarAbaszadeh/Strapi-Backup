'use strict';

/**
 * external-agent controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::external-agent.external-agent');
