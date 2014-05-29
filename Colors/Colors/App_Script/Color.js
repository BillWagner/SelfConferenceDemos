var Colors;
(function (Colors) {
    var Color = (function () {
        function Color(other) {
            this.sampleLength = 3;
            if (other != null) {
                this.Id = other.Id;
                this.name = other.name;
                this.value = other.value;
            } else {
                this.Id = -1;
                this.name = "";
                this.value = "#000";
            }
        }
        Color.prototype.getSample = function () {
            var blockCharacter = "█";
            var length = this.sampleLength || 3;
            var sample = "";

            for (var i = 0; i < length; i++) {
                sample += blockCharacter;
            }
            return sample;
        };

        Color.prototype.increaseLength = function () {
            this.sampleLength = this.sampleLength || 3;
            this.sampleLength++;
        };

        Color.prototype.decreaseLength = function () {
            this.sampleLength = this.sampleLength || 3;
            if (this.sampleLength > 1) {
                this.sampleLength--;
            }
        };
        return Color;
    })();
    Colors.Color = Color;
})(Colors || (Colors = {}));
//# sourceMappingURL=Color.js.map
