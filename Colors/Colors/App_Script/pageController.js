var Colors;
(function (Colors) {
    var PageController = (function () {
        function PageController($scope, colorDataService) {
            this.$scope = $scope;
            this.colorDataService = colorDataService;
            this.colorData = colorDataService.getAllColors();
        }
        return PageController;
    })();
    Colors.PageController = PageController;
})(Colors || (Colors = {}));
//# sourceMappingURL=pageController.js.map
