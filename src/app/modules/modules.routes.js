export default function routing(RouterHelper) {
    const states = [{
        state: 'modules',
        config: {
            abstract: true,
            parent: 'app',
            // resolve: {
            //     auth: ($auth, $state, $q) => {
            //         let deferred = $q.defer();
            //         $auth.validateUser()
            //             .then(() => deferred.resolve())
            //             .catch(() => $state.go('login'));
            //         return deferred.promise;
            //     }
            // }
        },
    }];

    RouterHelper.configureStates(states);
}
