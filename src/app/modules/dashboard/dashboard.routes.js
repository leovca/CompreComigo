export default function routing(RouterHelper) {
    const states = [{
        state: 'modules.dashboard',
        config: {
            url: '/',
            component: 'dashboardComponent'
        },
    }];

    RouterHelper.configureStates(states);
}
