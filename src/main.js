export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-ui-virtualization');

    aurelia.start().then(app => app.setRoot());
}
