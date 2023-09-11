.PHONY: full build build-npm test test-npm lint fix watch watch-npm clean

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Build the project
build: build-npm

build-npm:
	[ -d node_modules ] || npm install
	npm run build

## Test the project
test: test-npm

test-npm:
	[ -d node_modules ] || npm install
	npm run test

## Lint the project
lint:

## Fix the project
fix:

## Watch the project
watch: build-npm
	make -j1 watch-npm

watch-npm:
	[ -d node_modules ] || npm install
	npm run watch

## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"
