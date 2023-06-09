module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validator: { notEmpty: true }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: { isEmail: true }
      },
      mobileNum: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
          is: /^(\d{10})?$/i
        }
      }
    },
    {
      underscored: true
    }
  );
  return User;
};
