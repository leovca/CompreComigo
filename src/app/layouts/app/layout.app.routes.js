export default function routing(RouterHelper) {
    const states = [{
        state: 'app',
        config: {
            abstract: true,
            views: {
                '': {
                    template: require('./component/layout.app.component.html')
                }
            }

        },
    }];

    RouterHelper.configureStates(states);
}
