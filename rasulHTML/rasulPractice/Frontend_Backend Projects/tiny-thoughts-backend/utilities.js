import fs from "fs";

export function readJsonFromFile(fileLocation) {
  let content = fs.readFileSync(fileLocation);
  let data = JSON.parse(content);
  return data;
}

export function writeJsonToFile(fileLocation, data) {
  let content = JSON.stringify(data);
  // write to file
  fs.writeFileSync(fileLocation, content);
}
