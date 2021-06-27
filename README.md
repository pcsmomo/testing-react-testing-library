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

</details>

---

## What I have adjusted from the course

-

## Next Step

- TDD?
  > Frankly, I wrote tests after writing code. I did feel testing is a chore as the instructor, Bonnie said. I have got to change my process.
