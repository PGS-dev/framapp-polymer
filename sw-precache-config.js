module.exports = {
    staticFileGlobs: [
      '/index.html',
      '/manifest.json',
      '/bower_components/webcomponentsjs/webcomponents-lite.js'
    ],
    navigateFallback: '/index.html',
    navigateFallbackWhitelist: [/^(?!.*\.html$|\/data\/).*/],
    runtimeCaching: [
      {
          urlPattern: /^https:\/\/www\.project-5613440220430148247\.firebaseio\.com\/api\/v1/,
          handler: 'networkFirst',
          options: {
              cache: {
                  maxEntries: 100,
                  name: 'category-data-cache'
              }
          }
      }
    ]
};