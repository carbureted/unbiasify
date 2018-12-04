import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `.candidate-name-link:before, .profile-name:before, .header-profile-name:after ${STYLES.candidateName}`,
    `.email-address:before ${STYLES.emailText}`,
    `.profile-story:nth-child(2) .story-title:before, [data-qa="resume-file"]:before ${STYLES.resumeText}`,
    `[data-qa="profile-links"]:before, .contact-info-added a:before ${STYLES.linkText}`,
    `.resume-thumbnail::before ${STYLES.overlay}`,
    `.candidate-name-link, .profile-name, .email-address, .header-profile-name, [data-qa="profile-links"], [data-qa="resume-file"], .contact-info-added a, .profile-story:nth-child(2) .story-title ${STYLES.hidden}`,
  ],
  photos: [],
  nameId: 'BIAS_LEVER_NAMES',
  photoId: 'BIAS_LEVER_PHOTOS',
}

export default stylesheet
