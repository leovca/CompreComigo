export default function routing(RouterHelper) {
    const states = [
        {
            state: 'modules.companhias',
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
            state: 'modules.companhias.list',
            config: {
                url: '/companhias',
                component: 'companhiasListComponent'

            }
        },
        {
            state: 'modules.companhias.show',
            config: {
                abstract: true,
                views: {
                    '': {
                        template: '<ui-view></ui-view>'
                    },
                    'tabs@app': {
                        template: require('./companhias.navigate.html'),
                        controller: ($stateParams, $state, $scope) => {
                            $scope.$stateParams = $stateParams;
                        }

                    }
                }
            }
        },
        {
            state: 'modules.companhias.show.main',
            config: {
                url: '/companhias/:id',
                component: 'companhiaShowComponent'
            }

        },
        {
            state: 'modules.companhias.show.usuarios',
            config: {
                url: '/companhias/:id/usuarios',
                component: 'companhiaShowComponent'
            }

        }
    ];

    RouterHelper.configureStates(states);
}
