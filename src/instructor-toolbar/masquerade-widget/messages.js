import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  genericError: {
    id: 'masquerade-widget.userName.error.generic',
    defaultMessage: 'An error has occurred; please try again.',
    description: 'Message shown after a general error when attempting to masquerade',
  },
  placeholder: {
    id: 'masquerade-widget.userName.input.placeholder',
    defaultMessage: 'Username or email',
    description: 'Placeholder text to prompt for a user to masquerade as',
  },
  userNameLabel: {
    id: 'masquerade-widget.userName.input.label',
    defaultMessage: 'Masquerade as this user',
    description: 'Label for the masquerade user input',
  },
  masqueradeDropDownLable: {
    id: 'masquerade-widget.masquerade.dropdown.label',
    defaultMessage: 'View this course as:',
    description: 'Label for the masquerade dropdown',
  },
  masqueradeRoleDefault: {
    id: 'masquerade-widget.masquerade.role.default',
    defaultMessage: 'Staff',
    description: 'Label for the masquerade dropdown',
  },
  masqueradeRoleStudent: {
    id: 'masquerade-widget.masquerade.role.student',
    defaultMessage: 'Specific Student...',
    description: 'Label for the masquerade dropdown',
  },
  masqueradeRoleLearner: {
    id: 'masquerade-widget.masquerade.role.learner',
    defaultMessage: 'Learner',
    description: 'Label for the masquerade dropdown',
  },
  masqueradeError: {
    id: 'masquerade-widget.masquerade.error',
    defaultMessage: 'Unable to get masquerade options',
    description: 'fetch masquerade error',
  },

});

export default messages;
