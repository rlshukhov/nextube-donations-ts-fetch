#!/usr/bin/env bash

openapi-generator generate -i https://backend.donate.nextube.ru/static/swagger/schemes/swagger.json -g typescript-fetch -o ./
