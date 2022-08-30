const User = require('./User');
const Blog = require('./Blog');

User.belongsToMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {
    User,
    Blog
}