/**
  * Created by Zhengfeng Yao on 16/8/24.
  */
import Promise from 'bluebird';
import fetch, { Request, Headers, Response } from 'node-fetch';
import { hostname } from '../../config.json5';

fetch.Promise = Promise;
Response.Promise = Promise;

function localUrl(url) {
  if (url.startsWith('//')) {
    return `https:${url}`;
  }

  if (url.startsWith('http')) {
    return url;
  }

  return `http://${hostname}${url}`;
}

function localFetch(url, options) {
  return fetch(localUrl(url), options);
}

export { localFetch as default, Request, Headers, Response };
