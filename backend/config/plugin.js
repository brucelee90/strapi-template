// path: ./config/plugins.js

module.exports = ({ env }) => ({
  // ... andere Plugin-Konfigurationen falls vorhanden
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  // ... andere Plugin-Konfigurationen falls vorhanden
});