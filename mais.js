// GitHub API Library
const { Octokit } = require('@octokit/rest');

// Вставьте свои GitHub токены в следующем формате ['token1', 'token2', 'token3']
const gitTokens = ['token1'];

// Вставьте ваши имена GitHub в следующем формате ['name1', 'name2', 'name3']
const gitNames = ['name1'];

// Функция для генерации уникального имени файла
function generateUniqueName() {
    return `question_${Math.floor(Math.random() * 150000000)}.json`;
}

// Функция для загрузки случайного вопроса в репозиторий GitHub
async function pushRandomQuestion(repoOwner, token) {
    // Инициализация API
    const octokit = new Octokit({ auth: token });

    try {
        // Получение случайного вопроса
        const fetch = await import('node-fetch'); // Динамический импорт модуля
        const response = await fetch.default("https://opentdb.com/api.php?amount=1");
        const { results } = await response.json();
        const question = results[0];

        // Генерация уникального имени файла
        let randomName = generateUniqueName();

        // Загрузка файла в репозиторий GitHub
        await octokit.rest.repos.createOrUpdateFileContents({
            owner: repoOwner,
            repo: 'random',
            path: randomName,
            message: 'Another great day with a great question',
            content: Buffer.from(JSON.stringify(question)).toString('base64'),
            branch: 'main',
        });
        console.log('Pushed question to random repository');
    } catch (error) {
        console.error('Error pushing question to random repository', error);
    }
}

// Функция для запуска выполнения
function startExecution() {
    gitTokens.forEach((token, index) => {
        pushRandomQuestion(gitNames[index], token);
    });
}

// Запуск выполнения
startExecution();


// Запуск выполнения
startExecution();
