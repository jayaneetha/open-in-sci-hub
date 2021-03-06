// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'ieeexplore.ieee.org' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ,
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'www.sciencedirect.com' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ,
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'link.springer.com' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ,
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'pubs.acs.org' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
      ,
      {
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'pubs.rsc.org' },
        })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }

    ]);


  });

});
