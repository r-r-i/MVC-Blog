const router = require('express').Router();
const { User, Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({ include: User
        })
        const blogs = blogData.map((blogs) => blogs.get({ plain: true }));
        res.render('home', {
            blogs,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ]
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in,
        })

        // res.status(200).json(blogData)
    } catch (err) {
        console.log('error entered')
        res.status(400).json(err);
    }
});

router.get('/blog', async (req, res) => {
    try {
        const blogData = await Blog.findAll ({ include: User })

        const blogs = blogData.map((blogs) => blogs.get({ plain: true }));
        res.render('blog', {
            blogs,
            logged_in: req.session.logged_in,
        })
    } catch (err) {
        res.status(500).json(err)
    }
})



router.get('/signup', (req,res) => {
    if (req.session.logged_in){
        res.redirect('/')
        return
    }
    res.render('signup')
})

// If already logged in, redirect to dashboard
router.get('/login',  (req, res) => {
    if (req.session.logged_in){
        res.redirect('/dashboard');
        return
    }
    res.render('login')
})

module.exports = router;