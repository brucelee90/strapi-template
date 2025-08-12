module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/data/public"
  },
    app: {
    // Hier ist die wichtige Zeile:
    // Sie liest die Komma-getrennten Werte aus der APP_KEYS Variable.
    keys: env.array('APP_KEYS'),
  },
});