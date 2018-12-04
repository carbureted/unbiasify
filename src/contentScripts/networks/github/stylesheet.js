import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `.discussion-item .author,
        .gh-header-meta .author,
        .timeline-comment-header .author,
        .contrib-person h3 a,
        .header-nav-current-user strong.css-truncate-target,
        .vcard-names-container .vcard-names ${STYLES.hidden}`,
  ],
  photos: [
    `.timeline-comment-avatar,
        .avatar,
        .link-gray-dark.no-underline.text-bold.wb-break-all ${STYLES.blur}`,
  ],
  nameId: 'BIAS_GITHUB_NAMES',
  photoId: 'BIAS_GITHUB_PHOTOS',
}

export default stylesheet
