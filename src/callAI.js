
const axios = require('axios');

async function callAI(systemPrompt, userCode) {
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
        throw new Error('OPENROUTER_API_KEY is missing from environment variables');
    }

    
const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
        model: 'google/gemini-3.8-flash',
        max_tokens: 1024,
        messages: [
            { role: 'system', content: systemPrompt },
            {
                role: 'user',
                content: `Analyze the following code for bugs and improvements:\n\n${userCode}`
            }
        ]
    },
    {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    }
);


    // Token usage and estimated cost logging
    const usage = response.data.usage;

    if (usage) {
        const promptTokens = usage.prompt_tokens || 0;
        const completionTokens = usage.completion_tokens || 0;
        const totalTokens = usage.total_tokens || (promptTokens + completionTokens);

        const cost =
            (promptTokens * 0.0000025) +
            (completionTokens * 0.00001);

        console.log(
            `[TOKEN LOG] prompt_tokens: ${promptTokens} | ` +
            `completion_tokens: ${completionTokens} | ` +
            `total: ${totalTokens} | ` +
            `est_cost_usd: $${cost.toFixed(4)}`
        );
    } else {
        console.log('[TOKEN LOG] Token usage information unavailable.');
    }

    return response.data.choices[0].message.content;
}

module.exports = { callAI };
