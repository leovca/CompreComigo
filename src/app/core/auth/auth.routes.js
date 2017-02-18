export default function routing(RouterHelper) {
    const states = [{
        state: 'login',
        config: {
            url: '/login',
            parent: 'blank',
            component: 'authLogin'
        },
    }];

    RouterHelper.configureStates(states);
}
