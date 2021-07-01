import React from 'react';

import { useAlert } from '../../../../generic/user-messages';
import { useModel } from '../../../../generic/model-store';

const ScheduledContentAlert = React.lazy(() => import('./ScheduledCotentAlert'));

const useScheduledContentAlert = (courseId) => {
  const { hasScheduledContent } = useModel('outline', courseId);
  const { isEnrolled } = useModel('courseHomeMeta', courseId);
  useAlert(hasScheduledContent && isEnrolled, {
    code: 'ScheduledContentAlert',
    topic: 'outline-course-alerts',
  });

  return { ScheduledContentAlert };
};

export default useScheduledContentAlert;
