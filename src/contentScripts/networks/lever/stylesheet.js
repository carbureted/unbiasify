import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `tr div.ellipsis:first-of-type ${STYLES.hidden}`,
    `.opportunity-profile-main-content h1 ${STYLES.hidden}`,
    `.story-title h3 b a ${STYLES.hidden}`,
    `.story-title h3 b a:before ${STYLES.candidateName}`,
    `tr div.ellipsis:first-of-type:before ${STYLES.candidateName}`,
    `.opportunity-profile-main-content h1:before ${STYLES.candidateName}`,
    `.candidate-name-link:before, .profile-name:before, .header-profile-name:after ${STYLES.candidateName}`,
    `.email-address:before ${STYLES.emailText}`,
    `.profile-story:nth-child(2) .story-title:before, [data-qa="resume-file"]:before ${STYLES.resumeText}`,
    `.resume-viewer .doc-viewer:before ${STYLES.leverResumeOverlay} `,
    `[data-qa="profile-links"]:before, .contact-info-added a:before ${STYLES.linkText}`,
    `.resume-thumbnail::before ${STYLES.overlay}`,
    `.candidate-name-link, .profile-name, .email-address, .header-profile-name, [data-qa="profile-links"], [data-qa="resume-file"], .contact-info-added a, .profile-story:nth-child(2) .story-title ${STYLES.hidden}`,
  ],
  photos: [],
  styleSheetID: 'BIAS_LEVER',
}

export default stylesheet
