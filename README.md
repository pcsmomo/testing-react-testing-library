# React Testing Library Summary

Testing React with Jest and Testing Library by Bonnie Schulkin

- Node : v14.15.4
- NPM : v6.14.10

## Details

<details open>
  <summary>Click to Contract/Expend</summary>

### 2. Craete-React-App

```
npx create-react-app color-button
```

### 3. First Test With Testing Library

**Using regular expression in getByText**

### 5. Jest: Watch Mode And How Tests Work

#### jest matchers

- toBe() or toHaveLength()

#### jest-dom

- Comes with create-react-app
- src/setupTest.js imports it
- DOM-based matchers  
  examples: toBeVisible() or toBeChecked()

### 6. TDD: Test Driven Development

- Write tests before writing code \
  Then write code according to "spec" set by tests
- "red-green" testing \
  Tests fail before code is written

#### Why TDD?

- Makes a huge difference in how it feels to write tests \
  part of the coding process, not a "chore" to do at the end
- More efficient \
  Re-run tests "for free" after changes

> Frankly, I wrote tests after writing code. I did feel testing is like a chore as the instructor, Bonnie mentioned. I have got to change my process to use profer TDD.

```sh
git commit -am"message"
# To save time lol
```

### 7. React Testing Library Philosophy

- Unit tests : Tests one unit of code in isolation
- Integration tests : How multiple units work together
- \*Functional tests : (Behaviour) Tests a particular function of software
- Acceptance / End-toend (E2E) tests : Use actual browser and server (Cypress, Selenium)

### 9. TDD (Test Driven Development) vs BDD (Behavior Driven Development)

Testing Library encourages testing "behaviour" over "implementation"

However, BDD is ver explicitly defined : involves collaboration between lots of roles such developers, QA, business partners, Etc.

In this course, only developers, so TDD!

### 10. Testing Library and Accessibility

[Whici query should I use?](https://testing-library.com/docs/queries/about/#priority)

1. Queries Accessible to Everyone \
   getByRole, getByLabelText, getByPlaceholderText, getByText, getByDisplayValue
2. Semantic Queries \
   getByAltText, getByTitle
3. Test IDs \
   getByTestId

```js
const linkElement = screen.getByRole('link', { name: /learn react/i });
```

#### [Roles documentation](https://www.w3.org/TR/wai-aria/#role_definitions)

Some element have build-in roles: button, a

### 16. Test Initial Condition of Button and Checkbox

- [jest Matchers and Expect Methods](https://jestjs.io/docs/expect#methods)
- [jest-dom Matchers](https://github.com/testing-library/jest-dom)
- [jest-extended Matchers](https://github.com/jest-community/jest-extended)

### 26. ESLint and Prettier

- [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)
- [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)

### 28. ESLint for Testing Library and Jest-DOM

```sh
npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom
```

[Bonnie's preferred rules and plugins](https://github.com/bonnie/bonniedotdev/blob/master/client/.eslintrc.json)

### 29. Configure ESLint in VSCode

[ESLint Options](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

[VS Code : Settings file locations](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)

### 33. ESLint and Prettier Setup

```sh
npm install --save-dev eslint-plugin-testing-library eslint-plugin-jest-dom
```

### 34. React Bootstrap Setup

```sh
npm install --save react-bootstrap bootstrap@4.6.0
```

### 38. React Bootstrap Popover and Testing Library userEvent

- [@testing-library/user-event](https://github.com/testing-library/user-event) : More Advanced than **fireEvent**

```sh
npm install @testing-library/user-event @testing-library/dom --save-dev
```

### 39. Screen Query Methods

#### command[All]ByQueryType

- command
  - get: expect element to be in DOM
  - query: expect element not to be in DOM
  - find: expect element to appear async
- \[All\]
  - (exclude) expect only one match
  - (include) expect more than one match
- QueryType
  - Role (most preffered)
  - AllText (images)
  - Text (display elements)
  - Form elements
    - PlaceholderText
    - LabelText
    - DisplayValue

#### screen Query Reference

- [About Queries](https://testing-library.com/docs/queries/about/)
- [Cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet/#queries)
- [Priority](https://testing-library.com/docs/queries/about/#priority)

### 42. Not wrapped in act(...) Error, Async Disappearance

[Fix the "not wrapped in act(...)" warning](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning)

[Waiting for disappearance](https://testing-library.com/docs/guide-disappearance/#waiting-for-disappearance)

### 45. Introduction to Mock Service Worker and Handlers

#### [Mock Service Worker (msw)](https://mswjs.io/docs/)

```sh
npm install msw --save-dev
```

### 46. Setting up the Mock Service Worker Server

[Integrate with Node](https://mswjs.io/docs/getting-started/integrate/node)

### 47. Tests with Mock Service Worker: Scoop Options

```js
const scoopImages = screen.getAllByRole('img', { name: /scoop$/i });
// I guess this name is referring alt property in img tag
```

### 48. OPTIONAL React Code: Options and ScoopOption Components

```sh
npm install axios --save
```

```js
// It a good habit writing TODO: comment

// TODO: handle error response
// TODO: replace `null` with ToppingOption when available
```

### 49. Using `await findBy` to Find Elements that Populate Asynchronously

> **⚠ Warning: Asynchronous Test - await findBy**
> When you are waiting for something to appear asynchronously on the page, you must use _await findBy_

### 52. Simulating Server Error Response in Tests

Overwrite Mock Service Worker response for individual tests

[Mock Service Worker resetHandlers()](https://mswjs.io/docs/api/setup-server/reset-handlers)

### 54. Running only Selected Tests, and `waitFor`

1. Isolate file with typing _p_ in Jest watch mode

```sh
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

2. Isolate test with file with _test.only_ and _test.skip_

### 55. Review: Server Error Response and Test Debugging Tools

_awaitFor_ for test where _await findBy\*_ isn't enough

### 60. Adding Context to Test Setup; Test Catching Error in Code

[Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) : the namespace for **the ECMAScript Internationalization API**

[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

### 61. Creating Custom Render to Wrap in Provider By Default

[React Testing Library Setup](https://testing-library.com/docs/react-testing-library/setup)

```js
- import { render, fireEvent } from '@testing-library/react';
+ import { render, fireEvent } from '../test-utils';
```

### 66. Unmounted Component Error

##### Warnings Occured

```
Warning: An update to Options inside a test was not wrapped in act(...).
When testing, code that causes React state updates should be wrapped into act(...):
act(() => {
  /* fire events that update state */
});
/* assert on the output */
```

##### Reason : After finishing the test, Still rendering data

##### Possible Solution, but..

- [Skip auto cleanup](https://testing-library.com/docs/react-testing-library/setup/#skipping-auto-cleanup) \
  Not possible on a test-by-test basis
- Mock useEffect to bypass server call \
  Not recommended, farther from production code path
- Include in the beginning of a test that asserts on state changes \
  Dont't need to include in all tests because it only needs to be tested once

</details>

---

## What I have learned from this course

- Using TODO: comment
- To use Just watch mode proferly with Watch Usage \
  For example, with 'p', Filtering by filename regex pattern.

## Next Step

- TDD?
  > Frankly, I wrote tests after writing code. I did feel testing is like a chore as the instructor, Bonnie mentioned. I have got to change my process to use profer TDD.
