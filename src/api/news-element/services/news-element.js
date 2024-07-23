'use strict';

/**
 * news-element service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-element.news-element');
