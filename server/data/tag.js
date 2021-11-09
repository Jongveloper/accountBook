import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { User } from './auth.js';

const Sequelize = SQ.Sequelize;
const DataTypes = SQ.DataTypes;

const Tag = sequelize.define('tag', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  tagName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Tag.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id',
    'tagName',
    'userId',
    'createdAt',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return Tag.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return Tag.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return Tag.findAll({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(tagName, userId) {
  return Tag.create({
    tagName,
    userId,
  }).then((data) => this.getById(data.dataValues.id));
}

export async function update(id, tagName) {
  return Tag.findByPk(id).then((tag) => {
    tag.tagName = tagName;
    return tag.save();
  });
}

export async function remove(id) {
  return Tag.findByPk(id).then((tag) => {
    tag.destroy();
  });
}
