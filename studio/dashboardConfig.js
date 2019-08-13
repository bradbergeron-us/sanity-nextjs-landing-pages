export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d5236b6b52f762c3e21ed8b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hvz7chzi',
                  apiId: '30664568-27eb-4126-bec0-e99c715c9a5f'
                },
                {
                  buildHookId: '5d5236b66314d7debe7bd831',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-o63ee6rk',
                  apiId: 'd064954f-35b2-481b-b688-6a1467592ccc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bradbergeron-us/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-o63ee6rk.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
