# Github Workflow Action 

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/nolte/gh-action-workflow-test)

This is a Test Repo for a [Github Workflow Action](https://help.github.com/en/actions/reference/workflow-syntax-for-github-actions) Release and Development Process.


## Repostiory Structure

Each branch as a "partner" branch with the postfix ```-dist``` for the generated build artefacts. 
For Example, it exist a permanent ```develop``` Branch with the Source, after checkin a GitHub Workflow build the ```Action JS``` file, with [@zeit/ncc](https://github.com/zeit/ncc), The final Build Artefact and the ```action.yml``` will be copy to the ```develop-dist``` Branch.

```yaml
...
    - name: test step
      uses: nolte/gh-action-workflow-test@develop-dist
...
```

## Releasing

For the Release we use [c4urself/bump2version](https://github.com/c4urself/bump2version).

## Local build

```bash
docker run --rm \
  -v $(pwd):/src \
  node:alpine3.11 npm package
```
