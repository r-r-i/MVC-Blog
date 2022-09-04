const router = require('express').Router();
const { Blog, User } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ]
        });

        if(!blogData) {
            res.status(500).json({ message: 'No blog found with this id'});
            return;
        }
        res.status(200).json(blogData)
    } catch (err) {
        console.log('error entered')
        res.status(400).json(err);
    }
});

module.exports = router;