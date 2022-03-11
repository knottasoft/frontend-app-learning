import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedDate } from '@edx/frontend-platform/i18n';
import { PageBanner } from '@edx/paragon';

function AccessExpirationMasqueradeBanner({ payload }) {
  const {
    expirationDate,
    userTimezone,
  } = payload;

  const timezoneFormatArgs = userTimezone ? { timeZone: userTimezone } : {};

  return (
    <PageBanner variant="warning">
      <FormattedMessage
        id="instructorToolbar.pageBanner.courseHasExpired"
        defaultMessage="У этого учащегося больше нет доступа к этому курсу. Его доступ истек {дата}."
        values={{
          date: <FormattedDate
            key="instructorToolbar.pageBanner.accessExpirationDate"
            value={expirationDate}
            {...timezoneFormatArgs}
          />,
        }}
      />
    </PageBanner>
  );
}

AccessExpirationMasqueradeBanner.propTypes = {
  payload: PropTypes.shape({
    expirationDate: PropTypes.string.isRequired,
    userTimezone: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccessExpirationMasqueradeBanner;
