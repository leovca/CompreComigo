export default function routing(RouterHelper) {
    const states = [
        {
            state: 'modules.profile',
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
            state: 'modules.profile.edit',
            config: {
                url: '/profile',
                component: 'profileEditComponent'

            }
        }
    ];

    RouterHelper.configureStates(states);
}
