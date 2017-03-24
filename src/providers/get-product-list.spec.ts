import { GetProductList } from './get-product-list';
let getProductList = null,
http: any;

describe('Get Product List service', () => {
  beforeEach(() => {
    getProductList = new GetProductList(http);
  });

  it('should have a load method', () => {
    expect(typeof getProductList.load).toBeDefined();
    expect(typeof getProductList.load).toBe("function");
  });
  it('load method should return an object', () => {
    let result = getProductList.load();
    expect(typeof (result)).toEqual('object');
    expect(typeof (result)).not.toEqual('number');
    expect(typeof (result)).not.toEqual('string');
  });
  it('load method should not return an empty object', () => {
    let result = getProductList.load();
    expect(result.length).not.toBeNull();
    expect(result.length).not.toBeNull();
    expect(result.length).toBeUndefined();
    expect(result.length).not.toEqual(null);
  });
  // it('object should contain following properties', () =>{
  //   let result = getDept.load();
  //   //expect(typeof (result)).toEqual('object');
  //   expect(Object.keys(result)).toContain('object');
  //   // expect(_.has(myObject, prop)).toBeTruthy();
  // });
});