/**
 * CLI-интерфейс менеджера задач.
 */

function addTask(title) {
    console.log(`[OK] Задача добавлена: ${title}`);
}

function listTasks() {
    console.log("[INFO] Список задач пуст.");
}

function showHelp() {
    console.log(`
Task Manager CLI

Использование:
  node src/main.js add "Название задачи"
  node src/main.js list

Команды:
  add <title>   Добавить задачу
  list          Показать список задач
    `);
}

function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (command === "add") {
        const title = args.slice(1).join(" ").trim();

        if (!title) {
            console.error("[ERROR] Необходимо указать название задачи.");
            return 1;
        }

        addTask(title);
        return 0;
    }

    if (command === "list") {
        listTasks();
        return 0;
    }

    if (command === "--help" || command === "-h" || !command) {
        showHelp();
        return 0;
    }

    console.error(`[ERROR] Неизвестная команда: ${command}`);
    showHelp();
    return 1;
}

if (require.main === module) {
    process.exitCode = main();
}

module.exports = {
    addTask,
    listTasks,
    main
};