'use strict';
const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define(
		'User',
		{
			username: DataTypes.STRING,
			email: DataTypes.STRING,
			password: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	User.beforeCreate(user => {
		const salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(user.password, salt);
		user.password = hash;
	});
	return User;
};
