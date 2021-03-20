module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define("Customer", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
          args: true,
          msg: 'Username already in use!'
    },
},

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
      }
  });

  // allows foreign keys to be attached through the business id
//   Business.associate = function (models) {
//     Business.hasMany(models.Review, { onDelete: "cascade" });
//     Business.hasMany(models.Customer);
//   };
  
  return Customer;
};
