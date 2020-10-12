import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `a.u-colorGray3.u-uncoloredLink,
                .qtip a.profile-link,
                .connection-text,
                .people-list.connection  > div,
                .profile-text > h1,
                .profiles-show.connections .object-list-title a.profile-link,
                .profiles-show.connections .object-list-subtitle,
                .candidate-header-content .u-uncoloredLink,
                .card-content-container .js-browse-table-row-name a.u-unstyledLink,
                .avatar-container .name,
                .review a.profile-link.u-uncoloredLink,
                .similar-profile .object-list-title  ${STYLES.hidden}`,

    `.qtip a.profile-link:before,
                 a.u-colorGray3.u-uncoloredLink:before,
                .profiles-show.connections .object-list-title a.profile-link:before,
                .candidate-header-content .u-uncoloredLink:before,
                .card-content-container .js-browse-table-row-name a.u-unstyledLink:before,
                .review a.profile-link.u-uncoloredLink:before   ${STYLES.linkText}`,
  ],
  photos: [
    `.candidate-header-content img,
                 .card-content-container img,
                 .photo .profile-link img,
                 .profiles-show.subheader img,
                 .avatar-container img,
                 .review img,
                 .qtip-content img  ${STYLES.blur} `,
  ],
  styleSheetID: 'BIAS_ANGELLIST',
}

export default stylesheet
