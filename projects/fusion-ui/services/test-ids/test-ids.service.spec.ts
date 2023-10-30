import { TestBed } from '@angular/core/testing';
import { TestIdsService } from './test-ids.service';

const testId = 'test-id';
const testModifier = 'test-modifier';

describe('TestIdsService', () => {
  let service: TestIdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestIdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return undefined in case no test id', () => {
    expect(service.getTestAttribute(undefined, testModifier)).toBeUndefined();
  });

  it('should return undefined in case no testId "undefined"', () => {
    expect(service.getTestAttribute('undefined', testModifier)).toBeUndefined();
  });

  it('should return attribute value for testId and Modifier', () => {
    expect(service.getTestAttribute(testId, testModifier)).toBe(`${testId}--${testModifier}`);
  });
});
