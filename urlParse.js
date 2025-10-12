import { parse } from "node:url";

const myUrl = "https://www.kk.com:3000/page/index.html?user=kishor&reg=m4#section";

const parsedUrl = parse(myUrl, true);

console.log('href : ', parsedUrl.href);
console.log('protocol : ', parsedUrl.protocol);
console.log('host : ', parsedUrl.host);
console.log('hostname : ', parsedUrl.hostname);
console.log('port : ', parsedUrl.port);
console.log('pathname : ', parsedUrl.pathname);
console.log('query : ', parsedUrl.query);
console.log('hash : ', parsedUrl.hash);

console.log('user : ', parsedUrl.query.user);
console.log('reg : ', parsedUrl.query.reg);