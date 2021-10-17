# cloudflare-workers-typescript-esm-template

A batteries included template for kick-starting a TypeScript Cloudflare worker project with support for Durable Objects
and routing out-of-the-box.

## Note: You must use [wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) 1.19 or newer to use this template.

## ▶️ Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already
familiar with the tool, we recommend that you install the tool and configure it to work with
your [Cloudflare account](https://dash.cloudflare.com). Documentation can be
found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

To generate using Wrangler, run this command:

```bash
wrangler generate my-ts-project https://github.com/cloudflare/worker-typescript-template
```

### 👩 💻 Developing

[`src/index.ts`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return
the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### 🧪 Testing

This template comes with jest tests which simply test that the request handler can handle each request
method. `yarn test` will run your tests.

### ✏️ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `yarn format`.

### 👀 Previewing and Publishing

For information on how to preview and publish your worker, please see
the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## 🤢 Issues

If you run into issues with this specific project, please feel free to file an
issue [here](https://github.com/cloudflare/worker-typescript-template/issues). If the problem is with Wrangler, please
file an issue [here](https://github.com/cloudflare/wrangler/issues).

## ✨ How does this template differ from the rest?

This template takes an opinionated approach to configuring a workers project through the following changes:

- `yarn` instead of `npm`
- `itty-router` out-of-the-box
- ES Modules to support Durable Objects
- Prettier formatting (statements should end in semicolons!)