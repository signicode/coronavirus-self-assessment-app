# How you feel, World? - covid-19 self assessment app

Because of the fact that the Covid-19 is more and more present, and it’s very similar to other infections such as flu or cold, we’d like to provide people with a web-based self-assessment tool. Our application is built with a strong focus on respecting patient’s privacy. How You Feel app allows you to perform self-checkup to determine the possibility of SARS-Cov-19 infection, as well as a cross-reference for alternative reasons for the combination of symptoms. It gives the user a number of recommendations one should take into consideration in the nearest future.

Couple things:

* The app will not track - ever - do not ask for adding that feature.
* We will shortly introduce targetted communication feature for officials - still respecting the user pricacy.
* The app will not send the symptom data anywhere - ideas for distributed analytics would be welcome though (provided that they respect the users privacy)

## Build & assets

In order to build the app run these commands:

```bash
npm ci          # installs the dependencies
npm run build   # creates the application
```

The assets will be found in `dist/` directory.

You can also build a ready image with the HTTP Server and everything ready.

## Development

You can edit the code as you like (provided you remember this app is a GPL-3.0 app - and a front-end one - you need to provide your users with the code). To run a development server run the following command:

```bash
npm start
```

The app will start - just navigate to: [localhost:3000](https://localhost:3000/) - in case of remote development, port 4000 is also in use. All code changes are rendered immediately (no reload required).

## Adapting for your country/langage

We recognize different countries may have different needs, rules and regulations - we kept the adaptive stuff in one place to make adaptations easier:

* Translations in `public/locales/{your language iso code}`
* Logic and symptom weights:
  * `src/lib/calculator.ts` - the assessment calculator
  * `src/lib/questions.ts` - the list of questions answer values
  * `src/lib/weights.ts` - the matrix of answer weights

## License

The code and artwork is [licensed under GPL-3.0](./LICENSE.md).
