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
        },
        {
            state: 'modules.announcements.chat',
            config: {
                url: '/chat',
                component: 'announcementChatComponent'
            }
        },
        {
            state: 'modules.announcements.groups',
            config: {
                url: '/groups',
                component: 'announcementGroupsComponent'
            }
        }
    ];

    RouterHelper.configureStates(states);
}
