// Imports
import angular from 'angular';
import RouterHelper from './routerHelper.provider';

export default angular
  .module('app.helpers.router', [])
  .provider('RouterHelper', RouterHelper)
  .name;
