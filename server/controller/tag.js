import * as tagRepository from '../data/tag.js';

export async function getTags(req, res) {
  const username = req.query.username;
  const data = await tagRepository.getAllByUsername(username);
  res.status(200).json(data);
}

export async function createTag(req, res, next) {
  const { tagName } = req.body;
  const found = await tagRepository.findByTagName(tagName);
  if (found) {
    return res.status(409).json({ message: `${tagName} already exists` });
  }
  const tag = await tagRepository.create(tagName, req.userId);
  res.status(201).json(tag);
}

export async function updateTag(req, res, next) {
  const id = req.params.id;
  const tagName = req.body.tagName;
  const tag = await tagRepository.getById(id);
  if (!tag) {
    return res.status(404).json({ message: `${id}를 찾을 수 없습니다.` });
  }
  const updated = await tagRepository.update(id, tagName);
  res.status(200).json(updated);
}

export async function deleteTag(req, res, next) {
  const id = req.params.id;
  const tag = await tagRepository.getById(id);
  if (!tag) {
    return res.status(404).json({ message: `${id}를 찾을 수 없습니다.` });
  }
  await tagRepository.remove(id);
  res.sendStatus(204);
}
