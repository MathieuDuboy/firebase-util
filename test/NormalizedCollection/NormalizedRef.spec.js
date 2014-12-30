'use strict';

var NormalizedRef = require('../../src/NormalizedCollection/libs/NormalizedRef.js');
var Query = require('../../src/NormalizedCollection/libs/Query.js');
var hp = require('./helpers');

describe('NormalizedRef', function() {
  describe('<constructor>', function() {
    it('should inherit Query', function() {
      var ref = new NormalizedRef(hp.stubRec());
      expect(ref).toBeInstanceOf(Query);
    });

    //todo-test
  });

  describe('auth', function () {
    it('should have tests'); //todo-test
  });
  
  describe('unauth', function () {
    it('should have tests'); //todo-test
  });
  
  describe('child', function () {
    it('should have tests'); //todo-test
  });
  
  describe('parent', function () {
    it('should have tests'); //todo-test
  });
  
  describe('root', function () {
    it('should have tests'); //todo-test
  });
  
  describe('key', function () {
    it('should have tests'); //todo-test
  });
  
  describe('toString', function () {
    it('should have tests'); //todo-test
  });
  
  describe('set', function () {
    it('should have tests'); //todo-test
  });
  
  describe('update', function () {
    it('should have tests'); //todo-test
  });
  
  describe('remove', function () {
    it('should have tests'); //todo-test
  });
  
  describe('push', function () {
    it('should have tests'); //todo-test
  });
  
  describe('setWithPriority', function () {
    it('should have tests'); //todo-test
  });
  
  describe('setPriority', function () {
    it('should have tests'); //todo-test
  });
  
  describe('transaction', function () {
    it('should have tests'); //todo-test
  });
  
  describe('goOffline', function () {
    it('should have tests'); //todo-test
  });
  
  describe('goOnline', function () {
    it('should have tests'); //todo-test
  });

});