// GitHub API Library
const { Octokit } = require('@octokit/rest');

// Insert your GitHub tokens here in the following format ['token1', 'token2', 'token3']
const gitTokens = ['token1', 'token2', 'token3', 'token4', 'token5'];

// Insert your GitHub names here in the following format ['name1', 'name2', 'name3']
const gitNames = ['name1', 'name2', 'name3', 'name4', 'name5'];

// Function to generate a unique file name
function generateUniqueName() {
    return `advice_${Math.floor(Math.random() * 150000000)}.json`;
}

// Function to push a random advice to the GitHub repository
async function pushRandomAdvice(repoOwner, token) {
    // Initialize the API
    const octokit = new Octokit({ auth: token });

    try {
        // Fetch a random advice
        const fetch = await import('node-fetch').then(module => module.default); // Dynamic import
        const response = await fetch("https://api.adviceslip.com/advice");
        const { slip } = await response.json();
        const advice = slip.advice;

        // Generate a unique file name
        let randomName = generateUniqueName();

        // Push the file to the GitHub repository
        await octokit.rest.repos.createOrUpdateFileContents({
            owner: repoOwner,
            repo: 'random',
            path: randomName,
            message: 'Another great day with a great advice',
            content: Buffer.from(JSON.stringify({ advice })).toString('base64'),
            branch: 'main',
        });
        console.log('Pushed advice to random repository');
    } catch (error) {
        console.error('Error pushing advice to random repository', error);
    }
}

// Function to start execution
function startExecution() {
    gitTokens.forEach((token, index) => {
        pushRandomAdvice(gitNames[index], token);
    });
}

// Start execution
startExecution();
