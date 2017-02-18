export default function routing(RouterHelper) {
    const states = [{
        state: 'app',
        config: {
            abstract: true,
            views: {
                '': {
                    component: 'layoutAppComponent'
                }
            }

        },
    }];

    RouterHelper.configureStates(states);
}
