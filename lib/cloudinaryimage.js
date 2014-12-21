/**
 * Local type handler for CloudinaryImage.
 * DO NOT USE AS AN EXAMPLE! to create/override custom type handlers see documentation.
 */
var enums = require("../index").rs.enums;

/**
 * Handles CloudinaryImage instances for unauthorized requests.
 */
function defaultHandler(value) {
    if (! value) return value;

    return {
        url: value.url
    };
}

/**
 * Handles CloudinaryImage instances for authorized requests.
 */
function authorizedHandler(value) {
    if (! value) return value;

    delete value.public_id;
    delete value.version;
    delete value.signature;
    delete value.resource_type;

    return value;
}

/**
 * Handles CloudinaryImage instances for admin requests.
 */
function adminHandler(value) {
    return value;
}

var handlerDefinition = {};
handlerDefinition[enums.SYSTEM_PROFILES.UNAUTHORIZED] = defaultHandler;
handlerDefinition[enums.SYSTEM_PROFILES.AUTHORIZED] = authorizedHandler;
handlerDefinition[enums.SYSTEM_PROFILES.ADMIN] = adminHandler;

module.exports = handlerDefinition;