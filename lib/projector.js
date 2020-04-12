'use strict';

let Lazy = require('lazy.js');

/**
 * Object Projector
 * @public
 * @constructor
 */
class Projector {

  /**
   * Takes only the properties provided
   * @public
   * @static
   * @param {Object} source
   * @param {Array<string>} properties
   * @param {Array<Array<string>>} translations
   * @returns {Object}
   */
  static only(source, properties, translations) {
    const object = new Lazy(source).pick(properties).toObject();
    if (typeof translations === 'object') {
      let translatedObject = {};
      const length = translations.length;

      for(let i=0; i<length; i += 1) {
        const [sourceKey, dtoKey] = translations[i];
        translatedObject[dtoKey] = object[sourceKey];
      }

      return translatedObject;
    }

    return object;
  }

  /**
   * Remove properties from source object
   * @public
   * @static
   * @param {Object} source
   * @param {Array<string>} properties
   * @returns {Object}
   */
  static without(source, properties) {
    return new Lazy(source).omit(properties).toObject();
  }

}

module.exports = Projector;
