module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5433),
        database: env('DATABASE_NAME', 'wongames-postgres'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'wongames-postgres'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
