import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `.exploreHome-eventCard .eventCard-content .text--small:first-child.text--secondary span:first-child,
        .event-info-hosts-text a:first-child span span:last-child,
        .groupMember .groupMember-link p.groupMember-name,
        .memberinfo-widget-root#meta-leaders a.memberinfo-widget:first-child ${STYLES.hidden}`,
  ],
  photos: [
    `.avatar, .avatar--person,
        #meta-org-photo img,
        ul#memberList li.memberInfo div.unit div.unit a,
        .discussion-card .chunk .flex .flex-item .discussion-card--name ${STYLES.blur}`,
  ],
  nameId: 'BIAS_MEETUP_NAMES',
  photoId: 'BIAS_MEETUP_PHOTOS',
}

export default stylesheet
