var Colors;
(function (Colors) {
    var PageController = (function () {
        function PageController($scope, colorDataService) {
            this.$scope = $scope;
            this.colorDataService = colorDataService;
            this.showName = true;
            this.showValue = true;
            this.colorData = colorDataService.getAllColors();
        }
        return PageController;
    })();
    Colors.PageController = PageController;
})(Colors || (Colors = {}));
//# sourceMappingURL=pageController.js.map
