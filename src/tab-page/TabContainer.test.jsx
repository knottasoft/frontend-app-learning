import React from 'react';
import { history } from '@edx/frontend-platform';
import { Route } from 'react-router';
import { initializeTestStore, render, screen } from '../setupTest';
import { TabContainer } from './index';

const mockDispatch = jest.fn();
const mockFetch = jest.fn().mockImplementation((x) => x);
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));
jest.mock('./TabPage', () => () => <div data-testid="TabPage" />);

describe('Tab Container', () => {
  const mockData = {
    children: [],
    fetch: mockFetch,
    tab: 'dummy',
    slice: 'courseware',
  };
  let courseId;

  beforeAll(async () => {
    const store = await initializeTestStore({ excludeFetchSequence: true });
    courseId = store.getState().courseware.courseId;
  });

  it('renders correctly', () => {
    history.push(`/course/${courseId}`);
    render(
      <Route path="/course/:courseId">
        <TabContainer {...mockData} />
      </Route>,
    );

    expect(mockFetch)
      .toHaveBeenCalledTimes(1)
      .toHaveBeenCalledWith(courseId);
    expect(mockDispatch)
      .toHaveBeenCalledTimes(1)
      .toHaveBeenCalledWith(courseId);
    expect(screen.getByTestId('TabPage')).toBeInTheDocument();
  });

  it('Should handle passing in a targetUserId', () => {
    history.push(`/course/${courseId}/1/`);
    const mockFetch2 = jest.fn().mockImplementation((x) => x);

    const mockData2 = {
      children: [],
      fetch: () => mockFetch2(courseId, 1),
      tab: 'dummy',
      slice: 'courseware',
    };

    render(
      <Route path="/course/:courseId/:targetUserId">
        <TabContainer {...mockData2} />
      </Route>,
    );

    expect(mockFetch2)
      .toHaveBeenCalledTimes(1)
      .toHaveBeenCalledWith(courseId, 1);
    expect(screen.getByTestId('TabPage')).toBeInTheDocument();
  });
});
