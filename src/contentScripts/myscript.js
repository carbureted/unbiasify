import $ from 'jquery'

import { angellistUpdater, TOGGLE_ANGELLIST_NAMES } from './networks/angellist'
import { githubUpdater } from './networks/github'
import { greenhouseUpdater } from './networks/greenhouse'
import { meetupUpdater } from './networks/meetup'
import { leverUpdater } from './networks/lever'
import { linkedinUpdater, TOGGLE_LINKED_IN_NAMES } from './networks/linkedin'
import { replitUpdater, TOGGLE_REPLIT_NAMES } from './networks/replit'

import { clearTabTitle } from './utils/clear-tab-title'
import { URLS } from './utils/urls'

export const changeAll = (val = true) => {
  linkedinUpdater(val)
  angellistUpdater(val)
  replitUpdater(val)
  greenhouseUpdater(val)
  leverUpdater(val)
  githubUpdater(val)
  meetupUpdater(val)
}

export const toggleAll = (function() {
  let toggleAll = false
  return () => {
    toggleAll = !toggleAll
    chrome.storage.sync.set({ toggleAll: toggleAll })
  }
})()

changeAll()

$(document).on('keydown', function(e) {
  const ctrlKey = e.ctrlKey || e.metaKey
  const shiftKey = e.shiftKey
  const semiColon = e.which === 186

  if (ctrlKey && shiftKey && semiColon) {
    toggleAll()
  }
})

chrome.storage.onChanged.addListener(function(changes, namespace) {
  for (const key in changes) {
    const storageChange = changes[key]
    if (key === 'toggleAll') {
      const isTrue = storageChange.newValue
      changeAll(isTrue)
    }
  }
})

// Callback function to execute when mutations are observed
const mutationCallback = function(mutationsList) {
  for (const mutation of mutationsList) {
    if (mutation.type == 'childList' && document.title !== 'Unbiasified') {
      clearTabTitle(TOGGLE_REPLIT_NAMES, URLS['replit'])
      clearTabTitle(TOGGLE_ANGELLIST_NAMES, URLS['anglelList'])
      clearTabTitle(TOGGLE_LINKED_IN_NAMES, URLS['linkedIn'])
    }
  }
}

const targetNode = $('title')[0]

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true }

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutationCallback)
// Start observing the target node for configured mutations
// TODO -- figure out how to handle this so that it doesn't constantly fire
observer.observe(targetNode, config)

export const messageListener = chrome.runtime.onMessage.addListener(function(
  request
) {
  switch (true) {
    case request.toggleLinkedin !== undefined:
      linkedinUpdater(request.toggleLinkedin)
      break
    case request.toggleAngelList !== undefined:
      angellistUpdater(request.toggleAngelList)
      break
    case request.toggleReplit !== undefined:
      replitUpdater(request.toggleReplit)
      break
    case request.toggleGreenhouse !== undefined:
      greenhouseUpdater(request.toggleGreenhouse)
      break
    case request.toggleLever !== undefined:
      leverUpdater(request.toggleLever)
      break
    case request.toggleGithub !== undefined:
      githubUpdater(request.toggleGithub)
      break
    case request.toggleMeetup !== undefined:
      meetupUpdater(request.toggleMeetup)
      break
  }
})
