module Colors {
    export interface IColor {
        Id: number;
        name: string;
        value: string;
    }

    export class Color implements IColor {
        Id: number;
        name: string;
        value: string;
        sampleLength: number = 3;

        constructor(other: IColor) {
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

        getSample() {
            var blockCharacter = "█";
            var length = this.sampleLength || 3;
            var sample = "";

            for (var i = 0; i < length; i++) {
                sample += blockCharacter;
            }
            return sample;
        }

        increaseLength() {
            this.sampleLength = this.sampleLength || 3;
            this.sampleLength++;
        }

        decreaseLength() {
            this.sampleLength = this.sampleLength || 3;
            if (this.sampleLength > 1) {
                this.sampleLength--;
            }
        }
    }
} 