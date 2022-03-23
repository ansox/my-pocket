import { db } from "./db";
import { retrieve } from "./pocket";
import { loadLocal, saveLocal } from "./storage";

export default async function loadArticles() {
  const token = loadToken();
  const lastSync = loadLastSync();
  const articles = await loadArticleWeb(token, lastSync);
  await saveData(articles);
  saveLastSync();
  return loadArticleLocal();
}

function loadToken() {
  return loadLocal('access_token');
}

function loadLastSync() {
  return loadLocal('last_sync');
}

function saveLastSync() {
  const now = new Date();
  saveLocal('last_sync', now);
}

function articlesToArray(articles) {
  return Object.values(articles);
}

function retrieveArticles(token) {
  return retrieve(token).then(result => result.list);
};

async function loadArticleWeb(token, lastSync) {
  const result = await retrieveArticles(token, lastSync);
  const articlesArr = articlesToArray(result);
  return articlesArr;
}

async function loadArticleLocal() {
  return db.articles.toArray();
}

async function saveData(articles) {
  db.articles.bulkAdd(articles)
    .catch(error => console.log(error));
}