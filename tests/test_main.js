const test = require("node:test");
const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

const mainPath = path.join(__dirname, "..", "src", "main.js");

test("команда add выводит название задачи", () => {
    const result = spawnSync(
        process.execPath,
        [mainPath, "add", "Купить хлеб"],
        {
            encoding: "utf8"
        }
    );

    assert.equal(result.status, 0);
    assert.match(result.stdout, /Купить хлеб/);
});

test("команда list выводит сообщение о списке задач", () => {
    const result = spawnSync(
        process.execPath,
        [mainPath, "list"],
        {
            encoding: "utf8"
        }
    );

    assert.equal(result.status, 0);
    assert.match(result.stdout, /Список задач пуст/);
});