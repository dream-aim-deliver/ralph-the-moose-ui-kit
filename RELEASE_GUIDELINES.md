# Release Process
> For maintainers of this repository


The repository strictly follows [semantic versioning](https://semver.org/).

You can make a release using the CI or manually via the command line.

If the repository is private, you should consider using the manual release process.


# Configure CI Release

There are two Github Actions that are used to automate the release process:
- `npm-publish.yml` - This action is used to publish the package to NPM.

> **NOTE**: Please change the triggers for these actions to enable/disable the CI release process.

Please go through both the actions and 

# Prepare for Release
Before you release a new version, please make sure you have done the following:
- [ ] Update the `package.json` file with the new version number.
- [ ] Update the `README.md` file with the new version number.
- [ ] Make sure the main branch is up to date with the latest changes.
- [ ] Make update the test coverage thresholds.
- [ ] Make sure the main branch is passing all the tests.
    ```bash
    npm run lint
    npm run format
    npm run test
    npm run build
    ```

Once done, please commit the changes with the updated version number and push to the main branch.

The commit message should be in the following format:
```
Prepare Release: <version>
```

The version should follow [semantic versioning](https://semver.org/).

# CI Release
Create a new Release on Github. Remember to create a new release tag. When you create a new release in GitHub, the CI will automatically publish the package to NPM.
> **NOTE**: This process is only for public repositories.

# Manual Release
> **NOTE**: This process is only for private repositories.

Update your `package.json` to the next version number and tag a release. 

If you are publishing to a private registry such as GitHub packages, update your `package.json` to include `publishConfig` and `repository`:

package.json:
```json
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@MyOrg"
  },
  "repository": "https://github.com/MyOrg/mylib.git",
```

For clean builds, you may want to install the `rimraf` package and add a `clean` or `prebuild` script to your `package.json` to remove any artifacts from your `dist/` folder.  Or, manually delete the `dist/` folder yourself.  Unless you are using a continuous integration service such as GitHub Actions, `npm publish` will ship anything inside the distributable folder.

package.json:
```json
  "scripts": {
    "clean": "rimraf dist"
  }
```

Before you submit for the first time, make sure your package name is available by using `npm search`.  If npm rejects your package name, update your `package.json` and resubmit.

```bash
npm search <term>
```

Once ready to submit your package to the NPM Registry, execute the following tasks via `npm` (or `yarn`):

```bash
npm run build
```

Assure the proper npm login:

```bash
npm login
```

Submit your package to the registry:

> **NOTE**: If you are using a private registry such as GitHub packages, you will need to add the `--registry` flag to the `npm publish` command and use `--access restricted` argument.

```bash
npm publish --access public
```