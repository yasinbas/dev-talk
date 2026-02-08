module.exports = {
    apps: [
        {
            name: 'devtalk',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            instances: 'max', // Or a specific number like 1
            exec_mode: 'cluster', // Use 'fork' if 'max' causes issues with SQLite/Prisma without proxy
            env_production: {
                NODE_ENV: 'production',
                PORT: 3000,
            },
            watch: false,
            max_memory_restart: '1G',
            log_date_format: 'YYYY-MM-DD HH:mm Z',
        },
    ],
};
