import * as accountRepository from '../data/accounts.js';

export async function getAccounts(req, res) {
  const username = req.query.username;
  const data = await (username
    ? accountRepository.getAll()
    : accountRepository.getAllByUsername(username));
  res.status(200).json(data);
}

export async function createAccount(req, res, next) {
  const { income, expenditure, year, month, day, tag, contents } = req.body;
  const account = await accountRepository.create(
    income,
    expenditure,
    year,
    month,
    day,
    tag,
    contents,
    req.userId
  );
  res.status(201).json(account);
}

export async function updateAccount(req, res, next) {
  const id = req.params.id;
  const income = req.body.income;
  const expenditure = req.body.expenditure;
  const year = req.body.year;
  const month = req.body.month;
  const day = req.body.day;
  const tag = req.body.tag;
  const contents = req.body.contents;
  const account = await accountRepository.getById(id);
  if (!account) {
    return res.status(404).json({ message: `${id}를 찾을 수 없습니다.` });
  }
  const updated = await accountRepository.update(
    id,
    income,
    expenditure,
    year,
    month,
    day,
    tag,
    contents
  );
  res.status(200).json(updated);
}

export async function deleteAccount(req, res, next) {
  const id = req.params.id;
  const account = await accountRepository.getById(id);
  if (!account) {
    return res.status(404).json({ message: `${id}를 찾을 수 없습니다.` });
  }
  await accountRepository.remove(id);
  res.sendStatus(204);
}
