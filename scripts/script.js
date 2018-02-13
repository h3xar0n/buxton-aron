Vue.filter('formatDate', function (value) {
    if (value) {
        // find UNIX timestamp, convert it to a normal time
        return moment(String(value)).format('HH MM DD SS')
    }
});

new Vue({
    el: '#app',
    data: {
        activity: appData
    }
});

