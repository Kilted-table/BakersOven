import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    stackbitVersion: "~0.6.0",
    nodeVersion: "18",
    ssgName: "custom",

    contentModels: [
        {
            name: 'page',
            label: 'Page',
            fields: [
                { name: 'title', label: 'Title', type: 'string' },
                { name: 'content', label: 'Content', type: 'markdown' }
            ]
        },
        {
            name: 'post',
            label: 'Post',
            fields: [
                { name: 'title', label: 'Title', type: 'string' },
                { name: 'excerpt', label: 'Excerpt', type: 'string' },
                { name: 'content', label: 'Content', type: 'markdown' },
                { name: 'date', label: 'Date', type: 'date' }
            ]
        }
    ],

    contentSources: [
        {
            name: 'git',
            type: 'git',
            repoUrl: 'https://github.com/username/repository',
            branch: 'main'
        }
    ],

    theme: {
        colorScheme: 'dark',
        fonts: {
            heading: 'Press Start 2P, cursive',
            body: 'Arial, sans-serif'
        }
    },

    build: {
        command: 'npm run build',
        environmentVariables: {
            NODE_ENV: 'production'
        }
    },

    deployment: {
        provider: 'vercel',
        environmentVariables: {
            VERCEL_PROJECT_ID: 'your-vercel-project-id',
            VERCEL_ORG_ID: 'your-vercel-org-id'
        }
    },

    postInstallCommand: "npm i --no-save @stackbit/types"
});
