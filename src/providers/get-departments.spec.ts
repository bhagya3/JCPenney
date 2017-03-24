import { GetDepartments } from './get-departments';

let getDept = null,
  http: any;

describe('Get Departments service', () => {
  beforeEach(() => {
    getDept = new GetDepartments(http);
  });

  it('should have a load method', () => {
    expect(typeof getDept.load).toBeDefined();
    expect(typeof getDept.load).toBe("function");
  });
  it('load method should return an object', () => {
    let result = getDept.load();
    expect(typeof (result)).toEqual('object');
    expect(typeof (result)).not.toEqual('number');
    expect(typeof (result)).not.toEqual('string');
  });
  it('load method should not return an empty object', () => {
    let result = getDept.load();
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