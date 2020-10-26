import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `tr div.ellipsis:first-of-type ${STYLES.hidden}`,
    `.opportunity-profile-main-content h1 ${STYLES.hidden}`,
    `.story-title h3 b a ${STYLES.hidden}`,
    `.px5 h3 ${STYLES.hidden}`,
    `.px5 .py1 p.inline ${STYLES.hidden}`,
    `.px5 .py1 a.inline ${STYLES.hidden}`,
    `.story-title h3 b a:before ${STYLES.candidateName}`,
    `tr div.ellipsis:first-of-type:before ${STYLES.candidateName}`,
    `.opportunity-profile-main-content h1:before ${STYLES.candidateName}`,
    `.px5 h3:before ${STYLES.candidateName}`,
    `.candidate-name-link:before, .profile-name:before, .header-profile-name:after ${STYLES.candidateName}`,
    `.email-address:before ${STYLES.emailText}`,
    `.px5 .py1 p.inline:before ${STYLES.contactText}`,
    `.px5 .py1 a.inline:before ${STYLES.contactText}`,
    `.profile-story:nth-child(2) .story-title:before, [data-qa="resume-file"]:before ${STYLES.resumeText}`,
    `.resume-viewer .doc-viewer:before ${STYLES.leverResumeOverlay} `,
    `.box-shadow-floating-resume .doc-viewer ${STYLES.relative}`,
    `.box-shadow-floating-resume .doc-viewer:before ${STYLES.leverResumeOverlay}`,
    `[data-qa="profile-links"]:before, .contact-info-added a:before ${STYLES.linkText}`,
    `.resume-thumbnail::before ${STYLES.overlay}`,
    `.candidate-name-link, .profile-name, .email-address, .header-profile-name, [data-qa="profile-links"], [data-qa="resume-file"], .contact-info-added a, .profile-story:nth-child(2) .story-title ${STYLES.hidden}`,
    `.box-shadow-floating-resume .doc-viewer .message-banner ${STYLES.raise}`,
  ],
  photos: [],
  styleSheetID: 'BIAS_LEVER',
}

export default stylesheet
