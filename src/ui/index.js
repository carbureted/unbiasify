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

  const LINKEDIN = 'linkedin'
  const ANGELLIST = 'angelList'
  const REPLIT = 'replit'
  const GREENHOUSE = 'greenhouse'
  const LEVER = 'lever'
  const GITHUB = 'github'
  const MEETUP = 'meetup'

  setInitialValues(LINKEDIN, $toggleLinkedIn)
  setInitialValues(ANGELLIST, $toggleAngelList)
  setInitialValues(REPLIT, $toggleReplit)
  setInitialValues(GREENHOUSE, $toggleGreenhouse)
  setInitialValues(LEVER, $toggleLever)
  setInitialValues(GITHUB, $toggleGithub)
  setInitialValues(MEETUP, $toggleMeetup)

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
    const set = $toggleGreenhouse.is(':checked')
    chrome.storage.sync.set({ [MEETUP]: set })

    sendMessage({ toggleMeetup: set })
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
