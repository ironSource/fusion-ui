// import {TestBed, inject, waitForAsync, getTestBed} from '@angular/core/testing';
// import {MockBackend} from '@angular/http/testing';
// import {HttpModule, Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
//
// import {ApiService} from './api.service';
// import {CacheService} from '../cache/cache.service';
// import {LogService} from '../log/log.service';
// import {CapitalizePipe} from '../../pipes/string/capitalize/capitalize.pipe';
//
// describe('Api Service', () => {
//
//   let mockBackend: MockBackend;
//
//
//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpModule],
//       providers: [
//         MockBackend,
//         ApiService,
//         CacheService,
//         LogService,
//         CapitalizePipe,
//         BaseRequestOptions,
//         {
//           provide: Http,
//           useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
//           deps: [MockBackend, BaseRequestOptions]
//         }
//       ]
//     });
//     mockBackend = getTestBed().get(MockBackend);
//   }));
//
//   it('Service should construct', inject([ApiService], (apiService) => {
//     expect(apiService).toBeDefined();
//   }));
//
//   it('Must have method "get"', waitForAsync(inject([ApiService, MockBackend], (apiService, mockBackendTest) => {
//
//     const mockResponse = [{
//       title: 'Item 1',
//       id: 1
//     }, {
//       title: 'Item 2',
//       id: 2
//     }, {
//       title: 'Item 3',
//       id: 3
//     }, {
//       title: 'Item 4',
//       id: 4
//     }];
//
//     mockBackendTest.connections.subscribe(conn => {
//       conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
//     });
//
//     const result = apiService.get();
//
//     result.subscribe(res => {
//       const resMock = JSON.parse(res);
//       expect(resMock).toEqual(mockResponse);
//     });
//   })));
//
//   it('Must have method "post"', waitForAsync(inject([ApiService, MockBackend], (apiService, mockBackendTest) => {
//
//     const mockResponse = {
//       id: 128
//     };
//
//     mockBackendTest.connections.subscribe(conn => {
//       conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
//     });
//
//     const result = apiService.post();
//
//     result.subscribe(res => {
//       const resMock = JSON.parse(res);
//       expect(resMock).toEqual(mockResponse);
//     });
//   })));
//
//   it('Must have method "put"', waitForAsync(inject([ApiService, MockBackend], (apiService, mockBackendTest) => {
//
//     const mockResponse = {
//       id: 128
//     };
//
//     mockBackendTest.connections.subscribe(conn => {
//       conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(mockResponse)})));
//     });
//
//     const result = apiService.put();
//
//     result.subscribe(res => {
//       const resMock = JSON.parse(res);
//       expect(resMock).toEqual(mockResponse);
//     });
//   })));
//
//   it('Must have method "delete"', waitForAsync(inject([ApiService, MockBackend], (apiService, mockBackendTest) => {
//
//     const mockResponse = 'ok';
//
//     mockBackendTest.connections.subscribe(conn => {
//       conn.mockRespond(new Response(new ResponseOptions({body: mockResponse})));
//     });
//
//     const result = apiService.delete();
//
//     result.subscribe(res => {
//       expect(res).toEqual(mockResponse);
//     });
//   })));
//
//   // todo: add test for 'handleError'
//   /*it('Must have "handleError"', waitForAsync(inject([ApiService, MockBackend], (apiService, mockBackend) => {
//
//    let opts = {type:ResponseType.Error, status:404, statusText:'Not Found', body: null};
//
//    mockBackend.connections.subscribe(conn => {
//    conn.mockRespond(new Response(new ResponseOptions(opts)));
//    });
//
//    let result = apiService.put();
//
//    result.subscribe(res => {
//    expect(res).toEqual('oppa');
//    });
//    })));*/
//
// });
