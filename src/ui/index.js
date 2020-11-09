import $ from 'jquery'
import { getInitialVal } from '../contentScripts/utils/get-initial-val'

document.addEventListener('DOMContentLoaded', function() {
  var $toggleLinkedIn = $('#toggle-linkedin')
  var $toggleAngelList = $('#toggle-angellist')
  var $toggleReplit = $('#toggle-replit')
  var $toggleGreenhouse = $('#toggle-greenhouse')
  var $toggleLever = $('#toggle-lever')
  var $toggleGithub = $('#toggle-github')
  var $toggleMeetup = $('#toggle-meetup')
  var $toggleAll = $('#toggle-all')

  const LINKEDIN = 'linkedIn'
  const ANGELLIST = 'angelList'
  const REPLIT = 'replit'
  const GREENHOUSE = 'greenhouse'
  const LEVER = 'lever'
  const GITHUB = 'github'
  const MEETUP = 'meetup'
  const ALL = 'all'

  setInitialValues(LINKEDIN, $toggleLinkedIn)
  setInitialValues(ANGELLIST, $toggleAngelList)
  setInitialValues(REPLIT, $toggleReplit)
  setInitialValues(GREENHOUSE, $toggleGreenhouse)
  setInitialValues(LEVER, $toggleLever)
  setInitialValues(GITHUB, $toggleGithub)
  setInitialValues(MEETUP, $toggleMeetup)
  setInitialValues(ALL, $toggleAll)

  $toggleLinkedIn.off().on('change', function() {
    const set = $toggleLinkedIn.is(':checked')
    chrome.storage.sync.set({ [LINKEDIN]: set })

    sendMessage({ toggleLinkedin: set })
  })

  $toggleAngelList.off().on('change', function() {
    const set = $toggleAngelList.is(':checked')
    sendMessage({ toggleAngelList: set })
  })

  $toggleReplit.off().on('change', function() {
    const set = $toggleReplit.is(':checked')
    sendMessage({ toggleReplit: set })
  })

  $toggleGreenhouse.off().on('change', function() {
    const set = $toggleGreenhouse.is(':checked')
    sendMessage({ toggleGreenhouse: set })
  })

  $toggleLever.off().on('change', function() {
    const set = $toggleLever.is(':checked')
    sendMessage({ toggleLever: set })
  })

  $toggleGithub.off().on('change', function(e) {
    const set = $toggleGithub.is(':checked')
    chrome.storage.sync.set({ [GITHUB]: set })

    sendMessage({ toggleGithub: set })
  })

  $toggleMeetup.off().on('change', function(e) {
    const set = $toggleMeetup.is(':checked')
    chrome.storage.sync.set({ [MEETUP]: set })

    sendMessage({ toggleMeetup: set })
  })

  $toggleAll.off().on('change', function(e) {
    const set = $toggleAll.is(':checked')

    chrome.storage.sync.set({ [ALL]: set })
    $toggleLinkedIn.prop('checked', set).trigger('change')
    $toggleMeetup.prop('checked', set).trigger('change')
    $toggleAngelList.prop('checked', set).trigger('change')
    $toggleLever.prop('checked', set).trigger('change')
    $toggleGreenhouse.prop('checked', set).trigger('change')
    $toggleGithub.prop('checked', set).trigger('change')
    $toggleReplit.prop('checked', set).trigger('change')

    sendMessage({ toggleAll: set })
  })

  function sendMessage(message) {
    chrome.tabs.query({}, function(tabs) {
      for (var i = 0; i < tabs.length; i++) {
        chrome.tabs.sendMessage(tabs[i].id, message)
      }
    })
  }

  function setInitialValues(identifier, toggleInput) {
    getInitialVal(identifier, val => {
      toggleInput.prop('checked', val)
    })
  }

  function handleTabCreation(url) {
    chrome.tabs.create({ url }, function(tab) {
      setTimeout(function() {
        chrome.tabs.remove(tab.id)
      }, 500)
    })
  }

  $('#actionButton').on('click', function() {
    var action = $('#additional-options').val()

    switch (action) {
      case 'feedback':
        var emailUrl = 'mailto:martin.hauck@gmail.com'
        handleTabCreation(emailUrl)
        break

      case 'additionalResource':
        var url = 'https://www.thepeoplepeoplegroup.com/unbiasify'
        handleTabCreation(url)
        break

      case 'tweetUs':
        var tweetUrl =
          "https://twitter.com/intent/tweet?text=I've been using @unbiasify to reduce my unconscious bias! You should check it out too!"
        handleTabCreation(tweetUrl)
        break
    }
  })
})
