<h1 align="center">
	<img src="banner.png" alt="Banner" width="800px">
	<br>
	<br>
</h1>

<br>
<br>

<p align="center">
  Serves Swagger Editor over local spec files and updates on every change.
<br>
<br>

<a href="https://david-dm.org/Beakyn/bkn-specs-editor" title="dependencies status">
	<img src="https://david-dm.org/Beakyn/bkn-specs-editor/status.svg"/>
</a>

<a href="https://david-dm.org/Beakyn/bkn-specs-editor?type=dev" title="devDependencies status">
	<img src="https://david-dm.org/Beakyn/bkn-specs-editor/dev-status.svg"/>
</a>

<a href="LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="MIT License">
</a>

</p>
<br>

---

### Usage

#### API

```sh
# Using npm
npm install bkn-specs-editor

# Using yarn
yarn add bkn-specs-editor
```

##### `liveEditorServer(port)`

**Receives**:

- `port`: `number`

> An available port to start listening on (defaults to `3001`).

**Does**: Enables live editing of the Swagger API file on the selected port.

#### CLI

```sh
# Using npm
npm install -g bkn-specs-editor

# Using yarn
yarn add global bkn-specs-editor
```

##### `$ bkn-specs-editor --port`

**Receives**:

- `port`: `number`

> An available port to start listening on (defaults to `3001`).

**Does**: Enables live editing of the Swagger API file on the selected port.

### License

This project is licensed under the terms of the
[MIT license](https://github.com/Beakyn/bkn-ui-react/blob/master/LICENSE)
