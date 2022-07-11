import UniKR from "./constants/UniKR";
import KRCH from "./models/KRCH";

// if str is not Korean, it return false
export function isKoreanWord(str: string) {
    const unicode = str.charCodeAt(0);
    if (unicode < UniKR.start || unicode > UniKR.end) {
        return false;
    } else {
        return true;
    }
}

// Seperate Consonants and Vowels
export function parseKorean(ch: string) {
    const unicode = ch.charCodeAt(0);

    const offset: number = unicode - UniKR.start;

    const indexOfChoSeong = Math.floor(offset / 588);
    const indexOfJungSeong = Math.floor((offset - (indexOfChoSeong * 588)) / 28);
    const indexOfJongSeong = Math.floor(offset % 28);

    return new KRCH(
        UniKR.choSeong[indexOfChoSeong],
        UniKR.jungSeong[indexOfJungSeong],
        indexOfJongSeong !== 0 ? UniKR.jongSeong[indexOfJongSeong] : null
    );
}
