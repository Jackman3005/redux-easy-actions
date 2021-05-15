import * as reduxActClassyExports from '../src/redux-act-classy'

describe('redux-act-classy', () => {
  it('exports library features', () => {
    expect(reduxActClassyExports).toBeDefined()

    expect(reduxActClassyExports.Classy).toBeDefined()
    expect(reduxActClassyExports.classyActionsMiddleware).toBeDefined()
    expect(reduxActClassyExports.classyActionsReducer).toBeDefined()
  })
})
