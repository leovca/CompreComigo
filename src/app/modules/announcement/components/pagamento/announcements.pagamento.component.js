import './announcements.pagamento.component.css';

export const AnnouncementPagamentoComponent  = {
    template: require('./announcements.pagamento.component.html'),
    controllerAs: 'vm',
    controller: class AnnouncementPagamentoComponent {
        constructor(AnnouncementService, $scope, $stateParams, $state) {
            'ngInject';
            this.announcementService = AnnouncementService;
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            this.$state = $state;
        }

        $onInit() {
            this.users = [];
            this.announcementService.getUsers(this.$stateParams.id, (user)=> {
                this.$scope.$apply(()=>{
                    this.users.push(user);
                });
            });
        }

        save(){
            angular.forEach(this.users, (value, key)=>{
                    this.announcementService.setValue(
                        this.$stateParams.id,
                        value.key,
                        value.value
                    )
            });
        }


        getTotal(){
            let total = 0;

            angular.forEach(this.users||[], (value, key)=>{
                if(value) {
                    total += (value.value || 0)
                }
            });

            return total;
        }

        save(){
            this.$state.go('modules.announcements.payment')
        }
    }
};