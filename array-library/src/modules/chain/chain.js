/*eslint keyword-spacing: ["error", { "before": true }]*/
/*eslint-env es6*/

import { take } from "./../take/take";
import { skip } from "./../skip/skip";
import { filter } from "./../filter/filter";
import { map } from "./../map/map";
import { foreach } from "./../foreach/foreach";
import { reduce } from "./../reduce/reduce";

export const chain = (array) => {
  return {
    initialArray: [...array],
    take(callback) {
      this.initialArray = take(this.initialArray, callback);
      return this;
    },
    skip(callback) {
      this.initialArray = skip(this.initialArray, callback);
      return this;
    },
    filter(callback) {
      this.initialArray = filter(this.initialArray, callback);
      return this;
    },
    map(callback) {
      this.initialArray = map(this.initialArray, callback);
      return this;
    },
    reduce(callback, initialValue = false) {
      this.initialArray = reduce(this.initialArray, callback, initialValue);
      return this;
    },
    foreach(callback) {
      foreach(this.initialArray, callback)
      return this;
    },
    value() {
      return this.initialArray;
    }
  }
}