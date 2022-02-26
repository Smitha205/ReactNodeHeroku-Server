module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts",{
        Title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PostText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
}