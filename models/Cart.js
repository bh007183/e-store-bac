

  module.exports = function (sequelize, DataTypes) {
    const Cart = sequelize.define("Cart", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
      },
  
      totalCost: {
        type: DataTypes.DECIMAL(10,2),
      },

      orderTotal: {
        type: DataTypes.DECIMAL(10,2),
      }
    });
    Cart.associate = function (models) {
      Cart.belongsTo(models.Customer);
    };
    return Cart;
  };