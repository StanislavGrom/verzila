const {s, Sequelize} = require("../orm/sq");

// activeRecord wrapper
const Product = s.define('product', {
    identifier: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    },
    img: {
        type: Sequelize.STRING
    },
    processed: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
    }
});

// migration
Product.sync();

module.exports = Product;
