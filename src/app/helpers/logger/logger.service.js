export default class LoggerService {

    constructor($log, $injector) {
        this.$log = $log;
        this.$injector = $injector;
    }

    error(message: string, data: Object = {}, title: string = '') {
        this.showToast(message, data, title);

        // noinspection JSUnresolvedFunction
        this.$log.error(['Error:', message].join(' '), data, title);
    }

    info(message: string, data: Object = {}, title: string = '') {
        this.showToast(message, data, title);

        // noinspection JSUnresolvedFunction
        this.$log.info(['Info:', message].join(' '), data, title);
    }

    success(message: string, data: Object = {}, title: string = '') {
        this.showToast(message, data, title);

        // noinspection JSUnresolvedFunction
        this.$log.log(['Success:', message].join(' '), data, title);
    }

    warning(message: string, data: Object = {}, title: string = '') {
        this.showToast(message, data, title);

        // noinspection JSUnresolvedFunction
        this.$log.warn(['Warning:', message].join(' '), data, title);
    }

    log(...args) {
        this.$log.log(args);
    }

    showToast(message: string, data: Object = {}, title: string = '') {
        this.$injector
            .get('$mdToast')
            .showSimple([
                title,
                message,
                (Object.keys(data).length ? data : ''),
            ].join(' '));
    }
}
