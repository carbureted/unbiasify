import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `.person-name:before, .person-info-column .name:before ${STYLES.candidateName}`,
    `.person-name, .name ${STYLES.hidden}`,
  ],
  photos: [`.person-photo ${STYLES.blur}`],
  styleSheetID: 'BIAS_GREENHOUSE',
}

export default stylesheet
