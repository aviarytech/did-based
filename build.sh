#!/usr/bin/env bash

set -e

rm -rf .build
mkdir -p ./.build

ENTRYPOINTS=$(find *.ts)

esbuild $ENTRYPOINTS \
	--log-level=warning \
	--outdir='./.build' \
	--outbase=. \
	--sourcemap \
	--target='node16' \
	--platform='node' \
	--format='cjs'

