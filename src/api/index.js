import allpoke from "../json/allpoke.json";
import kanto from "../json/kanto";
import johto from "../json/johto";
import hoenn from "../json/hoenn";
import sinnoh from "../json/sinnoh";
import unova from "../json/unova";
import kalos from "../json/kalos";
import galar from "../json/galar";

export const getJSON = (url) => {
    switch (url) {
        case "/":
            return allpoke;
        case "/kanto":
            return kanto;
        case "/johto":
            return johto;
        case "/hoenn":
            return hoenn;
        case "/sinnoh":
            return sinnoh;
        case "/unova":
            return unova;
        case "/kalos":
            return kalos;
        case "/galar":
            return galar;
        default:
            return allpoke;
  }
};
