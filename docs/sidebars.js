// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  defaultSidebar: [
    'index',
    {
      type: 'category',
      label: 'Quickstarts',
      items: [
        {
          type: 'autogenerated',
          dirName: 'quickstarts'
        }
      ]
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        {
          type: 'autogenerated',
          dirName: 'database'
        }
      ]
    },
    {
      type: 'category',
      label: 'GraphQL API',
      items: [
        {
          type: 'autogenerated',
          dirName: 'graphql'
        }
      ]
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        {
          type: 'autogenerated',
          dirName: 'authentication'
        }
      ]
    },
    'storage',
    'serverless-functions',
    {
      type: 'category',
      label: 'CLI',
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli'
        }
      ]
    },
    {
      type: 'category',
      label: 'Platform',
      items: [
        {
          type: 'autogenerated',
          dirName: 'platform'
        }
      ]
    }
  ],
  referenceSidebar: [
    'reference/index',
    {
      type: 'category',
      label: 'JavaScript',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'reference/javascript/index'
      },
      items: [
        {
          type: 'category',
          label: 'Auth',
          link: {
            type: 'doc',
            id: 'reference/docgen/javascript/auth/content/hasura-auth-client/index'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/docgen/javascript/auth/content/hasura-auth-client/content'
            }
          ]
        },
        {
          type: 'category',
          label: 'Storage',
          link: {
            type: 'doc',
            id: 'reference/docgen/javascript/storage/content/hasura-storage-client/index'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/docgen/javascript/storage/content/hasura-storage-client/content'
            }
          ]
        },
        {
          type: 'category',
          label: 'Functions',
          link: {
            type: 'doc',
            id: 'reference/javascript/functions/index'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/javascript/functions/content'
            }
          ]
        },
        {
          type: 'category',
          label: 'GraphQL',
          link: {
            type: 'doc',
            id: 'reference/docgen/javascript/graphql/content/nhost-graphql-client/index'
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/docgen/javascript/graphql/content/nhost-graphql-client/content'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'React',
      link: {
        type: 'doc',
        id: 'reference/react/index'
      },
      items: [
        'reference/react/protecting-routes',
        'reference/react/apollo',
        {
          type: 'autogenerated',
          dirName: 'reference/docgen/react/content'
        }
      ]
    },
    {
      type: 'category',
      label: 'Next.js',
      link: {
        type: 'doc',
        id: 'reference/nextjs/index'
      },
      items: [
        'reference/nextjs/protecting-routes',
        'reference/nextjs/architecture',
        {
          type: 'autogenerated',
          dirName: 'reference/docgen/nextjs/content'
        }
      ]
    },
    {
      type: 'category',
      label: 'Vue',
      link: {
        type: 'doc',
        id: 'reference/vue/index'
      },
      items: [
        'reference/vue/protecting-routes',
        'reference/vue/apollo',
        {
          type: 'autogenerated',
          dirName: 'reference/docgen/vue/content'
        }
      ]
    },
    {
      type: 'category',
      label: 'CLI',
      link: { type: 'doc', id: 'reference/cli/index' },
      items: [
        'reference/cli/init',
        'reference/cli/up',
        'reference/cli/down',
        'reference/cli/link',
        'reference/cli/login',
        'reference/cli/logout',
        'reference/cli/list',
        'reference/cli/upgrade',
        'reference/cli/logs',
        'reference/cli/global-flags'
      ]
    }
  ]
}

module.exports = sidebars
