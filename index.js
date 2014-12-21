var types = [];

function customTypes(rs) {
    module.exports.rs = rs;
    types.push({ ksType: rs.keystone.Field.Types.CloudinaryImage, handlers: require("./lib/cloudinaryimage")});
    rs.events.on(rs.enums.EVENTS.REGISTER_CUSTOM_TYPES, init);
}

function init(registrator) {
    for (var i in types) {
        registrator(types[i]);
    }
};

module.exports = customTypes