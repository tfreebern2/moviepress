const express = require('express');
const router = express.Router();
const models = require('../models');
const bcrypt = require('bcryptjs');

router
	.get('/sign-up', (req, res) => {
		res.render('application', {
			partials: {
				yield: 'views/users/sign-up.html'
			}
		});
	})
	.post('/sign-up', (req, res) => {
		models.User
			.create(req.body, { fields: ['username', 'email', 'password'] })
			.then(user => {
				res.cookie('movie_press_token', user.id, {
					httpOnly: true,
					maxAge: 86400000
				});
				res.redirect('/');
			})
			.catch(error => {
				res.status(500);
			});
	})
	.get('/sign-out', (req, res) => {
		res.clearCookie('movie_press_token');
		res.redirect('/');
	})
	.get('/sign-in', (req, res) => {
		res.render('application', {
			partials: {
				yield: 'views/users/sign-in.html'
			}
		});
	})
	.post('/sign-in', (req, res) => {
		models.User
			.findOne({ where: { email: req.body.email } })
			.then(user => {
				if (bcrypt.compareSync(req.body.password, user.password)) {
					res.cookie('movie_press_token', user.id, {
						httpOnly: true,
						maxAge: 86400000
					});
					res.redirect('/');
				}
			})
			.catch(error => {
				return res.status(500);
			});
	});

module.exports = router;
