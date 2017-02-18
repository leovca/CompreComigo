export default function routing(RouterHelper) {
    const states = [{
        state: 'blank',
        config: {
            abstract: true,
            component: 'layoutBlankComponent'
        },
    }];

    RouterHelper.configureStates(states);
}
