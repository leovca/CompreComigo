export default function routing(RouterHelper) {
    const states = [{
        state: 'modules',
        config: {
            abstract: true,
            parent: 'app',
            views: {
                'sidenav': {
                    component: 'sidenavLayoutAppComponent'
                },
                '': {
                    layout:'<ui-view></ui-view>'
                }
            },
            resolve: {
                auth: (FirebaseService, $state, $q) => {
                    let deferred = $q.defer();
                    let user = FirebaseService.auth.currentUser;
                    deferred.resolve();

                    // if (user) {
                    //     deferred.resolve()
                    // } else {
                    //     $state.go('login')
                    // }

                    return deferred.promise;
                }
            }
        },
    }];

    RouterHelper.configureStates(states);
}
