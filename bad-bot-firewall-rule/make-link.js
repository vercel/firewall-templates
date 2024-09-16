const rule = require("./rule.json");
const link = `/[team]/[project]/firewall/configure/rule/new?template=${encodeURIComponent(
  JSON.stringify(rule)
)}`;
console.log(link);