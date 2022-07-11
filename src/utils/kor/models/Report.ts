import UniKR from "../constants/UniKR";

export default class Report {
    choSeong: Map<string, number>;
    jungSeong: Map<string, number>;
    jongSeong: Map<string, number>;

    constructor() {
        this.choSeong = new Map<string, number>();
        this.jungSeong = new Map<string, number>();
        this.jongSeong = new Map<string, number>();

        UniKR.choSeong.forEach(value => {
            this.choSeong.set(value, 0);
        })

        UniKR.jungSeong.forEach((value => {
            this.jungSeong.set(value, 0);
        }))

        UniKR.jongSeong.forEach(value => {
            this.jongSeong.set(value, 0);
        })
    }
}