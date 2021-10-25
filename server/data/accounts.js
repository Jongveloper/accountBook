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
    allowNull: false,
  },
  contents: {
    type: DataTypes.STRING,
    allowNull: false,
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
    'contents',
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

export async function getTotalMonthExpenditure(username, year, month) {
  return Account.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
    where: { year, month },
    attributes: [[sequelize.fn('sum', sequelize.col('expenditure')), 'total']],
    group: 'month',
    order: [sequelize.fn('sum', sequelize.col('expenditure'))],
  });
}

export async function getTotalExpenditure(username) {
  return Account.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
    attributes: [[sequelize.fn('sum', sequelize.col('expenditure')), 'a']],
    group: 'expenditure',
    order: [sequelize.fn('sum', sequelize.col('expenditure'))],
  });
}

export async function getTotalMonthIncome(username, year, month) {
  return Account.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
    where: { year, month },
    attributes: [[sequelize.fn('sum', sequelize.col('income')), 'totalIncome']],
    group: 'month',
    order: [sequelize.fn('sum', sequelize.col('income'))],
  });
}

export async function getTotalIncome(username) {
  return Account.findAll({
    ...INCLUDE_USER,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
    attributes: [[sequelize.fn('sum', sequelize.col('income')), 'totalIncome']],
    group: 'Account.expenditure',
    order: [sequelize.fn('sum', sequelize.col('income'))],
  });
}

export async function getMonth(username, year, month) {
  return Account.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
    where: { year, month },
  });
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
  contents,
  userId
) {
  return Account.create({
    income,
    expenditure,
    year,
    month,
    day,
    tag,
    contents,
    userId,
  }).then((data) => this.getById(data.dataValues.id));
}

export async function update(
  id,
  income,
  expenditure,
  year,
  month,
  day,
  tag,
  contents
) {
  return Account.findByPk(id, INCLUDE_USER).then((account) => {
    account.income = income;
    account.expenditure = expenditure;
    account.year = year;
    account.month = month;
    account.day = day;
    account.tag = tag;
    account.contents = contents;
    return account.save();
  });
}

export async function remove(id) {
  return Account.findByPk(id).then((account) => {
    account.destroy();
  });
}
