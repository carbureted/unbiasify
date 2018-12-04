import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `strong.fullname.show-popup-with-id,
            span.username.u-dir,
            .ProfileNameTruncated-link,
            .ProfileHeaderCard-nameLink,
            span.NewTweetButton-text,
            span.ProfileHeaderCard-urlText > a,
            .js-retweet-text b,
            div.tooltip ,
            .js-recommended-followers .fullname,
            .ActivityItem .fullname ${STYLES.hidden}`,

    `.js-retweet-text b:before { visibility: visible; content: "User"; }`,

    `.ActivityItem .fullname:before,
            .js-recommended-followers .fullname:before,
            .ProfileHeaderCard-nameLink:before,
            .ProfileNameTruncated-link:before,
            strong.fullname.show-popup-with-id:before ${STYLES.linkText}`,
  ],
  photos: [
    `img.avatar.js-action-profile-avatar,
            .ProfileCard-bg,
            .ProfileCard-avatarImage.js-action-profile-avatar,
            .ProfileAvatar-image,
            .ProfileCardMini-avatarImage,
            .ActivityItem .avatar,
            .ActivityItem-displayText strong,
            .tweet-content .QuoteTweet-originalAuthor ${STYLES.hidden}`,

    `.js-profile-popup-actionable .avatar,
            .ProfileCanopy-headerBg > img ${STYLES.blur}`,
  ],
  nameId: 'BIAS_NAMES_TWITTER',
  photoId: 'BIAS_PHOTOS_TWITTER',
}

export default stylesheet
