export default function routing(RouterHelper) {
    const states = [{
        state: 'modules.dashboard',
        config: {
            url: '/',
            views: {
                '': {
                    component: 'dashboardComponent'
                }
            }
        },
    }];

    RouterHelper.configureStates(states);
}
