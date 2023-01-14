# JSON-LD GitHub Action

🚧 Experimental 🏗️. 

[![Demo](https://github.com/transmute-industries/jsonld-github-action/actions/workflows/demo.yml/badge.svg)](https://github.com/transmute-industries/jsonld-github-action/actions/workflows/demo.yml)

[![CI](https://github.com/transmute-industries/jsonld-github-action/actions/workflows/ci.yml/badge.svg)](https://github.com/transmute-industries/jsonld-github-action/actions/workflows/ci.yml)
![Branches](./badges/coverage-branches.svg)
![Functions](./badges/coverage-functions.svg)
![Lines](./badges/coverage-lines.svg)
![Statements](./badges/coverage-statements.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

<!-- [![NPM](https://nodei.co/npm/@transmute/jsonld-github-action.png?mini=true)](https://npmjs.org/package/@transmute/jsonld-github-action) -->

<img src="./transmute-banner.png" />

#### [Questions? Contact Transmute](https://transmute.typeform.com/to/RshfIw?typeform-source=jsonld-github-action)

## Usage

```yml
name: Demo
on: workflow_dispatch
jobs:
  demo:
    runs-on: ubuntu-latest
    steps:
      - name: Frame a Document
        uses: transmute-industries/jsonld-github-action@v0.0.1
        id: frame
        with:
          operation: frame
          document: |
            {
              "http://schema.org/name": "Orie Steele",
              "http://schema.org/url": {"@id": "https://transmute.industries"}
            }
      - name: Review the framed document
        run: |-
          echo '${{ steps.frame.outputs.json }}' >> framed.json;
          cat ./framed.json | jq
```

## Develop

```bash
npm i
npm t
```