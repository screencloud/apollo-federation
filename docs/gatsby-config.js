const themeOptions = require('gatsby-theme-apollo-docs/theme-options');

module.exports = {
  pathPrefix: '/docs/federation',
  plugins: [
    {
      resolve: 'gatsby-theme-apollo-docs',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Apollo Federation',
        description: 'A guide to using Apollo Federation',
        githubRepo: 'apollographql/federation',
        sidebarCategories: {
          null: [
            'index',
          ],
          'Quickstart': [
            'quickstart',
            'quickstart-pt-2',
            'quickstart-pt-3',
          ],
          'Core Concepts': [
            'subgraphs',
            'gateway',
            'entities',
            'value-types',
            'migrating-from-stitching',
          ],
          'Managed Federation': [
            'managed-federation/overview',
            'managed-federation/setup',
            'managed-federation/monitoring',
            'managed-federation/federated-schema-checks',
            'managed-federation/deployment',
            '[Studio features](https://www.apollographql.com/docs/studio/federated-graphs/)',
          ],
          'Debugging': [
            'errors',
            'metrics',
          ],
          'Third-Party Support': [
            'other-servers',
            'federation-spec',
          ],
          'API Reference': [
            'api/apollo-federation',
            'api/apollo-gateway',
          ],
        },
      },
    },
  ],
};
