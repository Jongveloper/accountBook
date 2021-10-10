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
  incomeTag: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  expenditure: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  expenditureTag: {
    type: DataTypes.STRING,
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
});
Account.belongsTo(User);

const INCLUDE_USER = {
  attributes: [
    'id',
    'income',
    'incomeTag',
    'expenditure',
    'expenditureTag',
    'year',
    'month',
    'day',
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
  incomeTag,
  expenditure,
  expenditureTag,
  year,
  month,
  day,
  userId
) {
  return Account.create({
    income,
    incomeTag,
    expenditure,
    expenditureTag,
    year,
    month,
    day,
    userId,
  }).then((data) => this.getById(data.dataValues.id));
}

export async function update(
  id,
  income,
  incomeTag,
  expenditure,
  expenditureTag,
  year,
  month,
  day
) {
  return Account.findByPk(id, INCLUDE_USER).then((account) => {
    account.income = income;
    account.incomeTag = incomeTag;
    account.expenditure = expenditure;
    account.expenditureTag = expenditureTag;
    account.year = year;
    account.month = month;
    account.day = day;
    return account.save();
  });
}

export async function remove(id) {
  return Account.findByPk(id).then((account) => {
    account.destroy();
  });
}
