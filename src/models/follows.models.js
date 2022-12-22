const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')

const Follows = db.define('follows', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'follower',
        comment: 'Follower',
        references: {
            key: 'id',
            model: Users
        },
    },
    userId2:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'followed',
        comment: 'Followed',
        references: {
            key: 'id',
            model: Users
        },
    }
}, {
    //Validation to avoid following the same person twice
    // uniqueKeys: {
    //     follows_unique: {
    //         fields: ['userId', 'userId2']
    //     }
    // }
})



module.exports = Follows