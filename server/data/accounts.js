import SQ from 'sequelize';
import { sequelize } from '../db/database.js';

// const Sequelize = SQ.Sequelize;
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

const ORDER_DESC = {
  order: [['createdAt', 'DESC']],
};

export async function getAll() {
  return Account.findAll({ ...ORDER_DESC });
}

export async function create(
  income,
  incomeTag,
  expenditure,
  expenditureTag,
  year,
  month,
  day
) {
  return Account.create({
    income,
    incomeTag,
    expenditure,
    expenditureTag,
    year,
    month,
    day,
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
  return Account.findByPk(id).then((account) => {
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
  return findByPk(id).then((account) => {
    account.destroy();
  });
}
