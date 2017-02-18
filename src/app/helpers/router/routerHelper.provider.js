import angular from 'angular';

export default class RouterHelper {
    config: any;

    constructor($locationProvider, $stateProvider, $urlRouterProvider) {
        this.$locationProvider = $locationProvider;
        this.$stateProvider = $stateProvider;
        this.$urlRouterProvider = $urlRouterProvider;

        this.$locationProvider.html5Mode(true);

        this.config = {
            docTitle: undefined,
            resolveAlways: {},
        };
    }
    
    configure(configOverride: Object) {
        angular.extend(this.config, configOverride);
    }

    $get($rootScope, $location, $state, LoggerService) {
        const $urlRouterProvider = this.$urlRouterProvider;
        const $stateProvider = this.$stateProvider;
        const config = this.config;
        const stateCounts = {
            errors: 0,
            changes: 0,
        };

        let handlingStateChangeError = false;
        let hasOtherwise = false;

        function configureStates(states: Object[], otherwisePath: string = '') {
            states.forEach((state) => {
                $stateProvider.state(state.state, state.config);
            });

            if (otherwisePath && !hasOtherwise) {
                hasOtherwise = true;

                $urlRouterProvider.otherwise(otherwisePath);
            }
        }

        function getStates() {
            return $state.get();
        }

        function _getDestination(toState: Object) {
            return (toState && (toState.title || toState.name)) || 'unknown target';
        }

        function _getErrorMessage(error: Object, toState: Object) {
            return `Error routing to ${_getDestination(toState)}. ${error.data || ''} <br /> 
              ${error.statusText || ''}: ${error.status || ''}`;
        }

        function _handleRoutingErrors() {
            $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
                // Oh noes error is already activated
                if (handlingStateChangeError) {
                    return;
                }

                stateCounts.errors += 1;
                handlingStateChangeError = true;

                // State requires authenticated user.
                if (error === 'AUTH_REQUIRED') {
                    $state.go('auth.login');

                    LoggerService.error('Login required');
                } else { // Otherwise show error message and redirect user to root (/)
                    LoggerService.warning(_getErrorMessage(error, toState), toState);

                    $location.path('/');
                }
            });
        }

        function _updateDocumentTitle() {
            $rootScope.$on('$stateChangeSuccess', (event: any, toState: any) => {
                stateCounts.changes += 1;
                handlingStateChangeError = false;

                $rootScope.title = [
                    config.docTitle,
                    (toState.title || ''),
                ].join(' ');
            });
        }

        function _init() {
            _handleRoutingErrors();
            _updateDocumentTitle();
        }

        const service = {
            configureStates,
            getStates,
            stateCounts,
        };

        _init();

        return service;
    }
}
