Package.describe({
  name: 'jagi:astronomy-timestamp-behavior',
  version: '2.0.0-rc.3',
  summary: 'Timestamp behavior for Meteor Astronomy',
  git: 'https://github.com/jagi/meteor-astronomy-timestamp-behavior.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'es5-shim',
    'jagi:astronomy@2.0.0-rc.6',
    'stevezhu:lodash@4.5.0'
  ], ['client', 'server']);

  api.mainModule('lib/main.js', ['client', 'server']);
});