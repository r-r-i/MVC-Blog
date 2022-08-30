const User = require('./User');
const Blog = require('./Blog');

User.belongsToMany(Blog);

Blog.belongsTo(User);