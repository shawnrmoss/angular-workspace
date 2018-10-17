export class Functions {
  // Taken from https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge
  static mergeDeep(...objects) {
    const isObject = obj => obj && typeof obj === 'object';

    return objects.reduce((prev, obj) => {
      if (obj) {
        Object.keys(obj).forEach(key => {
          const pVal = prev[key];
          const oVal = obj[key];
          if (Array.isArray(pVal) && Array.isArray(oVal)) {
            prev[key] = pVal.concat(...oVal);
          } else if (isObject(pVal) && isObject(oVal)) {
            prev[key] = this.mergeDeep(pVal, oVal);
          } else {
            prev[key] = oVal;
          }
        });
        return prev;
      } else {
        return {};
      }
    }, {});
  }

  static roundValue(value: number, precision: number): number {
    const en = value.toString() + `e${precision}`;
    return Number(Math.round(+en) + `e-${precision}`);
  }
}
