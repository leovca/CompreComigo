export class CompanhiasService {

    constructor($http){
        this.$http = $http;
    }

    getCompanhias(){
        return this.$http.get('http://localhost:3000/company')
    }

}