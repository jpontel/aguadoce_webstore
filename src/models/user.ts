import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public role!: 'admin' | 'customer';
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'customer'),
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'users',
});

export default User;