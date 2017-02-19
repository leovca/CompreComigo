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
                url: '/show/{id}',
                views: {
                    '': {
                        component: 'announcementShowComponent'
                    }
                }

            }
        },
        {
            state: 'modules.announcements.show.details',
            config: {
                url: '/details',
                views: {
                    '': {
                        component: 'announcementDetailsComponent'
                    }
                }

            }
        },
        {
            state: 'modules.announcements.show.users',
            config: {
                url: '/users',
                views: {
                    '': {
                        component: 'announcementUsersComponent'
                    }
                }

            }
        },
        {
            state: 'modules.announcements.show.chat',
            config: {
                url: '/chat',
                views: {
                    '': {
                        component: 'announcementChatComponent'
                    }
                }

            }
        },
        {
            state: 'modules.announcements.show.pagamento',
            config: {
                url: '/pagamento',
                views: {
                    '': {
                        component: 'announcementPagamentoComponent'
                    }
                }

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
        },
        {
            state: 'modules.announcements.payment',
            config: {
                url: '/payment',
                component: 'announcementPaymentComponent'
            }
        }
    ];

    RouterHelper.configureStates(states);
}
