const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const profileRoutes = require("./profile-routes.js");

router.use('/', homeRoutes);
router.use('/feed', dashboardRoutes);
router.use("/profile", profileRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;