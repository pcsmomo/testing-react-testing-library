# React Testing Library Summary

Testing React with Jest and Testing Library by Bonnie Schulkin

- Node : v14.15.4
- NPM : 6.14.10

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

- [jest-dom Matchers](https://github.com/testing-library/jest-dom)
- [jest Expect Methods](https://jestjs.io/docs/expect#methods)
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

</details>

---

## What I have learned from this course

-

## Next Step

- TDD?
  > Frankly, I wrote tests after writing code. I did feel testing is like a chore as the instructor, Bonnie mentioned. I have got to change my process to use profer TDD.
