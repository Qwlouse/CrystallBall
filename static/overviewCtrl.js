function OverviewCtrl($scope, Experiments) {
    $scope.experiments = Experiments.query();//{q:'{result:23}'});

    $scope.$watch('experiments.length', function (newval, oldval) {
        for (var i = 0; i < $scope.experiments.length; ++i) {
            var entry = $scope.experiments[i];

            var opts = [];
            for(var key in entry['options']){
                opts.push(key + '=' + String(entry['options'][key]));
            }
            entry['__options__'] = opts;
        }
    });

    $scope.delete = function (d) {
        if (confirm('Do you really want to delete this entry? This cannot be undone!')) {
            d.remove(function(u, getResponseHeaders){
                Experiments.query({}, function (u) {
                    $scope.experiments = u;
                });
            });
        }
    };

    $scope.update = function (d) {
        d.update();
    };
}