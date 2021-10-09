import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

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
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return Tag.findAll({ ORDER_DESC });
}

export async function getById(id) {
  return Tag.findAll({
    where: { id },
  });
}

export async function create(tagName, color) {
  return Tag.create({
    tagName,
    color,
  }).then((data) => this.getById(data.dataValues.id));
}

export async function update(id, tagName, color) {
  return Tag.findByPk(id).then((tag) => {
    tag.tagName = tagName;
    tag.color = color;
    return tag.save();
  });
}

export async function remove(id) {
  return Tag.findByPk(id).then((tag) => {
    tag.destroy();
  });
}
