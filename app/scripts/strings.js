'use strict';

angular.module('bwwc.strings')
  .constant('STRINGS', {
    GENERATE_SESSION_ERROR: 'Error! Failed to store public key on server. Please try again.',
    GENERATE_SESSION_BUTTON_NORMAL: 'Generate Session',
    GENERATE_SESSION_BUTTON_LOADING: 'Loading...',
    GET_SESSION_PARTICIPANTS_ERROR: 'Failed to retrieve participants, please try again later.'
  });
