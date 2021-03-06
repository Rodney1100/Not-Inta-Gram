const router = require('express').Router();
const { Post, User, Like, Dislike, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

//GET /api/users
router.get('/', (req, res) => {
    Post.findAll({
        order: [['created_at', 'ASC']],
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'like_count',
            'dislike_count',
            'created_at'
        ],
        include: [
            // {
            //     model: Comment,
            //     attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //     include: {
            //         model: User,
            //         attributes: ['username']
            //     }
            // },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

//GET /api/users/1
router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'image_url',
            'description',
            'image_name',
            'like_count',
            'dislike_count',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST /api/posts
router.post('/', withAuth, (req, res) => {
    Post.create({
        image_url: req.body.image_url,
        description: req.body.description,
        image_name: req.body.image_name,
        user_id: req.session.user_id,
        like_count: req.body.like_count,
        dislike_count: req.body.dislike_count
    })
        .then(dbPostData => {
            res.json(dbPostData)
            res.render('feed');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//POST 

// PUT /api/posts/like/1
router.put('/like/:id', withAuth, (req, res) => {
    Like.update(
        {
            count: req.body.count
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/posts/dislike/1
router.put('/dislike/:id', withAuth, (req, res) => {
    Dislike.update(
        {
            count: req.body.count
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//PUT /api/posts/1
router.put('/:id', withAuth, (req, res) => {
    Post.update(
        {
            description: req.body.description,
            like_count: req.body.like_count,
            dislike_count: req.body.dislike_count
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/posts/1
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;