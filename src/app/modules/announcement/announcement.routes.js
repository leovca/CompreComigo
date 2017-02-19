export default function routing(RouterHelper) {
    const states = [
        {
            state: 'modules.announcements',
            config: {
                abstract: true,
                views: {
                    '': {
                        template: '<ui-view></ui-view>'
                    }
                }
            }
        },
        {
            state: 'modules.announcements.new',
            config: {
                url: '/new',
                component: 'announcementNewComponent'
            }
        },
        {
            state: 'modules.announcements.show',
            config: {
                url: '/show',
                component: 'announcementShowComponent'
            }
        }
    ];

    RouterHelper.configureStates(states);
}
