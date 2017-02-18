import angular from 'angular';
import LoggerService from './logger.service';

export default angular
    .module('app.helpers.logger', [])
    .service('LoggerService', LoggerService)
    .name;
