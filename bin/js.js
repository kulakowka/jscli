#!/usr/bin/env node

const chalk = require("chalk");
const data = require("./data.json");

const [, , method] = process.argv;

if (!method) {
  console.log(
    Object.values(data)
      .map(({ method }) => method)
      .join("\n")
  );
} else {
  const man = data[method.toLowerCase()];

  if (man) {
    console.log("");
    console.log(man.text);
    console.log("");
    console.log(chalk.blue(man.url));
    console.log("");
  } else {
    console.log("");
    console.log(chalk.red("method not found"));
    console.log("");
  }
}
