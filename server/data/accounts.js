import SQ from 'sequelize';
import { sequelize } from '../db/database.js';
import { User } from './auth.js';

const Sequelize = SQ.Sequelize;
const DataTypes = SQ.DataTypes;

const Account = sequelize.define('account', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  income: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  expenditure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  month: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  day: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Account.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id',
    'income',
    'expenditure',
    'year',
    'month',
    'day',
    'tag',
    'createdAt',
    'userId',
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
  return Account.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  return Account.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  return Account.findAll({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(
  income,
  expenditure,
  year,
  month,
  day,
  tag,
  userId
) {
  return Account.create({
    income,
    expenditure,
    year,
    month,
    day,
    tag,
    userId,
  }).then((data) => this.getById(data.dataValues.id));
}

export async function update(id, income, expenditure, year, month, day, tag) {
  return Account.findByPk(id, INCLUDE_USER).then((account) => {
    account.income = income;
    account.expenditure = expenditure;
    account.year = year;
    account.month = month;
    account.day = day;
    account.tag = tag;
    return account.save();
  });
}

export async function remove(id) {
  return Account.findByPk(id).then((account) => {
    account.destroy();
  });
}
